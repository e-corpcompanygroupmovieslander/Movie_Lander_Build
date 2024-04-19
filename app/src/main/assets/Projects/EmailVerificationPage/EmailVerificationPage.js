import { CREATEACCOUNTPAGE } from "../CreateAccountPage/CreateAccountPage.js"

export const EMAILVERIFICATIONPAGE=()=>{

    WIDGET(`

        <img class='AppLogo' src='../Library/Images/app_icon.png'/>

        <input type='email' placeholder='Enter Verification Code'/>

        <h1 class='ForgotPassword'>Resend Code? </h1>
        
        <button class='forestgreen'>Verify</button>

        <button class='brown' >Cancel</button>

    `)

    CLICKED('.brown',()=>{CREATEACCOUNTPAGE()})
    
}