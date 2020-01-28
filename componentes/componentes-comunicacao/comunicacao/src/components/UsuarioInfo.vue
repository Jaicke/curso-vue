<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome: <strong>{{ nome }}</strong></p>
        <p>Idade do usuário <strong>{{ idade }}</strong></p>
        <!-- Reiniciando nome a partir da emissão de um evento personalizado -->
        <button @click="ReinicializarNome">Reinicializar nome</button>
        <!-- Reiniciando o nome a partir de uma função callback passada do componente pai -->
        <button @click="reiniciarNome">Reinicializar nome(CALLBACK)</button>
    </div>
</template>

<script>
import barramento from '@/Barramento'

export default {
    // Validando props
    props: {
        nome: {
            type: String,
            required: true,
            default: 'Anônimo'
        },
        reiniciarNome: Function,
        idade: Number
    },
    methods:{
        ReinicializarNome(){
            this.nome = 'Pedro'
            // Emitindo evento personalizado, segundo parâmetro é o valor que ficará disponível na variável $event
            this.$emit("nomeMudou", this.nome)
        }
    },
    created(){
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
