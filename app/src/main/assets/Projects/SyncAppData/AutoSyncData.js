import { CATERGORYAPI, DELETEACCOUNTGET, FREEMOVIESAPI, ICONMODULE, LOGINAPI } from "../../Modules/Module.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js";

export const AUTOSYNC=()=>{

    WIDGET(` 
            
        <img class='AppLogo' src='../Library/Images/app_icon.png'/>
        <h1 class='LoaderMessage'>Movie Lander Updating</h1>
        <img id='OfflineImage' class='LoadingIcon' src='${LOADERICON}'/>
        <button class='forestgreen'>Please Wait</button>

    `);

    DECLARATION('.forestgreen',(ELEMENT)=>{

        const LOADERSYNC=document.querySelector('#OfflineImage');
     
        //CATERGORIES DATA
        GETPACKAGE(CATERGORYAPI,'cors',(data)=>{
            JSONIFICATION(data,(data)=>{STORE('local','CatergoriesData',data)})
            REDUX(data,(element)=>{
                GETPACKAGE(element.link,'cors',(data)=>{
                    JSONIFICATION(data,(data)=>{

                        STORE('local',element.Sections,data);

                        setTimeout(() => {

                            WIDGET(` 
                
                                <img class='AppLogo' src='../Library/Images/app_icon.png'/>
                                <h1 class='LoaderMessage'>Movie Lander Updated</h1>
                                <img id='OfflineImage'  src='${ICONMODULE}check.png'/>

                                <p>
                                    Movies Updated
                                    <br><br>
                                    User Account Updated
                                    <br><br>
                                    User Settings Updated
                                    <br><br>
                                    App Errors And Bug Fix Worked Erectified
                                
                                </p>
                        
                            `);

                            setTimeout(() => {
                                USERACCOUNTPAGE()
                            }, 2000);

                        }, 1000);

                    }) 
                })
            })
        })

        //FREE MOVIES SECTION
        GETPACKAGE(FREEMOVIESAPI,'cors',(data)=>{
            JSONIFICATION(data,(data)=>{
                STORE('local','FreeMovies',data)
            })
        })

        //USER DETAILS UPDATE
        GETPACKAGE(LOGINAPI,'cors',(data)=>{
            FINDER(data,'SecretCode',localStorage.getItem('User'),(User)=>{
                CONDITION(User.SecretCode === localStorage.getItem('User'),
                ()=>CHECK(User,(result)=>{
                    JSONIFICATION(result,(data)=>{
                        STORE('local','UserData',data)
                    })
                }),
                ()=>CHECK(User,(result)=>{
                    console.log('User Account Doesnot Exist');
                })
            )
            })
        })

        //USER DELETED ACCOUNT
        GETPACKAGE(DELETEACCOUNTGET,'cors',(data)=>{
            FINDER(data,'User',localStorage.getItem('User'),(user)=>{
                CONDITION(user.User === localStorage.getItem('User'),
                ()=>CHECK(user,(result)=>{
                    CLEARDATA();
                    CONNECTION();
                }),
                ()=>CHECK(user,(result)=>{

                    MESSAGE('Data Sync Successful');

                })
            )
            })
        })

    })

}