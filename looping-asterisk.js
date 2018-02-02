// 1. Menyusun Barisan Bintang

var rows1 = 5;

for(var s = 0; s < rows1; s ++) {
  console.log('*');
}

// 2. Menyusun Barisan Bintang dengan Nested Looping

var rows1 = 5;

for (var i = 0; i < rows1; i++) {
  for (var j = rows1; j <= rows1; j++) {
  }
  console.log('*'.repeat(j));
}


// 3. M

var rows1 = 5;

for (var i = 0; i < rows1; i++) {
  for (var j = i; j <= i; j++) {
  }
  console.log('*'.repeat(j));
}
