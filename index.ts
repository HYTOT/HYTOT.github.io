import * as fs from 'fs'
import { exec } from 'child_process'
import { Path } from './src/types/path'
import { RegExp } from './src/utils/regExp'
import { WordElement, WordBackSideElement } from './src/utils/elements'

const { STATICS_DIR, TEM8_WORD_INPUT_FILE, CSS_INPUT_FILE } = Path

let compilingCSS = false

// 监听样式文件夹变化，编译相关预处理样式表
fs.watch('./src/styles/', {
  recursive: true
}, ((event:'rename' | 'change', filename:string) => {
  if (!compilingCSS && event === 'change' && RegExp.lessFile.test(filename)) {
    console.log('正在编译样式！')
    compilingCSS = true
    exec('yarn style', () => generateStyleSheets())
  }
}))

// 读取记录单词的 md文件
const fileContent:string = fs.readFileSync(process.env.INPUT_FILE || TEM8_WORD_INPUT_FILE, 'utf-8')
console.log('已读取单词文件！')

const vocabularies:Array<string> = fileContent.replace(RegExp.tabAndLine, '').split(/——/)

// 数量统计变量
let [totalWords, totalWordDetails1, totalWordDetails2] = [0, 0, 0]

const logTips = () => {
  let tips:string
  switch (process.env.INPUT_FILE) {
    case './src/tem8.md':
      tips = `共收录 ${totalWords} 个词汇，${totalWordDetails1} 条释义，${totalWordDetails2} 个例句！`
      break
    case './src/advanced.md':
      tips = `共收录 ${totalWords} 个基本词汇，${totalWordDetails2} 个相应高阶词汇！`
      break
    default:
      tips = ''
      break
  }
  console.log(tips)
}

// 生成 HTML
const generateHTML = (arr:Array<string>) => {
  const htmlNodes:Array<string> = arr.map((node:string) => {
    const row:Array<string> = node.split(RegExp.doubleWhitespace)
    let [rowDetails1, rowDetails2] = [
      row.filter((item:string) => /^\(/.test(item)).length,
      row.filter((item:string) => /^\★/.test(item)).length
    ]
    const innerHTML:string = row.map((item:string) => {
      if (/^\*/.test(item)) {
        return WordElement(`${item.replace(/[\*]/g, '')}`, ++totalWords, rowDetails1, rowDetails2)
      } else if (/^\(/.test(item)) {
        ++totalWordDetails1
        return WordBackSideElement('Word explanation:', `${item.replace(/[\(\)]/g, '')}`, 'color: #27ae60;')
      } else if (/^\★/.test(item)) {
        ++totalWordDetails2
        const wordDetails:string = item.replace(/★ /g, '')
        const [label, value, style]:Array<string> = process.env.INPUT_FILE === './src/tem8.md'
          ? ['Example sentence:', `${wordDetails}`, 'color: #2980b9;']
          : ['', `${wordDetails}`, 'color: #27ae60; text-align: center;']
        return WordBackSideElement(label, value, style)
      } else {
        return item
      }
    }).join('')
    return `<div class="item">${innerHTML}</div>`
  })
  const htmlHead:string = `
    <head>
      <title>Vocabularies</title>
      <link rel="stylesheet" type="text/css" href="${STATICS_DIR}index.css"/>
      <link rel="icon" href="${STATICS_DIR}favicon.ico"/>
    </head>
  `.replace(RegExp.tabAndLine, '').replace(RegExp.doubleWhitespace, '')
  const htmlBody:string = `
    <body>
      <div class="item-list">${htmlNodes.join('')}</div>
      <script>window.vocabularies = Array.from(document.getElementsByClassName('item'))</script>
    </body>
  `.replace(RegExp.tabAndLine, '').replace(RegExp.doubleWhitespace, '')
  logTips()
  return {
    htmlHead,
    htmlBody,
  }
}

const { htmlHead, htmlBody } = generateHTML(vocabularies)

const generateToRoot = () => {
  generateStyleSheets()
  fs.writeFile('./index.html', `<!DOCTYPE html><html>${htmlHead}${htmlBody}</html>`, () => {})
  console.log('已根据单词文件生成网页！')
}

const generateStyleSheets = () => {
  // 读取编译生成的 css样式文件
  const styleSheet:string = fs.readFileSync(CSS_INPUT_FILE, 'utf-8')
  compilingCSS = false
  fs.existsSync(`${STATICS_DIR}`) || fs.mkdirSync(`${STATICS_DIR}`)
  fs.writeFile(`${STATICS_DIR}/index.css`, `${styleSheet.replace(RegExp.tabAndLine, '').replace(RegExp.doubleWhitespace, '')}`, () => {})
  console.log('已生成网页样式！')
}

generateToRoot()
