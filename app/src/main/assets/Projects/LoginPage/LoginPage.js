import{CREATEACCOUNTPAGE}from "../CreateAccountPage/CreateAccountPage.js" ;import{FORGOTPASSWORDPAGE}from "../ForgotAccountPage/LoginPage.js" ;import{HOMEPAGE}from "../HomePage/HomePage.js" ;const LOGINPAGE=()=>{WIDGET(` <img class='AppLogo' src='../Library/Images/app_icon.png'/><input class='Email' type='email' placeholder='Enter User Email' /><input class='Password' type='password' placeholder='Enter User Email' /><h1 class='ForgotPassword'>ForgotPassword?</h1><button class='forestgreen'>Login</button><button class='blue'>Create Account</button>`) ;CLICKED('.blue',()=>{CREATEACCOUNTPAGE()}) ;CLICKED('.ForgotPassword',()=>{FORGOTPASSWORDPAGE()}); CLICKED('.forestgreen',()=>{const EMAIL=document.querySelector('.Email');const PASS=document.querySelector('.Password');const Button=document.querySelector('.forestgreen');CONDITION(EMAIL.value,()=>CONDITION(PASS.value,()=>CHECK(Button,(result)=>{LOADER(Button);GETPACKAGE('https://script.googleusercontent.com/macros/echo?user_content_key=FrRUgOqf3VCxfuxM0DsEGIbG4WJO7w6hzhW1PCjyGpXHv6s8QNW9KDYTTTgy6pgCb5mZAG3Xu4iV4iuzcr_Qqk6eBXABdmilm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC6FucGMPJDFo1vc7xUPuBYfMxKKRVodlYbzMzCKjeT4wckk24qUxiiMTCfM25DUQrZEICugxLUlQqQnl1bAwtTGq09GeSHZLQ&lib=MVjI1E0k9FXqhcOE_zgy4zMSoMAbC-O1l','cors',(data)=>{FINDER(data,'Email',EMAIL.value,(user)=>{CONDITION(user.Email===EMAIL.value,()=>CONDITION(user.Password===PASS.value,()=>CHECK(user,(result)=>{STORE('local','User',result.SecretCode);JSONIFICATION(result,(data)=>{STORE('local','UserData',data);HOMEPAGE()})}),()=>CHECK(user,(result)=>{ORIGIN(Button,'Login');MESSAGE('Wrong User Password')})),()=>CHECK(user,(result)=>{ORIGIN(Button,'Login');MESSAGE('Wrong User Email')}))})})}),()=>MESSAGE('Enter User Password')),()=>MESSAGE('Enter User Email'))})};export{LOGINPAGE}