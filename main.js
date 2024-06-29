function payUPI() {
    var name = document.getElementById('merName').value;
    var vpa = document.getElementById('merVPA').value;
    var amount = document.getElementById('merAmu').value;
    var desc = document.getElementById('merDes').value;
    var url = document.getElementById('merURL').value;
    var qrText = "upi://pay?pn="+name+"&pa="+vpa+"&am="+amount+"&tn="+desc+"&url="+url+"&cu=INR";
    window.location.href = qrText;
    console.log(qrText);
}

window.onload = function() {
    var savedName = localStorage.getItem('name1');
    var savedVPA = localStorage.getItem('vpa1');
    var savedAmount = localStorage.getItem('amount1');
    var savedDesc = localStorage.getItem('desc1');
    var savedUrl = localStorage.getItem('url1');
    if (savedName || savedVPA || savedAmount || savedDesc || savedUrl) {
        document.getElementById('merName').value = savedName;
        document.getElementById('merVPA').value = savedVPA;
        document.getElementById('merAmu').value = savedAmount;
        document.getElementById('merDes').value = savedDesc;
        document.getElementById('merURL').value = savedUrl;
        generateQRCode();
    }
}

function downloadQRCode() {
    var qrCodeImage = document.getElementById('qrcode').getElementsByTagName('img')[0].src;
    var downloadLink = document.createElement('a');
    downloadLink.href = qrCodeImage;
    downloadLink.download = 'qrcode.png';
    downloadLink.click();
}

function generateQRCode() {
    var name = document.getElementById('merName').value;
    var vpa = document.getElementById('merVPA').value;
    var amount = document.getElementById('merAmu').value;
    var desc = document.getElementById('merDes').value;
    var url = document.getElementById('merURL').value;

    var existingQRCode = document.getElementById('qrcode').getElementsByTagName('img')[0];
            if (existingQRCode) {
            existingQRCode.remove();
}
        var qrText = "upi://pay?pn="+name+"&pa="+vpa+"&am="+amount+"&tn="+desc+"&url="+url+"&cu=INR";
        localStorage.setItem('name1',name);
        localStorage.setItem('vpa1',vpa);
        localStorage.setItem('amount1',amount);
        localStorage.setItem('desc1',desc);
        localStorage.setItem('url1',url);

        var qr = new QRCode(document.getElementById('qrcode'), {
        text: qrText,
        width: 200,
        height: 200
    });
}