import * as fs from 'fs'
import { Path } from './src/types/path'

const { WORD_INPUT_FILE, CSS_INPUT_FILE } = Path

// fs.rmSync(FOLDER, {
//   recursive: true,
//   force: true,
// })
// console.log('\n旧文件夹已移除！')

// fs.mkdirSync(FOLDER)
// console.log('\n新文件夹已创建！')

fs.watch('./src/styles/', {
  recursive: true
}, (() => {
  const { exec } = require('child_process')
  exec && exec('yarn style')
}))

let fileContent:string = fs.readFileSync(WORD_INPUT_FILE, 'utf-8')
let styleSheet:string = fs.readFileSync(CSS_INPUT_FILE, 'utf-8')
console.log('\n已读取文件内容！')

const vocabularies:Array<string> = fileContent.replace(/[\r\n]/g, '').split(/——/)
const htmlNodes:Array<string> = vocabularies.map((node:string) => {
  const row:Array<string> = node.split(/[ ]{2}/g)
  const innerHTML:string = row.map((item:string) => {
    if (/^\*/.test(item)) {
      return `<div class="item-row word">${item.replace(/[\*]/g, '')}</div>`
    } else if (/^\(/.test(item)) {
      return `<div class="item-row explanation"><span class="label">Word explanation:</span>${item.replace(/[\(\)]/g, '')}</div>`
    } else if (/^\★/.test(item)) {
      return `<div class="item-row sentence"><span class="label">Example sentence:</span>${item.replace(/★ /g, '')}</div>`
    } else {
      return item
    }
  }).join('')
  return `<div class="item">${innerHTML}</div>`
})
const htmlHead:string = `<head>
    <title>Vocabularies</title>
    <link rel="stylesheet" type="text/css" href="index.css">
  </head>
`.replace(/[\r\n]/g, '').replace(/[ ]{2,}/g, '')
const htmlBody:string = `<body>${htmlNodes.join('')}</body>`

// fs.writeFileSync(WORD_OUTPUT_FILE, `<!DOCTYPE html><html>${htmlHead}${htmlBody}</html>`)
// fs.writeFileSync(CSS_OUTPUT_FILE, `${styleSheet.replace(/[\r\n]/g, '').replace(/[ ]{2,}/g, '')}`)
fs.writeFile('./index.html', `<!DOCTYPE html><html>${htmlHead}${htmlBody}</html>`, () => {})
fs.writeFile('./index.css', `${styleSheet.replace(/[\r\n]/g, '').replace(/[ ]{2,}/g, '')}`, () => {})
console.log('\n已根据文件内容生成网页！')
