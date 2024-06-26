import { CATERGORIESPATH, CATERGORYAPI } from "../../Modules/Module.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";
import { MONITORING } from "../Monitoring/Monitoring.js";
import { MOVIESSELECTIONPAGE } from "../MoviesSelectionPage/MovieSelectionPage.js";

export const CATERGORYPAGE=()=>{
    MONITORING('User At Catergory Page');
    BACKHEADERWIDGET(()=>{HOMEPAGE()},`
        <h1 class='Profile'>Catergory</h1>
    `,
    ``,'CatergoriesDiv'
    );
    DECLARATION('#CatergoriesDiv',(ELEMENT)=>{
        CLEAR(ELEMENT);
        DEJSON('local','CatergoriesData',(data)=>{
            REDUX(data,(element)=>{
                CREATEELEMENT('div','FreeDivHolder',(HOLDER)=>{
                    DISPLAY(HOLDER,`
                        <img class='MovieImage' src='${CATERGORIESPATH+element.Image}'/>
                        <button class='CatergoryButton'>${element.Sections}</button>
                    `);
     
                    EVENT(HOLDER,'click',()=>{
                        STORE('','Path','CATERGORYPAGE');
                        STORE('local','CurrentSection',element.Sections);
                        MONITORING('User Selects ' + element.Sections +'Section' );
                        MOVIESSELECTIONPAGE();
                    })    
                    ADD(ELEMENT,HOLDER);
                })
            })
        })
    })
}