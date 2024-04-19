import { LOGINPAGE } from "../LoginPage/LoginPage.js";

export const CREATEACCOUNTPAGE=()=>{
    
    WIDGET(`

        <img class='AppLogo' src='../Library/Images/app_icon.png'/>

        <input type='text' placeholder='Enter User Name'/>

        <input type='email' placeholder='Enter User Email'/>

        <input type='password' placeholder='Enter User Password'/>

        <input type='text' placeholder='Enter Birth day'/>

        <input type='text' placeholder='Enter User Location'/>

        <input type='tel' maxlength='10'   placeholder='Enter User Telephone'/>
        
        <button class='forestgreen' >Create Account</button>

        <button class='blue' >Login</button>

    `);

    CLICKED('.blue',()=>{LOGINPAGE()})

}