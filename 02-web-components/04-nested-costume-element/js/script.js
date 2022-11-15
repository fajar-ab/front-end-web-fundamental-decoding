import "./article.list.js";
import articles from "./article.js";

const articeleListElement = document.createElement("article-list");
articeleListElement.articles = articles;

document.body.append(articeleListElement);
