function fact(a) {
    var facto = 1;
    for (var i = a; i > 0; i--) {
        facto = facto * i
    }
    return facto;
}

function c(n,r) {
    var nf = fact(n)
    var rf = fact(r)
    var nmr = n - r
    var nrf = fact(nmr)
    var rfnrf = rf * nrf
    var comb = nf / rfnrf;
    return comb;
}

function expand() {
    var str = "";
    var num = document.getElementById("power").value;
    var n1 = num + 1;
    
    for (var i = 0; i < num; i++) {
        var nmi = num - i
        str = str + c(num, i) + "x" + "<sup>" + nmi + "</sup>" + "y" + "<sup>" + i + "</sup>" + " + "
        
       }

       str = str + "1x" + "<sup>" + 0 + "</sup>" + "y" + "<sup>" + num + "</sup>"
       document.getElementById("expansion").innerHTML = str

       
 }





