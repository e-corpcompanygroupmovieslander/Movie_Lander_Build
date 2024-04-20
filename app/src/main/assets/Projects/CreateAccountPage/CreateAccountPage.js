import { ICONMODULE } from "../../Modules/Module.js";
import { EMAILVERIFICATIONPAGE } from "../EmailVerificationPage/EmailVerificationPage.js";
import { LOGINPAGE } from "../LoginPage/LoginPage.js";

export const CREATEACCOUNTPAGE=()=>{
    
    WIDGET(`

        <img class='AppLogo' src='../Library/Images/app_icon.png'/>

        <input class='Username' type='text' placeholder='Enter User Name'/>

        <input class='UserEmail' type='email' placeholder='Enter User Email'/>

        <input class='UserPassword' type='password' placeholder='Enter User Password'/>

        <input class='UserDate' type='text' placeholder='Enter Birth day'/>

        <input class='Location' type='text' placeholder='Enter User Location' ReadOnly/>

        <h1 class='DisplayCode' >+</h1>

        <input class='Telephone' type='tel' maxlength='10'   placeholder='Enter User Telephone'/>
        
        <button class='forestgreen' >Create Account</button>

        <button class='blue' >Login</button>

        <div class='CountryDiv'>
            
            <button class='brown'>Close</button>

            <div class='CoutryDivs'></div>
        
        </div>

    `);

    CLICKED('.blue',()=>{LOGINPAGE()});

    CLICKED('.UserDate',()=>{
        DECLARATION('.UserDate',(ELEMENT)=>{
            ELEMENT.type='date';
        })
    })

    CLICKED('.Location',()=>{

        const CoutryDivs=document.querySelector('.CoutryDivs');

        const CountryDiv=document.querySelector('.CountryDiv');

        const Location = document.querySelector('.Location');

        const Code =document.querySelector('.DisplayCode');

        STYLED(CountryDiv,'display','block');

        CLICKED('.brown',()=>{
         
            STYLED(CountryDiv,'display','none');
            
        })

        REDUX(COUNTRYDATA,(element)=>{
    
            CREATEELEMENT('button','LocationButton',(ELEMENT)=>{
    
                DISPLAY(ELEMENT,`
    
                    <h1 class='LocationText'>${element.name}</h1>
    
                    <img class='LocationImage' src='${ICONMODULE}location.png'/>
                
                `)

                EVENT(ELEMENT,'click',()=>{

                    Location.value=element.name;

                    DISPLAY(Code,element.phoneCode)
                 
                    STYLED(CountryDiv,'display','none');
                    
                })
    
                ADD(CoutryDivs,ELEMENT);
            })
    
        })

    })




    CLICKED('.forestgreen',()=>{EMAILVERIFICATIONPAGE()});

}