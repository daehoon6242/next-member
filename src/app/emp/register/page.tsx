import RegisterForm from "@/components/emp/RegisterForm";

const RegisterPage = () => {
    return (
        <main>
            <h1 className="page-title">직원 가입</h1>
            <p className="page-desc">새로운 직원을 등록합니다.</p>
            <RegisterForm />
        </main>
    );
};

export default RegisterPage;