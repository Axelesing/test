import json from './result';

function Test(str) {
    let test_str = '1,-*2,1*3,1*4,3*5,3*6,5*7,3*8,7*9,3*10,9*11,3*12,1*13,12*14,12*15,14*16,12*17,16*18,12*19,12*20,1*21,20*22,20*23,22*24,20*25,24*26,20*27,1*28,27*29,27*30,1*31,30*32,1*33,32*34,1*35,34*36,34*37,36*38,34*39,38*40,34*41,40*42,34*43,1*44,43*45,1*46,45*47,1*48,47*49,47*50,49*51,49*52,51*53,49*54,53*55,49*56,1*57,56*58,1*59,58*';
    if (typeof str === "string") {
        console.assert(str === test_str, 'NOT STRING');
    }
    if (typeof str === "object") {
        console.assert(JSON.stringify(str) === JSON.stringify(json), 'NOT TREE');
    }
}

export default Test;