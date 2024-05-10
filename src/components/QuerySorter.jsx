import { useSearchParams } from "react-router-dom";

function QuerySorter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortByQuery = searchParams.get("sort_by");
  console.log(sortByQuery);

  return (
    <select>
      <option>Sort by</option>
      <option>📆 New</option>
      <option>🔥 Hot</option>
      <option>💬 Popular</option>
    </select>
  );
}

export default QuerySorter;
