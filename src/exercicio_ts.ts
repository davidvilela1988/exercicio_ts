function retornaMultiplicacao(a: number, b: number): number {
  return a * b;
}

const multiplicacaoAB = retornaMultiplicacao(70, 7);
console.log("O resultado da multiplicação é:", multiplicacaoAB, ".");

function retornaSaudacao(nome: string): string {
  return "Olá, " + nome + "!";
}

let saudacao = retornaSaudacao("David");
console.log(saudacao);
