APPMODE(localStorage.getItem('AppColour'),'','#121212')
APPCOLOR('','#ffffff');

const APPSTART=()=>{

    CHECK('',(result)=>{

        WIDGET(`

        <img class='AppLogo' src='../Library/Images/app_icon.png'/>

        <h1 class='LoaderMessage'>Checking For Updates</h1>

        <img id='OfflineImage' class='LoadingIcon' src='${LOADERICON}'/>

        <button class='forestgreen'>Please Wait</button>
        
        `);

        MODULE('../Connection/Connection.js','CONNECTION',(CONNECTION)=>{CONNECTION()})

    })

}

APPSTART();

