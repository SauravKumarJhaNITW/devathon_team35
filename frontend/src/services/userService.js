import http from "./httpService";

const apiEndpoint = "/api/registerUser";

export function register(user) {
  return http.post(apiEndpoint, {
    username: user.username,
    email: user.email,
    password: user.password,
  });
}
