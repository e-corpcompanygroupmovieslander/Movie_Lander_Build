import { MOVIESDETAILSPAGE } from "../MoviesDetailsPage/MoviesDetailsPage.js"

export const INSIGHTPAGE=()=>{

    BACKHEADERWIDGET(()=>{MOVIESDETAILSPAGE()},
    `
        <h1 class='Profile'>Insight</h1>

    `,
    `
        <textarea class='InsightInput' placeholder='Enter Your Views On The Movie'></textarea>

    `,''

    )

}