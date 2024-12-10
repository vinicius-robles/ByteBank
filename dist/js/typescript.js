// Tipos Primitivos
let valor = 3000;
let nome = "";
let isPago = false;
let qualquer = "";
// Arrays
const lista = [];
lista.push(13, 22.5, 12, 89, 1.58);
// Enum
var tipoTransacao;
(function (tipoTransacao) {
    tipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    tipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    tipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(tipoTransacao || (tipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: tipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0,
};
