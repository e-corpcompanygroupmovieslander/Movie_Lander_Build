import { ICONMODULE } from "../../Modules/Module.js"
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js"

export const COMMUNITYPAGE=()=>{

    BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()}, 
    `
    <h1 class='Profile'>Community</h1>

    `,
    `
        <img class='AppLogo' src='${ICONMODULE}group-users.png'/>

        <h1 class='LoaderMessage'>Lets Connect</h1>

        <button class='Button'>

            <h1 class='Title' >Movie Request</h1>

            <img class='Icons' src='${ICONMODULE}review.png'/>
        
        </button>

        <button class='Button'>

            <h1 class='Title' >Trends</h1>

            <img class='Icons' src='${ICONMODULE}trending-topic.png'/>
        
        </button>

        <button class='Button'>

            <h1 class='Title' >Chat</h1>

            <img class='Icons' src='${ICONMODULE}chat.png'/>
        
        </button>
    
    ` 

    )
    
}