import { ICONMODULE, MOVIESPATH, YOUTUBELINK } from "../../Modules/Module.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";
import { MOVIESSELECTIONPAGE } from "../MoviesSelectionPage/MovieSelectionPage.js";

export const MOVIESDETAILSPAGE=()=>{

    DEJSON('','MovieData',(data)=>{

        DISPLAY('',`

        <img class='Movie_Image' src='${MOVIESPATH+data.MovieImage}'/>

        <header class='AppHeader'>

            <img class='BackIcon' src='${ICONMODULE}arrow.png'/>

            <h1 class='Profile'>${data.MovieName}</h1>

        </header>
        
        
        `);

        CLICKED('.BackIcon',()=>{

            CONDITION(sessionStorage.getItem('Path') === 'CATERGORYPAGE' ,
        
            ()=>CATERGORYPAGE(),
    
            ()=>HOMEPAGE()
        
        )
    
        })

    })


}

