class ProductsAPI {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }

  async getProducts() {
    const path = "/products";

    const res = await this.#axios.get(path);
    const result = res.data.result;
    return result;
  }

  async getProduct(productId) {
    const path = `/products/${productId}`;

    const res = await this.#axios.get(path);
    const result = res.data.result;
    return result;
  }
}

export default ProductsAPI;
