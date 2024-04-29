import { DELETEACCOUNTGET, DEVICELOGINAPI, LOGINAPI } from "../../Modules/Module.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";

export const LOGINUSERPAGE=()=>{ 
    const Email=document.querySelector('.Email');
        const Password=document.querySelector('.Password');
        const BUTTON=document.querySelector('.forestgreen');
        CONDITION(Email.value,
            ()=>CONDITION(Password.value,
                ()=>CHECK(Password.value,(result)=>{
                    LOADER(BUTTON);
                    GETPACKAGE(LOGINAPI,'cors',(data)=>{
                        FINDER(data,'Email',Email.value,(user)=>{
                            CONDITION(user.Email === Email.value,
                                ()=>CONDITION(user.Password === Password.value ,
                                    ()=>CHECK(user,(result)=>{
                                        CONDITION(user.AccountDeleted,
                                            ()=>CHECK(user,(result)=>{
                                                MESSAGE('Something Went Wrong')
                                                ORIGIN(BUTTON,'Login')
                                            }),
                                            ()=>CHECK(user,(result)=>{
                                                JSONIFICATION(result,(data)=>{
                                                    STORE('local','User',data.SecretCode);
                                                    STORE('local','UserData',data);
                                                    HOMEPAGE()
                                                })
                                            }),
                                        
                                        )
                                    }),
                                    ()=>CHECK(user,(result)=>{
                                        MESSAGE('Wrong User Password')
                                        ORIGIN(BUTTON,'Login')
                                    })
                                ),
                                ()=>CHECK(user,(result)=>{
                                    MESSAGE('Wrong User Email')
                                    ORIGIN(BUTTON,'Login')
                                })
                            )
                        })
                    })
                }),
                ()=>MESSAGE('Enter User Password')
            ),
            ()=>MESSAGE('Enter User Email')
        )
}

