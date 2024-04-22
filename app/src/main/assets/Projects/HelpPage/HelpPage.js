import { HELPTEXT } from "../../Modules/Module.js";
import { SETTINGSPAGE } from "../SettingsPage/SettingsPage.js";

export const HELPPAGE=()=>{
    BACKHEADERWIDGET(()=>{SETTINGSPAGE()},
    `
        <h1 class='Profile'>Help</h1>
    `,
    ``,'PolicyDiv'
    );

    DECLARATION('#PolicyDiv',(ELEMENT)=>{
        GETPACKAGE(HELPTEXT,'cors',(data)=>{
            DISPLAY(ELEMENT,data)
        })
    })
}