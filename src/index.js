import {defaultOpt} from './lib/store';
import asyncDtect from './lib/asyncDetect';

export default class Satarify{

    static syncRegister(file,options){
        return new Promise((res,rej)=>{
            if('serviceWorker' in navigator){

                options = Object.assign({},defaultOpt,options);
                navigator
                    .serviceWorker
                    .register(file,options)
                    .then(reg=>{
                        res(reg);
                    })
                    .catch(err=>{
                        rej(err);
                    })
            }else{
                rej("don't support ServiceWorker")
            }
        })
        
    }
    static register(file,options){
        if(asyncDtect()){
           return Satarify.syncRegister(file,options);
        }else{
            return Promise.reject("your browser dont't support async/await")
        }
    }
}

