import { MOVIESPATH } from "../../../../Modules/Module.js"

export const LATESTANIMATION=()=>{
    
    DECLARATION('#LatestAnimation',(ELEMENT)=>{

        DEJSON('local','ActionMovies',(data)=>{

            SINGLESHUFFLE(data,(data)=>{

                DISPLAY(ELEMENT,`

                    <img id='LatestImage' class='MovieImage' src='${MOVIESPATH+data.MovieImage}'/>
                
                `)

            })
    
        })

    })
    
}