import{HOMEPAGE}from "./HomePage/HomePage.js";const LOGINPAGE=()=>{const LOGINAPI="https://script.googleusercontent.com/macros/echo?user_content_key=FrRUgOqf3VCxfuxM0DsEGIbG4WJO7w6hzhW1PCjyGpXHv6s8QNW9KDYTTTgy6pgCb5mZAG3Xu4iV4iuzcr_Qqk6eBXABdmilm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC6FucGMPJDFo1vc7xUPuBYfMxKKRVodlYbzMzCKjeT4wckk24qUxiiMTCfM25DUQrZEICugxLUlQqQnl1bAwtTGq09GeSHZLQ&lib=MVjI1E0k9FXqhcOE_zgy4zMSoMAbC-O1l";const DELETEACCOUNTGET=`https://script.googleusercontent.com/macros/echo?user_content_key=lAYYsAjQVbByXET_kfABc7Aa7XCV4MDRw1G6EJEuqswiRKP0nyFFlmSZYG60mGKTbiljX4IK6hSM_g9s6ADFUwAyZC-fnFkRm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnF2Q8H1LAVtp-6OIwol2w20OiUzRP9L1GSLipr58ni3wZ3MWwAFSxGtWq7rEpkhOyEAbUlUeLRUiQmJN2-ivIdekd4xJLH4V-w&lib=MzWrqK870Yn5uC3rxsYUWkMSoMAbC-O1l`;const DEVICELOGINAPI="https://script.google.com/macros/s/AKfycbyAcmACiGB_9snZ0eClLSSPP-gRFsvERRvdHxCbfg7s8XbpRAsQD89spq7asP9ZvsgUTA/exec";WIDGET(` <img class='AppLogo' src='../Library/Images/app_icon.png'/><input class='Email' type='email' placeholder='Enter User Email'/><input class='Password' type='password' placeholder='Enter User Password'/><h1 class='ForgotPassword'>ForgotPassword?</h1><button class='forestgreen'>Login</button><button class='blue'>Create Account</button>`);DECLARATION(".ForgotPassword",(ELEMENT)=>{STYLED(ELEMENT,"fontSize","20px");STYLED(ELEMENT,"textAlign","right",STYLED(ELEMENT,'color','#cdcdcd'));STYLED(ELEMENT,"margin","5% 5%")});CLICKED(".ForgotPassword",()=>{FORGOTPASSWORDPAGE()});CLICKED(".blue",()=>{REMOVESTORE('','UserData');CREATEACCOUNTPAGE()});CLICKED(".forestgreen",()=>{LOGINMODULE(".forestgreen",".Email",".Password",LOGINAPI,"Email","Password",(data)=>{DELETEDACCOUNTMODULE(DELETEACCOUNTGET,data.SecretCode,"User",(result)=>{CONDITION(data===!0,()=>DECLARATION(".forestgreen",(ELEMENT)=>{MESSAGE("Something Went Wrong");ORIGIN(ELEMENT,"Login")}),()=>CHECK(data,(result)=>{STORE("local","User",data.SecretCode);JSONIFICATION(data,(result)=>{STORE("local","UserData",result);POSTDEVICEMODULE(data.SecretCode,DEVICELOGINAPI,(data)=>{HOMEPAGE()})})}))})})})};const FORGOTPASSWORDPAGE=()=>{WIDGET(` <img class='AppLogo' src='../Library/Images/app_icon.png'/><input class='ForgotEmail' type='email' placeholder='Enter User Email' /><button class='forestgreen'>Recover</button><button class='brown'>cancel</button>`);CLICKED('.brown',()=>{LOGINPAGE()});CLICKED('.forestgreen',()=>{const LOGINAPI='https://script.googleusercontent.com/macros/echo?user_content_key=FrRUgOqf3VCxfuxM0DsEGIbG4WJO7w6hzhW1PCjyGpXHv6s8QNW9KDYTTTgy6pgCb5mZAG3Xu4iV4iuzcr_Qqk6eBXABdmilm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC6FucGMPJDFo1vc7xUPuBYfMxKKRVodlYbzMzCKjeT4wckk24qUxiiMTCfM25DUQrZEICugxLUlQqQnl1bAwtTGq09GeSHZLQ&lib=MVjI1E0k9FXqhcOE_zgy4zMSoMAbC-O1l';const EMAILSENDERAPI='https://script.google.com/macros/s/AKfycbx2ggoY0dlGnZwTnMvB7fsS09xhNsMKHWnI_ydFwRM1phACjVyFO-5ueBz9jsOpd_E/exec';FORGOTPASSWORDMODULE(LOGINAPI,'.ForgotEmail','Email','.forestgreen',EMAILSENDERAPI,()=>{FORGOTPASSWORDPAGE()})})};const CREATEACCOUNTPAGE=()=>{WIDGET(` <img class='AppLogo' src='../Library/Images/app_icon.png'/><input class='UserName' type='text' placeholder='Enter UserName' /><input class='UserEmail' type='email' placeholder='Enter UserEmail' /><input class='UserPassword' type='password' placeholder='Enter User Password' /><input class='UserDate' type='text' placeholder='Enter Date Of Birth' /><input class='Userlocation' type='text' placeholder='Enter User Location' Readonly /><h1 class='CodeDisplay'></h1><input class='UserTel' maxlength='10' type='tel' placeholder='Enter User Telephone' /><button class='forestgreen'>Create Account</button><button class='blue'>Login</button>`),CLICKED(".forestgreen",()=>{const LOGINAPI="https://script.googleusercontent.com/macros/echo?user_content_key=FrRUgOqf3VCxfuxM0DsEGIbG4WJO7w6hzhW1PCjyGpXHv6s8QNW9KDYTTTgy6pgCb5mZAG3Xu4iV4iuzcr_Qqk6eBXABdmilm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC6FucGMPJDFo1vc7xUPuBYfMxKKRVodlYbzMzCKjeT4wckk24qUxiiMTCfM25DUQrZEICugxLUlQqQnl1bAwtTGq09GeSHZLQ&lib=MVjI1E0k9FXqhcOE_zgy4zMSoMAbC-O1l";CREATEACCOUNTMODULE(".forestgreen",".UserName",".UserEmail",".UserPassword",".UserDate",".Userlocation",".UserTel",LOGINAPI,"Email",(user)=>{const EMAILSENDERAPI="https://script.google.com/macros/s/AKfycbx2ggoY0dlGnZwTnMvB7fsS09xhNsMKHWnI_ydFwRM1phACjVyFO-5ueBz9jsOpd_E/exec";DEJSON("local","UserData",(data)=>{var EMAILDATA={recipientEmail:data.Email,subject:"Movie Lander Login",body:`Dear ${data.UserName},\n\nThank you for using Movie Lander App. To complete your Account registration,please use the following verification code:\n\nVerification Code:${data.SecretCode}\n\nThis code will expire in 30 minutes. If you did not request this code,please ignore this email.\n\nBest regards,Movie Lander Team\n\n For More Information\n\n https://www.e-corpcompanygroup.com `,};EMAILSENDERMODULE(EMAILSENDERAPI,EMAILDATA,(data)=>{CREATACCOUNTVERIFICATION()})})})});DECLARATION(".CodeDisplay",(ELEMENT)=>{STYLED(ELEMENT,"position","absolute");STYLED(ELEMENT,"left","5%");STYLED(ELEMENT,"fontSize","20px");CONDITION(sessionStorage.getItem("UserData"),()=>CHECK(sessionStorage.getItem("UserData"),(result)=>{DEJSON("","UserData",(data)=>{DISPLAY(ELEMENT,data.UserCode)})}),()=>DISPLAY(ELEMENT,"+"))}),DECLARATION(".UserName",(ELEMENT)=>{CONDITION(sessionStorage.getItem("UserData"),()=>CHECK(sessionStorage.getItem("UserData"),(result)=>{DEJSON("","UserData",(data)=>{ELEMENT.value=data.UserName})}),()=>(ELEMENT.value=""))});DECLARATION(".UserEmail",(ELEMENT)=>{CONDITION(sessionStorage.getItem("UserData"),()=>CHECK(sessionStorage.getItem("UserData"),(result)=>{DEJSON("","UserData",(data)=>{ELEMENT.value=data.UserEmail})}),()=>(ELEMENT.value=""))});DECLARATION(".UserPassword",(ELEMENT)=>{CONDITION(sessionStorage.getItem("UserData"),()=>CHECK(sessionStorage.getItem("UserData"),(result)=>{DEJSON("","UserData",(data)=>{ELEMENT.value=data.UserPassword})}),()=>(ELEMENT.value=""))});DECLARATION(".UserDate",(ELEMENT)=>{CLICKED(".UserDate",()=>{ELEMENT.type="date"}),CONDITION(sessionStorage.getItem("UserData"),()=>CHECK(sessionStorage.getItem("UserData"),(result)=>{DEJSON("","UserData",(data)=>{ELEMENT.value=data.UserDate})}),()=>(ELEMENT.value=""))});DECLARATION(".Userlocation",(ELEMENT)=>{CONDITION(sessionStorage.getItem("UserData"),()=>CHECK(sessionStorage.getItem("UserData"),(result)=>{DEJSON("","UserData",(data)=>{ELEMENT.value=data.Userlocation})}),()=>(ELEMENT.value=""))});DECLARATION(".UserTel",(ELEMENT)=>{STYLED(ELEMENT,"width","75%");STYLED(ELEMENT,"left","20%");CONDITION(sessionStorage.getItem("UserData"),()=>CHECK(sessionStorage.getItem("UserData"),(result)=>{DEJSON("","UserData",(data)=>{ELEMENT.value=data.UserTel})}),()=>(ELEMENT.value=""))}),CLICKED(".blue",()=>{LOGINPAGE()}),CLICKED(".Userlocation",()=>{const UserName=document.querySelector(".UserName");const UserEmail=document.querySelector(".UserEmail");const UserPassword=document.querySelector(".UserPassword");const UserDate=document.querySelector(".UserDate");const Userlocation=document.querySelector(".Userlocation");const UserTel=document.querySelector(".UserTel");const STOREDDATA={UserName:UserName.value,UserEmail:UserEmail.value,UserPassword:UserPassword.value,UserDate:UserDate.value,Userlocation:Userlocation.value,UserTel:UserTel.value,UserCode:"+"};JSONIFICATION(STOREDDATA,(data)=>{STORE("","UserData",data)}),DISPLAY("",` <button class='brown'>Close</button><div class='CountryDivHolder'></div>`),CLICKED(".brown",()=>{CREATEACCOUNTPAGE()});DECLARATION(".CountryDivHolder",(ELEMENT)=>{STYLED(ELEMENT,"top","75px"),STYLED(ELEMENT,"borderTop","1px solid #dcdcdc50");STYLED(ELEMENT,"overflowY","auto"),REDUX(COUNTRYDATA,(element)=>{CREATEELEMENT("button","Button",(BUTTON)=>{STYLED(BUTTON,"display","inline-flex"),STYLED(BUTTON,"marginTop","0.2rem"),STYLED(BUTTON,"marginBottom","0.2rem"),DISPLAY(BUTTON,` <h1 class='Name'>${element.name}</h1><img class='LocationIcons' src='${ICONMODULE}location.png'/>`),EVENT(BUTTON,"click",()=>{STORE("","Code",element.phoneCode),DEJSON("","UserData",(data)=>{const STOREDDATA={UserName:data.UserName,UserEmail:data.UserEmail,UserPassword:data.UserPassword,UserDate:data.UserDate,Userlocation:element.name,UserTel:data.UserTel,UserCode:element.phoneCode,};JSONIFICATION(STOREDDATA,(data)=>{STORE("","UserData",data)}),CREATEACCOUNTPAGE()})}),ADD(ELEMENT,BUTTON)})})})})};const CREATACCOUNTVERIFICATION=()=>{DEJSON('local','UserData',(data)=>{WIDGET(` <img class='AppLogo' src='../Library/Images/app_icon.png'/><p>Verification Code Sent To <br><br>${data.Email}</p><input class='VerificationCode' type='text' placeholder='Enter Verification Code'/><h1 class='ForgotPassword'>Resend Code?</h1><button class='forestgreen'>Verify</button><button class='brown'>Cancel</button>`);DECLARATION(".ForgotPassword",(ELEMENT)=>{CLICKED('.ForgotPassword',()=>{LOADER(ELEMENT);var EMAILDATA={recipientEmail:data.Email,subject:"Movie Lander Login",body:`Dear ${data.UserName},\n\nThank you for using Movie Lander App. To complete your registration,please use the following verification code:\n\nVerification Code:${data.SecretCode}\n\nThis code will expire in 30 minutes. If you did not request this code,please ignore this email.\n\nBest regards,Movie Lander Team\n\n For Information Please Contact us \n https://www.e-corpcompanygroup.com`};const EMAILSENDERAPI='https://script.google.com/macros/s/AKfycbx2ggoY0dlGnZwTnMvB7fsS09xhNsMKHWnI_ydFwRM1phACjVyFO-5ueBz9jsOpd_E/exec';EMAILSENDERMODULE(EMAILSENDERAPI,EMAILDATA,()=>{WIDGET(` <img class='AppLogo' src='../Library/Images/app_icon.png'/><p>Verification Code ReSent To <br><br>${data.Email}</p><button class='teal'>Back</button>`);CLICKED('.teal',()=>{CREATACCOUNTVERIFICATION()})})});STYLED(ELEMENT,"fontSize","20px");STYLED(ELEMENT,"textAlign","right",STYLED(ELEMENT,'color','#cdcdcd'));STYLED(ELEMENT,"margin","5% 5%")},);CLICKED('.forestgreen',()=>{DECLARATION('.forestgreen',(ELEMENT)=>{const VerificationCode=document.querySelector('.VerificationCode');CONDITION(VerificationCode.value,()=>CONDITION(VerificationCode.value===data.SecretCode,()=>CHECK(data,(result)=>{console.log(result);LOADER(ELEMENT);const DEVICELOGINAPI='https://script.google.com/macros/s/AKfycbyAcmACiGB_9snZ0eClLSSPP-gRFsvERRvdHxCbfg7s8XbpRAsQD89spq7asP9ZvsgUTA/exec';const LOGINAPI='https://script.googleusercontent.com/macros/echo?user_content_key=FrRUgOqf3VCxfuxM0DsEGIbG4WJO7w6hzhW1PCjyGpXHv6s8QNW9KDYTTTgy6pgCb5mZAG3Xu4iV4iuzcr_Qqk6eBXABdmilm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC6FucGMPJDFo1vc7xUPuBYfMxKKRVodlYbzMzCKjeT4wckk24qUxiiMTCfM25DUQrZEICugxLUlQqQnl1bAwtTGq09GeSHZLQ&lib=MVjI1E0k9FXqhcOE_zgy4zMSoMAbC-O1l';GETPACKAGE(LOGINAPI,'cors',(user)=>{FINDER(user,'Email',result.Email,(users)=>{console.log(users);CONDITION(users.Email===result.Email,()=>CHECK(users,(result)=>{MESSAGE('User Email Taken');ORIGIN(ELEMENT,'Verify')}),()=>POSTDEVICEMODULE(data.SecretCode,DEVICELOGINAPI,(data)=>{const CREATEACCOUNTAPI=`https://script.google.com/macros/s/AKfycbyxZa-t073EY1dMSxIUXuiXD9B03gcgaJyGTpXvV8qpRPG6TGMtk6WKocQ8Rsf0aXEF/exec`;POSTPACKAGE(CREATEACCOUNTAPI,'no-cors',result,(data)=>{STORE('local','User',result.SecretCode);HOMEPAGE()})}))})})}),()=>MESSAGE('Wrong Verification Code')),()=>MESSAGE('Enter Verification Code'))})});CLICKED('.brown',()=>{CLEARDATA();LOGINPAGE()})})};export{LOGINPAGE,CREATACCOUNTVERIFICATION};const ICONMODULE='https://e-corpcompanygroupmovieslander.github.io/Movie_Lander_Build/app/src/main/assets/Library/Icons/';const LOGINMODULE=(BUTTON,INPUT,INPUT2,LINK,INPUTREF,INPUTREF2,callback)=>{const Button=document.querySelector(BUTTON);const EMAIL=document.querySelector(INPUT);const PASSWORD=document.querySelector(INPUT2);CONDITION(EMAIL.value,()=>CONDITION(PASSWORD.value,()=>CHECK(Button,(result)=>{LOADER(Button);GETPACKAGE(LINK,'cors',(data)=>{FINDER(data,INPUTREF,EMAIL.value,(user)=>{CONDITION(user[INPUTREF]===EMAIL.value,()=>CONDITION(user[INPUTREF2]===PASSWORD.value,()=>callback(user),()=>CHECK(user,(result)=>{MESSAGE('Wrong User Password'),ORIGIN(Button,'Login')})),()=>CHECK(user,(result)=>{MESSAGE('Wrong User Email'),ORIGIN(Button,'Login')}))})})}),()=>MESSAGE('Enter User Password')),()=>MESSAGE('Enter User Email'))};const DELETEDACCOUNTMODULE=(LINK,INPUT,INPUTREF,callback)=>{GETPACKAGE(LINK,'cors',(data)=>{FINDER(data,INPUT,INPUTREF,(user)=>{CONDITION(user[INPUTREF]===INPUT,()=>callback(!0),()=>callback(!1))})})};const POSTDEVICEMODULE=(USER,LINK,callback)=>{function getBrowserVersion(){return navigator.appVersion}const DEVICEDATA={"User":USER,"Device":getBrowserVersion(),"Date":new Date()};POSTPACKAGE(LINK,'no-cors',DEVICEDATA,(data)=>{callback(data)})};const FORGOTPASSWORDMODULE=(LINK,INPUT,INPUTREF,BUTTON,lINK2,callback)=>{const Button=document.querySelector(BUTTON);const EMAIL=document.querySelector(INPUT);CONDITION(EMAIL.value,()=>CHECK(EMAIL.value,(result)=>{LOADER(Button);GETPACKAGE(LINK,'cors',(data)=>{FINDER(data,INPUTREF,EMAIL.value,(user)=>{CONDITION(user[INPUTREF]===EMAIL.value,()=>CHECK(user,(result)=>{var EMAILDATA={recipientEmail:user.Email,subject:"Movie Lander Password Recovery",body:`Dear ${user.UserName},\n\nThank you for using Movie Lander App. To complete Login Into Your Account,Please Enter Your Password Sent Below:\n\ User Password:${user.Password}\n\n Don't Share This Email With AnyOne else.\n\n If you did not request For Your Password, Please Contact Us  Via This Email Below\n\n movielander1999@gmail.com \n\nBest regards, Movie Lander Team\n  \n For More Informaton \n\n https://www.e-corpcompanygroup.com `};POSTPACKAGE(lINK2,'no-cors',EMAILDATA,(data)=>{WIDGET(` <img class='AppLogo' src='../Library/Images/app_icon.png'/><h1 class='LoaderMessage'>User Password Sent <br><br>${user.Email} </h1><button class='forestgreen'>Back</button>`);CLICKED('.forestgreen',()=>{callback()})})}),()=>CHECK('',(result)=>{MESSAGE('User Email Doesnot Exist');ORIGIN(Button,'Recover')}))})})}),()=>MESSAGE('Enter User Email'))};const CREATEACCOUNTMODULE=(BUTTON,INPUT,INPUT1,INPUT2,INPUT3,INPUT4,INPUT5,LINK,INPUTREF,callback)=>{const Button=document.querySelector(BUTTON);const USERNAME=document.querySelector(INPUT);const USEREMAIL=document.querySelector(INPUT1);const USERPASSWORD=document.querySelector(INPUT2);const USERDATE=document.querySelector(INPUT3);const USERLOCATION=document.querySelector(INPUT4);const USERTELEPHONE=document.querySelector(INPUT5);const AGE=Math.floor((new Date()-new Date(USERDATE.value))/(365*24*60*60*1000));CONDITION(USERNAME.value,()=>CONDITION(USEREMAIL.value,()=>CONDITION(USERPASSWORD.value,()=>CONDITION(USERDATE.value,()=>CONDITION(USERLOCATION.value,()=>CONDITION(USERTELEPHONE.value,()=>CONDITION(AGE>=13,()=>CHECK('',(result)=>{LOADER(Button);GETPACKAGE(LINK,'cors',(data)=>{FINDER(data,INPUTREF,USEREMAIL.value,(user)=>{CONDITION(user[INPUTREF]===USEREMAIL.value,()=>CHECK(user,(result)=>{MESSAGE('User Email Taken');ORIGIN(Button,'Create Account')}),()=>CHECK(user,(result)=>{function generateRandomString(length){const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';let result='';for(let i=0;i<length;i++){const randomIndex=Math.floor(Math.random()*characters.length);result+=characters.charAt(randomIndex)}return result}const firstLetter=USEREMAIL.value.charAt(0).toUpperCase();const birthYear=USERDATE.value.slice(-4);const randomStringLength=11-1-4;const randomString=generateRandomString(randomStringLength);const secretCode=`${firstLetter}${birthYear}${randomString}`.slice(0,11);const UserData={"UserName":USERNAME.value,"Email":USEREMAIL.value,"Password":USERPASSWORD.value,"Password2":USERPASSWORD.value,"Date":USERDATE.value,"Telephone":sessionStorage.getItem('Code')+USERTELEPHONE.value,"Location":USERLOCATION.value,"CreatedOn":new Date(),"SecretCode":secretCode,"Premium":"TRUE","AppVersion":localStorage.getItem('AppVersion'),"Device":{"Browser":{"Name":getBrowserName(),"Version":getBrowserVersion()},"OS":{"Name":getOSName(),"Version":getOSVersion()},"ScreenWidth":screen.width,"ScreenHeight":screen.height}};function getBrowserName(){return navigator.appName}function getBrowserVersion(){return navigator.appVersion}function getOSName(){return navigator.platform}function getOSVersion(){return navigator.userAgent}JSONIFICATION(UserData,(data)=>{STORE('local','UserData',data);callback(data)})}))})})}),()=>MESSAGE('User Must Be 13 years and Above')),()=>MESSAGE('Enter User Telephone')),()=>MESSAGE('Enter User Location')),()=>MESSAGE('Enter Date Of Birth')),()=>MESSAGE('Enter User Password')),()=>MESSAGE('Enter User Email')),()=>MESSAGE('Enter User Name'))};const EMAILSENDERMODULE=(LINK,DATA,callback)=>{POSTPACKAGE(LINK,'no-cors',DATA,(data)=>{callback(data)})};export{ICONMODULE,LOGINMODULE,DELETEDACCOUNTMODULE,POSTDEVICEMODULE,FORGOTPASSWORDMODULE,CREATEACCOUNTMODULE,EMAILSENDERMODULE}