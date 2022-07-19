import axios from 'axios';

const EMPLOYEE_BASE_API_URL = 'http://localhost:8081/api/v1/employees';

export function getAllEmployees(){
    return axios.get(EMPLOYEE_BASE_API_URL);
}

export function createEmployee(employee){
    return axios.post(EMPLOYEE_BASE_API_URL,employee);
}

export function getById(id){
    return axios.get(`${EMPLOYEE_BASE_API_URL}/${id}`);
}

export function updateEmployee(id, employee){
    return axios.put(`${EMPLOYEE_BASE_API_URL}/${id}`, employee);
}

export function deleteEmployee(id){
    return axios.delete(`${EMPLOYEE_BASE_API_URL}/${id}`);
}