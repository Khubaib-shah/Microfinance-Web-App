export const validateForm = (formData) => {
  return Object.values(formData).every((value) => value.trim() !== "");
};
