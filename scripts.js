const Modal = {
    //Desafio: Esse método pode ser substituido por uma função toggele
    open() {
      document.querySelector(".modal-overlay")
      .classList
      .add("active");
    },
    close() {
      document.querySelector(".modal-overlay")
      .classList
      .remove("active");
    },
  };
  
const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    }
  ]

    /* Organizando a linha de raciocínio:
        1 - Preciso somar as entradas
        2 - Em seguida, somar as saídas e,
        3 - Remover das entradas o valor das saídas
        4 - Para enfinr obter o total

    */
const Transaction = {
      incomes() {
        // somar as entradas
      },
      expenses() {
          // somar as saídas
      },
      total() {
          // entradas - saídas
      }

  }

  /* Organizando a linha de raciocínio:
    Substituir os dados do HTML com os dados do JS
  */

const DOM = {
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction()
    },

    innerHTMLTransaction() {

        const html = `
        <td class="description">Luz</td>
        <td class="expense">- R$ 500,00</td>
        <td class="date">23/01/2021</td>
        <td>
          <img src="./assets/minus.svg" 
          alt="Remover Transação" />
        </td>
        `
        return html
    }
}

// 46min