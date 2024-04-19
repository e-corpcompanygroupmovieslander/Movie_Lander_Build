//ICONS MODULE
const ICONMODULE='https://e-corpcompanygroupmovieslander.github.io/Movie_Lander_Build/app/src/main/assets/Library/Icons/';
//LOGIN MODULE
const LOGINMODULE=(BUTTON,INPUT,INPUT2,LINK,INPUTREF,INPUTREF2,callback)=>{const Button=document.querySelector(BUTTON);const EMAIL=document.querySelector(INPUT);const PASSWORD=document.querySelector(INPUT2);CONDITION(EMAIL.value,()=>CONDITION(PASSWORD.value,()=>CHECK(Button,(result)=>{LOADER(Button); GETPACKAGE(LINK,'cors',(data)=>{FINDER(data,INPUTREF,EMAIL.value,(user)=>{CONDITION(user[INPUTREF]===EMAIL.value,()=>CONDITION(user[INPUTREF2]===PASSWORD.value,()=>callback(user),()=>CHECK(user,(result)=>{MESSAGE('Wrong User Password'),ORIGIN(Button,'Login')})),()=>CHECK(user,(result)=>{MESSAGE('Wrong User Email'),ORIGIN(Button,'Login')}))})})}),()=>MESSAGE('Enter User Password')),()=>MESSAGE('Enter User Email'))}
//DELETE ACCOUNT MODULE
const DELETEDACCOUNTMODULE=(LINK,INPUT,INPUTREF,callback)=>{GETPACKAGE(LINK,'cors',(data)=>{FINDER(data,INPUT,INPUTREF,(user)=>{CONDITION(user[INPUTREF]===INPUT,()=>callback(!0),()=>callback(!1))})})}
//POST DEVICE DATA
const POSTDEVICEMODULE=(USER,LINK,callback)=>{function getBrowserVersion(){return navigator.appVersion}const DEVICEDATA={"User":USER,"Device":getBrowserVersion(),"Date":new Date()};POSTPACKAGE(LINK,'no-cors',DEVICEDATA,(data)=>{callback(data)})}

export{ICONMODULE,LOGINMODULE,DELETEDACCOUNTMODULE,POSTDEVICEMODULE}