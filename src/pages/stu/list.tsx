import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { getStuApi } from "@/api/stu";

interface DataType {
  key: string;
  name: string;
  score: number;
  city: string;
  time: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "分数",
    dataIndex: "score",
    key: "score",
  },
  {
    title: "城市",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "生日",
    key: "time",
    dataIndex: "time",
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button type={"primary"}>修改</Button>
        <Button type={"primary"} danger>
          删除
        </Button>
      </Space>
    ),
  },
];

const StuList = () => {
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    getStuApi().then((res) => {
      if (res.code === 200) {
        setData(res.data);
      }
    });
  }, []);
  return <Table rowKey={"objectId"} columns={columns} dataSource={data} />;
};

export default StuList;
