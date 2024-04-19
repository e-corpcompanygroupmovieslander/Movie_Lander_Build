import { ICONMODULE } from "../../Modules/Module.js"
import { FREEWATCHPAGE } from "../FreeWatchPage/FreeWatchPage.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js"

export const  HOMEPAGE=()=>{

    ROUNDFOOTERWIDGET(`

        <div class='View'></div>

        <div class='View'></div>

        <div class='View'></div>

        <div class='View'></div>

        <div class='View'></div>

        <div class='View'></div>

        <div class='View'></div>

        <br><br><br>

    `,`
        <img src='${ICONMODULE}list.png'/>

        <img  class='FreeWatch' src='${ICONMODULE}movies.png'/>

        <img class='UserAccount' src='${ICONMODULE}profile.png'/>

    `);

    CLICKED('.FreeWatch',()=>{FREEWATCHPAGE()})

    CLICKED('.UserAccount',()=>{USERACCOUNTPAGE()})

}