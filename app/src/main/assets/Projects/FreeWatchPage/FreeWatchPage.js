import { FREEMOVIESAPI } from "../../Modules/Module.js";
import { HOMEPAGE } from "../HomePage/HomePage.js"

export const FREEWATCHPAGE=()=>{
    
    BACKHEADERWIDGET(()=>{HOMEPAGE()},`

            <h1 class='Profile'>Free Watch</h1>
        
        `,
        ``,'FreeWatchDiv'
    );

    GETPACKAGE(FREEMOVIESAPI,'cors',(data)=>{

        DECLARATION('#FreeWatchDiv',(ELEMENT)=>{

            DISPLAY(ELEMENT,data)

            REDUX(data,(element)=>{

                CREATEELEMENT('div','FreeDivHolder',(HOLDER)=>{



                })
    
            })

        })

    })

}