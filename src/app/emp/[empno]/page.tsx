import Detail from "@/components/emp/Detail";

const DetailPage = () => {
    return (
        <main>
            <h1 className="page-title">직원 상세 정보</h1>
            <p className="page-desc">해당 직원의 상세 정보를 확인합니다.</p>
            <Detail />
        </main>
    );
};

export default DetailPage;