import { watchMemberSaga } from "@/features/member/saga";
import { all } from "redux-saga/effects";

export function* rootSaga(){
    yield all([watchMemberSaga()]);
}