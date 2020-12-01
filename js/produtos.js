class produtos {
    
    lista(){
        const listagem = this.produtos.map((produto) => (
            `<tr>
                <td>${produto.produtoCodigo}</td>    
                <td>${produto.produtoNome}</td>
                <td>${produto.produtoDescricao}</td>
                <td>${produto.produtoQuantidade}</td>  
                </td>
                <td>
                    <button id='apagar' onClick='cliente.apaga(${produto.produtoCodigo})'>
                    🗑️Apagar</button>
                    <button id='editar' onClick='cliente.edita(${JSON.stringify(produto)})'>✏️Editar </button>
                 </td>
             </tr>
            `
        ))
        return (`<table border='1' class='paleBlueRows'>
        <caption>Relação de Clientes</caption>
        <thead>
            <th>Código</th>      
            <th>Nome</th>
            <th>Descrição</th>      
            <th>Quantidade</th>

        </thead>
        <tbody>${listagem}</tbody>
        </table>    
        `)
    }
    atualiza(){
        document.getElementById('listagem').innerHTML = produto.lista()
    }
}


