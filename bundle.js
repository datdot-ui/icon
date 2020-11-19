(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const svg = require('..')

const iconCheck = svg( {path: 'assets/check.svg' })
const iconMinus = svg( {path: 'assets/minus.svg' })
const iconPlus = svg( {path: 'assets/plus.svg' })
const iconCancel = svg( {path: 'assets/cancel.svg' })
const iconArrowDown = svg( {path: 'assets/arrow-down.svg' })
const iconArrowLeft = svg( {path: 'assets/arrow-left.svg' })
const iconTriangleArrowLeft = svg( {path: 'assets/triangle-arrow-left.svg' })
const iconOption = svg( {path: 'assets/option.svg' })
document.body.append(iconCheck, iconMinus, iconPlus, iconCancel, iconArrowDown, iconArrowLeft, iconTriangleArrowLeft, iconOption)
},{"..":2}],2:[function(require,module,exports){
module.exports = svg

function svg(opts) {
    var { css = null, path }  = opts
    
    const el = document.createElement('div')
    
    async function load(done) {
        const res = await fetch(path)
        const parse = document.createElement('div')

        if (res.status == 200) {
            let graphic = await res.text()
            parse.innerHTML = graphic
            return done(null, parse.children[0])
        }
        throw new Error(res.status)
    }

    load((err, svg) => {
        if (err) console.error(err)
        if (css) el.className = css
        el.append(svg)
    })
    
    return el
}   
},{}]},{},[1]);
