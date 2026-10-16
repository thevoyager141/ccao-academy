/* PART 01: 제품 기능·모델 선택 (D3, 12%) */
window.CCAO.p1 = { id:"p1", lessons:[

  /* ================= CH 1 · 3.1 작업 진입점 선택 ================= */
  { id:"p1c1", ch:"CH 1", obj:"3.1", title:"작업 진입점 선택: Chat·Projects·Artifacts·Research", steps:[
    {type:"concept", kind:"PART BRIEFING · 파트 설명", h:"PART 01. 제품 기능·모델 선택",
     html:`<p class="lead">PART 01은 프롬프트를 쓰기 전에 내리는 선택을 다룸. 어떤 기능으로 시작할지, 어떤 모델을 쓸지, 긴 대화를 어떻게 관리할지가 범위임.</p>
      <h4>파트 프로필</h4>
      <div class="tbl"><table>
        <tr><th>항목</th><th>내용</th></tr>
        <tr><td>출제 영역</td><td>D3 Product and Model Selection (제품 기능·모델 선택)</td></tr>
        <tr><td>출제 비중</td><td>12% · 60문항 중 약 7문항</td></tr>
        <tr><td>챕터 구성</td><td>4개 챕터. 공식 출제 목표 3.1~3.4에 하나씩 대응함</td></tr>
        <tr><td>미니테스트</td><td>8문항 (목표별 기초 1문항, 실전 1문항)</td></tr>
      </table></div>
      <h4>다루는 범위</h4>
      <ul>
        <li><b>CH 1 · 3.1 작업 진입점 선택</b>: Chat, Projects, Artifacts, Research 중 일의 성격에 맞는 시작 방식을 고르는 판단</li>
        <li><b>CH 2 · 3.2 모델 등급 구분</b>: Haiku, Sonnet, Opus 각 등급의 성격과 맞는 업무</li>
        <li><b>CH 3 · 3.3 요구 조건별 모델 배정</b>: 비용·속도·품질 조건을 읽고 등급을 정하는 판단</li>
        <li><b>CH 4 · 3.4 컨텍스트 한도와 Memory 관리</b>: 긴 대화에서 새로 시작할지, 요약해 이어갈지, 저장할지 정하는 판단</li>
      </ul>
      <h4>출제 형태</h4>
      <ul>
        <li>지문은 담당자의 역할, 처리할 일, 조건을 짧게 제시함. 조건은 반복 여부, 처리 분량, 마감, 결과물을 읽는 사람, 최신 정보 필요 여부, 대화 길이 등임</li>
        <li>질문은 "Which feature BEST fits?", "Which model choice is MOST appropriate?", "What should the manager do FIRST?" 형태가 많음</li>
        <li>오답 선택지는 대개 세 종류임: 항상 가장 강력한 모델 쓰기, 일과 무관한 기능 켜기, 품질이 떨어진 대화 안에서 지시 반복하기</li>
        <li>공식 가이드 샘플 2(대량 고객 답장 초안의 모델 선택)가 이 영역 문항임. 정답은 빠르고 비용이 낮은 모델이었음</li>
      </ul>
      <h4>연계</h4>
      <ul>
        <li>공식 Prep Course 모듈 1(Claude Platform &amp; Model Foundations)이 이 영역을 다룸</li>
        <li>모듈 1은 프롬프트 작성 전에 정하는 네 가지를 다룸: 진입점(entry point), 기능 층(capability layer), 모델, 컨텍스트 관리 방식</li>
        <li>이 네 가지 선택이 결과물 품질의 상한을 정함. 이후 모듈은 이 선택을 할 줄 안다는 전제로 진행됨</li>
        <li>업무 처리 흐름 지도에서는 첫 단계인 ① 도구·모델 선택에 해당함. CH 1은 기능 칸, CH 2·3은 모델 칸, CH 4는 컨텍스트 칸임</li>
      </ul>
      __MAP:pick__`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"4가지 진입점: Chat·Projects·Artifacts·Research",
     html:`<p class="lead">진입점은 Claude로 일을 시작하는 방식임. 같은 요청이라도 어느 진입점에서 시작하느냐에 따라 매번 처음부터 설명할지, 갖춰진 설정 위에서 시작할지가 정해짐.</p>
      <div class="callout term"><b>용어 카드</b> · <b>진입점</b>: 작업을 시작하는 방식. 공식 강좌는 Chat, Projects, Artifacts, Research 4가지로 나눔.</div>

      <h4>Chat</h4>
      <div class="callout term"><b>용어 카드</b> · <b>Chat</b>: 별도 설정 없이 질문하고 답을 받는 기본 대화 화면.</div>
      <ul>
        <li>정체: 가장 기본적인 대화 화면임. 대화는 이력에 저장되어 나중에 이어서 쓸 수 있음</li>
        <li>Memory(대화가 바뀌어도 업무 관련 사실을 이어 주는 기능, CH 4에서 다룸)와 지난 대화 검색(past-chat search)이 핵심 맥락 일부를 새 대화로 옮겨 줄 수 있음</li>
        <li>한계: 모든 대화에 적용되는 상시 지시문과 정리된 참고 자료 묶음이 없음</li>
        <li>언제: 일회성 질문, 빠른 초안, 아이디어 탐색처럼 그 대화에서 시작하고 마무리되는 일</li>
      </ul>
      <div class="sample"><span class="sl">예시 · Chat에 맞는 요청</span>다음 주 금요일 팀 워크숍 장소 변경 공지 문구를 3가지 버전으로 작성할 것. 각 버전은 두 문장 이내로 할 것.</div>

      <h4>Projects</h4>
      <div class="callout term"><b>용어 카드</b> · <b>Projects</b>: 반복 업무를 위한 지속 작업 공간. 프로젝트 지시문(Project instructions), 지식 베이스(knowledge base), Project 전용 대화 목록 세 가지를 담음.</div>
      <ul>
        <li>프로젝트 지시문: Project 안의 모든 대화에 똑같이 적용되는 지시. 어조, 기본 형식, 검토 습관 등을 적음</li>
        <li>지식 베이스: 한 번 올려 두면 대화마다 다시 올리지 않아도 참조되는 문서 모음. 정책, 브랜드 가이드, 지난 보고서 등</li>
        <li>대화 목록: 전체 이력과 분리된 Project 전용 목록</li>
        <li>같은 Project 안의 대화들은 지시문과 지식 베이스를 공유함. 서로의 대화 내용은 공유하지 않음</li>
        <li>언제: 같은 일이 반복되고, 매번 같은 배경 설명이 필요하고, 결과 형식이 일정할 때</li>
        <li>신호: 지난주에 붙여넣은 배경 문단을 이번 주에 또 붙여넣고 있다면 그 일은 Chat의 범위를 지난 상태임</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 주간 SNS 성과 보고 Project 구성</span>[프로젝트 지시문]
- 독자는 마케팅 본부장임. 결론과 다음 주 조치를 먼저 쓸 것.
- 표는 채널 / 도달 / 참여율 / 전주 대비 4열로 구성할 것.
- 원자료에 없는 수치는 쓰지 말고 "자료 없음"으로 표시할 것.

[지식 베이스]
- 2026 브랜드 톤 가이드.pdf
- 채널별 KPI 정의서.docx
- 지난 4주 보고서 사본</div>

      <h4>Artifacts</h4>
      <div class="callout term"><b>용어 카드</b> · <b>Artifacts(아티팩트)</b>: 대화 흐름과 분리되어 옆에 따로 표시되는 편집 가능한 결과물 블록.</div>
      <ul>
        <li>정체: 대화 답변 사이에 섞이지 않고 별도 블록으로 나오는 결과물임. 이 블록을 보며 수정을 요청하고 다듬을 수 있음</li>
        <li>언제: 받는 사람이 열어서 읽을 산출물. 문서 초안, 데이터 표, 서식을 갖춘 보고서, 코드 등</li>
        <li>대화 안에서 읽고 바로 쓰고 마칠 답은 인라인 응답(inline response)으로 충분함</li>
        <li>코드를 직접 쓰지 않고 대화로 요청을 반복해 팀 내부용 대시보드 같은 작동하는 도구도 만들 수 있음</li>
      </ul>
      <div class="sample"><span class="sl">예시 · Artifact로 받을 요청</span>첨부한 신제품 사양서를 바탕으로 보도자료 초안을 별도 문서로 작성할 것. 제목, 리드 문단, 본문 3문단, 회사 소개 순서로 구성할 것. 홍보팀이 이 문서를 직접 수정해 배포할 예정임.</div>

      <h4>Research</h4>
      <div class="callout term"><b>용어 카드</b> · <b>Research(리서치 모드)</b>: 여러 출처를 여러 단계에 걸쳐 검색한 뒤 결과를 종합하는 기능. 유료 플랜에서 사용 가능.</div>
      <ul>
        <li>정체: 한 번 검색하고 답하는 방식과 달리, 검색과 종합을 여러 단계 반복해 하나의 조사 결과로 묶음</li>
        <li>언제: 여러 출처를 깊이 조사하고 비교·종합해야 하는 일. 특히 최근 정보가 필요한 일</li>
        <li>간단한 최신 정보 확인은 Chat에서 웹 검색을 켜는 것으로 충분함</li>
      </ul>
      <div class="callout term"><b>용어 카드</b> · <b>웹 검색</b>: Chat 입력창에서 대화별로 켜고 끄는 검색 기능. 모든 플랜에서 쓸 수 있음. Team·Enterprise 플랜에서는 조직 관리자(Owner 또는 Primary Owner)가 먼저 켜야 멤버가 쓸 수 있음.</div>
      <div class="callout term"><b>용어 카드</b> · <b>학습 기준 시점(training cutoff)</b>: Claude가 학습한 데이터의 기준 시점. 이 시점 이후 정보는 웹 검색, Research, 연결된 최신 자료 없이는 신뢰할 수 없음.</div>
      <div class="sample good"><span class="sl">예시 · Research에 맞는 요청</span>최근 90일 동안 국내 커피 프랜차이즈 3곳의 멤버십 혜택 변경 내용을 조사할 것. 보도자료, 기사, 공식 앱 공지를 함께 확인할 것. 브랜드별 변경 사항을 표로 비교하고 항목마다 출처를 붙일 것.</div>
      <div class="sample"><span class="sl">예시 · 웹 검색으로 충분한 요청</span>오늘 발표된 서울시 공공자전거 요금 개편 내용을 확인해 세 줄로 요약할 것.</div>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"기능 층과 Project 구축 판단",
     html:`<p class="lead">진입점이 일을 시작하는 곳이라면, 기능 층은 그 안에서 Claude가 할 수 있는 일을 넓히는 기능임. 진입점과 함께 일의 성격에 맞춰 조합함.</p>
      <div class="callout term"><b>용어 카드</b> · <b>기능 층</b>: 진입점 안에서 Claude의 작업 범위를 넓히는 기능들. 공식 강좌는 Projects, Skills, Code Execution(코드 실행), Memory 4개 층으로 설명함.</div>
      <div class="tbl"><table>
        <tr><th>층</th><th>담당</th><th>업무 예시</th></tr>
        <tr><td>Projects</td><td>맥락: 지시문과 참고 문서를 매 대화에 적용함</td><td>매주 같은 기준으로 쓰는 경쟁사 동향 보고</td></tr>
        <tr><td>Skills</td><td>절차: 특정 유형의 일을 정해진 단계대로 수행하게 함</td><td>회사 템플릿에 맞춘 PowerPoint 보고서 서식화</td></tr>
        <tr><td>Code Execution</td><td>계산 검증: 계산을 실제로 실행해 값을 냄</td><td>캠페인별 전환율과 전월 대비 증감 계산</td></tr>
        <tr><td>Memory</td><td>연속성: 대화가 바뀌어도 업무 관련 사실을 이어 줌</td><td>보고 대상 임원 이름, 선호하는 보고 형식</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>네 층은 서로 독립적임. 일회성 질문에는 하나도 필요 없고, 반복 분석 업무에는 넷 다 쓸 수 있음.</p>
      <div class="callout term"><b>용어 카드</b> · <b>Skills</b>: 특정 유형의 일을 정해진 절차대로 수행하게 하는 재사용 절차. 특정 Project가 아닌 계정 수준에 있음. 관련 있는 대화라면 Project 안팎 어디서든 Claude가 자동으로 불러 씀. 설정 방법은 PART 05에서 다룸.</div>
      <div class="callout term"><b>용어 카드</b> · <b>Code Execution</b>: Claude가 내부에서 코드를 작성하고 실행해 결과를 돌려주는 계산 환경. 사용자는 코드를 쓸 필요가 없음. 차트와 실제로 내려받을 수 있는 파일(.xlsx, .pptx, .docx, .pdf)도 만듦.</div>
      <ul>
        <li>필요한 이유: 일반 텍스트 생성은 가장 그럴듯한 다음 글을 만드는 방식임. 숫자도 그럴듯하게만 나올 수 있음</li>
        <li>Code Execution은 계산을 실제로 실행하므로 검증된 값을 냄</li>
        <li>언제: 보고에 쓰일 수치(합계, 증감률, 전망), 데이터 정리(날짜 형식 통일, 중복 제거), 차트, 실제 파일 생성</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 계산을 글로만 받는 요청</span>첨부한 3개월 광고비와 매출 자료를 보고 채널별 ROAS를 알려 줄 것.</div>
      <div class="sample good"><span class="sl">예시 · 계산 실행을 지정한 요청</span>첨부한 3개월 광고비와 매출 자료로 채널별 ROAS를 계산할 것. 계산은 코드 실행으로 처리하고, 계산식과 결과 표를 함께 보여 줄 것.</div>

      <h4>Project 구축 여부 판단</h4>
      <p>공식 강좌는 Project를 만들지 정하는 세 가지 질문을 제시함.</p>
      <ol>
        <li>이 일이 반복되는가?</li>
        <li>배경 설명이 매번 같은가?</li>
        <li>결과 형식이 일정한가?</li>
      </ol>
      <ul>
        <li>두 개 이상이 "예"이면 Project를 만듦. 설정에 드는 시간은 보통 2~3번의 대화 안에 회수됨</li>
        <li>하나도 해당하지 않는 일회성 업무는 Chat으로 충분함</li>
      </ul>
      <div class="callout term"><b>용어 카드</b> · <b>설정 비용(setup tax)</b>: 대화마다 같은 배경을 다시 입력하느라 드는 시간. 공식 강좌 사례를 요약한 개념임.</div>
      <div class="sample bad"><span class="sl">예시 · 매주 새 Chat으로 주간 보고 작성</span>월요일마다 새 대화를 열고 회사 소개, 보고 양식, 지난주 결정 사항을 붙여넣은 뒤 초안을 요청함.
작업 40분 중 약 12분이 배경 입력과 재설명에 쓰임.</div>
      <div class="sample good"><span class="sl">예시 · 같은 일을 Project로 전환</span>양식과 기준 문서는 Project에 한 번 넣어 둠. 월요일에는 이번 주 자료만 올리고 초안을 요청함.
같은 품질의 보고를 약 25분에 마침.</div>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"일의 성격별 진입점·기능 선택 기준",
     html:`__MAP:feat__
      <p class="lead">진입점과 기능 층은 일의 조건을 보고 고름. 아래 표는 공식 강좌의 판단 기준과 연습 문제 유형을 정리한 것임.</p>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>한 번 묻고 마칠 질문, 빠른 초안, 아이디어 탐색</td><td>Chat</td><td>그 대화 안에서 시작하고 마무리되는 일임. 추가 기능 층이 필요 없음</td></tr>
        <tr><td>매주 같은 배경을 붙여넣으며 같은 형식의 결과를 만듦</td><td>Projects</td><td>지시문과 지식 베이스를 한 번 설정하면 모든 대화가 그 상태에서 시작함</td></tr>
        <tr><td>받는 사람이 열어 읽고 수정할 문서·표·보고서</td><td>Artifacts</td><td>대화와 분리된 편집 가능한 블록이라 다듬고 재사용하기 쉬움</td></tr>
        <tr><td>대화 안에서 바로 읽고 쓰고 마칠 답</td><td>인라인 응답</td><td>별도 블록을 만들 이유가 없음</td></tr>
        <tr><td>최근 90일 경쟁사 동향처럼 학습 기준 시점 이후의 여러 출처를 묶어야 함</td><td>Research</td><td>여러 단계의 검색과 종합이 필요함</td></tr>
        <tr><td>오늘 발표된 내용 하나를 빠르게 확인</td><td>Chat + 웹 검색</td><td>가벼운 최신 확인에는 웹 검색으로 충분함</td></tr>
        <tr><td>보고에 쓰일 수치 계산, 데이터 정리, 차트, 실제 파일</td><td>Code Execution</td><td>그럴듯한 숫자 대신 실행된 계산값을 얻음</td></tr>
        <tr><td>정해진 템플릿을 오랫동안 반복 사용</td><td>Projects + Skills</td><td>배경은 Project가, 서식 절차는 Skill이 담당함</td></tr>
        <tr><td>반복 + 검증된 수치 + 일정한 형식(예: 월간 성과 보고)</td><td>Projects + Code Execution + Skills</td><td>맥락, 계산, 절차를 각각 맡는 층을 조합함</td></tr>
        <tr><td>해석이 필요한 여러 문서로 만드는 고위험 산출물</td><td>지식 베이스 + Artifacts + Opus</td><td>자료는 지식 베이스에, 결과물은 편집 블록으로, 해석은 가장 역량 높은 모델로 처리함</td></tr>
        <tr><td>한 번 보내고 마칠 짧은 답장</td><td>Chat</td><td>기능 층을 더할 이유가 없음</td></tr>
      </table></div>
      <h4>선택 순서</h4>
      <div class="flow">
        <span class="nd">① 반복되는가<small>예 → Projects</small></span><span class="ar">→</span>
        <span class="nd">② 최신·다출처 정보가 필요한가<small>깊은 조사 → Research<br>가벼운 확인 → 웹 검색</small></span><span class="ar">→</span>
        <span class="nd">③ 정확한 수치가 필요한가<small>예 → Code Execution</small></span><span class="ar">→</span>
        <span class="nd hot">④ 결과물의 형태<small>따로 열어 읽을 산출물 → Artifacts</small></span>
      </div>
      <p class="howto"><b>읽는 법</b>화살표 = 확인하는 순서. 각 칸의 질문에 해당하면 아래 작은 글씨의 기능을 더함. 어느 칸에도 해당하지 않으면 Chat 하나로 충분함.</p>
      <div class="callout">시험 포인트 · 지문에서 반복 여부, 결과물의 용도, 정보의 최신성, 수치 정확성 네 가지 조건을 먼저 찾을 것. 정답은 이 조건에 맞는 기능을 조합한 선택지임. 가장 많은 기능을 켠 선택지가 정답인 것은 아님.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>익숙한 기능 한두 개로 모든 일을 같은 방식으로 처리하기. 반복 업무, 팀 공동 작업, 검토받을 산출물에는 부족함</li>
        <li>매주 새 Chat을 열고 같은 배경을 다시 입력하기. Project로 옮겨야 할 신호임</li>
        <li>보고용 수치를 일반 답변으로 계산시키기. 그럴듯하지만 틀린 숫자가 나올 수 있음</li>
        <li>최근 시장 동향을 Claude의 기존 지식만으로 답하게 하기. 학습 기준 시점 이후 정보는 신뢰할 수 없음</li>
        <li>간단한 최신 확인에 Research를 쓰거나, 깊은 다출처 조사를 웹 검색 한 번으로 마치기</li>
        <li>한 번 쓰고 마칠 일에 Project를 새로 만들기. 설정 시간을 회수할 기회가 없음</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Monthly onboarding guide", ts:"3.1",
     q:`An HR coordinator at a mid-sized logistics company updates the new-hire onboarding guide every month. Each time, she opens a new conversation and pastes the same leave policy summary, the company tone guide, and an example of last month's guide before asking for the update. The output format never changes. Which approach BEST improves this workflow?`,
     ko:`중견 물류 회사의 HR 코디네이터가 매달 신규 입사자 온보딩 안내서를 갱신함. 매번 새 대화를 열고, 같은 휴가 정책 요약과 회사 어조 가이드, 지난달 안내서 예시를 붙여넣은 뒤 갱신을 요청함. 결과 형식은 한 번도 바뀌지 않음. 이 업무 방식을 가장 잘 개선하는 방법은 무엇인가?`,
     opts:[
       {t:`Set up a dedicated workspace that holds the policy, tone guide, and format rules, so each monthly conversation starts with them.`, ko:`정책, 어조 가이드, 형식 규칙을 담아 두는 전용 작업 공간을 만들어 매달 대화가 그 상태에서 시작되게 하기`, ok:true},
       {t:`Keep the three reference texts together in one saved file and paste that file at the start of every new monthly conversation.`, ko:`세 가지 참고 문서를 한 파일로 저장해 두고 매달 새 대화를 시작할 때 그 파일을 붙여넣기`},
       {t:`Switch to the most capable model, since a stronger model will remember the policy and tone guide from earlier months.`, ko:`더 강한 모델은 지난달의 정책과 어조 가이드를 기억하므로 가장 역량 높은 모델로 바꾸기`},
       {t:`Turn on the multi-step research feature so that Claude gathers the latest leave policy details from several outside sources every month.`, ko:`Claude가 매달 여러 외부 출처에서 최신 휴가 정책 내용을 모으도록 다단계 조사 기능 켜기`}
     ],
     hint:`매달 반복되는 수고가 무엇인지 먼저 찾을 것. 각 선택지가 그 수고를 없애는지, 형태만 바꿔 남겨 두는지 비교할 것.`,
     explain:{good:`반복 업무이고, 배경 자료가 매번 같고, 형식도 일정함. Project 구축 판단의 세 질문에 모두 해당함. 지시문과 지식 베이스에 한 번 넣어 두면 매달 대화가 그 상태에서 시작되어 붙여넣기 시간이 사라짐.`,
       wrongs:[`<b>B:</b> 파일로 정리해도 매번 붙여넣는 작업은 그대로 남음. 반복 입력 자체를 없애는 방법이 되지 못함.`,
               `<b>C:</b> 모델 등급을 올려도 이전 대화의 자료가 새 대화로 옮겨지지 않음. 등급은 대화 사이의 연속성과 관계가 없음.`,
               `<b>D:</b> 휴가 정책은 회사 내부 자료라서 외부 조사로 얻을 정보가 아님. 이 업무의 문제는 반복 입력임.`]},
     principle:"원칙 ④ 반복 맥락의 설정화",
     why:{q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`반복되는 업무, 매번 같은 배경 자료, 일정한 형식이라는 세 조건이 모두 갖춰짐`, ok:true},
         {t:`Projects가 공식 강좌에서 가장 먼저 소개되는 기능이라서`},
         {t:`정책 문서는 매달 외부 출처로 다시 조사해야 정확해서`},
         {t:`높은 등급의 모델일수록 이전 대화를 더 잘 기억해서`}
       ],
       explain:`Project 구축 여부는 반복, 같은 배경, 일정한 형식 세 질문으로 판단함. 두 개 이상 해당하면 설정 시간이 몇 번의 대화 안에 회수됨.`}},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Competitor membership briefing", ts:"3.1",
     q:`A marketing manager at a cosmetics brand must brief the strategy team next week on how three competing brands changed their membership programs over the last two months. The briefing needs to draw on news articles, company announcements, and app notices, and each claim should show where it came from. Which approach is MOST appropriate?`,
     ko:`화장품 브랜드의 마케팅 매니저가 다음 주 전략팀에 경쟁 브랜드 3곳이 지난 두 달 동안 멤버십 프로그램을 어떻게 바꿨는지 보고해야 함. 보고 내용은 뉴스 기사, 회사 발표, 앱 공지를 근거로 해야 하고, 각 주장에는 출처가 표시되어야 함. 가장 적절한 방법은 무엇인가?`,
     opts:[
       {t:`Use the research mode to search several sources in steps and combine the findings, with sources attached to each point.`, ko:`리서치 모드로 여러 출처를 단계적으로 검색해 결과를 종합하고 항목마다 출처를 붙이기`, ok:true},
       {t:`Ask in a regular chat and rely on Claude's existing knowledge of the beauty market, then check the summary for tone.`, ko:`일반 대화에서 질문하고 뷰티 시장에 대한 Claude의 기존 지식에 의존한 뒤 요약의 어조를 점검하기`},
       {t:`Turn on web search in a chat and ask one quick question about each brand, then paste the three answers together.`, ko:`대화에서 웹 검색을 켜고 브랜드마다 짧은 질문을 하나씩 한 뒤 세 답을 이어 붙이기`},
       {t:`Request the comparison as a separate editable document block so the strategy team can revise the table directly.`, ko:`전략팀이 표를 직접 수정할 수 있도록 비교 결과를 별도의 편집 가능한 문서 블록으로 요청하기`}
     ],
     hint:`필요한 정보가 언제의 정보인지, 몇 종류의 출처를 묶어야 하는지 확인할 것. 결과를 어떤 모양으로 받을지는 그다음 문제임.`,
     explain:{good:`지난 두 달의 정보는 학습 기준 시점 이후일 수 있어 Claude의 기존 지식으로는 신뢰할 수 없음. 여러 종류의 출처를 비교·종합하고 출처를 남겨야 하므로 다단계 검색과 종합을 하는 Research가 맞음.`,
       wrongs:[`<b>B:</b> 최근 두 달의 변화는 학습 기준 시점 이후 정보일 수 있음. 어조를 점검해도 내용의 최신성과 정확성은 확인되지 않음.`,
               `<b>C:</b> 웹 검색은 가벼운 최신 확인에 맞음. 짧은 답 세 개를 이어 붙이면 브랜드 간 비교와 종합이 빠지고 근거도 얕아짐.`,
               `<b>D:</b> 결과물의 형태를 정하는 선택일 뿐, 최신 다출처 정보를 모으는 문제는 해결하지 못함. 형태는 조사 이후에 정해도 됨.`]},
     principle:"원칙 ③ 요구에 맞는 선택"}
  ]},

  /* ================= CH 2 · 3.2 모델 등급 구분 ================= */
  { id:"p1c2", ch:"CH 2", obj:"3.2", title:"모델 등급 구분: Haiku·Sonnet·Opus", steps:[
    {type:"concept", kind:"CONCEPT · 개념 설명", h:"모델 등급의 정체와 세 등급의 성격",
     html:`<p class="lead">Claude는 성격이 다른 여러 모델 등급으로 제공됨. 대화마다 어떤 등급을 쓸지 고를 수 있음.</p>
      <div class="callout term"><b>용어 카드</b> · <b>모델 등급(model tier)</b>: 속도·효율과 철저함·역량의 균형을 다르게 맞춘 Claude 모델의 단계. 빠르고 효율적인 Haiku에서 철저하고 역량이 높은 Opus까지 이어짐.</div>
      <ul>
        <li>정체: 대화 화면의 모델 선택기(model selector)에서 고르는 설정값임</li>
        <li>선택기에 보이는 모델 구성, 기본 모델, 자동 전환 방식은 플랜과 시기에 따라 다름. 실제 제품 화면에서 확인할 것</li>
        <li>시험은 Haiku, Sonnet, Opus 3등급 틀을 기준으로 출제됨. 공식 강좌는 Opus보다 위 등급이 추가로 출시된 사실을 참고로만 언급하고 시험 범위에서 제외함</li>
        <li>등급을 고르는 목적: 일상 업무에 과한 자원을 쓰는 일과 고위험 분석에 부족한 자원을 쓰는 일을 함께 피하는 것</li>
      </ul>
      <div class="flow">
        <span class="nd">Haiku<small>빠름 · 효율적</small></span><span class="ar">↔</span>
        <span class="nd">Sonnet<small>균형 · 기본 출발점</small></span><span class="ar">↔</span>
        <span class="nd">Opus<small>가장 철저함 · 느림</small></span>
      </div>
      <p class="howto"><b>읽는 법</b>화살표 = 하나로 이어진 범위. 왼쪽일수록 빠르고 효율적임. 오른쪽일수록 복잡한 판단에 강하지만 느리고 호출당 사용량이 많음.</p>

      <h4>Haiku</h4>
      <div class="callout term"><b>용어 카드</b> · <b>Haiku</b>: 가장 빠르고 효율적인 등급. 구조가 분명한 일을 대량으로 처리할 때 씀.</div>
      <ul>
        <li>맞는 일: 정해진 기준에 따른 분류, 정해진 항목 추출, 짧은 정형 문구 생성</li>
        <li>조건: 결과가 조금 불완전해도 비용이 크지 않음. 나중에 쉽게 고칠 수 있음</li>
        <li>이유: 한 건당 속도 차이는 작아도 수백 건을 처리하면 차이가 누적됨</li>
      </ul>
      <div class="sample"><span class="sl">예시 · Haiku에 맞는 일</span>고객 문의 1,200건을 "배송 / 교환·환불 / 제품 사용법 / 기타" 4개 범주 중 하나로 분류할 것. 범주 정의는 첨부한 기준표를 따를 것. 결과는 문의 번호와 범주 2열 표로 낼 것.</div>

      <h4>Sonnet</h4>
      <div class="callout term"><b>용어 카드</b> · <b>Sonnet</b>: 속도와 역량의 균형을 맞춘 중간 등급. 대부분의 업무에서 기본 출발점으로 씀.</div>
      <ul>
        <li>맞는 일: 초안 작성, 여러 자료 종합, 일반적인 분석, 문서 검토</li>
        <li>조정: 복잡한 일에서 품질이 부족하면 Opus로 올림. 구조가 분명하고 속도·분량이 중요하면 Haiku로 내림</li>
      </ul>
      <div class="sample"><span class="sl">예시 · Sonnet에 맞는 일</span>첨부한 3개 팀의 주간 회의록을 읽고 본부 주간 보고 초안을 작성할 것. 팀별 진행 상황, 이번 주 결정 사항, 지원 요청 순서로 정리할 것.</div>

      <h4>Opus</h4>
      <div class="callout term"><b>용어 카드</b> · <b>Opus</b>: 가장 철저하고 역량이 높은 등급. 미묘한 판단과 복잡한 추론이 필요한 일에 씀. 대신 응답이 느림.</div>
      <ul>
        <li>맞는 일: 미묘한 판단, 여러 단계의 복잡한 추론, 해석이 필요한 모호한 입력</li>
        <li>품질이 속도보다 중요한 일: 고객에게 내는 산출물, 복잡한 문서 분석, 전략 기획, 여러 출처를 묶는 고위험 종합</li>
        <li>대가: 응답이 느림. 사용량 과금 환경에서는 호출당 사용량이 커서 비용도 큼</li>
      </ul>
      <div class="sample"><span class="sl">예시 · Opus에 맞는 일</span>첨부한 고객 인터뷰 20건, 3분기 이탈률 자료, 영업팀 메모를 함께 검토할 것. 자료 간 불일치 지점을 찾고, 내년 고객 유지 전략 방향 2가지를 근거와 함께 제안할 것. 이 결과는 경영진 회의 자료로 쓰임.</div>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"모델 등급으로 해결되는 문제와 해결되지 않는 문제",
     html:`<p class="lead">등급을 올리면 판단의 깊이와 해석력이 좋아짐. 그러나 모든 품질 문제가 모델 등급에서 오지는 않음. 생성형 AI가 공통으로 보이는 행동 특성은 어느 등급에서나 남음.</p>
      <h4>등급과 무관하게 남는 생성형 AI의 행동 특성</h4>
      <ol>
        <li>응답이 매번 달라짐: 확률적으로 만들어지므로 같은 질문에도 다른 답이 나옴. 일관성이 필요한 일에는 검토 단계를 둠</li>
        <li>확신 있는 어조와 정확성은 별개임: 틀린 수치도 맞는 수치와 똑같이 매끄럽게 씀</li>
        <li>컨텍스트에는 한도가 있음: 대화가 길어지면 앞부분이 압축됨(CH 4에서 다룸)</li>
        <li>지식에는 학습 기준 시점이 있음: 이후 정보에는 웹 검색, Research, 연결된 자료가 필요함</li>
        <li>설정된 절차도 결과가 달라짐: Skill은 변동을 줄이지만 없애지 못함. 검토는 계속 필요함</li>
      </ol>
      <div class="tbl"><table>
        <tr><th>증상</th><th>등급 변경으로 해결되는가</th><th>맞는 조치</th></tr>
        <tr><td>깊이가 필요한 분석이 얕게 나옴(빠른 등급을 쓴 경우)</td><td>해결됨</td><td>Sonnet이나 Opus로 올림</td></tr>
        <tr><td>대량 정형 작업이 느리고 사용량이 많이 듦</td><td>해결됨</td><td>Haiku로 내림</td></tr>
        <tr><td>첫 응답부터 일반론만 나옴</td><td>해결되지 않음</td><td>독자, 목적, 배경, 형식을 요청에 추가함(PART 02)</td></tr>
        <tr><td>계산 결과가 미묘하게 틀림</td><td>해결되지 않음</td><td>Code Execution으로 계산함</td></tr>
        <tr><td>최근 정보가 틀리거나 빠짐</td><td>해결되지 않음</td><td>웹 검색이나 Research를 씀</td></tr>
        <tr><td>긴 대화 후반에 초반 지시를 지키지 않음</td><td>해결되지 않음</td><td>요약 후 새 대화로 이어감(CH 4)</td></tr>
        <tr><td>확신 있게 쓴 인용·수치의 정확성이 의심됨</td><td>해결되지 않음</td><td>원자료와 대조해 검증함(PART 03)</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>왼쪽 열은 반복되는 오류의 종류임. 등급 변경이 맞는 조치는 깊이와 속도에 관한 두 줄뿐임.</p>
      <div class="sample bad"><span class="sl">예시 · 증상과 맞지 않는 조치</span>상황: Haiku로 작성한 신규 시장 진출 검토서가 경쟁 구도를 표면적으로만 다룸. 요청에는 목적, 독자, 자료, 목차가 모두 들어 있었음.
조치: 같은 Haiku 대화에서 "더 깊이 분석할 것"을 세 번 반복해 요청함.</div>
      <div class="sample good"><span class="sl">예시 · 증상에 맞는 조치</span>상황: 같은 검토서.
조치: 해석과 판단이 많이 필요한 일이므로 Opus로 바꿔 같은 자료와 같은 요청으로 다시 작성함. 결과의 수치와 인용은 원자료와 대조함.</div>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"등급별 적합 업무 구분 기준",
     html:`__MAP:model__
      <p class="lead">세 등급은 일의 구조, 판단의 미묘함, 오류 비용으로 구분함.</p>
      <div class="tbl"><table>
        <tr><th>구분</th><th>Haiku</th><th>Sonnet</th><th>Opus</th></tr>
        <tr><td>성격</td><td>빠르고 효율적</td><td>속도와 역량의 균형</td><td>가장 철저하고 역량이 높음, 느림</td></tr>
        <tr><td>일의 구조</td><td>규칙과 범주가 정해진 정형 작업</td><td>일반적인 초안·요약·분석</td><td>모호하고 해석이 필요한 입력</td></tr>
        <tr><td>처리 분량</td><td>수백~수천 건</td><td>건별 업무</td><td>소수의 중요한 건</td></tr>
        <tr><td>오류 비용</td><td>낮음, 나중에 쉽게 고침</td><td>보통</td><td>높음, 고객·경영진에게 전달됨</td></tr>
        <tr><td>실무 예시</td><td>문의 분류, 신청서 항목 추출</td><td>보도자료 초안, 회의록 정리, 계약서 요약</td><td>전략 제안, 상충하는 조사 결과 종합, 복잡한 계약 검토</td></tr>
      </table></div>
      <h4>판단 규칙</h4>
      <ul>
        <li>정형 작업 + 대량 + 낮은 오류 비용 → Haiku → 속도 이점이 분량만큼 누적됨</li>
        <li>일반 초안·종합·분석 → Sonnet → 기본 출발점. 결과를 보고 올리거나 내림</li>
        <li>미묘한 판단 + 모호한 입력 + 높은 오류 비용 → Opus → 느린 속도를 감수할 가치가 있음</li>
        <li>기준표가 분명한 대량 분류라도 건마다 미묘한 판단이 필요해지면 → Opus → 분량보다 판단의 성격이 우선함</li>
        <li>등급을 올린 결과물도 검증 대상임 → 등급은 오류 가능성을 줄일 뿐 없애지 않음</li>
      </ul>
      <div class="callout">시험 포인트 · 모델 등급은 작업의 성격으로 정함. 범주가 정해져 있고 분량이 많으며 개별 오류를 나중에 고칠 수 있는 작업은 빠른 등급이 맞음. 해석이 필요하거나 자료가 서로 맞지 않거나 결과가 경영진·고객에게 가는 작업은 가장 역량 높은 등급이 맞음. 두 성격이 섞이면 판단이 필요한 쪽을 우선함.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>품질이 중요하다는 이유로 모든 일에 가장 역량 높은 등급 쓰기. 비용과 대기 시간을 낭비함</li>
        <li>분량이 많다는 이유만으로 미묘한 판단이 필요한 일에 가장 빠른 등급 쓰기</li>
        <li>지시 누락, 오래된 정보, 계산 오류를 등급 변경으로 해결하려 하기</li>
        <li>가장 역량 높은 등급의 결과라서 검증을 생략하기</li>
        <li>Sonnet이 기본 출발점이라는 말을 "항상 Sonnet"으로 이해하기. 결과와 조건에 따라 올리고 내리는 것이 원래 뜻임</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Donor interview synthesis", ts:"3.2",
     q:`A nonprofit communications lead has notes from 30 interviews with major donors. Many comments are indirect, and several donors contradict each other about which programs they value most. She must turn the notes into recommendations for next year's fundraising strategy, which the board will vote on in two weeks. Which model choice is MOST appropriate?`,
     ko:`비영리 단체의 커뮤니케이션 책임자가 주요 후원자 30명의 인터뷰 기록을 가지고 있음. 의견 중 상당수가 간접적으로 표현되어 있고, 어떤 프로그램을 가장 중요하게 여기는지에 대해 후원자끼리 서로 다른 말을 함. 책임자는 이 기록을 바탕으로 내년 모금 전략 권고안을 만들어야 하며, 이사회가 2주 뒤 이 권고안을 표결함. 가장 적절한 모델 선택은 무엇인가?`,
     opts:[
       {t:`Use the most capable model and accept slower responses, because the notes need careful interpretation.`, ko:`기록을 신중하게 해석해야 하므로 가장 역량 높은 모델을 쓰고 느린 응답을 감수하기`, ok:true},
       {t:`Use the fastest model, because thirty sets of interview notes is a large volume to process.`, ko:`인터뷰 기록 30건은 처리 분량이 많으므로 가장 빠른 모델 쓰기`},
       {t:`Use the balanced default model, since it is the recommended starting point for most analysis and drafting work.`, ko:`대부분의 분석·초안 작업에 권장되는 출발점이므로 균형형 기본 모델 쓰기`},
       {t:`Use the fastest model to sort the comments by program, then send that sorted list to the board as the recommendation.`, ko:`가장 빠른 모델로 의견을 프로그램별로 분류한 뒤 그 분류 목록을 권고안으로 이사회에 보내기`}
     ],
     hint:`인터뷰 30건의 분량보다 그 내용이 어떤 성격인지, 결과가 어디에 쓰이는지를 볼 것. 마감까지 남은 시간도 확인할 것.`,
     explain:{good:`간접적이고 서로 엇갈리는 의견을 해석해 이사회 의사결정에 쓸 권고안을 만드는 일임. 미묘한 판단, 모호한 입력, 높은 오류 비용이 모두 해당하므로 가장 역량 높은 모델이 맞음. 마감이 2주 뒤라서 느린 응답도 문제가 되지 않음.`,
       wrongs:[`<b>B:</b> 30건은 속도 이점이 누적될 만한 대량 작업으로 보기 어려움. 이 일을 결정하는 조건은 해석의 난이도임.`,
               `<b>C:</b> 기본 출발점은 일반 업무 기준임. 모호한 입력을 해석해 고위험 결정을 돕는 일은 처음부터 상위 등급이 맞는 경우임.`,
               `<b>D:</b> 분류 목록은 권고안이 될 수 없음. 해석과 판단 단계를 건너뛰고 이사회에 보내면 결과물의 목적을 채우지 못함.`]},
     principle:"원칙 ③ 요구에 맞는 선택",
     why:{q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`간접적이고 상충하는 의견을 해석해 고위험 결정에 쓸 결과를 만들어야 함`, ok:true},
         {t:`공식 강좌가 권장하는 최상위 모델이라서`},
         {t:`인터뷰 기록의 분량이 많아 처리 시간이 오래 걸려서`},
         {t:`이사회 자료는 반드시 가장 비싼 모델로 만들어야 한다는 규칙이 있어서`}
       ],
       explain:`등급 선택의 근거는 일의 성격임. 모호한 입력의 해석과 높은 오류 비용이 상위 등급을 정당화함.`}},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Training feedback labels", ts:"3.2",
     q:`A learning and development specialist at a hotel group collected 650 short feedback comments after a company-wide service training. Each comment needs one label: content, trainer, schedule, or platform, based on a definition sheet the team already agreed on. The counts will be shared in an internal meeting, and a few wrong labels would not change any decision. Which model choice BEST fits this task?`,
     ko:`호텔 그룹의 교육 담당자가 전사 서비스 교육 후 짧은 피드백 650건을 모았음. 팀이 이미 합의한 정의표를 기준으로 각 의견에 내용, 강사, 일정, 플랫폼 중 하나의 라벨을 붙여야 함. 집계 결과는 내부 회의에서 공유되며, 라벨 몇 개가 틀려도 어떤 결정도 바뀌지 않음. 이 일에 가장 잘 맞는 모델 선택은 무엇인가?`,
     opts:[
       {t:`A fast, efficient model, since the labels are fixed and small errors carry little cost.`, ko:`라벨이 정해져 있고 작은 오류의 비용이 낮으므로 빠르고 효율적인 모델`, ok:true},
       {t:`The most capable model, since staff feedback about a company-wide training could be sensitive.`, ko:`전사 교육에 대한 직원 피드백은 민감할 수 있으므로 가장 역량 높은 모델`},
       {t:`The most capable model for the first 100 comments, then the fastest model for the remaining 550.`, ko:`처음 100건은 가장 역량 높은 모델로, 나머지 550건은 가장 빠른 모델로 처리하기`},
       {t:`The balanced default model, because it should be used for every task until problems with output quality appear.`, ko:`결과 품질에 문제가 보이기 전까지는 모든 일에 써야 하므로 균형형 기본 모델`}
     ],
     hint:`라벨이 미리 정해져 있는지, 분량이 얼마인지, 틀렸을 때 무엇이 달라지는지 세 가지를 확인할 것.`,
     explain:{good:`정의표로 정해진 4개 라벨을 붙이는 정형 작업이고, 650건으로 분량이 많고, 오류 비용이 낮음. 빠르고 효율적인 등급(Haiku)의 조건에 모두 해당함.`,
       wrongs:[`<b>B:</b> 주제가 민감한지는 데이터 취급 정책에서 판단할 문제임. 정해진 라벨을 붙이는 작업의 난이도를 높이지 않음.`,
               `<b>C:</b> 처음 일부를 상위 등급으로 처리할 근거가 지문에 없음. 같은 작업에 두 모델을 섞으면 결과의 일관성을 따로 확인해야 함.`,
               `<b>D:</b> 기본 출발점은 모든 일에 고정하라는 뜻이 아님. 정형·대량·저위험 조건이 보이면 처음부터 빠른 등급을 고를 수 있음.`]},
     principle:"원칙 ③ 요구에 맞는 선택"}
  ]},

  /* ================= CH 3 · 3.3 요구 조건별 모델 배정 ================= */
  { id:"p1c3", ch:"CH 3", obj:"3.3", title:"요구 조건별 모델 배정: 비용·속도·품질", steps:[
    {type:"concept", kind:"CONCEPT · 개념 설명", h:"비용·속도·품질 조건 읽는 법",
     html:`<p class="lead">CH 2는 등급의 성격을 다룸. 이 챕터는 실제 업무 조건을 읽고 등급을 배정하는 판단을 다룸. 공식 가이드는 이 목표를 "비용, 속도, 품질에 맞춘 모델 선택"으로 정의함.</p>
      <div class="callout term"><b>용어 카드</b> · <b>비용</b>: 모델을 쓰는 데 드는 대가. 사용량 과금(usage-based billing) 플랜이나 API에서는 등급 선택이 곧 호출당 비용 선택이 됨. Opus는 호출당 사용량을 더 많이 소모함.</div>
      <div class="callout term"><b>용어 카드</b> · <b>사용 한도(usage limit)</b>: 일정 기간 안에 쓸 수 있는 사용량의 상한. 짧은 주기로 갱신되는 세션 한도가 있고, 유료 플랜에는 주간 한도도 있음. 구체적인 수치는 플랜마다 다르고 바뀌므로 Help Center에서 확인할 것.</div>
      <ul>
        <li>표준 claude.ai 구독에서는 호출당 요금 대신 응답 속도와 사용 한도의 여유를 비용의 대리 지표로 봄</li>
        <li>과금 방식이 달라도 선택 논리는 같음. 일의 요구보다 높은 등급은 비용이나 한도를 낭비하고, 낮은 등급은 품질을 잃음</li>
      </ul>
      <div class="callout term"><b>용어 카드</b> · <b>속도</b>: 응답을 받기까지 기다리는 시간. 한 건에서는 차이가 작아도 대량 처리나 실시간 응대에서는 누적됨.</div>
      <div class="callout term"><b>용어 카드</b> · <b>품질</b>: 결과가 일의 목적을 충족하는 정도. 판단이 미묘할수록, 입력이 모호할수록, 결과를 되돌리기 어려울수록 높은 품질이 필요함.</div>

      <h4>지문에서 조건을 찾는 법</h4>
      <div class="tbl"><table>
        <tr><th>조건</th><th>영어 지문의 표현 예</th><th>판단 방향</th></tr>
        <tr><td>분량</td><td>hundreds of, high volume, every ticket, each week</td><td>속도·비용 우선 → 빠른 등급</td></tr>
        <tr><td>구조</td><td>fixed categories, set template, defined fields</td><td>정형 작업 → 빠른 등급</td></tr>
        <tr><td>오류 비용</td><td>easy to fix later, internal only, spot-checked</td><td>낮음 → 빠른 등급 허용</td></tr>
        <tr><td>모호함</td><td>conflicting, indirect, unclear, mixed signals</td><td>해석 필요 → 상위 등급</td></tr>
        <tr><td>독자·위험도</td><td>board, client deliverable, executive decision</td><td>높음 → 상위 등급</td></tr>
        <tr><td>대기 시간</td><td>customers waiting, live chat, within minutes</td><td>속도 우선 → 빠른 등급</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>가운데 열은 영어 지문에서 조건을 나타내는 표현의 예시임. 한 지문에 여러 조건이 함께 나오면 결과물의 위험도와 판단의 미묘함을 먼저 봄.</p>
      <div class="sample"><span class="sl">예시 · 모델 배정 전 조건 메모</span>업무: 신규 가입 고객 대상 환영 메일 개인화
분량: 하루 약 400건
구조: 고정 템플릿에 이름, 가입 상품, 담당 지점만 채움
오류 비용: 낮음. 발송 전 샘플 20건을 사람이 확인함
독자: 고객이지만 내용은 정해진 안내 문구
배정: Haiku (정형·대량·저위험 조건이 맞음)</div>
      <div class="sample"><span class="sl">예시 · 같은 메모 양식, 다른 결론</span>업무: 주요 거래처 재계약 협상 전략 메모
분량: 1건
구조: 정해진 틀 없음. 지난 3년 거래 자료, 상대 측 요구 메일, 내부 의견이 서로 엇갈림
오류 비용: 높음. 연간 계약 조건이 이 메모를 바탕으로 정해짐
독자: 영업 본부장
배정: Opus (모호한 입력·고위험 판단 조건이 맞음)</div>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"기본값에서 올리고 내리는 조정과 단계별 배정",
     html:`<p class="lead">모델 선택은 한 번으로 고정되지 않음. 기본값에서 시작해 결과를 보고 조정함. 큰 일은 단계마다 다른 등급을 배정할 수 있음.</p>
      <h4>기본값에서 시작하는 조정</h4>
      <div class="flow">
        <span class="nd">① Sonnet으로 시작<small>일반 초안·종합·분석</small></span><span class="ar">→</span>
        <span class="nd">② 결과 확인<small>깊이·속도·사용량</small></span><span class="ar">→</span>
        <span class="nd hot">③ 조정<small>깊이 부족 → Opus<br>정형·대량 → Haiku</small></span>
      </div>
      <p class="howto"><b>읽는 법</b>화살표 = 진행 순서. 조건이 처음부터 분명하면 ①을 건너뛰고 바로 Haiku나 Opus를 고름.</p>
      <ul>
        <li>올리는 신호: 지시와 자료가 충분한데도 분석이 얕음. 상충하는 자료를 정리하지 못함. 고객·경영진용 품질에 못 미침</li>
        <li>내리는 신호: 결과 품질은 충분한데 대량 처리가 느림. 일상 작업 때문에 사용 한도가 빨리 소진됨</li>
        <li>올리기 전 확인: 지시 누락, 오래된 정보, 계산 오류, 긴 대화의 품질 저하는 등급 문제가 아님. 이런 원인부터 배제함(PART 07)</li>
      </ul>

      <h4>단계별 배정</h4>
      <ul>
        <li>큰 일을 단계로 나누면(작업 분해) 단계마다 요구 조건이 다름. 단계별로 등급을 다르게 배정할 수 있음</li>
        <li>정형 처리 단계는 빠른 등급에, 해석과 판단 단계는 상위 등급에 배정함</li>
        <li>모든 단계를 최상위 등급으로 처리하면 정형 단계에서 비용과 시간을 낭비함</li>
        <li>모든 단계를 빠른 등급으로 처리하면 판단 단계의 품질을 잃음</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 고객 리뷰 분석의 단계별 배정</span>1단계 Haiku: 온라인몰 리뷰 3,000건을 "배송 / 품질 / 가격 / 응대" 범주와 긍정·부정으로 분류
2단계 Code Execution: 범주별 건수와 전월 대비 증감 계산
3단계 Sonnet: 집계 결과로 월간 고객 의견 보고 초안 작성
4단계 Opus: 엇갈리는 의견을 해석해 다음 분기 상품 개선 우선순위를 경영진에게 제안</div>

      <h4>사용 한도를 고려한 작업 계획</h4>
      <ul>
        <li>상위 등급으로 오래 작업할 일은 시작 전에 계획함. 중간에 한도에 걸려 멈춘 뒤 수습하는 것보다 효율적임</li>
        <li>방법 1: 일을 구간으로 나눔</li>
        <li>방법 2: 구간별 중간 결과를 Project 지식 베이스에 저장함</li>
        <li>방법 3: 한 대화를 무한정 늘리지 않고, 요약에서 새 대화를 시작함(CH 4)</li>
        <li>일상적인 짧은 작업까지 최상위 등급으로 처리하면 정작 필요한 분석에 쓸 여유가 줄어듦</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 한도를 고려하지 않은 사용</span>월요일 오전: 메일 제목 아이디어, 맞춤법 수정, 회의 일정 문구를 모두 Opus로 처리
수요일 오후: 분기 경쟁 분석을 시작하려는데 주간 한도가 거의 소진됨</div>
      <div class="sample good"><span class="sl">예시 · 한도를 고려한 사용</span>짧은 일상 작업: Haiku 또는 Sonnet
분기 경쟁 분석: Opus, 3개 구간으로 나눔
구간마다 중간 결과를 Project 지식 베이스에 저장하고 다음 구간은 요약으로 시작</div>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"조건별 모델 배정 결정 기준",
     html:`__MAP:model__
      <p class="lead">아래 표는 지문 조건과 배정 결과를 짝지은 것임. 같은 업무라도 조건이 바뀌면 배정이 바뀜.</p>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>짧은 고객 답장 초안을 대량 생성, 속도와 비용이 깊은 추론보다 중요</td><td>빠르고 비용이 낮은 등급</td><td>공식 가이드 샘플 2의 정답. 단순·대량 작업에는 빠른 등급이 맞음</td></tr>
        <tr><td>실시간 채팅 응대에서 정해진 안내 문구 추천, 고객이 기다림</td><td>Haiku</td><td>대기 시간이 실제 비용이 됨</td></tr>
        <tr><td>일반 보고서·블로그·회의록 정리</td><td>Sonnet</td><td>기본 출발점으로 대부분 충분함</td></tr>
        <tr><td>지시·자료가 충분한데도 전략 분석이 얕음</td><td>Opus로 상향</td><td>복잡한 일에서 품질이 모자라면 올림</td></tr>
        <tr><td>사용량 과금, 예산 초과, 정형 작업까지 Opus로 처리 중</td><td>정형 작업만 Haiku로 이동</td><td>판단 단계의 품질은 유지하고 낭비만 줄임</td></tr>
        <tr><td>구독 플랜에서 주중에 사용 한도 소진</td><td>일상 작업은 하위 등급, 복잡한 분석만 Opus</td><td>구독에서는 한도의 여유가 비용 역할을 함</td></tr>
        <tr><td>한 업무 흐름 안에 정형 단계와 판단 단계가 섞임</td><td>단계별로 등급 배정</td><td>단계마다 요구 조건이 다름</td></tr>
        <tr><td>긴 대화 후반에 품질이 떨어짐</td><td>등급 유지, 요약 후 새 대화</td><td>컨텍스트 문제는 등급으로 해결되지 않음</td></tr>
      </table></div>
      <div class="callout">시험 포인트 · 공식 가이드 샘플 2(대량 고객 답장 초안의 모델 선택)의 해설이 이 챕터의 기준을 그대로 보여 줌. 단순·대량 작업에는 빠르고 비용이 낮은 모델을 쓰고, 가장 역량 높은 모델은 복잡한 추론에 남겨 둠. 모든 답장에 최상위 모델을 쓰면 비용과 대기 시간을 낭비함. 기능을 모두 끄거나 다른 AI 플랫폼으로 바꾸는 선택은 이 균형 문제를 다루지 않음.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>고객에게 가는 글이라는 이유만으로 최상위 등급 고르기. 구조가 단순한 대량 답장은 공식 가이드 샘플 2처럼 빠른 등급이 맞음</li>
        <li>예산을 줄이려고 판단 단계까지 가장 빠른 등급으로 낮추기</li>
        <li>한 업무 흐름 안의 모든 단계에 같은 등급 쓰기</li>
        <li>깊이 부족과 무관한 문제(지시 누락, 계산 오류, 긴 대화의 품질 저하)에 등급부터 올리기</li>
        <li>비용 문제를 기능 끄기나 플랫폼 교체로 해결하려 하기</li>
        <li>사용 한도 계획 없이 한 대화를 무한정 이어가다 작업이 중간에 멈추기</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Shallow market-entry analysis", ts:"3.3",
     q:`A consultant is drafting a market-entry report for a client using the balanced default model. Her request already states the goal, audience, data files, and required sections. The writing is clean, but the analysis of conflicting market data stays at surface level. She also uses this model for routine formatting and client emails on the project. The report is due in three days, and the firm is billed by usage. What is the MOST appropriate next step?`,
     ko:`컨설턴트가 균형형 기본 모델로 고객사용 시장 진출 보고서를 작성하고 있음. 요청에는 이미 목적, 독자, 데이터 파일, 필요한 목차가 들어 있음. 문장은 깔끔하지만 상충하는 시장 데이터에 대한 분석이 표면적인 수준에 머묾. 컨설턴트는 이 프로젝트의 일상적인 서식 작업과 고객 이메일에도 같은 모델을 씀. 보고서 마감은 3일 뒤이고, 회사는 사용량 기준으로 과금됨. 가장 적절한 다음 단계는 무엇인가?`,
     opts:[
       {t:`Move the analysis of the conflicting data to the most capable model, keeping routine formatting on the current model.`, ko:`상충하는 데이터 분석은 가장 역량 높은 모델로 옮기고, 일상적인 서식 작업은 현재 모델에 두기`, ok:true},
       {t:`Keep the current model, add "analyze more deeply" to the request, and then regenerate the report several times.`, ko:`현재 모델을 유지하고 요청에 "더 깊이 분석할 것"을 추가한 뒤 보고서를 여러 번 다시 생성하기`},
       {t:`Switch every part of the project, including formatting and client emails, to the most capable model from now on.`, ko:`서식 작업과 이메일 답장을 포함해 이 프로젝트의 모든 작업을 앞으로 가장 역량 높은 모델로 바꾸기`},
       {t:`Switch to the fastest model, generate several quick versions, and then combine the strongest paragraphs from each one.`, ko:`가장 빠른 모델로 바꿔 짧은 버전을 여러 개 만든 뒤 각 버전에서 가장 나은 문단을 합치기`}
     ],
     hint:`요청 내용은 이미 충분함. 무엇이 부족한지, 그 부족함이 일의 어느 부분에서 생기는지, 과금 방식이 무엇인지 함께 볼 것.`,
     explain:{good:`요청에 필요한 요소가 이미 있으므로 명세 부족은 원인이 아님. 상충하는 데이터를 해석하는 복잡한 분석에서 품질이 모자라므로 그 부분을 상위 등급으로 올림. 사용량 과금 환경이므로 서식 같은 일상 작업까지 올릴 필요는 없음.`,
       wrongs:[`<b>B:</b> 깊이 부족이 모델 역량에서 오는 경우, 같은 지시를 반복하거나 여러 번 다시 생성해도 깊이가 생기지 않음.`,
               `<b>C:</b> 분석 품질 문제는 해결되지만, 일상 작업까지 최상위 등급으로 옮기면 사용량 과금 환경에서 비용을 낭비함.`,
               `<b>D:</b> 빠른 등급은 깊이가 더 부족함. 얕은 문단을 합쳐도 해석이 필요한 분석은 나오지 않음.`]},
     principle:"원칙 ③ 요구에 맞는 선택",
     why:{q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`요청은 충분하고, 품질 부족이 복잡한 분석 부분에서만 생기며, 사용량 과금이라 올리는 범위를 좁혀야 함`, ok:true},
         {t:`최상위 모델로 바꾸는 것이 컨설팅 업계의 표준 관행이라서`},
         {t:`3일이면 가장 느린 모델로도 보고서 전체를 충분히 다시 쓸 수 있어서`},
         {t:`기본 모델은 고객용 보고서에 쓸 수 없다는 규정이 있어서`}
       ],
       explain:`등급을 올릴지와 어디까지 올릴지는 품질 부족이 생기는 위치와 과금 방식으로 정함.`}},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Live chat reply suggestions", ts:"3.3",
     q:`A customer support lead at an online electronics store wants Claude to suggest replies to agents during live chats. Most questions are routine, such as delivery times, password resets, and return steps, and an approved answer already exists for each. Customers wait in the chat window while agents read the suggestion. Which model choice BEST fits?`,
     ko:`온라인 가전 매장의 고객지원 리드가 실시간 채팅 중 상담원에게 Claude가 답변을 추천하게 하려 함. 질문 대부분은 배송 기간, 비밀번호 재설정, 반품 절차 같은 일상적인 내용이고, 각 질문에 승인된 답변이 이미 있음. 상담원이 추천 답변을 읽는 동안 고객은 채팅창에서 기다림. 가장 잘 맞는 모델 선택은 무엇인가?`,
     opts:[
       {t:`A fast, efficient model that returns suggestions quickly for these routine, pre-approved answers.`, ko:`일상적이고 승인된 답변에 맞춰 추천을 빠르게 돌려주는 빠르고 효율적인 모델`, ok:true},
       {t:`The most capable model, because every reply goes straight to a customer and must be of the highest quality.`, ko:`모든 답변이 고객에게 바로 전달되어 최고 품질이어야 하므로 가장 역량 높은 모델`},
       {t:`The balanced default model, because it is the safe choice for most work and waiting time is a minor concern.`, ko:`대부분의 업무에 안전한 선택이고 대기 시간은 부차적인 문제이므로 균형형 기본 모델`},
       {t:`Any model, as long as it runs inside a dedicated workspace with saved instructions, since that makes replies arrive faster.`, ko:`지시문을 저장한 전용 작업 공간이 응답을 빠르게 하므로 모델과 무관하게 그 공간에서 실행하기`}
     ],
     hint:`답변 내용이 이미 정해져 있는지, 그리고 누가 응답을 기다리고 있는지 확인할 것.`,
     explain:{good:`승인된 답변이 있는 일상 질문이라 깊은 추론이 필요 없음. 고객이 실시간으로 기다리므로 대기 시간이 실제 비용이 됨. 빠르고 효율적인 등급이 조건에 맞음.`,
       wrongs:[`<b>B:</b> 고객에게 가는 답이라도 내용이 이미 승인된 정형 답변이면 최상위 등급의 역량이 필요하지 않음. 느린 응답은 고객 대기만 늘림.`,
               `<b>C:</b> 지문은 고객 대기 시간을 주요 조건으로 제시함. 기본 모델을 습관적으로 고르면 이 조건을 놓침.`,
               `<b>D:</b> Project는 맥락을 매번 다시 넣는 수고를 줄여 줌. 모델의 응답 속도를 바꾸는 기능은 아님.`]},
     principle:"원칙 ③ 요구에 맞는 선택"}
  ]},

  /* ================= CH 4 · 3.4 컨텍스트 한도와 Memory 관리 ================= */
  { id:"p1c4", ch:"CH 4", obj:"3.4", title:"컨텍스트 한도와 Memory 관리", steps:[
    {type:"concept", kind:"CONCEPT · 개념 설명", h:"컨텍스트 창과 품질 저하 신호",
     html:`<p class="lead">대화 하나가 담을 수 있는 정보에는 한도가 있음. 한도에 가까워진 대화는 초반의 지시와 결정을 약하게 반영함. 이 챕터는 그 신호를 알아보고 대응하는 방법을 다룸.</p>
      <div class="callout term"><b>용어 카드</b> · <b>토큰(token)</b>: 모델이 글을 읽고 쓰는 기본 단위. 단어 하나 또는 단어의 일부에 해당함. 컨텍스트 창의 크기는 이 단위로 계산됨.</div>
      <div class="callout term"><b>용어 카드</b> · <b>컨텍스트 창(context window)</b>: 대화 하나가 한 번에 담을 수 있는 작업 기억의 한도. 주고받은 메시지, 붙여넣은 글, 올린 파일이 모두 이 한도를 차지함.</div>
      <ul>
        <li>정체: 화면에 따로 보이는 기능이 아님. 대화마다 정해진 용량임</li>
        <li>대화가 길어질수록 남은 용량이 줄어듦</li>
        <li>긴 대화와 큰 파일 여러 개가 겹치면 한도에 빨리 가까워짐</li>
      </ul>
      <div class="callout term"><b>용어 카드</b> · <b>자동 요약</b>: 대화가 한도에 가까워지면 claude.ai가 앞부분 메시지를 자동으로 요약해 대화를 이어가게 하는 동작. 유료 플랜에서 Code Execution이 켜져 있을 때 적용됨.</div>
      <ul>
        <li>요약 뒤에도 전체 이력은 참조용으로 남음. 그러나 세부 내용은 압축됨</li>
        <li>초반에 준 상세한 지시가 후반에 약하게 반영될 수 있음</li>
        <li>후반에 초반 지시를 따르지 않는 원인은 압축일 수 있음. Claude가 지시를 무시했다고 단정하지 않음</li>
      </ul>
      <h4>품질 저하 신호</h4>
      <ul>
        <li>초반에 정한 형식(표 구성, 분량, 용어 규칙)을 후반 답변에서 지키지 않음</li>
        <li>이미 합의한 기준이나 결정을 다시 묻거나 다르게 적용함</li>
        <li>처음에 정한 평가 틀에서 벗어난 결론을 냄</li>
        <li>구분 기준은 시점임. 첫 응답부터 틀렸다면 요청이 부족한 경우임(PART 02). 처음에는 잘 되다가 대화가 길어지며 나빠졌다면 컨텍스트 저하임(PART 07)</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 긴 대화의 품질 저하</span>[1번째 메시지] 공급업체 평가는 가격 30%, 품질 25%, 납기 20%, 지원 15%, 보안 10% 가중치로 할 것. 결과는 5열 표로 낼 것.
… 3시간 동안 자료 업로드와 수정 요청 40여 회 …
[45번째 응답] 신규 공급업체 2곳을 가격, 품질, 납기 3개 항목만으로 평가하고 가중치 없이 평균을 냄.</div>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"재시작·요약·저장과 Memory 관리",
     html:`<p class="lead">품질 저하에 대한 대응은 세 가지임. 새로 시작(Restart), 요약 후 이어가기(Summarize), 영구 저장(Persist). 무엇을 이어가야 하는지에 따라 고름.</p>
      <div class="callout term"><b>용어 카드</b> · <b>재시작(Restart)</b>: 새 대화를 여는 대응. Project 안이라면 프로젝트 지시문과 지식 베이스는 자동으로 이어짐. 이전 대화의 내용은 이어지지 않음.</div>
      <ul>
        <li>언제: 대화가 회복하기 어려울 만큼 방향을 잃었을 때. 같은 업무 흐름에서 새 과제를 시작할 때</li>
      </ul>
      <div class="callout term"><b>용어 카드</b> · <b>요약 후 이어가기(Summarize)</b>: 지금까지의 결정 사항, 진행 중인 작업, 남은 질문을 Claude에게 요약받아 새 대화 첫머리에 붙여넣는 대응.</div>
      <ul>
        <li>언제: 진행 내용은 이어가야 하지만 품질이 떨어진 대화를 계속 쓰고 싶지 않을 때</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 요약 요청 프롬프트</span>새 대화로 옮겨 이어가려 함. 지금까지의 내용을 다음 세 항목으로 정리할 것.
1. 확정된 결정 사항(평가 기준과 가중치 포함)
2. 진행 중인 작업과 현재 단계
3. 아직 답이 나오지 않은 질문
각 항목은 글머리표로 쓰고, 수치는 원래 값 그대로 적을 것.</div>
      <div class="sample good"><span class="sl">예시 · 새 대화 첫머리에 붙여넣는 요약</span>[이전 대화 요약: 공급업체 평가]
결정 사항: 가중치는 가격 30%, 품질 25%, 납기 20%, 지원 15%, 보안 10%. 결과는 5열 표로 냄.
진행 상황: 8개 업체 중 6개 평가 완료. A사, F사 남음.
남은 질문: F사 보안 인증 자료를 받을지 여부.
이 기준으로 A사와 F사 평가를 이어갈 것.</div>
      <div class="callout term"><b>용어 카드</b> · <b>영구 저장(Persist)</b>: 앞으로 모든 대화에서 필요한 정보를 Memory에 저장하거나 Project 지식 베이스를 갱신하는 대응.</div>
      <ul>
        <li>언제: 이번 대화가 마무리된 뒤에도 계속 쓰일 정보일 때</li>
        <li>잘 바뀌지 않는 참고 사실(브랜드 가이드, 정책 문서)은 지식 베이스에 둠</li>
        <li>계속 바뀌는 결정 기록과 선호는 Memory에 둠</li>
        <li>팀 전체가 같은 결과를 얻어야 하는 규칙은 프로젝트 지시문이나 Skill에 둠. 공식 강좌는 Memory를 최선 노력 수준의 기능으로 설명하고, 공유되고 신뢰할 수 있는 보관처로는 설정을 권함</li>
      </ul>

      <h4>Memory</h4>
      <div class="callout term"><b>용어 카드</b> · <b>Memory</b>: 대화가 바뀌어도 업무 관련 사실을 이어 주는 기능. 반복되는 역할 정보, 출력 형식 선호, 자주 협업하는 사람 이름, 여러 업무에 공통인 제약을 담음.</div>
      <ul>
        <li>관리 기준은 양보다 정확성임. 지난 분기에는 맞았지만 검토하지 않은 항목은 현재 작업을 잘못 이끌 수 있음</li>
        <li>자주 쓰는 사용자는 최소 월 1회 검토함. 맞지 않는 항목은 수정하거나 삭제함. 실제로 반복되는 정보만 남김</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 월간 Memory 점검 결과</span>유지: 주간 보고는 결론, 근거, 다음 조치 순서로 작성
수정: 마케팅 본부장 이름 (8월 인사 이동 반영)
삭제: 3분기 캠페인 목표 수치 (분기 종료)
삭제: 계약이 종료된 외주 디자인사 담당자 정보</div>
      <div class="callout term"><b>용어 카드</b> · <b>프로젝트 단위 Memory</b>: Memory를 Project마다 분리하는 방식. 고객 A Project의 맥락이 고객 B Project 대화에 나오지 않음.</div>
      <div class="callout term"><b>용어 카드</b> · <b>Incognito 모드</b>: 해당 대화를 Memory와 채팅 이력에 남기지 않는 모드. Project 밖의 단독 대화에 적용됨. 조직의 데이터 보존 정책은 그대로 적용됨.</div>
      <ul>
        <li>언제: 기밀 내용이 들어가는 민감하거나 탐색적인 대화를 이후 대화에 남기고 싶지 않을 때</li>
        <li>Incognito는 기록 여부만 정함. 그 데이터를 Claude에 넣어도 되는지는 조직 정책으로 먼저 확인함(PART 06)</li>
      </ul>

      <h4>권하지 않는 대응</h4>
      <ul>
        <li>품질이 떨어진 같은 대화에서 지시를 다시 반복하기: 그 대화를 더 길게 만들 뿐임</li>
        <li>모델 등급 올리기: 컨텍스트 소진을 해결하지 못함</li>
        <li>한 대화를 무한정 이어가기: 사용 한도에 걸려 작업이 중간에 멈출 수 있음</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"재시작·요약·저장 선택 기준",
     html:`__MAP:ctx__
      <p class="lead">대응은 이어가야 할 내용이 있는지, 그 내용이 앞으로도 필요한지로 정함.</p>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>대화가 회복하기 어려울 만큼 엉뚱한 방향으로 진행됨</td><td>재시작</td><td>Project 지시문과 지식 베이스는 새 대화에도 자동으로 이어짐</td></tr>
        <tr><td>같은 업무 흐름에서 새 과제 시작(예: 3분기 기획 후 4분기 기획)</td><td>재시작</td><td>이전 대화 내용 전체가 새 과제에 필요하지 않음</td></tr>
        <tr><td>긴 대화 후반에 초반 형식·기준을 지키지 않지만 진행 내용은 이어가야 함</td><td>요약 후 새 대화</td><td>결정과 진행 상황만 옮기고 품질이 떨어진 대화는 정리함</td></tr>
        <tr><td>앞으로 모든 대화에서 필요한 사실</td><td>Memory 저장 또는 지식 베이스 갱신</td><td>대화가 바뀌어도 다시 입력하지 않음</td></tr>
        <tr><td>Memory에 지난 분기 정보나 바뀐 담당자 정보가 남아 결과가 틀림</td><td>Memory 검토·수정·삭제</td><td>정확성이 양보다 중요함</td></tr>
        <tr><td>고객 A의 맥락이 고객 B 작업에 나오면 안 됨</td><td>고객별 Project + 프로젝트 단위 Memory</td><td>Memory 분리가 Project 경계를 따름</td></tr>
        <tr><td>정책상 사용이 허용된 기밀 내용의 탐색 대화를 이력·Memory에 남기지 않아야 함</td><td>Incognito 모드</td><td>기록만 남지 않음. 조직 데이터 보존 정책은 그대로임</td></tr>
        <tr><td>상위 등급으로 며칠간 집중 작업 예정</td><td>구간 분할 + 중간 결과 저장 + 요약에서 재시작</td><td>사용 한도에 걸려 멈춘 뒤 수습하는 것보다 효율적임</td></tr>
      </table></div>
      <h4>판단 순서</h4>
      <div class="flow">
        <span class="nd">① 품질 저하 신호 확인<small>초반 지시·결정이 약해짐</small></span><span class="ar">→</span>
        <span class="nd">② 이어갈 내용이 있는가<small>없음 → 재시작<br>있음 → 요약 후 새 대화</small></span><span class="ar">→</span>
        <span class="nd hot">③ 앞으로도 계속 필요한가<small>예 → Memory 또는 지식 베이스에 저장</small></span>
      </div>
      <p class="howto"><b>읽는 법</b>화살표 = 판단하는 순서. ②와 ③은 함께 적용될 수 있음. 예를 들어 요약해서 새 대화로 옮기면서, 확정된 평가 기준은 지식 베이스에도 저장함.</p>
      <div class="callout">시험 포인트 · 긴 대화에서 품질이 떨어진 상황의 정답은 대개 요약해서 새 대화로 이어가기임. 같은 대화에서 지시를 다시 강조하거나 모델 등급을 올리는 선택은 공식 강좌 퀴즈에서도 오답으로 제시됨. 고객 간 맥락 분리의 정답은 고객별 Project와 프로젝트 단위 Memory임. Incognito, 수동 삭제, 고객별 모델 등급 분리는 오답으로 제시됨.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>후반의 품질 저하를 Claude가 지시를 무시한 것으로 보고 같은 지시를 더 강하게 반복하기</li>
        <li>컨텍스트 소진을 모델 등급 상향으로 해결하려 하기</li>
        <li>재시작하면 Project 설정까지 사라진다고 오해하기. 지시문과 지식 베이스는 이어짐</li>
        <li>요약 없이 새 대화를 열어 이미 정한 결정을 잃기</li>
        <li>이전 대화 전체를 새 대화에 그대로 붙여넣기. 새 대화도 처음부터 용량이 차게 됨</li>
        <li>Memory를 한 번 설정한 뒤 방치하기</li>
        <li>Incognito를 쓰면 민감한 데이터를 넣어도 된다고 판단하기</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Drifting vendor scores", ts:"3.4",
     q:`A project manager has spent three hours in one conversation comparing software vendors. At the start, she set five scoring criteria with fixed weights. Now Claude is scoring new vendors on only three criteria and without any weights. Her original request was clear, and the early results were correct. What should she do FIRST?`,
     ko:`프로젝트 매니저가 한 대화에서 3시간 동안 소프트웨어 공급업체를 비교해 왔음. 처음에 고정 가중치를 둔 평가 기준 5개를 정했음. 지금 Claude는 신규 업체를 기준 3개만으로, 가중치 없이 평가함. 처음 요청은 명확했고 초반 결과도 정확했음. 가장 먼저 해야 할 일은 무엇인가?`,
     opts:[
       {t:`Ask Claude to summarize the agreed criteria, decisions, and open items, then continue in a new conversation that starts with that summary.`, ko:`합의한 기준, 결정 사항, 남은 항목을 Claude에게 요약받은 뒤 그 요약으로 시작하는 새 대화에서 이어가기`, ok:true},
       {t:`Paste the five criteria and weights again in the same conversation and ask Claude to rescore every vendor from the beginning.`, ko:`같은 대화에 기준 5개와 가중치를 다시 붙여넣고 모든 업체를 처음부터 다시 평가하게 하기`},
       {t:`Switch this conversation to the most capable model so that it can keep track of all the earlier scoring rules and decisions.`, ko:`이전의 모든 평가 규칙과 결정을 놓치지 않도록 이 대화의 모델을 가장 역량 높은 모델로 바꾸기`},
       {t:`Open a new blank conversation and redo the entire comparison from the first vendor onward, without carrying over any of the earlier work.`, ko:`빈 새 대화를 열고 이전 작업을 전혀 옮기지 않은 채 첫 번째 업체부터 비교 전체를 다시 하기`}
     ],
     hint:`처음 요청과 초반 결과에는 문제가 없었음. 문제가 생긴 시점과 대화의 길이를 함께 볼 것.`,
     explain:{good:`처음에는 정확했고 긴 대화 후반에 기준이 흐트러졌으므로 컨텍스트 저하로 진단함. 결정과 진행 상황을 요약해 새 대화로 옮기면 품질이 떨어진 대화를 정리하면서도 지금까지의 작업을 잃지 않음.`,
       wrongs:[`<b>B:</b> 품질이 떨어진 대화 안에서 지시를 반복하면 그 대화를 더 길게 만들 뿐임. 같은 저하가 다시 생길 수 있음.`,
               `<b>C:</b> 모델 등급은 컨텍스트 소진을 해결하지 못함. 같은 대화에서 압축된 초반 내용은 그대로임.`,
               `<b>D:</b> 새 대화로 옮기는 방향은 맞지만 확정된 기준과 지금까지의 평가를 모두 잃음. 요약을 먼저 받아 옮겨야 함.`]},
     principle:"원칙 ⑥ 원인 진단 후 수정",
     why:{q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`처음에는 정확하다가 대화가 길어진 뒤 나빠졌으므로 원인은 컨텍스트 저하이고, 지금까지의 결정은 유지해야 함`, ok:true},
         {t:`새 대화를 여는 것이 공식 강좌의 기본 해법이라서`},
         {t:`처음 요청에 가중치 설명이 부족했기 때문에`},
         {t:`3시간이 지나면 대화가 자동으로 초기화되기 때문에`}
       ],
       explain:`품질이 나빠진 시점이 원인을 알려 줌. 대응은 이어갈 내용이 있는지로 정하며, 이 상황에서는 결정을 이어가야 하므로 요약 후 새 대화가 맞음.`}},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Two competing clients", ts:"3.4",
     q:`A freelance brand consultant works for two competing coffee chains and uses Claude for both clients from her own account. For each client, she wants Claude to keep building on earlier decisions from session to session. While drafting a campaign idea for the second chain, Claude suggests a price point that matches confidential plans she discussed earlier for the first chain. Which change BEST prevents this from happening again?`,
     ko:`프리랜서 브랜드 컨설턴트가 서로 경쟁하는 커피 체인 두 곳의 일을 맡고 있으며, 두 고객 일 모두 자신의 계정으로 Claude를 씀. 컨설턴트는 고객마다 대화가 바뀌어도 Claude가 이전 결정을 이어받아 작업하기를 원함. 두 번째 체인의 캠페인 아이디어를 작성하던 중, Claude가 앞서 첫 번째 체인과 논의한 기밀 계획과 같은 가격대를 제안함. 이런 일이 다시 생기지 않게 하는 가장 좋은 변경은 무엇인가?`,
     opts:[
       {t:`Create a separate Project for each client so that remembered context stays within that client's workspace.`, ko:`고객별로 별도 Project를 만들어 기억된 맥락이 각 고객의 작업 공간 안에만 머물게 하기`, ok:true},
       {t:`Start each conversation with a reminder that Claude must never use information from the other client's work.`, ko:`대화를 시작할 때마다 다른 고객 작업의 정보를 절대 쓰지 말라고 Claude에게 상기시키기`},
       {t:`Use Incognito mode for every conversation about either client, so nothing from those sessions is carried forward.`, ko:`두 고객 관련 대화를 모두 Incognito 모드로 진행해 그 대화의 어떤 내용도 이어지지 않게 하기`},
       {t:`Use a different model tier for each client, so that the two clients' work is handled by separate models.`, ko:`고객마다 다른 모델 등급을 써서 두 고객의 작업이 서로 다른 모델에서 처리되게 하기`}
     ],
     hint:`지문에는 요구가 두 가지 있음: 고객 사이의 분리, 각 고객 안의 연속성. 각 선택지가 두 요구를 모두 채우는지 하나씩 확인할 것.`,
     explain:{good:`프로젝트 단위 Memory는 Project 경계를 따라 분리됨. 고객별 Project를 쓰면 각 고객 안의 맥락은 이어지고, 다른 고객의 맥락은 나오지 않음.`,
       wrongs:[`<b>B:</b> 대화 안의 당부는 통제 수단이 아님. 기억된 맥락이 섞이는 구조는 그대로 남음.`,
               `<b>C:</b> 섞임은 막지만 각 고객 작업에 필요한 연속성까지 모두 잃음. 장기 고객 업무에 맞지 않음.`,
               `<b>D:</b> 모델 등급은 맥락 분리와 관계가 없음. 등급을 나눠도 같은 계정의 기억은 분리되지 않음.`]},
     principle:"원칙 ⑤ 정책·사람 판단 우선"}
  ]},

  /* ================= D3 미니테스트 ================= */
  { id:"p1test", type:"test", title:"D3 미니테스트 · 8문항", questions:[

    { lvl:"기초", ts:"3.1",
      q:`A school administrator wants to soften the tone of a three-sentence reminder to parents about a schedule change. She will send it today and does not expect to write similar notices again any time soon. Which approach BEST fits this task?`,
      ko:`학교 행정 담당자가 일정 변경을 알리는 세 문장짜리 학부모 안내문의 어조를 부드럽게 바꾸려 함. 오늘 발송할 예정이고, 비슷한 안내문을 곧 다시 쓸 일은 없을 것으로 봄. 이 일에 가장 잘 맞는 방법은 무엇인가?`,
      opts:[
        {t:`Paste the reminder into a regular chat and ask for a gentler version.`, ko:`일반 대화에 안내문을 붙여넣고 더 부드러운 버전을 요청하기`, ok:true},
        {t:`Set up a dedicated workspace with the school's tone guide before asking for the rewrite.`, ko:`다시 쓰기를 요청하기 전에 학교 어조 가이드를 담은 전용 작업 공간 만들기`},
        {t:`Use the research mode to find examples of how other schools word schedule-change notices.`, ko:`리서치 모드로 다른 학교들이 일정 변경 안내문을 어떻게 쓰는지 사례 찾기`},
        {t:`Ask for the reminder as a separate editable document block and refine it over several rounds.`, ko:`안내문을 별도의 편집 가능한 문서 블록으로 요청하고 여러 차례 다듬기`}
      ],
      explain:{good:`한 번 쓰고 마칠 짧은 작업이며 반복 계획도 없음. 그 대화 안에서 시작하고 마무리되는 일은 Chat으로 충분함.`,
        wrongs:[`<b>B:</b> 반복되지 않는 일에 작업 공간을 만들면 설정 시간을 회수할 기회가 없음.`,
                `<b>C:</b> 세 문장의 어조를 바꾸는 데 여러 출처 조사가 필요하지 않음. 일의 규모에 비해 과한 선택임.`,
                `<b>D:</b> 세 문장짜리 안내문은 대화 안에서 바로 쓰고 마칠 수 있는 분량임. 별도 블록과 여러 차례 수정은 필요 이상임.`]},
      principle:"원칙 ③ 요구에 맞는 선택" },

    { lvl:"실전", ts:"3.1", multi:2,
      q:`An operations analyst at a food distributor prepares a supplier performance report for senior management every month. She always uses the same KPI definitions document and the same report layout, and the report includes on-time delivery rates calculated from an exported spreadsheet. Managers open the report as a document and leave comments on it. Which TWO choices BEST support this work? (Select TWO.)`,
      ko:`식자재 유통 회사의 운영 분석가가 매달 경영진용 공급업체 성과 보고서를 작성함. 항상 같은 KPI 정의 문서와 같은 보고서 양식을 쓰며, 보고서에는 내보낸 스프레드시트에서 계산한 정시 납품률이 들어감. 경영진은 보고서를 문서로 열어 코멘트를 남김. 이 업무를 가장 잘 지원하는 선택 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Keep the KPI definitions and layout rules in a dedicated workspace that every monthly conversation starts from.`, ko:`KPI 정의와 양식 규칙을 전용 작업 공간에 두고 매달 대화를 그 상태에서 시작하기`, ok:true},
        {t:`Have the delivery rates computed by actually running the calculation, not written out in the text answer.`, ko:`납품률을 글 답변으로 쓰게 하지 않고 실제 계산을 실행해 산출하게 하기`, ok:true},
        {t:`Use the research mode each month to gather the latest delivery data for every supplier from outside sources.`, ko:`매달 리서치 모드로 외부 출처에서 공급업체별 최신 납품 데이터 모으기`},
        {t:`Open a new regular chat each month and paste the KPI definitions and the layout before asking for the report.`, ko:`매달 새 일반 대화를 열고 보고서를 요청하기 전에 KPI 정의와 양식을 붙여넣기`},
        {t:`Have the full report written as a plain answer inside the chat, so the figures can be copied out quickly.`, ko:`수치를 빠르게 복사해 갈 수 있도록 보고서 전체를 대화 안의 일반 답변으로 받기`}
      ],
      explain:{good:`반복, 같은 기준 문서, 일정한 양식이 모두 해당하므로 Project에 지시문과 지식 베이스를 두는 것이 맞음. 경영진 보고에 쓰일 수치는 Code Execution으로 실제 계산해야 그럴듯하지만 틀린 숫자를 피할 수 있음.`,
        wrongs:[`<b>C:</b> 납품 데이터는 회사가 내보낸 내부 자료임. 외부 조사로 얻을 정보가 아님.`,
                `<b>D:</b> 매달 같은 자료를 다시 붙여넣는 방식은 반복 입력을 그대로 남김. Project로 옮겨야 할 신호임.`,
                `<b>E:</b> 경영진이 문서로 열어 코멘트를 남기는 산출물임. 대화 안의 일반 답변은 바로 읽고 마칠 답에 맞는 형식임.`]},
      principle:"원칙 ④ 반복 맥락의 설정화" },

    { lvl:"기초", ts:"3.2",
      q:`A communications coordinator at a regional hospital has four tasks on her list today. She wants to use the fastest, most efficient model wherever it is appropriate and a stronger model where the work needs it. Which task is the BEST fit for the fastest model?`,
      ko:`지역 병원의 커뮤니케이션 코디네이터가 오늘 처리할 일 네 가지가 있음. 적절한 곳에는 가장 빠르고 효율적인 모델을, 일이 요구하는 곳에는 더 강한 모델을 쓰려 함. 가장 빠른 모델에 가장 잘 맞는 일은 무엇인가?`,
      opts:[
        {t:`Pulling the event date, venue, and speaker name from 200 registration emails into a table`, ko:`등록 이메일 200건에서 행사 날짜, 장소, 연사 이름을 뽑아 표로 정리하기`, ok:true},
        {t:`Drafting a careful public statement in response to a complaint that is spreading on social media`, ko:`SNS에서 퍼지고 있는 민원에 대응하는 신중한 공식 입장문 초안 작성하기`},
        {t:`Combining conflicting patient survey results and staff interviews into recommendations for hospital leadership`, ko:`상충하는 환자 설문 결과와 직원 인터뷰를 종합해 병원 경영진에게 낼 권고안 만들기`},
        {t:`Reviewing a draft partnership agreement with a local university for unusual or one-sided terms`, ko:`지역 대학과의 제휴 협약서 초안에서 이례적이거나 한쪽에 불리한 조항 검토하기`}
      ],
      explain:{good:`정해진 세 항목을 대량의 이메일에서 뽑아내는 일은 구조가 분명하고 반복적임. 오류가 생겨도 표에서 쉽게 고칠 수 있어 빠르고 효율적인 등급의 조건에 맞음.`,
        wrongs:[`<b>B:</b> 퍼지고 있는 민원에 대한 공식 입장은 어조와 표현의 미묘한 판단이 필요하고 되돌리기 어려움. 빠른 등급에 맞지 않음.`,
                `<b>C:</b> 상충하는 자료를 해석해 경영진 권고를 만드는 일은 가장 역량 높은 등급이 맞는 일임.`,
                `<b>D:</b> 협약서의 이례적 조항을 찾는 일은 해석이 필요한 문서 검토임. 속도보다 철저함이 중요함.`]},
      principle:"원칙 ③ 요구에 맞는 선택" },

    { lvl:"실전", ts:"3.2", multi:2,
      q:`A brand manager at a skincare company is deciding which of this quarter's tasks justify the most capable model. The team is billed by usage, and that model responds more slowly and uses more of the budget per request. Which TWO tasks BEST justify choosing the most capable model? (Select TWO.)`,
      ko:`스킨케어 회사의 브랜드 매니저가 이번 분기 업무 중 어떤 일에 가장 역량 높은 모델을 쓸지 정하고 있음. 팀은 사용량 기준으로 과금되며, 이 모델은 응답이 느리고 요청당 예산을 더 많이 씀. 가장 역량 높은 모델을 고를 근거가 가장 분명한 일 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Interpreting mixed signals from social listening, sales data, and retailer feedback to recommend whether to delay a launch`, ko:`SNS 반응 분석, 판매 데이터, 유통사 피드백의 엇갈린 신호를 해석해 제품 출시 연기 여부 권고하기`, ok:true},
        {t:`Reviewing a 60-page distribution agreement with ambiguously worded exclusivity terms before it goes to the legal team`, ko:`독점 조항 문구가 모호한 60쪽 유통 계약서를 법무팀에 넘기기 전에 검토하기`, ok:true},
        {t:`Tagging 4,000 product reviews with one of five fixed labels for an internal dashboard`, ko:`내부 대시보드용으로 제품 리뷰 4,000건에 정해진 라벨 5개 중 하나 붙이기`},
        {t:`Writing the first draft of the weekly internal team update from a list of bullet-point notes`, ko:`글머리표 메모 목록으로 주간 내부 팀 공유 글 초안 작성하기`},
        {t:`Reformatting the new product specification sheet into a two-column comparison table`, ko:`신제품 사양서를 2열 비교표로 바꾸기`}
      ],
      explain:{good:`출시 연기 여부는 엇갈리는 자료를 해석해 내리는 고위험 판단임. 모호한 계약 조항 검토는 해석이 필요한 복잡한 문서 분석임. 두 일 모두 품질이 속도와 비용보다 중요함.`,
        wrongs:[`<b>C:</b> 정해진 라벨을 대량으로 붙이는 정형 작업임. 빠른 등급이 맞음.`,
                `<b>D:</b> 내부 공유 글 초안은 일반 초안 작업이라 기본 등급이면 충분함.`,
                `<b>E:</b> 정해진 내용을 표 형태로 옮기는 단순 변환임. 최상위 등급의 역량이 필요하지 않음.`]},
      principle:"원칙 ③ 요구에 맞는 선택" },

    { lvl:"기초", ts:"3.3",
      q:`A content strategist on a paid subscription keeps reaching her weekly usage limit by Wednesday. She uses the most capable model for everything, including quick headline ideas, grammar fixes, and her monthly competitive analysis, which often has to wait until the limit resets. Which change is MOST appropriate?`,
      ko:`유료 구독을 쓰는 콘텐츠 전략가가 매주 수요일이면 주간 사용 한도에 도달함. 짧은 제목 아이디어, 맞춤법 수정, 월간 경쟁 분석까지 모든 일에 가장 역량 높은 모델을 쓰며, 경쟁 분석은 한도가 갱신될 때까지 미뤄지는 일이 잦음. 가장 적절한 변경은 무엇인가?`,
      opts:[
        {t:`Use a lighter model for the quick everyday tasks and keep the most capable model for the competitive analysis.`, ko:`짧은 일상 작업에는 가벼운 모델을 쓰고 경쟁 분석에만 가장 역량 높은 모델 쓰기`, ok:true},
        {t:`Keep the most capable model for everything but write shorter prompts so each request uses less of the limit.`, ko:`모든 일에 가장 역량 높은 모델을 유지하되 요청마다 한도를 덜 쓰도록 프롬프트를 짧게 쓰기`},
        {t:`Ask the workspace administrator to turn off features such as web search so that the weekly limit lasts longer.`, ko:`주간 한도가 오래가도록 관리자에게 웹 검색 같은 기능을 꺼 달라고 요청하기`},
        {t:`Move the monthly competitive analysis to the fastest model, since it is the largest task and uses the most of the limit.`, ko:`월간 경쟁 분석이 가장 큰 작업이고 한도를 가장 많이 쓰므로 가장 빠른 모델로 옮기기`}
      ],
      explain:{good:`구독 플랜에서는 사용 한도의 여유가 비용 역할을 함. 일상적인 짧은 작업까지 최상위 등급으로 처리하면 정작 깊은 분석에 필요한 여유가 줄어듦. 작업마다 요구에 맞는 등급을 배정하는 것이 맞음.`,
        wrongs:[`<b>B:</b> 프롬프트를 줄이면 요청의 구체성이 떨어져 품질을 잃을 수 있음. 등급과 작업이 맞지 않는 원인은 그대로임.`,
                `<b>C:</b> 기능을 끄는 것은 모델과 작업의 균형 문제를 다루지 않음. 필요한 기능만 잃음.`,
                `<b>D:</b> 경쟁 분석은 깊이가 필요한 일이라 가장 빠른 등급으로 옮기면 품질을 잃음. 낮출 대상은 일상 작업임.`]},
      principle:"원칙 ③ 요구에 맞는 선택" },

    { lvl:"실전", ts:"3.3", multi:2,
      q:`A project manager at a software reseller is redesigning how her team handles customer onboarding. The work has three steps: sorting about 900 incoming requests a month into five fixed request types, drafting standard welcome replies, and writing a recommendation for leadership on which of two rollout plans to choose, based on conflicting stakeholder feedback. Which TWO model decisions BEST balance cost, speed, and quality? (Select TWO.)`,
      ko:`소프트웨어 리셀러의 프로젝트 매니저가 팀의 고객 온보딩 처리 방식을 다시 설계하고 있음. 일은 세 단계로 이루어짐. 매달 약 900건의 요청을 정해진 요청 유형 5개로 분류하는 단계, 표준 환영 답장 초안을 작성하는 단계, 이해관계자 피드백이 엇갈리는 상황에서 두 가지 도입 계획 중 무엇을 고를지 경영진 권고안을 쓰는 단계임. 비용, 속도, 품질의 균형을 가장 잘 맞추는 모델 결정 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Use the fastest model for sorting the incoming requests into the five types.`, ko:`요청을 5개 유형으로 분류하는 단계에는 가장 빠른 모델 쓰기`, ok:true},
        {t:`Use the most capable model for the leadership recommendation on the rollout plans.`, ko:`도입 계획에 대한 경영진 권고안에는 가장 역량 높은 모델 쓰기`, ok:true},
        {t:`Use the most capable model for all three steps, so that quality stays consistent across the whole workflow.`, ko:`전체 흐름의 품질이 일정하도록 세 단계 모두 가장 역량 높은 모델 쓰기`},
        {t:`Use the fastest model for all three steps to save budget, and let reviewers fix any weak output later.`, ko:`예산을 아끼려고 세 단계 모두 가장 빠른 모델을 쓰고 약한 결과는 검토자가 나중에 고치게 하기`},
        {t:`Run all three steps in one long conversation with the default model, so that every step shares the same context.`, ko:`모든 단계가 같은 맥락을 공유하도록 기본 모델로 하나의 긴 대화에서 세 단계를 모두 진행하기`}
      ],
      explain:{good:`정해진 유형으로 대량 분류하는 단계는 빠른 등급의 조건에 맞음. 엇갈리는 피드백을 해석해 경영진 결정을 돕는 단계는 가장 역량 높은 등급이 맞음. 단계마다 요구가 다르므로 등급도 단계별로 배정함.`,
        wrongs:[`<b>C:</b> 분류 같은 정형 단계까지 최상위 등급으로 처리하면 품질 이득 없이 비용과 대기 시간만 늘어남.`,
                `<b>D:</b> 권고안 단계의 깊이 부족은 나중에 검토자가 채우기 어려움. 고위험 판단 단계까지 낮추는 것은 과한 절약임.`,
                `<b>E:</b> 세 단계는 서로 독립적이라 한 대화로 묶을 이유가 없음. 긴 대화는 컨텍스트 저하로 이어질 수 있고 단계별 등급 배정도 어렵게 함.`]},
      principle:"원칙 ③ 요구에 맞는 선택" },

    { lvl:"기초", ts:"3.4",
      q:`A training coordinator has just finished a long conversation in her team's Project, planning third-quarter workshops. The Project already holds the team's standing instructions and the course catalog. She now wants to start planning the fourth-quarter workshops. What is the MOST appropriate way to begin?`,
      ko:`교육 코디네이터가 팀 Project 안의 긴 대화에서 3분기 워크숍 기획을 막 마쳤음. Project에는 이미 팀의 프로젝트 지시문과 교육 과정 목록이 들어 있음. 이제 4분기 워크숍 기획을 시작하려 함. 시작하는 방법으로 가장 적절한 것은 무엇인가?`,
      opts:[
        {t:`Open a new conversation in the same Project, since the instructions and catalog will already apply there.`, ko:`지시문과 과정 목록이 이미 적용되므로 같은 Project에서 새 대화 열기`, ok:true},
        {t:`Continue in the same long conversation, so that Claude still has every detail of the third-quarter plan.`, ko:`Claude가 3분기 기획의 모든 세부 내용을 계속 갖도록 같은 긴 대화에서 이어가기`},
        {t:`Copy the full third-quarter conversation into a new chat so that nothing from the earlier planning is lost.`, ko:`이전 기획 내용을 하나도 잃지 않도록 3분기 대화 전체를 새 대화에 복사해 넣기`},
        {t:`Open a new conversation and upload the course catalog again, because new conversations always start without any files.`, ko:`새 대화는 항상 파일 없이 시작되므로 새 대화를 열고 과정 목록을 다시 올리기`}
      ],
      explain:{good:`같은 업무 흐름에서 새 과제를 시작할 때는 새 대화가 맞음. Project 지시문과 지식 베이스는 새 대화에도 자동으로 적용되므로 다시 넣을 필요가 없음.`,
        wrongs:[`<b>B:</b> 이미 긴 대화에 새 과제를 더하면 컨텍스트가 더 차고 초반 내용이 압축됨. 4분기 기획에 3분기 대화 전체가 필요하지도 않음.`,
                `<b>C:</b> 긴 대화 전체를 옮기면 새 대화도 처음부터 용량이 차 있음. 이어갈 결정이 있다면 요약해서 옮기면 됨.`,
                `<b>D:</b> Project 안의 새 대화는 지식 베이스를 그대로 참조함. 다시 올리는 것은 중복 작업임.`]},
      principle:"원칙 ④ 반복 맥락의 설정화" },

    { lvl:"실전", ts:"3.4", multi:2,
      q:`A customer success lead has used Claude with Memory turned on for a year. Lately, her drafts keep addressing a client contact who left two months ago, and they refer to last year's renewal targets. Her prompts have not changed, and the problem appears even in brand-new conversations. Which TWO actions BEST address this? (Select TWO.)`,
      ko:`고객 성공 리드가 Memory를 켠 상태로 1년 동안 Claude를 써 왔음. 최근 초안이 두 달 전 떠난 고객사 담당자를 계속 수신인으로 쓰고, 작년 갱신 목표치를 언급함. 프롬프트는 바뀌지 않았고, 완전히 새 대화에서도 같은 문제가 생김. 이 문제를 가장 잘 해결하는 조치 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Review the saved Memory entries and correct or delete the outdated contact and target information.`, ko:`저장된 Memory 항목을 검토해 오래된 담당자 정보와 목표치를 수정하거나 삭제하기`, ok:true},
        {t:`Set a regular schedule, such as monthly, to review Memory and remove entries that no longer apply.`, ko:`월 1회처럼 정기 일정을 정해 Memory를 검토하고 더 이상 맞지 않는 항목 지우기`, ok:true},
        {t:`Switch to Incognito mode for all future client conversations so that the old Memory entries are not used.`, ko:`오래된 Memory 항목이 쓰이지 않도록 앞으로 모든 고객 대화를 Incognito 모드로 진행하기`},
        {t:`Correct the contact name by hand in each draft whenever the old name appears in the output.`, ko:`출력에 옛 이름이 나올 때마다 초안마다 담당자 이름을 직접 고치기`},
        {t:`Switch to the most capable model, which is better at noticing that stored information is out of date.`, ko:`저장된 정보가 오래됐다는 것을 더 잘 알아채는 가장 역량 높은 모델로 바꾸기`}
      ],
      explain:{good:`새 대화에서도 같은 오류가 나오고 프롬프트는 그대로이므로 원인은 여러 대화에 걸쳐 이어지는 저장 정보임. 오래된 Memory 항목을 고치고, 정기 검토로 같은 문제가 다시 쌓이지 않게 함.`,
        wrongs:[`<b>C:</b> Incognito로는 오래된 항목이 고쳐지지 않음. 맞는 Memory까지 쓰지 못하게 되어 연속성을 모두 잃음.`,
                `<b>D:</b> 매번 손으로 고치는 것은 원인을 그대로 둔 채 같은 수정을 반복하는 일임.`,
                `<b>E:</b> 모델 등급은 저장된 정보의 정확성과 관계가 없음. 오래된 항목은 등급과 관계없이 계속 맥락으로 쓰임.`]},
      principle:"원칙 ⑥ 원인 진단 후 수정" }
  ]}
]};
