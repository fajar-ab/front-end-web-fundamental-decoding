import axios from "axios";

class ArtDetail {
  constructor(apiLink) {
    this.apiLink = apiLink;
  }

  async getDetail() {
    try {
      const response = await axios.get(
        `${this.apiLink}?fields=id,title,image_id,artist_title,thumbnail`,
      );

      return Promise.resolve(response.data);
    } catch (error) {
      return 0;
    }
  }
}

export default ArtDetail;
