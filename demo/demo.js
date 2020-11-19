const svg = require('..')
const csjs = require('csjs-inject')
const css = csjs`
.icon {}
.check path {stroke: #009B36;}
.cancel path {stroke: #FF004E;}
.minus {}
.plus {}
.arrow-down {}
.arrow-left {}
.triangle-arrow-left g {fill: #FFA700;}
.triangle-arrow-left path {stroke: #FFA700;}
.option g {fill: #888;}
`
const iconCheck = svg( {css: `${css.icon} ${css.check}`, path: 'assets/check.svg' })
const iconCancel = svg( {css: `${css.icon} ${css.cancel}`, path: 'assets/cancel.svg' })
const iconMinus = svg( {css: `${css.icon} ${css.minus}`, path: 'assets/minus.svg' })
const iconPlus = svg( {css: `${css.icon} ${css.plus}`, path: 'assets/plus.svg' })
const iconArrowDown = svg( {css: `${css.icon} ${css['arrow-down']}`, path: 'assets/arrow-down.svg' })
const iconArrowLeft = svg( {css: `${css.icon} ${css['arrow-left']}`, path: 'assets/arrow-left.svg' })
const iconTriangleArrowLeft = svg( {css: `${css.icon} ${css['triangle-arrow-left']}`, path: 'assets/triangle-arrow-left.svg' })
const iconOption = svg( {css: `${css.icon} ${css.option}`, path: 'assets/option.svg' })


document.body.append(iconCheck, iconCancel, iconMinus, iconPlus, iconArrowDown, iconArrowLeft, iconTriangleArrowLeft, iconOption)