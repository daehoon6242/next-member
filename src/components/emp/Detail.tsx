// "use client"

// import { fetchEmpDetailRequest } from "@/features/emp/slice";
// import { AppDispatch, RootState } from "@/store/store";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { useEffect } from "react";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import styles from './Detail.module.css';

// const Detail = () => {
//     const { empno } = useParams<{ empno: string }>();
//     const dispatch = useDispatch<AppDispatch>();
//     const { loading, error, detail } = useSelector((state: RootState) => ({
//         loading: state.emp.detailStatus.loading,
//         error: state.emp.detailStatus.error,
//         detail: state.emp.detail
//     }), shallowEqual);

//     useEffect(() => {
//         if (!empno) return; 
//         dispatch(fetchEmpDetailRequest(empno));
//     }, [empno]);

//     return (
//         <div>
//             {loading && <p>로딩중...</p>}
//             {error && <p>{error}</p>}
//             {!loading && detail && (
//                 <div className={styles.card}>
//                     <div className={styles.row}>
//                         <div className={styles.label}>Empno</div>
//                         <div className={styles.value}>{detail.empno}</div>
//                     </div>
//                     <div className={styles.row}>
//                         <div className={styles.label}>Ename</div>
//                         <div className={styles.value}>{detail.ename}</div>
//                     </div>
//                     <div className={styles.row}>
//                         <div className={styles.label}>Sal</div>
//                         <div className={styles.value}>{detail.sal}</div>
//                     </div>
//                     <div className={styles.row}>
//                         <div className={styles.label}>Deptno</div>
//                         <div className={styles.value}>{detail.deptno}</div>
//                     </div>
//                     <div className={styles.row}>
//                         <div className={styles.label}>Comm</div>
//                         <div className={styles.value}>{detail.comm}</div>
//                     </div>
//                     <div className={styles.row}>
//                         <div className={styles.label}>Job</div>
//                         <div className={styles.value}>{detail.job}</div>
//                     </div>
//                     <div className={styles.row}>
//                         <div className={styles.label}>Mgr</div>
//                         <div className={styles.value}>{detail.mgr}</div>
//                     </div>
//                     <div className={styles.row}>
//                         <div className={styles.label}>Hiredate</div>
//                         <div className={styles.value}>{detail.hiredate}</div>
//                     </div>

//                     <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
//                         <Link href={`/emp/${detail.empno}/edit`}>
//                             <button style={{ border: 'none', padding: '12px 18px', borderRadius: '999px', background: '#fff0f5', color: '#ff6f98', fontWeight: '700', cursor: 'pointer' }}>
//                                 수정
//                             </button>
//                         </Link>
//                         <button style={{ border: 'none', padding: '12px 18px', borderRadius: '999px', background: '#fff1f3', color: '#ff4d6d', fontWeight: '700', cursor: 'pointer' }}>
//                             삭제
//                         </button>
//                     </div>
//                 </div>
//             )}            
//         </div>
//     );
// };

// export default Detail;



"use client"

// ✨ deleteEmpRequest와 resetStatus를 추가로 불러옵니다.
import { fetchEmpDetailRequest, deleteEmpRequest, resetStatus } from "@/features/emp/slice";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
// ✨ 페이지 이동을 위해 useRouter를 불러옵니다.
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styles from './Detail.module.css';

const Detail = () => {
    const { empno } = useParams<{ empno: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter(); // ✨ 추가

    // ✨ deleteStatus (삭제 진행 상태)를 Redux에서 추가로 가져옵니다.
    const { loading, error, detail, deleteStatus } = useSelector((state: RootState) => ({
        loading: state.emp.detailStatus.loading,
        error: state.emp.detailStatus.error,
        detail: state.emp.detail,
        deleteStatus: state.emp.deleteStatus // ✨ 추가
    }), shallowEqual);

    // 컴포넌트 진입 시 상세 정보 불러오기
    useEffect(() => {
        if (!empno) return; 
        dispatch(fetchEmpDetailRequest(empno));
    }, [empno]);

    // ✨ 삭제가 성공했을 때의 후속 처리 (알림 및 목록 페이지로 튕겨내기)
    useEffect(() => {
        if (deleteStatus.success) {
            alert("삭제가 완료되었습니다.");
            dispatch(resetStatus("deleteStatus")); // 상태를 다시 초기화
            router.push("/emp"); // 직원 목록 페이지로 이동
        }
    }, [deleteStatus.success]);

    // ✨ 삭제 버튼을 눌렀을 때 실행될 함수
    const handleDelete = () => {
        if (window.confirm("정말 이 직원을 삭제하시겠습니까?")) {
            if (detail) {
                dispatch(deleteEmpRequest(detail.empno)); // 삭제 액션 발송
            }
        }
    };

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
                        {/* ✨ onClick={handleDelete} 가 추가된 진짜 작동하는 삭제 버튼 */}
                        
                        <button 
                            onClick={handleDelete} 
                            style={{ border: 'none', padding: '12px 18px', borderRadius: '999px', background: '#fff1f3', color: '#ff4d6d', fontWeight: '700', cursor: 'pointer' }}
                        >
                            삭제
                        </button>
                    </div>
                </div>
            )}            
        </div>
    );
};

export default Detail;