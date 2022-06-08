const svg = require('svg')
const protocol_maker = require('protocol-maker')

var id = 0
const sheet = new CSSStyleSheet()
const default_opts = { 
	name: 'icon',
	path: './src/svg',
	theme: get_theme()
}
sheet.replaceSync(default_opts.theme)

module.exports = icon

icon.help = () => { return { opts: default_opts } }

function icon (opts, parent_wire ) {
    const { name = default_opts.name, path = default_opts.path, theme = `` } = opts
    const current_state = { opts: { name, path, sheets: [default_opts.theme, theme] } }

    // protocol
    const initial_contacts = { 'parent': parent_wire }
    const contacts = protocol_maker('icon', listen, initial_contacts)
    function listen (msg) {
        const { head, refs, type, data, meta } = msg // receive msg
        const [from, to, msg_id] = head
        const $from = contacts.by_address[from]
        if (type === 'help') {
            $from.notify($from.make({ to: $from.address, type: 'help', data: { state: get_current_state() }, refs: { cause: head }}))
        }
        if (type === 'update') handle_update(data)
    }

    // make icon 
    const icon = document.createElement('i-icon')
    const shadow = icon.attachShadow({mode: 'closed'})
    const slot = document.createElement('slot')

    slot.name = 'icon'
    const symbol = svg(`${path}/${name}.svg`)
    slot.append(symbol)
    slot.onclick = (e) => handle_click(e)
    
    
    const custom_theme = new CSSStyleSheet()
    custom_theme.replaceSync(theme)
    shadow.adoptedStyleSheets = [sheet, custom_theme]
    
    shadow.append(slot)
    
    return icon

    // event handlers
    function handle_click (e) {
        const $parent = contacts.by_name['parent']
        $parent.notify($parent.make({ to: $parent.address, type: 'click', data: {}}))
    }
    function handle_update (data) {
        const { sheets } = data
        if (sheets) {
            const new_sheets = sheets.map(sheet => {
            if (typeof sheet === 'string') {
                current_state.opts.sheets.push(sheet)
                const new_sheet = new CSSStyleSheet()
                new_sheet.replaceSync(sheet)
                return new_sheet
                } 
                if (typeof sheet === 'number') return shadow.adoptedStyleSheets[sheet]
            })
            shadow.adoptedStyleSheets = new_sheets
        }
    }
    
    // get current state
	function get_current_state () {
		return  {
			opts: current_state.opts,
			contacts
		}
	}
}

function get_theme () {
    return `
    :host(i-icon) {
        --b: 0, 0%;
        --color-black: var(--b); 0%;
        --primary-color: var(--color-black);
        --size: 24px;
        --fill: var(--primary-color);
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
    `
}

