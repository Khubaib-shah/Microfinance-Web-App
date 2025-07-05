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
    const response = await apiClient.post("/api/user/register", formData);
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

export const LoginUser = async (formData) => {
  try {
    const response = await apiClient.post("/api/user/login", formData);
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
  console.log(formData.complainId);
  try {
    const response = await apiClient.post("/api/loan/loans", formData);
    console.log("Loan submitted successfully:", response.data);
    return response.data.complainId;
  } catch (error) {
    console.error(
      "Error creating user:",
      error.response?.data || error.message
    );
    throw error;
  }
};
