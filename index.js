const { createApp } = Vue;

createApp({
    data() {
        return {
            display: '0',
            numeroAtual: null,
            numeroAnterior: null,
            operador: null,
            aguardandoOperacao: false
        };
    },
    methods: {
        lidarBotao(botao) {
            if (botao === 'AC') {
                this.lidarClear();
            } else if (botao === '=') {
                this.lidarIgual();
            } else if (['+', '-', '*', '/'].includes(botao)) {
                this.lidarOperador(botao);
            } else {
                this.lidarNumero(botao);
            }
        },
        lidarOperador(botao) {
            if (this.operador !== null && !this.aguardandoOperacao) {
                this.lidarIgual();
            }
            this.operador = botao;
            this.aguardandoOperacao = true;
            this.display = this.numeroAnterior !== null ? this.numeroAnterior + ' ' + this.operador : '0';
        },
        lidarNumero(numero) {
            if (this.aguardandoOperacao) {
                this.display = numero;
                this.aguardandoOperacao = false;
            } else {
                this.display = this.display === '0' ? numero : this.display + numero;
            }
        },
        lidarIgual() {
            if (this.operador && !this.aguardandoOperacao) {
                const operacao = this.numeroAnterior + ' ' + this.operador + ' ' + parseFloat(this.display);
                this.display = eval(operacao);
                this.operador = null;
                this.numeroAnterior = null;
                this.aguardandoOperacao = true;
            }
        },
        lidarClear() {
            this.display = '0';
            this.numeroAtual = null;
            this.numeroAnterior = null;
            this.operador = null;
            this.aguardandoOperacao = false;
        }
    }
}).mount("#app");
