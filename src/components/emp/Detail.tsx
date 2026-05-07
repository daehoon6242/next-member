"use client"

import { fetchEmpDetailRequest } from "@/features/emp/slice";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const Detail = () => {
    const { empno } = useParams<{empno :string}>();
    const dispatch=useDispatch<AppDispatch>();
    const {loading,error,detail}=useSelector((state:RootState)=>({
        loading:state.emp.detailStatus.loading,
        error:state.emp.detailStatus.error,
        detail:state.emp.detail
    }),shallowEqual);

    useEffect(()=>{
        if (!empno) return; 
        dispatch(fetchEmpDetailRequest(empno));
    },[empno]);
    return (
        <div>
            { loading && <p>로딩중...</p> }
            { error && <p>{error}</p> }
            { !loading && 
                <div>
                Empno : {detail?.empno}<br/>
                Ename : {detail?.ename}<br/>
                Sal : {detail?.sal}<br/>
                Deptno : {detail?.deptno}<br/>
                Comm : {detail?.comm}<br/>
                Job : {detail?.job}<br/>
                Mgr : {detail?.mgr}<br/>
                Hiredate : {detail?.hiredate}<br/> 
                <Link href={`/emp/${detail?.empno}/edit`}>
                <button>수정</button>
                </Link>
                <button>삭제</button>
                </div>
            }           
        </div>
    );
};


export default Detail;