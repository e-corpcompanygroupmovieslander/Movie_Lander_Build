import { CONNECTION } from "../../Connection/Connection.js"
import { APPLOCKAPI, CATERGORYAPI, DELETEACCOUNTGET, FREEMOVIESAPI, HELPTEXT, LOGINAPI, MOREAPPSAPI, MOVIECOMMENTS, MTNPREMIUMPAYGET, PARENTALCONTROLTEXT, PRIVACYTEXT } from "../../Modules/Module.js"

const AUTOAPPDATADOWNLOAD=()=>{
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
    //FREE MOVIES SECTION
    GETPACKAGE(FREEMOVIESAPI,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{
            STORE('local','FreeMovies',data)
        })
    })
    //MORE APPS SECTION
    GETPACKAGE(MOREAPPSAPI,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{
            STORE('local','MoreAppps',data)
        })
    })
    //PRIVACY SECTION
    GETPACKAGE(PRIVACYTEXT,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{
            STORE('local','PrivacyText',data)
        })
    })
    //APPLOCK  SECTION
    GETPACKAGE(APPLOCKAPI,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{
            STORE('local','AppLockText',data)
        })
    })
    //PARENTAL  SECTION
    GETPACKAGE(PARENTALCONTROLTEXT,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{
            STORE('local','ParentalControlText',data)
        })
    })
    //HELP  SECTION
    GETPACKAGE(HELPTEXT,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{
            STORE('local','HelpText',data)
        })
    })
    //PAYMENTS MESSAGES
    GETPACKAGE(MTNPREMIUMPAYGET,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{
            STORE('local','Payments',data)
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
                console.log('User Account Still Active');
            })
          )
        })
    })
    //AUTOPREMIUM USERS
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
    });


    //COMMENTS
    GETPACKAGE(MOVIECOMMENTS,'cors',(data)=>{
        JSONIFICATION(data,(data)=>{
            STORE('local','Comments',data)
        })
    })
    

}
export{AUTOAPPDATADOWNLOAD}