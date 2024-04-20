import { ICONMODULE } from "../../Modules/Module.js";
import { MOVIESDETAILSPAGE } from "../MoviesDetailsPage/MoviesDetailsPage.js";

export const COMMENTSPAGE=()=>{

    BACKHEADERWIDGET(()=>{MOVIESDETAILSPAGE()},
    `
        <h1 class='Profile'>Comments</h1>

    `,
    `
    <div class='CommentsDiv'>

        <img id='AnimationsLoader' class='LoadingIcon' src='${ICONMODULE}loading.png'/>
    
    </div>

    <input  class='Comment' type='text' placeholder='Write Your Comment' />
    
    <button id='CommentsButton' class='forestgreen' >Send</button>

    `,'CommentsPage'
    );

}