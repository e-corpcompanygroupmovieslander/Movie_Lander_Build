import { HOMEPAGE } from "../HomePage/HomePage.js";
import { MOVIESSELECTIONPAGE } from "../MoviesSelectionPage/MovieSelectionPage.js";

export const MOVIESDETAILSPAGE=()=>{

    let NAVIGATION='';

    CONDITION(sessionStorage.getItem('Path') === 'HOMEPAGE' ,
    
        ()=>NAVIGATION=HOMEPAGE,

        ()=>NAVIGATION=MOVIESSELECTIONPAGE

    )

    DEJSON('','MovieData',(data)=>{

        BACKHEADERWIDGET(()=>{NAVIGATION()},
            `
            <h1 class='Profile'>${data.MovieName}</h1>
            
            `,
            `
            `,''
        )
    

    })


    
}

