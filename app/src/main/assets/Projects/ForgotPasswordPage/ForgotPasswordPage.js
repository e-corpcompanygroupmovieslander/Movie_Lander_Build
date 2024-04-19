import { LOGINPAGE } from "../LoginPage/LoginPage.js"
import { FORGOTPASSWORDMESSAGEPAGE } from "./ForgotPasswordMessage.js"

export const FORGOTPASSWORDPAGE=()=>{

    WIDGET(`

        <img class='AppLogo' src='../Library/Images/app_icon.png'/>

        <input type='email' placeholder='Enter Email'/>
        
        <button class='forestgreen' >Recover</button>

        <button class='brown' >Cancel</button>

    `)

    CLICKED('.brown',()=>{LOGINPAGE()})

    CLICKED('.forestgreen',()=>{FORGOTPASSWORDMESSAGEPAGE()})
    
}