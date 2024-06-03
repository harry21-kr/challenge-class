class ProductsAPI {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async getProducts() {
    const res = await this.#client.get("/products");
    return res.data.result;
  }

  getProduct() {}

  deleteProduct() {}
}

export default ProductsAPI;
