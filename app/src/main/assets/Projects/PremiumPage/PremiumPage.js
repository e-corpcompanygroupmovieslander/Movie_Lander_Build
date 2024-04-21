import { UGANDANPREMIUMPAGE } from "./UgandanPremium.js"
import { USPREMIUMPAGE } from "./UsPremiumPage.js"

export const PREMIUMPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        CONDITION( data.Location === 'Uganda',

        ()=>UGANDANPREMIUMPAGE(),

        ()=>USPREMIUMPAGE()
    
        )

    })

}

// PremiumPath