import { Button, ConfigProvider } from "antd";
import "./App.css";
import TabItem from "./components/TabItem";
import TabList from "./components/TabList";
import { useEffect, useState } from "react";
import {
  createTabCollection,
  fetchTabCollections,
} from "./services/TabCollections";
import { createTab } from "./services/Tabs";
import AddTabCollectionModal from "./components/AddTabCollectionModal";

function App() {
  const [tabCollections, setTabCollections] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const onCreateTabCol = async (tabCol) => {
    await createTabCollection(tabCol);
    let collections = await fetchTabCollections();

    setTabCollections(collections);
  };

  useEffect(() => {
    const fetchData = async () => {
      let collections = await fetchTabCollections();

      setTabCollections(collections);
    };

    fetchData();
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#722ed1",
          fontFamily:
            "	'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
          fontSize: 18,
        },
      }}
    >
      <div className="flex flex-col items-center mx-32">
        <div className="h-16">heading</div>
        {tabCollections.map((tl) => {
          return (
            <TabList
              key={tl.id}
              id={tl.id}
              title={tl.name}
              description={tl.description}
              tabs={tl.tabs}
            />
          );
        })}

        <Button type="dashed text-xl p-6 my-8" onClick={showModal}>
          ADD A NEW COLLECTION
        </Button>

        <AddTabCollectionModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onCreateTab={onCreateTabCol}
        />
      </div>
    </ConfigProvider>
  );
}

export default App;
