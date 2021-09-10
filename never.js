"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) {
    }
}
if (typeof a !== 'string') {
    a;
}
var b = ''; // 할당 에러; never에는 할당 불가
