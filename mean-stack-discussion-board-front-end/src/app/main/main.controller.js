export class MainController {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
    // make sure we call get messages
    this.getMessages();
  }
  getMessages(){
    // vm for view model
    var vm = this;
   // $http.get resturns a promise which is like a callback so we'll use .then and pass in the result which we'll print to the console
   this.$http.get('http://localhost:5000/api/message').then(function(result){
      // we use result.data becuase the messages array is contained in the data object, which we saw when we printed the results to console
      vm.messages = result.data;
   });
  }
  postMessage(){
   // use the angular http service to post data to the following url
   this.$http.post('http://localhost:5000/api/message', {"msg":this.message})
  }

}
