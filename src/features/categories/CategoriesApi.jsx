import axiosi from "../../config/axios"; // Import the default export

export const fetchAllCategories = async () => {
  try {
    const res = await axiosi.get("/categories");
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message; // Handle cases where error.response is undefined
  }
};
