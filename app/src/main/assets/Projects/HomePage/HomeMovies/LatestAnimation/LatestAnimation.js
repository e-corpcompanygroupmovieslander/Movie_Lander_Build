import { MOVIESPATH } from "../../../../Modules/Module.js"
import { MOVIESDETAILSPAGE } from "../../../MoviesDetailsPage/MoviesDetailsPage.js"

export const LATESTANIMATION=()=>{
    
    DECLARATION('#LatestAnimation',(ELEMENT)=>{

        DEJSON('local','Animations',(data)=>{

            SINGLESHUFFLE(data,(data)=>{

                DISPLAY(ELEMENT,`

                    <img class='LatestImage' src='${MOVIESPATH + data.MovieImage}'/>
                            
                    <button class='About'>Watch</button>

                    <h1 id='LatestTitle' class='UserName'>${data.MovieName}</h1>
                        
                `)

                CLICKED('#LatestAnimation',()=>{

                    STORE('','Path','HOMEPAGE');
    
                    STORE('','MovieData',JSON.stringify(data));

                    MOVIESDETAILSPAGE();

                })

            })
    
        })

    })
    
}