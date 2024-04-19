import { ICONMODULE } from "../../Modules/Module.js"
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js"

export const CONTACTUSPAGE=()=>{

    BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()}, 
    `
    <h1 class='Profile'>Settings</h1>

    `,
    `
        <img class='AppLogo' src='${ICONMODULE}phone.png'/>

        <h1 class='LoaderMessage'>Reach Us</h1>

        <button class='Button'>

            <h1 class='Title' >Gmail</h1>

            <img class='Icons' src='${ICONMODULE}gmail.png'/>
        
        </button>

        <button class='Button'>

            <h1 class='Title' >Instagram</h1>

            <img class='Icons' src='${ICONMODULE}instagram.png'/>
        
        </button>

        <button class='Button'>

            <h1 class='Title' >Facebook</h1>

            <img class='Icons' src='${ICONMODULE}facebook.png'/>
        
        </button>

        <button class='Button'>

            <h1 class='Title' >WebSite</h1>

            <img class='Icons' src='${ICONMODULE}internet.png'/>
        
        </button>
    
    ` 

    )
    
}