import { Response_NA } from "../../interfaces/news/newsapi/response";

interface Props {
  response: Response_NA | undefined;
}

const ArticleNA = ({ response }: Props) => {
  const { articles } = response || {};
  return (
    <>
      {articles?.map((article) => (
        <>
          <h5>{article.title}</h5>
          <h6>{article.publishedAt}</h6>
          <h6>{article.source.id}</h6>
        </>
      ))}
    </>
  );
};

export default ArticleNA;
