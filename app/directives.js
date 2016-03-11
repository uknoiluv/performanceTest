(function() {

  var reactElement = function() {
    return {
      restrict: 'E',
      template: '<div><div>',
      link: function(scope, element, attrs) {
        
        ReactDOM.render(React.createElement('h1', null, 'Hello, world!'), element[0]

        );
      }
    }
  };

  angular.module('benchmark')
    .directive('reactElement', reactElement);

})();