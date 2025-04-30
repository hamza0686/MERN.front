import axiosi from "../../config/axios"; // Import the default export

export const fetchAllBrands = async () => {
  try {
    const res = await axiosi.get("/brands");
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message; // Handle cases where error.response is undefined
  }
};
