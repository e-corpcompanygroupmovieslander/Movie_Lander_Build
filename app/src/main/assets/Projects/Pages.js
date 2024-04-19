//LOGIN PAGE
import{CREATEACCOUNTMODULE, DELETEDACCOUNTMODULE,EMAILSENDERMODULE,FORGOTPASSWORDMODULE,ICONMODULE,LOGINMODULE,POSTDEVICEMODULE}from "../Modules/Module.js";import{HOMEPAGE}from "./HomePage/HomePage.js";
const LOGINPAGE=()=>{const LOGINAPI="https://script.googleusercontent.com/macros/echo?user_content_key=FrRUgOqf3VCxfuxM0DsEGIbG4WJO7w6hzhW1PCjyGpXHv6s8QNW9KDYTTTgy6pgCb5mZAG3Xu4iV4iuzcr_Qqk6eBXABdmilm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC6FucGMPJDFo1vc7xUPuBYfMxKKRVodlYbzMzCKjeT4wckk24qUxiiMTCfM25DUQrZEICugxLUlQqQnl1bAwtTGq09GeSHZLQ&lib=MVjI1E0k9FXqhcOE_zgy4zMSoMAbC-O1l";const DELETEACCOUNTGET=`https://script.googleusercontent.com/macros/echo?user_content_key=lAYYsAjQVbByXET_kfABc7Aa7XCV4MDRw1G6EJEuqswiRKP0nyFFlmSZYG60mGKTbiljX4IK6hSM_g9s6ADFUwAyZC-fnFkRm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnF2Q8H1LAVtp-6OIwol2w20OiUzRP9L1GSLipr58ni3wZ3MWwAFSxGtWq7rEpkhOyEAbUlUeLRUiQmJN2-ivIdekd4xJLH4V-w&lib=MzWrqK870Yn5uC3rxsYUWkMSoMAbC-O1l`;const DEVICELOGINAPI="https://script.google.com/macros/s/AKfycbyAcmACiGB_9snZ0eClLSSPP-gRFsvERRvdHxCbfg7s8XbpRAsQD89spq7asP9ZvsgUTA/exec";WIDGET(` <img class='AppLogo' src='../Library/Images/app_icon.png'/><input class='Email' type='email' placeholder='Enter User Email'/><input class='Password' type='password' placeholder='Enter User Password'/><h1 class='ForgotPassword'>ForgotPassword?</h1><button class='forestgreen'>Login</button><button class='blue'>Create Account</button>`);DECLARATION(".ForgotPassword",(ELEMENT)=>{STYLED(ELEMENT,"fontSize","20px");STYLED(ELEMENT,"textAlign","right",STYLED(ELEMENT,'color','#cdcdcd'));STYLED(ELEMENT,"margin","5% 5%")});CLICKED(".ForgotPassword",()=>{FORGOTPASSWORDPAGE()});CLICKED(".blue",()=>{REMOVESTORE('','UserData');CREATEACCOUNTPAGE()});CLICKED(".forestgreen",()=>{LOGINMODULE(".forestgreen",".Email",".Password",LOGINAPI,"Email","Password",(data)=>{DELETEDACCOUNTMODULE(DELETEACCOUNTGET,data.SecretCode,"User",(result)=>{CONDITION(data===!0,()=>DECLARATION(".forestgreen",(ELEMENT)=>{MESSAGE("Something Went Wrong");ORIGIN(ELEMENT,"Login")}),()=>CHECK(data,(result)=>{STORE("local","User",data.SecretCode);JSONIFICATION(data,(result)=>{STORE("local","UserData",result);POSTDEVICEMODULE(data.SecretCode,DEVICELOGINAPI,(data)=>{HOMEPAGE()})})}))})})})};
//FORGOT PASSWORD PAGE
const FORGOTPASSWORDPAGE=()=>{WIDGET(` <img class='AppLogo' src='../Library/Images/app_icon.png'/><input class='ForgotEmail' type='email' placeholder='Enter User Email' /><button class='forestgreen'>Recover</button><button class='brown'>cancel</button>`); CLICKED('.brown',()=>{LOGINPAGE()}); CLICKED('.forestgreen',()=>{const LOGINAPI='https://script.googleusercontent.com/macros/echo?user_content_key=FrRUgOqf3VCxfuxM0DsEGIbG4WJO7w6hzhW1PCjyGpXHv6s8QNW9KDYTTTgy6pgCb5mZAG3Xu4iV4iuzcr_Qqk6eBXABdmilm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC6FucGMPJDFo1vc7xUPuBYfMxKKRVodlYbzMzCKjeT4wckk24qUxiiMTCfM25DUQrZEICugxLUlQqQnl1bAwtTGq09GeSHZLQ&lib=MVjI1E0k9FXqhcOE_zgy4zMSoMAbC-O1l';const EMAILSENDERAPI='https://script.google.com/macros/s/AKfycbx2ggoY0dlGnZwTnMvB7fsS09xhNsMKHWnI_ydFwRM1phACjVyFO-5ueBz9jsOpd_E/exec';FORGOTPASSWORDMODULE(LOGINAPI,'.ForgotEmail','Email','.forestgreen',EMAILSENDERAPI,()=>{FORGOTPASSWORDPAGE()})})};
//CREATE ACCOUNT PAGE
const CREATEACCOUNTPAGE=()=>{WIDGET(` <img class='AppLogo' src='../Library/Images/app_icon.png'/><input class='UserName' type='text' placeholder='Enter UserName' /><input class='UserEmail' type='email' placeholder='Enter UserEmail' /><input class='UserPassword' type='password' placeholder='Enter User Password' /><input class='UserDate' type='text' placeholder='Enter Date Of Birth' /><input class='Userlocation' type='text' placeholder='Enter User Location' Readonly /><h1 class='CodeDisplay'></h1><input class='UserTel' maxlength='10' type='tel' placeholder='Enter User Telephone' /><button class='forestgreen'>Create Account</button><button class='blue'>Login</button>`),CLICKED(".forestgreen",()=>{const LOGINAPI="https://script.googleusercontent.com/macros/echo?user_content_key=FrRUgOqf3VCxfuxM0DsEGIbG4WJO7w6hzhW1PCjyGpXHv6s8QNW9KDYTTTgy6pgCb5mZAG3Xu4iV4iuzcr_Qqk6eBXABdmilm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC6FucGMPJDFo1vc7xUPuBYfMxKKRVodlYbzMzCKjeT4wckk24qUxiiMTCfM25DUQrZEICugxLUlQqQnl1bAwtTGq09GeSHZLQ&lib=MVjI1E0k9FXqhcOE_zgy4zMSoMAbC-O1l";CREATEACCOUNTMODULE(".forestgreen",".UserName",".UserEmail",".UserPassword",".UserDate",".Userlocation",".UserTel",LOGINAPI,"Email",(user)=>{const EMAILSENDERAPI="https://script.google.com/macros/s/AKfycbx2ggoY0dlGnZwTnMvB7fsS09xhNsMKHWnI_ydFwRM1phACjVyFO-5ueBz9jsOpd_E/exec";DEJSON("local","UserData",(data)=>{var EMAILDATA={recipientEmail:data.Email,subject:"Movie Lander Login",body:`Dear ${data.UserName},\n\nThank you for using Movie Lander App. To complete your Account registration,please use the following verification code:\n\nVerification Code:${data.SecretCode}\n\nThis code will expire in 30 minutes. If you did not request this code,please ignore this email.\n\nBest regards,Movie Lander Team\n\n For More Information\n\n https://www.e-corpcompanygroup.com `,};EMAILSENDERMODULE(EMAILSENDERAPI,EMAILDATA,(data)=>{CREATACCOUNTVERIFICATION()})})})});DECLARATION(".CodeDisplay",(ELEMENT)=>{STYLED(ELEMENT,"position","absolute");STYLED(ELEMENT,"left","5%");STYLED(ELEMENT,"fontSize","20px");CONDITION(sessionStorage.getItem("UserData"),()=>CHECK(sessionStorage.getItem("UserData"),(result)=>{DEJSON("","UserData",(data)=>{DISPLAY(ELEMENT,data.UserCode)})}),()=>DISPLAY(ELEMENT,"+"))}),DECLARATION(".UserName",(ELEMENT)=>{CONDITION(sessionStorage.getItem("UserData"),()=>CHECK(sessionStorage.getItem("UserData"),(result)=>{DEJSON("","UserData",(data)=>{ELEMENT.value=data.UserName})}),()=>(ELEMENT.value=""))});DECLARATION(".UserEmail",(ELEMENT)=>{CONDITION(sessionStorage.getItem("UserData"),()=>CHECK(sessionStorage.getItem("UserData"),(result)=>{DEJSON("","UserData",(data)=>{ELEMENT.value=data.UserEmail})}),()=>(ELEMENT.value=""))});DECLARATION(".UserPassword",(ELEMENT)=>{CONDITION(sessionStorage.getItem("UserData"),()=>CHECK(sessionStorage.getItem("UserData"),(result)=>{DEJSON("","UserData",(data)=>{ELEMENT.value=data.UserPassword})}),()=>(ELEMENT.value=""))});DECLARATION(".UserDate",(ELEMENT)=>{CLICKED(".UserDate",()=>{ELEMENT.type="date"}),CONDITION(sessionStorage.getItem("UserData"),()=>CHECK(sessionStorage.getItem("UserData"),(result)=>{DEJSON("","UserData",(data)=>{ELEMENT.value=data.UserDate})}),()=>(ELEMENT.value=""))});DECLARATION(".Userlocation",(ELEMENT)=>{CONDITION(sessionStorage.getItem("UserData"),()=>CHECK(sessionStorage.getItem("UserData"),(result)=>{DEJSON("","UserData",(data)=>{ELEMENT.value=data.Userlocation})}),()=>(ELEMENT.value=""))});DECLARATION(".UserTel",(ELEMENT)=>{STYLED(ELEMENT,"width","75%");STYLED(ELEMENT,"left","20%");CONDITION(sessionStorage.getItem("UserData"),()=>CHECK(sessionStorage.getItem("UserData"),(result)=>{DEJSON("","UserData",(data)=>{ELEMENT.value=data.UserTel})}),()=>(ELEMENT.value=""))}),CLICKED(".blue",()=>{LOGINPAGE()}),CLICKED(".Userlocation",()=>{const UserName=document.querySelector(".UserName");const UserEmail=document.querySelector(".UserEmail");const UserPassword=document.querySelector(".UserPassword");const UserDate=document.querySelector(".UserDate");const Userlocation=document.querySelector(".Userlocation");const UserTel=document.querySelector(".UserTel");const STOREDDATA={UserName:UserName.value,UserEmail:UserEmail.value,UserPassword:UserPassword.value,UserDate:UserDate.value,Userlocation:Userlocation.value,UserTel:UserTel.value,UserCode:"+"};JSONIFICATION(STOREDDATA,(data)=>{STORE("","UserData",data)}),DISPLAY("",` <button class='brown'>Close</button><div class='CountryDivHolder'></div>`),CLICKED(".brown",()=>{CREATEACCOUNTPAGE()});DECLARATION(".CountryDivHolder",(ELEMENT)=>{STYLED(ELEMENT,"top","75px"),STYLED(ELEMENT,"borderTop","1px solid #dcdcdc50");STYLED(ELEMENT,"overflowY","auto"),REDUX(COUNTRYDATA,(element)=>{CREATEELEMENT("button","Button",(BUTTON)=>{STYLED(BUTTON,"display","inline-flex"),STYLED(BUTTON,"marginTop","0.2rem"),STYLED(BUTTON,"marginBottom","0.2rem"),DISPLAY(BUTTON,` <h1 class='Name'>${element.name}</h1><img class='LocationIcons' src='${ICONMODULE}location.png'/>`),EVENT(BUTTON,"click",()=>{STORE("","Code",element.phoneCode),DEJSON("","UserData",(data)=>{const STOREDDATA={UserName:data.UserName,UserEmail:data.UserEmail,UserPassword:data.UserPassword,UserDate:data.UserDate,Userlocation:element.name,UserTel:data.UserTel,UserCode:element.phoneCode,};JSONIFICATION(STOREDDATA,(data)=>{STORE("","UserData",data)}),CREATEACCOUNTPAGE()})}),ADD(ELEMENT,BUTTON)})})})})}
//EMAIL VERIFICATION PAGE
const CREATACCOUNTVERIFICATION=()=>{
    DEJSON('local','UserData',(data)=>{
        WIDGET(`
        <img class='AppLogo' src='../Library/Images/app_icon.png'/>
        <p>Verification Code Sent To <br><br> ${data.Email}</p>
        <input class='VerificationCode' type='text' placeholder='Enter Verification Code'/>
        <h1 class='ForgotPassword'>Resend Code?</h1>
        <button class='forestgreen'>Verify</button>
        <button class='brown'>Cancel</button>
        `)
        DECLARATION(".ForgotPassword",(ELEMENT)=>{
            CLICKED('.ForgotPassword',()=>{
                LOADER(ELEMENT);
                var EMAILDATA = {
                    recipientEmail: data.Email ,
                    subject: "Movie Lander Login",
                    body: `Dear ${data.UserName},\n\nThank you for using Movie Lander App. To complete your registration, please use the following verification code:\n\nVerification Code: ${data.SecretCode}\n\nThis code will expire in 30 minutes. If you did not request this code, please ignore this email.\n\nBest regards, Movie Lander Team\n\n For Information Please Contact us  \n https://www.e-corpcompanygroup.com`
                };
                const EMAILSENDERAPI='https://script.google.com/macros/s/AKfycbx2ggoY0dlGnZwTnMvB7fsS09xhNsMKHWnI_ydFwRM1phACjVyFO-5ueBz9jsOpd_E/exec';


                EMAILSENDERMODULE(EMAILSENDERAPI,EMAILDATA,()=>{
                    WIDGET(`
                    <img class='AppLogo' src='../Library/Images/app_icon.png'/>
                    <p>Verification Code ReSent To <br><br> ${data.Email}</p>
                    <button class='teal'>Back</button>
                    `)
                    CLICKED('.teal',()=>{
                        CREATACCOUNTVERIFICATION()
                    })

                })
            })
            STYLED(ELEMENT,"fontSize","20px");STYLED(ELEMENT,"textAlign","right",STYLED(ELEMENT,'color','#cdcdcd'));STYLED(ELEMENT,"margin","5% 5%")},
        )

        CLICKED('.forestgreen',()=>{
            DECLARATION('.forestgreen',(ELEMENT)=>{
                const VerificationCode=document.querySelector('.VerificationCode');
                CONDITION(VerificationCode.value,
                    ()=>CONDITION(VerificationCode.value === data.SecretCode,
                        ()=>CHECK(data,(result)=>{
                            console.log(result)
                            LOADER(ELEMENT)
                            const DEVICELOGINAPI='https://script.google.com/macros/s/AKfycbyAcmACiGB_9snZ0eClLSSPP-gRFsvERRvdHxCbfg7s8XbpRAsQD89spq7asP9ZvsgUTA/exec';
                            const LOGINAPI='https://script.googleusercontent.com/macros/echo?user_content_key=FrRUgOqf3VCxfuxM0DsEGIbG4WJO7w6hzhW1PCjyGpXHv6s8QNW9KDYTTTgy6pgCb5mZAG3Xu4iV4iuzcr_Qqk6eBXABdmilm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC6FucGMPJDFo1vc7xUPuBYfMxKKRVodlYbzMzCKjeT4wckk24qUxiiMTCfM25DUQrZEICugxLUlQqQnl1bAwtTGq09GeSHZLQ&lib=MVjI1E0k9FXqhcOE_zgy4zMSoMAbC-O1l';
                            GETPACKAGE(LOGINAPI,'cors',(user)=>{
                                FINDER(user,'Email',result.Email,(users)=>{
                                    console.log(users)
                                    CONDITION(users.Email === result.Email,
                                        ()=>CHECK(users,(result)=>{
                                            MESSAGE('User Email Taken');
                                            ORIGIN(ELEMENT,'Verify');
                                        }),
                                        ()=>POSTDEVICEMODULE(data.SecretCode,DEVICELOGINAPI,(data)=>{
                                            const CREATEACCOUNTAPI=`https://script.google.com/macros/s/AKfycbyxZa-t073EY1dMSxIUXuiXD9B03gcgaJyGTpXvV8qpRPG6TGMtk6WKocQ8Rsf0aXEF/exec`;
                                            POSTPACKAGE(CREATEACCOUNTAPI,'no-cors',result,(data)=>{
                                                STORE('local','User',result.SecretCode);
                                                HOMEPAGE();
                                            })
                                        }) 
                                    )
                                })
                            })
    
                        }),
                        ()=>MESSAGE('Wrong Verification Code')
                    ),
                    ()=>MESSAGE('Enter Verification Code')
                )
            })
        })



        CLICKED('.brown',()=>{
            CLEARDATA();
            LOGINPAGE();
        })
    })

};


export{LOGINPAGE,CREATACCOUNTVERIFICATION};