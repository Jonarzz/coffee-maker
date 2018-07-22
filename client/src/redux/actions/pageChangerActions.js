import {CHANGE_PAGE} from "./ActionTypes";

export const changePage = (targetComponent, props) => ({ type: CHANGE_PAGE, targetComponent, props });