import { CREATEACCOUNTAPI, DEVICELOGINAPI, EMAILSENDERAPI, LOGINAPI } from "../../Modules/Module.js";
import { CREATEACCOUNTPAGE } from "../CreateAccountPage/CreateAccountPage.js"
import { HOMEPAGE } from "../HomePage/HomePage.js";
import { TERMSANDCONDITIONPAGE } from "../TermAndConditionPage/TermsAndConditionPage.js";
import { RESENDVERIFICATIONPAGE } from "./ResendVerification.js";

export const EMAILVERIFICATIONPAGE=()=>{
    WIDGET(`
        <img class='AppLogo' src='../Library/Images/app_icon.png'/>
        <input class='VerificationCode' type='email' placeholder='Enter Verification Code'/>
        <h1 class='ForgotPassword'>Resend Code? </h1>
        <button class='forestgreen'>Verify</button>
        <button class='brown' >Cancel</button>
    `)
    CLICKED('.ForgotPassword',()=>{
        DEJSON('local','UserData',(data)=>{
            DECLARATION('.ForgotPassword',(ELEMENT)=>{
                LOADER(ELEMENT);
                var EMAILDATA = {
                    recipientEmail: data.Email,
                    subject: "Movie Lander Registration",
                    body: `Dear ${data.UserName},\n\nThank you for using Movie Lander. To complete your registration, please use the following verification code:\n\nVerification Code: ${data.SecretCode}\n\nThis code will expire in 30 minutes. If you did not request this code, please ignore this email.\n\nBest regards, Movie Lander Team\n\n https://www.e-corpcompanygroup.com`
                };   
                POSTPACKAGE(EMAILSENDERAPI,'no-cors',EMAILDATA,(user)=>{
                    STORE('','User',data.Email)
                    RESENDVERIFICATIONPAGE();
                })
            })
        })
    })
    CLICKED('.brown',()=>{REMOVESTORE('local','UserData') , CREATEACCOUNTPAGE()});
    CLICKED('.forestgreen',()=>{
        DEJSON('local','UserData',(data)=>{
            const DATA=data;
            DECLARATION('.forestgreen',(ELEMENT)=>{
                const PIN=document.querySelector('.VerificationCode')
                CONDITION(PIN.value,
                    ()=>DECLARATION('.forestgreen',(ELEMENT)=>{
                        CONDITION(data.SecretCode === PIN.value,
                            ()=>DECLARATION('.forestgreen',(DES)=>{
                                LOADER(ELEMENT);
                                GETPACKAGE(LOGINAPI,'cors',(user)=>{
                                    CONDITION( user.Email ===  data.Email ,
                                        ()=>DECLARATION('.forestgreen',(ELEMENT)=>{
                                            MESSAGE('Email Taken ')
                                            ORIGIN(ELEMENT,'Verify')
                                        }),
                                        ()=>POSTPACKAGE(CREATEACCOUNTAPI,'no-cors',DATA,(users)=>{
                                            const DEVICEDATA={
                                                "User":DATA.SecretCode,
                                                "Device": getBrowserVersion(),
                                               "Date":new Date()
                                            }
                                            // Functions to get browser and OS information
                                            function getBrowserVersion() { return navigator.appVersion; }
                                            POSTPACKAGE(DEVICELOGINAPI,'no-cors',DEVICEDATA,(data)=>{
                                                STORE('local','User',DATA.SecretCode);
                                                TERMSANDCONDITIONPAGE();
                                            })
                                        })
                                    )
                                })
                            }),
        
                            ()=>DECLARATION('.forestgreen',(ELEMENT)=>{
                                MESSAGE('Wrong Verification Code ')
                            })
                        )
                    }),
                    ()=>DECLARATION('.forestgreen',(ELEMENT)=>{
                        MESSAGE('Enter Verification Code ')
                    })
                )
            })
        })
    })
}