(function() {
  
  angular.module('benchmark')
    .factory('myService', function($http) {
    	return  {
    		getArray: function(callback) {
    			return $http.get('/array').then(function(response){
    				callback(response.data);
    			});
    		}
    	}
    });

})();