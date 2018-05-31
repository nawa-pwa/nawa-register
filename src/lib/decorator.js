import {defaultOpt} from './store';

export const register = function (target, key, descriptor) {
    const method = descriptor.value; // 保存原始函数

    descriptor.value = function (...args) {

        if(!args[0]) return console.warn("ServiceWorker file is necessary");


        args[1] = Object.assign({}, defaultOpt, args[1]);
        return method.apply(this, args);

    }
    return descriptor;
}