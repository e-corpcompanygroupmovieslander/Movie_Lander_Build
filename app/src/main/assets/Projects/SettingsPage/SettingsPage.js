import { ICONMODULE } from "../../Modules/Module.js"
import { HELPPAGE } from "../HelpPage/HelpPage.js";
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

        <button class='Button'>

            <h1 class='Title' >App Lock</h1>

            <img class='Icons' src='${ICONMODULE}lock.png'/>
        
        </button>

        <button class='Button'>

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

    CLICKED('#PrivacyPolicy',()=>{PRIVACYPOLICYPAGE()});

    CLICKED('#Help',()=>{HELPPAGE()});
    

    
}