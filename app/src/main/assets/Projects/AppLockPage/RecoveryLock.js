import { EMAILSENDERAPI, LOGINAPI } from "../../Modules/Module.js"
import { APPLOCKDISPLAY } from "./AppLockDisplayPage.js"

export const LOCKRECOVERY=()=>{

    WIDGET(`

        <img class='AppLogo' src='../Library/Images/app_icon.png'/>

        <input class='Email' type='email' placeholder='Enter Email'/>
        
        <button class='forestgreen' >Recover</button>

        <button class='brown' >Cancel</button>

    `)

    CLICKED('.brown',()=>{APPLOCKDISPLAY()})

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
                                    subject: "Movie Lander AppLock Recovery",
                                    body: `Dear ${user.UserName},\n\nThank you for using Movie Lander. To Access Your Account, Your AppLock Pin Is:\n\n Pin: ${localStorage.getItem('AppLock')}\n\nOpen Movie Lander And Enter The Pin Above .\n Don't Share Your Pin. If you did not request this Pin, please ignore this email.\n\nBest regards, Movie Lander Team\n\n https://www.e-corpcompanygroup.com`
                                };
                                POSTPACKAGE(EMAILSENDERAPI,'no-cors',EMAILDATA,(data)=>{
                                    WIDGET(`

                                    <img class='AppLogo' src='../Library/Images/app_icon.png'/>
                            
                                    <h1>App Lock Recovered</h1>
                            
                                    <p>
                                        User App Lock is Sent  <br><br> 
                                        ${sessionStorage.getItem('User')}
                                        <br><br>
                                        Check Email to get Your AppLock.

                                    </p>
                                    
                                    <button class='teal' >Back</button>
                            
                                `)
                            
                                CLICKED('.teal',()=>{LOCKRECOVERY()})
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