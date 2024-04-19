import { ICONMODULE } from "../../Modules/Module.js"
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

        <img src='${ICONMODULE}movies.png'/>

        <img class='UserAccount' src='${ICONMODULE}profile.png'/>

    `)

    CLICKED('.UserAccount',()=>{USERACCOUNTPAGE()})

}