import { ANIMATIONAPI, CATERGORYAPI, FREEMOVIESAPI, MARATHONAPI, MOVIESAPI, NIGERIANAPI, SERIESAPI } from "../../Modules/Module.js"

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

    //MARATHON SECTION
    GETPACKAGE(MARATHONAPI,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{STORE('local','MarathonMovies',data)})
    })

    //MARATHON SECTION
    GETPACKAGE(SERIESAPI,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{STORE('local','SeriesMovies',data)})
    })

    //NIGERIAN SECTION
    GETPACKAGE(NIGERIANAPI,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{STORE('local','NigerianMovies',data)})
    })

}
export{AUTOAPPDATADOWNLOAD}