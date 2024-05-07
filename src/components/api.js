import axios from "axios";

export function patchData(article_id, body) {
  const votes = { inc_votes: body };
  return axios
    .patch(
      `https://nc-news-backend-yyld.onrender.com/api/articles/${article_id}`,
      votes
    )
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));
}
