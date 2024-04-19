import { CREATEACCOUNTPAGE } from "../CreateAccountPage/CreateAccountPage.js"
import { FORGOTPASSWORDPAGE } from "../ForgotAccountPage/LoginPage.js"

const LOGINPAGE=()=>{

    WIDGET(`

        <img class='AppLogo' src='../Library/Images/app_icon.png'/>

        <input type='email' placeholder='Enter User Email'/>

        <input type='password' placeholder='Enter User Password'/>

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

}

export{LOGINPAGE}