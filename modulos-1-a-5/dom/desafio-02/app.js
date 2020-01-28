new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert()
        },
        armazenarValor(event){
            this.valor = event.target.value;
        }
    }
})
