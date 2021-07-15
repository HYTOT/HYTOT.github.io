import * as fs from 'fs'
import { Path } from './src/types/path'
import { RegExp } from './src/utils/regExp'
import { WordElement, ExplanationElement, SentenceElement } from './src/utils/elements'

const { STATICS_DIR, WORD_INPUT_FILE, CSS_INPUT_FILE } = Path

// 监听样式文件夹变化，编译相关预处理样式表
fs.watch('./src/styles/', {
  recursive: true
}, ((event:'rename' | 'change', filename:string) => {
  if (event === 'change' && RegExp.lessFile.test(filename)) {
    console.log('正在编译样式！')
    const { exec } = require('child_process')
    exec && exec('yarn style')
  }
}))

// 读取记录单词的 md文件 和 编译生成的 css样式文件
const fileContent:string = fs.readFileSync(WORD_INPUT_FILE, 'utf-8')
const styleSheet:string = fs.readFileSync(CSS_INPUT_FILE, 'utf-8')
console.log('已读取单词文件！')

const vocabularies:Array<string> = fileContent.replace(RegExp.tabAndLine, '').split(/——/)

// 数量统计变量
let [totalWords, totalExplanations, totalSentences] = [0, 0, 0]

// 生成 HTML
const generateHTML = (arr:Array<string>) => {
  const htmlNodes:Array<string> = arr.map((node:string) => {
    const row:Array<string> = node.split(RegExp.doubleWhitespace)
    const innerHTML:string = row.map((item:string) => {
      if (/^\*/.test(item)) {
        return WordElement(++totalWords, `${item.replace(/[\*]/g, '')}`)
      } else if (/^\(/.test(item)) {
        ++totalExplanations
        return ExplanationElement('Word explanation:', `${item.replace(/[\(\)]/g, '')}`)
      } else if (/^\★/.test(item)) {
        ++totalSentences
        return SentenceElement('Example sentence:', `${item.replace(/★ /g, '')}`)
      } else {
        return item
      }
    }).join('')
    return `<div class="item">${innerHTML}</div>`
  })
  const htmlHead:string = `
    <head>
      <title>Vocabularies</title>
      <link rel="stylesheet" type="text/css" href="${STATICS_DIR}index.css">
    </head>
  `.replace(RegExp.tabAndLine, '').replace(RegExp.doubleWhitespace, '')
  const htmlBody:string = `
    <body>
      <div class="item-list">${htmlNodes.join('')}</div>
      <script>window.vocabularies=${JSON.stringify(htmlNodes)}</script>
    </body>
  `.replace(RegExp.tabAndLine, '').replace(RegExp.doubleWhitespace, '')
  console.log(`共收录 ${totalWords} 个词汇，${totalExplanations} 条释义，${totalSentences} 个例句！`)
  return {
    htmlHead,
    htmlBody,
  }
}

const { htmlHead, htmlBody } = generateHTML(vocabularies)

const generateToRoot = () => {
  fs.existsSync(`${STATICS_DIR}`) || fs.mkdirSync(`${STATICS_DIR}`)
  fs.writeFile(`${STATICS_DIR}/index.css`, `${styleSheet.replace(RegExp.tabAndLine, '').replace(RegExp.doubleWhitespace, '')}`, () => {})
  console.log('已生成网页样式！')
  fs.writeFile('./index.html', `<!DOCTYPE html><html>${htmlHead}${htmlBody}</html>`, () => {})
  console.log('已根据单词文件生成网页！')
}

generateToRoot()
