const bel = require('bel')
const csjs = require('csjs-inject')
const Icon = require('..')
// icons
const iconCheck = Icon({name: 'check', 
theme: {
    style: `
    :host(i-icon) span {
        padding: 4px;
        background-color: hsl(var(--color-greyF2));
    }
    :host(i-icon) svg g { 
        --fill: var(--color-amaranth-pink);
        stroke-width: 1;
        stroke: hsl(var(--color-amaranth-pink));
    };
    ` ,
    props: {
        //  fill: 'var(--color-persian-rose)',
        // size: '8rem'
    }
}})
const iconCross = Icon({name: 'cross', theme: { props: { fill: 'var(--color-red)'}}})
const iconMinus = Icon({name: 'minus', theme: { props: { fill: 'var(--color-yellow)'}}})
const iconPlus = Icon({name: 'plus', theme: { props: { fill: 'var(--color-green)'}}})
const iconUp = Icon({name: 'arrow-up', theme: { props: { fill: 'var(--color-purple)'}}})
const iconDown = Icon({name: 'arrow-down', theme: { props: { fill: 'var(--color-purple)'}}})
const iconLeft = Icon({name: 'arrow-left', theme: { props: { fill: 'var(--color-purple)'}}})
const iconRight = Icon({name: 'arrow-right', theme: { props: { fill: 'var(--color-purple)'}}})
const iconPlay = Icon({name: 'play', theme: { props: { fill: 'var(--color-orange)'}}})
const iconPause = Icon({name: 'pause', theme: { props: { fill: 'var(--color-orange)'}}})
const iconStop = Icon({name: 'stop', theme: { props: { fill: 'var(--color-orange)'}}})
const iconOption = Icon({name: 'option', theme: { props: { fill: 'var(--color-black)'}}})
const iconHide = Icon({name: 'hide', theme: { props: { fill: 'var(--color-grey88)'}}})
const iconShow = Icon({name: 'show', theme: { props: { fill: 'var(--color-blue)'}}})
const iconTransfer = Icon({name: 'transfer', isShadow: false, path: './svg'})
const iconEdit = Icon({name: 'edit'})
const iconImport = Icon({name: 'import'})
const iconFilter = Icon({name: 'filter'})
const iconHelp = Icon({name: 'help'})
const iconLineChart = Icon({name: 'linechart'})
const iconTreemap = Icon({name: 'treemap'})
const iconSortUp = Icon({name: 'sort-up'})
const iconSortDown = Icon({name: 'sort-down'})
const iconPin = Icon({name: 'pin'})
const iconList = Icon({name: 'list', })
const iconRemove = Icon({name: 'remove'})
const iconTrash = Icon({name: 'trash'})
const iconSearch = Icon({name: 'search'})
const iconActivity = Icon({name: 'activity'})
const iconAction = Icon({name: 'action'})
const iconPlanList = Icon({name: 'plan-list'})
// sub-step
const iconStepConfirm = Icon({name: 'step-confirm', theme: { props: { size: '30px' }} })
const iconStepCancel = Icon({name: 'step-cancel', theme: { props: { size: '30px' }} })
// transfer event
const iconEventTransfer = Icon({name: 'event-transfer', theme: { props: { size: '40px' }} })
const iconEventPending = Icon({name: 'event-pending', theme: { props: { size: '40px' }} })
const iconEventCancel = Icon({name: 'event-cancel', theme: { props: { size: '40px' }} })
const iconEventTo = Icon({name: 'event-to', theme: { props: { size: '40px' }} })
// notify
const iconWarning = Icon({name: 'warning', theme: { props: { size: '40px' }}})
const iconNotice = Icon({name: 'notice', theme: { props: { size: '40px' }}})

