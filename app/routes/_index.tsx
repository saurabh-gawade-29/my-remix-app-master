import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react"; 
//! This function is for meta tags which return array
export const meta: MetaFunction = () => {
  return [
    { title: "Notes-Remix App" },
    { name: "description", content: "Welcome to Notes-Remix App!" },
  ];
};

export default function Index() {
  return (
    <>
      <h4>index JS Page</h4>
      {/* Below Code refresh the entire page */}
      {/* <a href="/demo">Demo Page</a> */}

      {/* Use Link From remix run react for SPA */}
      <Link to="/demo" className="text-blue-600">Demo Page</Link>
    </>
  );
}

