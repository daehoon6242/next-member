import UpdateForm from "@/components/emp/UpdateForm";

const EditPage = () => {
    return (
        <main>
            <h1 className="page-title">직원 정보 수정</h1>
            <p className="page-desc">직원의 정보를 수정합니다.</p>
            <UpdateForm />
        </main>
    );
};

export default EditPage;