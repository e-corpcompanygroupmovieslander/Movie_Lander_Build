import { DELETEACCOUNTGET, DEVICELOGINAPI, LOGINAPI } from "../../Modules/Module.js";
import { CREATEACCOUNTPAGE } from "../CreateAccountPage/CreateAccountPage.js"
import { FORGOTPASSWORDPAGE } from "../ForgotPasswordPage/ForgotPasswordPage.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";

export const LOGINPAGE=()=>{
    
    WIDGET(`

        <img class='AppLogo' src='../Library/Images/app_icon.png'/>

        <input class='Email' type='email' placeholder='Enter Email'/>

        <input class='Password' type='password' placeholder='Enter Password'/>
        
        <h1 class='ForgotPassword'>Forgot Password? </h1>

        <button class='forestgreen' >Login</button>

        <button class='blue' >Create Account</button>
    
    `)

    CLICKED('.blue',()=>{CREATEACCOUNTPAGE()});

    CLICKED('.ForgotPassword',()=>{FORGOTPASSWORDPAGE()});

    CLICKED('.forestgreen',()=>{

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

    });


}

