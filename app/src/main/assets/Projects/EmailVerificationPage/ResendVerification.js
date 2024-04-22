import { EMAILVERIFICATIONPAGE } from "./EmailVerificationPage.js"

export const RESENDVERIFICATIONPAGE=()=>{
    WIDGET(`
        <img class='AppLogo' src='../Library/Images/app_icon.png'/>
        <h1 class='LoaderMessage'>Verification Code Resent</h1>
        <p>
            User Password is Sent  <br><br> 
            ${sessionStorage.getItem('User')}
            <br><br>
            Check Email to get Your Password.
        </p>
        <button class='teal' >Back</button>
    `)
    CLICKED('.teal',()=>{EMAILVERIFICATIONPAGE()})
}