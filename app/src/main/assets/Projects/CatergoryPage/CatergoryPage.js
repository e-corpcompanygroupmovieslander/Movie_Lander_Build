import { CATERGORIESPATH, CATERGORYAPI } from "../../Modules/Module.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";

export const CATERGORYPAGE=()=>{

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
     
                            
                    })
                         
                    ADD(ELEMENT,HOLDER);
     
                })
         
            })


        })

    })

}