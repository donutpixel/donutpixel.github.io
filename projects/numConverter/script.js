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
        
    // binary to decimal
    convertBase.bin2dec = function () {
        var num = document.getElementById("box").value;
        var res = convertBase(num).from(2).to(10);
        if (res.toString()=="NaN"){
            document.getElementById("numConvResult").innerHTML = "Error: That's not a binary number!"
        } else {
            document.getElementById("numConvResult").innerHTML = res;
        }
    };
    
    // decimal to binary
    convertBase.dec2bin = function () {
        var num = document.getElementById("box").value;
        var res = convertBase(num).from(10).to(2);
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