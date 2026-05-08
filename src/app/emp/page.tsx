import List from "@/components/emp/List";

const ListPage = () => {
    return (
        <main>
            <h1 className="page-title">직원 목록</h1>
            <p className="page-desc">등록된 전체 직원을 조회합니다.</p>
            <List />
        </main>
    );
};

export default ListPage;