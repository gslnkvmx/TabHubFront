import React, { useState } from "react";
import TabItem from "./TabItem";
import { Button, Dropdown, Carousel } from "antd";
import AddTabModal from "./AddTabModal";
import { createTab, fetchTabs } from "../services/Tabs";
import {
  fetchTabCollectionById,
  fetchTabCollections,
} from "../services/TabCollections";

function TabList({ id, title, description, tabs }) {
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const [isOpen, setIsOpen] = useState(true);
  const [tabsList, setTabsList] = useState(tabs);

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const onCreateTab = async (tab) => {
    await createTab(tab);
    let collection = await fetchTabCollectionById(id);

    setTabsList(collection.tabs);
  };

  return (
    <>
      <div
        className="flex flex-auto flex-col p-6 my-4 bg-gray-100 rounded-xl w-full"
        style={{
          height: isOpen ? "286px" : "84px",
          transition: "0.3s ease-out",
        }}
      >
        <div className="flex flex-row justify-between mb-4 px-2">
          <div>
            <p className="text-2xl truncate font-bold text-gray-800">{title}</p>
            <p
              className="text-lg truncate font font-semibold text-gray-500"
              style={{
                color: isOpen
                  ? "rgba(107, 114, 128, 1)"
                  : "rgba(107, 114, 128, 0)",
                transition: "0.2s ease-out",
              }}
            >
              {description}
            </p>
          </div>

          <div className="text-xl text-gray-800">
            <Button
              className="size-10 mr-1 rounded-full text-gray-400"
              type="text"
            >
              <i className="text-lg fa-solid fa-link"></i>
            </Button>
            <Button
              className="size-10 mr-1 rounded-full text-gray-400"
              type="text"
            >
              <i className="text-lg fa-solid fa-trash-can"></i>
            </Button>
            <Button
              className="size-10 mr-1 rounded-full text-gray-400"
              type="text"
            >
              <i className="text-lg fa-solid fa-pencil"></i>
            </Button>
            <Button
              className="ml-5 size-10 rounded-full text-gray-400"
              type="text"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i
                className="text-lg fa-solid fa-angle-up"
                style={{
                  transform: isOpen ? "rotate(0.5turn)" : "none",
                  transition: "transform 0.5s",
                }}
              ></i>
            </Button>
          </div>
        </div>

        <div
          className="tabsContainer flex overflow-x-auto flex-row justify-start flex-auto flex-nowrap items-center scroll-smooth scroll-ml-6"
          style={{
            opacity: isOpen ? 1 : 0,
            display: isOpen ? "flex" : "none",
          }}
        >
          {tabsList.map((t) => {
            return (
              <TabItem
                key={t.id}
                url={t.url}
                description={t.description}
                createdAt={t.createdAt}
              />
            );
          })}

          <Button type="text size-14 rounded-full mr-10" onClick={showModal}>
            <i className="fa-solid fa-plus text-lg"></i>
          </Button>

          <AddTabModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            onCreateTab={onCreateTab}
            collectionId={id}
          />
        </div>
      </div>
    </>
  );
}

export default TabList;
