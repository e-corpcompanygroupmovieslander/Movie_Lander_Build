//LOGIN PAGE
import{DELETEDACCOUNTMODULE,FORGOTPASSWORDMODULE,LOGINMODULE,POSTDEVICEMODULE}from "../Modules/Module.js";import{HOMEPAGE}from "./HomePage/HomePage.js";
const LOGINPAGE=()=>{const LOGINAPI="https://script.googleusercontent.com/macros/echo?user_content_key=FrRUgOqf3VCxfuxM0DsEGIbG4WJO7w6hzhW1PCjyGpXHv6s8QNW9KDYTTTgy6pgCb5mZAG3Xu4iV4iuzcr_Qqk6eBXABdmilm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC6FucGMPJDFo1vc7xUPuBYfMxKKRVodlYbzMzCKjeT4wckk24qUxiiMTCfM25DUQrZEICugxLUlQqQnl1bAwtTGq09GeSHZLQ&lib=MVjI1E0k9FXqhcOE_zgy4zMSoMAbC-O1l";const DELETEACCOUNTGET=`https://script.googleusercontent.com/macros/echo?user_content_key=lAYYsAjQVbByXET_kfABc7Aa7XCV4MDRw1G6EJEuqswiRKP0nyFFlmSZYG60mGKTbiljX4IK6hSM_g9s6ADFUwAyZC-fnFkRm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnF2Q8H1LAVtp-6OIwol2w20OiUzRP9L1GSLipr58ni3wZ3MWwAFSxGtWq7rEpkhOyEAbUlUeLRUiQmJN2-ivIdekd4xJLH4V-w&lib=MzWrqK870Yn5uC3rxsYUWkMSoMAbC-O1l`;const DEVICELOGINAPI="https://script.google.com/macros/s/AKfycbyAcmACiGB_9snZ0eClLSSPP-gRFsvERRvdHxCbfg7s8XbpRAsQD89spq7asP9ZvsgUTA/exec";WIDGET(` <img class='AppLogo' src='../Library/Images/app_icon.png'/><input class='Email' type='email' placeholder='Enter User Email'/><input class='Password' type='password' placeholder='Enter User Password'/><h1 class='ForgotPassword'>ForgotPassword?</h1><button class='forestgreen'>Login</button><button class='blue'>Create Account</button>`);DECLARATION(".ForgotPassword",(ELEMENT)=>{STYLED(ELEMENT,"fontSize","20px");STYLED(ELEMENT,"textAlign","right",STYLED(ELEMENT,'color','#cdcdcd'));STYLED(ELEMENT,"margin","5% 5%")});CLICKED(".ForgotPassword",()=>{FORGOTPASSWORDPAGE()});CLICKED(".blue",()=>{CREATEACCOUNTPAGE()});CLICKED(".forestgreen",()=>{LOGINMODULE(".forestgreen",".Email",".Password",LOGINAPI,"Email","Password",(data)=>{DELETEDACCOUNTMODULE(DELETEACCOUNTGET,data.SecretCode,"User",(result)=>{CONDITION(data===!0,()=>DECLARATION(".forestgreen",(ELEMENT)=>{MESSAGE("Something Went Wrong");ORIGIN(ELEMENT,"Login")}),()=>CHECK(data,(result)=>{STORE("local","User",data.SecretCode);JSONIFICATION(data,(result)=>{STORE("local","UserData",result);POSTDEVICEMODULE(data.SecretCode,DEVICELOGINAPI,(data)=>{HOMEPAGE()})})}))})})})}
//FORGOT PASSWORD PAGE
const FORGOTPASSWORDPAGE=()=>{WIDGET(` <img class='AppLogo' src='../Library/Images/app_icon.png'/><input class='ForgotEmail' type='email' placeholder='Enter User Email' /><button class='forestgreen'>Recover</button><button class='brown'>cancel</button>`); CLICKED('.brown',()=>{LOGINPAGE()}); CLICKED('.forestgreen',()=>{const LOGINAPI='https://script.googleusercontent.com/macros/echo?user_content_key=FrRUgOqf3VCxfuxM0DsEGIbG4WJO7w6hzhW1PCjyGpXHv6s8QNW9KDYTTTgy6pgCb5mZAG3Xu4iV4iuzcr_Qqk6eBXABdmilm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC6FucGMPJDFo1vc7xUPuBYfMxKKRVodlYbzMzCKjeT4wckk24qUxiiMTCfM25DUQrZEICugxLUlQqQnl1bAwtTGq09GeSHZLQ&lib=MVjI1E0k9FXqhcOE_zgy4zMSoMAbC-O1l';const EMAILSENDERAPI='https://script.google.com/macros/s/AKfycbx2ggoY0dlGnZwTnMvB7fsS09xhNsMKHWnI_ydFwRM1phACjVyFO-5ueBz9jsOpd_E/exec';FORGOTPASSWORDMODULE(LOGINAPI,'.ForgotEmail','Email','.forestgreen',EMAILSENDERAPI,()=>{FORGOTPASSWORDPAGE()})})}
//CREATE ACCOUNT PAGE
const CREATEACCOUNTPAGE=()=>{
    WIDGET(`
    <img class='AppLogo' src='../Library/Images/app_icon.png'/>
    <input type='text' placeholder='Enter UserName' />
    <input type='email' placeholder='Enter UserEmail' />
    <input type='password' placeholder='Enter User Password' />
    <input type='text' placeholder='Enter Date Of Birth' />
    <input type='text' placeholder='Enter User Location' />
    <input type='text' placeholder='Enter User Telephone' />
    <button class='forestgreen'>Create Account</button>
    <button class='blue'>Login</button>

    `)

    CLICKED('.blue',()=>{LOGINPAGE()})
}




export{LOGINPAGE};