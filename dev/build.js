import fs from 'fs'
import path from 'path'

const root = process.cwd()
const getPath = (...args) => path.resolve(root, ...args)

for (const style of fs.readdirSync(getPath('icons'))) {
  const styleDir = fs.readdirSync(getPath('icons', style))
  const newDir = getPath('components', style)
  if (!fs.existsSync(newDir)) fs.mkdirSync(newDir)
  const all = {
    def: `import { options as o } from '../../main.js'\n`,
    fill: `import { options as o } from '../../main.js'\n`
  }
  for (const name of styleDir) {
    const text = fs.readFileSync(getPath('icons', style, name)).toString()
    const newName = name.slice(0, -4)
    const isFill = newName.endsWith('-fill')
    const prefix = style === 'outlined' ? '' : `${style}/`
    const match = text.match(/<path\b[^>]*\bd\s*=\s*(["'])(.*?)\1/i)
    const d = match?.[2]
    fs.writeFileSync(getPath('components', style, `${newName}.js`), `import { options } from '../../main.js'\noptions.icons['${prefix}${newName}']='${d}'`)
    all[isFill ? 'fill' : 'def'] += `o.icons['${prefix}${newName}']='${d}'\n`
    console.log(`${style}/${name}`)
  }
  fs.writeFileSync(getPath('components', `${style}.js`), all.def)
  fs.writeFileSync(getPath('components', `${style}-fill.js`), all.fill)
}