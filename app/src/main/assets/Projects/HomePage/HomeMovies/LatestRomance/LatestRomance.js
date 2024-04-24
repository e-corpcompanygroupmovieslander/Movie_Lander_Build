import { MOVIESPATH } from "../../../../Modules/Module.js"
import { MONITORING } from "../../../Monitoring/Monitoring.js"
import { MOVIESDETAILSPAGE } from "../../../MoviesDetailsPage/MoviesDetailsPage.js"

export const LATESTROMANCENMOVIE=()=>{
    DECLARATION('#LatestRomance',(ELEMENT)=>{
        DEJSON('local','Romance',(data)=>{
            SINGLESHUFFLE(data,(data)=>{
                DISPLAY(ELEMENT,`
                    <img class='LatestImage' src='${MOVIESPATH + data.MovieImage}'/>
                    <button class='About'>Watch</button>
                    <h1 id='LatestTitle' class='UserName'>${data.MovieName}</h1>
                `)
                CLICKED('#LatestRomance',()=>{
                    STORE('','Path','HOMEPAGE');
                    STORE('','MovieData',JSON.stringify(data));
                    MONITORING('User Clicked Movie From HomePage Latest Romance'+JSON.stringify(data))
                    MOVIESDETAILSPAGE();
                })
            })
        })
    })
}