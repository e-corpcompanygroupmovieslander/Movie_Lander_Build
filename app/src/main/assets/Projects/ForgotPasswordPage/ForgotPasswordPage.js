import { EMAILSENDERAPI, LOGINAPI } from "../../Modules/Module.js"
import { LOGINPAGE } from "../LoginPage/LoginPage.js"
import { FORGOTPASSWORDMESSAGEPAGE } from "./ForgotPasswordMessage.js"

export const FORGOTPASSWORDPAGE=()=>{

    WIDGET(`

        <img class='AppLogo' src='../Library/Images/app_icon.png'/>

        <input class='Email' type='email' placeholder='Enter Email'/>
        
        <button class='forestgreen' >Recover</button>

        <button class='brown' >Cancel</button>

    `)

    CLICKED('.brown',()=>{LOGINPAGE()})

    CLICKED('.forestgreen',()=>{

        const Email=document.querySelector('.Email');
        const BUTTON=document.querySelector('.forestgreen');

        CONDITION(Email.value,
            ()=>CHECK(Email.value,(result)=>{
                LOADER(BUTTON);
                GETPACKAGE(LOGINAPI,'cors',(data)=>{
                    FINDER(data,'Email',Email.value,(user)=>{
                        CONDITION(user.Email === Email.value,
                            ()=>CHECK(user,(result)=>{
                                STORE('','User',user.Email)
                                var EMAILDATA = {
                                    recipientEmail: user.Email,
                                    subject: "Movie Lander Password Recovery",
                                    body: `Dear ${user.UserName},\n\nThank you for using Movie Lander. To complete your Login Into Your Account, Your Account Password Is:\n\nPassword: ${user.Password}\n\nOpen Movie Lander And Login Using Your Password Above .\n Don't Share Your Password. If you did not request this code, please ignore this email.\n\nBest regards, Movie Lander Team\n\n https://www.e-corpcompanygroup.com`
                                };
                                POSTPACKAGE(EMAILSENDERAPI,'no-cors',EMAILDATA,(data)=>{
                                    FORGOTPASSWORDMESSAGEPAGE();
                                })
                            }),
                            ()=>CHECK(user,(result)=>{
                                MESSAGE('Email Not Found');
                                ORIGIN(BUTTON,'Recover')
                            })
                        )
                    })
                })
                }
            ),
            ()=>MESSAGE('Enter User Email')
        )

    })
    
}