"use client"

import { registerEmpRequest, resetStatus } from "@/features/emp/slice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styles from './Form.module.css';

const RegisterForm = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error, success } = useSelector((state: RootState) => ({
        loading: state.emp.createStatus.loading,
        error: state.emp.createStatus.error,
        success: state.emp.createStatus.success,
    }), shallowEqual);

    const [form, setForm] = useState({ empno: "", ename: "", mgr: "", hiredate: "", job: "", sal: "", comm: "", deptno: "" });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(registerEmpRequest(form));
    };

    useEffect(() => {
        if (success) {
            dispatch(resetStatus("createStatus"));
            router.push("/emp");
        }
    }, [success]);

    return (
        <div className={styles.wrapper}>
            <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.group}>
                    <label className={styles.label}>직원번호</label>
                    <input className={styles.input} name="empno" placeholder="직원번호" onChange={onChange} value={form.empno} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>직원이름</label>
                    <input className={styles.input} name="ename" placeholder="직원이름" onChange={onChange} value={form.ename} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>직원상사</label>
                    <input className={styles.input} name="mgr" placeholder="직원상사" onChange={onChange} value={form.mgr} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>입사일</label>
                    <input className={styles.input} type="date" name="hiredate" placeholder="입사일" onChange={onChange} value={form.hiredate} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>직업</label>
                    <input className={styles.input} name="job" placeholder="직업" onChange={onChange} value={form.job} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>급여</label>
                    <input className={styles.input} name="sal" placeholder="급여" onChange={onChange} value={form.sal} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>커미션</label>
                    <input className={styles.input} name="comm" placeholder="커미션" onChange={onChange} value={form.comm} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>부서번호</label>
                    <input className={styles.input} name="deptno" placeholder="부서번호" onChange={onChange} value={form.deptno} />
                </div>
                
                <button type="submit" className={styles.button}>가입하기</button>

                {loading && <p className={styles.loading}>등록 중...</p>}
                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    );
};

export default RegisterForm;