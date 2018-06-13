var currencyRates = require('../currencyRates.js');

// currencyRates.getAllCurrencies(function(data){
//   console.log(JSON.stringify(data));
// });

// currencyRates.getBaseCurrency(function(data){
//   console.log(JSON.stringify(data));
// });

// var settings = {};
// settings.fromCurrency = "GBP";
// settings.toCurrency = "USD";
// settings.amount = 90;
// settings.accuracy = 5;
//
// currencyRates.convert(settings , function(data){
//   console.log(JSON.stringify(data));
// });

// var settings = {};
// settings.fromCurrency = "GBP";
// settings.toCurrency = "USD";
// settings.accuracy = 5;
//
// currencyRates.getExchangeRate(settings , function(data){
//   console.log(JSON.stringify(data));
// });

// currencyRates.getCurrenciesMetadata(function(data){
//   console.log(JSON.stringify(data));
// });

// var settings = {};
// settings.currency = "EUR";
// currencyRates.getCurrencyMetadata(settings, function(data){
//   console.log(JSON.stringify(data));
// });



currencyRates.getAll("USD",function(data){
  console.log(JSON.stringify(data));
});

