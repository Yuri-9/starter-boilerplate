import React, { useEffect, useState } from "react";
import { Card, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsersLoadingAction } from "redux/actions";

import ClientEdit from "./EditClient";
import AvatarStatus from "components/shared-components/AvatarStatus";
import Loading from "components/shared-components/Loading";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersLoadingAction());
  }, [dispatch]);

  const [selectedUser, setSelectedUser] = useState({});
  const [userProfileVisible, setUserProfileVisible] = useState(false);

  const showUserProfile = (userInfo) => {
    setUserProfileVisible(true);
    setSelectedUser(userInfo);
  };

  const closeUserProfile = () => {
    setUserProfileVisible(false);
    setSelectedUser({});
  };

  const tableColumns = [
    {
      title: "User",
      dataIndex: "name",
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus src={record.img} name={record.name} subTitle={record.email} />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: "Username",
      dataIndex: "username",
      sorter: {
        compare: (a, b) => {
          a = a.username.toLowerCase();
          b = b.username.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: "Id",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      sorter: {
        compare: (a, b) => {
          a = a.phone.toLowerCase();
          b = b.phone.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
  ];

  console.log();
  if (loading) return <Loading cover="content" />;

  return (
    <Card bodyStyle={{ padding: "0px" }}>
      <Table
        rowClassName="cursor-pointer"
        columns={tableColumns}
        dataSource={users}
        rowKey="id"
        onRow={(user) => {
          return {
            onClick: () => {
              showUserProfile(user);
            },
          };
        }}
      />
      (
      <ClientEdit
        user={selectedUser}
        visible={userProfileVisible}
        onClose={() => {
          closeUserProfile();
        }}
      />
      )
    </Card>
  );
};

export default UserList;
