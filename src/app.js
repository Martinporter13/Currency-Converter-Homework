import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
    currencies: {},
    selectedCurrency: null,
    inputCurrency: null,
    },
    computed: {
      convertedCurrency: function (){
        return (this.inputCurrency * this.selectedCurrency).toFixed(2);
      },
      convertedCurrency2:function (){
        return (this.inputCurrency / this.selectedCurrency).toFixed(2);
      }
    },
    mounted() {
      this.fetchCurrencies();
    },
    methods: {
      fetchCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(data => this.currencies = data.rates)
      }
    }
  });
})
