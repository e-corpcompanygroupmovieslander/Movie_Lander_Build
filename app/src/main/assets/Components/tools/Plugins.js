const CONTACTS=(callback)=>{var contactsData=Android.getContacts();var parsedContacts=JSON.parse(contactsData);callback(parsedContacts)};
const HIDENAVIGATIONBAR=()=>{CONDITION("Production"===localStorage.getItem("Environment"),()=>Android.hideNavigationBar(),()=>console.log("Nav bar Hidden"))}
const NETWORKSTATE=(callback)=>{CONDITION(localStorage.getItem("Environment")==="Production",()=>CHECK(Android.isNetworkAvailable(),(result)=>callback(result)),()=>CHECK(navigator.onLine,(result)=>callback(result)))};
const NOTIFICATIONS=(e,A)=>{if ("Production"===localStorage.getItem("Environment")){Android.showNotification(`${e}`,`${A}`)}else if ("Notification" in window){Notification.requestPermission().then(function (o){if ("granted"===o){new Notification(e,{body:A,icon:"/app/src/main/res/drawable/app_icon.png"})}})}else{console.log("This browser does not support notifications.")}};
const SHOWNAVIGATIONBAR=()=>{CONDITION(localStorage.getItem("Environment")==="Production",()=>Android.showNavigationBar(),()=>console.log("Nav bar Shown"))};
const VIBRATION=(e)=>{CONDITION("Production"===localStorage.getItem("Environment"),()=>Android.vibrate(e),()=>console.log("Vibration Is On",e))};