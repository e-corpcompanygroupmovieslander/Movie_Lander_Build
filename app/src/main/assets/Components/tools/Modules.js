const CLICKED=(selector,callback)=>{const element=document.querySelector(selector);EVENT(element,"click",()=>{callback()})};
