import { ICONMODULE } from "../../Modules/Module.js";
import { ACCOUNTSETTINGSPAGE } from "./AccountSettingsPage.js";


export const PREMIUMMESSAGEPAGE=()=>{

    BACKHEADERWIDGET(()=>{ACCOUNTSETTINGSPAGE()},
    `
        <h1 class='Profile'>My Notifications</h1>

    `,
    `
        <img class='AppLogo' src='${ICONMODULE}caution.png'/>

        <h3>Premium Messages For User</h3>
    
    `,'MyMessagesDiv'
    );
    

}