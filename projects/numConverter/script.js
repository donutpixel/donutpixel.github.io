// "<br>"
var br = "<br>";

var convertBase = function (num) {
    return {
        from : function (baseFrom) {
            return {
                to : function (baseTo) {
                    return parseInt(num, baseFrom).toString(baseTo);
                }
            };
        }
    };
};

function addCommas(nStr) {
    nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
};

// binary to decimal
convertBase.bin2dec = function () {
    var num = document.getElementById("box").value;
    var res = convertBase(num).from(2).to(10);
    if (res.toString() === "NaN") {
        document.getElementById("numConvResult").innerHTML = "Error: That's not a binary number!"
    } else {
        document.getElementById("numConvResult").innerHTML = res;
    }
};

// decimal to binary
convertBase.dec2bin = function () {
    var num = document.getElementById("box").value, res = convertBase(num).from(10).to(2);
    document.getElementById("numConvResult").innerHTML = res;
};

// decimal to hex
convertBase.dec2hex = function () {
    var num = document.getElementById("box").value;
    var res = convertBase(num).from(10).to(16);
    document.getElementById("numConvResult").innerHTML = res;
};

// hex to decimal
convertBase.hex2dec = function () {
    var num = document.getElementById("box").value;
    var res = convertBase(num).from(16).to(10);
    alert(addCommas(res));
    document.getElementById("numConvResult").innerHTML = res;
};

// binary to hex
convertBase.bin2hex = function () {
    var num = document.getElementById("box").value;
    var res = convertBase(num).from(2).to(16);
     if (res.toString()=="NaN"){
        document.getElementById("numConvResult").innerHTML = "Error: That's not a binary number!"
    } else {
        document.getElementById("numConvResult").innerHTML = res;
    }


};

// hex to binary
convertBase.hex2bin = function () {
    var num = document.getElementById("box").value;
    var res = convertBase(num).from(16).to(2);
    document.getElementById("numConvResult").innerHTML = res;
};    

//dec to all
convertBase.dec2all = function () {
    var decVal = document.getElementById('box').value;
    if(isNaN(decVal)) { 
        document.getElementById('results').innerHTML = "Error: That's not a decimal number. Try again!"
    } else {
        decVal = addCommas(decVal);
        var binVal = convertBase(decVal).from(10).to(2);
        var hexVal = convertBase(decVal).from(10).to(16);
        document.getElementById("results").innerHTML="Decimal Value: " + decVal + br + "Binary Value: " + binVal + br + "Hex Value: " + hexVal;
    
    }
};

//bin to all
convertBase.bin2all = function () {
    var binVal = document.getElementById('box').value;
    var decVal = convertBase(binVal).from(2).to(10);
    var hexVal = convertBase(binVal).from(2).to(16);
    
    if(decVal.toString() == 'NaN' && hexVal.toString() == 'NaN'){
    document.getElementById('results').innerHTML = "Error: That's not a binary number. Try again!";
    } else {
    decVal = addCommas(decVal);
    document.getElementById("results").innerHTML = "Decimal Value: " + decVal + br + "Binary Value: " + binVal + br + "Hex Value: " + hexVal;
    }

};

//hex to all
convertBase.hex2all = function () {
    var hexVal = document.getElementById('box').value;
    function isHex(h) {
        var a = parseInt(h,16);
        return (a.toString(16) === h.toLowerCase())
}
    if(isHex(hexVal)){
        var decVal = convertBase(hexVal).from(16).to(10);
        decVal = addCommas(decVal);
        var binVal = convertBase(hexVal).from(16).to(2);
        document.getElementById("results").innerHTML="Decimal Value: " + decVal + br + "Binary Value: " + binVal + br + "Hex Value: " + hexVal;
    } else {
        document.getElementById('results').innerHTML = "Error: That's not a hexadecimal number. Try again!";
    }
};