import { LOGINAPI } from "../../Modules/Module.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";

export const LOGINUSERPAGE=()=>{ 
    
    const EMAIL=document.querySelector('.LoginEmail');
    const PASSWORD=document.querySelector('.LoginPassword');
   
    CONDITION(EMAIL.value,
        ()=>CONDITION(PASSWORD.value,
            ()=>DECLARATION('.forestgreen',(ELEMENT)=>{

                LOADER(ELEMENT);

                GETPACKAGE(LOGINAPI,'cors',(data)=>{

                    FINDER(data,'Email',EMAIL.value,(user)=>{

                        CONDITION(user.Email === EMAIL.value,

                            ()=>CONDITION(user.Password === PASSWORD.value,

                                ()=>CONDITION(user.AccountDeleted,

                                    ()=>CHECK(user,(result)=>{
        
                                        ORIGIN(ELEMENT,'Login');
        
                                        MESSAGE('Something Went Wrong');
        
                                    }),
                                    ()=>CHECK(user,(result)=>{
        
                                        STORE('local','User',result.SecretCode);

                                        JSONIFICATION(result,(data)=>{

                                            STORE('local','UserData',data);

                                            HOMEPAGE();

                                        });
        
                                    })
                                
                                ),
                                ()=>CHECK(user,(result)=>{
    
                                    ORIGIN(ELEMENT,'Login');
    
                                    MESSAGE('Wrong User Password');
    
                                })
                            
                            ),
                            ()=>CHECK(user,(result)=>{

                                ORIGIN(ELEMENT,'Login');

                                MESSAGE('Wrong User Email');

                            })
                        
                        )

                    })

                })

            }),
            ()=>MESSAGE('Enter User Password')
        )
    ,
        ()=>MESSAGE('Enter User Email')
    )
        
}

