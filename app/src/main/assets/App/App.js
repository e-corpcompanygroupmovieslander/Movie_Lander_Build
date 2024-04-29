APPMODE('','','#121212');

STORE('local','AppName','Movie Lander');

APPSTART=()=>{
    NETWORKSTATE((data)=>{
        CONDITION(data === true ,
            ()=>CHECK(data, (result) => {
                WIDGET(` 
                    <img class='AppLogo' src='${IMAGESPATH}app_icon.png'/>
                    <h1 class='LoaderMessage'>Movie Lander </h1>
                    <p>Please be patient as App is Syncing</p>
                    <img id='OfflineImage' class='LoadingIcon' src='${LOADERICON}'/>
                    <button class='forestgreen'>Please Wait</button>
                `);
                EXTERNALCSS(APPCSSPATH);
                MODULE(APPPATH,'CONNECTION',(CONNECTION) => {CONNECTION()});
            }),
            ()=>CHECK(data,(result)=>{

                WIDGET(` 
                    <img class='AppLogo' src='${IMAGESPATH}app_icon.png'/>
                    <h1 class='LoaderMessage'>Your Offline</h1>
                    <p>Check Your Internet Connection</p>
                    <img id='OfflineImage' src='${ICONSPATH}no-wifi.png'/>
                    <button class='forestgreen'>Retry</button>
                `);

                CLICKED('.forestgreen',()=>{APPSTART()});
            })
        )
    })

}

APPSTART();