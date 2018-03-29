var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue|house|car/gi, function (x) {
    return x.toUpperCase();
}); 
