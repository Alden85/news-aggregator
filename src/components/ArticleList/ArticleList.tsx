import useSearchFilter from "../../hooks/useSearchFilter";
import { UnifiedArticle } from "../../interfaces/news/unified-article";
//import ArticleTG from "../Article/ArticleTG";
import { v4 as uuidv4 } from "uuid";
import Article from "../Article/Article";

interface Props {
  responses: UnifiedArticle[];
  searchTerm: string;
  sortOrder: string;
}

const ArticleList = ({ responses, searchTerm, sortOrder }: Props) => {
  const filteredResponses = useSearchFilter(responses, searchTerm, sortOrder);

  return (
    <div>
      {filteredResponses?.map((response: UnifiedArticle) => {
        return <Article key={uuidv4()} response={response} />;
      })}
    </div>
  );
};

export default ArticleList;
