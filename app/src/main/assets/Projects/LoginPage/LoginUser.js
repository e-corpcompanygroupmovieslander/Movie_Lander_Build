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
                                        GETPACKAGE(DELETEACCOUNTGET,'cors',(data)=>{
                                            FINDER(data,'User',user.SecretCode,(users)=>{
                                                CONDITION(users.User === user.SecretCode,
                                                    ()=>CHECK(users,(result)=>{
                                                        MESSAGE('Something Went Wrong');
                                                        ORIGIN(BUTTON,'Login')
                                                    }),
                                                    ()=>CHECK(users,(result)=>{
                                                        const DEVICEDATA={
                                                            "User":user.SecretCode,
                                                            "Device": getBrowserVersion(),
                                                           "Date":new Date()
                                                        }
                                                        // Functions to get browser and OS information
                                                        function getBrowserVersion() { return navigator.appVersion; }
                                                        POSTPACKAGE(DEVICELOGINAPI,'no-cors',DEVICEDATA,(data)=>{
                                                            STORE('local','User',user.SecretCode);
                                                            JSONIFICATION(user,(data)=>{
                                                                STORE('local','UserData',data);
                                                                HOMEPAGE();
                                                            })
                                                        })
                                                    })
                                                )
                                            })
                                        })
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
