
import api from "@/lib/axios";
import { Emp } from "./types";

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

// 목록
export const fetchEmpAPI = () => api.get("/emp");

// 상세
export const fetchEmpDetailAPI = (empno: string) =>
    api.get(`/emp/detail/${empno}`);

// 등록
export const registerEmpAPI = (data: Emp) =>
    api.post("/emp", data);

// 수정
export const updateEmpAPI = (empno:string, data: Emp) =>
    api.put(`/emp/${empno}`, data);

// 삭제
export const deleteEmpAPI = (empno: string) =>
    api.delete(`/emp/${empno}`);