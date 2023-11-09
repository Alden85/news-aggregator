import { Response_NA } from "../../interfaces/news/newsapi/response";
import { Response_TG } from "../../interfaces/news/theguardian/response";
import { isResponseTG } from "../../utils/isResponse";
import { useSearchFilter } from "../../hooks/useSearchFilter";
import ArticleTG from "../Article/ArticleTG";
import ArticleNA from "../Article/ArticleNA";
import { v4 as uuidv4 } from "uuid";

interface Props {
  responses: (Response_TG | Response_NA)[];
  searchTerm: string;
  sortOrder: string;
}

const ArticleList = ({ responses, searchTerm, sortOrder }: Props) => {
  const filteredResponses = useSearchFilter(responses, searchTerm, sortOrder);

  const renderResponse = (response: Response_TG | Response_NA) => {
    if (isResponseTG(response)) {
      return <ArticleTG key={uuidv4()} response={response} />;
    } else {
      return <ArticleNA key={uuidv4()} response={response} />;
    }
  };

  return <>{filteredResponses?.map(renderResponse)}</>;
};

export default ArticleList;
