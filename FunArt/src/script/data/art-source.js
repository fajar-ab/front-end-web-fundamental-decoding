import axios from "axios";

class ArtSource {
  #API_URL = `https://api.artic.edu/api/v1/artworks`;

  constructor(keyword) {
    this.keyword = keyword;
  }

  async getArtApi() {
    const response = await axios.get(
      `${this.#API_URL}/search?q=${this.keyword}&fields=api_link`,
    );

    const result = response.data;

    if (result.data.length) {
      return Promise.resolve(result.data);
    }

    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(`'${this.keyword}' not found!`);
  }
}

export default ArtSource;
