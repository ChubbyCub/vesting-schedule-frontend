import useSWR from "swr"
import { fetcher } from "../helpers";

export function useAwards() {
  const { data, error } = useSWR('/api/vesting-schedule', fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}