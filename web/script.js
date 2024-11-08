const uri = "http://localhost:3000/";
const prods = document.querySelector(".conteiner");

//listar todos os produtos
function listarProdutos() {
    fetch(uri + "produtos")
        .then((response) => response.json())
        .then((data) => {
            let output = "";
            data.forEach(function (produto) {
                output += `
                <div class="card" style="width: 18rem;">
                    <h5 class="card-title  text-center">${produto.nome}</h5>
                    <img src="../mediafiles/${produto.imagem}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text text-center">${produto.descricao}</p>
                        <p class="card-text text-center">R$ ${produto.preco}</p>
                    </div>
                    <button class="btn btn-primary" onclick="comprar(${produto.id})">Comprar</button>
                </div>
                `;
            });
            prods.innerHTML += output;
        });
}

function comprar(id) {
    alert(`Produto ${id} comprado com sucesso!`);
}