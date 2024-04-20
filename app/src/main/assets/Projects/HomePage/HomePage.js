import { ICONMODULE } from "../../Modules/Module.js"
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

export const  HOMEPAGE=()=>{

    ROUNDFOOTERWIDGET(`

        <div id='LatestAnimation' class='View'>

            <img id='AnimationsLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>
                        
        </div>

        <div id='homeHolder' class='View'>

            <header class='AppHeader'>

                <h1 class='SectionName' >Animations</h1>

                <img id='MoreAnimations' class='SeeMoreIcon' src='${ICONMODULE}arrow.png'/>
                            
            </header>

            <div id='Animations' class='View'>

                <img id='AnimationsLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>
                        
            </div>
                        
        </div>

        <div id='homeHolder' class='View'>

            <header class='AppHeader'>

                <h1 class='SectionName' >Action</h1>

                <img id='MoreMovies' class='SeeMoreIcon' src='${ICONMODULE}arrow.png'/>
                            
            </header>

            <div id='Movies' class='View'>

                <img id='AnimationsLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>
                        
            </div>
                        
        </div>

        <div id='LatestMovies' class='View'>

            <img id='AnimationsLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>
                        
        </div>

        <div id='homeHolder' class='View'>

            <header class='AppHeader'>

                <h1 class='SectionName' >Marathons</h1>

                <img id='MoreMarathons' class='SeeMoreIcon' src='${ICONMODULE}arrow.png'/>
                            
            </header>

            <div id='Marathons' class='View'>

                <img id='AnimationsLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>
                        
            </div>
                        
        </div>

        <div id='homeHolder' class='View'>

            <header class='AppHeader'>

                <h1 class='SectionName' >Series</h1>

                <img id='MoreSeries' class='SeeMoreIcon' src='${ICONMODULE}arrow.png'/>
                            
            </header>

            <div id='Series' class='View'>

                <img id='AnimationsLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>
                            
            </div>

        </div>

        <div id='LatestNigerian' class='View'>

            <img id='AnimationsLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>
                        
        </div>

        <div id='homeHolder' class='View'>

            <header class='AppHeader'>

                <h1 class='SectionName' >Adventure</h1>

                <img id='MoreAdventure' class='SeeMoreIcon' src='${ICONMODULE}arrow.png'/>
                            
            </header>

            <div id='Adventure' class='View'>

                <img id='AnimationsLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>
                        
            </div>

        </div>

        <div id='homeHolder' class='View'>

            <header class='AppHeader'>

                <h1 class='SectionName' >Horror</h1>

                <img id='MoreHorror' class='SeeMoreIcon' src='${ICONMODULE}arrow.png'/>
                            
            </header>

            <div id='Horror' class='View'>

                <img id='AnimationsLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>
                        
            </div>

        </div>

        <div id='LatestRomance' class='View'>

            <img id='AnimationsLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>
                        
        </div>

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
    HOMEANIMATION();
    HOMEMOVIES();
    LATESTACTIONMOVIE();
    HOMEMARATHON();
    HOMESERIES();
    LATESTNIGERIANMOVIE();
    HOMEADVENTURE();
    HOMEHORROR();
    LATESTROMANCENMOVIE();

    
    //MORE SECTIONS CLICKED
    CLICKED('#MoreAnimations',()=>{

        STORE('','Path','SEEMORE');

        STORE('local','CurrentSection','Animations');

        MOVIESSELECTIONPAGE();

    })

    CLICKED('#MoreMovies',()=>{

        STORE('','Path','SEEMORE');

        STORE('local','CurrentSection','Action');

        MOVIESSELECTIONPAGE();

    })

    CLICKED('#MoreMarathons',()=>{

        STORE('','Path','SEEMORE');

        STORE('local','CurrentSection','Marathons');

        MOVIESSELECTIONPAGE();

    })

    CLICKED('#MoreSeries',()=>{

        STORE('','Path','SEEMORE');

        STORE('local','CurrentSection','Series');

        MOVIESSELECTIONPAGE();

    })

    CLICKED('#MoreAdventure',()=>{

        STORE('','Path','SEEMORE');

        STORE('local','CurrentSection','Adventure');

        MOVIESSELECTIONPAGE();

    })

    CLICKED('#MoreHorror',()=>{

        STORE('','Path','SEEMORE');

        STORE('local','CurrentSection','Horror');

        MOVIESSELECTIONPAGE();

    })

}