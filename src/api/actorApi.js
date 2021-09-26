import axiosClient from "./axiosClient";

export function getAll() {
  return axiosClient({
    url: '/actors',
    method: "GET",
  })
}