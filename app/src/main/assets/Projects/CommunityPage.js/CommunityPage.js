import { ICONMODULE, MOVIIEREQUESTAPI, MOVIIEREQUESTEDAPI } from "../../Modules/Module.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js";

export const MOVIEREQUESTPAGE=()=>{

    BACKHEADERWIDGET(()=>{USERACCOUNTPAGE()},
    `
        <h1 class='Profile'>Movie Request</h1>

    `,
    `
        <div id='DeleteAccountPolicy' class='ScrollView'>

            <img id='HomeLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>

        </div>

        <input class='DeleteAccountInput' type='text' placeholder='Ask For Your Movie'/>

        <button id='AppLockbtn' class='DeleteButton'>Request</button>

    `,''
    )

    DECLARATION('.DeleteButton',(ELEMENT)=>{

        STYLED(ELEMENT,'background','forestgreen');

    })

    DECLARATION('#DeleteAccountPolicy',(ELEMENT)=>{

        GETPACKAGE(MOVIIEREQUESTEDAPI,'cors',(data)=>{

            DISPLAY(ELEMENT,'');

            REDUX(data,(element)=>{

                CREATEELEMENT('button','MyDataButton',(button)=>{

                    DISPLAY(button,`

                        <h1 class='mytitle'>${element.Commentor}</h1>

                        <img class='myIcon' src='${ICONMODULE}user.png'/>
                    
                        <h1 class='MyData'>${element.Comment}</h1>
                    
                    `)

                    ADD(ELEMENT,button)

                    CONDITION(element.Commentor === !'Admin',
                        ()=>CHECK(element,(result)=>{

                            DECLARATION('.mytitle',(TITLE)=>{
    
                                STYLED(TITLE,'color','teal')
    
                                DECLARATION('.MyData',(TITLE)=>{
    
                                    STYLED(TITLE,'color','teal')
        
                                })
    
                            })
    
                            DECLARATION('.myIcon',(TITLE)=>{
    
                                TITLE.src=`${ICONMODULE}profile.png`
    
                            })
    
                        } ),
                        ()=>console.log('none')
                    
                    )



                })

            })
            

        })

    })

    const DELETEINPUT=document.querySelector('.DeleteAccountInput');

    CLICKED('.DeleteButton',()=>{

        CONDITION(!DELETEINPUT.value,

            ()=>MESSAGE('Enter Your Movie Request'),

            ()=>DEJSON('local','UserData',(data)=>{

                DECLARATION('.DeleteButton',(ELEMENT)=>{

                    DEJSON('local','UserData',(data)=>{

                        LOADER(ELEMENT);
                        
                        let USER='';
                        CONDITION(localStorage.getItem('User') === 'N2-27UqNULJ'||'E2-05tSX9uG',

                            ()=>USER='Admin',
                            ()=>USER=data.UserName
                        
                        )

                        let USER1='';
                        CONDITION(localStorage.getItem('User') === 'N2-27UqNULJ'||'E2-05tSX9uG',

                            ()=>USER1='Admin',
                            ()=>USER1=localStorage.getItem('User')
                        
                        )

                        const DATA={
                            "Movie":USER1 ,
                            "Commentor":USER,
                            "Comment":DELETEINPUT.value,
                            "Date":new Date()
                        }
    
                        POSTPACKAGE(MOVIIEREQUESTAPI,'no-cors',DATA,(data)=>{

                            DECLARATION('#DeleteAccountPolicy',(ELEMENT)=>{

                                GETPACKAGE(MOVIIEREQUESTAPI,'cors',(data)=>{

                                    DECLARATION('.DeleteButton',(ELEMENT)=>{
                                        ORIGIN(ELEMENT,'Request');
                                    })
                        
                                    DISPLAY(ELEMENT,'');
                        
                                    REDUX(data,(element)=>{

                                        DELETEINPUT.value='';
                        
                                        CREATEELEMENT('button','MyDataButton',(button)=>{
                        
                                            DISPLAY(button,`
                        
                                                <h1 class='mytitle'>${element.Commentor}</h1>
                        
                                                <img class='myIcon' src='${ICONMODULE}user.png'/>
                                            
                                                <h1 class='MyData'>${element.Comment}</h1>
                                            
                                            `)
                        
                                            ADD(ELEMENT,button)
                        
                                            CHECK(element.Commentor === 'Admin',(result)=>{
                        
                                                DECLARATION('.mytitle',(TITLE)=>{
                        
                                                    STYLED(TITLE,'color','blue')
                        
                                                })
                        
                                                DECLARATION('.myIcon',(TITLE)=>{
                        
                                                    TITLE.src=`${ICONMODULE}profile.png`
                        
                                                })
                        
                                            } )
                        
                                        })
                        
                                    })
                                    
                        
                                })
                        
                            })

                        })

                    })

                })

            })
        
        )

    })

}
