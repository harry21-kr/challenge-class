import { AxiosInstance } from "axios";

class CartAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getCart() {
    const path = "/cart";

    const res = await this.axios.get(path);
    const result = res.data.result;
    return result;
  }

  async addItemToCard(productId: number) {
    const path = `/cart/products/${productId}`;

    const res = await this.axios.post(path);
    const result = res.data.result;
    return result;
  }

  async removeItemFromCart(productId: number) {
    const path = `/cart/products/${productId}`;

    const res = await this.axios.delete(path);
    const result = res.data.result;
    return result;
  }

  async clearItemInCart(productId: number) {
    const path = `/cart/products/${productId}/clear`;

    const res = await this.axios.delete(path);
    const result = res.data.result;
    return result;
  }
}

export default CartAPI;
