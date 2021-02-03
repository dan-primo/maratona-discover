const Modal = {
  //Desafio: Esse método pode ser substituido por uma função toggele
  open() {
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "23/01/2021",
  },
  {
    id: 2,
    description: "Website",
    amount: 500000,
    date: "23/01/2021",
  },
  {
    id: 3,
    description: "Internet",
    amount: -20000,
    date: "23/01/2021",
  },
];

/* Organizando a linha de raciocínio:
        1 - Preciso somar as entradas
        2 - Em seguida, somar as saídas e,
        3 - Remover das entradas o valor das saídas
        4 - Para enfinr obter o total

    */
const Transaction = {
  incomes() {
    let income = 0;
    // somar as entradas
    // pegar todas as transações
    // se for maior que zero
    // somar a uma variavel e retornar a variavel
    return income;
  },
  //break 1:20h
  expenses() {
    // somar as saídas
  },
  total() {
    // entradas - saídas
  },
};

/* Organizando a linha de raciocínio:
    Substituir os dados do HTML com os dados do JS
  */

const DOM = {
  transactionsContainer: document.querySelector("#data-table tbody"),
  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);

    DOM.transactionsContainer.appendChild(tr);
  },

  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense";

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
          <img src="./assets/minus.svg" 
          alt="Remover Transação" />
        </td>
        `;
    return html;
  },

  updateBalance() {
    document.getElementById("incomeDisplay").innerHTML = Transaction.incomes();
    document.getElementById(
      "expenseDisplay"
    ).innerHTML = Transaction.expenses();
    document.getElementById("totalDisplay").innerHTML = Transaction.total();
  },
};

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";
    // ternario de verdadeiro ou falso

    value = String(value).replace(/\D/g, "");
    //regex - expressão regular

    value = Number(value) / 100;

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return signal + value;
  },
};

transactions.forEach(function (transaction) {
  DOM.addTransaction(transaction);
});

DOM.updateBalance();
