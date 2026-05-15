'use client';

import styles from '/home.module.css';

/**
 * Tech Stack Card Component (위아래 여백과 아이콘 크기를 약간 줄임)
 */
function TechStackCard({ title, description, logoUrl }: { title: string, description: string, logoUrl: string }) {
  return (
    <div style={{ 
      flex: 1, 
      backgroundColor: '#ffffff',
      padding: '20px 16px', // 👈 패딩 축소
      borderRadius: '24px', 
      boxShadow: '0 8px 20px rgba(255, 180, 200, 0.3)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      border: '1px solid #fff0f5'
    }}>
      <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#fff5f8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
        <img src={logoUrl} alt={title} style={{ width: '35px', height: '35px', objectFit: 'contain' }} />
      </div>
      <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#ff6b9e', marginBottom: '6px' }}>{title}</h3>
      <p style={{ color: '#888', fontSize: '14px', textAlign: 'center', lineHeight: '1.4', wordBreak: 'keep-all', margin: 0 }}>{description}</p>
    </div>
  );
}

/**
 * Architecture Flow Step Component (여백 축소)
 */
function ArchitectureStep({ number, title, description, icon }: { number: number, title: string, description: string, icon: string }) {
  return (
    <div style={{ 
      flex: 1, 
      minWidth: 0, 
      backgroundColor: '#ffffff', 
      padding: '16px 8px', // 👈 패딩 축소
      borderRadius: '20px', 
      boxShadow: '0 8px 20px rgba(255, 180, 200, 0.3)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      border: '1px solid #fff0f5'
    }}>
      <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#ff6b9e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff', marginBottom: '8px', fontSize: '12px', flexShrink: 0 }}>
        {number}
      </div>
      <div style={{ fontSize: '28px', marginBottom: '8px' }}>{icon}</div>
      <h4 style={{ fontWeight: '800', color: '#444', fontSize: '13px', marginBottom: '4px', textAlign: 'center', whiteSpace: 'nowrap' }}>{title}</h4>
      <p style={{ fontSize: '11px', color: '#888', textAlign: 'center', lineHeight: '1.3', wordBreak: 'keep-all', margin: 0 }}>{description}</p>
    </div>
  );
}

/**
 * Arrow Component
 */
function Arrow() {
  return <div style={{ fontSize: '20px', color: '#ffb6c1', fontWeight: 'bold', flexShrink: 0 }}>→</div>;
}

/**
 * Home Page Component
 */
export default function DashboardHome() {
  return (
    // 👈 전체 하단 여백 대폭 제거
    <div style={{ width: '100%', padding: '10px 0 10px 0', boxSizing: 'border-box', fontFamily: 'sans-serif' }}>
      
      {/* 1. Tech Stack Section */}
      <section style={{ marginBottom: '30px' }}> {/* 👈 구역 사이 간격 줄임 */}
        {/* 👈 텍스트 중앙 정렬 설정! */}
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '900', color: '#ff6b9e', margin: '0 0 6px 0' }}>Tech Stack</h2>
          <p style={{ color: '#888', fontSize: '14px', margin: 0 }}>프로젝트의 핵심 기술 스택을 소개합니다.</p>
        </div>
        <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
          <TechStackCard title="Next.js" description="App Router 서버 렌더링" logoUrl="https://d2xsxph8kpxj0f.cloudfront.net/310519663567788941/MhSF9ugHkz5BpDWXwvFxYq/nextjs-logo-Egu7QjU2QRHXCVdAs2cAqL.webp" />
          <TechStackCard title="React" description="컴포넌트 기반 UI 개발" logoUrl="https://d2xsxph8kpxj0f.cloudfront.net/310519663567788941/MhSF9ugHkz5BpDWXwvFxYq/react-logo-WEs94WpyxDGStmvDKpyY5g.webp" />
          <TechStackCard title="Redux" description="전역 상태관리 솔루션" logoUrl="https://d2xsxph8kpxj0f.cloudfront.net/310519663567788941/MhSF9ugHkz5BpDWXwvFxYq/redux-logo-aNDZq6j5V4GHeJcKAwZEpx.webp" />
        </div>
      </section>

      {/* 2. Architecture Flow Section */}
      <section>
        {/* 👈 텍스트 중앙 정렬 설정! */}
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '900', color: '#ff6b9e', margin: '0 0 6px 0' }}>Redux Saga Flow</h2>
          <p style={{ color: '#888', fontSize: '14px', margin: 0 }}>데이터가 어떻게 흘러가는지 한눈에 확인하세요.</p>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
          <ArchitectureStep number={1} title="User Interaction" description="버튼 클릭 등 이벤트" icon="👤" />
          <Arrow />
          <ArchitectureStep number={2} title="Action Dispatch" description="Action 스토어 전달" icon="📤" />
          <Arrow />
          <ArchitectureStep number={3} title="Saga Middleware" description="비동기 로직 처리" icon="⚙️" />
          <Arrow />
          <ArchitectureStep number={4} title="Reducer Function" description="새로운 State 생성" icon="🔧" />
          <Arrow />
          <ArchitectureStep number={5} title="Global Store" description="전역 상태 저장" icon="💾" />
          <Arrow />
          <ArchitectureStep number={6} title="React View Update" description="화면 자동 업데이트" icon="🖥️" />
        </div>
      </section>

    </div>
  );
}