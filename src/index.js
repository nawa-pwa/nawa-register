import {register} from './lib/decorator';
import asyncDtect from './lib/asyncDetect';


export default class Satarify{
    @register
    static register(file,options){
        return new Promise((res,rej)=>{
            if('serviceWorker' in navigator){
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
                rej(0)
            }
        })
        
    }
    static asyncRegister(file,options){
        if(asyncDtect()){
            Satarify.register(file.options);
        }
    }
}
