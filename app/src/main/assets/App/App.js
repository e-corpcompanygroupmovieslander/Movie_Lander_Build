APPMODE(localStorage.getItem('AppColour'),'','#121212');
STORE('local','AppVersion','0.0.3');

APPCOLOR('','#ffffff');

const APPSTART=()=>{

    EXTERNALCSS('https://e-corpcompanygroupmovieslander.github.io/Movie_Lander_Build/app/src/main/assets/Connection/Connection.css')

    CHECK('',(result)=>{

        WIDGET(`

        <img class='AppLogo' src='../Library/Images/app_icon.png'/>

        <h1 class='LoaderMessage'>Checking For Updates</h1>

        <img id='OfflineImage' class='LoadingIcon' src='${LOADERICON}'/>

        <button class='forestgreen'>Please Wait</button>
        
        `);

        MODULE('https://e-corpcompanygroupmovieslander.github.io/Movie_Lander_Build/app/src/main/assets/Connection/Connection.js','CONNECTION',(CONNECTION)=>{CONNECTION()})

    })

}

APPSTART();

