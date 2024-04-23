import { ICONMODULE } from "../../Modules/Module.js"
import { APPLOCKPAGE } from "../AppLockPage/AppLockPage.js";
import { HELPPAGE } from "../HelpPage/HelpPage.js";
import { PARENTALCONTROLPAGE } from "../ParentalControlPage/ParentalControl.js";
import { PRIVACYPOLICYPAGE } from "../PrivacyPolicyPage/PrivacyPolicyPage.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js"

export const SETTINGSPAGE=()=>{

    BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()}, 
    `
    <h1 class='Profile'>Settings</h1>

    `,
    `
        <img class='AppLogo' src='${ICONMODULE}setting.png'/>

        <h1 class='LoaderMessage'>Customize App</h1>

        <button id='AppLock' class='Button'>

            <h1 class='Title' >App Lock</h1>

            <img class='Icons' src='${ICONMODULE}lock.png'/>
        
        </button>

        <button id='ParentalControl' class='Button'>

            <h1 class='Title' >Parental Control</h1>

            <img class='Icons' src='${ICONMODULE}caution.png'/>
        
        </button>

        <button id='Help' class='Button'>

            <h1 class='Title' >Help</h1>

            <img class='Icons' src='${ICONMODULE}help.png'/>
        
        </button>

        <button id='PrivacyPolicy' class='Button'>

            <h1 class='Title' >Privacy Policy</h1>

            <img class='Icons' src='${ICONMODULE}privacypolicy.png'/>
        
        </button>
    
    ` 

    );

    CLICKED('#AppLock',()=>{APPLOCKPAGE()});

    CLICKED('#ParentalControl',()=>{PARENTALCONTROLPAGE()});

    CLICKED('#PrivacyPolicy',()=>{PRIVACYPOLICYPAGE()});

    CLICKED('#Help',()=>{HELPPAGE()});
    
}