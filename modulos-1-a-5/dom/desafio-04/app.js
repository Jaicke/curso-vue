new Vue({
	el: '#desafio',
	data: {
		classeEfeito: 'destaque',
		aplicarFundo: true,
		aplicarOpacidade: true,
		classeExemplo: '',
		classeExemplo2: '',
		trueOrFalse: 'true',
		paddingTop: 0,
		progressoAtual: '0'

	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classeEfeito = this.classeEfeito == 'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			let progresso = 0
			const temporizador = setInterval(() => {
				progresso += 5
				this.progressoAtual = `${progresso}%`

				if (progresso == 100) clearInterval(temporizador)
			}, 500);
		},
		setTrueOrFalse(event){
			this.trueOrFalse = event.target.value
		}
	}
})
