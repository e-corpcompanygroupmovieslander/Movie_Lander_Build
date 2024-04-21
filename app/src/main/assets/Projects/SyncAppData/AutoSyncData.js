import { CATERGORYAPI, DELETEACCOUNTGET, FREEMOVIESAPI, ICONMODULE, LOGINAPI } from "../../Modules/Module.js";

export const AUTOSYNC=()=>{

    DECLARATION('#Sync',(ELEMENT)=>{
     
        LOADER(ELEMENT);

        //CATERGORIES DATA
        GETPACKAGE(CATERGORYAPI,'cors',(data)=>{
            JSONIFICATION(data,(data)=>{STORE('local','CatergoriesData',data)})
            REDUX(data,(element)=>{
                GETPACKAGE(element.link,'cors',(data)=>{
                    JSONIFICATION(data,(data)=>{

                        STORE('local',element.Sections,data);

                        setTimeout(() => {

                            MESSAGE('Data Sync Successful')

                            ORIGIN(ELEMENT,`
        
                                <h1 class='Title' >App Sync</h1>
        
                                <img class='Icons' src='${ICONMODULE}sync.png'/>
        
                            `)
                            
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

                    console.log('Account Still Active')

                })
            )
            })
        })

    })

}