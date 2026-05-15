"use client"

import { registerMemberRequest, resetStatus } from "@/features/member/slice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styles from './Form.module.css';

const RegisterForm = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error, success } = useSelector((state: RootState) => ({
        loading: state.member.createStatus.loading,
        error: state.member.createStatus.error,
        success: state.member.createStatus.success,
    }), shallowEqual);

    const [form, setForm] = useState({ id: "", pw: "", addr: "", tel: "" });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(registerMemberRequest(form));
    };

    useEffect(() => {
        if (success) {
            dispatch(resetStatus("createStatus"));
            router.push("/member");
        }
    }, [success]);

    return (
        // 💡 핵심 추가: width, maxWidth, margin을 설정하여 폼을 화면 가운데로 예쁘게 고정합니다.
        <div className={styles.wrapper} style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
            <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.group}>
                    <label className={styles.label}>아이디</label>
                    <input className={styles.input} name="id" placeholder="아이디" onChange={onChange} value={form.id} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>비밀번호</label>
                    <input className={styles.input} type="password" name="pw" placeholder="비밀번호" onChange={onChange} value={form.pw} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>주소</label>
                    <input className={styles.input} name="addr" placeholder="주소" onChange={onChange} value={form.addr} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>전화번호</label>
                    <input className={styles.input} name="tel" placeholder="전화번호" onChange={onChange} value={form.tel} />
                </div>
                
                <button type="submit" className={styles.button}>
                    가입하기
                </button>

                {loading && <p className={styles.loading}>등록 중...</p>}
                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    );
};

export default RegisterForm;