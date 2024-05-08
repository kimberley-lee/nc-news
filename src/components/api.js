import axios from "axios";

export function patchData(article_id, body) {
  const votes = { inc_votes: body };
  return axios.patch(
    `https://nc-news-backend-yyld.onrender.com/api/articles/${article_id}`,
    votes
  );
}

export function postData(article_id, postedComment) {
  return axios
    .post(
      `https://nc-news-backend-yyld.onrender.com/api/articles/${article_id}/comments`,
      postedComment
    )
    .then((response) => {
      if (response.status !== 201) {
        return Promise.reject({
          statusCode: response.status,
          message: "Something went wrong with your request",
        });
      }
    })
    .catch((err) => console.log(err));
}

export function deleteComment(comment_id) {
  return axios.delete(
    `https://nc-news-backend-yyld.onrender.com/api/comments/${comment_id}`
  );
}
