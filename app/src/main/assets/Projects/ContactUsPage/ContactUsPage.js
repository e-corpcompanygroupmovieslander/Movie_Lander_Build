import { ICONMODULE } from "../../Modules/Module.js"
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js"

export const CONTACTUSPAGE=()=>{
    BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()}, 
    `
    <h1 class='Profile'>Contact Us</h1>
    `,
    `
        <img class='AppLogo' src='${ICONMODULE}link.png'/>

        <h1 class='LoaderMessage'>Reach Us</h1>

        <button id='Gmail' class='Button'>
            <h1 class='Title' >Gmail</h1>
            <img class='Icons' src='${ICONMODULE}gmail.png'/>
        </button>

        <button id='Instagram'  class='Button'>
            <h1 class='Title' >Instagram</h1>
            <img class='Icons' src='${ICONMODULE}instagram.png'/>
        </button>

        <button id='facebook' class='Button'>
            <h1 class='Title' >Facebook</h1>
            <img class='Icons' src='${ICONMODULE}facebook.png'/>
        </button>

        <button id='Site' class='Button'>
            <h1 class='Title' >WebSite</h1>
            <img class='Icons' src='${ICONMODULE}internet.png'/>
        </button>
    
    ` ,''

    );

    CLICKED('#Gmail',()=>{GMAIL('movielander1999@gmail.com')});
    CLICKED('#Instagram',()=>{INSTAGRAM('e_corpCompanygroup')});
    CLICKED('#facebook',()=>{WEBSITE('https://www.facebook.com/profile.php?id=100089825687989&mibextid=ZbWKwL')});
    CLICKED('#Site',()=>{WEBSITE('https://www.e-corpcompanygroup.com')});

}