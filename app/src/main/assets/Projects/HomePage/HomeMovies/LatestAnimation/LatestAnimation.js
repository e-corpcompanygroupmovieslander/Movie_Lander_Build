import { MOVIESPATH } from "../../../../Modules/Module.js"

export const LATESTANIMATION=()=>{
    
    DECLARATION('#LatestAnimation',(ELEMENT)=>{

        DEJSON('local','ActionMovies',(data)=>{

            SINGLESHUFFLE(data,(data)=>{

                DISPLAY(ELEMENT,`

                    <img class='LatestImage' src='${MOVIESPATH + data.MovieImage}'/>
                            
                    <button class='About'>Watch</button>

                    <h1 id='LatestTitle' class='UserName'>${data.MovieName}</h1>
                        
                `)

            })
    
        })

    })
    
}