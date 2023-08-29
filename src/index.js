module.exports = function reverse (n) {
   n = `${n}`;
    let i = 0;
    let result = '';
    while (i < n.length) {
    result = `${n[i]}${result}`;
    i = i + 1;
   }
   if (result.slice(-1) == '-') {
    return result.slice(0,(n.length - 1));
   }    else return result;
}
