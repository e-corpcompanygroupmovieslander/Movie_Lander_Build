import { MOVIESPATH } from "../../../../Modules/Module.js";

export const HOMEHORROR=()=>{

    DEJSON('local','Horror',(data)=>{

        DECLARATION('#Horror',(ELEMENT)=>{
    
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
    
                            EXTERNALJS(MOVIEDETAILSPAGEAPI,()=>{MOVIESDETAILSPAGE()})
                           
                        })
    
                        ADD(ELEMENT,ANIME);
    
                    })
    
                })

            })

        })

    })

}
