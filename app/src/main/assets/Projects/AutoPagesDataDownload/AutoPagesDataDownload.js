import { CATERGORYAPI, FREEMOVIESAPI } from "../../Modules/Module.js"

const AUTOAPPDATADOWNLOAD=()=>{

    //CATERGORIES DATA
    GETPACKAGE(CATERGORYAPI,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{STORE('local','CatergoriesData',data)})
        REDUX(data,(element)=>{
            GETPACKAGE(element.link,'cors',(data)=>{
                JSONIFICATION(data,(data)=>{
                    STORE('local',element.Sections,data);
                }) 
            })
        })
    })

    //FREE MOVIES SECTION
    GETPACKAGE(FREEMOVIESAPI,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{
            STORE('local','FreeMovies',data)
        })
    })

}
export{AUTOAPPDATADOWNLOAD}