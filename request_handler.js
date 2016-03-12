
exports.getArray = function(req, res) {
  var arr = [];
  for(var i = 0; i < 100; i++) {
    arr.push([]);
    for(var j = 0; j < 100; j++) {
      arr[i].push(Math.random() * 100)
    }
  }
  res.status(200).send(arr);  
};
