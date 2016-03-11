(function() {


  var Table = React.createFactory(React.createClass({
    render: function() {
      var data = this.props.data;
      var rows = data.map(function(row, i) {
        var newRow = row.map(function(value, j) {
          return React.createElement('td', {key: 'cell-' + i+j}, value);
        });
        return React.createElement('tr', {key: 'row-' + i}, newRow);
      });
      var tableBody = React.createElement('tbody', {key: 'tablebody'}, rows);
      return React.createElement('table', {key: 'table'}, tableBody);
    }

  }));

  var reactElement = function() {
    return {
      restrict: 'E',
      template: '<div><div>',
      scope: {
        data: '='
      },
      link: function(scope, element, attrs) {
        var newData = [[]];
        scope.$watch('data', function(newValue, oldValue) {
          newData = newValue; 
          ReactDOM.render(Table({data: newData}), element[0]);
        }, true);
        // var newValue = [[1,2,3],[4,5,6]];
      }
    }
  };

  angular.module('benchmark')
    .directive('reactElement', reactElement);

})();