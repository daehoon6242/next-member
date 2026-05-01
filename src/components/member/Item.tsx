"use client"
import { Member } from "@/features/member/types";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
const Item = ({member}:{member:Member}) => {
    const dispatch=useDispatch<AppDispatch>();
    const {deleteStatus}=useSelector((state:RootState)=>({
        deleteStatus:state.member.deleteStatus
    }),shallowEqual);   
    return (
        <div>
        <Link href={`/member/${member.id}`}>
        {member.id}
        </Link>
        </div>
    );
};

export default Item;