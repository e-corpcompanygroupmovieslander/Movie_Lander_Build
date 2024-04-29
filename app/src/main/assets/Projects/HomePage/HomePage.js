import { ICONMODULE } from "../../Modules/Module.js"
import { APPVERSIONCHECKER } from "../AppVersionChecker/AppVersionChecker.js";
import { APPVERSIONUPDATER } from "../AppVersionChecker/AppVersionUpdater.js";
import { AUTOREMOVEACCOUNT } from "../AutoRemoveAccout/AutoRemoveAccount.js";
import { CATERGORYPAGE } from "../CatergoryPage/CatergoryPage.js";
import { FREEWATCHPAGE } from "../FreeWatchPage/FreeWatchPage.js";
import { MONITORING } from "../Monitoring/Monitoring.js";
import { MOVIESSELECTIONPAGE } from "../MoviesSelectionPage/MovieSelectionPage.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js"
import { HOMEANIMATION } from "./HomeMovies/AnimationMovies/AnimationMovies.js";
import { HOMEADVENTURE } from "./HomeMovies/HomeAdventure/HomeAdventure.js";
import { HOMEHORROR } from "./HomeMovies/HomeHorror/HomeHorror.js";
import { HOMEMARATHON } from "./HomeMovies/HomeMarathons/HomeMarathons.js";
import { HOMEMOVIES } from "./HomeMovies/HomeMovies/HomeMovies.js";
import { HOMESERIES } from "./HomeMovies/HomeSeries/HomeSeries.js";
import { LATESTANIMATION } from "./HomeMovies/LatestAnimation/LatestAnimation.js";
import { LATESTACTIONMOVIE } from "./HomeMovies/LatestMovies/LatestMovies.js";
import { LATESTNIGERIANMOVIE } from "./HomeMovies/LatestNigerian/LatestNigerian.js";
import { LATESTROMANCENMOVIE } from "./HomeMovies/LatestRomance/LatestRomance.js";
import { NONPARENTALCONTROLSECTION } from "./NonParentalControl.js";
import { PARENTALCONTROLSECTION } from "./ParentalControlSection.js";

export const  HOMEPAGE=()=>{

    APPVERSIONUPDATER();

    MONITORING('User At Home Page');

    AUTOREMOVEACCOUNT();

    ROUNDFOOTERWIDGET(``,`
        <img class='CatergoryPage' src='${ICONMODULE}list.png'/>
        <img  class='FreeWatch' src='${ICONMODULE}movies.png'/>
        <img class='UserAccount' src='${ICONMODULE}profile.png'/>
    `,'HomeDiv');

    DECLARATION('#HomeDiv',(ELEMENT)=>{

        //PARENTALCONTROL
        CONDITION(localStorage.getItem('ParentalControl'),
            ()=>CHECK(localStorage.getItem('ParentalControl'),(result)=>{
                DISPLAY(ELEMENT,PARENTALCONTROLSECTION),

                //IMPORT HOME SECTIONS
                LATESTANIMATION(),

                HOMEANIMATION(),

                //MORE SECTIONS CLICKED
                CLICKED('#MoreAnimations',()=>{
                    STORE('','Path','SEEMORE');
                    STORE('local','CurrentSection','Animations');
                    MOVIESSELECTIONPAGE();
                })
            }),

            ()=>CHECK(localStorage.getItem('ParentalControl'),(result)=>{

                DISPLAY(ELEMENT,NONPARENTALCONTROLSECTION),

                //IMPORT HOME SECTIONS
                LATESTANIMATION(),
                HOMEANIMATION(),
                HOMEMOVIES(),
                LATESTACTIONMOVIE(),
                HOMEMARATHON(),
                HOMESERIES(),
                LATESTNIGERIANMOVIE(),
                HOMEADVENTURE(),
                HOMEHORROR(),
                LATESTROMANCENMOVIE(),

                //MORE SECTIONS CLICKED
                CLICKED('#MoreAnimations',()=>{
                    STORE('','Path','SEEMORE');
                    STORE('local','CurrentSection','Animations');
                    MOVIESSELECTIONPAGE();
                    MONITORING('User Clicked See More Animations')
                }),
                CLICKED('#MoreMovies',()=>{
                    STORE('','Path','SEEMORE');
                    STORE('local','CurrentSection','Action');
                    MOVIESSELECTIONPAGE();
                    MONITORING('User Clicked See More Actions Movies')
                }),
                CLICKED('#MoreMarathons',()=>{
                    STORE('','Path','SEEMORE');
                    STORE('local','CurrentSection','Marathons');
                    MOVIESSELECTIONPAGE();
                    MONITORING('User Clicked See More MArathons')
                }),
                CLICKED('#MoreSeries',()=>{
                    STORE('','Path','SEEMORE');
                    STORE('local','CurrentSection','Series');
                    MOVIESSELECTIONPAGE();
                    MONITORING('User Clicked See More Series')
                }),
                CLICKED('#MoreAdventure',()=>{
                    STORE('','Path','SEEMORE');
                    STORE('local','CurrentSection','Adventure');
                    MOVIESSELECTIONPAGE();
                    MONITORING('User Clicked See More Adventure')
                }),
                CLICKED('#MoreHorror',()=>{
                    STORE('','Path','SEEMORE');
                    STORE('local','CurrentSection','Horror');
                    MOVIESSELECTIONPAGE();
                    MONITORING('User Clicked See More Horror')
                })

            })
        )
    })

    CLICKED('.CatergoryPage',()=>{ MONITORING('User Clicked Catergory Page'),CATERGORYPAGE()});
    CLICKED('.FreeWatch',()=>{MONITORING('User Clicked Free Movies Page'),FREEWATCHPAGE()});
    CLICKED('.UserAccount',()=>{MONITORING('User Clicked User Account Page'),USERACCOUNTPAGE()});

    APPVERSIONCHECKER();

}