import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/certificates' });

export const uploadExcel = (data) => API.post('/upload', data);
export const getCertificate = (id) => API.get(`/${id}`);
export const downloadCertificate = (id) => API.get(`/download/${id}`, { responseType: 'blob' });
