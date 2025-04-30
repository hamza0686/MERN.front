import axiosi from "../../config/axios"; // Import the default export

export const addToCart = async (item) => {
  try {
    const res = await axiosi.post("/cart", item);
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message; // Handle cases where error.response is undefined
  }
};

export const fetchCartByUserId = async (id) => {
  try {
    const res = await axiosi.get(`/cart/user/${id}`);
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updateCartItemById = async (update) => {
  try {
    const res = await axiosi.patch(`/cart/${update._id}`, update);
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deleteCartItemById = async (id) => {
  try {
    const res = await axiosi.delete(`/cart/${id}`);
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const resetCartByUserId = async (userId) => {
  try {
    const res = await axiosi.delete(`/cart/user/${userId}`);
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
