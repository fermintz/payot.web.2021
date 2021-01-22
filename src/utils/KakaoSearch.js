import axios from "axios";

const SERVICE_KEY = "ad215343c930398fbbe0c1cde9ddbdc2";

export function daumSearch(type) {
  const url = `https://dapi.kakao.com/v2/search/${type}`;
  return axios
    .request({
      method: "GET",
      url,
      headers: { Authorization: `KakaoAK ${SERVICE_KEY}` },
      params: {
        query: "페이오티",
        size: 3,
      },
    })
    .then(({ data }) => data);
}
