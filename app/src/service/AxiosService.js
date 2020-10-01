import axios from 'axios';

export async function get(url) {
  const resp = await axios({ method: 'GET', url: url });
  return resp;
}

export async function post(url, data) {
  axios.defaults.headers['Content-Type'] = 'application/json';
  const resp = await axios({ method: 'POST', url: url, data: data });
  return resp;
}

export async function put(url, data) {
  axios.defaults.headers.Authorization =
    'Bearer 5588b2921d6be2d656e61652ac916a';
  axios.defaults.headers['Content-Type'] = 'application/json';
  const resp = await axios({ method: 'PUT', url: url, data: data });
  return resp;
}

