const style_sheet = require('support-style-sheet')
const svg = require('svg')
const message_maker = require('message-maker')

var id = 0

module.exports = ({name, path, is_shadow = false, theme}, parent_protocol) => {
// ---------------------------------------------------------------
    const myaddress = `icon-${id++}`
    const inbox = {}
    const outbox = {}
    const recipients = {}
    const message_id = to => ( outbox[to] = 1 + (outbox[to]||0) )

    const {notify, address} = parent_protocol(myaddress, listen)
    const make = message_maker(myaddress)
    let message = make({ to: address, type: 'ready', refs: ['old_logs', 'new_logs'] })
    notify(message)

    function listen (msg) {
        const {head, refs, type, data, meta } = msg
        inbox[head.join('/')] = msg                  // store msg
        const [from, to, msg_id] = head       
    }
 // ---------------------------------------------------------------   
    const url = path ? path : './src/svg'
    const symbol = svg(`${url}/${name}.svg`)
    if (is_shadow) {
        function layout (style) {
            const icon = document.createElement('i-icon')
            const shadow = icon.attachShadow({mode: 'closed'})
            const slot = document.createElement('slot')
            slot.name = 'icon'
            style_sheet(shadow, style)
            slot.append(symbol)
            shadow.append(slot)
            return icon
        }
        // insert CSS style
        const custom_style = theme ? theme.style : ''
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
        ${custom_style}
        `
        return layout(style)
    }

    return symbol
}
