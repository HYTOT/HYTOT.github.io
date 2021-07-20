export const WordElement = (id:number, word:string) => `
  <div class="item-row word">
    <div class="word-id">${id}</div>
    ${word}
  </div>
`

export const WordBackSideElement = (label:string, value:string, style:string = 'color: #27ae60;') => `
  <div class="item-row word-back" style="${style}">
    <div class="label">${label}</div>
    <div class="value">${value}</div>
  </div>
`

export const ExplanationElement = (label:string, value:string) => `
  <div class="item-row explanation">
    <div class="label">${label}</div>
    <div class="value">${value}</div>
  </div>
`

export const SentenceElement = (label:string, value:string) => `
  <div class="item-row sentence">
    <div class="label">${label}</div>
    <div class="value">${value}</div>
  </div>
`
