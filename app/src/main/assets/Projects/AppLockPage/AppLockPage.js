import { CONNECTION } from "../../Connection/Connection.js";
import { ICONMODULE } from "../../Modules/Module.js";
import { SETTINGSPAGE } from "../SettingsPage/SettingsPage.js"
export const APPLOCKPAGE=()=>{
    BACKHEADERWIDGET(()=>{SETTINGSPAGE()},
    `
        <h1 class='Profile'>App Lock</h1>

    `,
    `
        <div id='DeleteAccountPolicy' class='ScrollView'>
            <img id='HomeLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>
        </div>
        <input maxlength='5' class='DeleteAccountInput' type='tel' placeholder='Enter App Lock Pin'/>
        <button id='AppLockbtn' class='DeleteButton'>Set</button>
    `,''

    );
    DECLARATION('#DeleteAccountPolicy',(ELEMENT)=>{
        DEJSON('local','AppLockText',(data)=>{
            DISPLAY(ELEMENT,data)
        })
    })
    DECLARATION('.DeleteButton',(ELEMENT)=>{
        CONDITION(!localStorage.getItem('AppLock'),
            ()=>CHECK('',(result)=>{
                DISPLAY(ELEMENT,'Enable');
            }),
            ()=>CHECK('',(result)=>{
                DISPLAY(ELEMENT,'Disable');
                STYLED(ELEMENT,'background','#ff000080');
            })
        )
    })
    const DELETEINPUT=document.querySelector('.DeleteAccountInput');
    CLICKED('.DeleteButton',()=>{
        CONDITION(!DELETEINPUT.value ,
            ()=>MESSAGE('Enter 5 Digit Pin'),
            ()=>CONDITION(!localStorage.getItem('AppLock'),
                ()=>CHECK(DELETEINPUT,()=>{
                    STORE('local','AppLock',DELETEINPUT.value)
                    CONNECTION();
                }),
                ()=>CONDITION(localStorage.getItem('AppLock') === DELETEINPUT.value,
                    ()=>CHECK(DELETEINPUT,()=>{
                        REMOVESTORE('local','AppLock')
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