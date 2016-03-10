(function() {
  
  angular.module('benchmark')
    .factory('myService', function($http) {
    	return  {
    		getArray: function(callback) {
    			$http.get('/array').success(callback);
    		}
    	}
    });

})();