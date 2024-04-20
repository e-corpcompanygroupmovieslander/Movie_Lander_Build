import { MOVIESDETAILSPAGE } from "../MoviesDetailsPage/MoviesDetailsPage.js"

export const MOVIESDATAPAGE=()=>{

    DEJSON('','MovieData',(data)=>{

        BACKHEADERWIDGET(()=>{MOVIESDETAILSPAGE()},
        `

        <h1 class='Profile'>${data.MovieName}</h1>
    
        `,
        `
        ${data.MovieDetails}
        `,
        ''
        
        )

    })


}