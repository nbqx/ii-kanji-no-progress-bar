var clc = require('cli-color');
module.exports = function(total){
  var self = this;
  function _m(t,cu){
    var ret = [],
        s = 10,
        c = cu/s,
        r = s-c;
    var head = "\uD83C\uDFC3";
    var tail = "\uD83D\uDCA8";
    for(var i=0; i<c-1; i++){ ret.push(tail) }
    ret.push(head);
    for(var j=0; j<r; j++){ ret.push(' ') }
    return ret.reverse().join('')
  };
  self.total = total || 100;
  self.tick = function(n){
    if(n>self.total) return [clc.reset,"\uD83D\uDEB6",clc.green(" :[completed]")].join('')

    return [
      clc.reset,
      "\uD83C\uDFC1 ",
      _m(self.total, n),
      clc.cyan(" :["+n.toString()+"% completed]")
    ].join('');
  };

  return self
};
