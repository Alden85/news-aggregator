import { useCallback, useEffect, useState } from "react";
import { CanceledError } from "axios";
import tgService from "../services/news-services/tg-service";
import naService from "../services/news-services/na-service";
import { Response_TG } from "../interfaces/news/theguardian/response";
import { Response_NA } from "../interfaces/news/newsapi/response";
import { UnifiedArticle } from "../interfaces/news/unified-article";
import { transformToUnifiedFormat } from "../utils/format";
import { FetchOptions } from "../interfaces/fetch-options";

const useResponses = (page: number) => {
  const [responses, setResponses] = useState<UnifiedArticle[] | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const fetchArticles = useCallback((options: FetchOptions = {}) => {
    setLoading(true);

    const tgRequest = tgService.getAll<Response_TG>(options?.tgOptions);

    const naRequest = naService.getAll<Response_NA>(options?.naOptions);

    Promise.all([tgRequest.request, naRequest.request])
      .then(([tgResponse, naResponse]) => {
        const unifiedArticles = transformToUnifiedFormat(
          tgResponse.data,
          naResponse.data
        );
        setResponses(unifiedArticles);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      tgRequest.cancel();
      naRequest.cancel();
    };
  }, []);

  useEffect(() => {
    fetchArticles({
      tgOptions: {
        page,
        "api-key": import.meta.env.VITE_API_KEY_TEST_TG,
      },
      naOptions: {
        pageSize: 10,
        page,
        country: "us", //for the purpose of this project I chose to hard code it, but we could receive it as a param like we do the 'page' property.
        apiKey: import.meta.env.VITE_API_KEY_NA,
      },
    });
  }, [fetchArticles, page]);

  return { responses, fetchArticles, error, isLoading };
};

export default useResponses;
