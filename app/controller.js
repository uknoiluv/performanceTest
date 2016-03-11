(function() {

  angular.module('test', [])	
    .controller('testController', function(myService){
      // do stuff with scope
      var testScope = this;
      testScope.data = [];
      testScope.createNestedArray = function() {
        for(var i = 0; i < 10; i++) {
          testScope.data.push([]);
          for(var j = 0; j < 10; j++) {
            testScope.data[i].push(10 * i + j)
          }
        }
      };

      myService.getArray(function(data) {
      	console.log('data', data);
      	testScope.array = data;
      });
    }
  );	

})();