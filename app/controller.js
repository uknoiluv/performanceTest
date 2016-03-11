(function() {

  angular.module('test', [])	
    .controller('testController', function(myService){
      // do stuff with scope
      var testScope = this;
      testScope.hello = 'hello world';
      myService.getArray(function(data) {
      	console.log('data', data);
      	testScope.array = data;
      });
    }
  );	

})();