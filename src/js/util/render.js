import { redirect } from 'react-router-dom';

export async function bottomBarNavigation(e) {

  const search = window.location.hash.replace(/[^A-Za-z]/g, '');

  switch(search) {
    case "Market":
      redirect("/member_block_ind/main/mainSearchResult");
      break;
    default:
      break;
      
  }
}