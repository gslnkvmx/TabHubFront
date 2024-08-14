import React from "react";
import { Button, Dropdown } from "antd";

function TabItem({ url, description, createdAt }) {
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const items = [
    {
      label: "Delete",
      key: "1",
      danger: true,
    },
    {
      label: "Edit",
      key: "2",
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const getDomain = (url) => {
    let domain = new URL(url);
    domain = domain.hostname.replace("www.", "");

    return domain;
  };

  const getDate = (str) => {
    const [date, time] = str.split("T");
    let formatedDate = date.replace(/-/g, ".");

    return formatedDate;
  };

  return (
    <div className="p-3 mr-7 border border-gray-300 bg-white/75 rounded-lg flex flex-col w-128 md:w-96 flex-none">
      <div className="flex flex-row justify-between">
        <div className="p-2 lg:w-64 w-32">
          <a href={url}>
            <p className="text-lg font-bold truncate text-gray-800">{url}</p>
          </a>
          <p className="text-lg truncate text-gray-400">{description}</p>
        </div>
        <img
          className="size-12 m-2 mr-4"
          src={
            "https://advanced-magenta-cow.faviconkit.com/" +
            getDomain(url) +
            "/256"
          }
        ></img>
      </div>

      <div className="p-2 mt-4 flex flex-row items-center justify-between">
        <p className="text-lg text-gray-400">{getDate(createdAt)}</p>
        <Dropdown menu={menuProps} placement="topRight">
          <Button type="text">•••</Button>
        </Dropdown>
      </div>
    </div>
  );
}

export default TabItem;
