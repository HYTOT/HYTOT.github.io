export const WordElement = (id:number, word:string) => `
  <div class="item-row word">
    <div class="word-id">${id}</div>
    ${word}
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
