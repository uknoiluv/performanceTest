angular.module('benchmark', [])
  .controller('testController', function(){
      // do stuff with scope
      var testScope = this;
      testScope.hello = 'hello world';
    }
  );