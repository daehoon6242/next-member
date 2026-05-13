"use client"

import { fetchEmpDetailRequest, updateEmpRequest, resetStatus } from "@/features/emp/slice";
import { AppDispatch, RootState } from "@/store/store";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styles from './Form.module.css';

const UpdateForm = () => {
    const { empno } = useParams<{ empno: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const [form, setForm] = useState({ empno: "", ename: "", mgr: "", hiredate: "", job: "", sal: "", comm: "", deptno: "" });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updateEmpRequest({ empno, data: form }));
    };

    const { updateStatus, detail } = useSelector((state: RootState) => ({
        detail: state.emp.detail,
        updateStatus: state.emp.updateStatus,
    }), shallowEqual);

    useEffect(() => {
        if (updateStatus.success) {
            dispatch(resetStatus("updateStatus"));
            router.push(`/emp/${empno}`);
        }
    }, [updateStatus.success]);

    useEffect(() => {
        if (!empno) return; 
        dispatch(fetchEmpDetailRequest(empno));
    }, [empno]);

    useEffect(() => {
        if (detail) setForm(detail);
    }, [detail]);
    
    return (
        <div className={styles.wrapper}>
            <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.group}>
                    <label className={styles.label}>Empno</label>
                    <input className={styles.input} name="empno" placeholder="직원번호" onChange={onChange} value={form.empno} disabled />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>Ename</label>
                    <input className={styles.input} name="ename" placeholder="직원이름" onChange={onChange} value={form.ename} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>Mgr</label>
                    <input className={styles.input} name="mgr" placeholder="상사번호" onChange={onChange} value={form.mgr} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>Hiredate</label>
                    <input className={styles.input} name="hiredate" placeholder="입사일" onChange={onChange} value={form.hiredate} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>Job</label>
                    <input className={styles.input} name="job" placeholder="직업" onChange={onChange} value={form.job} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>Sal</label>
                    <input className={styles.input} name="sal" placeholder="급여" onChange={onChange} value={form.sal} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>Comm</label>
                    <input className={styles.input} name="comm" placeholder="상여금" onChange={onChange} value={form.comm} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>Deptno</label>
                    <input className={styles.input} name="deptno" placeholder="부서번호" onChange={onChange} value={form.deptno} />
                </div>
                
                <button type="submit" className={styles.button}>수정하기</button>

                {updateStatus.loading && <p className={styles.loading}>수정 중...</p>}
                {updateStatus.error && <p className={styles.error}>{updateStatus.error}</p>}
            </form>
        </div>
    );
};

export default UpdateForm;