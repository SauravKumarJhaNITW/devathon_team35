import http from "./httpService";

export function register(data) {
  const apiEndpoint = "/api/applications";
  return http.post(apiEndpoint, data);
}

export function uploadFile(docFile) {
  const apiEndpoint = "/api/uploadFile";
  var formData = new FormData();
  formData.append("PDFfile", docFile);
  return http.post(apiEndpoint, formData);
}

export function uploadImage(image) {
  const apiEndpoint = "/api/uploadImage";
  var formData = new FormData();
  formData.append("image", image);
  return http.post(apiEndpoint,formData);
}

export function getBranches() {
  return http.get("/api/branches");
}
