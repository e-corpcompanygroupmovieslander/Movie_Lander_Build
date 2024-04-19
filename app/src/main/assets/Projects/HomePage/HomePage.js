import { ICONMODULE } from "../Modules/IconsModule.js"

const HOMEPAGE=()=>{

    ROUNDFOOTERWIDGET(`

        <div class='View'></div>
        <div class='View'></div>
        <div class='View'></div>
        <div class='View'></div>
        <div class='View'></div>
        <div class='View'></div>
        <div class='View'></div>
        <div class='View'></div>
        <br><br><br>

    `,`
        <img src='${ICONMODULE}list.png'/>
        <img src='${ICONMODULE}movies.png'/>
        <img src='${ICONMODULE}profile.png'/>
    `)

}

export{HOMEPAGE}