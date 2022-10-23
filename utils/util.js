var discovery = require("../data/data_discovery");
var hot = require("../data/data_hot");

function getDiscovery() {
  return discovery.discovery;
}
function getHot() {
  return hot.hot;
}

module.exports.getDiscovery = getDiscovery;
module.exports.getHot = getHot;
