## iikanji no progress bar

![screenshot](https://github.com/nbqx/ii-kanji-no-progress-bar/raw/master/screenshot/sc.gif)

iikanji no cli progress bar

## Usage

```js
var ii = require('ii-kanji-no-progress-bar');
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
```
