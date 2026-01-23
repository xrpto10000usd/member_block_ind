import { redirect } from "react-router-dom"; 
/**
 * get search InputValue
 */
export async function searchInputValue (e) {
    return e.target.value;
}

/**
 * search action
 */
export async function search() {
    return redirect("");
}