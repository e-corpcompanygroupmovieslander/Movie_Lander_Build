import { APPLOCKDISPLAY } from "../Projects/AppLockPage/AppLockDisplayPage.js";
import { AUTOAPPDATADOWNLOAD } from "../Projects/AutoPagesDataDownload/AutoPagesDataDownload.js";
import { EMAILVERIFICATIONPAGE } from "../Projects/EmailVerificationPage/EmailVerificationPage.js";
import { HOMEPAGE } from "../Projects/HomePage/HomePage.js";
import { LOGINPAGE } from "../Projects/LoginPage/LoginPage.js";

const CONNECTION = () => {

    HIDENAVIGATIONBAR()

    CONDITION(localStorage.getItem('AppLock'),
        ()=>APPLOCKDISPLAY(),
        ()=>CONDITION(localStorage.getItem('User'),
        ()=>HOMEPAGE(),
            ()=>CONDITION(localStorage.getItem('UserData') && !localStorage.getItem('User'),
                ()=>EMAILVERIFICATIONPAGE(),
                ()=>LOGINPAGE()
            )
        )
    )

    AUTOAPPDATADOWNLOAD();

};


export { CONNECTION };
