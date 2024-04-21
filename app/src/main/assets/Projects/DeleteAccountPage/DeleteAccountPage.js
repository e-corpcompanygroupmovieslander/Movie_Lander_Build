import { CONNECTION } from "../../Connection/Connection.js";
import { DELETEACCOUNTPOLICY, DELETEACCOUNTPOST, EMAILSENDERAPI, ICONMODULE } from "../../Modules/Module.js";
import { ABOUTMEPAGE } from "../AboutMePage/AboutMePage.js"

export const DELETEACCOUNTPAGE=()=>{

    BACKHEADERWIDGET(()=>{ABOUTMEPAGE()},
    `
        <h1 class='Profile'>Delete Account</h1>

    `,
    `
    <div id='DeleteAccountPolicy' class='ScrollView'>

        <img id='HomeLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>

    </div>

    <input class='DeleteAccountInput' type='text' placeholder='Reason For Account Deletion'/>

    <button class='DeleteButton'>Delete</button>


    `,'CommentsPage'
    );

    DECLARATION('#DeleteAccountPolicy',(ELEMENT)=>{

        GETPACKAGE(DELETEACCOUNTPOLICY,'cors',(data)=>{

            DISPLAY(ELEMENT,data);

        })

    })

    const DELETEINPUT=document.querySelector('.DeleteAccountInput');

    CLICKED('.DeleteButton',()=>{

        CONDITION(!DELETEINPUT.value,

            ()=>MESSAGE('Enter Reason For Account Deletion'),

            ()=>DEJSON('local','UserData',(data)=>{

                DECLARATION('.DeleteButton',(ELEMENT)=>{

                    LOADER(ELEMENT);

                    const DATA={
                        "User":data.SecretCode,
                        "Message":DELETEINPUT.value,
                        "Terms":"ON",
                        "Date":new Date()
                    }
    
                    POSTPACKAGE(DELETEACCOUNTPOST,'cors',DATA,(users)=>{

                        var EMAILDATA = {
                            recipientEmail: data.Email,
                            subject: "Movie Lander Account Deletion",
                            body: `Dear ${data.UserName},\n\nThank you for using Movie Lander. \n\n Your User Account  has been Deleted. \n\n For More Information \n\n movielander1999@gmail.com \n\n https://www.e-corpcompanygroup.com`
                        };
                        
                        POSTPACKAGE(EMAILSENDERAPI,'no-cors',EMAILDATA,(user)=>{

                            MESSAGE('User Account Deleted');

                            setTimeout(() => {

                                CLEARDATA()

                                CONNECTION();
                                
                            }, 2000);

                        })
    
                    })

                })

            })
        
        )

    })

}