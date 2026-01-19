import { redirect } from "react-router-dom"; 

export async function loginAction({ request, params }) {
  return redirect("/main/mainFront");
}