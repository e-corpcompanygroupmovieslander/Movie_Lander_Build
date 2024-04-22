import { HOMEPAGE } from "../HomePage/HomePage.js"

export const TERMSANDCONDITIONPAGE=()=>{
    DEJSON('local','PrivacyText',(data)=>{
        WIDGET(`
            ${data}
            <button class='forestgreen'>I Agree</button>
        `);
        CLICKED('.forestgreen',()=>{
            HOMEPAGE()
        })
    })
}