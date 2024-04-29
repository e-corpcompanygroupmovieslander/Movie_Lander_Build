import { CONNECTION } from "../../Connection/Connection.js";
import { DELETEACCOUNTPOLICY, EMAILSENDERAPI, ICONMODULE } from "../../Modules/Module.js";
import { ABOUTMEPAGE } from "../AboutMePage/AboutMePage.js"

export const DELETEACCOUNTPAGE=()=>{

    BACKHEADERWIDGET(()=>{ABOUTMEPAGE()},
    `
        <h1 class='Profile'>Delete Account</h1>
    `,
    `
    <div id='DeleteAccountPolicy' class='ScrollView'>
        <img id='HomeLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>
    </div>
    <input class='DeleteAccountInput' type='text' placeholder='Reason For Account Deletion'/>
    <button class='DeleteButton'>Delete</button>
    `,'CommentsPage'
    );
    DECLARATION('#DeleteAccountPolicy',(ELEMENT)=>{
        GETPACKAGE(DELETEACCOUNTPOLICY,'cors',(data)=>{
            DISPLAY(ELEMENT,data);
        })
    })
    const DELETEINPUT=document.querySelector('.DeleteAccountInput');
    CLICKED('.DeleteButton',()=>{
        CONDITION(!DELETEINPUT.value,
            ()=>MESSAGE('Enter Reason For Account Deletion'),
            ()=>DEJSON('local','UserData',(data)=>{
                DECLARATION('.DeleteButton',(ELEMENT)=>{
                    LOADER(ELEMENT);
                     //Get Users Data for Updating
                    function getBrowserVersion() { return navigator.appVersion; }

                    const UserData = {
                        "UserName": data.UserName,
                        "Email": data.Email,
                        "Password": data.Password,
                        "Password2": data.Password2,
                        "Date": data.Date,
                        "Telephone": data.Telephone,
                        "Location": data.Location,
                        "CreatedOn": data.CreatedOn,
                        "SecretCode": data.SecretCode,
                        "Premium":data.Premium ,
                        "AppVersion": localStorage.getItem('AppVersion'),
                        "Device": getBrowserVersion(),
                        "AccountDeleteMessage":DELETEINPUT.value,
                        "AccountDeleted":"TRUE",
                        "AccountDeletedDate":new Date(),
                        "AppLockPin":data.AppLockPin,
                        "ParenralControlPin":data.ParenralControlPin,
                        "Active":"OFF",
                        "LastActiveDate":new Date()
                    };
                    const UPDATELINK='https://script.google.com/macros/s/AKfycbwtBSaG-FZi2t5Hdi4xGu0TpC2pQiBmHAQ0ZgfRKERsVMUrlrV7TqfcUhInC2ywQwFo/exec';

                    POSTPACKAGE(UPDATELINK,'no-cors',UserData,(users)=>{
                        var EMAILDATA = {
                            recipientEmail: data.Email,
                            subject: "Movie Lander Account Deletion",
                            body: `Dear ${data.UserName},\n\nThank you for using Movie Lander. \n\n Your User Account  has been Deleted. \n\n For More Information \n\n movielander1999@gmail.com \n\n https://www.e-corpcompanygroup.com`
                        };
                        POSTPACKAGE(EMAILSENDERAPI,'no-cors',EMAILDATA,(user)=>{
                            MESSAGE('User Account Deleted');
                            setTimeout(() => {
                                localStorage.clear();
                                CONNECTION();    
                            }, 2000);
                        })
                    })
                })
            })
        )
    })
}