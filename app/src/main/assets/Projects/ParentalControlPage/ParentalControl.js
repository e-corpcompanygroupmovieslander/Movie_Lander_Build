import { ICONMODULE } from "../../Modules/Module.js";
import { SETTINGSPAGE } from "../SettingsPage/SettingsPage.js";

export const PARENTALCONTROLPAGE=()=>{

    BACKHEADERWIDGET(()=>{SETTINGSPAGE()},
    `
        <h1 class='Profile'>Parental Control</h1>
    `,
    `
        <div id='DeleteAccountPolicy' class='ScrollView'>
            <img id='HomeLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>
        </div>
        <input maxlength='5' class='DeleteAccountInput' type='tel' placeholder='Enter Parental Lock Pin'/>
        <button id='AppLockbtn' class='DeleteButton'>Set</button>

    `,''

    );

    DECLARATION('#DeleteAccountPolicy',(ELEMENT)=>{
        DEJSON('local','ParentalControlText',(data)=>{
            DISPLAY(ELEMENT,data)
        })
    })

    DECLARATION('.DeleteButton',(ELEMENT)=>{
        CONDITION(!localStorage.getItem('ParentalControl'),
            ()=>DISPLAY(ELEMENT,'Set'),
            ()=>CHECK(ELEMENT,(result)=>{
                DISPLAY(ELEMENT,'Clear');
                STYLED(ELEMENT,'background','#ff000080');
            })
        )
    })

    const DELETEINPUT=document.querySelector('.DeleteAccountInput');

    CLICKED('.DeleteButton',()=>{
        CONDITION(!DELETEINPUT.value ,
            ()=>MESSAGE('Enter 5 Digit Pin'),
            ()=>CONDITION(!localStorage.getItem('ParentalControl'),
                ()=>CHECK(DELETEINPUT,()=>{
                    STORE('local','ParentalControl',DELETEINPUT.value)
                    SETTINGSPAGE();
                }),
                ()=>CONDITION(localStorage.getItem('ParentalControl') === DELETEINPUT.value,
                    ()=>CHECK(DELETEINPUT,()=>{
                        REMOVESTORE('local','ParentalControl')
                        SETTINGSPAGE();
                    }),
                    ()=>CHECK(DELETEINPUT,()=>{
                        MESSAGE('Wrong User Pin')
                    }),
                )
            )
        )
    })
}