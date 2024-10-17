// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(nomeProduto, precoProduto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produto = { nome: nomeProduto, preco: precoProduto, quantidade: 1 };

    const produtoExistente = carrinho.find(item => item.nome === nomeProduto);
    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        carrinho.push(produto);
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${nomeProduto} foi adicionado ao carrinho!`);
}

// Exemplo de uso no botão do produto
document.querySelector('button').addEventListener('click', function () {
    adicionarAoCarrinho('Produto 1', 100.00);
});
// Função para exibir os itens do carrinho
function exibirCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoContainer = document.querySelector('.itens-carrinho');

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    carrinho.forEach(item => {
        const itemHTML = `
            <div class="item">
                <h3>${item.nome}</h3>
                <p>Quantidade: ${item.quantidade}</p>
                <p>Preço: R$ ${(item.preco * item.quantidade).toFixed(2)}</p>
            </div>
        `;
        carrinhoContainer.innerHTML += itemHTML;
    });

    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    document.querySelector('.total h2').textContent = `Total: R$ ${total.toFixed(2)}`;
}

window.onload = exibirCarrinho;
// Função para simular login
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === 'usuario@exemplo.com' && senha === '123456') {
        localStorage.setItem('usuarioLogado', email);
        alert('Login bem-sucedido!');
        window.location.href = 'index.html'; // Redireciona para a home após login
    } else {
        alert('E-mail ou senha incorretos.');
    }
});
// Função para adicionar ao carrinho e redirecionar para a página de carrinho
function adicionarEIrParaCarrinho(nomeProduto, precoProduto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produto = { nome: nomeProduto, preco: precoProduto, quantidade: 1 };

    const produtoExistente = carrinho.find(item => item.nome === nomeProduto);
    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        carrinho.push(produto);
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Redirecionar para a página de carrinho após adicionar o produto
    window.location.href = 'carrinho.html';
}
// Função para exibir os itens do carrinho
function exibirCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoContainer = document.querySelector('.itens-carrinho');

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    carrinho.forEach(item => {
        const itemHTML = `
            <div class="item">
                <h3>${item.nome}</h3>
                <p>Quantidade: ${item.quantidade}</p>
                <p>Preço: R$ ${(item.preco * item.quantidade).toFixed(2)}</p>
            </div>
        `;
        carrinhoContainer.innerHTML += itemHTML;
    });

    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    document.querySelector('.total h2').textContent = `Total: R$ ${total.toFixed(2)}`;
}

window.onload = exibirCarrinho;
