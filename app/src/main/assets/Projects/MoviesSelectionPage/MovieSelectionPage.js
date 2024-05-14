import { MOVIESPATH } from "../../Modules/Module.js";
import { CATERGORYPAGE } from "../CatergoryPage/CatergoryPage.js";
import { HOMEPAGE } from "../HomePage/HomePage.js"
import { MONITORING } from "../Monitoring/Monitoring.js";
import { MOVIESDETAILSPAGE } from "../MoviesDetailsPage/MoviesDetailsPage.js";

export const MOVIESSELECTIONPAGE=()=>{

    MONITORING('User Now On More Movies Section Pages')

    let NAVIGATION='';

    CONDITION(sessionStorage.getItem('Path') === 'CATERGORYPAGE' ,
        
        ()=>NAVIGATION=CATERGORYPAGE,

        ()=>NAVIGATION=HOMEPAGE
    
    )

    BACKHEADERWIDGET(()=>{NAVIGATION()},`

        <h1 class='Profile'>${localStorage.getItem('CurrentSection')}</h1>
        
        `,
        ``,'FreeWatchDiv'
    );

    DEJSON('local',localStorage.getItem('CurrentSection'),(data)=>{

        DECLARATION('#FreeWatchDiv',(ELEMENT)=>{

            CLEAR(ELEMENT)

            REDUX(data,(element)=>{

                CREATEELEMENT('div','FreeDivHolder',(HOLDER)=>{

                    DISPLAY(HOLDER,`

                        <img class='MovieImage' src='${element.MovieImage}'/>
                    
                    `);

                    EVENT(HOLDER,'click',()=>{

                        STORE('','MovieData',JSON.stringify(element));

                        MONITORING('User Selects ' + element.MovieName +'From'+ localStorage.getItem('CurrentSection')+ 'Section' );
    
                        MOVIESDETAILSPAGE();
                        
                    })
                    
                    ADD(ELEMENT,HOLDER);

                })
    
            })

        })

    })

        
}