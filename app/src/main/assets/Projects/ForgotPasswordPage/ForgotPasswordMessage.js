import { FORGOTPASSWORDPAGE } from "./ForgotPasswordPage.js"

export const FORGOTPASSWORDMESSAGEPAGE=()=>{
    WIDGET(`
        <img class='AppLogo' src='../Library/Images/app_icon.png'/>
        <h1>Password Recovered</h1>
        <p>
            User Password is Sent  <br><br> 
            ${sessionStorage.getItem('User')}
            <br><br>
            Check Email to get Your Password.
        </p>
        <button class='teal' >Back</button>
    `)
    CLICKED('.teal',()=>{FORGOTPASSWORDPAGE()})
}