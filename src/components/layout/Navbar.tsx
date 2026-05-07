import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <Link href="/">홈</Link> &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
            <Link href="/member">회원관리</Link> &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
            <Link href="/member/register">회원가입</Link> &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
            <Link href="/product">제품관리</Link> &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
            <Link href="/emp">직원목록</Link>&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
            <Link href="/emp/register">직원가입</Link>&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        </nav>
    );
};

export default Navbar;