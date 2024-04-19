import { CATERGORYAPI, FREEMOVIESAPI } from "../../Modules/Module.js"

const AUTOAPPDATADOWNLOAD=()=>{

    //CATERGORIES DATA
    GETPACKAGE(CATERGORYAPI,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{STORE('local','CatergoriesData',data)})
    })

    //FREE MOVIES
    GETPACKAGE(FREEMOVIESAPI,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{STORE('local','FreeMoviesData',data)})
    })


}
export{AUTOAPPDATADOWNLOAD}