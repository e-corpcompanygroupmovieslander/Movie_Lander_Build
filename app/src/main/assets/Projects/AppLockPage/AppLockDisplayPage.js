import { EMAILVERIFICATIONPAGE } from "../EmailVerificationPage/EmailVerificationPage.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";
import { LOGINPAGE } from "../LoginPage/LoginPage.js";
import { LOCKRECOVERY } from "./RecoveryLock.js";

export const APPLOCKDISPLAY=()=>{
    WIDGET(`
        <img class='AppLogo' src='../Library/Images/app_icon.png'/>
        <input maxlength='5' class='VerificationCode' type='password' placeholder='Enter App Lock Pin'/>
        <h1 class='ForgotPassword'>Forgot Pin? </h1>
        <button class='forestgreen'>Unlock</button>
    `);
    CLICKED('.ForgotPassword',()=>{LOCKRECOVERY()});
    CLICKED('.forestgreen',()=>{
        const VerificationCode=document.querySelector('.VerificationCode');
        CONDITION(VerificationCode.value,
            ()=>CONDITION(localStorage.getItem('AppLock') === VerificationCode.value,
                ()=>CONDITION(localStorage.getItem('User'),
                ()=>HOMEPAGE(),
                    ()=>CONDITION(localStorage.getItem('UserData') && !localStorage.getItem('User'),
                        ()=>EMAILVERIFICATIONPAGE(),
                        ()=>LOGINPAGE()
                    )
                ),
                ()=>MESSAGE('Wrong App Lock Pin')
            ),
            ()=>MESSAGE('Enter App Lock Pin')
        )
    }) 
}