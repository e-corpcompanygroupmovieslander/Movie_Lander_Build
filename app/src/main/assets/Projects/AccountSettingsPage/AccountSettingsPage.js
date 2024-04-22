import { ICONMODULE } from "../../Modules/Module.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js"
import { PREMIUMMESSAGEPAGE } from "./PremiumMessages.js";


export const ACCOUNTSETTINGSPAGE=()=>{

    BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()},
    `
        <h1 class='Profile'>Subsciption</h1>

    `,
    `

        <button id='Update' class='Button'>
            <h1 class='Title' >User</h1>
            <img class='Icons' src='${ICONMODULE}user.png'/>
        </button>

        <button id='Messages' class='Button'>
            <h1 class='Title' >Messages</h1>
            <img class='Icons' src='${ICONMODULE}chat.png'/>
        </button>

    `,''
    );
    
    CLICKED('#Messages',()=>{PREMIUMMESSAGEPAGE()})

}