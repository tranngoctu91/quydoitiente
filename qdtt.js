function convert() {
    let money1 = document.getElementById("money1").value;
    let money2 = document.getElementById("money2").value;
    let sotien = document.getElementById("sotien").value;
    let ketqua = sotien * (money2/money1);
    document.getElementById("result").innerHTML = ketqua;
}
