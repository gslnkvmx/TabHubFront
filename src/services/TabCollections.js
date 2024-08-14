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
