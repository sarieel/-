var util = require("../../utils/util");

Page({
  data: {
    hot: [],
    content: [],
  },
  onLoad: function () {
    console.log("onload");
    this.refresh();
  },
  // 请求数据
  refresh: function () {
    console.log("refresh");
    this.setData({
      hot: util.getHot().data,
      content: util.getDiscovery().data,
    });
  },
  // 跳转至回答页面
  goQuestion: function (e) {
    wx.navigateTo({
      url: "../questions/index?id=" + e.currentTarget.dataset.idd,
    });
  },
});
