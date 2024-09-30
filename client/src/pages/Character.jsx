import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_CHARACTER } from "../utils/queries";
export default function Character() {
  useQuery(QUERY_SINGLE_CHARACTER);
  return (
    <body className="grid">
      <div></div>
      <div></div>
    </body>
  );
}
