import API_BASE_URL from "@/config/apiConfig";
import axios from "axios";

// Create an axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Function to create a new user
export const CreateUser = async (formData) => {
  try {
    const response = await apiClient.post("/api/user/users", formData);
    console.log("Form data submitted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error creating user:",
      error.response?.data || error.message
    );
    throw error;
  }
};
export const CreateLoan = async (formData) => {
  try {
    const response = await apiClient.post("/api/loan/loans", formData);
    console.log("Loan submitted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error creating user:",
      error.response?.data || error.message
    );
    throw error;
  }
};
