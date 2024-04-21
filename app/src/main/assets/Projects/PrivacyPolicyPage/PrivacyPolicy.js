import { ICONMODULE, PRIVACYTEXT } from "../../Modules/Module.js";

APPMODE(localStorage.getItem('AppColur'),'','#121212');
APPCOLOR('','#dcdcdc')


WIDGET(`

<header>

    <img id='AppLogo' src='../../Library/Images/app_icon.png'/>

    <h1 class='Profile'>Privacy Policy</h1>

</header>

<div id='PolicyPage' class='MovieDetailsDataDiv'>

    <img id='AnimationsLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>

</div>


`)

DECLARATION('.MovieDetailsDataDiv',(ELEMENT)=>{
    
    GETPACKAGE(PRIVACYTEXT,'cors',(data)=>{

        DISPLAY(ELEMENT,data)

    })

})

