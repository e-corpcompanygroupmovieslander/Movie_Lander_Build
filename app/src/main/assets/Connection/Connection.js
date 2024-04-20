import { AUTOAPPDATADOWNLOAD } from "../Projects/AutoPagesDataDownload/AutoPagesDataDownload.js";
import { EMAILVERIFICATIONPAGE } from "../Projects/EmailVerificationPage/EmailVerificationPage.js";
import { HOMEPAGE } from "../Projects/HomePage/HomePage.js";
import { LOGINPAGE } from "../Projects/LoginPage/LoginPage.js";

const CONNECTION = () => {

    CONDITION(localStorage.getItem('User'),

        ()=>HOMEPAGE(),
        ()=>CONDITION(localStorage.getItem('UserData') && !localStorage.getItem('User'),
            ()=>EMAILVERIFICATIONPAGE(),
            ()=>LOGINPAGE()
        )

    );

    AUTOAPPDATADOWNLOAD();

};


export { CONNECTION };
