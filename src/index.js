const styleSheet = require('supportCSSStyleSheet')
const svg = require('svg')

module.exports = ({name, path, isRoot = true, theme}) => {
    const url = path ? path : './src/svg'
    const symbol = svg(`${url}/${name}.svg`)
    // if not use shadowDOM return icon that support hover effect
    if (!isRoot) return symbol

    /* use closed mode of shadwoDOM is not allowed to catch shadowDOM elemnt, 
       and any element cannot support customizing :hover style when parent triggered hover
    */
    function layout(style) {
        const icon = document.createElement('i-icon')
        const root = icon.attachShadow({mode: 'closed'})
        const slot = document.createElement('slot')
        slot.name = 'icon'
        styleSheet(root, style)
        slot.append(symbol)
        root.append(slot)
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
        --size: ${size ? size : '24px'};
        --fill: ${fill ? fill : 'var(--primary-color)'};
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
    ${customStyle}
    `
    return layout(style)
}
