new Vue ({
  el: '#desafio',
  data: {
    nome: 'fulano',
    idade: '20',
    imagem: 'https://static8.depositphotos.com/1003924/886/i/450/depositphotos_8868243-stock-photo-spectrum-multicolored-eye-macro.jpg' 
  },
  methods: {
    random() {
      return Math.random()
    }
  }
})