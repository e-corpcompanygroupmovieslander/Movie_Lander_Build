import { HOMEPAGE } from "../Projects/HomePage/HomePage.js";
import { LOGINPAGE } from "../Projects/LoginPage/LoginPage.js";

const CONNECTION = () => {

    CONDITION(!localStorage.getItem('User'),

    ()=>HOMEPAGE(),
    ()=>LOGINPAGE()

    )

};


export { CONNECTION };
