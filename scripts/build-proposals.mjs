import { copyFile, cp, mkdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = fileURLToPath(new URL('../', import.meta.url))
const proposal = 'Odontologa-KathyM'
const source = path.join(root, proposal)
const target = path.join(root, 'dist', proposal)

// Publish only the page and its assets, not internal notes or deployment files.
await mkdir(target, { recursive: true })
for (const file of ['index.html', 'styles.css', 'content.js', 'app.js']) {
  await copyFile(path.join(source, file), path.join(target, file))
}
await cp(path.join(source, 'assets'), path.join(target, 'assets'), { recursive: true })

const html = await readFile(path.join(target, 'index.html'), 'utf8')
const headers = await readFile(path.join(root, 'dist/_headers'), 'utf8')
if (!html.includes('noindex') || !headers.includes(`/${proposal}/*`)) {
  throw new Error('The proposal must retain its noindex directives before deployment.')
}
console.log(`Proposal published in build: /${proposal}/`)
