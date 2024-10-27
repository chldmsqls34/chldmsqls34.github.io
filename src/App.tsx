import './App.css'
import { FaGithub } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { useEffect, useState } from 'react';
import Modal from './components/Modal';

type ModalData = {
  title: string;
  date: string;
  content: string;
  link: string;
}


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', date: '', content: '', link: '' });

  const openModal = (data:ModalData) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

    // 모달 열림 상태에 따른 body 스크롤 조작
    useEffect(() => {
      if (isModalOpen) {
        document.body.style.overflow = 'hidden'; // 스크롤 비활성화
      } else {
        document.body.style.overflow = 'auto'; // 스크롤 활성화
      }
      // 컴포넌트가 언마운트될 때 스크롤 활성화
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isModalOpen]);

  return (
    <div>
      <div className='header'>
        <div>
          <p className='logo'>Eunbin Portfolio</p>
        </div>
        <div className='header-buttons'>
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            About
          </button>
          <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>
            Skills
          </button>
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Projects
          </button>
        </div>
      </div>

      <div className="main-container">
        <div className="main-text">
          <h1>최은빈 포트폴리오</h1>
          <br/>
          <p>안녕하세요.</p>
          <p className='text-underline'>변화에 유연하게 대응하며 지속적인 성장과 학습을 지향하는</p>
          <p>프론트엔드 개발자 최은빈입니다.</p>
        </div>
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
          className="main-container-button">
          더 알아보기
        </button>
      </div>



      <div id="about" className="about-container">
        <h1>ABOUT ME</h1>
        <div className="about-items">
          <div>
            <IoLocationOutline className='about-icon'/>
            <p>거주지</p>
            <p>경기도 성남시</p>
          </div>
          <div>
            <AiOutlinePhone className='about-icon'/>
            <p>연락처</p>
            <p>010-4499-3423</p>
          </div>
          <div>
            <AiOutlineMail className='about-icon'/>
            <p>이메일</p>
            <p>chldmsqls34@gmail.com</p>
          </div>
          <div>
            <FaGithub className='about-icon'/>
            <p>깃허브</p>
            <p>https://github.com/chldmsqls34</p>
          </div>
        </div>
      </div>

      <div id="skills" className="skill-container">
        <h1>SKILLS</h1>
        <div className="skill-items">
          <div>
            <p>HTML5</p>
          </div>
          <div>
            <p>CSS3</p>
          </div>
          <div>
            <p>JavaScript</p>
          </div>
          <div>
            <p>TypeScript</p>
          </div>
          <div>
            <p>React.js</p>
          </div>
          <div>
            <p>Next.js</p>
          </div>
          <div>
            <p>MongoDB</p>
          </div>
          <div>
            <p>MySQL</p>
          </div>
          <div>
            <p>Redux</p>
          </div>
          <div>
            <p>Zustand</p>
          </div>
          <div>
            <p>Tailwind CSS</p>
          </div>
          <div>
            <p>Docker</p>
          </div>
          <div>
            <p>AWS</p>
          </div>
          <div>
            <p>Vercel</p>
          </div>
          <div>
            <p>NCP</p>
          </div>
        </div>
      </div>

      <div style={{backgroundColor:"#222"}}>
        <br/>
      </div>



      <div id="projects" className="project-container">
        <h1>PROJECTS</h1>
        <div className="project-items-wrapper">
          <div className="project-item">
            <div className='project-title'>
              <p className='text-title'>teTrips</p>
              <p className='text-date'>2024.07 - 2024.08 (4인 팀 프로젝트)</p>
            </div>
            <div className='project-content'>
              <p>여행 계획을 실시간으로 함께 편집하고 관리할 수 있는 서비스를 제공하는 것을 목표로 개발한 웹사이트</p>
              <p>주요 기능 : 회원가입, 로그인, 회원 정보 변경 / 여행 계획 동시 편집 및 실시간 채팅 / 동선 최적화 / 여행 동선 이미지 저장</p>
              <p>- CRDT알고리즘 기반의 Y.js와 y-websocket을 사용하여 실시간 동시 편집 기능 구현</p>
              <p>- NCP Maps Service를 사용하여 네이버 동적 지도 서비스 및 마커 커스텀 및 마커 정보창 서비스 제공</p>
              <p>- Naver Developers 검색 API 서비스를 사용하여 네이버 지역 검색 기능 구현</p>
              <p>- TMAP 경유지 최적화 API 서비스를 사용하여 동선 최적화 기능 구현</p>
              <p>- MongoDB Node.js Driver를 사용하여 MongoDB Atlas 서버 연결, MongoDB 쿼리를 사용하여 여행 계획 데이터 저장, 열람, 수정, 삭제 등의 기능 구현</p>
              <p>- 프론트엔드 UI 및 UX 설계 및 반응형 디자인 적용</p>
              <br/>
              <p>COMMENT</p>
              <p>Spring Boot 백엔드 서버의 부담을 덜어주고 Next.js 최신버전의 기능을 최대한 사용해보는 경험을 쌓기 위해 보안에 문제없는 데이터는 따로 Next.js 14버전(App Router)의 Server Component 및 Server Action 기능을 활용하여 데이터 CRUD 기능을 구현하였습니다.</p>
            </div>
            <div className='project-skills'>
              <div style={{backgroundColor:'#007ACC'}}>TypeScript</div>
              <div style={{backgroundColor:'#222222'}}>Next.js</div>
              <div style={{backgroundColor:'#A0522D'}}>Zustand</div>
              <div style={{backgroundColor:'#06B6D4'}}>Tailwind CSS</div>
              <div style={{backgroundColor:'#4DB33D'}}>MongoDB</div>
              <div style={{backgroundColor:'#222222'}}>Vercel</div>
            </div>
            <button
              className='project-button'
              onClick={() =>
                openModal({
                  title: 'teTrips',
                  date: '2024.07 - 2024.08 (4인 팀 프로젝트)',
                  content: `
                    여행 계획을 실시간으로 함께 편집하고 관리할 수 있는 서비스를 제공하는 것을 목표로 개발한 웹사이트
                    주요 기능 : 회원가입, 로그인, 회원 정보 변경 / 여행 계획 동시 편집 및 실시간 채팅 / 동선 최적화 / 여행 동선 이미지 저장
                    MY ROLE
                    - CRDT알고리즘 기반의 Y.js와 y-websocket을 사용하여 실시간 동시 편집 기능 구현
                    - NCP Maps Service를 사용하여 네이버 동적 지도 서비스 및 마커 커스텀 및 마커 정보창 서비스 제공
                    - Naver Developers 검색 API 서비스를 사용하여 네이버 지역 검색 기능 구현
                    - TMAP 경유지 최적화 API 서비스를 사용하여 동선 최적화 기능 구현
                    - MongoDB Node.js Driver를 사용하여 MongoDB Atlas 서버 연결, MongoDB 쿼리를 사용하여 여행 계획 데이터 저장, 열람, 수정, 삭제 등의 기능 구현
                    - 프론트엔드 UI 및 UX 설계 및 반응형 디자인 적용
                    COMMENT
                    Spring Boot 백엔드 서버의 부담을 덜어주고 Next.js 최신버전의 기능을 최대한 사용해보는 경험을 쌓기 위해 보안에 문제없는 데이터는 따로 Next.js 14버전(App Router)의 Server Component 및 Server Action 기능을 활용하여 데이터 CRUD 기능을 구현하였습니다.
                  `,
                  link: '#',
                })
              }
            >
              자세히 보기
            </button>
          </div>

          <div className="project-item">
            <div className='project-title'>
              <p className='text-title'>teTrips2</p>
              <p className='text-date'>2024.09 - 진행중 (개인 프로젝트)</p>
            </div>
            <div className='project-content'>
              <p>기존 팀 프로젝트의 Spring Boot 백엔드 서버를 사용하지 않고 Next.js로 마이그레이션하여, 확장성과 유지보수성을 높이는 것을 목표로 개발한 웹사이트</p>
              <p>주요 기능 : 소셜 로그인 / 여행 계획 동시 편집 및 실시간 채팅 / 동선 최적화 / 여행 동선 이미지 저장 / 폴더 기능</p>
              <p>- NextAuth를 사용한 소셜로그인 기능 구현, JWT 세션 전략을 사용한 인증 및 인가 관리, 경로 보호를 위한 미들웨어 기능 구현</p>
              <p>- MongoDB Node.js Driver를 사용하여 MongoDB Atlas 서버 연결, MongoDB 쿼리를 사용하여 여행 계획 및 폴더 CRUD 기능 구현</p>
              <p>- CRDT알고리즘 기반의 Y.js와 y-websocket을 사용하여 실시간 동시 편집 기능 구현</p>
              <p>- NCP Maps Service를 사용하여 네이버 동적 지도 서비스 및 마커 커스텀 및 마커 정보창 서비스 제공</p>
              <p>- Naver Developers 검색 API 서비스를 사용하여 네이버 지역 검색 기능 구현</p>
              <p>- TMAP 경유지 최적화 API 서비스를 사용하여 동선 최적화 기능 구현</p>
              <p>- 프론트엔드 UI 및 UX 설계 및 반응형 디자인 적용</p>
              <br/>
              <p>COMMENT</p>
              <p>처음으로 팀 프로젝트를 진행하게 되면서 Github를 정말 제대로 쓸 줄 알게되었고 Git-Flow 전략을 사용하기도 하고 Jira등의 협업 툴을 사용해보는 값진 경험을 할 수 있었습니다.</p>
              <p>팀 프로젝트를 마무리하고나서는 아쉬움이 많이 남는 프로젝트였어서 개인적으로 Next.js로 마이그레이션을 진행하게 되었고, 제가 개발했던 코드만을 바탕으로 필요한 기능을 추가로 개발함으로써 완성하였습니다.</p>
              <p>기존 팀 프로젝트에서 Spring Boot와 Spring Security로 구현됐던 회원가입과 보안 기능은 NextAuth를 사용한 방식으로 대체하여 구현하였고</p>
              <p>Apache Kafka를 활용한 실시간 채팅 기능은 제가 팀프로젝트를 진행할 당시 사용했던 yjs와 y-websocket을 활용하여 구현하였습니다.</p>
              <p>해당 프로젝트는 앞으로도 추가적으로 보완해가며 기능을 확대할 예정입니다.</p>
              <p>https://devceb.shop</p>
            </div>
            <div className='project-skills'>
              <div style={{backgroundColor:'#007ACC'}}>TypeScript</div>
              <div style={{backgroundColor:'#222222'}}>Next.js</div>
              <div style={{backgroundColor:'#A0522D'}}>Zustand</div>
              <div style={{backgroundColor:'#06B6D4'}}>Tailwind CSS</div>
              <div style={{backgroundColor:'#4DB33D'}}>MongoDB</div>
              <div style={{backgroundColor:'#222222'}}>Vercel</div>
            </div>
            <button
              className='project-button'
              onClick={() =>
                openModal({
                  title: 'teTrips2',
                  date: '2024.09 - 진행중 (개인 프로젝트)',
                  content: `
                    기존 팀 프로젝트의 Spring Boot 백엔드 서버를 사용하지 않고 Next.js로 마이그레이션하여, 확장성과 유지보수성을 높이는 것을 목표로 개발한 웹사이트
                    주요 기능 : 소셜 로그인 / 여행 계획 동시 편집 및 실시간 채팅 / 동선 최적화 / 여행 동선 이미지 저장 / 폴더 기능
                    - NextAuth를 사용한 소셜로그인 기능 구현, JWT 세션 전략을 사용한 인증 및 인가 관리, 경로 보호를 위한 미들웨어 기능 구현
                    - MongoDB Node.js Driver를 사용하여 MongoDB Atlas 서버 연결, MongoDB 쿼리를 사용하여 여행 계획 및 폴더 CRUD 기능 구현
                    - CRDT알고리즘 기반의 Y.js와 y-websocket을 사용하여 실시간 동시 편집 기능 구현
                    - NCP Maps Service를 사용하여 네이버 동적 지도 서비스 및 마커 커스텀 및 마커 정보창 서비스 제공
                    - Naver Developers 검색 API 서비스를 사용하여 네이버 지역 검색 기능 구현
                    - TMAP 경유지 최적화 API 서비스를 사용하여 동선 최적화 기능 구현
                    - 프론트엔드 UI 및 UX 설계 및 반응형 디자인 적용
                    COMMENT
                    처음으로 팀 프로젝트를 진행하게 되면서 Github를 정말 제대로 쓸 줄 알게되었고 Git-Flow 전략을 사용하기도 하고 Jira등의 협업 툴을 사용해보는 값진 경험을 할 수 있었습니다.
                    팀 프로젝트를 마무리하고나서는 아쉬움이 많이 남는 프로젝트였어서 개인적으로 Next.js로 마이그레이션을 진행하게 되었고, 제가 개발했던 코드만을 바탕으로 필요한 기능을 추가로 개발함으로써 완성하였습니다.
                    기존 팀 프로젝트에서 Spring Boot와 Spring Security로 구현됐던 회원가입과 보안 기능은 NextAuth를 사용한 방식으로 대체하여 구현하였고
                    Apache Kafka를 활용한 실시간 채팅 기능은 제가 팀프로젝트를 진행할 당시 사용했던 yjs와 y-websocket을 활용하여 구현하였습니다.
                    해당 프로젝트는 앞으로도 추가적으로 보완해가며 기능을 확대할 예정입니다.
                  `,
                  link: 'https://devceb.shop',
                })
              }
            >
                자세히 보기
            </button>
          </div>

          <div className="project-item">
            <div className='project-title'>
              <p className='text-title'>포트폴리오 웹사이트</p>
              <p className='text-date'>2024.10 (개인 프로젝트)</p>
            </div>
            <div className='project-content'>
              <p>나만의 포트폴리오를 위한 목적으로 개발한 프론트엔드 포트폴리오 웹사이트</p>
              <p>- 최신 빌드 도구(Vite)와 최적화된 번들링</p>
              <p>- 화면 비율에 따른 반응형 디자인 적용</p>
              <p>- 모듈화된 컴포넌트 설계</p>
              <p>- 사용자 경험을 고려한 부드러운 스크롤</p>
              <p>- 동적 데이터 흐름 관리</p>
            </div>
            <div className='project-skills'>
              <div style={{backgroundColor:'#007ACC'}}>TypeScript</div>
              <div style={{backgroundColor:'#61DAFB'}}>React.js</div>
              <div style={{backgroundColor:'#646CFF'}}>Vite</div>
            </div>
            <button
              className='project-button'
              onClick={() =>
                openModal({
                  title: '포트폴리오 웹사이트',
                  date: '2024.10 (개인 프로젝트)',
                  content: `
                    나만의 포트폴리오를 위한 목적으로 개발한 프론트엔드 포트폴리오 웹사이트
                    - 최신 빌드 도구(Vite)와 최적화된 번들링
                    - 화면 비율에 따른 반응형 디자인 적용
                    - 모듈화된 컴포넌트 설계
                    - 사용자 경험을 고려한 부드러운 스크롤
                    - 동적 데이터 흐름 관리
                  `,
                  link: 'https://chldmsqls34.github.io',
                })
              }
            >
                자세히 보기
            </button>
          </div>

          <div className="project-item">
            <div className='project-title'>
              <p className='text-title'>커뮤니티 웹사이트</p>
              <p className='text-date'>2024.05 (개인 프로젝트)</p>
            </div>
            <div className='project-content'>
              <p>Next.js 최신 버전에 대한 학습 목적으로 개발한 간단한 커뮤니티 웹사이트</p>
              <p>주요 기능 : 소셜 로그인 / 게시글 저장, 열람, 수정, 삭제 / 최신 게시글 확인 및 게시글 검색</p>
              <p>- Server Component를 적극적으로 활용하여 데이터 가져오는 방식 최적화</p>
              <p>- Server Action기능을 사용하여 게시글 저장, 수정, 삭제 기능 구현</p>
              <p>- NextAuth를 사용한 소셜로그인 기능 구현, 경로 보호를 위한 미들웨어 기능 구현</p>
              <p>- MongoDB Node.js Driver를 사용하여 MongoDB Atlas 서버 연결, MongoDB 쿼리를 사용하여 게시글 데이터 CRUD 기능 구현</p>
              <br/>
              <p>COMMENT</p>
              <p>당시에 Next.js 최신 버전을 학습하기 위해서 공식문서에 게시된 Learn과정을 따라가다보니</p>
              <p>원래 알고있던 SSR,CSR,ISR,SSG 등의 기존 렌더링 방식에서 더 나아가 새롭게 소개되는 Server Component와 Client Component의 렌더링 방식의 차이에 대해 확실하게 알 수 있게 되었고,</p>
              <p>학습과정에서 소개하는 PostgreSQL이 아니라 개인적으로 MongoDB를 사용하면서 과정에 소개된 SQL언어로 작성된 쿼리와 동일한 기능을 하는 MongoDB쿼리를 직접 작성해보면서 비교해 볼 수 있었습니다.</p>
              <p>이러한 과정에서 크게 흥미를 느끼게 되면서, 학습한 내용을 혼자서 적용해보기 위하여 Next.js 14버전 이상의 App Router 기능들을 최대한 활용해보며 만들게 된 프로젝트입니다.</p>
            </div>
            <div className='project-skills'>
              <div style={{backgroundColor:'#007ACC'}}>TypeScript</div>
              <div style={{backgroundColor:'#222222'}}>Next.js</div>
              <div style={{backgroundColor:'#06B6D4'}}>Tailwind CSS</div>
              <div style={{backgroundColor:'#4DB33D'}}>MongoDB</div>
              <div style={{backgroundColor:'#222222'}}>Vercel</div>
            </div>
            <button
              className='project-button'
              onClick={() =>
                openModal({
                  title: '커뮤니티 웹사이트',
                  date: '2024.05 (개인 프로젝트)',
                  content: `
                    Next.js 최신 버전에 대한 학습 목적으로 개발한 간단한 커뮤니티 웹사이트
                    주요 기능 : 소셜 로그인 / 게시글 저장, 열람, 수정, 삭제 / 최신 게시글 확인 및 게시글 검색
                    - Server Component를 적극적으로 활용하여 데이터 가져오는 방식 최적화
                    - Server Action기능을 사용하여 게시글 저장, 수정, 삭제 기능 구현
                    - NextAuth를 사용한 소셜로그인 기능 구현, 경로 보호를 위한 미들웨어 기능 구현
                    - MongoDB Node.js Driver를 사용하여 MongoDB Atlas 서버 연결, MongoDB 쿼리를 사용하여 게시글 데이터 CRUD 기능 구현
                    COMMENT
                    당시에 Next.js 최신 버전을 학습하기 위해서 공식문서에 게시된 Learn과정을 따라가다보니
                    원래 알고있던 SSR,CSR,ISR,SSG 등의 기존 렌더링 방식에서 더 나아가 새롭게 소개되는 Server Component와 Client Component의 렌더링 방식의 차이에 대해 확실하게 알 수 있게 되었고,
                    학습과정에서 소개하는 PostgreSQL이 아니라 개인적으로 MongoDB를 사용하면서 과정에 소개된 SQL언어로 작성된 쿼리와 동일한 기능을 하는 MongoDB쿼리를 직접 작성해보면서 비교해 볼 수 있었습니다.
                    이러한 과정에서 크게 흥미를 느끼게 되면서, 학습한 내용을 혼자서 적용해보기 위하여 Next.js 14버전 이상의 App Router 기능들을 최대한 활용해보며 만들게 된 프로젝트입니다.
                  `,
                  link: '#',
                })
              }
            >
                자세히 보기
            </button>
          </div>

        </div>
        {isModalOpen && <Modal {...modalData} closeModal={closeModal} />}
      </div>




      <p className="read-the-docs" style={{margin:"50px"}}>
        2024 Choi Eun Bin FE Portfolio
      </p>

    </div>
  )
}

export default App
