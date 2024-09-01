import { ConfigProvider } from "antd";
import "./App.css";
import TabItem from "./components/TabItem";
import TabList from "./components/TabList";
import { useEffect, useState } from "react";
import { fetchTabCollections } from "./services/TabCollections";
import { createTab } from "./services/Tabs";

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
          fontFamily:
            "	'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
          fontSize: 16,
        },
      }}
    >
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
    </ConfigProvider>
  );
}

export default App;
