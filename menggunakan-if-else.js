var nama = '';
var peran = '';
if(nama === '') {
  console.log('Nama harus diisi!');
}
else if (nama === '', peran === '') {
  console.log('Halo ' + nama + ', pilih peranmu untuk memulai game');
}
else if ((nama, peran === 'tabib')) {
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log(
    'Halo ' + peran + ' ' + nama + ',kamu akan membantu temanmu yang terluka.');
}
else if ((nama, peran === 'ksatria')) {
   console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo ' + peran + ' ' + nama + ',kamu akan membantu temanmu yang terluka.');
}
else if ((nama, peran === 'penyihir')) {
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo ' + peran + ' ' + nama + ',kamu akan membantu temanmu yang terluka.');
}
else {
  console.log('Invalid');
}
