/**
 * @noWrap
 */

import Satarify from '../src';

Satarify.reigster('./sw.js')
.then(reg=>{
  
},(status)=>{
 // register failed
 switch(status){
   case 0:
    // don't support
   break;
 }
})