function demoApp () {
    const app = bel`
    <div class=${css.app}>
        <section>
            <h2>Action bar</h2>
            <aside>
                <span>${iconActivity} activity</span>
                <span>${iconPlanList} plan-list</span>
                <span>${iconLineChart} linechart</span>
                <span>${iconTreemap} treemap</span>
                <span>${iconSearch} search</span>
                <span>${iconSortUp} sort-up</span>
                <span>${iconSortDown} sort-down</span>
                <span>${iconFilter} filter</span>
                <span>${iconAction} trash</span>
                <span>${iconHelp} filter</span>
                <span>${iconList} list</span>
            </aside>
        </section>
        <section>
        <h2>Plan action</h2>
            <aside>
                <span>${iconPlay} play</span>
                <span>${iconPause} pause</span>
                <span>${iconStop} stop</span>
            </aside>
        </section>
        <section>
            <h2>Actions</h2>
            <aside>
                <span>${iconCheck} check</span>
                <span>${iconCross} cross</span>
                <span>${iconMinus} minus</span>
                <span>${iconPlus} plus</span>
                <span>${iconOption} option</span>
                <span>${iconEdit} edit</span>
                <span>${iconImport} import</span>
                <span>${iconPin} pin</span>
                <span>${iconRemove} remove</span>
                <span>${iconTrash} trash</span>
            </aside>
        </section>
        <section>
            <h2>Sub step</h2>
            <aside>
                <span>${iconStepConfirm} step-confirm</span>
                <span>${iconStepCancel} step-cancel</span>
            </aside>
        </section>
        <section>
            <h2>Show password</h2>
            <aside>
                <span>${iconShow} show</span>
                <span>${iconHide} hide</span>
            </aside>
        </section>  
        <section>
            <h2>Activity event</h2>
            <aside>
                <span>${iconEventTransfer} event-transfer</span>
                <span>${iconEventPending} event-pending</span>
                <span>${iconEventCancel} event-cancel</span>
                <span>${iconEventTo} event-to</span>
            </aside>
        </section>
        <section>
            <h2>Arrow</h2>
            <aside>
                <span>${iconUp} up</span>
                <span>${iconDown} down</span>
                <span>${iconLeft} left</span>
                <span>${iconRight} right</span>
            </aside>
        </section>
        <section>
            <h2>Notify</h2>
            <aside>
                <span>${iconWarning} warning</span>
                <span>${iconNotice} notice</span>
            </aside>
        </section>
        <section>
            <h2>Button</h2>
            <aside>
                <button>${iconTransfer}</button>
            </aside>
        </section>
    </div>`
    return app
}

const css = csjs`
:root {
    --b: 0, 0%;
    --r: 100%, 50%;
    --color-white: var(--b), 100%;
    --color-black: var(--b), 0%;
    --color-dark: 223, 13%, 20%;
    --color-deep-black: 222, 18%, 11%;
    --color-blue: 214, var(--r);
    --color-red: 358, 99%, 53%;
    --color-amaranth-pink: 331, 86%, 78%;
    --color-persian-rose: 323, 100%, 56%;
    --color-orange: 35, 100%, 58%;
    --color-deep-saffron: 31, 100%, 56%;
    --color-ultra-red: 348, 96%, 71%;
    --color-flame: 15, 80%, 50%;
    --color-verdigris: 180, 54%, 43%;
    --color-maya-blue: 205, 96%, 72%;
    --color-slate-blue: 248, 56%, 59%;
    --color-blue-jeans: 204, 96%, 61%;
    --color-dodger-blue: 213, 90%, 59%;
    --color-light-green: 127, 86%, 77%;
    --color-lime-green: 127, 100%, 40%;
    --color-slimy-green: 108, 100%, 28%;
    --color-maximum-blue-green: 180, 54%, 51%;
    --color-green-pigment: 136, 81%, 34%;
    --color-yellow: 44, 100%, 55%;
    --color-chrome-yellow: 39, var(--r);
    --color-bright-yellow-crayola: 35, 100%, 58%;
    --color-purple: 283, var(--r);
    --color-medium-purple: 269, 100%, 70%;
    --color-grey33: var(--b), 20%;
    --color-grey66: var(--b), 40%;
    --color-grey70: var(--b), 44%;
    --color-grey88: var(--b), 53%;
    --color-greyA2: var(--b), 64%;
    --color-greyC3: var(--b), 76%;
    --color-greyCB: var(--b), 80%;
    --color-greyD8: var(--b), 85%;
    --color-greyD9: var(--b), 85%;
    --color-greyE2: var(--b), 89%;
    --color-greyEB: var(--b), 92%;
    --color-greyED: var(--b), 93%;
    --color-greyEF: var(--b), 94%;
    --color-greyF2: var(--b), 95%;
    --color-green: 136, 81%, 34%;
    --transparent: transparent;
    --define-primary: *---------------------------------------------*;
    --primary-color: var(--color-black);
    --primary-bgColor: var(--color-greyF2);
    --primary-font: Arial, sens-serif;
    --primary-font-size: var(--size16);
}
.app {}
aside {
    display: flex;
    white-space: nowrap;
}
span {
    margin-right: 15px;
    text-align: center;
}
span i-icon {
    padding-bottom: 12px;
}
button {
    padding: 6px 12px;
    border: 1px solid hsl(var(--color-black));
    border-radius: 6px;
    background-color: hsl(var(--color-white));
    cursor: pointer;
    transition: border-color .4s ease-in-out;
}
button span {
    margin-right: 0;
}
button svg g {
    fill: hsl(var(--color-black));
    transition: fill .4s ease-in-out;
}
button:hover {
    border-color: hsl(var(--color-flame));
}
button:hover svg g {
    fill: hsl(var(--color-flame));
}
`

document.body.append( demoApp() )