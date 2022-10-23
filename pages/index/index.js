var util = require("../../utils/util");

Page({
  data: {
    hot: [],
    content: [],
    isLoading: "false",
  },
  onLoad: function () {
    console.log("onload");
    this.setData({
      hot: util.getHot().data,
      content: util.getDiscovery().data,
    });
  },
  // 跳转至回答页面
  goQuestion: function (e) {
    var idd = e.currentTarget.dataset.idd;
    if (idd > 5) {
      idd = idd % 5;
    }
    wx.navigateTo({
      url: "../questions/index?id=" + idd,
    });
  },
  // 监听下拉事件
  onPullDownRefresh: function () {
    console.log("pulldown");
    // 显示加载框
    wx.showLoading({
      title: "正在加载中...",
    });
    setTimeout(() => {
      wx.hideLoading();
    }, 2000);
  },
  // 监听上拉触底
  onReachBottom: function () {
    console.log("reachbottom");
    if (this.data.isLoading == "true") return;
    this.data.isLoading = "true";
    wx.showLoading({
      title: "正在加载新内容...",
    });
    this.setData({
      content: this.data.content.concat(util.getDiscovery().data),
    });
    setTimeout(() => {
      wx.hideLoading();
    }, 1000);
    setTimeout(() => {
      this.data.isLoading = "false";
    }, 5000);
  },
});
