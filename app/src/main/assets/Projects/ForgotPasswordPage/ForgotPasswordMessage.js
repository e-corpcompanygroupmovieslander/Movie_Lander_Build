import { FORGOTPASSWORDPAGE } from "./ForgotPasswordPage.js"

export const FORGOTPASSWORDMESSAGEPAGE=()=>{

    WIDGET(`

        <img class='AppLogo' src='../Library/Images/app_icon.png'/>

        <h1 class='LoaderMessage'>Password Sent To Email</h1>
        
        <button class='teal' >Back</button>

    `)

    CLICKED('.teal',()=>{FORGOTPASSWORDPAGE()})
    
}