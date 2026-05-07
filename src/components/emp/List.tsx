"use client"

import { AppDispatch, RootState } from '@/store/store';
import { useEffect } from 'react';

import Item from './Item';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchEmpRequest } from '@/features/emp/slice';

const List = () => {
    const dispatch=useDispatch<AppDispatch>();
    const {loading,error,list}=useSelector((state:RootState)=>({
        loading:state.emp.listStatus.loading,
        error:state.emp.listStatus.error,
        list:state.emp.list
    }),shallowEqual);
    console.log("list:", list);
    useEffect(()=>{
        dispatch(fetchEmpRequest())
    },[dispatch]);
    return (
        <div>
            { loading && <p>로딩중...</p> }
            { error && <p>{error}</p> }
            { !loading && 
                <div>
               {list?.map(e => (<Item key={e.empno} emp={e} />))}
                </div>
            }
        </div>
    );
};

export default List;