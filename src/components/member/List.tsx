"use client"

import { AppDispatch, RootState } from '@/store/store';
import { useEffect } from 'react';
import Item from './Item';
import { fetchMemberRequest } from '@/features/member/slice';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styles from './List.module.css';

const List = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error, list } = useSelector((state: RootState) => ({
        loading: state.member.listStatus.loading,
        error: state.member.listStatus.error,
        list: state.member.list
    }), shallowEqual);

    useEffect(() => {
        dispatch(fetchMemberRequest())
    }, [dispatch]);

    return (
        <div>
            {loading && <p>로딩중...</p>}
            {error && <p>{error}</p>}
            {!loading && 
                <div className={styles.container}>
                    {list?.map(m => (<Item key={m.id} member={m} />))}
                </div>
            }
        </div>
    );
};

export default List;