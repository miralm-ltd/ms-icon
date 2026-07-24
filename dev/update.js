import fs from 'fs'
import path from 'path'

const root = process.cwd()
const keys = JSON.parse(fs.readFileSync(path.join(root, './dev/keys.json'), 'utf8'))
const styles = fs.readdirSync(path.join(root, './icons'))

async function run() {
  for (const index in keys) {
    const name = keys[index]
    for (const style of styles) {
      const outlinePath = path.join(root, `./icons/${style}/${name}.svg`)
      const fillPath = path.join(root, `./icons/${style}/${name}-fill.svg`)
      if (fs.existsSync(fillPath) && fs.existsSync(outlinePath)) continue
      const defUrl = `https://fonts.gstatic.com/s/i/short-term/release/materialsymbols${style}/${name}/default/24px.svg`
      const fillUrl = `https://fonts.gstatic.com/s/i/short-term/release/materialsymbols${style}/${name}/fill1/24px.svg`
      const [def, fill] = await Promise.all([fetch(defUrl), fetch(fillUrl)])
      if (def.status === 200 && fill.status === 200) {
        const defText = await def.text()
        const fillText = await fill.text()
        fs.writeFileSync(outlinePath, defText.replace(' width="24"', '').replace(' height="24"', ''))
        if (defText !== fillText) {
          fs.writeFileSync(fillPath, fillText.replace(' width="24"', '').replace(' height="24"', ''))
        }
      } else {
        console.error(`Error: ${name}/${style}, def:${def.status}, fill:${fill.status}`)
      }
    }
    console.log(`completion rate ${index}/${keys.length} ${name}`)
  }
  console.log('all completed')
}

run()