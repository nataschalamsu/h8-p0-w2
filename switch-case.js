var tanggal = 31
var bulan = 1
var tahun = 1900
var month = '';

switch(bulan) {
  case 1: {months = 'Januari'; break;}
  case 2: {months = 'Februari'; break;}
  case 3: {months = 'Maret'; break;}
  case 4: {months = 'April'; break;}
  case 5: {months = 'Mei'; break;}
  case 6: {months = 'Juni'; break;}
  case 7: {months = 'Juli'; break;}
  case 8: {months = 'Agustus'; break;}
  case 9: {months = 'September'; break;}
  case 10: {months = 'Oktober'; break;}
  case 11: {months = 'November'; break;}
  case 12: {months = 'Desember'); break;}
  default: {months = 'tidak ditemukan');break;}
}

console.log(tanggal + ' ' + months + ' ' + tahun)
