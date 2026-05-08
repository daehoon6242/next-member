import UpdateForm from "@/components/member/UpdateForm";

const EditPage = () => {
    return (
        <main>
            <h1 className="page-title">회원 정보 수정</h1>
            <p className="page-desc">회원의 정보를 수정합니다.</p>
            <UpdateForm />
        </main>
    );
};

export default EditPage;