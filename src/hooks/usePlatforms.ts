import { useQuery } from "@tanstack/react-query";
// import apiClient from "../services/api-client";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>('/platforms')

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    // initialData: platforms

})

export default usePlatforms;