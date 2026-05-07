"use client"

import { fetchEmpDetailRequest, updateEmpRequest,resetStatus } from "@/features/emp/slice";
import { AppDispatch, RootState } from "@/store/store";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const UpdateForm = () => {
    const { emp } = useParams<{emp:string}>();
    const dispatch=useDispatch<AppDispatch>();
    const router = useRouter();

    const [form, setForm] = useState({ empno: "", ename: "", mgr: "", hiredate: "",job:"",sal:"",comm:"",deptno:"" });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const onSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        dispatch(updateEmpRequest({ empno, data: form }));
    };

    const {updateStatus,detail}=useSelector((state:RootState)=>({
        detail:state.emp.detail,
        updateStatus:state.emp.updateStatus,
    }),shallowEqual);

    useEffect(()=>{

        if(updateStatus.success) {
            dispatch(resetStatus("updateStatus"));
            router.push("/emp");
        }
    },[updateStatus.success]);

    useEffect(()=>{
        if (!empno) return; 
        dispatch(fetchEmpDetailRequest(empno));
    },[empno]);

    useEffect(() => {
        if (detail) setForm(detail);
    }, [detail]);
    
    return (
        <div>
    <form onSubmit={onSubmit}>
      Empno : <input name="empno" placeholder="직원번호" onChange={onChange} value={form.empno} disabled />
      <br />
      Ename : <input name="ename" placeholder="직원이름" onChange={onChange} value={form.ename} />
      <br />
      Mgr : <input name="mgr" placeholder="상사번호" onChange={onChange} value={form.mgr} />
      <br />
      Hiredate : <input name="hiredate" placeholder="입사일" onChange={onChange} value={form.hiredate} />
      <br />
      Job : <input name="job" placeholder="직업" onChange={onChange} value={form.job} />
      <br />
      Sal : <input name="sal" placeholder="급여" onChange={onChange} value={form.sal} />
      <br />
      Comm : <input name="comm" placeholder="상여금" onChange={onChange} value={form.comm} />
      <br />
      Deptno : <input name="deptno" placeholder="부서번호" onChange={onChange} value={form.deptno} />
      <br />
      <button type="submit">수정하기</button>
        { updateStatus.loading && <p>수정 중...</p>}
        { updateStatus.error && <p>{updateStatus.error}</p>}
    </form>
        </div>
    );
};

export default UpdateForm;