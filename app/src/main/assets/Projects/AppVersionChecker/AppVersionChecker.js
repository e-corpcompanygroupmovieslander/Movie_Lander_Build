import { CONNECTION } from "../../Connection/Connection.js";
import { ICONMODULE } from "../../Modules/Module.js"

export const APPVERSIONCHECKER=()=>{

    DEJSON('local','UserData',(data)=>{

        const CURRENTVERSION='0.0.5';

        CONDITION(localStorage.getItem('AppVersion'),
        ()=>CONDITION(localStorage.getItem('AppVersion') === CURRENTVERSION ,
            ()=>console.log('Same Version'),
            ()=>CHECK(CURRENTVERSION,(result)=>{

                WIDGET(`

                    <img class='AppLogo' src='${IMAGESPATH}app_icon.png'/>
                    <h1 class='LoaderMessage'>Update Required</h1>
                    <p>
                    Movie Lander Version ${localStorage.getItem('AppVersion')}
                    <br><br>
                    To Access Some New Features Please Update to the Latest Version Of Movie Lander
                    </p>
                    <img id='OfflineImage' src='${ICONMODULE}upload.png'/>
                    <button class='forestgreen'>Download</button>

                `)

                const UPDATELINK='https://play.google.com/store/apps/details?id=com.movie_lander&pcampaignid=web_share';

                CLICKED('.forestgreen',()=>{WEBSITE(UPDATELINK)})

                }
            )
    
        ),
        ()=>CHECK(CURRENTVERSION,(result)=>{

                WIDGET(`

                    <img class='AppLogo' src='${IMAGESPATH}app_icon.png'/>
                    <h1 class='LoaderMessage'>Update Required</h1>
                    <p>
                    Movie Lander Version ${localStorage.getItem('AppVersion')}
                    <br><br>
                    To Access Some New Features Please Update to the Latest Version Of Movie Lander
                    </p>
                    <img id='OfflineImage' src='${ICONMODULE}upload.png'/>
                    <button class='forestgreen'>Download</button>

                `)

                const UPDATELINK='https://play.google.com/store/apps/details?id=com.movie_lander&pcampaignid=web_share';

                CLICKED('.forestgreen',()=>{WEBSITE(UPDATELINK)})

                }
            )
    
        )

    })

}