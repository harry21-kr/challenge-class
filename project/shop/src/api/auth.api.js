class AuthAPI {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }

  async signUp(data) {
    const path = "/auth/sign-up";

    const res = await this.#axios.post(path, data);
    const result = res.data.result;
    return result;
  }

  async login(data) {
    const path = "/auth/log-in";

    const res = await this.#axios.post(path, data);
    const result = res.data.result;
    return result;
  }

  async logOut() {
    const path = "/auth/log-out";

    const res = await this.#axios.delete(path);
    const result = res.data.result;
    return result;
  }

  async refreshToken() {
    const path = "/auth/refresh-token";

    const res = await this.#axios.get(path);
    const result = res.data.result;
    return result;
  }
}

export default AuthAPI;
