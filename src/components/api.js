import axios from "axios";

export function patchData(article_id, body) {
  const votes = { inc_votes: body };
  return axios.patch(
    `https://nc-news-backend-yyld.onrender.com/api/articles/${article_id}`,
    votes
  );
}

export function postComment(article_id, newComment) {
  return axios
    .post(
      `https://nc-news-backend-yyld.onrender.com/api/articles/${article_id}/comments`,
      newComment
    )
    .then(({ data }) => data.comment);
}

export function deleteComment(comment_id) {
  return axios.delete(
    `https://nc-news-backend-yyld.onrender.com/api/comments/${comment_id}`
  );
}
