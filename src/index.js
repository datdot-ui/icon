const styleSheet = require('supportCSSStyleSheet')
const svg = require('svg')
module.exports = ({name, path, theme}) => {
    function layout(style) {
        const icon = document.createElement('i-icon')
        const root = icon.attachShadow({mode: 'closed'})
        const url = path ? path : './src/svg'
        const img = svg(`${url}/${name}.svg`)
        const slot = document.createElement('slot')
        slot.name = 'icon'
        styleSheet(root, style)
        slot.append(img)
        root.append(slot)
        return icon
    }
    // insert CSS style
    const customStyle = theme ? theme.style : ''
    // set CSS variables
    if (theme && theme.props) {
        var { fill, fillHover, size } = theme.props
    }
    const style = `
    :host(i-icon) {
        --size: ${size ? size : '20px'};
        --fill: ${fill ? fill : 'var(--primary-color)'};
        --fillHover: ${fillHover ? fillHover : 'var(--color-greyA2)'};
        display: block;
    }
    slot[name='icon'] {
        display: grid;
        justify-content: center;
        align-items: center;
    }
    slot[name='icon'] span {
        display: block;
        width: var(--size);
        height: var(--size);
    }
    slot[name='icon'] svg {
        width: 100%;
        height: auto;
    }
    slot[name='icon'] g {
        fill: hsl(var(--fill));
        transition: fill .3s ease-in-out;
    }
    slot[name='icon']:hover g {
        fill: hsl(var(--fillHover));
    }
    ${customStyle}
    `
    return layout(style)
}
