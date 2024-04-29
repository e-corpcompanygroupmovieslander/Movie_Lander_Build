export const APPVERSIONUPDATER=()=>{

    DEJSON('local','UserData',(data)=>{

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
            "AccountDeleteMessage":data.AccountDeleteMessage,
            "AccountDeleted":data.AccountDeleted,
            "AccountDeletedDate":data.AccountDeletedDate,
            "AppLockPin":data.AppLockPin,
            "ParenralControlPin":data.ParenralControlPin,
            "Active":"True",
            "LastActiveDate":new Date()
        };

        const UPDATELINK='https://script.google.com/macros/s/AKfycbwtBSaG-FZi2t5Hdi4xGu0TpC2pQiBmHAQ0ZgfRKERsVMUrlrV7TqfcUhInC2ywQwFo/exec';

        POSTPACKAGE(UPDATELINK,'no-cors',UserData,(data)=>{

            console.log(data)

        })

    })

}