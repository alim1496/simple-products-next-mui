"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface UseHttpGetResponse<T> {
  data: T | undefined;
  error: Error | undefined;
  loading: boolean;
}

const useHttpFetch = <T>(url: string): UseHttpGetResponse<T> => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(undefined);

      try {
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useHttpFetch;
