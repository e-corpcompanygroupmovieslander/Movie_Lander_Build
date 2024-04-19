import { EMAILVERIFICATIONPAGE } from "./EmailVerificationPage.js"

export const RESENDVERIFICATIONPAGE=()=>{

    WIDGET(`

        <img class='AppLogo' src='../Library/Images/app_icon.png'/>

        <h1 class='LoaderMessage'>Verification Code Sent To Email</h1>
        
        <button class='teal' >Back</button>

    `)

    CLICKED('.teal',()=>{EMAILVERIFICATIONPAGE()})
    
}