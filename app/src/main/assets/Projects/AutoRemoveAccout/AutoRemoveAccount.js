import { LOGINAPI } from "../../Modules/Module.js"
import { LOGINPAGE } from "../LoginPage/LoginPage.js"

export const AUTOREMOVEACCOUNT=()=>{
    GETPACKAGE(LOGINAPI,'cors',(data)=>{
        FINDER(data,'SecretCode',localStorage.getItem('User'),(User)=>{
            CONDITION(User.SecretCode === localStorage.getItem('User'),
            ()=>CHECK(User,(result)=>{
                JSONIFICATION(result,(data)=>{
                    STORE('local','UserData',data);
                })
            }),
            ()=>CHECK(User,(result)=>{
                REMOVESTORE('local','User');
                REMOVESTORE('local','UserData');
                LOGINPAGE();
            })
          )
        })
    })
}