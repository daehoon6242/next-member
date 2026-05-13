"use client"

import { deleteEmpRequest, fetchEmpDetailRequest, resetStatus } from "@/features/emp/slice";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styles from './Detail.module.css';

const Detail = () => {
    const { empno } = useParams<{ empno: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error, detail } = useSelector((state: RootState) => ({
        loading: state.emp.detailStatus.loading,
        error: state.emp.detailStatus.error,
        detail: state.emp.detail
    }), shallowEqual);
    const router = useRouter();
    const { deleteStatus } = useSelector((state: RootState) => ({
            deleteStatus: state.emp.deleteStatus
        }), shallowEqual);
    const onDelete = () => {
        if (!detail) return;
        if (confirm("정말 삭제할까요?")) {
            dispatch(deleteEmpRequest(detail.empno));
        }};
    
    useEffect(() => {
        if (!empno) return; 
        dispatch(fetchEmpDetailRequest(empno));}, [empno]);             
    useEffect(() => {
                if (deleteStatus.success) {
                    dispatch(resetStatus("deleteStatus"));
                    router.push("/emp");
                }
            }, [deleteStatus.success]);
    
    return (
        <div>
            {loading && <p>로딩중...</p>}
            {error && <p>{error}</p>}
            {!loading && detail && (
                <div className={styles.card}>
                    <div className={styles.row}>
                        <div className={styles.label}>Empno</div>
                        <div className={styles.value}>{detail.empno}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>Ename</div>
                        <div className={styles.value}>{detail.ename}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>Sal</div>
                        <div className={styles.value}>{detail.sal}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>Deptno</div>
                        <div className={styles.value}>{detail.deptno}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>Comm</div>
                        <div className={styles.value}>{detail.comm}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>Job</div>
                        <div className={styles.value}>{detail.job}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>Mgr</div>
                        <div className={styles.value}>{detail.mgr}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>Hiredate</div>
                        <div className={styles.value}>{detail.hiredate}</div>
                    </div>

                    <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
                        <Link href={`/emp/${detail.empno}/edit`}>
                            <button style={{ border: 'none', padding: '12px 18px', borderRadius: '999px', background: '#fff0f5', color: '#ff6f98', fontWeight: '700', cursor: 'pointer' }}>
                                수정
                            </button>
                        </Link>
                        <button onClick={onDelete} style={{ border: 'none', padding: '12px 18px', borderRadius: '999px', background: '#fff1f3', color: '#ff4d6d', fontWeight: '700', cursor: 'pointer' }}>
                            삭제
                        </button>
                    </div>
                </div>
            )}            
        </div>
    );
};

export default Detail;