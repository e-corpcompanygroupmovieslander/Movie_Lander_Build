import { MOVIESPATH } from "../../../../Modules/Module.js"
import { MONITORING } from "../../../Monitoring/Monitoring.js"
import { MOVIESDETAILSPAGE } from "../../../MoviesDetailsPage/MoviesDetailsPage.js"

export const LATESTACTIONMOVIE=()=>{
    DECLARATION('#LatestMovies',(ELEMENT)=>{
        DEJSON('local','Action',(data)=>{
            SINGLESHUFFLE(data,(data)=>{
                DISPLAY(ELEMENT,`
                    <img class='LatestImage' src='${MOVIESPATH+data.MovieImage}'/>                   
                    <button class='About'>Watch</button>
                    <h1 id='LatestTitle' class='UserName'>${data.MovieName}</h1>               
                `)
                CLICKED('#LatestMovies',()=>{
                    STORE('','Path','HOMEPAGE');
                    STORE('','MovieData',JSON.stringify(data));
                    MONITORING('User Clicked Movie From HomePage Latest Movies'+JSON.stringify(data))
                    MOVIESDETAILSPAGE();
                })
            })
        })
    })
}