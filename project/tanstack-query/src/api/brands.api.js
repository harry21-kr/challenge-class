class BrandsAPI {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async getBrands() {
    const res = await this.#client.get("/brands");
    return res.data.result;
  }
}

export default BrandsAPI;
