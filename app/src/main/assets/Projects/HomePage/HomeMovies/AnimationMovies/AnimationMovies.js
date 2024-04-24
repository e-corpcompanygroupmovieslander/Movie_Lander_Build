import { MOVIESPATH } from "../../../../Modules/Module.js";
import { MONITORING } from "../../../Monitoring/Monitoring.js";
import { MOVIESDETAILSPAGE } from "../../../MoviesDetailsPage/MoviesDetailsPage.js";

export const HOMEANIMATION=()=>{
    DEJSON('local','Animations',(data)=>{
        DECLARATION('#Animations',(ELEMENT)=>{
            DISPLAY(ELEMENT,'');
            SHUFFLE(data,(data)=>{
                REDUX(data,(element)=>{
                    CREATEELEMENT('div','AnimationsHolder',(ANIME)=>{
                        DISPLAY(ANIME,`
                            <img class='AnimationsImage' src='${MOVIESPATH + element.MovieImage}'/>
                        `)
                        EVENT(ANIME,'click',()=>{
                            STORE('','Path','HOMEPAGE');
                            STORE('','MovieData',JSON.stringify(element));
                            MOVIESDETAILSPAGE();
                            MONITORING('User Clicked Movie From HomePage Animation'+JSON.stringify(element))
                        })
                        ADD(ELEMENT,ANIME);
                    })
                })
            })
        })
    })
}
