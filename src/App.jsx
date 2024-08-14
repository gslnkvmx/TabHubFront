import { ConfigProvider } from "antd";
import "./App.css";
import TabItem from "./components/TabItem";
import TabList from "./components/TabList";
import { useEffect, useState } from "react";
import { fetchTabCollections } from "./services/TabCollections";

function App() {
  const [tabCollections, setTabCollections] = useState([]);

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
        },
      }}
    >
      {tabCollections.map((tl) => {
        return (
          <TabList
            key={tl.id}
            title={tl.name}
            description={tl.description}
            tabs={tl.tabs}
          />
        );
      })}
    </ConfigProvider>
  );
}

export default App;
