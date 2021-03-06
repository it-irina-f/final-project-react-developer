import { isEmpty } from "ramda";
import { take, call, put, fork } from "redux-saga/effects";

import { getUserSession, login, logout } from "@/api/auth";

import { actions, usernameMinLength } from "./reducer";

export function* clearUserSession() {
  yield call(logout);
}

export function* checkUserSession() {
  const userSession: string = yield call(getUserSession);
  if (userSession?.length > usernameMinLength && !isEmpty(userSession)) {
    yield put(actions.login(userSession));
  } else {
    yield put(actions.logout());
    yield* clearUserSession();
  }
}

export function* saveUserSession({
  payload,
}: ReturnType<typeof actions.login>) {
  const username = String(payload);
  if (username?.length > usernameMinLength && !isEmpty(username)) {
    yield call(login, username);
  }
}

export function* authSaga() {
  yield fork(checkUserSession);
  while (true) {
    const action = yield take(actions.login.type);
    yield* saveUserSession(action);
    yield take(actions.logout.type);
    yield* clearUserSession();
  }
}
