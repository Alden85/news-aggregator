import { Response_NA } from "../interfaces/news/newsapi/response";
import { Response_TG } from "../interfaces/news/theguardian/response";
import { UnifiedArticle } from "../interfaces/news/unified-article";

// Function to transform API responses into a unified format
export const transformToUnifiedFormat = (
  tgData: Response_TG,
  naData: Response_NA
): UnifiedArticle[] => {
  const tgArticles = tgData.response.results.map((article) => ({
    id: article.id,
    title: article.webTitle,
    date: article.webPublicationDate,
    link: article.webUrl,
    source: article.webUrl,
  }));

  const naArticles = naData.articles.map((article) => ({
    id: article.source.id,
    title: article.title,
    date: article.publishedAt,
    link: article.url,
    source: article.source.name,
  }));

  return [...tgArticles, ...naArticles];
};
