import { clubs } from "./clubs.js";

export class DataSource {
  static searchClub(keyword) {
    return fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.teams.length) {
          return Promise.resolve(response.teams);
        } else {
          return Promise.reject(`${keyword} no found!`);
        }
      });
  }
}
