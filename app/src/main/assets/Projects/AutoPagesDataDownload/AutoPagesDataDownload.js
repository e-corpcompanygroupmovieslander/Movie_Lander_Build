import { ANIMATIONAPI, CATERGORYAPI, FREEMOVIESAPI, MOVIESAPI } from "../../Modules/Module.js"

const AUTOAPPDATADOWNLOAD=()=>{

    //CATERGORIES DATA
    GETPACKAGE(CATERGORYAPI,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{STORE('local','CatergoriesData',data)})
    })

    //FREE MOVIES
    GETPACKAGE(FREEMOVIESAPI,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{STORE('local','FreeMoviesData',data)})
    })

    //ANIMATION SECTION
    GETPACKAGE(ANIMATIONAPI,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{STORE('local','AnimationsMovies',data)})
    })

    //ACTION SECTION
    GETPACKAGE(MOVIESAPI,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{STORE('local','ActionMovies',data)})
    })

}
export{AUTOAPPDATADOWNLOAD}