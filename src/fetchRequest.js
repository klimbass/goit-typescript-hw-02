import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";

export async function fetchKey() {
  const key = await axios.get(
    "https://65d7bc4927d9a3bc1d7bb7e2.mockapi.io/contacts"
  );
  return key.data[0].key;
}

export async function fetchRequest(searchQuery, perPage, page, key) {
  const data = await axios.get(`search/photos`, {
    params: {
      client_id: key,
      query: searchQuery,
      per_page: perPage,
      page: page,
      orientation: "landscape",
    },
  });
  return data.data.results;
}
