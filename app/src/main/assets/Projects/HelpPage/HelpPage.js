import { SETTINGSPAGE } from "../SettingsPage/SettingsPage.js";

export const HELPPAGE=()=>{
    BACKHEADERWIDGET(()=>{SETTINGSPAGE()},
    `
        <h1 class='Profile'>Help</h1>
    `,
    ``,'PolicyDiv'
    );
  
    DECLARATION('#PolicyDiv',(ELEMENT)=>{
        DEJSON('local','HelpText',(data)=>{
            DISPLAY(ELEMENT,data)
        })
    })
}