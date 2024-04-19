import { AUTOAPPDATADOWNLOAD } from "../Projects/AutoPagesDataDownload/AutoPagesDataDownload.js";
import { HOMEPAGE } from "../Projects/HomePage/HomePage.js";
import { LOGINPAGE } from "../Projects/LoginPage/LoginPage.js";

const CONNECTION = () => {

    CONDITION(localStorage.getItem('User'),

    ()=>HOMEPAGE(),
    ()=>LOGINPAGE()

    );

    AUTOAPPDATADOWNLOAD();

};


export { CONNECTION };
