import { MOVIESDETAILSPAGE } from "../MoviesDetailsPage/MoviesDetailsPage.js"

export const MOVIESDATAPAGE=()=>{

    DEJSON('','MovieData',(data)=>{

        BACKHEADERWIDGET(()=>{MOVIESDETAILSPAGE()},
        `
    
        `,
        `
        ${data.MovieDetails}
        `,
        ''
        
        )

    })


}