import { ICONMODULE } from "../../Modules/Module.js";
import { PREMIUMPAGE } from "../PremiumPage/PremiumPage.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js"

export const ACCOUNTSETTINGSPAGE=()=>{

    REMOVESTORE('','PremiumPath')

    CONDITION(localStorage.getItem('PremiumUser'),
        ()=> DEJSON('local','PremiumUser',(data)=>{
            
            BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()},
            `
                <h1 class='Profile'>Premium Account</h1>
    
            `,
            `
                <button class='MyDataButton'>
                    <h1 class='mytitle'>User Pay Code</h1>
                    <img class='myIcon' src='${ICONMODULE}user.png'/>
                    <h1 class='MyData'>${data.User}</h1>
                </button>
    
                <button class='MyDataButton'>
                    <h1 class='mytitle'>Subscription Date</h1>
                    <img class='myIcon' src='${ICONMODULE}user.png'/>
                    <h1 class='MyData'>${data.PayDate}</h1>
                </button>
    
                <button class='MyDataButton'>
                    <h1 class='mytitle'>Subscription Expiry</h1>
                    <img class='myIcon' src='${ICONMODULE}user.png'/>
                    <h1 class='MyData'>${data.ExpiryDate}</h1>
                </button>
    
                <h2>Current Subscription Message</h2>
    
                <p>${data.Message}</p>
    
                <button class='forestgreen'>Upgrade Subsciption</button>
    
                <br><br>
    
            `,'DataDiv'
            );
    
            CLICKED('.forestgreen',()=>{PREMIUMPAGE()})
    
            DECLARATION('.forestgreen',(ELEMENT)=>{
    
                STORE('','PremiumPath','SETTINGS')
    
                CONDITION(data.AmountPaid === 'YEARLY' ,
                    ()=>STYLED(ELEMENT,'display','none'),
                    ()=>STYLED(ELEMENT,'display','block')
                )
    
            })
    
        }),
        ()=>CHECK(localStorage.getItem('PremiumUser'),(result)=>{

            BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()},
            `
                <h1 class='Profile'>Premium Account</h1>
    
            `,
            `
                <img class='AppLogo' src='${ICONMODULE}secretcode.png'/>

                <h2>User Has No Subscription</h2>

                <p>Click Upgrade Subscription To Unlock This Page</p>
    
                <button class='forestgreen'>Upgrade Subsciption</button>
    
                <br><br>
    
            `,'DataDiv'
            );
    
            CLICKED('.forestgreen',()=>{STORE('','PremiumPath','SETTINGS'),PREMIUMPAGE()})

        }

        )
    )

   


}