"use client"

import { fetchMemberDetailRequest } from "@/features/member/slice";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styles from './Detail.module.css';

const Detail = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error, detail } = useSelector((state: RootState) => ({
        loading: state.member.detailStatus.loading,
        error: state.member.detailStatus.error,
        detail: state.member.detail
    }), shallowEqual);
    useEffect(() => {
        if (!id) return; 
        dispatch(fetchMemberDetailRequest(id));
    }, [id]);

    return (
        <div>
            {loading && <p>로딩중...</p>}
            {error && <p>{error}</p>}
            {!loading && detail && (
                <div className={styles.card}>
                    <div className={styles.row}>
                        <div className={styles.label}>ID</div>
                        <div className={styles.value}>{detail.id}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>PW</div>
                        <div className={styles.value}>{detail.pw}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>주소</div>
                        <div className={styles.value}>{detail.addr}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.label}>전화번호</div>
                        <div className={styles.value}>{detail.tel}</div>
                    </div>

                    <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
                        <Link href={`/member/${detail.id}/edit`}>
                            <button style={{ border: 'none', padding: '12px 18px', borderRadius: '999px', background: '#fff0f5', color: '#ff6f98', fontWeight: '700', cursor: 'pointer' }}>
                                수정
                            </button>
                        </Link>
                        <button style={{ border: 'none', padding: '12px 18px', borderRadius: '999px', background: '#fff1f3', color: '#ff4d6d', fontWeight: '700', cursor: 'pointer' }}>
                            삭제
                        </button>
                    </div>
                </div>
            )}            
        </div>
    );
};

export default Detail;