import axiosi from "../../config/axios"; // Import the default export

export const createReview = async (review) => {
  try {
    const res = await axiosi.post("/reviews", review);
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message; // Handle cases where error.response is undefined
  }
};

export const fetchReviewsByProductId = async (id) => {
  try {
    const res = await axiosi.get(`/reviews/product/${id}`);
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updateReviewById = async (update) => {
  try {
    const res = await axiosi.patch(`/reviews/${update._id}`, update);
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deleteReviewById = async (id) => {
  try {
    const res = await axiosi.delete(`/reviews/${id}`);
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
