import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

export function convertToRelativeDate(created_at) {
  const relativeDate = formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
  });
  return relativeDate;
}
