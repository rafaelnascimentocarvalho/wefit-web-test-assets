import axios from "axios";

const api = process.env.REACT_APP_API_URL;

const ProductsController = {
  List: async () => {
    try {
      const { data } = await axios.get(`${api}/products`);

      return data;
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }

    return [];
  },
};

export default ProductsController;
