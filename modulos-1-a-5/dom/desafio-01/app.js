new Vue({
  el: "#desafio",
  data: {
    nome: "Jaicke",
    idade: "22",
    imagemGoogle: "https://miro.medium.com/max/400/1*wqYF-8Dmh7LhtLkKfERc3Q.png"
  },
  methods:{
    gerarNumero(){
      return Math.random()
    }
  }
})
