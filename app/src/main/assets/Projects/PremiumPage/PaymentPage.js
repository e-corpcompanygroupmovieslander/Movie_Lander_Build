import { ICONMODULE } from "../../Modules/Module.js";
import { MONITORING } from "../Monitoring/Monitoring.js";
import { PREMIUMPAGE } from "./PremiumPage.js";

export const PAYMENTPAGE = () => {

    BACKHEADERWIDGET(()=>{PREMIUMPAGE()},
    `
        <h1 class='Profile'>Payments</h1>

    `,
    `
    
        <img class='AppLogo' src='${ICONMODULE}caution.png'/>

        <h1>Please Read</h1>

        <p>
        After You Have Made Payments 

        <br><br>
        Please be patient Until This Page Below Appears .
        <br><br>
        Thank You.
        <br><br>
        Movie Lander Team

        </p>

        <div id='PaymentImgeDiv' class='View'>

        <img class='LatestImage' src='https://e-corpcompanygroupmovieslander.github.io/Movie-Lander-Build/app/src/main/assets/library/Assets/images/PaymentImages/paymentimage.png'/>
        
        </div>

        <button class='forestgreen'>Pay</button>

    `,'HomePaymentDiv'
    )

    CLICKED('.forestgreen',()=>{

        MONITORING('Wants to Pay')

        DECLARATION('#HomePaymentDiv',(ELEMENT)=>{
            DISPLAY(ELEMENT,`
                <iframe id='PaymentFrame' class='Payment' src='${sessionStorage.getItem('Link')}'></iframe>
                <img id='HomeLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>
            
            `)
        })

        DECLARATION('.Payment', (ELEMENT) => {
            // Access data from local storage
            var localStorageData = localStorage.getItem('UserData');
    
            // Pass data to the iframe
            ELEMENT.onload = function() {
                ELEMENT.contentWindow.postMessage(localStorageData, '*');
                // Once loaded, remove the loading message
                document.getElementById('HomeLoader').style.display = 'none';
            };
        });

    })

};