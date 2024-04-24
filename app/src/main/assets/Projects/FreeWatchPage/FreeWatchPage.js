import { MOVIESPATH } from "../../Modules/Module.js";
import { HOMEPAGE } from "../HomePage/HomePage.js"
import { MONITORING } from "../Monitoring/Monitoring.js";

export const FREEWATCHPAGE=()=>{
    MONITORING('User At Free Watch Section');
    BACKHEADERWIDGET(()=>{HOMEPAGE()},`
        <h1 class='Profile'>Free Watch</h1>
        `,
        ``,'FreeWatchDiv'
    );
    DEJSON('local','FreeMovies',(data)=>{
        DECLARATION('#FreeWatchDiv',(ELEMENT)=>{
            CLEAR(ELEMENT)
            REDUX(data,(element)=>{
                CREATEELEMENT('div','FreeDivHolder',(HOLDER)=>{
                    DISPLAY(HOLDER,`
                        <img class='MovieImage' src='${MOVIESPATH+element.MovieImage}'/>
                    `);
                    EVENT(HOLDER,'click',()=>{
                        MONITORING('User Is Watching'+element.MovieName);
                        BACKHEADERWIDGET(()=>{FREEWATCHPAGE()},`
                            <h1 class='Profile'>${element.MovieName}</h1>
                        `,`
                            <iframe src='https://www.youtube.com/embed/${element.MoveTrailer}'/></iframe>
                        
                        `)
                    })
                    ADD(ELEMENT,HOLDER);
                })
            })
        })
    })  
}