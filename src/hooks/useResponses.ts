import { useCallback, useEffect, useState } from "react";
import { CanceledError } from "axios";
import tgService from "../services/news-services/tg-service";
import naService from "../services/news-services/na-service";
import { Response_TG } from "../interfaces/news/theguardian/response";
import { Response_NA } from "../interfaces/news/newsapi/response";
import { UnifiedArticle } from "../interfaces/news/unified-article";
import { transformToUnifiedFormat } from "../utils/format";

const useResponses = () => {
  const [responses, setResponses] = useState<UnifiedArticle[] | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const fetchArticles = useCallback((page: number) => {
    setLoading(true);

    const tgApiKey = import.meta.env.VITE_API_KEY_TEST_TG;
    const tgRequest = tgService.getAll<Response_TG>({
      page,
      "api-key": tgApiKey,
    });

    // const naRequest = naService.getAll<Response_TG>({
    //   page,
    //   "api-key": tgApiKey,
    // });

    const naApiKey = import.meta.env.VITE_API_KEY_NA;
    const naRequest = naService.getAll<Response_NA>({
      page,
      country: "us",
      apiKey: naApiKey,
    });

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
    fetchArticles(1); // Initial fetch with page number 1
  }, [fetchArticles]);

  return { responses, fetchArticles, error, isLoading };
};

export default useResponses;
