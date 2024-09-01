import axios from "axios";

export const createTab = async (tab) => {
  try {
    var response = await axios.post("http://localhost:5031/api/Tabs", tab);
    console.log(response);
    return response.status;
  } catch (e) {
    console.error(e);
  }
};

export const fetchTabs = async (collectionId) => {
  try {
    var response = await axios.get(
      "http://localhost:5031/api/Tabs/" + collectionId
    );

    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
