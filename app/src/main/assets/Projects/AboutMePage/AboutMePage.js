import { CONNECTION } from "../../Connection/Connection.js"
import { ICONMODULE } from "../../Modules/Module.js";
import { DELETEACCOUNTPAGE } from "../DeleteAccountPage/DeleteAccountPage.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js"

export const ABOUTMEPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()},
        `
            <h1 class='Profile'>Biography</h1>

        `,
        `
            <button class='MyDataButton'>

                    <h1 class='mytitle'>User Name</h1>

                    <img class='myIcon' src='${ICONMODULE}user.png'/>
                
                    <h1 class='MyData'>${data.UserName}</h1>

            </button>

            <button class='MyDataButton'>

                    <h1 class='mytitle'>Email</h1>

                    <img class='myIcon' src='${ICONMODULE}gmail.png'/>
                
                    <h1 class='MyData'>${data.Email}</h1>

            </button>

            <button class='MyDataButton'>

                    <h1 class='mytitle'>Location</h1>

                    <img class='myIcon' src='${ICONMODULE}location.png'/>
                
                    <h1 class='MyData'>${data.Location}</h1>

            </button>

            <button class='MyDataButton'>

                    <h1 class='mytitle'>Contact</h1>

                    <img class='myIcon' src='${ICONMODULE}phone.png'/>
                
                    <h1 class='MyData'>+${data.Telephone}</h1>

            </button>

             <button class='MyDataButton'>

                    <h1 class='mytitle'>Reference Code</h1>

                    <img class='myIcon' src='${ICONMODULE}secretcode.png'/>
                
                    <h1 class='MyData'>${data.SecretCode}</h1>

            </button>

            <br><br>

            <button id='LogOut' class='Button'>

                    <h1 class='Buttontitle'>Log Out</h1>

                    <img class='ButtonIcon' src='${ICONMODULE}logout.png'/>
                
            </button>

            <button id='DeleteAccount' class='Button'>

                    <h1 class='Buttontitle'>Delete My Account</h1>

                    <img class='ButtonIcon' src='${ICONMODULE}delete.png'/>
                
            </button>

            <br><br>

        `,''
        
        );

        CLICKED('#LogOut',()=>{

            REMOVESTORE('local','User');

            REMOVESTORE('local','UserData');

            REMOVESTORE('local','Premium');
            
            REMOVESTORE('local','PremiumUser');

            CONNECTION();

        })

        CLICKED('#DeleteAccount',()=>{

           DELETEACCOUNTPAGE();

        })

    })

}