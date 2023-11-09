import { Response_TG } from "../../interfaces/news/theguardian/response";

interface Props {
  response: Response_TG | undefined;
}

const ArticleTG = ({ response }: Props) => {
  const { response: innerResponse } = response || {};
  const { results } = innerResponse || {};
  return (
    <>
      {results?.map((article) => (
        <>
          <h5>{article.webTitle}</h5>
          <h6>{article.webPublicationDate}</h6>
        </>
      ))}
    </>
  );
};

export default ArticleTG;
