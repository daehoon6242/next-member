import List from "@/components/member/List";

const ListPage = () => {
    return (
        <main>
            <h1 className="page-title">회원 목록</h1>
            <p className="page-desc">등록된 전체 회원을 조회합니다.</p>
            <List />
        </main>
    );
};

export default ListPage;