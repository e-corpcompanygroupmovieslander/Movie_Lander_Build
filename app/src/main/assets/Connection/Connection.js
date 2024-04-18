import { HOMEPAGE } from "../Project/HomePage/HomePage.js"
import { LOGINPAGE } from "../Project/LoginPage/LoginPage.js"

const CONNECTION=()=>{
    CONDITION(localStorage.getItem('User'),
        ()=>HOMEPAGE(),
        ()=>LOGINPAGE()
    ) 
}

export{CONNECTION}