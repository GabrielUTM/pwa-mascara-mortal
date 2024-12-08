export async function apiRequests() {
  const url = "https://mmo-games.p.rapidapi.com/games?category=shooter",
    options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        "x-rapidapi-key": "7001c4e2e6mshd6e73ce8d0180c9p1d1915jsna0dba0f7db8c",
      },
    };
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

