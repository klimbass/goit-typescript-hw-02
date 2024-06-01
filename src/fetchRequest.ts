import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";

interface KeyResponse {
  key: string;
}

interface FetchResponse<T> {
  results: T;
}


export async function fetchKey(): Promise<string> {
 try {
    const response = await axios.get<KeyResponse[]>(
      "https://65d7bc4927d9a3bc1d7bb7e2.mockapi.io/contacts"
    );
    return response.data[0].key;
  } catch (error) {
    console.error("Error fetching key:", error);
    throw new Error("Unable to fetch API key");
  }
}


export async function fetchRequest<T>(
  searchQuery: string,
  perPage: number,
  page: number,
  key: string
): Promise<T> {
  try {
    const data = await axios.get<FetchResponse<T>>(`search/photos`, {
    params: {
      client_id: key,
      query: searchQuery,
      per_page: perPage,
      page: page,
      orientation: "landscape",
    },
  });
  return data.data.results;
  } catch (error) {
     console.error("Error fetching data:", error);
    throw new Error("Unable to fetch data from Unsplash");
  }
}
