import { ICONMODULE } from "../../Modules/Module.js"
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js"

export const BUSINESSTOOLSPAGE=()=>{
    BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()}, 
    `
        <h1 class='Profile'>Business Tools</h1>

    `,
    `
        <img class='AppLogo' src='${ICONMODULE}suitcase.png'/>
        <h1 class='LoaderMessage'>Explore</h1>
        <button class='Button'>
            <h1 class='Title' >Advertise</h1>
            <img class='Icons' src='${ICONMODULE}megaphone.png'/>
        </button>

        <button class='Button'>
            <h1 class='Title' >Market Place</h1>
            <img class='Icons' src='${ICONMODULE}cart.png'/>
        </button>

        <button class='Button'>
            <h1 class='Title' >E-commerce</h1>
            <img class='Icons' src='${ICONMODULE}suitcase.png'/>
        </button>
    ` ,''
    )
}