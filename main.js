

function validatePhoneNumber(number) {
    let pattern = /\(8[4-8]{1,2}\)\-\(0[1-9]{9,}\)$/;
    if (pattern.test(number)){
        alert("So dien thoai hop le");
    }else {
        alert("So dien thoai ko hop le");
    }
}