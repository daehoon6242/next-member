import DashboardHome from '@/components/home'; // 컴포넌트 불러오기

export default function Home() {
  return (
    <main>
      {/* 불러온 인테리어(컴포넌트)를 거실(메인 페이지)에 배치 */}
      <DashboardHome />
    </main>
  );
}