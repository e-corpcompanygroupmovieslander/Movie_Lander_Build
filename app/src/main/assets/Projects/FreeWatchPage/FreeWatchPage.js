import { FREEMOVIESAPI, MOVIESPATH } from "../../Modules/Module.js";
import { HOMEPAGE } from "../HomePage/HomePage.js"

export const FREEWATCHPAGE=()=>{
    
    BACKHEADERWIDGET(()=>{HOMEPAGE()},`

        <h1 class='Profile'>Free Watch</h1>
        
        `,
        ``,'FreeWatchDiv'
    );

    GETPACKAGE(FREEMOVIESAPI,'cors',(data)=>{

        DECLARATION('#FreeWatchDiv',(ELEMENT)=>{

            DISPLAY(ELEMENT,'')

            REDUX(data,(element)=>{

               console.log(element)

                CREATEELEMENT('div','FreeDivHolder',(HOLDER)=>{

                    DISPLAY(HOLDER,`

                        <img class='MovieImage' src='${MOVIESPATH+element.MovieImage}'/>
                    
                    `);

                    EVENT(HOLDER,'click',()=>{

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