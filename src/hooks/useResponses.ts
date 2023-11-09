import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import tgService from "../services/news-services/tg-service";
//import naService from "../services/news-services/na-service";
import { Response_TG } from "../interfaces/news/theguardian/response";
import { Response_NA } from "../interfaces/news/newsapi/response";

const useResponses = () => {
  // Adjust the state to handle both data sets
  const [responses, setResponses] = useState<[Response_TG, Response_NA] | null>(
    null
  );
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const fetchArticles = (page: number) => {
    setLoading(true);

    //Get neceserry env variables.
    const tgApiKey = import.meta.env.VITE_API_KEY_TEST_TG;
    const tgRequest = tgService.getAll<Response_TG>({
      page,
      "api-key": tgApiKey,
    });

    const naRequest = tgService.getAll<Response_NA>({
      "api-key": "test",
    });

    // Use Promise.all to fetch both sets of data concurrently
    Promise.all([tgRequest.request, naRequest.request])
      .then(([tgResponse, naResponse]) => {
        const tgData = tgResponse.data;
        const naData = naResponse.data;

        // Set the data for both tg and na
        setResponses([tgData, naData]);
        setLoading(false);
      })
      .catch((err) => {
        // Handle errors here - you might want to refine this based on which request failed
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    // Clean up function to abort both requests if the component unmounts
    return () => {
      tgRequest.cancel();
      naRequest.cancel();
    };
  };

  useEffect(() => {
    // Load initial data when the component is mounted
    fetchArticles(1); // You can provide the initial page number here
  }, []);

  return { responses, fetchArticles, error, isLoading, setResponses, setError };
};

export default useResponses;
