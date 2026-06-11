# 🎯 Number Guesser

Um jogo de adivinhação de número inteiro no terminal, onde o algoritmo sorteia um valor entre **0 e 300** e você tenta descobrir qual é — com dicas a cada tentativa.

---

## 📌 Sobre o projeto

Este projeto é um exercício clássico de lógica e estruturas de controle. O algoritmo gera um número aleatório inteiro no intervalo `[0, 300]` e o jogador tenta adivinhar em quantas rodadas conseguir. A cada tentativa, o jogo informa se o número correto é maior ou menor que o chute, registra todos os valores já digitados e alerta caso o jogador repita uma tentativa.

---

## 🎮 Como funciona

1. O programa sorteia um número inteiro aleatório entre **0** e **300** (inclusive).
2. O jogador digita um chute a cada rodada.
3. O jogo responde com uma das seguintes situações:
   - ✅ **Acertou!** — exibe o número de tentativas usadas
   - 🔼 **Maior** — o número correto é maior que o chute
   - 🔽 **Menor** — o número correto é menor que o chute
   - 🔁 **Repetido** — esse número já foi digitado antes (a tentativa não conta)
4. O histórico de todos os chutes válidos é exibido a cada rodada.

---

## 🧠 Conceitos praticados

- Geração de números aleatórios
- Estruturas de repetição (`while` / `loop`)
- Estruturas condicionais (`if / else`)
- Armazenamento e consulta de histórico (listas / arrays / sets)
- Entrada e validação de dados do usuário
- Contagem de tentativas

---

## 🗂️ Estrutura esperada do algoritmo

```
início
  sortear número aleatório entre 0 e 300
  inicializar lista de tentativas
  inicializar contador de rodadas

  enquanto não acertar:
    ler entrada do jogador
    
    se entrada já foi digitada:
      avisar repetição e continuar sem contar
    
    adicionar entrada ao histórico
    incrementar contador
    
    se entrada == número sorteado:
      exibir parabéns e número de tentativas
      encerrar
    senão se entrada < número sorteado:
      exibir "maior"
    senão:
      exibir "menor"
    
    exibir histórico de tentativas
fim
```

---

## 💡 Regras do jogo

| Situação | Comportamento |
|---|---|
| Chute correto | Jogo encerra, exibe tentativas |
| Chute menor que o número | Avisa que o número é **maior** |
| Chute maior que o número | Avisa que o número é **menor** |
| Chute repetido | Avisa e **não conta** como tentativa |

---

## 🚀 Como executar

> As instruções variam conforme a linguagem escolhida para implementar o projeto.

**Exemplo genérico:**

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/number-guesser.git

# Acesse a pasta
cd number-guesser

# Execute o arquivo principal
# (substitua pelo comando da sua linguagem)
```

---

## 📋 Exemplo de execução

```
🎯 Número sorteado entre 0 e 300. Boa sorte!

Rodada 1 — Digite seu chute: 150
🔼 O número é maior que 150.
Tentativas: [150]

Rodada 2 — Digite seu chute: 150
🔁 Você já tentou 150! Escolha outro número.
Tentativas: [150]

Rodada 3 — Digite seu chute: 220
🔽 O número é menor que 220.
Tentativas: [150, 220]

Rodada 4 — Digite seu chute: 185
✅ Parabéns! O número era 185. Você acertou em 3 tentativa(s)!
```

## 👤 Autor

Feito por **[Vinicius]** — [github.com/seu-usuario](https://github.com/seu-usuario)
