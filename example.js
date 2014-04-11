var ii = require('.');

var pgb = ii(100);
var current = 0;
(function loop(c){
  console.log(pgb.tick(c));
  if(c>100){
    return false
  }else{
    setTimeout(loop,300,c+10);
  }
})(current);
