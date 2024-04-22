import { EMAILVERIFICATIONPAGE } from "./EmailVerificationPage.js"

export const RESENDVERIFICATIONPAGE=()=>{
    WIDGET(`
        <img class='AppLogo' src='../Library/Images/app_icon.png'/>
        <h1 class='LoaderMessage'>Verification Code Resent</h1>
        <p>
            User Verification Code is Sent to  <br><br> 
            ${sessionStorage.getItem('User')}
            <br><br>
            Check Email to get Your Verification Code.
        </p>
        <button class='teal'>Back</button>
    `)
    CLICKED('.teal',()=>{EMAILVERIFICATIONPAGE()})
}