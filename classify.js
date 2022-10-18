function classify(PhoneNumber) {
    var viettel = [];
    var vina = [];
    var mobi = [];
    for (var i = 0; i < PhoneNumber.length; i++) {
        console.log(PhoneNumber[i]);
        if (PhoneNumber[i].substring(0, 3) == '098') {
            viettel.push(PhoneNumber[i]);
        }
        if (PhoneNumber[i].substring(0, 3) == '088') {
            vina.push(PhoneNumber[i]);
        }
        if (PhoneNumber[i].substring(0, 3) == '023') {
            mobi.push(PhoneNumber[i]);
        }
    }
    return "'viettel : ".concat(viettel, "; vina : ").concat(vina, "; mobi : ").concat(mobi);
}
var arr = ['098166666', '09824444', '0888888888', '088696969', '023569586', '02345656'];
console.log(classify(arr));
//     if (result == '098') {
//         console.log('viettel');
//     }
//     if (result == '081') {
//         console.log('mobi');
//     }
//     if (result == '031') {
//         console.log('vina')
//     }
// }
// classify('0316321302');
