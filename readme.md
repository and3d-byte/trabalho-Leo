# Calculadora Simples

Esta é uma calculadora simples desenvolvida com Vue.js para realizar operações básicas de matemática.

## Funcionalidades

- A calculadora pode realizar as operações de adição, subtração, multiplicação e divisão.
- Ela suporta números decimais.
- O botão "AC" limpa a calculadora.
- O botão "=" realiza a operação atualmente configurada.

## Estrutura do Código

O código JavaScript (`index.js`) consiste em uma aplicação Vue.js que cria uma calculadora com métodos para lidar com os botões pressionados pelo usuário.

- `data`: Contém os dados principais da calculadora, como o número atual, o número anterior, o operador atual e se estamos esperando uma nova operação.
- `methods`: Define os métodos para lidar com as ações do usuário, como pressionar números, operadores, limpar a calculadora e calcular o resultado.
- A função `lidarOperador` é responsável por lidar com a seleção de um operador, garantindo que a operação anterior seja concluída, se necessário.
- A função `lidarIgual` realiza a operação aritmética com base no operador selecionado.
- A função `lidarClear` reinicia a calculadora para seu estado inicial.

## Como Usar

Para usar a calculadora, basta abrir o arquivo HTML (`index.html`) em um navegador da web. Em seguida, você pode clicar nos botões numéricos e de operação para realizar as operações desejadas.

