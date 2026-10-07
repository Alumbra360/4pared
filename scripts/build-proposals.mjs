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
if (!html.includes('content="index, follow"')) {
  throw new Error('The proposal must retain the approved indexing policy.')
}
console.log(`Proposal published in build: /${proposal}/`)
