import { CREATEACCOUNTPAGE } from "../CreateAccountPage/CreateAccountPage.js"
import { FORGOTPASSWORDPAGE } from "../ForgotPasswordPage/ForgotPasswordPage.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";

export const LOGINPAGE=()=>{
    
    WIDGET(`

        <img class='AppLogo' src='../Library/Images/app_icon.png'/>

        <input type='email' placeholder='Enter Email'/>

        <input type='password' placeholder='Enter Password'/>
        
        <h1 class='ForgotPassword'>Forgot Password? </h1>

        <button class='forestgreen' >Login</button>

        <button class='blue' >Create Account</button>
    
    `)

    CLICKED('.blue',()=>{CREATEACCOUNTPAGE()});

    CLICKED('.ForgotPassword',()=>{FORGOTPASSWORDPAGE()})

    CLICKED('.forestgreen',()=>{HOMEPAGE()});

}

