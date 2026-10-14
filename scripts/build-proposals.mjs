import { copyFile, cp, mkdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = fileURLToPath(new URL('../', import.meta.url))
const proposal = 'Odontologa-KathyM'
const source = path.join(root, proposal)
const target = path.join(root, 'dist', proposal)

// Publish only the page and its assets, not internal notes or deployment files.
await mkdir(target, { recursive: true })
for (const file of ['index.html', 'styles.css', 'content.js', 'app.js', 'journey.css', 'journey.js', 'analytics.css', 'analytics.js']) {
  await copyFile(path.join(source, file), path.join(target, file))
}
await cp(path.join(source, 'assets'), path.join(target, 'assets'), { recursive: true })

const html = await readFile(path.join(target, 'index.html'), 'utf8')
if (!html.includes('content="index, follow"')) {
  throw new Error('The proposal must retain the approved indexing policy.')
}
console.log(`Proposal published in build: /${proposal}/`)

// Keep the content plan available at its public subdirectory.
const plan = 'planes/creacion-contenido'
const planTarget = path.join(root, 'dist', plan)
await mkdir(planTarget, { recursive: true })
for (const file of ['index.html', 'styles.css']) {
  await copyFile(path.join(root, plan, file), path.join(planTarget, file))
}
await cp(path.join(root, plan, 'assets'), path.join(planTarget, 'assets'), { recursive: true })
console.log(`Content plan published in build: /${plan}/`)
