import fs from 'fs'
import path from 'path'

const root = process.cwd()
const getPath = (...args) => path.resolve(root, ...args)

for (const style of fs.readdirSync(getPath('icons'))) {
  const styleDir = fs.readdirSync(getPath('icons', style))
  const newDir = getPath('components', style)
  if (!fs.existsSync(newDir)) fs.mkdirSync(newDir)
  for (const name of styleDir) {
    const text = fs.readFileSync(getPath('icons', style, name)).toString()
    const newName = name.slice(0, -4)
    const prefix = style === 'outlined' ? '' : `-${style}`
    fs.writeFileSync(getPath('components', style, `${newName}.js`), `import { define } from '../../element.js';\ndefine('ms${prefix}-${newName}', '${text}');`)
    console.log(`${style}/${name}`)
  }
}