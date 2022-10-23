var util = require("../../utils/util");

Page({
  data: {
    id: "",
    content: [],
  },
  onLoad: function (options) {
    this.setData({
      id: options.id,
    });
    this.refresh();
  },
  refresh: function () {
    this.setData({
      content: util.getDiscovery().data,
    });
  },
});
