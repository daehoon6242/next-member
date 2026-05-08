"use client"

import { Emp } from "@/features/emp/types";
import { deleteMemberRequest, resetStatus } from "@/features/member/slice"; 
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styles from './Item.module.css';

const Item = ({ emp }: { emp: Emp }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { deleteStatus } = useSelector((state: RootState) => ({
        deleteStatus: state.emp.deleteStatus
    }), shallowEqual);
    const router = useRouter();

    // const onDelete = () => {
    //     if (confirm("정말 삭제할까요?")) {
    //         dispatch(deleteMemberRequest(emp.empno)); // emp 전용 slice가 있다면 수정 필요
    //     }
    // };

    useEffect(() => {
        if (deleteStatus.success) {
            dispatch(resetStatus("deleteStatus"));
            router.push("/emp");
        }
    }, [deleteStatus.success]);

    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <div className={styles.id}>{emp.ename}</div>
                <div className={styles.sub}>사번: {emp.empno} | 직무: {emp.job}</div>
            </div>
            <div className={styles.actions}>
                <Link href={`/emp/${emp.empno}`} className={styles.button}>
                    상세보기
                </Link>
                <Link href={`/emp/${emp.empno}/edit`} className={styles.button}>
                    수정
                </Link>
                <button 
                // onClick={onDelete} 
                className={`${styles.button} ${styles.delete}`}>
                    삭제
                </button>
            </div>
        </div>
    );
};

export default Item;