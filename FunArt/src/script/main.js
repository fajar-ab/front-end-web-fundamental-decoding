import "./components/search-bar";
import "./components/art-list";
import ArtSource from "./data/art-source";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const artListElement = document.querySelector("art-list");

  const renderResult = (results) => {
    artListElement.source = results;
  };

  const fallbackResult = (message) => {
    artListElement.renderError(message);
  };

  const onSubmitSearchForm = async () => {
    const dataSource = new ArtSource(searchElement.value);
    try {
      const sourceResponse = await dataSource.getArtApi();
      renderResult(sourceResponse);
    } catch (error) {
      fallbackResult(error);
    }
  };

  searchElement.submitEvent = onSubmitSearchForm;
};

export default main;
