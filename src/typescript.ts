// Tipos Primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";

// Arrays
const lista: number[] = [];
lista.push(13, 22.5, 12, 89, 1.58);

// Tipos Personalizados (Type Alias)
type Transacao = {
  tipoTransacao: tipoTransacao;
  data: Date;
  valor: number;
};

// Enum
enum tipoTransacao {
  DEPOSITO = "Depósito",
  TRANSFERENCIA = "Transferência",
  PAGAMENTO_BOLETO = "Pagamento de Boleto",
}

const novaTransacao: Transacao = {
  tipoTransacao: tipoTransacao.PAGAMENTO_BOLETO,
  data: new Date(),
  valor: 0,
};
