import axios from "axios";

// axios.defaults.withCredentials = true;

export function NaverSearch() {
  return axios.request({
    method: "GET",
    url: "https://openapi.naver.com/v1/search/news.json",
    headers: {
      "X-Naver-Client-Id": "TQVuE8Y_5Yu0ctuQBdCf",
      "X-Naver-Client-Secret": "OXAuUuCACZ",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true"
    },
    params: {
      query: "페이오티",
      display: 10,
      start: 1,
      sort: "date",
    },
  });
}
