import { MOVIESPATH } from "../../../../Modules/Module.js";
import { MONITORING } from "../../../Monitoring/Monitoring.js";
import { MOVIESDETAILSPAGE } from "../../../MoviesDetailsPage/MoviesDetailsPage.js";

export const HOMEADVENTURE=()=>{
    DEJSON('local','Adventure',(data)=>{
        DECLARATION('#Adventure',(ELEMENT)=>{
            DISPLAY(ELEMENT,'');
            SHUFFLE(data,(data)=>{
                REDUX(data,(element)=>{
                    CREATEELEMENT('div','AnimationsHolder',(ANIME)=>{
                        DISPLAY(ANIME,`
                            <img class='AnimationsImage' src='${MOVIESPATH+element.MovieImage}'/>
                        `)
                        EVENT(ANIME,'click',()=>{
                            STORE('','Path','HOMEPAGE');
                            STORE('','MovieData',JSON.stringify(element));
                            MONITORING('User Clicked Movie From HomePage Adventure Movies'+JSON.stringify(element))
                            MOVIESDETAILSPAGE();
                        })
                        ADD(ELEMENT,ANIME);
                    })
                })
            })
        })
    })
}
