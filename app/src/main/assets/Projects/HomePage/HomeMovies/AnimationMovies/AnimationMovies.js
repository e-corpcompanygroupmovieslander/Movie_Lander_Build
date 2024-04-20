import { MOVIESPATH } from "../../../../Modules/Module.js";

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
    
                            STORE('','Path','HomePage');
    
                            STORE('','MovieData',JSON.stringify(element));
    
                        })
    
                        ADD(ELEMENT,ANIME);
    
                    })
    
    
                })

            })

        })

    })

}
