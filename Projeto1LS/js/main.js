import dataset from './model/dataset.js';

for(const card of dataset){
  const cardDeck = document.querySelector('.template-c');
  const cartao = createCardView(card);
  cardDeck.insertAdjacentHTML('beforeend', cartao);
}

function createCardView(card){
  return `
    <div class="col">
      <div class="card">
        <img src="fifa-coins.jpg"  alt="fifa-coins" class="w-50">
        <div class="card-body">
          <h5 class="card-title">${ card.coins }</h5>
          <p class="card-text">${ card.valor }</p>
          <a href="" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>
  `;
}

function addCard(name, value){
  if(name === '' || value == ''){
    alert('Dados em branco.');
  }
  else {
    document.querySelector('.template-c').innerHTML = '';
    dataset.push({ coins: name, valor: value });
    alert('Dados inseridos.');

    dataset.map((value) => {
      const cardDeck = document.querySelector('.template-c');
      const cartao = createCardView(value);
      return cardDeck.insertAdjacentHTML('beforeend', cartao);
    });

    // Instruções para limpar o formulário e fechar o modal
    document.getElementById('coin-name').value = '';
    document.getElementById('coin-value').value = '';
    document.getElementById('close-modal').click();
  }
}

const btnSave = document.getElementById('btn-save');

btnSave.addEventListener('click', () => {
  addCard(
    document.getElementById('coin-name').value,
    document.getElementById('coin-value').value
  )
});

