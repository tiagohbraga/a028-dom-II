function adicionaItem(event){
    const novoElemento = document.getElementById("container")
    console.log(novoElemento)

    novoElemento.innerHTML += '<article class="item" onclick="removeItem(event)"></article>'    
}

function removeItem(event){
    let removendoItens = document.querySelector(".item")

    removendoItens.removeAttribute(".item")
    
}