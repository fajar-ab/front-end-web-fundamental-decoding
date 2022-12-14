import "../components/search-bar.js";
import "../components/club-list.js";
import { DataSource } from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const clubListElement = document.querySelector("club-list");

  // * promise
  const onButtonSearchClicked = () => {
    DataSource.searchClub(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = (results) => {
    clubListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  // buttonSearchElement.addEventListener("click", onButtonSearchClicked);
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
