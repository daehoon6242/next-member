"use client"

import { deleteMemberRequest, resetStatus } from "@/features/member/slice";
import { Member } from "@/features/member/types";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styles from './Item.module.css';

const Item = ({ member }: { member: Member }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { deleteStatus } = useSelector((state: RootState) => ({
        deleteStatus: state.member.deleteStatus
    }), shallowEqual);
    const router = useRouter();

    const onDelete = () => {
        if (confirm("정말 삭제할까요?")) {
            dispatch(deleteMemberRequest(member.id));
        }
    };

    useEffect(() => {
        if (deleteStatus.success) {
            dispatch(resetStatus("deleteStatus"));
            router.push("/member");
        }
    }, [deleteStatus.success]);

    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <div className={styles.id}>{member.id}</div>
                <div className={styles.sub}>{member.addr} | {member.tel}</div>
            </div>
            <div className={styles.actions}>
                <Link href={`/member/${member.id}`} className={styles.button}>
                    상세보기
                </Link>
                {/* <Link href={`/member/${member.id}/edit`} className={styles.button}>
                    수정
                </Link> */}
                <button onClick={onDelete} className={`${styles.button} ${styles.delete}`}>
                    삭제
                </button>
            </div>
        </div>
    );
};

export default Item;