import { ICONMODULE } from "../../Modules/Module.js"
import { AUTOREMOVEACCOUNT } from "../AutoRemoveAccout/AutoRemoveAccount.js";
import { CATERGORYPAGE } from "../CatergoryPage/CatergoryPage.js";
import { FREEWATCHPAGE } from "../FreeWatchPage/FreeWatchPage.js";
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
                }),
                CLICKED('#MoreMovies',()=>{
                    STORE('','Path','SEEMORE');
                    STORE('local','CurrentSection','Action');
                    MOVIESSELECTIONPAGE();
                }),
                CLICKED('#MoreMarathons',()=>{
                    STORE('','Path','SEEMORE');
                    STORE('local','CurrentSection','Marathons');
                    MOVIESSELECTIONPAGE();
                }),
                CLICKED('#MoreSeries',()=>{
                    STORE('','Path','SEEMORE');
                    STORE('local','CurrentSection','Series');
                    MOVIESSELECTIONPAGE();
                }),
                CLICKED('#MoreAdventure',()=>{
                    STORE('','Path','SEEMORE');
                    STORE('local','CurrentSection','Adventure');
                    MOVIESSELECTIONPAGE();
                }),
                CLICKED('#MoreHorror',()=>{
                    STORE('','Path','SEEMORE');
                    STORE('local','CurrentSection','Horror');
                    MOVIESSELECTIONPAGE();
                })

            })
        )
    })

    CLICKED('.CatergoryPage',()=>{CATERGORYPAGE()});
    CLICKED('.FreeWatch',()=>{FREEWATCHPAGE()});
    CLICKED('.UserAccount',()=>{USERACCOUNTPAGE()});

}