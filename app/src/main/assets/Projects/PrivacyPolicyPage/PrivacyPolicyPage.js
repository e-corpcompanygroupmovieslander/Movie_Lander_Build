import { SETTINGSPAGE } from "../SettingsPage/SettingsPage.js";

export const PRIVACYPOLICYPAGE=()=>{

    BACKHEADERWIDGET(()=>{SETTINGSPAGE()},
    `
        <h1 class='Profile'>Privacy Policy</h1>

    `,
    ``,'PolicyDiv'
    );

    DECLARATION('#PolicyDiv',(ELEMENT)=>{
        DEJSON('local','PrivacyText',(data)=>{
            DISPLAY(ELEMENT,data)
        })
    })
    
}