/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionFunctionArgs } from "@remix-run/node";
import Login from "~/client/pages/Login";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log("Email:", email);
  console.log("Password:", password);
  return formData;
};
export default function demo() {
  return <Login />;
}
