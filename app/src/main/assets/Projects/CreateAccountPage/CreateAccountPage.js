import { EMAILSENDERAPI, ICONMODULE, LOGINAPI } from "../../Modules/Module.js";
import { EMAILVERIFICATIONPAGE } from "../EmailVerificationPage/EmailVerificationPage.js";
import { LOGINPAGE } from "../LoginPage/LoginPage.js";

export const CREATEACCOUNTPAGE=()=>{
    WIDGET(`
        <img class='AppLogo' src='../Library/Images/app_icon.png'/>
        <input class='Username' type='text' placeholder='Enter User Name'/>
        <input class='UserEmail' type='email' placeholder='Enter User Email'/>
        <input class='UserPassword' type='password' placeholder='Enter User Password'/>
        <input class='UserDate' type='text' placeholder='Enter Birth day'/>
        <input class='Location' type='text' placeholder='Enter User Location' ReadOnly/>
        <h1 class='DisplayCode' >+</h1>
        <input class='Telephone' type='tel' maxlength='10'   placeholder='Enter User Telephone'/>
        <button class='forestgreen' >Create Account</button>
        <button class='blue' >Login</button>
        <div class='CountryDiv'>    
            <button class='brown'>Close</button>
            <div class='CoutryDivs'></div>
        </div>
    `);

    CLICKED('.blue',()=>{LOGINPAGE()});

    CLICKED('.UserDate',()=>{
        DECLARATION('.UserDate',(ELEMENT)=>{
            ELEMENT.type='date';
        })
    })

    CLICKED('.Location',()=>{
        const CoutryDivs=document.querySelector('.CoutryDivs');
        const CountryDiv=document.querySelector('.CountryDiv');
        const Location = document.querySelector('.Location');
        const Code =document.querySelector('.DisplayCode');
        STYLED(CountryDiv,'display','block');
        CLICKED('.brown',()=>{ 
            STYLED(CountryDiv,'display','none');   
        })
        REDUX(COUNTRYDATA,(element)=>{
            CREATEELEMENT('button','LocationButton',(ELEMENT)=>{
                DISPLAY(ELEMENT,`
                    <h1 class='LocationText'>${element.name}</h1>
                    <img class='LocationImage' src='${ICONMODULE}location.png'/>
                `)
                EVENT(ELEMENT,'click',()=>{
                    Location.value=element.name;
                    DISPLAY(Code,element.phoneCode);
                    STORE('','Code',element.phoneCode)
                    STYLED(CountryDiv,'display','none');    
                })
                ADD(CoutryDivs,ELEMENT);
            })
        })
    })
    CLICKED('.forestgreen',()=>{
        const USERNAME=document.querySelector('.Username');
        const USEREMAIL=document.querySelector('.UserEmail');
        const USERPASS=document.querySelector('.UserPassword');
        const USERDATE=document.querySelector('.UserDate');
        const USERLOCATION=document.querySelector('.Location');
        const USERTELEPHONE=document.querySelector('.Telephone');
        CONDITION(USERNAME.value,
            ()=>CONDITION(USEREMAIL.value,
                ()=>CONDITION(USERPASS.value,
                    ()=>CONDITION(USERDATE.value,
                        ()=>CONDITION(USERLOCATION.value,
                            ()=>CONDITION(USERTELEPHONE.value,
                                ()=>DECLARATION('.forestgreen',(ELEMENT)=>{
                                    const AGE = Math.floor((new Date() - new Date(USERDATE.value)) / (365 * 24 * 60 * 60 * 1000)); // Calculating age in years                                
                                    CONDITION(AGE >= 13,
                                        ()=>CHECK(USEREMAIL.value,()=>{
                                            LOADER(ELEMENT);
                                            // Function to generate a random string of a given length
                                            function generateRandomString(length) {
                                                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                                let result = '';
                                                for (let i = 0; i < length; i++) {
                                                    const randomIndex = Math.floor(Math.random() * characters.length);
                                                    result += characters.charAt(randomIndex);
                                                }
                                                return result;
                                            }
                                            const firstLetter = USEREMAIL.value.charAt(0).toUpperCase();
                                            const birthYear = USERDATE.value.slice(-4);
                                            const randomStringLength = 11 - 1 - 4;
                                            const randomString = generateRandomString(randomStringLength);
                                            const secretCode = `${firstLetter}${birthYear}${randomString}`.slice(0, 11);
                                            const UserData = {
                                                "UserName": USERNAME.value,
                                                "Email": USEREMAIL.value,
                                                "Password": USERPASS.value,
                                                "Password2": USERPASS.value,
                                                "Date": USERDATE.value,
                                                "Telephone": sessionStorage.getItem('Code') + USERTELEPHONE.value,
                                                "Location": USERLOCATION.value,
                                                "CreatedOn": new Date(),
                                                "SecretCode": secretCode,
                                                "Premium": "TRUE",
                                                "AppVersion": localStorage.getItem('AppVersion'),
                                                "Device": getBrowserVersion()
                                            };
                                            // Functions to get browser and OS information
                                            function getBrowserName() { return navigator.appName; }
                                            function getBrowserVersion() { return navigator.appVersion; }
                                            function getOSName() { return navigator.platform; }
                                            function getOSVersion() { return navigator.userAgent; }
                                            GETPACKAGE(LOGINAPI,'cors',(data)=>{
                                                FINDER(data,'Email',USEREMAIL.value,(user)=>{
                                                    CONDITION(user.Email === USEREMAIL.value ,
                                                        ()=>CHECK(data,(result)=>{
                                                            MESSAGE('User Email Taken'),
                                                            ORIGIN(ELEMENT,'Create Account')
                                                        }),
                                                        ()=>CHECK(data,(result)=>{

                                                            var EMAILDATA = {
                                                                recipientEmail: USEREMAIL.value,
                                                                subject: "Movie Lander Registration",
                                                                body: `Dear ${USERNAME.value},\n\nThank you for using Movie Lander. To complete your registration, please use the following verification code:\n\nVerification Code: ${secretCode}\n\nThis code will expire in 30 minutes. If you did not request this code, please ignore this email.\n\nBest regards, Movie Lander Team\n\n https://www.e-corpcompanygroup.com`
                                                            }; 
                                                            
                                                            POSTPACKAGE(EMAILSENDERAPI,'no-cors',EMAILDATA,(data)=>{
                                                                STORE('local','UserData',JSON.stringify(UserData))
                                                                EMAILVERIFICATIONPAGE();
                                                            }) 
                                                        }),   
                                                    )
                                                })
                                            })
                                        }),
                                        ()=>MESSAGE('User Must Be 13 Years and Above')
                                    );
                                }),
                                ()=>MESSAGE('Enter User Telephone')
                            ),
                            ()=>MESSAGE('Enter User Location')
                        ),
                        ()=>MESSAGE('Enter Date Of Birth')
                    ),
                    ()=>MESSAGE('Enter UserPassword')
                ),
                ()=>MESSAGE('Enter UserEmail')
            ),
            ()=>MESSAGE('Enter UserName')
        )
    });
}