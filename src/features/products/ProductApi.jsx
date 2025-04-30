import axiosi from "../../config/axios";

export const addProduct = async (data) => {
    try {
        const res = await axiosi.post("/products", data);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const fetchProducts = async (filters) => {
    const queryParams = new URLSearchParams();

    if (filters.brand) {
        filters.brand.forEach((brand) => queryParams.append("brand", brand));
    }
    if (filters.category) {
        filters.category.forEach((category) => queryParams.append("category", category));
    }
    if (filters.pagination) {
        queryParams.append("page", filters.pagination.page);
        queryParams.append("limit", filters.pagination.limit);
    }
    if (filters.sort) {
        queryParams.append("sort", filters.sort.sort);
        queryParams.append("order", filters.sort.order);
    }
    if (filters.user) {
        queryParams.append("user", filters.user);
    }

    try {
        const res = await axiosi.get(`/products?${queryParams.toString()}`);
        const totalResults = res.headers["x-total-count"];
        return { data: res.data, totalResults };
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const fetchProductById = async (id) => {
    try {
        const res = await axiosi.get(`/products/${id}`);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const updateProductById = async (update) => {
    try {
        const res = await axiosi.patch(`/products/${update._id}`, update);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const undeleteProductById = async (id) => {
    try {
        const res = await axiosi.patch(`/products/undelete/${id}`);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const deleteProductById = async (id) => {
    try {
        const res = await axiosi.delete(`/products/${id}`);
        return res.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};
