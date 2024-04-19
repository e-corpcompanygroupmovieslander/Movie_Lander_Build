import { HOMEPAGE } from "../Projects/HomePage/HomePage.js";
import { CREATACCOUNTVERIFICATION, LOGINPAGE } from "../Projects/Pages.js";

const CONNECTION = () => {

    CONDITION(localStorage.getItem("User"),
        () => HOMEPAGE(),
        () => CONDITION(localStorage.getItem('UserData') && !localStorage.getItem('User'),
            ()=>CREATACCOUNTVERIFICATION(),
            ()=>LOGINPAGE()
        )
    );

};


export { CONNECTION };
