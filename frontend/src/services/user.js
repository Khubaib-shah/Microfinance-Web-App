import API_BASE_URL from "@/config/apiConfig";
import axios from "axios";
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const CreateUser = async (formData) => {
  try {
    const { data } = await axios.get(
      "https://smit-final-hackathon-backend-steel.vercel.app/api/user/users"
    );
    console.log(data);
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};
