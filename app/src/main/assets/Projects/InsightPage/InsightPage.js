import { MONITORING } from "../Monitoring/Monitoring.js"
import { MOVIESDETAILSPAGE } from "../MoviesDetailsPage/MoviesDetailsPage.js"
export const INSIGHTPAGE=()=>{
    DEJSON('','MovieData',(data)=>{
        MONITORING('User At Insight Page For Movie For'+ data.MovieName)
        CONDITION(localStorage.getItem(data.MovieName),
            ()=> DEJSON('local',data.MovieName,(data)=>{
                STORE('','MovieInsight',data.MyInsight)
            }),
            ()=>STORE('','MovieInsight','')
        )
        BACKHEADERWIDGET(()=>{MOVIESDETAILSPAGE()},
        `
            <h1 class='Profile'>${data.MovieName}</h1>
        `,
        `
            <textarea class='InsightInput' id='MyView' placeholder='Enter Your Movie Views'></textarea>
        `,''
        );
        DECLARATION('.InsightInput',(ELEMENT)=>{
            ELEMENT.value=sessionStorage.getItem('MovieInsight');
            EVENT(ELEMENT,'input',()=>{
                const DATA={
                    "MovieName":data.MovieName,
                    "MyInsight":ELEMENT.value
                };
                JSONIFICATION(DATA,(info)=>{
                    STORE('local',data.MovieName,info);
                    MONITORING('User has Insighted Thoughts Movie For'+ data.MovieName+'Here Are Their Insights'+info)
                });
            });
        });
    })
}