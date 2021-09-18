import http from "./httpService";

export function register(data) {
  const apiEndpoint = "/api/applications";
  return http.post(apiEndpoint, data);
}

export function uploadFile(docFile) {
  const apiEndpoint = "/api/uploadFile";
  return http.post(apiEndpoint, {"PDFfile": docFile});
}

export function uploadImage(image) {
  const apiEndpoint = "/api/uploadImage";
  return http.post(apiEndpoint, {"image": image});
}

export function getBranches() {
  return http.get("/api/branches");
}
