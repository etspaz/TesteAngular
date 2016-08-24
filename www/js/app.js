// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//app receberá o módulo angular
var app = angular.module('starter', ['ionic']);

//inicializa o modulo angular
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

//o modulo angular permite criar o padrão MVC
//model ; view e controler
//aqui será criado um controler
app.controller('mainController', function($scope){

/*
//o parametro $scope será fará a comunicação entre a view e controllere
//td que for alterado aqui, será refletido na index, que está associada
//a esse modulo angular
$scope.mensagem = 'bla bla bla';

//cria um array simples
$scope.lista =['A','B','C','D','E'];


//cria uma função que altera o conteudo da mensagem inicializa
$scope.newMessage = function(newMSG){

  $scope.mensagem = newMSG;

}
*/
  
//instancia um objeto TaskModel
var tasks = new GettaskModel();

//passa a lista do taskmodel para uma propriedade de lista criada no controller
  $scope.lista  = tasks.items;
  
  //essa propriewdade será alterada quando o checkbox for marcado na view
  $scope.ShowMarked = false;

  //cria uma função que recebe o objeto item como parametro
  //e inverte a propriedade Finalizada -- se true vira false e vice versa
  $scope.onMarkTask = function(item){

    //retorna o valor para debugar no browser pela ferramenta de desenvolvedor
    //console.log("passei");

    //inverte a propriedade Finalizada -- se true vira false e vice versa
    item.Finalizada = !item.Finalizada;

  }

  //metodo que permitirá esconder ou exibir os itens finalizados
  //se o item estiver marcado como finalizado e o check(exibir) estiver false irá esconder 
  //todos os itens marcados como finalizados 
  $scope.OnHideitem = function(item){
    return item.Finalizada && !$scope.ShowMarked;
  }

  //função que recebe como parametro o item da view
  //e chama a função removeitem do model, passando esse item tb como parametro
  //obs.: a view só se comunica com o controller, que se comunica tb com model (MVC)
  
};
