import { HOMEPAGE } from "../Projects/HomePage/HomePage.js";
import { LOGINPAGE } from "../Projects/LoginPage/LoginPage.js";
const CONNECTION = () => {

    CHECK('',(result)=>{

        GETPACKAGE('https://script.googleusercontent.com/macros/echo?user_content_key=lAYYsAjQVbByXET_kfABc7Aa7XCV4MDRw1G6EJEuqswiRKP0nyFFlmSZYG60mGKTbiljX4IK6hSM_g9s6ADFUwAyZC-fnFkRm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnF2Q8H1LAVtp-6OIwol2w20OiUzRP9L1GSLipr58ni3wZ3MWwAFSxGtWq7rEpkhOyEAbUlUeLRUiQmJN2-ivIdekd4xJLH4V-w&lib=MzWrqK870Yn5uC3rxsYUWkMSoMAbC-O1l','cors',(data)=>{
        
            FINDER(data,'User',localStorage.getItem('User'),(user)=>{

                CONDITION(user.User === localStorage.getItem('User'),

                ()=>CHECK(user,(result)=>{

                    REMOVESTORE('local','User'),REMOVESTORE('local','UserData');

                    REMOVESTORE('local','Premium'),REMOVESTORE('local','PremiumUser');

                    LOGINPAGE();
    
                }),

                ()=>CHECK(user,(result)=>{

                    console.log('Account Not Deleted');
                    
                })
                
                )

            })

        })
        
        GETPACKAGE('https://script.googleusercontent.com/macros/echo?user_content_key=kYLhamRqUj16-aL1rdJ_VtjUbS7NaKp1k04OM4xZ29mCQO9sX8YRvyz_MNUVPM65knFD3UoNIC1vWmx_XngMw7UoyevKxdE6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnB6qUJyy0-nbgIYqHld3JutVMF0GqNpXCKea3hKLtzI0ajmYczC2uRoJrh6ibkKg85PhHPJVPaEYuGB3l_Sk1xmqIpQGL8q6bw&lib=Mp7RLsbiuB3aWCASYYtzoScSoMAbC-O1l', 'cors', (data) => {
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
                        console.log('no premium')
                    }
                });
            });    
        });
         
    })

    CONDITION(
        localStorage.getItem("User"),
        () => HOMEPAGE(),
        () => LOGINPAGE()
    );

};


export { CONNECTION };
