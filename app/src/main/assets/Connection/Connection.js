import { APPLOCKDISPLAY } from "../Projects/AppLockPage/AppLockDisplayPage.js";
import { AUTOAPPDATADOWNLOAD } from "../Projects/AutoPagesDataDownload/AutoPagesDataDownload.js";
import { EMAILVERIFICATIONPAGE } from "../Projects/EmailVerificationPage/EmailVerificationPage.js";
import { HOMEPAGE } from "../Projects/HomePage/HomePage.js";
import { LOGINPAGE } from "../Projects/LoginPage/LoginPage.js";
import { MONITORING } from "../Projects/Monitoring/Monitoring.js";

export const CONNECTION = () => {
    HIDENAVIGATIONBAR();
    AUTOAPPDATADOWNLOAD();
    CONDITION(localStorage.getItem('AppLock'),
        ()=>APPLOCKDISPLAY(),
        ()=>CONDITION(localStorage.getItem('User'),
        ()=>CHECK(localStorage.getItem('User'),(result)=>{
            MONITORING('User Has Visited The App');
            HOMEPAGE();
        }),
            ()=>CONDITION(localStorage.getItem('UserData') && !localStorage.getItem('User'),
                ()=>EMAILVERIFICATIONPAGE(),
                ()=>LOGINPAGE()
            )
        )
    )
};