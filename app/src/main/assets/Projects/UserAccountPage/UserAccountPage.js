import { ICONMODULE } from "../../Modules/Module.js"
import { BUSINESSTOOLSPAGE } from "../BusinessTools/BusinessTools.js";
import { COMMUNITYPAGE } from "../CommunityPage.js/CommunityPage.js";
import { HOMEPAGE } from "../HomePage/HomePage.js"
import { LIBRARYPAGE } from "../Library/Library.js";
import { SETTINGSPAGE } from "../SettingsPage/SettingsPage.js";

export const USERACCOUNTPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},`

        <h1 class='Profile'>Profile</h1>

    `,
    `
        <div class='View'></div>

        <button class='Button'>

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

        <button class='Button'>

            <h1 class='Title' >More Apps</h1>

            <img class='Icons' src='${ICONMODULE}grid.png'/>
        
        </button>

        <button class='Button'>

            <h1 class='Title' >Contact Us</h1>

            <img class='Icons' src='${ICONMODULE}phone.png'/>
        
        </button>

        <button class='Button'>

            <h1 class='Title' >Updates</h1>

            <img class='Icons' src='${ICONMODULE}app.png'/>
        
        </button>

    `);

    CLICKED('#Community',()=>{COMMUNITYPAGE()});

    CLICKED('#BusinessTools',()=>{BUSINESSTOOLSPAGE()});

    CLICKED('#Library',()=>{LIBRARYPAGE()});

    CLICKED('#SettingsPage',()=>{SETTINGSPAGE()});



}