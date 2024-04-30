import { DELETEACCOUNTPOLICY, DELETEACCOUNTPOST, EMAILSENDERAPI, ICONMODULE, LOGINAPI, UPDATELINK } from "../../Modules/Module.js";

APPMODE(localStorage.getItem('AppColur'),'','#121212');
APPCOLOR('','#dcdcdc')
WIDGET(`
    <header>
        <img id='AppLogo' src='../../Library/Images/app_icon.png'/>
        <h1 class='Profile'>Delete Account</h1>
    </header>
    <div id='DeleteAccountPage' class='MovieDetailsDataDiv'>
        <img id='AnimationsLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>
    </div>
    <input class='DeleteAccountInput' type='email' placeholder='Enter User Email'/>
    <button class='DeleteButton'>Delete</button>
`)

DECLARATION('.MovieDetailsDataDiv',(ELEMENT)=>{
    GETPACKAGE(DELETEACCOUNTPOLICY,'cors',(data)=>{
        DISPLAY(ELEMENT,data)
    })
})
const DELETEINPUT=document.querySelector('.DeleteAccountInput');
CLICKED('.DeleteButton',()=>{
    DECLARATION('.DeleteButton',(ELEMENT)=>{
        CONDITION(!DELETEINPUT.value,
            ()=>MESSAGE('Enter User Eamil'),
            ()=>CHECK(DELETEINPUT.value,(result)=>{
                LOADER(ELEMENT);
                GETPACKAGE(LOGINAPI,'cors',(data)=>{
                    FINDER(data,'Email',DELETEINPUT.value,(user)=>{
                        CONDITION(user.Email === DELETEINPUT.value,
                            ()=>CHECK(user,(result)=>{
                                const UserData={
                                    "AccountDeleteMessage":DELETEINPUT.value ,
                                    "AccountDeleted": "True",
                                    "AccountDeletedDate": new Date (),
                                    "Active": "FALSE",
                                    "AppLockPin": data.AppLockPin,
                                    "AppVersion": data.AppVersion,
                                    "CreatedOn": data.CreatedOn,
                                    "Date": data.Date,
                                    "Device": getBrowserVersion(),
                                    "Email": data.Email,
                                    "LastActiveDate": new Date (),
                                    "Location": data.Location,
                                    "ParentalControlPin": data.ParentalControlPin,
                                    "Password": data.Password,
                                    "Password2": data.Password2,
                                    "Premium": data.Premium,
                                    "PremiumDateExpiry": data.PremiumDateExpiry,
                                    "PremiumDatePay": data.PremiumDatePay,
                                    "PremiumMessage": data.PremiumMessage,
                                    "PremiumNumber": data.PremiumNumber,
                                    "PremiumType": data.PremiumType,
                                    "SavedMovies":data.SavedMovies,
                                    "SecretCode": data.SecretCode,
                                    "Telephone": data.Telephone,
                                    "UserData": data.UserData,
                                    "UserName": data.UserName
                                }
                                POSTPACKAGE(UPDATELINK,'cors',UserData,(data)=>{
                                    var EMAILDATA = {
                                        recipientEmail: result.Email,
                                        subject: "Movie Lander Account Deletion",
                                        body: `Dear ${result.UserName},\n\nThank you for using Movie Lander. \n\n Your User Account  has been Deleted. \n\n For More Information \n\n movielander1999@gmail.com \n\n https://www.e-corpcompanygroup.com`
                                    };
                                    POSTPACKAGE(EMAILSENDERAPI,'no-cors',EMAILDATA,(user)=>{
                                        MESSAGE('User Account Deleted');
                                        ORIGIN(ELEMENT,'Delete');
                                    })
                                })
                            }),
                            ()=>CHECK(user,(result)=>{
                                MESSAGE('User Email Doesnot Exist');
                                ORIGIN(ELEMENT,'Delete')
                            })
                        )
                    })    
                })    
            })        
        )
    })
})