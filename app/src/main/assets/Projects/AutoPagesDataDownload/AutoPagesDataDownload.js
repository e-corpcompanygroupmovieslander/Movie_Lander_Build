import { ADVENTUREAPI, ANIMATIONAPI, CATERGORYAPI, FREEMOVIESAPI, HORRORAPI, MARATHONAPI, MOVIESAPI, NIGERIANAPI, ROMANCEAPI, SERIESAPI } from "../../Modules/Module.js"

const AUTOAPPDATADOWNLOAD=()=>{

    //CATERGORIES DATA
    GETPACKAGE(CATERGORYAPI,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{STORE('local','CatergoriesData',data)})
        REDUX(data,(element)=>{
            console.log(element)
            GETPACKAGE(element.link,'cors',(data)=>{
                JSONIFICATION(data,(data)=>{
                    STORE('local',element.Sections,data)
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