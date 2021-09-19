import jwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndpoint = "/api/authAdmin";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(user) {
  const { data: jwt } = await http.post(apiEndpoint, {
    username: user.username,
    password: user.password,
  });
  localStorage.setItem(tokenKey, jwt);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    const user = jwtDecode(jwt);
    return user;
  } catch (ex) {
    return null;
  }
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}
