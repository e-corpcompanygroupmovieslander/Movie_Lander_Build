import { ICONMODULE } from "../../Modules/Module.js"
import { CATERGORYPAGE } from "../CatergoryPage/CatergoryPage.js";
import { FREEWATCHPAGE } from "../FreeWatchPage/FreeWatchPage.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js"
import { LATESTANIMATION } from "./HomeMovies/LatestAnimation/LatestAnimation.js";

export const  HOMEPAGE=()=>{

    ROUNDFOOTERWIDGET(`

        <div id='LatestAnimation' class='View'></div>

        <div class='View'></div>

        <div class='View'></div>

        <div class='View'></div>

        <div class='View'></div>

        <div class='View'></div>

        <div class='View'></div>

        <br><br><br>

    `,`
        <img class='CatergoryPage' src='${ICONMODULE}list.png'/>

        <img  class='FreeWatch' src='${ICONMODULE}movies.png'/>

        <img class='UserAccount' src='${ICONMODULE}profile.png'/>

    `);

    CLICKED('.CatergoryPage',()=>{CATERGORYPAGE()})

    CLICKED('.FreeWatch',()=>{FREEWATCHPAGE()})

    CLICKED('.UserAccount',()=>{USERACCOUNTPAGE()})

    //IMPORT HOME SECTIONS
    LATESTANIMATION();

}