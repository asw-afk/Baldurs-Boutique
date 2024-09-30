import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
export default function Home() {
  const { data, loading } = useQuery(QUERY_ME);
  const { me } = data ? data : [];
  if (!me) {
    return <p>You need to be logged in to view this page.</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(me);
  return (
    <>
      <h1>Welcome, {me.username}!</h1>
      <p>You are logged in as a {me.role} user.</p>
      <p>You have {me.characters.length} created characters</p>
      <Link className="rounded-md bg-gray-900 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
        New Character
      </Link>
    </>
  );
}
