document.getElementById("btn1").onclick = function () {
    var checkbox = document.getElementsByName("selector");
    var option;
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) {
            var option = i;
        }
    }
    if (option == null) {
        alert("Vui lòng chọn loại xe");
        return;
    }
    var khuyenMai = document.getElementById("khuyenMai").value;
    if (khuyenMai == "") {
        alert("Vui lòng nhập số khuyến mãi");
        return;
    }
    var waitingTime = document.getElementById("waitingTime").value;
    if (waitingTime == "") {
        alert("Vui lòng nhập thời gian chờ");
        return;
    }
    var firstPrice = (option == 0) ? 8000 : ((option == 1) ? 9000 : 10000);
    var secondPrice = (option == 0) ? 12000 : ((option == 1) ? 14000 : 16000);
    var thirdPrice = (option == 0) ? 10000 : ((option == 1) ? 12000 : 14000);
    var waitingPrice = (option == 0) ? 2000 : ((option == 1) ? 3000 : 4000);
    var result;
    if (khuyenMai <= 1) result = firstPrice * khuyenMai;
    else if (khuyenMai <= 1 + 20) result = 1 * firstPrice + (khuyenMai - 1) * secondPrice;
    else result = 1 * firstPrice + 20 * secondPrice + (khuyenMai - 21) * thirdPrice;
    result = result + waitingPrice * waitingTime;
    document.getElementById("xuatTien").innerHTML = result;
    document.getElementById("divThanhTien").style.display = "block";
};
document.getElementById("btn2").onclick = function () {
    var checkbox = document.getElementsByName("selector");
    var option=-1;
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) {
            var option = i;
        }
    }
    if (option < 0) {
        alert("Vui lòng chọn loại xe");
        return;
    }
    var khuyenMai = document.getElementById("khuyenMai").value;
    if (khuyenMai == "") {
        alert("Vui lòng nhập số khuyến mãi");
        return;
    }
    var waitingTime = document.getElementById("waitingTime").value;
    if (waitingTime == "") {
        alert("Vui lòng nhập thời gian chờ");
        return;
    }
    var carName = (option == 0) ? "Uber X" : ((option == 1) ? "Uber SUV" : "Uber Black");
    var firstPrice = (option == 0) ? 8000 : ((option == 1) ? 9000 : 10000);
    var secondPrice = (option == 0) ? 12000 : ((option == 1) ? 14000 : 16000);
    var thirdPrice = (option == 0) ? 10000 : ((option == 1) ? 12000 : 14000);
    var waitingPrice = (option == 0) ? 2000 : ((option == 1) ? 3000 : 4000);
    var top = -1;
    var arr = [1, 20];
    var arrPrice = [firstPrice, secondPrice, thirdPrice];
    var subKhuyenMai = khuyenMai;
    var result = 0;
    var addTR = function () {
        var newTR = document.createElement("tr");
        for (var i = 1; i <= 4; i++) { var newTD = document.createElement("td"); newTR.appendChild(newTD); }
        newTR.getElementsByTagName("td")[0].colSpan = "2";
        return newTR;
    }
    var tBody = document.getElementById("tableHoaDon").getElementsByTagName("tbody")[0];
    var tableRows = tBody.getElementsByTagName("tr");
    while (tableRows.length > 0) {
        tBody.removeChild(tBody.firstChild);
    }
    while (subKhuyenMai > 0) {
        var newTR = addTR();
        tBody.appendChild(newTR);
        var currentTR = tBody.lastElementChild;
        var a = (top + 1 >= arr.length) ? subKhuyenMai : (subKhuyenMai - arr[top + 1] < 0) ? subKhuyenMai : arr[top + 1];
        console.log(a);
        currentTR.getElementsByTagName("td")[1].innerHTML = a + " km";
        currentTR.getElementsByTagName("td")[2].innerHTML = arrPrice[top + 1];
        var subReult = a * arrPrice[top + 1];
        currentTR.getElementsByTagName("td")[3].innerHTML = subReult;
        result = result + subReult;
        ++top;
        if (top >= 2) { break; }
        subKhuyenMai = subKhuyenMai - arr[top];
    }
    tableRows = tBody.getElementsByTagName("tr");
    for (var i = 0; i < tableRows.length; i++) {
        tableRows[i].getElementsByTagName("td")[0].innerHTML = carName;
    }
    var newTR = addTR();
    tBody.appendChild(newTR);
    tableRows[tableRows.length - 1].getElementsByTagName("td")[0].innerHTML = 'Thời gian chờ';
    tableRows[tableRows.length - 1].getElementsByTagName("td")[1].innerHTML = waitingTime + " phút";
    tableRows[tableRows.length - 1].getElementsByTagName("td")[2].innerHTML = waitingPrice;
    tableRows[tableRows.length - 1].getElementsByTagName("td")[3].innerHTML = waitingTime * waitingPrice;
    document.getElementById("totalHoadon").lastElementChild.innerHTML = result + waitingTime * waitingPrice;
    document.getElementById("bangHoaDon").style.display = 'block';
};
var closeHoaDon = function () {
    document.getElementById("bangHoaDon").style.display = "none";
};
document.getElementById("closeHoaDon1").onclick = closeHoaDon;
document.getElementById("closeHoaDon2").onclick = closeHoaDon;