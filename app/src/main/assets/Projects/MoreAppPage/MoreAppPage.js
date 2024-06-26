import { ADVERTSPATH, MOREAPPSAPI } from "../../Modules/Module.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js";


export const MOREAPPSPAGE=()=>{
    
    BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()},`

            <h1 class='Profile'>More Apps</h1>
        
        `,
        ``,'MoreApppsDiv'
    );

    DEJSON('local','MoreAppps',(data)=>{

        DECLARATION('#MoreApppsDiv',(ELEMENT)=>{

            CLEAR(ELEMENT)

            REDUX(data,(element)=>{

                CREATEELEMENT('div','FreeDivHolder',(HOLDER)=>{

                    DISPLAY(HOLDER,`

                        <img class='MovieImage' src='${ADVERTSPATH+element.APPIMAGE}'/>
                    
                    `);

                    EVENT(HOLDER,'click',()=>{

                        WEBSITE(element.APPLINK);
                        
                    })
                    
                    ADD(ELEMENT,HOLDER);

                })
    
            })

        })

    })

}