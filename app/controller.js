(function() {

  angular.module('test', [])	
    .controller('testController', function(myService){
      // do stuff with scope
      var testScope = this;
      testScope.dataForAngular = [];
      testScope.dataForReact = [];
      testScope.createNestedArray = function(name) {
        if(name === 'Angular' || name === undefined) {
          testScope.dataForAngular = [];
          for(var i = 0; i < 10; i++) {
            testScope.dataForAngular.push([]);
            for(var j = 0; j < 10; j++) {
              testScope.dataForAngular[i].push(Math.random() * 100)
            }
          }
        } else if(name === 'React') {
          testScope.dataForReact = [];
          for(var i = 0; i < 10; i++) {
            testScope.dataForReact.push([]);
            for(var j = 0; j < 10; j++) {
              testScope.dataForReact[i].push(Math.random() * 100)
            }
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