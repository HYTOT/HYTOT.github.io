export const WordElement = (word:string, topLeft?:number, bottomLeft?:number, bottomRight?:number) => `
  <div class="item-row word">
    ${topLeft ? '<div class="word-top-left">'+topLeft+'</div>' : ''}
    ${word}
    ${bottomLeft ? '<div class="word-bottom-left">'+bottomLeft+'</div>' : ''}
    ${bottomRight ? '<div class="word-bottom-right">'+bottomRight+'</div>' : ''}
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
