import { CATERGORIESPATH, CATERGORYAPI } from "../../Modules/Module.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";

export const CATERGORYPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},`

        <h1 class='Profile'>Catergory</h1>

    `,
    ``,'CatergoriesDiv'
    );

    GETPACKAGE(CATERGORYAPI,'cors',(data)=>{

        DECLARATION('#CatergoriesDiv',(ELEMENT)=>{

            DISPLAY(ELEMENT,'')

            REDUX(data,(element)=>{

               console.log(element)

                CREATEELEMENT('div','FreeDivHolder',(HOLDER)=>{

                    DISPLAY(HOLDER,`

                        <img class='MovieImage' src='${CATERGORIESPATH+element.Image}'/>

                        <button class='CatergoryButton'>${element.Sections}</button>
                    
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