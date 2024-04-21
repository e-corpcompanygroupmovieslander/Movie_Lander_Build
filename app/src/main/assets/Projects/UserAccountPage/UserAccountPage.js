import { ICONMODULE, UPDATEAPI } from "../../Modules/Module.js"
import { ABOUTMEPAGE } from "../AboutMePage/AboutMePage.js";
import { ACCOUNTSETTINGSPAGE } from "../AccountSettingsPage/AccountSettingsPage.js";
import { BUSINESSTOOLSPAGE } from "../BusinessTools/BusinessTools.js";
import { COMMUNITYPAGE } from "../CommunityPage.js/CommunityPage.js";
import { CONTACTUSPAGE } from "../ContactUsPage/ContactUsPage.js";
import { HOMEPAGE } from "../HomePage/HomePage.js"
import { LIBRARYPAGE } from "../LibraryPage/Library.js";
import { MOREAPPSPAGE } from "../MoreAppPage/MoreAppPage.js";
import { PREMIUMPAGE } from "../PremiumPage/PremiumPage.js";
import { SETTINGSPAGE } from "../SettingsPage/SettingsPage.js";
import { AUTOSYNC } from "../SyncAppData/AutoSyncData.js";

export const USERACCOUNTPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        BACKHEADERWIDGET(()=>{HOMEPAGE()},`

        <h1 class='Profile'>Profile</h1>

    `,
    `
        <div id='ProfileImageHolder' class='View'>

            <img class='ProfileImage' src='../Library/Images/app_icon.png'/>
                    
            <button class='About'>About</button>

            <h1 class='UserName'>${data.UserName}</h1>

            <img id='UserSettingsAccount' class='UserSettingsImage' src='${ICONMODULE}setting.png'/>
                
        </div>

        <button id='Premium' class='Button'>

            <h1 class='Title' >Premium</h1>

            <img class='Icons' src='${ICONMODULE}subscription.png'/>
        
        </button>

        <button id='Community' class='Button'>

            <h1 class='Title' >Community</h1>

            <img class='Icons' src='${ICONMODULE}group-users.png'/>
        
        </button>

        <button id='BusinessTools' class='Button'>

            <h1 class='Title' >Business Tools</h1>

            <img class='Icons' src='${ICONMODULE}suitcase.png'/>
        
        </button>

        <button id='Library' class='Button'>

            <h1 class='Title' >My Library</h1>

            <img class='Icons' src='${ICONMODULE}video-folder.png'/>
        
        </button>

        <button id='SettingsPage' class='Button'>

            <h1 class='Title' >Settings</h1>

            <img class='Icons' src='${ICONMODULE}setting.png'/>
        
        </button>

        <button  id='MoreApps' class='Button'>

            <h1 class='Title' >More Apps</h1>

            <img class='Icons' src='${ICONMODULE}grid.png'/>
        
        </button>

        <button id='ContactUs' class='Button'>

            <h1 class='Title' >Contact Us</h1>

            <img class='Icons' src='${ICONMODULE}phone.png'/>
        
        </button>

        <button id='Update' class='Button'>

            <h1 class='Title' >Updates</h1>

            <img class='Icons' src='${ICONMODULE}app.png'/>
        
        </button>

        <button id='Sync' class='Button'>

            <h1 class='Title' >Sync</h1>

            <img class='Icons' src='${ICONMODULE}sync.png'/>
        
        </button>

    `);
        
        CLICKED('#UserSettingsAccount',()=>{ACCOUNTSETTINGSPAGE()});

        CLICKED('#Sync',()=>{AUTOSYNC()});

        CLICKED('#Premium',()=>{STORE('','PremiumPath','Direct'),PREMIUMPAGE()});

        CLICKED('#Community',()=>{COMMUNITYPAGE()});

        CLICKED('#BusinessTools',()=>{BUSINESSTOOLSPAGE()});

        CLICKED('#Library',()=>{LIBRARYPAGE()});

        CLICKED('#SettingsPage',()=>{SETTINGSPAGE()});

        CLICKED('#MoreApps',()=>{MOREAPPSPAGE()});

        CLICKED('#ContactUs',()=>{CONTACTUSPAGE()});

        CLICKED('.About',()=>{ABOUTMEPAGE()})

        CLICKED('#Update',()=>{WEBSITE(UPDATEAPI)})

    });

}