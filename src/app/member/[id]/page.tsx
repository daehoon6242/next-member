import Detail from "@/components/member/Detail";

const DetailPage = () => {
    return (
        <main>
            <h1 className="page-title">회원 상세 정보</h1>
            <p className="page-desc">해당 회원의 상세 정보를 확인합니다.</p>
            <Detail />
        </main>
    );
};

export default DetailPage;