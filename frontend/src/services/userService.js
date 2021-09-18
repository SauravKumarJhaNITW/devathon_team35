import http from "./httpService";

const apiEndpoint = "/api/applications";

export function register(data) {
  return http.post(apiEndpoint, data);
}

export function getBranches() {
  return http.get("/api/branches");
}
