const teclado = require('readline').createInterface({ //constante para definir o processo do programa entender o teclado
    input: process.stdin,
    output: process.stdout
});

const numeroGerado = Math.floor(Math.random()* 301); // constante para gerar um numero aleatório inteiro de 0 a 300
const historico = []; //constante em um array para salvar as jogadas
let rodadas = 0; //let para salvar quantas rodadas foram

console.log("Tente adivinhar o número, de 0 a 300!!") 

function jogar(){ //função para definir o funcionamento do jogo
    teclado.question('\nDigite um número!: ', (Entrada) => { //salvar escrita do teclado no "Entrada"
        const jogada = parseInt(Entrada); //constante para jogada

        if (isNaN/(jogada) || jogada < 0 || jogada > 300){ // faz a verificação se o que foi digitado é um número, e se entra na possibilidade do 0 ao 300
            console.log("Por favor, digite um número de 0 a 300!") //avisa ao jogador para digitar um néro de 0 a 300
            return jogar();
        }

        if (historico.includes(jogada)){
            console.log(`você já tentou o número ${jogada}! Tente outro número!`); //bloco que avisa que o número digitado já foi usado
            return jogar();
        }

        historico.push(jogada); //função que salva no "jogada" o número que foi digitado para verificar no futuro
        rodadas++; //adiciona o número de jogadas

        if (jogada === numeroGerado){ //primeira verificação: se o número digitado está correto
            console.log(`PARABÉNS VOCÊ ACERTOU EM ${rodadas} TENTATIVAS!!!`) //aviso que acertou
            console.log(`O número gerado pelo sistema era ${numeroGerado}!!`); //mostra ao jogador qual número o sistema tinha gerado
            teclado.close(); //termina função do teclado no jogo
            return;
        } else if (jogada < numeroGerado){ //caso não tenha acertado, verifica número digitado com o número gerado
            console.log("O número gerado pelo sistema é MAIOR!!"); //caso o numero digitado seja menor que o gerado, o sistema avisa que é maior o número
        } else {
            console.log("O número gerado pelo sistema é MENOR!!"); //caso o número digitado seja maior que o gerado, o sistema avisa que é menos o número
        }

        console.log(`Histórico de jogadas: [${historico.join(', ')}]`); //exibe ao jogador, após acertar o número, a quantidade de jogadas que foi necessária

        jogar();
    });
}
jogar(); // função que começa o jogo