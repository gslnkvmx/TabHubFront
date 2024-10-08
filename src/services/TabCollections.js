import axios from "axios";

export const fetchTabCollections = async () => {
  try {
    var response = await axios.get("http://localhost:5031/api/TabCollections");

    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchTabCollectionById = async (collectionId) => {
  try {
    var response = await axios.get(
      "http://localhost:5031/api/TabCollections/" + collectionId
    );

    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const createTabCollection = async (tabCol) => {
  try {
    var response = await axios.post(
      "http://localhost:5031/api/TabCollections",
      tabCol
    );
    console.log(response);
    return response.status;
  } catch (e) {
    console.error(e);
  }
};
