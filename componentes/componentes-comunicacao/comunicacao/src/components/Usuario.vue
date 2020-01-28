<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>O nome é <strong>{{ nome }}</strong></p>
        <p>A idade é <strong>{{ idade }}</strong></p>
        <button @click="alterarNome">Alterar nome</button>
        <hr>
        <div class="componentes">
            <!-- Ouvindo evento disparado pelo componente filho, o $event contém o valor passado como parâmetro na emissão do evento -->
            <!-- Passando como prop a função de reiniciar o nome -->
            <app-usuario-info 
                :nome="nome"
                :idade="idade"
                @nomeMudou="nome = $event" 
                :reiniciarNome="reiniciarNome" />

            <!-- Passando valores para componentes irmãos, o evento é disparado por um componente filho e -->
            <!-- como está sendo usado o binding, ao atualizar o valor do pai, é propagado para os filhos -->
            <app-usuario-editar
                :idade="idade" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return{
            nome: 'Pedro',
            idade: 21
        }
    },
    methods: {
        alterarNome(){
            this.nome = 'Ana'
        },
        reiniciarNome(){
            this.nome = 'Pedro'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
