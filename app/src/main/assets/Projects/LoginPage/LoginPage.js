import { CREATEACCOUNTPAGE } from "../CreateAccountPage/CreateAccountPage.js"
import { FORGOTPASSWORDPAGE } from "../ForgotPasswordPage/ForgotPasswordPage.js";
import { LOGINUSERPAGE } from "./LoginUser.js";

export const LOGINPAGE=()=>{ 

    WIDGET(`

        <img class='AppLogo' src='../Library/Images/app_icon.png'/>

        <input class='Email' type='email' placeholder='Enter Email'/>

        <input class='Password' type='password' placeholder='Enter Password'/>

        <h1 class='ForgotPassword'>Forgot Password? </h1>

        <button class='forestgreen' >Login</button>

        <button class='blue' >Create Account</button>

    `);

    CLICKED('.ForgotPassword',()=>{FORGOTPASSWORDPAGE()});

    CLICKED('.forestgreen',()=>{LOGINUSERPAGE()});

    CLICKED('.blue',()=>{CREATEACCOUNTPAGE()});
  
}