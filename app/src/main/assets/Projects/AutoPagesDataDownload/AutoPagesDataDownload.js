import { CONNECTION } from "../../Connection/Connection.js"
import { CATERGORYAPI, DELETEACCOUNTGET, FREEMOVIESAPI, LOGINAPI } from "../../Modules/Module.js"

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

    //USER DETAILS UPDATE
    GETPACKAGE(LOGINAPI,'cors',(data)=>{
        FINDER(data,'SecretCode',localStorage.getItem('User'),(User)=>{
            CONDITION(User.SecretCode === localStorage.getItem('User'),
            ()=>CHECK(User,(result)=>{
                JSONIFICATION(result,(data)=>{
                    STORE('local','UserData',data)
                })
            }),
            ()=>CHECK(User,(result)=>{
                REMOVESTORE('local','UserData');
            })
          )
        })
    })

    //USER DELETED ACCOUNT
    GETPACKAGE(DELETEACCOUNTGET,'cors',(data)=>{
        FINDER(data,'User',localStorage.getItem('User'),(user)=>{
            CONDITION(user.User === localStorage.getItem('User'),
            ()=>CHECK(user,(result)=>{
                CLEARDATA();
                CONNECTION();
            }),
            ()=>CHECK(user,(result)=>{
                console.log('User Account Still Active')
            })
          )
        })
    })

}
export{AUTOAPPDATADOWNLOAD}