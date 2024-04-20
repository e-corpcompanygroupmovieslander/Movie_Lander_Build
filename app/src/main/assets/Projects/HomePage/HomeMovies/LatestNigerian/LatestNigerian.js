import { MOVIESPATH } from "../../../../Modules/Module.js"
import { MOVIESDETAILSPAGE } from "../../../MoviesDetailsPage/MoviesDetailsPage.js"

export const LATESTNIGERIANMOVIE=()=>{
    
    DECLARATION('#LatestNigerian',(ELEMENT)=>{

        DEJSON('local','Nigerian',(data)=>{

            SINGLESHUFFLE(data,(data)=>{

                DISPLAY(ELEMENT,`

                    <img class='LatestImage' src='${MOVIESPATH + data.MovieImage}'/>
                            
                    <button class='About'>Watch</button>

                    <h1 id='LatestTitle' class='UserName'>${data.MovieName}</h1>
                        
                `)

                CLICKED('#LatestNigerian',()=>{

                    STORE('','Path','HOMEPAGE');
    
                    STORE('','MovieData',JSON.stringify(data));

                    MOVIESDETAILSPAGE();

                })

            })
    
        })

    })
    
}