"use client"

import { fetchMemberDetailRequest, resetStatus, updateMemberRequest } from "@/features/member/slice";
import { AppDispatch, RootState } from "@/store/store";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styles from './Form.module.css';

const UpdateForm = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const [form, setForm] = useState({ id: "", pw: "", addr: "", tel: "" });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updateMemberRequest({ id, data: form }));
    };

    const { updateStatus, detail } = useSelector((state: RootState) => ({
        detail: state.member.detail,
        updateStatus: state.member.updateStatus,
    }), shallowEqual);

    useEffect(() => {
        if (updateStatus.success) {
            dispatch(resetStatus("updateStatus"));
            router.push("/member");
        }
    }, [updateStatus.success]);

    useEffect(() => {
        if (!id) return; 
        dispatch(fetchMemberDetailRequest(id));
    }, [id]);

    useEffect(() => {
        if (detail) setForm(detail);
    }, [detail]);

    return (
        <div className={styles.wrapper}>
            <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.group}>
                    <label className={styles.label}>ID</label>
                    <input className={styles.input} name="id" placeholder="아이디" onChange={onChange} value={form.id} disabled />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>PW</label>
                    <input className={styles.input} type="password" name="pw" placeholder="비밀번호" onChange={onChange} value={form.pw} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>ADDR</label>
                    <input className={styles.input} name="addr" placeholder="주소" onChange={onChange} value={form.addr} />
                </div>
                <div className={styles.group}>
                    <label className={styles.label}>TEL</label>
                    <input className={styles.input} name="tel" placeholder="전화번호" onChange={onChange} value={form.tel} />
                </div>
                
                <button type="submit" className={styles.button}>
                    수정하기
                </button>

                {updateStatus.loading && <p className={styles.loading}>수정 중...</p>}
                {updateStatus.error && <p className={styles.error}>{updateStatus.error}</p>}
            </form>
        </div>
    );
};

export default UpdateForm;