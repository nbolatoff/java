var n = +prompt ("1 chi sonni yozing" );
var u = +prompt ("2 chi sonni yozing" );
var r = +prompt ("3 chi sonni yozing" );
if (n > u && n < r || n < u && n > r) {
    alert("Orta qiymati" + n)
} else if (u > n && u < r || u < n && u > r) {
    alert("Orta qiymati" + u)
} else {
    alert("Orta qiymati" + r)
} 
  
