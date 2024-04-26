import { ICONMODULE, MOVIECOMMENTS, MOVIECOMMENTSPOST } from "../../Modules/Module.js";
import { MOVIESDETAILSPAGE } from "../MoviesDetailsPage/MoviesDetailsPage.js";

export const COMMENTSPAGE=()=>{

    DEJSON('','MovieData',(data)=>{

        BACKHEADERWIDGET(()=>{MOVIESDETAILSPAGE()},
        `
            <h1 class='Profile'>${data.MovieName}</h1>
    
        `,
        `
        <div class='CommentsDiv'>
            <h2>No Comments For This Movie</h2>
        </div>
        <input  class='Comment' type='text' placeholder='Write Your Comment' />   
        <button id='CommentsButton' class='forestgreen' >Send</button>
        `,'CommentsPage'
        );

        DECLARATION('.CommentsDiv',(ELEMENT)=>{
            DEJSON('local','Comments',(MyMovie)=>{
                REDUX(MyMovie,(element)=>{
                    CHECK(element,(result)=>{
                        CONDITION(result.Movie === data.MovieName ,
                            ()=>CHECK(result,(result)=>{
                                DISPLAY(ELEMENT,'')
                                CREATEELEMENT('div','CommenstDiv',(COMMENTSDIV)=>{
                                    ADD(ELEMENT,COMMENTSDIV)
                                    console.log(result)
                                })
                            }),
                            ()=>console.log('non')
                        
                        )
                    } )
                })
            })
        })

   


    
    
        CLICKED('#CommentsButton',()=>{

            DECLARATION('#CommentsButton',(ELEMENT)=>{

                LOADER(ELEMENT)

                const Comment=document.querySelector('.Comment');
    
                const USER={
                    "Movie":data.MovieName,
                    "Commentor":localStorage.getItem('User'),
                    "Comment":Comment.value,
                    "Date":new Date ()
                }
    
                POSTPACKAGE(MOVIECOMMENTSPOST,'no-cors',USER,(data)=>{
                    console.log(data)
                })

            })

        })

    })



}