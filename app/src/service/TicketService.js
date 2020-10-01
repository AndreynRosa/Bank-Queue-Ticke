import { API_URL } from '../config';
import { get, post, put } from './AxiosService';

export async function findAllByStatus(status) {
  const url = `${API_URL}/ticket?status=${status}`;
  const resp = await get(url);
  return resp;
}

export async function generateTicket(type){
  const url =  `${API_URL}/ticket`;
  const resp = await post(url, {type});
  return resp;
}

export async function call(){
  const url =  `${API_URL}/ticket/call`;
  const resp = await put(url, null)
  return resp;
}

export async function reset(){
  const url =  `${API_URL}/ticket/reset`;
  const resp = await put(url, null)
  return resp;
}
