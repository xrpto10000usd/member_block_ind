import { Navigate  } from "react-router-dom";

export async function loginAction({ request, params }) {
  return Navigate ("/member_block_ind/main/mainFront");
}