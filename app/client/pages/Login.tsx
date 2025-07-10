import { Form, MetaFunction } from "@remix-run/react";

//! We can import MetaFuinction from any component and we can use it
export const meta: MetaFunction = () => {
  return [
    {
      title: "Login Page",
    },
    {
      name: "description",
      content: "Welcome to Login Page",
    },
  ];
};

export default function Login() {
  return (
    <>
      <Form
        method="post"
        className="max-w-sm mx-auto mt-10 p-4 border rounded shadow"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </Form>
    </>
  );
}
