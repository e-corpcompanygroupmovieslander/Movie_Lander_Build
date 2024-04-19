import { DELETEDACCOUNTMODULE, LOGINMODULE } from "../../Modules/Module.js";
import { CREATEACCOUNTPAGE } from "../CreateAccountPage/CreateAccountPage.js"
import { FORGOTPASSWORDPAGE } from "../ForgotAccountPage/LoginPage.js"
import { HOMEPAGE } from "../HomePage/HomePage.js";

const LOGINPAGE=()=>{
    
    const LOGINAPI='https://script.googleusercontent.com/macros/echo?user_content_key=FrRUgOqf3VCxfuxM0DsEGIbG4WJO7w6hzhW1PCjyGpXHv6s8QNW9KDYTTTgy6pgCb5mZAG3Xu4iV4iuzcr_Qqk6eBXABdmilm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC6FucGMPJDFo1vc7xUPuBYfMxKKRVodlYbzMzCKjeT4wckk24qUxiiMTCfM25DUQrZEICugxLUlQqQnl1bAwtTGq09GeSHZLQ&lib=MVjI1E0k9FXqhcOE_zgy4zMSoMAbC-O1l';
    const DELETEACCOUNTGET=`https://script.googleusercontent.com/macros/echo?user_content_key=lAYYsAjQVbByXET_kfABc7Aa7XCV4MDRw1G6EJEuqswiRKP0nyFFlmSZYG60mGKTbiljX4IK6hSM_g9s6ADFUwAyZC-fnFkRm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnF2Q8H1LAVtp-6OIwol2w20OiUzRP9L1GSLipr58ni3wZ3MWwAFSxGtWq7rEpkhOyEAbUlUeLRUiQmJN2-ivIdekd4xJLH4V-w&lib=MzWrqK870Yn5uC3rxsYUWkMSoMAbC-O1l`;


    WIDGET(`

        <img class='AppLogo' src='../Library/Images/app_icon.png'/>

        <input class='Email' type='email' placeholder='Enter User Email'/>

        <input  class='Password' type='password' placeholder='Enter User Password'/>

        <h1 class='ForgotPassword'>ForgotPassword?</h1>

        <button class='forestgreen'>Login</button>

        <button class='blue'>Create Account</button>
    
    `)

    CLICKED('.ForgotPassword',()=>{
        FORGOTPASSWORDPAGE();
    })

    CLICKED('.blue',()=>{
        CREATEACCOUNTPAGE();
    })

    CLICKED('.forestgreen',()=>{
        LOGINMODULE('.forestgreen','.Email','.Password',LOGINAPI,'Email','Password',(data)=>{
            DELETEDACCOUNTMODULE(DELETEACCOUNTGET,data.SecretCode,'User',(result)=>{
                CONDITION(data === true,
                    ()=>DECLARATION('.forestgreen',(ELEMENT)=>{
                        MESSAGE('Something Went Wrong')
                        ORIGIN(ELEMENT,'Login')
                    }),
                    ()=>CHECK(data,(result)=>{

                        STORE('local','User',data.SecretCode)
                        JSONIFICATION(data,(data)=>{
                            STORE('local','UserData',data);
                            HOMEPAGE()
                        })
                    }),
                
                )
            })
            
        });
    })

}

export{LOGINPAGE}