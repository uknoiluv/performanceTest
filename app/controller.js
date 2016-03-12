(function() {

  angular.module('test', [])	
    .controller('testController', function(myService){
      // do stuff with scope
      var testScope = this;
      testScope.dataForAngular = [];
      testScope.dataForReact = [];
      testScope.createNestedArray = function() {
        myService.getArray(function(data) {        
          testScope.dataForAngular = data;
        });
      };
    }
  );	

})();