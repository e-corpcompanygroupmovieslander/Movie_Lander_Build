import { CONNECTION } from "../../Connection/Connection.js";
import { APPLOCKAPI, CATERGORYAPI, DELETEACCOUNTGET, FREEMOVIESAPI, HELPTEXT, LOGINAPI, MOREAPPSAPI, MTNPREMIUMPAYGET, PRIVACYTEXT } from "../../Modules/Module.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js";

export const AUTOSYNC=()=>{
    WIDGET(`   
        <img class='AppLogo' src='../Library/Images/app_icon.png'/>
        <h1 class='LoaderMessage'>Movie Lander Updating</h1>
        <p class='UpdatingData'></p>
        <img id='OfflineImage' class='LoadingIcon' src='${LOADERICON}'/>
        <button class='forestgreen'>Syncing...</button>
    `);
    const UpdatingData=document.querySelector('.UpdatingData');
    DISPLAY(UpdatingData,'Sync Started')
    DECLARATION('.forestgreen',(ELEMENT)=>{
        //USER DELETED ACCOUNT
        GETPACKAGE(DELETEACCOUNTGET,'cors',(data)=>{
            FINDER(data,'User',localStorage.getItem('User'),(user)=>{
                CONDITION(user.User === localStorage.getItem('User'),
                ()=>CHECK(user,(result)=>{
                    CLEARDATA();
                    CONNECTION();
                }),
                ()=>CHECK(user,(result)=>{
                    DISPLAY(UpdatingData,'Movies Sync ');
                    //FREE MOVIES SECTION
                    GETPACKAGE(FREEMOVIESAPI,'cors',(data)=>{
                        JSONIFICATION(data,(data)=>{
                            STORE('local','FreeMovies',data)
                            DISPLAY(ELEMENT,'Movies Synced ');
                            //PRIVACY  SECTION
                            GETPACKAGE(PRIVACYTEXT,'cors',(data)=>{
                                JSONIFICATION(data,(data)=>{
                                    STORE('local','PrivacyText',data);
                                    //HELP  SECTION
                                    GETPACKAGE(HELPTEXT,'cors',(data)=>{
                                        JSONIFICATION(data,(data)=>{
                                            STORE('local','HelpText',data);
                                            //APPLOCK  SECTION
                                            GETPACKAGE(APPLOCKAPI,'cors',(data)=>{
                                                JSONIFICATION(data,(data)=>{
                                                    STORE('local','AppLockText',data)
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                            //MORE APPS SECTION
                            DISPLAY(UpdatingData,'App Sync ');
                            GETPACKAGE(MOREAPPSAPI,'cors',(data)=>{
                                JSONIFICATION(data,(data)=>{
                                    STORE('local','MoreAppps',data)
                                    //PAYMENTS MESSAGES
                                    GETPACKAGE(MTNPREMIUMPAYGET,'cors',(data)=>{
                                        JSONIFICATION(data,(data)=>{
                                            STORE('local','Payments',data)
                                            //AUTOPREMIUM USERS
                                            DISPLAY(UpdatingData,'Account Sync ');
                                            GETPACKAGE(MTNPREMIUMPAYGET, 'cors', (data) => {
                                                REVERSE(data,(result)=>{
                                                    FINDER(result, 'User', localStorage.getItem('User'), (user) => {
                                                        if (new Date() <= new Date(user.ExpiryDate)) {
                                                            CHECK(user, (result) => {
                                                                STORE('local', 'PremiumUser', JSON.stringify(result));
                                                                STORE('local', 'Premium', 'ON');
                                                            });
                                                        } else {
                                                            REMOVESTORE('local', 'PremiumUser');
                                                            REMOVESTORE('local', 'Premium');
                                                        }
                                                    });
                                                });
                                                DISPLAY(ELEMENT,'Account Synced ');
                                                //USER DETAILS UPDATE
                                                DISPLAY(UpdatingData,'Updates Sync ');
                                                GETPACKAGE(LOGINAPI,'cors',(data)=>{
                                                    FINDER(data,'SecretCode',localStorage.getItem('User'),(User)=>{
                                                        CONDITION(User.SecretCode === localStorage.getItem('User'),
                                                        ()=>CHECK(User,(result)=>{
                                                            JSONIFICATION(result,(data)=>{
                                                                STORE('local','UserData',data);
                                                                MESSAGE('Data Sync Successful');
                                                                DISPLAY(UpdatingData,'User Account Synced ');
                                                                NOTIFICATIONS('Data Synced','Movie Lander has been Updated Successfully');
                                                                setTimeout(() => {
                                                                    CONDITION(localStorage.getItem('User'),
                                                                    ()=>USERACCOUNTPAGE(),
                                                                    ()=>CONNECTION()
                                                                    )   
                                                                }, 2000);
                                                            })
                                                        }),
                                                        ()=>CHECK(User,(result)=>{
                                                            REMOVESTORE('local','User');
                                                            REMOVESTORE('local','UserData');
                                                            CONNECTION();                
                                                        })
                                                    )
                                                    })
                                                })
                                            });
                                        })
                                    })
                                })
                            })    
                        })
                    })
                    //CATERGORIES DATA
                    GETPACKAGE(CATERGORYAPI,'cors',(data)=>{
                        JSONIFICATION(data,(data)=>{STORE('local','CatergoriesData',data)})
                        REDUX(data,(element)=>{
                            GETPACKAGE(element.link,'cors',(data)=>{
                                JSONIFICATION(data,(data)=>{
                                    STORE('local',element.Sections,data);
                                }) 
                            })
                        })
                    })
                })
            )
            })
        })
    })
}