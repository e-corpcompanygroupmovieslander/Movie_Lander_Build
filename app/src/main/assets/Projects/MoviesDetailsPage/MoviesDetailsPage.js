import { ICONMODULE, MOVIESPATH, YOUTUBELINK } from "../../Modules/Module.js";
import { COMMENTSPAGE } from "../CommentsPage/CommentsPage.js";
import { HOMEPAGE } from "../HomePage/HomePage.js";
import { INSIGHTPAGE } from "../InsightPage/InsightPage.js";
import { MOVIESDATAPAGE } from "../MoviesDataPage/MovieDataPage.js";
import { MOVIESSELECTIONPAGE } from "../MoviesSelectionPage/MovieSelectionPage.js";

export const MOVIESDETAILSPAGE=()=>{

    DEJSON('','MovieData',(data)=>{

        DISPLAY('',`

            <img class='Movie_Image' src='${MOVIESPATH+data.MovieImage}'/>

            <header class='AppHeader'>

                <img class='BackIcon' src='${ICONMODULE}arrow.png'/>

                <h1 class='Profile'>${data.MovieName}</h1>

            </header>

            <div class='MovieDetailsDataDiv'>

                <iframe class='TrailorHolder' src='${YOUTUBELINK+data.MoveTrailer}'/></iframe>
                    
                <button class='brown'>Watch</button>

                <div class='DataDisplayDiv'>

                        <h1 id='Movietitle' class='Message'>${data.MovieName}</h1>

                        <button class='MyDataButton'>

                            <h1 class='mytitle'>Rating</h1>

                            <img id='RatingIcon' class='myIcon' src='${ICONMODULE}trending-topic.png'/>
                        
                            <h1 class='MyData'>${data.Rated}/10</h1>

                            <h1 class='Catergories'>${data.Catergory}</h1>

                            <footer class='DetailsFooter'>

                                <img id='Catergories' src='${ICONMODULE}lock.png'/>

                                <img id='ParentalControl' src='${ICONMODULE}G.png'/>

                                <img id='SaveMovie' src='${ICONMODULE}save.png'/>
                                                
                            </footer>

                        </button>

                    </div>
                    
                    <footer class='Footer'>

                        <button id='Insight' class='Bottomdata'>Insight</button>

                        <button id='Moviedata' class='Bottomdata'>Details</button>

                        <button id='MovieComments' class='Bottomdata'>Comments</button>
                    
                    </footer>
                    
                
                </div>
            
            </div>
        
        
        `);

        DECLARATION('#Catergories',(ELEMENT)=>{
            CHECK(data.Subscription,(result)=>{
                CONDITION(result === true ,
                    ()=>ELEMENT.src=ICONMODULE+'lock.png',
                    ()=>ELEMENT.src=ICONMODULE+'unlocked.png'
                )
            })
        })

        DECLARATION('#ParentalControl',(ELEMENT)=>{
            CHECK(data.ParentalControl,(result)=>{
                CONDITION(result === true ,
                    ()=>ELEMENT.src=ICONMODULE+'PG.png',
                    ()=>ELEMENT.src=ICONMODULE+'G.png'
                )
            })
        })

        CLICKED('.BackIcon',()=>{

            CONDITION(sessionStorage.getItem('Path') === 'CATERGORYPAGE' ,
            
            ()=>MOVIESSELECTIONPAGE(),
        
            ()=>HOMEPAGE()
            
            )
        })

        CLICKED('#Moviedata',()=>{
            MOVIESDATAPAGE()
        })

        CLICKED('#MovieComments',()=>{
            COMMENTSPAGE();
        })

        CLICKED('#Insight',()=>{
            INSIGHTPAGE();
        })

    })

}

