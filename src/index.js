const styleSheet = require('supportCSSStyleSheet')
const svg = require('svg')
module.exports = ({name, path, theme}) => {
    function layout(style) {
        const icon = document.createElement('i-icon')
        const root = icon.attachShadow({mode: 'open'})
        const url = path ? path : './src/svg'
        const img = svg(`${url}/${name}.svg`)
        styleSheet(root, style)
        root.append(img)
        return icon
    }
    // insert CSS style
    const customStyle = theme ? theme.style : ''
    // set CSS variables
    if (theme && theme.props) {
        var { fill, size } = theme.props
    }
    const style = `
    :host(i-icon) {
        display: grid;
        justify-content: center;
        align-items: center;
    }
    :host(i-icon) span {
        --size: ${size ? size : '20px'};
        display: inline-block;
        width: var(--size);
        height: var(--size);
    }
    :host(i-icon) svg {
        width: 100%;
        height: auto;
    }
    :host(i-icon) svg g {
        --fill: ${fill ? fill : 'var(--primary-color)'};
        fill: hsl(var(--fill));
    }
    ${customStyle}
    `
    return layout(style)
}
