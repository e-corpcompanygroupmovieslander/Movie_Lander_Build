import { CATERGORYAPI } from "../../Modules/Module.js"

const AUTOAPPDATADOWNLOAD=()=>{

    //CATERGORIES DATA
    GETPACKAGE(CATERGORYAPI,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{STORE('local','CatergoriesData',data)})
    })

}
export{AUTOAPPDATADOWNLOAD}