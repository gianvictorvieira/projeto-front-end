var logado = false;
var mostraFormProduto = false;





if (localStorage.getItem("acesso") == "true") {
    logado = true;
    console.log("entrou")
}

if (logado != true) {
    alert("você não esta autenticado!");
    window.location.href = "login.html"
}
function controleFormProduto() {
    mostraFormProduto = !mostraFormProduto

    var form = document.getElementById("formProduto");
    if (mostraFormProduto) {
        form.style.display = "block";
    }
    else {
        form.style.display = "none"
    }

}
function cadastroProduto() {
    var produtoDescricao = document.getElementById("produtoDescricao");
    var produtoQuantidade = document.getElementById("produtoQuantidade");

    var dados = JSON.parse(localStorage.getItem("dadosProduto"))

    if (dados == null) {
        localStorage.setItem("dadosProduto", "[]");
        dados = [];
    }
    var auxRegistro = {
        codigo: produtoCodigo.value,
        nome: produtoNome.value,
        descricao: produtoDescricao.value ,
        quantidade: produtoQuantidade.value,

    }
    dados.push(auxRegistro);
    localStorage    .setItem("dadosProduto",JSON.stringify(dados))
;}