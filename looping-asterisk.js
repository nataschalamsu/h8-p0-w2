// 1. Menyusun Barisan Bintang

var rows1 = 5;

for(var s = 0; s < rows1; s ++) {
  console.log('*');
}

// 2. Menyusun Barisan Bintang dengan Nested Looping

var baris = 5;
var loopLuar = 0;

while(loopLuar < baris) {
  loopLuar ++;
  var loopDalam = 0;
  var bintang = '';
  while(loopDalam < baris) {
    loopDalam ++;
    bintang += '*';
  }
  console.log(bintang);
}


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var baris = 5;
var loopLuar = 0;

while(loopLuar < baris) {
  loopLuar ++;
  var loopDalam = 0;
  var bintang = '';
  while(loopDalam < loopLuar) {
    loopDalam ++;
    bintang += '*';
  }
  console.log(bintang);
}
