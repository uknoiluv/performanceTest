(function() {


  var Table = React.createFactory(React.createClass({
    
    getInitialState: function() {
      return {
        data: [[]]
      }
    },

    getData: function() {
      var that = this;
      this.props.httpService.get('/array').then(function(response){
        that.setState({data: response.data});
      });
    },

    render: function() {
      var rows = this.state.data.map(function(row, i) {
        var newRow = row.map(function(value, j) {
          return React.createElement('td', {key: 'cell-' + i+j}, value);
        });
        return React.createElement('tr', {key: 'row-' + i}, newRow);
      });
      var tableBody = React.createElement('tbody', {key: 'tablebody'}, rows);
      var table = React.createElement('table', {key: 'table'}, tableBody);
      var button = React.createElement('button', {key: 'button', onClick: this.getData}, 'click to load data or refresh');;
      var container = [button, table]
      return React.createElement('div', {key: 'container'}, container);
    }

  }));

  var reactElement = function($http) {
    return {
      restrict: 'E',
      template: '<div><div>',
      scope: {
        data: '='
      },
      link: function(scope, element, attrs) {  
        var httpService = $http;  
        ReactDOM.render(Table({httpService: httpService}), element[0]);
      }
    }
  };

  angular.module('benchmark')
    .directive('reactElement', reactElement);

})();