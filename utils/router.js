import { home } from '../views/home.js';
import { details } from '../views/details.js';
export function router(){
    const appRoot = document.getElementById("app");
    const btn = document.getElementById("search-bar");
    const err = document.getElementById("err");
    let { hash } = window.location; // desestructuracion
    switch(hash){
      case '': 
      home(appRoot);
        break;
        case '#home': 
      home(appRoot);
        break;
        case '#details': 
        if(btn.value===""){
        
        }else{
          details(appRoot,btn.value);
        }
      
        break;
    }
  }