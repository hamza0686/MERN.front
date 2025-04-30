import axiosi from "../../config/axios"; // Import the default export

export const fetchLoggedInUserById = async (id) => {
  try {
    const res = await axiosi.get(`/users/${id}`);
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message; // Handle cases where error.response is undefined
  }
};

export const updateUserById = async (update) => {
  try {
    const res = await axiosi.patch(`/users/${update._id}`, update);
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
