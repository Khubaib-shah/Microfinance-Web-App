import API_BASE_URL from "@/config/apiConfig";
import axios from "axios";
import dotenv from "dotenv";
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const CreateUser = async (formData) => {
  try {
    await apiClient.post("/api/user/users", formData);
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};
