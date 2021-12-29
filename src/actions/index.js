import axios from "axios";

export const getSecretWord = async () => {
  const response = await axios.get("https://localhost:444");
  return response.data;
};
