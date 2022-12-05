import mocks from "mockjs";

export default {
  "GET /classes/test": {
    name: "张三丰",
    score: 100,
  },
  "GET /classes/stu": mocks.mock({
    code: 200,
    msg: "学员列表加载成功",
    "data|100": [
      {
        "objectId|+1": 1,
        name: "@cname",
        score: "@integer(1, 100)",
        city: "@city",
        time: "@datetime",
      },
    ],
  }),
};
