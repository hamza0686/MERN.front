import axiosi from "../../config/axios"; // Import the default export

export const createOrder = async (order) => {
  try {
    const res = await axiosi.post("/orders", order);
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message; // Handle cases where error.response is undefined
  }
};

export const getOrderByUserId = async (id) => {
  try {
    const res = await axiosi.get(`/orders/user/${id}`);
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getAllOrders = async () => {
  try {
    const res = await axiosi.get(`/orders`);
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updateOrderById = async (update) => {
  try {
    const res = await axiosi.patch(`/orders/${update._id}`, update);
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
