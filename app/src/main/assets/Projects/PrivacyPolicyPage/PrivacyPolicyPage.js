import { PRIVACYTEXT } from "../../Modules/Module.js";
import { SETTINGSPAGE } from "../SettingsPage/SettingsPage.js";

export const PRIVACYPOLICYPAGE=()=>{

    BACKHEADERWIDGET(()=>{SETTINGSPAGE()},
    `
        <h1 class='Profile'>Privacy Policy</h1>

    `,
    ``,'PolicyDiv'
    );

    DECLARATION('#PolicyDiv',(ELEMENT)=>{
        GETPACKAGE(PRIVACYTEXT,'cors',(data)=>{
            DISPLAY(ELEMENT,data)
        })
    })
    
}