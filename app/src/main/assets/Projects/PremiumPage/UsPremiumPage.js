import { ACCOUNTSETTINGSPAGE } from "../AccountSettingsPage/AccountSettingsPage.js";
import { MOVIESDETAILSPAGE } from "../MoviesDetailsPage/MoviesDetailsPage.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js"
import { PAYMENTPAGE } from "./PaymentPage.js";
import { PESAPAL } from "./PesaPal.js";


export const USPREMIUMPAGE=()=>{

    REMOVESTORE('', 'Link');

    DEJSON('local','UserData',(data)=>{

        let NAVIGATOR='';

        CONDITION(sessionStorage.getItem('PremiumPath') === 'MoviesDetails' ,
        ()=>NAVIGATOR=MOVIESDETAILSPAGE,
        ()=>CONDITION(sessionStorage.getItem('PremiumPath') === 'SETTINGS',
            ()=>NAVIGATOR=ACCOUNTSETTINGSPAGE,
            ()=>NAVIGATOR=USERACCOUNTPAGE
        )
    )

        BACKHEADERWIDGET(()=>{NAVIGATOR()},
        `
            <h1 class='Profile'>Subscription</h1>

        `,
        `

            <div class='View'>

                <h1 class='PremuimTitle'>Daily</h1>

                <h1 class='Price'>1USD</h1>

                <h2 class='PremiumFeatures'>Features</h2>

                <div class='AccessDiv'>

                    <h1 class='PremuimAccess'>Get Access To All Movies</h1>
                
                </div>

                <button id='UGDaily' class='paybtn'>Pay</button>
            
            </div>

            <div class='View'>

                <h1 class='PremuimTitle'>Weekly</h1>

                <h1 class='Price'>5 USD</h1>

                <h2 class='PremiumFeatures'>Features</h2>

                <div class='AccessDiv'>

                    <h1 class='PremuimAccess'>Get Access To All Movies</h1>

                    <h1 class='PremuimAccess'>Get Access To Community</h1>
            
                </div>

                <button id='UGWeekly' class='paybtn'>Pay</button>
            
            </div>


            <div class='View'>

                <h1 class='PremuimTitle'>Monthly</h1>

                <h1 class='Price'>25 USD</h1>

                <h2 class='PremiumFeatures'>Features</h2>

                <div class='AccessDiv'>

                    <h1 class='PremuimAccess'>Get Access To All Movies</h1>

                    <h1 class='PremuimAccess'>Get Access To Community</h1>

                    <h1 class='PremuimAccess'>Get 3 days Extra</h1>
            
                </div>

                <button id='UGMonthly' class='paybtn'>Pay</button>
            
            </div>


            <div class='View'>

                <h1 class='PremuimTitle'>Yearly</h1>

                <h1 class='Price'>100 USD</h1>

                <h2 class='PremiumFeatures'>Features</h2>

                
                <div class='AccessDiv'>

                    <h1 class='PremuimAccess'>Get Access To All Movies</h1>

                    <h1 class='PremuimAccess'>Get Access To Community</h1>

                    <h1 class='PremuimAccess'>Get 1GB Cloud Storage</h1>

                    <h1 class='PremuimAccess'>Get 2 months Extra</h1>
            
                </div>

                <button id='UGYearly' class='paybtn'>Pay</button>
            
            </div>

            <br><br>

        `,'')

        //UGANDAN PAYMENT

        DECLARATION('#UGDaily',(ELEMENT)=>{
        
            EVENT(ELEMENT,'click',()=>{
    
                DECLARATION('#UGWeekly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                
                DECLARATION('#UGMonthly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                DECLARATION('#UGYearly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                
                LOADER(ELEMENT)
    
                PESAPAL(`https://e-corpcompanygroupmovieslander.github.io/Movie-Lander-Build/app/src/main/assets/Pages/PaymentPages/DailyPayment/index.html?MyData=${localStorage.getItem('User')}`,1,'USD',(data)=>{
    
                    STORE('','Link',data)
    
                    if (sessionStorage.getItem('Link')) {
                        
                        PAYMENTPAGE();
    
                    } else {
                        
                        MESSAGE('Something Went Wrong ');
    
                    }
    
                });
    
            })
    
        })
    
        DECLARATION('#UGWeekly',(ELEMENT)=>{
    
            EVENT(ELEMENT,'click',()=>{
    
                DECLARATION('#UGDaily',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                
                DECLARATION('#UGMonthly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                DECLARATION('#UGYearly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                LOADER(ELEMENT)
    
                PESAPAL(`https://e-corpcompanygroupmovieslander.github.io/Movie-Lander-Build/app/src/main/assets/Pages/PaymentPages/WeeklyPayment/index.html?MyData=${localStorage.getItem('User')}`,5,'USD',(data)=>{
    
                    STORE('','Link',data)
    
                    if (sessionStorage.getItem('Link')) {
                        
                        PAYMENTPAGE();
    
                    } else {
                        
                        MESSAGE('Something Went Wrong ');
    
                    }
                
                });
    
            })
    
        })
    
        DECLARATION('#UGMonthly',(ELEMENT)=>{
    
            EVENT(ELEMENT,'click',()=>{
    
                DECLARATION('#UGDaily',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                
                DECLARATION('#UGWeekly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                DECLARATION('#UGYearly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                LOADER(ELEMENT)
    
                PESAPAL(`https://e-corpcompanygroupmovieslander.github.io/Movie-Lander-Build/app/src/main/assets/Pages/PaymentPages/MonthlyPayment/index.html?MyData=${localStorage.getItem('User')}`,20,'USD',(data)=>{
    
                STORE('','Link',data)
    
                    if (sessionStorage.getItem('Link')) {
                        
                        PAYMENTPAGE();
    
                    } else {
                        
                        MESSAGE('Something Went Wrong ');
    
                    }
    
                
                });
    
            })
    
        })
    
        DECLARATION('#UGYearly',(ELEMENT)=>{
    
            EVENT(ELEMENT,'click',()=>{
    
                DECLARATION('#UGDaily',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                
                DECLARATION('#UGWeekly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                DECLARATION('#UGMonthly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                LOADER(ELEMENT)
    
                PESAPAL(`https://e-corpcompanygroupmovieslander.github.io/Movie-Lander-Build/app/src/main/assets/Pages/PaymentPages/YearlyPayment/index.html?MyData=${localStorage.getItem('User')}`,100,'USD',(data)=>{
    
                STORE('','Link',data)
    
                    if (sessionStorage.getItem('Link')) {
                        
                        PAYMENTPAGE();
    
                    } else {
                        
                        MESSAGE('Something Went Wrong ');
    
                    }
                
                });
    
            })
    
        })
    
    })

}