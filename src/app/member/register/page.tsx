import RegisterForm from "@/components/member/RegisterForm";

const RegisterPage = () => {
    return (
        <main style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
            <h1 className="page-title">회원 가입</h1>
            <p className="page-desc">새로운 회원을 등록합니다.</p>
            <RegisterForm />
        </main>
    );
};

export default RegisterPage;