import { HOMEPAGE } from "../Projects/HomePage/HomePage.js";
import { LOGINPAGE } from "../Projects/Pages.js";

const CONNECTION = () => {

    CONDITION(
        localStorage.getItem("User"),
        () => HOMEPAGE(),
        () => LOGINPAGE()
    );

};


export { CONNECTION };
