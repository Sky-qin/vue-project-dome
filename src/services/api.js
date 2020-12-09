import request from "qaxios";

const API = {
  /**
   * 获取列表
   */
  getList(params) {
    return request({
      url: "http://rap2api.taobao.org/app/mock/272765/common/project/list",
      method: "get",
      params,
    });
  },
};

export default API;
