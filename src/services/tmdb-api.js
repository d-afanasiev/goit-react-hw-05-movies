const API_KEY = "4e286c2ceeb7113ef3a7d57d0bdb7157";
const BASE_URL = `https://api.themoviedb.org/3`;

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
}

// export function fetchBooks() {
//   return fetchWithErrorHandling(`${BASE_URL}/books`);
// }

// export function fetchBookById(bookId) {
//   return fetchWithErrorHandling(`${BASE_URL}/books/${bookId}?_expand=author`);
// }
