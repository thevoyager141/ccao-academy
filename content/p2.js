/* PART 02: 프롬프트 작성·작업 실행 (D1, 14%) */
window.CCAO.p2 = { id:"p2", lessons:[

  /* ================= CH 1 · 1.1 프롬프트 5요소 ================= */
  { id:"p2c1", ch:"CH 1", obj:"1.1", title:"프롬프트 5요소와 요청 작성", steps:[
    {type:"concept", kind:"PART BRIEFING · 파트 설명", h:"PART 02. 프롬프트 작성·작업 실행",
     html:`<p class="lead">이 파트는 시험 영역 D1 Prompting and Task Execution을 다룸. Claude에게 일을 맡기는 요청을 설계하고, 결과가 아쉬울 때 요청을 고치는 방법이 범위임.</p>
      <h4>파트 프로필</h4>
      <ul>
        <li>출제 비중: <strong>14%</strong>, 60문항 중 약 <strong>8문항</strong></li>
        <li>구성: 챕터 4개(출제 목표 1.1~1.4)와 미니테스트 8문항</li>
        <li>여기서 배우는 5요소와 증상별 수정 방법은 PART 03(결과 검증)과 PART 07(문제 해결) 문항의 정답 근거로 다시 쓰임</li>
      </ul>
      <h4>다루는 범위</h4>
      <ul>
        <li><strong>CH 1 · 프롬프트 5요소(1.1)</strong>: 역할·맥락·작업·제약·출력 형식 중 이 요청에 필요한 요소를 골라 채우는 방법</li>
        <li><strong>CH 2 · 작업 분해(1.2)</strong>: 여러 단계가 섞인 요청을 순서 있는 단계로 나누고, 단계마다 중간 결과를 확인하는 방법</li>
        <li><strong>CH 3 · 반복 수정(1.3)</strong>: 아쉬운 결과의 증상에서 빠진 요소를 찾아 그 요소만 고치는 방법과 반복을 멈출 시점</li>
        <li><strong>CH 4 · 작업 유형별 전략(1.4)</strong>: 분석·리서치·초안 작성·브레인스토밍마다 엄격하게 정할 부분과 Claude에게 맡길 부분을 나누는 방법</li>
      </ul>
      <h4>출제 형태</h4>
      <ul>
        <li>지문: 실무자가 보낸 요청과 돌아온 결과를 묘사함. 결과는 "너무 일반적임", "다른 질문에 답함", "정확하지만 길고 딱딱함", "숫자가 이상함", "아이디어가 비슷비슷함" 같은 증상으로 제시됨</li>
        <li>질문: "가장 적절한 다음 조치", "가장 효과적인 수정", "먼저 할 일"을 물음. 복수 정답 문항은 효과적인 수정 두 가지를 고르게 함</li>
        <li>오답 선택지: 모델 교체, 같은 요청 반복 실행, "더 잘해 달라"는 막연한 요구, 프롬프트 전면 재작성이 자주 나옴. 모두 수고는 들지만 원인을 겨냥하지 않는 조치임</li>
      </ul>
      <h4>연계</h4>
      <ul>
        <li>공식 강좌: Prep Course 모듈 2 "Prompting &amp; Task Execution"(약 53분). 강좌는 이 영역을 AI Fluency 4역량 중 Description(원하는 결과를 정확히 전달하는 역량)으로 설명함</li>
        <li>업무 처리 흐름 지도의 <strong>③ 요청 작성</strong> 단계임. 도구·모델을 고르고(PART 01) 환경을 설정한(PART 05) 뒤 실제 요청을 보내는 단계에 해당함</li>
        <li>여기서 나온 결과물은 ④ 결과 검증(PART 03)의 검토 대상이 됨. 결과가 나쁠 때 원인을 찾는 전체 순서는 PART 07에서 확장됨</li>
      </ul>
      <div class="callout">시험 포인트 · 이 영역의 오답 선택지는 대부분 "더 강한 도구"나 "더 많은 시도"임. 정답은 대개 요청에 빠진 정보를 채우거나, 요청을 단계로 나누거나, 문제가 된 요소 하나만 고치는 쪽임.</div>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"프롬프트 5요소의 구성",
     html:`<div class="callout term"><b>용어 카드</b> · <b>프롬프트(prompt)</b>: Claude에게 보내는 요청 전체. 입력창에 쓰는 지시 문장, 함께 붙여 넣거나 첨부한 자료, 원하는 결과 형태에 대한 설명이 모두 포함됨.</div>
      <div class="callout term"><b>용어 카드</b> · <b>5요소 구성(component stack)</b>: 공식 강좌가 제시하는 프롬프트 구성 요소 다섯 가지. 역할(Role) · 맥락(Context) · 작업(Task) · 제약(Constraints) · 출력 형식(output format). 쓸 때는 체크리스트로, 결과가 나쁠 때는 빠진 요소를 찾는 진단 도구로 씀.</div>
      <h4>다섯 요소가 각각 정하는 것</h4>
      <div class="tbl"><table>
        <tr><th>요소</th><th>정하는 것</th><th>예시 문장</th></tr>
        <tr><td>역할</td><td>이 작업에서 Claude가 맡을 입장. 답의 어휘 수준, 분석 깊이, 전제가 달라짐</td><td>"B2B 소프트웨어 회사의 콘텐츠 마케팅 담당자 입장에서 검토할 것"</td></tr>
        <tr><td>맥락</td><td>Claude가 스스로 알 수 없는 배경. 대상 독자, 상황, 이전 결정, 원자료</td><td>"독자는 중소기업 인사 담당자임. 지난 웨비나 질문의 절반 이상이 도입 비용에 관한 것이었음"</td></tr>
        <tr><td>작업</td><td>하나의 분명한 동사로 표현한 구체적 행동. 요약·비교·작성·식별 등</td><td>"첨부한 세 안을 비용·일정·위험 기준으로 비교할 것"</td></tr>
        <tr><td>제약</td><td>길이, 어조, 포함·제외 범위, 피할 것</td><td>"800자 이내. 경쟁사 실명과 과장 표현은 쓰지 말 것"</td></tr>
        <tr><td>출력 형식</td><td>결과의 형태. 표, 글머리표, 3문단 메모, 이메일 초안 등</td><td>"항목 / 현황 / 다음 조치 3열 표로 정리할 것"</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>예시 문장 다섯 개는 한 프롬프트 안에 함께 들어가는 문장임. 요소마다 한두 문장이면 충분함.</p>
      <h4>요소별 판단 포인트</h4>
      <ul>
        <li><strong>맥락</strong>은 실무자가 가장 자주 빠뜨리는 요소임. 작성자는 이미 알고 있어서 쓸 필요를 느끼지 못함</li>
        <li><strong>작업</strong> 동사가 모호하면("이 자료 좀 볼 것") Claude는 요약할지, 평가할지, 고쳐 쓸지를 추측함</li>
        <li><strong>제약</strong>은 결과를 큰 편집 없이 바로 쓰게 만드는 경계임</li>
        <li><strong>출력 형식</strong>을 처음부터 밝히면 "표로 다시 정리할 것" 같은 수정 요청이 한 번 줄어듦</li>
        <li><strong>역할</strong>은 다른 요소를 대신하지 못함. "10년 차 마케터로서 작성할 것"만 있고 독자와 목적이 없으면 결과는 여전히 일반론임</li>
      </ul>
      <h4>요청별 필요 요소의 수</h4>
      <ul>
        <li>간단한 질문: 작업 하나와, 필요하면 제약 하나로 충분함</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 간단한 질문</span>'리텐션율'과 '재구매율'의 차이를 두 문장으로 설명할 것.</div>
      <ul>
        <li>고객에게 나갈 결과물, 임원 보고 자료처럼 중요한 결과물: 다섯 요소를 모두 채움. 쓰는 데 30초를 더 들이면 수정 라운드 여러 번을 줄일 수 있음</li>
        <li>이 출제 목표가 실제로 묻는 기술은 "이 요청에 어떤 요소가 필요한가"를 알아보는 판단임</li>
      </ul>
      <h4>맥락 공백</h4>
      <div class="callout term"><b>용어 카드</b> · <b>맥락 공백(context gap)</b>: 작성자의 머릿속이나 Claude와 연결되지 않은 시스템에만 있는 정보. 처음 쓰는 사용자의 프롬프트가 일반적인 결과를 내는 가장 흔한 원인임.</div>
      <ul>
        <li>Claude는 사용자의 받은편지함, 조직도, 지난 회의 내용을 스스로 볼 수 없음</li>
        <li>커넥터(connector)로 Google Drive·Gmail 같은 소스를 연결하면 그 소스를 볼 수 있음. 연결한 뒤에도 허용된 범위까지만 접근함</li>
        <li>연결되지 않은 정보는 프롬프트에 직접 쓰거나 파일로 첨부해야 함</li>
        <li>매번 같은 배경을 붙여 넣고 있다면 프로젝트 지시문(Project instructions)이나 지식 베이스(knowledge base)로 옮길 시점임(PART 05)</li>
      </ul>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"약한 프롬프트와 강한 프롬프트 비교",
     html:`<p class="lead">같은 모델과 같은 자료에서도 요청의 구체성에 따라 결과 품질이 달라짐. 아래 두 예는 업무 문서 작성과 데이터 정리 작업을 5요소로 다시 쓴 것임.</p>
      <h4>업무 작업 예 · 신제품 보도자료</h4>
      <div class="sample bad"><span class="sl">예시 · 수정 전 프롬프트</span>신제품 출시 보도자료를 작성할 것.</div>
      <ul>
        <li>빠진 요소: 맥락(어떤 제품인지, 무엇이 새로운지, 누가 읽는지), 제약(분량, 피할 표현), 출력 형식(보도자료 구성)</li>
        <li>예상 결과: 어느 회사 제품에나 붙일 수 있는 일반적인 보도자료. 제품 특징과 수치를 Claude가 그럴듯하게 지어낼 수도 있음. 이런 현상을 환각(hallucination)이라고 하며 PART 03에서 다룸</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · 수정 후 프롬프트</span>[역할] 생활가전 브랜드의 홍보 담당자 입장에서 작성할 것.
[맥락] 당사는 11월 3일 음식물 처리기 '그린박스 2'를 출시함. 첨부한 제품 사양서와 출시 기획안이 근거 자료임. 독자는 생활·가전 담당 기자임. 기획안이 정한 핵심 메시지는 전작 대비 소음 감소임.
[작업] 첨부 자료만 근거로 출시 보도자료 초안을 작성할 것.
[제약] 1,200자 이내. 첨부 자료에 없는 수치와 인용문은 만들지 말 것. 경쟁사 실명과 "업계 최초" 같은 최상급 표현은 쓰지 말 것.
[출력 형식] 제목 1줄, 부제 1줄, 본문 4문단, 회사 소개 1문단 순서.</div>
      <ul>
        <li>대괄호 머리표는 설명용 표시임. 실제 프롬프트에서는 빼고 문장으로 이어 써도 됨</li>
        <li>[맥락]에서 첨부 자료를 근거로 지정하면 Claude가 참고할 범위가 정해짐</li>
        <li>[제약]의 "자료에 없는 수치 금지"는 지어낸 수치를 줄이고, 결과를 원자료와 대조하기 쉽게 만듦</li>
      </ul>
      <h4>기술 작업 예 · 거래처 목록 정리</h4>
      <div class="sample bad"><span class="sl">예시 · 수정 전 프롬프트</span>첨부한 거래처 엑셀 파일에서 중복을 정리할 것.</div>
      <div class="sample good"><span class="sl">예시 · 수정 후 프롬프트</span>[맥락] 첨부 파일은 영업팀 거래처 목록 2,300행임. 같은 회사가 '(주)한빛상사', '한빛상사 주식회사'처럼 다르게 입력된 경우가 많음. 정리 결과는 다음 달 CRM 이전에 쓸 예정임.
[작업] 같은 회사로 보이는 행을 찾아 하나의 표준 이름으로 통일할 것.
[제약] 원본 열은 수정하지 말고 "표준 거래처명" 열을 새로 추가할 것. 같은 회사인지 애매한 쌍은 합치지 말고 따로 표시할 것. 정리 작업은 Code Execution(코드 실행)으로 실행할 것.
[출력 형식] 정리된 엑셀 파일 1개와 "합친 이름 / 표준 이름 / 판단 근거" 3열 표.</div>
      <ul>
        <li>기술 작업도 같은 5요소를 씀. 이 예는 역할을 생략함</li>
        <li>결과물을 바로 쓸 수 있는지는 제약(원본 보존, 애매한 경우 처리)과 출력 형식(파일, 대조표)이 정함</li>
        <li>중복 제거 같은 데이터 정리와 계산은 문장 생성보다 Code Execution으로 실제 실행하는 편이 정확함(PART 01)</li>
      </ul>
      <h4>명세처럼 보이지만 효과가 없는 문구</h4>
      <div class="sample bad"><span class="sl">예시 · 효과 없는 문구</span>전문적이고 세련되게, 임팩트 있게 작성할 것.</div>
      <ul>
        <li>어느 요소의 구체 조건도 정하지 않음. 누구에게 전문적인지, 어떤 어조가 세련된 것인지를 Claude가 추측해야 함</li>
        <li>바꿔 쓴 예: "독자는 재무 담당 임원임. 결론을 첫 문장에 두고, 수치마다 출처를 괄호로 표기할 것"</li>
        <li>공식 강좌의 연습 문제도 이런 문구를 5요소 어디에도 속하지 않는 조각으로 분류함</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"요청 상황별 필요 요소 판단",
     html:`__MAP:prompt__
      <h4>상황 → 선택 → 이유</h4>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>용어 뜻이나 간단한 사실을 본인이 빠르게 확인함</td><td>작업 하나(필요하면 제약 하나)</td><td>짧은 답이면 충분함. 과잉 명세는 시간만 씀</td></tr>
        <tr><td>고객·임원·외부에 나갈 결과물</td><td>5요소 모두</td><td>수정 라운드를 줄이고 바로 쓸 수 있는 결과를 얻음</td></tr>
        <tr><td>결과가 어느 회사에나 맞을 법한 일반론</td><td>맥락 보강(독자, 상황, 원자료)</td><td>Claude가 추론할 수 없는 배경이 빠진 상태임</td></tr>
        <tr><td>요약을 원했는데 평가를 해 옴</td><td>작업 동사를 분명하게</td><td>동사가 모호하면 Claude가 행동을 추측함</td></tr>
        <tr><td>내용은 맞는데 길이·어조·형태가 안 맞음</td><td>제약·출력 형식 추가</td><td>내용 요소는 이미 충분함</td></tr>
        <tr><td>사내 시스템에 있는 정보가 필요함</td><td>자료 첨부, 또는 승인된 커넥터 연결</td><td>Claude는 연결되지 않은 정보를 볼 수 없음</td></tr>
      </table></div>
      <h4>작성 순서</h4>
      <div class="flow"><span class="nd">① 목적 확인<small>결과를 누가 어디에 쓰는가</small></span><span class="ar">→</span><span class="nd">② 필요한 요소 고르기<small>간단한 질문인가, 중요한 결과물인가</small></span><span class="ar">→</span><span class="nd hot">③ 요소 채우기<small>맥락과 작업 동사부터</small></span><span class="ar">→</span><span class="nd">④ 빠진 요소 점검<small>5요소에 대조</small></span></div>
      <p class="howto"><b>읽는 법</b>화살표 = 프롬프트를 쓰는 순서. 강조된 ③에서 가장 많이 빠지는 요소는 맥락임. ④는 보내기 전에 5요소를 한 번 훑어보는 점검임.</p>
      <div class="callout">시험 포인트 · 결과가 일반적이거나 빗나갔다는 지문의 정답은 대개 빠진 맥락이나 형식을 채우는 선택지임. 모델 교체나 반복 실행은 요청에 없는 정보를 만들어 내지 못함.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>결과가 일반적이라는 이유로 상위 모델로 바꿈: 원인이 맥락 공백이면 모델을 바꿔도 같은 일반론이 나옴</li>
        <li>같은 프롬프트를 여러 번 실행해 나은 것을 고름: 요청에 빠진 정보는 어느 결과에도 없음</li>
        <li>"더 전문적으로", "더 잘" 같은 문구를 덧붙임: 어느 요소도 구체화하지 않음</li>
        <li>모든 질문에 5요소를 다 씀: 본인용 간단한 확인 질문에는 과잉 명세임</li>
        <li>역할만 지정하고 독자와 목적을 빼먹음: 역할은 맥락을 대신하지 못함</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Generic welcome email", ts:"1.1",
     q:`An HR coordinator at a logistics company types, "Write a welcome email for new hires." Claude returns a polished but generic email that praises "our exciting culture" and describes a first-week orientation the company does not actually run. The email must go to twelve warehouse staff who start on Monday. What is the MOST effective next step?`,
     ko:`물류 회사의 인사 담당자가 "신규 입사자 환영 이메일을 작성할 것"이라고 입력함. Claude는 문장은 매끄럽지만 일반적인 이메일을 돌려줌. 이메일은 "활기찬 조직 문화"를 칭찬하고, 회사가 실제로 운영하지 않는 첫 주 오리엔테이션을 소개함. 이 이메일은 월요일에 출근하는 물류센터 직원 12명에게 보내야 함. 가장 효과적인 다음 조치는 무엇인가?`,
     opts:[
       {t:`Add who the new hires are, what their actual first day involves, and the length and tone wanted.`, ko:`입사자가 누구인지, 첫날 실제로 무엇을 하는지, 원하는 길이와 어조를 추가하기`, ok:true},
       {t:`Switch to a more capable model so the email sounds less generic and more like the company.`, ko:`덜 일반적이고 회사다운 이메일이 나오도록 더 역량 높은 모델로 바꾸기`},
       {t:`Regenerate the same request several times and choose the version that reads most naturally.`, ko:`같은 요청을 여러 번 다시 생성해 가장 자연스러운 버전을 고르기`},
       {t:`Ask Claude to make the email more engaging, specific, and professional before it goes out to the new staff.`, ko:`신규 직원에게 보내기 전에 더 매력적이고 구체적이며 전문적으로 써 달라고 요청하기`}
     ],
     explain:{ good:`결과가 일반적이고 실제와 다른 내용(운영하지 않는 오리엔테이션)까지 들어간 원인은 맥락 공백임. 입사자가 누구인지, 첫날 무엇을 하는지는 담당자만 아는 정보이므로 프롬프트에 직접 넣어야 함. 길이와 어조 같은 제약을 함께 주면 바로 보낼 수 있는 결과에 가까워짐.`,
       wrongs:[`<b>B:</b> 모델을 바꿔도 요청에 없는 회사 정보는 생기지 않음. 같은 일반론이 반복됨.`,
               `<b>C:</b> 같은 요청을 다시 실행하면 표현만 달라짐. 빠진 정보는 어느 버전에도 없음.`,
               `<b>D:</b> "더 매력적이고 구체적으로"는 어떤 정보를 넣을지 정하지 않는 막연한 문구임. 없는 행사가 다시 들어갈 수도 있음.`]},
     principle:"원칙 ① 요청의 구체화",
     hint:`결과에 들어간 잘못된 내용은 Claude가 무엇을 몰라서 생겼는지 생각할 것. 그 정보를 가진 사람이 누구인지가 판단 기준임.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[ {t:`회사와 입사자에 대한 정보가 담당자에게만 있고 프롬프트에는 없었기 때문임`, ok:true},
              {t:`5요소를 모두 채우는 것이 공식 강좌가 권장하는 정석이기 때문임`},
              {t:`성능이 높은 모델일수록 회사 문화를 더 정확하게 추론하기 때문임`},
              {t:`이메일은 짧은 글이라 한 번 더 생성하면 대부분 해결되기 때문임`} ],
       explain:`일반적인 결과의 원인은 Claude가 추론할 수 없는 배경이 빠진 맥락 공백임. 원인이 정보 부족이면 해결도 정보 추가임.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Vague request verb", ts:"1.1",
     q:`A marketing manager pastes the text of three competitor landing pages and writes, "Take a look at these and share your thoughts." Claude returns a neat summary of each page. What she actually needed was a list of customer pain points that none of the three pages address, to shape her team's next campaign. What is the BEST revision to the prompt?`,
     ko:`마케팅 매니저가 경쟁사 랜딩 페이지 세 곳의 텍스트를 붙여 넣고 "이것들을 보고 의견을 줄 것"이라고 씀. Claude는 페이지별로 깔끔한 요약을 돌려줌. 매니저에게 실제로 필요했던 것은 세 페이지 모두가 다루지 않는 고객 고충 목록이었음. 이 목록으로 팀의 다음 캠페인 방향을 정하려 했음. 프롬프트를 수정하는 가장 좋은 방법은 무엇인가?`,
     opts:[
       {t:`Name the exact action: find customer pain points that none of the three pages address, with brief reasons.`, ko:`해야 할 행동을 정확히 밝히기: 세 페이지 모두가 다루지 않는 고객 고충을 찾고 짧은 이유를 붙이게 하기`, ok:true},
       {t:`Add a role line asking Claude to respond as a senior brand strategist with competitive analysis expertise.`, ko:`경쟁 분석에 능한 시니어 브랜드 전략가로서 답하라는 역할 문장 추가하기`},
       {t:`Ask for a longer and more detailed review of each page so that the gaps become easier to spot.`, ko:`빈 곳이 잘 보이도록 페이지별로 더 길고 자세한 검토를 요청하기`},
       {t:`Paste two more competitor pages so Claude has a broader sample before forming its overall impressions.`, ko:`Claude가 전체 인상을 정리하기 전에 더 넓게 볼 수 있도록 경쟁사 페이지 두 곳을 더 붙여 넣기`}
     ],
     explain:{ good:`결과가 요청과 다른 일을 한 원인은 작업 동사가 모호했기 때문임. "의견을 줄 것"은 요약·평가·비교 중 무엇을 원하는지 정하지 않음. 필요한 행동(세 페이지 모두가 다루지 않는 고객 고충 찾기)과 결과 형태를 밝히면 원하는 결과에 가까워짐.`,
       wrongs:[`<b>B:</b> 역할 지정은 어휘와 깊이를 정할 뿐 무엇을 할지는 정하지 않음. 동사가 모호하면 전문가 역할로도 다시 요약이 나올 수 있음.`,
               `<b>C:</b> 페이지별로 더 길고 자세한 검토를 받으면 원하지 않은 작업을 더 많이 시키는 것임. 빈 곳을 찾는 일은 여전히 매니저 몫으로 남음.`,
               `<b>D:</b> 자료를 늘려도 무엇을 하라는 지시가 없으면 요약할 대상만 늘어남.`]},
     principle:"원칙 ① 요청의 구체화",
     hint:`돌아온 요약 자체에는 오류가 없음. 매니저가 원한 결과와 실제로 받은 결과가 어떤 점에서 다른지 비교할 것.`}
  ]},

  /* ================= CH 2 · 1.2 작업 분해 ================= */
  { id:"p2c2", ch:"CH 2", obj:"1.2", title:"복잡한 요청의 작업 분해", steps:[
    {type:"concept", kind:"CONCEPT · 개념 설명", h:"작업 분해의 개념과 단계 설계",
     html:`<div class="callout term"><b>용어 카드</b> · <b>작업 분해(task decomposition)</b>: 여러 단계가 섞인 요청을 순서 있는 개별 단계로 나누고 한 단계씩 실행하는 기법. 단계마다 확인할 수 있는 중간 결과가 나옴.</div>
      <ul>
        <li>무엇인가: 기능이나 설정이 아니라 요청을 보내는 방식임. 한 번에 보낼 요청을 여러 번의 요청으로 나눠 순서대로 보냄</li>
        <li>언제 쓰는가: 한 문장 안에 기준 정하기, 적용하기, 비교하기, 추천하기처럼 성격이 다른 일이 둘 이상 들어 있을 때</li>
      </ul>
      <h4>한 프롬프트에 몰아넣으면 생기는 문제</h4>
      <ul>
        <li>모든 단계가 얕아짐. 기준 설정부터 추천까지 한 번에 하면 단계마다 들어가는 분석이 줄어듦</li>
        <li>추론 과정이 보이지 않음. 추천만 나오고 어떤 기준으로 판단했는지 확인할 수 없음</li>
        <li>오류를 늦게 발견함. 첫 단계의 기준이 틀려도 최종 추천을 받은 뒤에야 알게 됨</li>
      </ul>
      <h4>분해하면 달라지는 점</h4>
      <ul>
        <li>단계마다 나온 중간 결과(intermediate output)를 사람이 확인함. 기준이 틀리면 점수를 매기기 전에 바로잡음</li>
        <li>결론에 이른 과정을 단계별로 되짚어 볼 수 있음. 이를 감사 가능성(auditability)이라고 함. 상사가 "왜 이 업체인가"를 물으면 단계별 근거를 보여 줄 수 있음</li>
      </ul>
      <h4>예시 · 연말 고객 행사 대행사 선정</h4>
      <div class="sample bad"><span class="sl">예시 · 분해 전 프롬프트</span>첨부한 제안서 4건을 검토해서 연말 고객 행사 대행사로 어디가 가장 좋은지 추천할 것.</div>
      <ul>
        <li>기준, 점수, 장단점, 추천이 한 문장에 섞여 있음. 추천은 나오지만 근거를 확인하기 어려움</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · 분해 후 프롬프트 (순서대로 보냄)</span>1단계 · 기준 도출
첨부한 행사 요구사항 문서를 근거로 대행사 평가 기준과 가중치를 표로 제안할 것. 아직 제안서는 평가하지 말 것.

(담당자가 기준표를 확인하고 "300명 이상 행사 운영 경험" 기준을 추가함)

2단계 · 점수화
확정된 기준표로 제안서 4건에 각각 점수를 매길 것. 점수마다 근거가 된 제안서 문장을 함께 표시할 것.

3단계 · 장단점 정리
상위 2개 업체의 장단점(trade-off)을 비용·일정·위험 측면으로 비교할 것.

4단계 · 추천
1~3단계 결과만 근거로 1개 업체를 추천하고, 추천 이유 3가지와 남은 위험 1가지를 쓸 것.</div>
      <ul>
        <li>공식 강좌의 공급업체 평가 예와 같은 순서임: 기준 도출 → 점수화 → 장단점 → 추천</li>
        <li>1단계 뒤 사람이 기준을 확인하는 절차가 가장 중요함. 기준이 틀리면 이후 모든 점수가 함께 틀림</li>
        <li>추천을 먼저 받고 근거를 나중에 요청하면 근거가 이미 정해진 결론에 맞춰짐. 기준이 먼저, 추천이 마지막임</li>
      </ul>
      <h4>단계별 프롬프트 작성 요령</h4>
      <ul>
        <li>이번 단계의 범위만 요청하고, 다음 단계는 아직 하지 말라고 밝힘. 예시 1단계의 "아직 제안서는 평가하지 말 것"이 이 역할을 함</li>
        <li>중간 결과는 표처럼 확인하기 쉬운 형태로 받음. 사람이 빠르게 훑어보고 고칠 수 있어야 함</li>
        <li>다음 단계 요청에서는 앞 결과를 이름으로 지칭함("확정된 기준표로"). 무엇을 근거로 삼을지가 분명해짐</li>
        <li>사람이 중간 결과를 고쳤다면 그 수정 내용을 다음 요청에 적음. Claude는 담당자가 머릿속으로 바꾼 내용을 알 수 없음</li>
      </ul>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"공유 기반 추출과 대화 운영",
     html:`<p class="lead">하나의 원문에서 여러 결과물을 만들 때는 분해 순서가 달라짐. 모든 결과물이 함께 쓰는 내용을 먼저 뽑고 확인함.</p>
      <div class="callout term"><b>용어 카드</b> · <b>공유 기반(shared foundation)</b>: 여러 결과물이 함께 근거로 삼는 중간 결과. 예: 개정 규정에서 뽑은 변경사항 목록. 이 목록을 원문과 대조해 확인한 뒤 결과물을 만듦.</div>
      <h4>예시 · 개정 재택근무 규정에서 결과물 3종 만들기</h4>
      <div class="flow"><span class="nd">① 변경사항 추출<small>개정 규정 → 변경 목록</small></span><span class="ar">→</span><span class="nd hot">② 추출 검증<small>담당자가 원문과 대조</small></span><span class="ar">→</span><span class="nd">③ 결과물 작성<small>전사 공지 · FAQ · 임원 브리핑</small></span></div>
      <p class="howto"><b>읽는 법</b>화살표 = 실행 순서. ③의 세 결과물은 모두 ①의 목록을 근거로 함. 강조된 ②를 건너뛰면 ①의 오독이 세 결과물에 그대로 들어감.</p>
      <div class="sample good"><span class="sl">예시 · 1단계 프롬프트</span>첨부한 개정 재택근무 규정과 기존 규정을 비교해 변경된 조항만 목록으로 정리할 것.
"조항 번호 / 기존 내용 / 변경 내용 / 적용 시작일" 4열 표로 쓸 것.
원문에 근거가 없는 해석은 쓰지 말고, 해석이 필요한 조항은 "확인 필요"로 표시할 것.</div>
      <ul>
        <li>담당자는 이 표를 원문과 대조한 뒤에 공지·FAQ·브리핑 작성을 요청함</li>
        <li>세 결과물을 각각 다른 대화에서 원문부터 만들게 하면 같은 조항을 서로 다르게 해석한 문서 세 개가 나올 수 있음</li>
        <li>공유 기반 검증은 한 번이면 됨. 검증하지 않은 오류는 결과물 수만큼 고쳐야 함</li>
        <li>규정·안전·재무처럼 틀렸을 때 영향이 큰 원문일수록 이 검증을 먼저 함</li>
      </ul>
      <h4>한 대화 유지와 대화 분리의 기준</h4>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>다음 단계가 앞 단계 결과를 써야 함(기준 → 점수)</td><td>한 대화 안에서 이어서 진행</td><td>각 단계가 이전 결과를 볼 수 있음</td></tr>
        <tr><td>서로 독립된 작업(다른 제품의 별개 보고서)</td><td>별도 대화</td><td>서로의 내용이 섞이지 않음</td></tr>
        <tr><td>대화가 길어져 초반에 준 지시를 잘 따르지 않음</td><td>결정 사항과 중간 결과를 요약해 새 대화에서 이어 감</td><td>컨텍스트 창(context window)이 차면 앞부분이 요약·압축되어 초반 지시의 영향이 약해질 수 있음(PART 01)</td></tr>
      </table></div>
      <ul>
        <li>새 대화로 옮길 때는 확인을 마친 중간 결과(기준표, 추출 목록)를 함께 가져감. 아무것도 없이 새로 시작하면 이미 확인한 내용을 다시 만들어야 함</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"작업 분해 판단 기준",
     html:`__MAP:prompt__
      <h4>상황 → 선택 → 이유</h4>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>한 문장에 기준 설정·적용·비교·추천이 함께 들어 있음</td><td>단계로 나눠 순서대로 실행</td><td>단계별 결과를 확인할 수 있고, 기준 오류를 점수화 전에 잡음</td></tr>
        <tr><td>여러 후보(업체, 기획안, 도구)를 평가해 하나를 고름</td><td>기준 → 점수 → 장단점 → 추천</td><td>공통 기준이 있어야 후보끼리 비교할 수 있음</td></tr>
        <tr><td>한 원문에서 여러 결과물(공지, FAQ, 브리핑)을 만듦</td><td>공통 내용 추출 → 검증 → 결과물 작성</td><td>오독이 모든 결과물로 퍼지는 것을 막음</td></tr>
        <tr><td>단계가 앞 결과에 의존함</td><td>같은 대화에서 진행</td><td>이전 결과를 이어서 씀</td></tr>
        <tr><td>단계가 서로 독립적이거나 대화가 너무 길어짐</td><td>새 대화(필요하면 요약과 중간 결과를 가져감)</td><td>내용 섞임과 초반 지시 약화를 피함</td></tr>
        <tr><td>요청 한 번으로 끝날 짧은 작업(문장 다듬기)</td><td>분해하지 않음</td><td>단계가 하나뿐이면 나눌 이유가 없음</td></tr>
      </table></div>
      <h4>분해 설계 순서</h4>
      <div class="flow"><span class="nd">① 단계 나열<small>요청에 숨은 동사 찾기</small></span><span class="ar">→</span><span class="nd">② 순서 정하기<small>무엇이 무엇의 근거인가</small></span><span class="ar">→</span><span class="nd hot">③ 확인 지점 넣기<small>기준·추출 뒤 사람 확인</small></span><span class="ar">→</span><span class="nd">④ 대화 운영 결정<small>이어 갈지, 나눌지</small></span></div>
      <p class="howto"><b>읽는 법</b>화살표 = 분해를 설계하는 순서. 강조된 ③은 다음 단계들이 근거로 쓰는 결과 바로 뒤에 둠.</p>
      <div class="callout">시험 포인트 · 여러 후보를 평가해 추천하는 일과 한 문서로 여러 결과물을 만드는 일은 단계끼리 의존함. 평가 기준이나 공통 추출을 먼저 만들고 확인해야 그 오류가 뒤 단계로 퍼지지 않음.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>추천부터 받고 근거를 나중에 요청함: 근거가 이미 정해진 결론에 맞춰짐</li>
        <li>후보마다 별도 대화에서 따로 평가함: 공통 기준이 없어 점수를 비교할 수 없음</li>
        <li>공통 추출을 확인하기 전에 결과물부터 작성함: 같은 오류가 모든 결과물에 들어감</li>
        <li>모든 단계를 아주 상세한 프롬프트 하나에 넣음: 프롬프트가 길어져도 단계별 확인 지점은 생기지 않음</li>
        <li>앞 결과에 의존하는 단계를 매번 빈 새 대화에서 시작함: 이전 결과를 볼 수 없게 됨</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Tool recommendation", ts:"1.2",
     q:`An operations analyst must recommend one of five project management tools to the leadership team next week. She has the team's requirements document and a feature sheet for each tool. Her first attempt, a single prompt asking Claude to "pick the best tool and explain why," produced a confident recommendation, but she could not tell how the tools had been compared. What should she do NEXT?`,
     ko:`운영 분석가가 다음 주 경영진에게 프로젝트 관리 도구 5개 중 하나를 추천해야 함. 팀의 요구사항 문서와 도구별 기능 소개서가 있음. 첫 시도로 "가장 좋은 도구를 고르고 이유를 설명할 것"이라는 프롬프트 하나를 보냈고, 확신 있는 추천을 받았음. 그러나 도구들을 어떻게 비교했는지는 알 수 없었음. 다음에 무엇을 해야 하는가?`,
     opts:[
       {t:`Have Claude draw weighted factors from the requirements, check them, then score each tool and compare the top two.`, ko:`요구사항에서 가중치가 있는 기준을 뽑게 하고 확인한 뒤, 도구별 점수를 매기고 상위 두 개를 비교하게 하기`, ok:true},
       {t:`Ask Claude to add a detailed justification section explaining why the recommended tool beats the other four.`, ko:`추천한 도구가 나머지 네 개보다 나은 이유를 설명하는 상세한 근거 단락을 추가하게 하기`},
       {t:`Evaluate each tool in its own separate conversation so details about one tool cannot influence how another is judged.`, ko:`한 도구의 정보가 다른 도구 평가에 영향을 주지 않도록 도구마다 별도 대화에서 평가하기`},
       {t:`Rerun the original prompt with a more capable model and present the answer if it recommends the same tool again.`, ko:`더 역량 높은 모델로 원래 프롬프트를 다시 실행하고 같은 도구가 추천되면 그 답을 보고하기`}
     ],
     explain:{ good:`한 번에 받은 추천은 어떤 기준으로 비교했는지 보이지 않아 경영진에게 근거를 설명할 수 없음. 요구사항에서 기준과 가중치를 먼저 뽑아 확인하고, 그 기준으로 점수를 매기고, 상위 후보를 비교한 뒤 추천을 받으면 단계마다 결과를 점검할 수 있음. 기준이 틀렸다면 점수를 매기기 전에 바로잡을 수 있음.`,
       wrongs:[`<b>B:</b> 결론을 먼저 정한 뒤 근거를 쓰게 하는 방식임. 근거가 결론에 맞춰 만들어지며 비교 과정은 여전히 보이지 않음.`,
               `<b>C:</b> 도구마다 따로 평가하면 공통 기준이 없어 점수를 서로 비교할 수 없음. 꼼꼼해 보이지만 비교 가능성을 잃음.`,
               `<b>D:</b> 같은 결론이 다시 나와도 비교 근거는 확인되지 않음. 모델 교체로는 과정이 보이지 않는 문제가 해결되지 않음.`]},
     principle:"원칙 ① 요청의 구체화",
     hint:`추천 내용보다 "어떻게 비교했는지 알 수 없었다"는 문장에 주목할 것. 사람은 어느 시점에 중간 결과를 확인할 수 있어야 하는가?`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[ {t:`기준을 먼저 확정해야 이후 점수와 추천을 단계마다 확인하고 설명할 수 있기 때문임`, ok:true},
              {t:`공식 강좌의 공급업체 평가 예가 이 순서를 썼기 때문임`},
              {t:`단계를 나누면 Claude가 더 빠르게 답하기 때문임`},
              {t:`후보가 다섯 개 이상이면 한 대화에 담을 수 없기 때문임`} ],
       explain:`작업 분해의 가치는 단계마다 생기는 중간 결과를 사람이 점검할 수 있다는 점임. 기준이 확인되어야 그 위에 쌓은 점수와 추천도 설명할 수 있음.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: One report, three pieces", ts:"1.2",
     q:`A nonprofit communications lead has a 40-page annual impact report. From it she needs a donor newsletter, a one-page board summary, and five social media posts, all due Friday. Every piece will quote the same program results and figures. What is the MOST reliable way to structure the work with Claude?`,
     ko:`비영리단체 커뮤니케이션 책임자에게 40쪽 분량의 연간 성과 보고서가 있음. 이 보고서로 후원자 뉴스레터, 1쪽짜리 이사회 요약, 소셜 미디어 게시물 5개를 금요일까지 만들어야 함. 모든 결과물이 같은 사업 성과와 수치를 인용함. Claude와 작업을 구성하는 가장 신뢰할 수 있는 방법은 무엇인가?`,
     opts:[
       {t:`First have Claude pull the key results and figures into one list, check it against the report, then draft each piece from it.`, ko:`먼저 핵심 성과와 수치를 한 목록으로 뽑게 하고 보고서와 대조해 확인한 뒤, 그 목록으로 각 결과물을 작성하기`, ok:true},
       {t:`Open three separate conversations, upload the report to each, and request one piece per conversation so each gets full attention.`, ko:`대화 세 개를 따로 열어 각각 보고서를 올리고, 결과물마다 집중하도록 대화당 하나씩 요청하기`},
       {t:`Ask for all three pieces in one detailed prompt, then compare the figures across them afterward to spot any inconsistencies.`, ko:`상세한 프롬프트 하나로 세 결과물을 모두 요청한 뒤, 결과물 간 수치를 비교해 불일치를 찾기`},
       {t:`Draft the board summary first since it carries the highest stakes, then ask Claude to adapt it into the other two pieces.`, ko:`위험이 가장 큰 이사회 요약을 먼저 쓰고, 그것을 나머지 두 결과물로 바꾸게 하기`}
     ],
     explain:{ good:`세 결과물이 같은 성과와 수치를 인용하므로, 그 내용을 먼저 한 목록으로 뽑아 보고서 원문과 대조하는 것이 가장 확실함. 확인된 목록을 근거로 각 결과물을 쓰면 수치가 서로 어긋나지 않음. 검증은 한 번이면 되고, 같은 오독이 세 결과물에 퍼지지 않음.`,
       wrongs:[`<b>B:</b> 대화마다 원문을 따로 해석하게 되어 같은 수치가 결과물마다 다르게 나올 수 있음. 공통 내용을 확인하는 단계가 없음.`,
               `<b>C:</b> 결과물을 다 만든 뒤 비교하는 방식임. 세 문서가 같은 오독을 했다면 서로 비교해도 찾을 수 없음.`,
               `<b>D:</b> 이사회 요약에 오류가 있으면 다른 두 결과물에 그대로 옮겨짐. 원문과 대조한 공통 기반이 없음.`]},
     principle:"원칙 ② 내보내기 전 검증",
     hint:`세 결과물이 공통으로 쓰는 내용이 무엇인지 찾을 것. 그 내용을 언제 확인해야 오류를 한 번에 잡을 수 있는가?`}
  ]},

  /* ================= CH 3 · 1.3 반복 수정 ================= */
  { id:"p2c3", ch:"CH 3", obj:"1.3", title:"진단 기반 프롬프트 반복 수정", steps:[
    {type:"concept", kind:"CONCEPT · 개념 설명", h:"증상별 부분 수정",
     html:`<div class="callout term"><b>용어 카드</b> · <b>부분 수정(targeted revision)</b>: 결과가 아쉬울 때 프롬프트 전체를 새로 쓰지 않고, 결과를 진단해 부족했던 요소 하나만 고쳐 다시 보내는 반복 방식. 고친 뒤 이전 결과와 비교함.</div>
      <ul>
        <li>무엇인가: 대화 안에서 보내는 후속 메시지의 작성 습관임. 별도 기능이나 설정은 없음</li>
        <li>언제 쓰는가: 첫 결과가 일부는 맞고 일부는 아쉬울 때. 실무에서는 대부분의 결과가 이 상태임</li>
      </ul>
      <h4>전면 재작성이 손해인 이유</h4>
      <ul>
        <li>잘 된 부분까지 함께 잃음. 이전 결과에서 맞았던 구성이나 표현이 새 결과에서 사라질 수 있음</li>
        <li>무엇이 문제를 고쳤는지 알 수 없음. 여러 곳을 한꺼번에 바꾸면 다음에 같은 문제가 생겼을 때 다시 쓸 수정 방법이 남지 않음</li>
      </ul>
      <h4>증상 → 빠진 요소 → 수정</h4>
      <div class="tbl"><table>
        <tr><th>증상</th><th>빠진 요소</th><th>수정</th></tr>
        <tr><td>일반적이거나 목적에서 빗나감</td><td>맥락</td><td>Claude가 추론할 수 없는 배경(독자, 상황, 원자료) 추가</td></tr>
        <tr><td>묻지 않은 질문에 답함</td><td>작업</td><td>동사를 분명하게(요약인지, 비교인지, 식별인지)</td></tr>
        <tr><td>길이·어조·형태가 틀림</td><td>제약·출력 형식</td><td>분량, 어조, 형태 지정</td></tr>
        <tr><td>내용은 정확한데 길고 딱딱함</td><td>제약·출력 형식</td><td>길이와 어조만 조정해 다시 보냄. 내용 요소는 건드리지 않음</td></tr>
        <tr><td>거의 맞는데 한 부분만 아쉬움</td><td>해당 부분</td><td>그 부분만 다시 요청하고 나머지 초안은 유지</td></tr>
        <tr><td>요약은 괜찮은데 합계·평균이 이상함</td><td>제약(계산 방식)</td><td>Code Execution으로 계산하라는 제약 추가</td></tr>
      </table></div>
      <h4>예시 · 고객 문의 월간 보고의 3라운드 수정</h4>
      <div class="sample"><span class="sl">예시 · 1라운드 프롬프트</span>첨부한 9월 고객 문의 로그 1,240건을 요약할 것.</div>
      <ul>
        <li>결과: 문의 유형을 서술형으로 길게 설명함. 팀장이 원한 것은 주간 회의에서 볼 한 장짜리 표였음 → 출력 형식 누락</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 2라운드 추가 문장</span>결과는 "문의 유형 / 건수 / 전월 대비 / 대표 사례 1줄" 4열 표로 정리할 것. 표 아래에 3줄 이내의 시사점을 붙일 것.</div>
      <ul>
        <li>결과: 형식은 맞음. 그러나 유형별 건수의 합계가 1,240이 아니라 1,310으로 나옴 → 계산을 문장 생성으로 처리한 상태</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · 3라운드 추가 문장</span>유형별 건수와 전월 대비 증감은 Code Execution으로 로그 파일에서 직접 세어 계산할 것. 합계가 전체 건수와 일치하는지 표 아래에 표시할 것.</div>
      <ul>
        <li>라운드마다 바꾼 것은 한 요소뿐임. 1라운드의 요약 내용과 2라운드의 표 형식은 그대로 유지됨</li>
        <li>2·3라운드의 추가 문장은 다음 달에도 필요함. 매달 반복된다면 프로젝트 지시문으로 옮길 대상임(PART 05·07)</li>
      </ul>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"구체적 피드백과 반복 중단 시점",
     html:`<h4>막연한 피드백과 구체적 피드백</h4>
      <div class="sample bad"><span class="sl">예시 · 막연한 피드백</span>좀 더 잘 써 줄 것. 더 창의적으로.</div>
      <div class="sample good"><span class="sl">예시 · 구체적 피드백</span>두 번째 문단만 다시 쓸 것. 지금은 기능 나열임. 이 기능 덕분에 회계 담당자의 월말 정산 시간이 어떻게 줄어드는지를 사례 하나로 보여 줄 것. 나머지 문단은 그대로 둘 것.</div>
      <ul>
        <li>구체적 피드백은 무엇을(두 번째 문단), 왜(기능 나열), 어떻게(사례 하나) 바꿀지를 담음</li>
        <li>바꾸지 말아야 할 부분도 함께 밝힘. 잘 된 부분이 다시 쓰이는 것을 막음</li>
        <li>"뭔가 아쉬움"이라는 느낌만 있을 때는 먼저 5요소에 대조해 어느 요소가 문제인지 이름을 붙임. 이름을 붙이지 못하면 다음 수정도 추측이 됨</li>
      </ul>
      <h4>수렴과 반복 중단</h4>
      <div class="callout term"><b>용어 카드</b> · <b>수렴(convergence)</b>: 반복을 더 해도 결과가 개선되지 않고 미미한 변화만 생기는 상태. 프롬프트 수정을 멈출 신호임.</div>
      <ul>
        <li>수렴했다면 남은 부분은 직접 편집하는 편이 빠름. 반복의 목표는 쓸 수 있는 결과를 얻는 것임</li>
        <li>고객 제안서처럼 위험이 큰 외부 결과물이 수렴했는데도 내용에 확신이 서지 않으면, 내용을 아는 동료나 전문가의 사람 검토를 받음(PART 03)</li>
        <li>라운드마다 무엇이 나아졌는지 한 줄씩 적어 두면 수렴 시점을 알아보기 쉬움</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 라운드 기록 (고객 문의 월간 보고)</span>1라운드 → 2라운드: 출력 형식(4열 표) 추가. 서술형이 표로 바뀜. 개선 큼.
2라운드 → 3라운드: 계산 방식(Code Execution) 지정. 합계가 전체 건수와 일치함. 개선 큼.
3라운드 → 4라운드: "시사점 문장을 더 매끄럽게" 요청. 단어 몇 개만 바뀜. 개선 미미.
판단: 수렴. 시사점 3줄은 직접 다듬고 보고서를 마무리함.</div>
      <ul>
        <li>개선이 큰 라운드는 빠진 요소를 채운 라운드임. 표현만 다듬는 라운드부터 변화가 작아짐</li>
      </ul>
      <h4>반복 수정에서 효과가 없는 조치</h4>
      <ul>
        <li>같은 프롬프트를 여러 번 돌려 나은 것을 고르기: 빠진 요소가 원인이면 어느 결과에도 같은 약점이 있음</li>
        <li>모델만 바꾸기: 원인이 명세 부족이면 다른 모델도 같은 정보 없이 일함</li>
        <li>같은 계산을 여러 번 시켜 평균 내기: 문장 생성으로 만든 숫자를 여러 개 모아도 계산한 값이 되지 않음</li>
        <li>"더 잘", "더 창의적으로"처럼 기준 없는 요구: Claude가 무엇을 바꿔야 할지 알 수 없음</li>
      </ul>
      <div class="callout warn">구분할 점 · 요청이 이미 충분히 구체적인 상태에서 품질이 중요한 결과물의 초안을 여러 개 받아 비교하는 방법은 유효한 검토 기법임(PART 03). 위 목록은 빠진 요소를 고치는 대신 반복 실행에 기대는 경우를 가리킴.</div>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"반복 수정 판단 기준",
     html:`__MAP:prompt__
      <h4>한 라운드의 진행</h4>
      <div class="flow"><span class="nd">① 결과 진단<small>무엇이 아쉬운가</small></span><span class="ar">→</span><span class="nd">② 원인 요소 지목<small>맥락·작업·제약·형식·계산</small></span><span class="ar">→</span><span class="nd hot">③ 한 요소만 수정<small>잘 된 부분은 유지</small></span><span class="ar">→</span><span class="nd">④ 이전 결과와 비교<small>나아졌는가</small></span><span class="ar">→</span><span class="nd">⑤ 수렴 시 중단<small>직접 편집 또는 사람 검토</small></span></div>
      <p class="howto"><b>읽는 법</b>화살표 = 한 라운드의 순서. ④에서 개선이 있으면 ①로 돌아가 다음 라운드를 진행함. 개선이 미미하면 ⑤로 넘어감.</p>
      <h4>상황 → 선택 → 이유</h4>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>정확하지만 너무 길고 격식적임</td><td>길이·어조 제약만 조정</td><td>내용은 이미 맞음. 전체 재작성은 맞는 내용까지 바꿀 수 있음</td></tr>
        <tr><td>대부분 맞고 한 부분만 아쉬움</td><td>그 부분만 다시 요청</td><td>잘 된 초안을 버리지 않음</td></tr>
        <tr><td>수치·합계가 미묘하게 틀림</td><td>Code Execution으로 계산하라는 제약 추가</td><td>문장 생성은 숫자를 그럴듯하게만 만들 수 있음</td></tr>
        <tr><td>결과가 계속 일반적임</td><td>맥락 추가</td><td>모델 교체나 반복 실행으로는 빠진 정보가 생기지 않음</td></tr>
        <tr><td>라운드마다 변화가 미미함</td><td>반복 중단, 직접 편집</td><td>추가 라운드로 얻는 개선이 직접 편집보다 작음</td></tr>
        <tr><td>수렴했지만 위험이 큰 외부 결과물</td><td>사람 검토 요청</td><td>프롬프트로 전문가의 판단을 대신할 수 없음</td></tr>
        <tr><td>매번 같은 수정을 반복함</td><td>수정 내용을 프로젝트 지시문으로 옮김</td><td>반복되는 수정은 대화가 아닌 설정에 둠(PART 05·07)</td></tr>
      </table></div>
      <div class="callout">시험 포인트 · 지문이 결과의 어느 부분이 문제인지 알려 주면, 정답은 그 부분을 정하는 요소 하나만 고치는 선택지임. "처음부터 다시", "모델 교체", "여러 번 실행해 고르기"는 대개 오답 선택지임.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>길고 딱딱하다는 이유로 맥락과 작업까지 모두 다시 씀: 맞았던 내용이 바뀔 수 있음</li>
        <li>의심스러운 숫자를 다시 계산해 달라고만 요청함: 계산 방식이 그대로면 같은 유형의 오류가 반복됨</li>
        <li>Claude에게 결과가 맞는지 물어보고 그 답을 확인으로 여김: 같은 방식으로 만든 답은 검증이 되지 않음</li>
        <li>반복이 수렴했는데도 프롬프트를 계속 다듬음: 시간 대비 개선이 거의 없음</li>
        <li>한 부분만 고치면 되는 초안을 버리고 새 대화에서 처음부터 시작함</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Accurate but too formal", ts:"1.3",
     q:`A school district's communications officer asks Claude to turn a board policy update into a message for parents. The draft is accurate and covers every required point, but it reads like a legal memo and runs about 900 words. Most parents read district messages on their phones. What is the MOST efficient next step?`,
     ko:`교육청 커뮤니케이션 담당자가 교육위원회의 정책 변경 내용을 학부모 안내문으로 바꿔 달라고 Claude에 요청함. 초안은 정확하고 필요한 내용을 모두 담았지만, 법률 메모처럼 읽히고 분량이 약 900단어임. 학부모 대부분은 교육청 안내를 휴대전화로 읽음. 가장 효율적인 다음 조치는 무엇인가?`,
     opts:[
       {t:`Keep the request as it is and add a target length and a warm, plain-language tone suited to parents.`, ko:`요청은 그대로 두고 목표 분량과 학부모에게 맞는 따뜻하고 쉬운 어조를 추가하기`, ok:true},
       {t:`Rewrite the whole prompt from scratch, this time describing the policy, the parents, and the district's goals in more detail.`, ko:`프롬프트를 처음부터 다시 쓰고 이번에는 정책, 학부모, 교육청 목표를 더 자세히 설명하기`},
       {t:`Switch to a faster model, since shorter and simpler output is the kind of task that lighter models handle well.`, ko:`짧고 쉬운 결과는 가벼운 모델이 잘하는 작업이므로 더 빠른 모델로 바꾸기`},
       {t:`Accept the draft and shorten it by hand, because Claude has already produced accurate content that should not be touched.`, ko:`Claude가 이미 정확한 내용을 만들었으므로 건드리지 말고 초안을 받아 직접 줄이기`}
     ],
     explain:{ good:`내용은 이미 정확하고 빠진 것도 없으므로 맥락이나 작업 요소에는 문제가 없음. 아쉬운 것은 길이와 어조뿐이므로 그 두 제약만 추가해 다시 보내는 것이 가장 효율적임. 맞는 내용은 유지되고 형태만 바뀜.`,
       wrongs:[`<b>B:</b> 전면 재작성은 이미 맞는 내용까지 다시 만들게 함. 무엇이 문제를 고쳤는지도 알 수 없게 됨.`,
               `<b>C:</b> 원인은 길이·어조 지정이 빠진 것임. 모델을 바꿔도 요청이 같으면 비슷한 형태가 나올 수 있음.`,
               `<b>D:</b> 직접 편집은 반복이 수렴한 뒤에 택하는 방법임. 첫 결과에서 원인이 분명하면 제약 한 줄로 더 빨리 고칠 수 있음.`]},
     principle:"원칙 ⑥ 원인 진단 후 수정",
     hint:`지문이 내용에 대해 무엇이라고 말하는지 확인할 것. 문제가 있는 부분만 정하는 요소를 찾으면 됨.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[ {t:`내용은 정확하고 형태만 틀렸으므로 형태를 정하는 제약만 바꾸면 되기 때문임`, ok:true},
              {t:`프롬프트는 한 번에 하나씩 고치는 것이 정석이기 때문임`},
              {t:`학부모 안내문은 항상 300단어 이하여야 하기 때문임`},
              {t:`Claude는 긴 글을 쓸 때 오류가 더 많이 생기기 때문임`} ],
       explain:`증상이 길이·어조에만 있으면 원인 요소도 제약·출력 형식뿐임. 원인과 수정 범위를 일치시키는 것이 부분 수정의 기준임.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Suspicious attendance rates", ts:"1.3",
     q:`An event planner uploads a registration export for three regional seminars and asks Claude for a summary with attendance rates. The written insights are useful, but one seminar shows a 112% attendance rate and the totals don't match the spreadsheet. The planner needs the numbers for a budget meeting tomorrow. What is the BEST next step?`,
     ko:`행사 기획자가 지역 세미나 세 건의 등록 데이터 파일을 올리고 참석률을 포함한 요약을 요청함. 서술한 분석 내용은 쓸 만하지만, 한 세미나의 참석률이 112%로 나오고 합계도 스프레드시트와 맞지 않음. 기획자는 내일 예산 회의에서 이 수치를 써야 함. 가장 좋은 다음 조치는 무엇인가?`,
     opts:[
       {t:`Ask Claude to compute each rate by running calculations on the uploaded file and to show how each was derived.`, ko:`업로드한 파일로 실제 계산을 실행해 참석률을 구하고 각 값의 산출 과정을 보여 달라고 요청하기`, ok:true},
       {t:`Ask Claude to recalculate the rates three more times and use the average of the results as the final figures.`, ko:`참석률을 세 번 더 계산하게 하고 그 결과의 평균을 최종 수치로 쓰기`},
       {t:`Ask Claude to double-check its math carefully and confirm that the corrected figures are accurate before the meeting.`, ko:`회의 전에 계산을 꼼꼼히 다시 확인하고 수정한 수치가 정확하다고 확인해 달라고 요청하기`},
       {t:`Rewrite the prompt with more background on each seminar so Claude understands the context behind the attendance data.`, ko:`Claude가 참석 데이터의 배경을 이해하도록 세미나별 배경 설명을 더해 프롬프트를 다시 쓰기`}
     ],
     explain:{ good:`서술한 분석은 쓸 만하므로 문제는 계산 부분에 한정됨. 문장 생성으로 만든 숫자는 그럴듯해도 틀릴 수 있으므로, 업로드한 파일에서 Code Execution으로 직접 계산하게 하는 제약을 추가함. 산출 과정이 보이면 회의 전에 수치를 확인할 수도 있음.`,
       wrongs:[`<b>B:</b> 같은 방식으로 여러 번 계산해도 계산 방식은 그대로임. 틀릴 수 있는 값들의 평균은 검증된 값이 아님.`,
               `<b>C:</b> 다시 확인하라고 해도 같은 방식으로 숫자를 만듦. 확인했다는 답은 정확성의 근거가 되지 않음.`,
               `<b>D:</b> 맥락은 원인이 아님. 서술 내용은 이미 쓸 만했으므로 프롬프트를 다시 쓰면 잘 된 부분까지 바뀔 수 있음.`]},
     principle:"원칙 ⑥ 원인 진단 후 수정",
     hint:`결과 중 쓸 만한 부분과 문제 있는 부분을 나눌 것. 문제 있는 부분은 어떤 방식으로 만들어졌는가?`}
  ]},

  /* ================= CH 4 · 1.4 작업 유형별 전략 ================= */
  { id:"p2c4", ch:"CH 4", obj:"1.4", title:"작업 유형별 프롬프트 전략", steps:[
    {type:"concept", kind:"CONCEPT · 개념 설명", h:"통제와 자유도 조절",
     html:`<p class="lead">작업 유형이 달라도 프롬프트 구조(5요소)는 같음. 달라지는 것은 어느 부분을 엄격하게 정하고 어느 부분을 Claude에게 맡기는가임.</p>
      <div class="callout term"><b>용어 카드</b> · <b>자유도(creative latitude)</b>: 표현과 방향을 Claude에게 맡기는 정도. 분석은 낮게, 초안 작성은 중간, 브레인스토밍은 높게 둠.</div>
      <ul>
        <li>무엇인가: 제약을 얼마나 걸지 정하는 판단임. 작업 유형마다 엄격하게 정할 부분과 열어 둘 부분을 먼저 나눈 뒤 제약의 양을 맞춤</li>
        <li>언제 쓰는가: 프롬프트를 쓰기 전, 이 작업이 정해진 기준으로 답을 내는 일인지 선택지를 넓히는 일인지 정할 때</li>
      </ul>
      <h4>네 가지 작업 유형</h4>
      <div class="tbl"><table>
        <tr><th>유형</th><th>엄격하게 정할 것</th><th>Claude에게 맡길 것</th><th>자유도</th></tr>
        <tr><td>분석(analysis)</td><td>측정 기준, 판단 표준, 범위, 모호한 경우 처리</td><td>표현 방식</td><td>낮음</td></tr>
        <tr><td>리서치(research)</td><td>질문 범위, 출처, 최신 자료 필요 여부, 인용 요구</td><td>종합 방식</td><td>출처는 엄격, 종합은 열림</td></tr>
        <tr><td>초안 작성(drafting)</td><td>대상 독자, 어조, 형식</td><td>단어 선택과 문장</td><td>중간</td></tr>
        <tr><td>브레인스토밍(brainstorming)</td><td>목표, 가드레일(guardrail: 지켜야 할 최소 조건)</td><td>수량과 방향</td><td>높음</td></tr>
      </table></div>
      <h4>분석: 기준 고정</h4>
      <ul>
        <li>무엇을 어떤 기준으로 측정할지, 데이터가 모호하면 어떻게 처리할지를 정함</li>
        <li>기준이 느슨하면 Claude가 실행할 때마다 다른 기준으로 판단함. 결과를 비교하거나 검증할 수 없음</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 분석 프롬프트</span>첨부한 3분기 서비스 해지 설문 응답 420건을 분류할 것.
분류 기준은 "가격 / 기능 부족 / 고객 지원 / 경쟁사 전환 / 기타" 5개로 고정함.
한 응답에 사유가 둘 이상이면 처음 언급된 사유로 분류함.
사유가 불분명한 응답은 "분류 불가"로 따로 세고 임의로 배정하지 말 것.
건수 집계는 Code Execution으로 할 것.</div>
      <h4>초안 작성: 형태는 작성자, 문장은 Claude 담당</h4>
      <ul>
        <li>대상 독자, 어조, 형식은 작성자가 정함. 단어 선택과 문장 흐름은 Claude에게 맡김</li>
        <li>모든 문장을 지정하면 Claude가 쓸 부분이 없어 직접 쓰는 것과 차이가 없음</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 초안 작성 프롬프트</span>11월 사내 영업 교육 프로그램 안내 이메일 초안을 작성할 것.
독자는 입사 1~3년 차 영업 직원임. 어조는 친근하되 공식 공지 수준을 유지할 것.
구성은 제목, 본문 3문단(무엇을 배우는지 / 일정과 신청 방법 / 문의처), 신청 마감일 강조 순서로 할 것.
문장 표현은 자유롭게 써도 됨.</div>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"리서치와 브레인스토밍 프롬프트",
     html:`<h4>리서치: 질문과 출처의 엄격한 지정</h4>
      <ul>
        <li>질문 범위, 사용할 출처, 최신 자료가 필요한지를 정하고, 인용을 요구해 결과를 확인할 수 있게 함</li>
        <li>Claude의 학습 기준 시점(training cutoff) 이후 정보는 최신 소스 없이 신뢰할 수 없음</li>
        <li>가벼운 최신 정보 확인은 채팅에서 웹 검색을 켜서 해결함. 여러 출처를 깊이 조사하고 종합해야 하면 Research(리서치 모드)를 씀(유료 플랜). 기능 선택은 PART 01에서 다룸</li>
      </ul>
      <div class="callout term"><b>용어 카드</b> · <b>근거 있는 인용(grounded citation)</b>: 웹 검색이나 Research 결과처럼 실제 출처에서 가져온 인용. 학습한 기억만으로 만든 인용은 똑같이 확신 있어 보여도 별도로 확인해야 함.</div>
      <div class="sample"><span class="sl">예시 · 리서치 프롬프트 (Research 사용)</span>국내 구독형 밀키트 시장의 최근 1년 동향을 조사할 것.
질문은 세 가지로 한정함: 시장 규모 추정치, 주요 업체의 가격 정책 변화, 소비자 불만 유형.
출처는 언론 보도, 업계 협회 자료, 상장사 공시를 우선할 것.
모든 수치와 주장에는 출처 링크와 발행일을 붙이고, 출처를 찾지 못한 항목은 "확인 불가"로 표시할 것.</div>
      <ul>
        <li>"확인 불가" 표시를 허용하면 근거 없는 수치를 채워 넣는 일을 줄일 수 있음(검증 기법은 PART 03)</li>
        <li>인용이 붙어 있어도 링크를 열어 실제 내용과 맞는지 확인하는 일은 사람 몫임</li>
      </ul>
      <h4>브레인스토밍: 목표와 가드레일만 지정</h4>
      <ul>
        <li>목표와 지켜야 할 최소 조건만 주고, 수량과 방향은 열어 둠</li>
        <li>과잉 명세는 원하는 발산을 막음. 조건이 많으면 비슷한 아이디어만 나옴</li>
        <li>먼저 양과 폭을 받은 뒤, 다음 라운드에서 기준을 주고 좁힘</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 과잉 명세 브레인스토밍</span>20대 여성 직장인 대상, 인스타그램 릴스 형식, 15초 이내, 제품 클로즈업으로 시작, 할인 문구 포함, 파스텔 톤의 신제품 텀블러 홍보 아이디어 3개를 낼 것.</div>
      <ul>
        <li>대상·채널·길이·첫 장면·문구·색감이 모두 정해져 있음. 세 아이디어는 같은 영상의 변형이 될 가능성이 큼</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · 가드레일만 둔 브레인스토밍</span>신제품 텀블러의 출시 홍보 아이디어를 가능한 한 다양하게 30개 낼 것.
지켜야 할 조건은 두 가지임: 총예산 500만 원 이내, 환경 효과에 대한 과장 표현 금지.
채널, 형식, 대상은 제한하지 않음. 비슷한 아이디어도 묶지 말고 모두 나열할 것.</div>
      <div class="sample"><span class="sl">예시 · 다음 라운드 (좁히기)</span>위 30개 중 20대 직장인에게 맞는 아이디어 5개를 고르고, 고른 이유와 예상 비용을 표로 정리할 것.</div>
      <h4>한 요청에 유형이 섞인 경우</h4>
      <ul>
        <li>"경쟁사 동향을 조사해서 보도자료까지 써 줄 것"처럼 리서치와 초안 작성이 한 문장에 들어 있으면 두 유형의 제약이 섞임</li>
        <li>유형마다 엄격하게 정할 부분이 다르므로 단계를 나누고, 단계마다 그 유형에 맞는 제약을 검(CH 2의 작업 분해)</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · 유형별로 나눈 요청</span>1단계(리서치) · 최근 6개월 경쟁사 3곳의 신제품 출시 내용을 조사할 것. 항목마다 출처 링크와 발행일을 붙이고, 찾지 못한 내용은 "확인 불가"로 표시할 것.

(담당자가 출처를 열어 내용을 확인함)

2단계(초안 작성) · 확인된 조사 결과만 근거로 당사 신제품 보도자료의 시장 배경 문단을 쓸 것. 독자는 산업부 기자임. 3문장 이내, 경쟁사 실명은 쓰지 말 것.</div>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"작업 유형별 전략 판단 기준",
     html:`__MAP:prompt__
      <h4>상황 → 선택 → 이유</h4>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>같은 기준으로 여러 자료를 판단·분류해야 함</td><td>분석: 기준·범위·모호한 경우 처리를 고정</td><td>기준이 흔들리면 결과를 비교·검증할 수 없음</td></tr>
        <tr><td>최근 동향이나 외부 사실이 필요함</td><td>리서치: 질문·출처를 한정하고 인용 요구, 최신성에 맞는 기능 선택</td><td>확인 가능한 근거가 있어야 결과를 쓸 수 있음</td></tr>
        <tr><td>독자에게 보낼 글이 필요함</td><td>초안 작성: 독자·어조·형식을 정하고 문장은 맡김</td><td>형태가 맞아야 큰 수정 없이 쓸 수 있음</td></tr>
        <tr><td>선택지를 넓게 모아야 함</td><td>브레인스토밍: 목표·가드레일만, 수량은 넉넉히</td><td>조건이 많으면 아이디어 폭이 좁아짐</td></tr>
        <tr><td>브레인스토밍 결과가 비슷비슷함</td><td>조건을 줄이고 수량을 늘림</td><td>과잉 명세가 원인임</td></tr>
        <tr><td>분석 결과가 실행마다 다른 기준으로 나옴</td><td>측정 기준과 예외 처리 규칙을 명시</td><td>느슨한 기준이 원인임</td></tr>
        <tr><td>한 요청에 두 유형이 섞여 있음</td><td>유형별로 엄격하게 정할 부분과 열어 둘 부분을 따로 정함(필요하면 작업 분해)</td><td>한 가지 제약을 두 작업에 똑같이 걸면 한쪽 작업에 맞지 않는 제약이 생김</td></tr>
      </table></div>
      <h4>자유도의 크기</h4>
      <div class="flow"><span class="nd">분석<small>자유도 낮음 · 기준 고정</small></span><span class="ar">→</span><span class="nd">초안 작성<small>자유도 중간 · 형태 고정</small></span><span class="ar">→</span><span class="nd hot">브레인스토밍<small>자유도 높음 · 가드레일만</small></span></div>
      <p class="howto"><b>읽는 법</b>화살표는 작업 순서가 아니라 Claude에게 맡기는 자유도가 커지는 방향임. 리서치는 한 칸에 놓을 수 없음: 질문·출처·인용은 분석처럼 엄격하게, 종합 방식은 열어 둠.</p>
      <div class="callout">시험 포인트 · 작업 유형과 제약의 양이 맞지 않는 지문이 자주 나옴. 브레인스토밍에 조건이 너무 많거나, 분석에 기준이 없거나, 리서치에 출처 요구가 없는 경우임. 정답은 유형에 맞게 제약을 늘리거나 줄이는 쪽임.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>모든 작업에 같은 스타일의 프롬프트를 씀: 유형마다 통제할 곳이 다름</li>
        <li>브레인스토밍 결과가 좁다고 조건을 더 추가함: 조건이 원인이면 결과가 더 좁아짐</li>
        <li>분석에서 "중요한 것을 알아서 골라 줄 것"이라고만 씀: 기준이 없어 결과를 검증할 수 없음</li>
        <li>리서치에서 인용을 요구하지 않음: 학습 기억으로 만든 내용과 실제 출처를 구분할 수 없음</li>
        <li>초안 작성에서 문장까지 모두 지정함: Claude에게 맡길 부분이 사라져 시간이 줄지 않음</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Look-alike gift ideas", ts:"1.4",
     q:`A sales enablement manager wants fresh ideas for a customer appreciation program. Her prompt fixes the budget, gift format, delivery month, target region, theme color, and three banned vendors, and asks for five ideas. Claude returns five ideas that are nearly identical variations of one gift box. What should she change FIRST?`,
     ko:`영업 지원 매니저가 고객 감사 프로그램에 쓸 새로운 아이디어를 원함. 프롬프트에 예산, 선물 형태, 전달 월, 대상 지역, 테마 색상, 제외할 업체 세 곳을 모두 정해 두고 아이디어 5개를 요청함. Claude는 선물 상자 하나를 조금씩 바꾼 거의 같은 아이디어 5개를 돌려줌. 가장 먼저 무엇을 바꿔야 하는가?`,
     opts:[
       {t:`Keep only the budget and must-avoid limits, ask for a much larger and more varied set, then narrow it down later.`, ko:`예산과 반드시 피할 조건만 남기고 훨씬 많고 다양한 아이디어를 요청한 뒤 나중에 좁히기`, ok:true},
       {t:`Add details about past programs that customers liked so Claude can produce ideas closer to what has worked before.`, ko:`고객 반응이 좋았던 과거 프로그램 정보를 더해 효과가 있던 방향에 가까운 아이디어를 받기`},
       {t:`Switch to a more capable model, because producing genuinely different ideas needs deeper reasoning than this task got.`, ko:`정말 다른 아이디어를 내려면 더 깊은 추론이 필요하므로 더 역량 높은 모델로 바꾸기`},
       {t:`Keep every requirement and add an instruction telling Claude to be much more creative and original in its ideas.`, ko:`조건은 모두 유지하고 훨씬 더 창의적이고 독창적으로 내라는 지시를 추가하기`}
     ],
     explain:{ good:`아이디어가 한 가지 변형으로 몰린 원인은 브레인스토밍에 붙은 조건이 너무 많았기 때문임. 예산과 반드시 피할 조건만 남기고 수량을 늘리면 다양한 방향이 나옴. 넓게 받은 뒤 다음 라운드에서 기준을 주고 좁히는 순서가 맞음.`,
       wrongs:[`<b>B:</b> 과거에 효과가 있던 사례를 더 주면 아이디어가 그 사례 쪽으로 더 몰림. 이 상황에 필요한 것은 폭임.`,
               `<b>C:</b> 원인은 조건의 양임. 조건이 폭을 막고 있으면 상위 모델도 같은 좁은 범위에서 답함.`,
               `<b>D:</b> 조건을 그대로 두고 "더 창의적으로"를 더하면 막연한 요구만 늘어남. 폭을 막는 조건은 그대로임.`]},
     principle:"원칙 ③ 요구에 맞는 선택",
     hint:`이 작업이 원하는 결과가 정답 하나인지, 넓은 선택지인지 먼저 정할 것. 그다음 프롬프트의 어느 부분이 그 결과를 막고 있는지 찾을 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[ {t:`넓은 선택지가 목표인 작업에 조건이 너무 많아 아이디어 폭이 좁아졌기 때문임`, ok:true},
              {t:`가이드에 브레인스토밍은 조건을 줄이라고 나와 있기 때문임`},
              {t:`아이디어를 다섯 개만 요청하면 항상 비슷한 결과가 나오기 때문임`},
              {t:`예산 조건이 있으면 Claude가 창의적인 답을 하지 못하기 때문임`} ],
       explain:`브레인스토밍은 폭이 목표이므로 목표와 최소 조건만 두는 것이 맞음. 조건의 양과 결과의 폭 사이의 관계가 판단 근거임.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Recent regulation summary", ts:"1.4",
     q:`A consultant asks Claude, in a chat with web search turned off, to summarize how data privacy rules for loyalty programs changed in several Asian markets over the past year. Claude returns a confident summary with official-sounding regulation names and dates. The summary will go into a client briefing next week. What is the MOST appropriate next step?`,
     ko:`컨설턴트가 웹 검색을 끈 채팅에서, 지난 1년 동안 아시아 여러 시장의 멤버십 프로그램 관련 개인정보 규정이 어떻게 바뀌었는지 요약해 달라고 Claude에 요청함. Claude는 공식 명칭처럼 보이는 규정명과 날짜를 담은 확신 있는 요약을 돌려줌. 이 요약은 다음 주 고객 브리핑 자료에 들어갈 예정임. 가장 적절한 다음 조치는 무엇인가?`,
     opts:[
       {t:`Redo the request using Research, limit it to official and news sources, and require a dated link for every claim.`, ko:`Research로 다시 요청하고 출처를 공식 자료와 언론 보도로 한정하며 모든 주장에 날짜가 있는 링크를 요구하기`, ok:true},
       {t:`Ask Claude in the same chat to list the sources it relied on, then attach that list to the briefing as the reference section.`, ko:`같은 채팅에서 근거로 삼은 출처 목록을 요청하고 그 목록을 브리핑의 참고 자료로 붙이기`},
       {t:`Ask Claude to rate how confident it is in each claim and keep only the ones it marks as highly certain for the briefing.`, ko:`각 주장에 대한 확신도를 평가하게 하고 매우 확실하다고 표시한 것만 브리핑에 남기기`},
       {t:`Keep the summary but soften the wording so each regulation is described as likely rather than confirmed in the briefing.`, ko:`요약은 유지하되 각 규정을 확정이 아닌 가능성으로 표현하도록 문구를 완화하기`}
     ],
     explain:{ good:`지난 1년의 규정 변화는 학습 기준 시점 이후일 수 있고, 웹 검색 없이 만든 답의 규정명과 날짜는 학습 기억에서 나온 것임. 여러 시장을 깊이 조사해야 하므로 Research로 다시 요청하고, 출처 범위를 정하고, 주장마다 링크와 날짜를 요구해야 확인 가능한 결과가 됨. 고객 브리핑에 넣기 전에 인용은 직접 열어 확인함.`,
       wrongs:[`<b>B:</b> 같은 채팅에서 받은 출처 목록도 학습 기억으로 만들어질 수 있음. 실제로 검색한 출처가 아님.`,
               `<b>C:</b> Claude가 스스로 매긴 확신도는 정확성의 근거가 아님. 확신 있게 틀린 내용이 그대로 남을 수 있음.`,
               `<b>D:</b> 표현을 약하게 바꿔도 내용이 맞는지는 확인되지 않음. 근거 없는 규정명이 고객 자료에 그대로 들어감.`]},
     principle:"원칙 ② 내보내기 전 검증",
     hint:`이 답의 규정명과 날짜는 어디에서 왔는가? "지난 1년"이라는 기간과 "웹 검색을 끈 채팅"이라는 조건을 함께 볼 것.`}
  ]},

  /* ================= D1 미니테스트 ================= */
  { id:"p2test", type:"test", title:"D1 미니테스트 · 8문항", questions:[

    { ts:"1.1", lvl:"기초",
      q:`A customer support lead wants a quick explanation, just for herself, of how a chargeback differs from a refund before a call in ten minutes. She starts writing a prompt with a role, an audience profile, a tone guide, and a formatted answer template. What is the MOST appropriate approach?`,
      ko:`고객지원 리더가 10분 뒤 통화 전에 본인이 참고할 용도로 지불 거절(chargeback)과 환불의 차이를 빠르게 알고 싶어 함. 역할, 독자 설명, 어조 가이드, 서식을 갖춘 답변 틀까지 넣은 프롬프트를 쓰기 시작함. 가장 적절한 방법은 무엇인가?`,
      opts:[
        {t:`Ask the question directly, adding at most one simple limit such as a two-sentence answer.`, ko:`질문을 바로 하고, 필요하면 두 문장 답변 같은 간단한 제약 하나만 붙이기`, ok:true},
        {t:`Finish the full prompt with every element, since a complete prompt always produces the most accurate answer.`, ko:`완전한 프롬프트가 항상 가장 정확한 답을 내므로 모든 요소를 채워 프롬프트를 완성하기`},
        {t:`Save the prompt as a reusable template in a Project so future definition questions follow the same structure.`, ko:`앞으로의 용어 질문도 같은 구조를 따르도록 프롬프트를 Project에 재사용 틀로 저장하기`},
        {t:`Skip Claude and search the company wiki, because quick definitions are not a suitable task for an AI assistant.`, ko:`간단한 정의 확인은 AI에 맞지 않는 작업이므로 Claude를 쓰지 않고 사내 위키를 검색하기`}
      ],
      explain:{ good:`본인만 볼 짧은 정의 확인은 작업 하나와 간단한 제약 하나면 충분함. 다섯 요소를 모두 채우는 방식은 고객에게 나갈 결과물처럼 중요한 결과물에 맞음. 10분 안에 답이 필요한 상황에서 과잉 명세는 시간만 씀.`,
        wrongs:[`<b>B:</b> 요소가 많을수록 항상 더 정확해지는 것은 아님. 간단한 질문에는 과잉 명세임.`,
                `<b>C:</b> 한 번 묻고 마칠 질문은 설정으로 옮길 반복 맥락이 아님.`,
                `<b>D:</b> 용어 차이 설명은 Claude가 도울 수 있는 일반적인 작업임. 도구를 포기할 이유가 없음.`]},
      principle:"원칙 ③ 요구에 맞는 선택" },

    { ts:"1.1", lvl:"실전", multi:2,
      q:`A hotel marketing manager sends Claude this prompt: "Write a promotional email for our winter package. Make it professional and exciting." The draft is generic, could fit any hotel, and mentions a spa discount the package does not include. The email goes to 8,000 past guests next week. Which TWO additions to the prompt would MOST improve the next draft? (Select TWO.)`,
      ko:`호텔 마케팅 매니저가 "겨울 패키지 홍보 이메일을 작성할 것. 전문적이고 신나게 쓸 것"이라는 프롬프트를 보냄. 초안은 어느 호텔에나 맞을 법한 일반적인 내용이고, 패키지에 없는 스파 할인까지 언급함. 이 이메일은 다음 주 과거 투숙객 8,000명에게 발송됨. 다음 초안을 가장 크게 개선할 프롬프트 추가 사항 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`The package details from the approved rate sheet, with an instruction not to mention anything outside it.`, ko:`승인된 요금표의 패키지 내용과 그 밖의 내용은 언급하지 말라는 지시`, ok:true},
        {t:`Who the recipients are, such as guests who stayed last summer, and the one action the email should drive.`, ko:`수신자가 누구인지(예: 지난여름 투숙객)와 이메일이 이끌어 내야 할 행동 하나`, ok:true},
        {t:`A role line describing Claude as an award-winning luxury hospitality copywriter with twenty years of experience.`, ko:`Claude를 수상 이력이 있는 경력 20년의 고급 호텔 카피라이터로 설정하는 역할 문장`},
        {t:`A request for ten different versions so the team can choose the most exciting one among them.`, ko:`팀이 가장 신나는 버전을 고를 수 있도록 서로 다른 버전 열 개를 요청하는 문장`},
        {t:`Stronger wording such as "premium, polished, and unforgettable" to raise the overall quality of the copy.`, ko:`카피 품질을 높이기 위한 "고급스럽고 세련되고 잊을 수 없게" 같은 더 강한 표현`}
      ],
      explain:{ good:`초안이 일반적인 원인은 수신자와 목적이 빠진 맥락 공백이고, 없는 할인이 들어간 원인은 근거 자료와 범위 제한이 없었기 때문임. 승인된 요금표를 근거로 주고 그 밖의 내용은 쓰지 말라는 제약을 더하면 지어낸 혜택이 줄어듦. 수신자와 이메일이 이끌어야 할 행동을 밝히면 일반론에서 벗어남.`,
        wrongs:[`<b>C:</b> 역할을 화려하게 지정해도 패키지 정보와 수신자 정보는 여전히 없음. 역할은 맥락을 대신하지 못함.`,
                `<b>D:</b> 같은 정보로 열 개를 만들어도 모두 같은 공백을 가짐. 없는 할인도 여러 버전에 반복될 수 있음.`,
                `<b>E:</b> 어느 요소의 구체 조건도 정하지 않는 막연한 문구임.`]},
      principle:"원칙 ① 요청의 구체화" },

    { ts:"1.2", lvl:"기초",
      q:`A training coordinator is building an onboarding course with Claude in three steps: an outline she approves, then module scripts based on that outline, then quiz questions based on the scripts. She plans to start each step in a brand-new conversation with no earlier material, to keep things tidy. What is the BEST advice?`,
      ko:`교육 담당자가 Claude와 함께 신입 교육 과정을 세 단계로 만들고 있음: 담당자가 승인하는 개요, 그 개요를 바탕으로 한 모듈 대본, 대본을 바탕으로 한 퀴즈 문항. 깔끔하게 하려고 각 단계를 이전 자료 없이 새 대화에서 시작할 계획임. 가장 좋은 조언은 무엇인가?`,
      opts:[
        {t:`Run the steps in one conversation, since each step needs to build on the output approved in the step before.`, ko:`각 단계가 앞 단계에서 승인된 결과를 바탕으로 해야 하므로 한 대화 안에서 진행하기`, ok:true},
        {t:`Keep the separate conversations, because a fresh conversation always gives Claude the clearest possible starting point.`, ko:`새 대화가 항상 가장 깨끗한 출발점이므로 대화를 따로 나누는 계획을 유지하기`},
        {t:`Combine all three steps into one detailed prompt so the outline, scripts, and quiz stay consistent with each other.`, ko:`개요·대본·퀴즈가 서로 일관되도록 세 단계를 상세한 프롬프트 하나로 합치기`},
        {t:`Do the outline with Claude, then write the scripts and quiz by hand since they depend on human judgment.`, ko:`개요만 Claude와 만들고, 대본과 퀴즈는 사람의 판단이 필요하므로 직접 쓰기`}
      ],
      explain:{ good:`대본은 승인된 개요를, 퀴즈는 대본을 근거로 하므로 단계가 앞 결과에 의존함. 의존하는 단계는 한 대화에서 이어 가야 이전 결과를 볼 수 있음. 이전 자료 없이 새 대화를 열면 Claude는 승인된 개요를 모른 채 작업함.`,
        wrongs:[`<b>B:</b> 새 대화가 유리한 경우는 단계가 서로 독립적이거나 대화가 너무 길어졌을 때임. 이전 결과 없이 시작하면 앞 단계와 어긋난 결과가 나옴.`,
                `<b>C:</b> 세 단계를 한 프롬프트에 몰아넣으면 개요를 승인하는 확인 지점이 사라지고 각 단계가 얕아짐.`,
                `<b>D:</b> 대본과 퀴즈 초안은 Claude에게 맡길 수 있는 작업임. 사람은 단계별 결과를 확인하는 역할을 맡으면 됨.`]},
      principle:"원칙 ① 요청의 구체화" },

    { ts:"1.2", lvl:"실전",
      q:`An internal communications manager at a manufacturing plant uses Claude to pull the changes from a revised safety procedure. The list will feed an employee notice, a supervisor checklist, and an FAQ. One extracted item says equipment inspections move from monthly to quarterly, which surprises her. What should she do FIRST?`,
      ko:`제조 공장의 사내 커뮤니케이션 매니저가 Claude로 개정된 안전 절차의 변경사항을 뽑음. 이 목록은 직원 공지, 관리자 점검표, FAQ의 근거가 됨. 뽑힌 항목 하나에는 장비 점검 주기가 월 1회에서 분기 1회로 바뀐다고 적혀 있어 매니저가 의아해함. 가장 먼저 무엇을 해야 하는가?`,
      opts:[
        {t:`Check the extracted list against the procedure text, starting with the inspection item, before drafting anything.`, ko:`어떤 결과물도 쓰기 전에 점검 항목부터 시작해 추출 목록을 절차 원문과 대조하기`, ok:true},
        {t:`Ask Claude whether it is sure about the inspection change and proceed with all three pieces if it confirms.`, ko:`점검 주기 변경이 확실한지 Claude에게 묻고, 확실하다고 하면 세 결과물 작성을 진행하기`},
        {t:`Draft all three pieces now, then send them together to the safety team so they can review everything at once.`, ko:`세 결과물을 지금 모두 작성한 뒤 안전팀에 한꺼번에 보내 일괄 검토를 받기`},
        {t:`Draft the employee notice first since it is the most urgent piece, and correct the checklist and FAQ later if needed.`, ko:`가장 급한 직원 공지부터 쓰고, 점검표와 FAQ는 필요하면 나중에 고치기`}
      ],
      explain:{ good:`세 결과물이 모두 이 추출 목록을 근거로 하므로, 목록이 틀리면 같은 오류가 세 문서에 들어감. 예상과 다른 항목이 있으면 결과물을 만들기 전에 원문과 대조해 공통 기반부터 확인해야 함. 안전 절차는 틀렸을 때 영향이 크므로 이 확인이 가장 먼저임.`,
        wrongs:[`<b>B:</b> Claude의 확인 답변은 원문 대조를 대신하지 못함. 확신 있는 어조는 정확성의 근거가 아님.`,
                `<b>C:</b> 마지막에 한 번 검토하면 오류를 고칠 문서가 세 개로 늘어남. 공통 기반을 먼저 확인하는 편이 비용이 적음.`,
                `<b>D:</b> 급한 결과물부터 만들면 확인되지 않은 항목이 직원에게 먼저 나감. 안전 관련 안내는 내보낸 뒤 바로잡기 어려움.`]},
      principle:"원칙 ② 내보내기 전 검증" },

    { ts:"1.3", lvl:"기초",
      q:`A marketing coordinator at a real estate agency asks Claude for a property listing description. The headline, layout details, and closing call to action are exactly right, but the neighborhood paragraph is vague and mentions "convenient amenities" without specifics. What is the MOST efficient next step?`,
      ko:`부동산 중개사무소의 마케팅 담당자가 Claude에 매물 소개 문구를 요청함. 제목, 구조 설명, 마무리 행동 유도 문구는 정확히 원하던 대로임. 그러나 주변 환경 문단은 막연하고 구체적인 내용 없이 "편리한 생활 시설"만 언급함. 가장 효율적인 다음 조치는 무엇인가?`,
      opts:[
        {t:`Ask Claude to rewrite only the neighborhood paragraph using the nearby transit and school details she supplies.`, ko:`담당자가 주는 인근 교통·학교 정보를 써서 주변 환경 문단만 다시 쓰게 하기`, ok:true},
        {t:`Regenerate the full listing with a revised prompt that adds more neighborhood information to the original request.`, ko:`원래 요청에 주변 정보를 더한 수정 프롬프트로 매물 소개 전체를 다시 생성하기`},
        {t:`Start a new conversation and write a more detailed prompt that covers every part of the listing from the beginning.`, ko:`새 대화를 열고 매물 소개의 모든 부분을 다루는 더 자세한 프롬프트를 처음부터 쓰기`},
        {t:`Ask Claude to make the whole description more specific and vivid so that every paragraph improves at the same time.`, ko:`모든 문단이 한꺼번에 나아지도록 소개 전체를 더 구체적이고 생생하게 써 달라고 하기`}
      ],
      explain:{ good:`제목, 구조, 마무리 문구는 이미 맞으므로 아쉬운 부분은 주변 환경 문단 하나임. 그 문단만 다시 요청하면서 Claude가 알 수 없는 교통·학교 정보를 함께 주면, 맞는 부분은 그대로 두고 문제만 고칠 수 있음.`,
        wrongs:[`<b>B:</b> 전체를 다시 생성하면 이미 맞았던 제목과 구성까지 바뀔 수 있음.`,
                `<b>C:</b> 처음부터 다시 쓰면 잘 된 부분을 잃고 무엇이 문제를 고쳤는지도 알 수 없음.`,
                `<b>D:</b> 막연한 요구이며 수정 범위도 전체로 넓힘. 동네 정보가 없으면 "구체적으로"라고 해도 채울 내용이 없음.`]},
      principle:"원칙 ⑥ 원인 진단 후 수정" },

    { ts:"1.3", lvl:"실전", multi:2,
      q:`An account director at an advertising agency has revised a client proposal's executive summary with Claude over six rounds. The last three rounds changed only a few words each time. She is still unsure whether the pricing rationale paragraph reflects the client's situation, and the proposal goes out Thursday. Which TWO actions are MOST appropriate now? (Select TWO.)`,
      ko:`광고대행사의 어카운트 디렉터가 고객 제안서의 요약 부분을 Claude와 여섯 라운드에 걸쳐 수정함. 최근 세 라운드에서는 매번 몇 단어만 바뀌었음. 가격 근거 문단이 고객 사정을 제대로 반영하는지는 여전히 확신이 없고, 제안서는 목요일에 발송됨. 지금 가장 적절한 조치 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Stop prompting and edit the remaining wording directly, since further rounds are producing only minor changes.`, ko:`추가 라운드가 사소한 변화만 내고 있으므로 프롬프트 수정을 멈추고 남은 문구를 직접 다듬기`, ok:true},
        {t:`Ask a senior colleague who knows the client's pricing history to review the pricing rationale before it is sent.`, ko:`발송 전에 고객의 가격 이력을 아는 선임 동료에게 가격 근거 검토를 요청하기`, ok:true},
        {t:`Run the same prompt several more times and pick the version whose pricing paragraph sounds most persuasive.`, ko:`같은 프롬프트를 몇 번 더 실행해 가격 문단이 가장 설득력 있게 들리는 버전을 고르기`},
        {t:`Rewrite the entire prompt from scratch, since six rounds without a breakthrough means the original structure failed.`, ko:`여섯 라운드 동안 큰 진전이 없었으므로 원래 구조가 실패한 것으로 보고 프롬프트를 처음부터 다시 쓰기`},
        {t:`Ask Claude to rate the summary's readiness on a ten-point scale and send it once the score reaches nine or higher.`, ko:`요약의 완성도를 10점 척도로 평가하게 하고 9점 이상이 나오면 발송하기`}
      ],
      explain:{ good:`최근 세 라운드에서 표현만 바뀌었다면 반복이 수렴한 것이므로 남은 문구는 직접 다듬는 편이 빠름. 가격 근거처럼 고객에게 나가는 판단 내용에 확신이 없다면 프롬프트를 더 돌리기보다 고객 사정을 아는 사람의 검토를 받아야 함. 외부로 나가는 제안서는 위험이 큰 결과물임.`,
        wrongs:[`<b>C:</b> 같은 프롬프트를 반복 실행하면 표현만 달라짐. 설득력 있게 들리는 문단이 맞는 근거라는 보장도 없음.`,
                `<b>D:</b> 이미 대부분 맞은 요약을 버리는 선택임. 최근 라운드의 변화가 작은 것은 프롬프트로 개선할 여지가 줄었다는 신호임.`,
                `<b>E:</b> Claude가 스스로 매긴 점수는 정확성이나 발송 준비 상태의 근거가 아님.`]},
      principle:"원칙 ⑤ 정책·사람 판단 우선" },

    { ts:"1.4", lvl:"기초",
      q:`Two staff members in a university admissions office each ask Claude to "sort the 600 applicant survey comments into themes." One gets seven themes, the other gets eleven, and their counts cannot be compared. The office needs a consistent breakdown for its annual report. What is the BEST change to the request?`,
      ko:`대학 입학처 직원 두 명이 각자 Claude에 "지원자 설문 의견 600건을 주제별로 분류할 것"이라고 요청함. 한 명은 주제 7개, 다른 한 명은 주제 11개를 받았고 두 결과의 건수는 서로 비교할 수 없음. 입학처는 연간 보고서에 쓸 일관된 분류 결과가 필요함. 요청을 바꾸는 가장 좋은 방법은 무엇인가?`,
      opts:[
        {t:`Define a fixed set of themes and a rule for comments that fit several themes or none at all.`, ko:`주제 목록을 고정하고, 여러 주제에 걸치거나 어디에도 맞지 않는 의견의 처리 규칙을 정하기`, ok:true},
        {t:`Have both staff members use the most capable model available so the themes come out the same each time.`, ko:`매번 같은 주제가 나오도록 두 직원 모두 가장 역량 높은 모델을 쓰게 하기`},
        {t:`Ask Claude to combine the counts from both runs into a single summary table that reflects both sets of themes.`, ko:`두 번의 실행 결과 건수를 두 주제 목록이 모두 반영된 요약표 하나로 합치게 하기`},
        {t:`Ask Claude to be as consistent and objective as possible when it chooses themes for the comments next time.`, ko:`다음에는 주제를 정할 때 최대한 일관되고 객관적으로 하라고 요청하기`}
      ],
      explain:{ good:`분석 작업은 기준을 엄격하게 정해야 하는 유형임. 주제 목록을 Claude가 매번 새로 정하면 실행할 때마다 다른 기준이 생겨 결과를 비교할 수 없음. 주제 목록을 고정하고 애매한 의견의 처리 규칙을 정하면 누가 실행해도 비교 가능한 결과가 나옴.`,
        wrongs:[`<b>B:</b> 기준이 정해지지 않으면 상위 모델도 실행마다 다른 분류를 만들 수 있음. 원인은 모델 성능이 아님.`,
                `<b>C:</b> 서로 다른 기준으로 만든 두 결과의 건수는 합쳐도 의미가 없음. 고정된 기준은 여전히 없음.`,
                `<b>D:</b> "일관되고 객관적으로"는 기준을 정하지 않는 막연한 요구임. 무엇을 기준으로 할지는 여전히 Claude가 정함.`]},
      principle:"원칙 ① 요청의 구체화" },

    { ts:"1.4", lvl:"실전", multi:2,
      q:`A retail category manager is preparing a holiday plan with Claude. In one prompt she asks for competitor price movements over the last three months and for promotion ideas within a fixed budget, applying the same rules to both: exactly five items, under 20 words each, no sources needed. Which TWO changes would BEST fit the two tasks? (Select TWO.)`,
      ko:`유통사 카테고리 매니저가 Claude와 연말 판촉 계획을 준비함. 프롬프트 하나로 최근 3개월간 경쟁사 가격 변화와 정해진 예산 안의 판촉 아이디어를 함께 요청하면서 두 작업에 같은 규칙을 적용함: 정확히 5개 항목, 항목당 20단어 이내, 출처는 요구하지 않음. 두 작업에 가장 잘 맞는 변경 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`For the price movements, use web search or Research and require a source and date for each price cited.`, ko:`가격 변화는 웹 검색이나 Research를 쓰고, 인용한 가격마다 출처와 날짜를 요구하기`, ok:true},
        {t:`For the promotion ideas, keep only the budget limit, drop the count and word limits, and ask for a much wider set.`, ko:`판촉 아이디어는 예산 조건만 남기고 항목 수와 단어 수 제한을 없앤 뒤 훨씬 폭넓은 아이디어를 요청하기`, ok:true},
        {t:`Keep the same rules for both tasks but raise the limit to ten items so that each list covers more ground.`, ko:`두 작업에 같은 규칙을 유지하되 각 목록이 더 넓게 다루도록 항목 수를 10개로 늘리기`},
        {t:`Ask Claude to estimate competitor prices from what it learned in training, to save time spent searching.`, ko:`검색 시간을 아끼기 위해 학습한 내용을 바탕으로 경쟁사 가격을 추정하게 하기`},
        {t:`Add more rules to the promotion ideas, such as channel, format, and audience, to keep them on target.`, ko:`판촉 아이디어가 목표에서 벗어나지 않도록 채널, 형식, 대상 같은 규칙을 더 추가하기`}
      ],
      explain:{ good:`경쟁사 가격 변화는 최근 3개월 정보이므로 웹 검색이나 Research로 실제 출처를 확인해야 하고, 가격마다 출처와 날짜를 요구해야 검증할 수 있음. 판촉 아이디어는 폭이 목표인 브레인스토밍이므로 예산 조건만 남기고 항목 수와 단어 수 제한을 없앰. 한 요청 안에서도 작업 유형마다 엄격하게 정할 부분이 다름.`,
        wrongs:[`<b>C:</b> 항목 수만 늘리면 리서치에는 여전히 출처가 없고, 브레인스토밍에는 같은 조건이 그대로 남음.`,
                `<b>D:</b> 학습 기억으로 추정한 최근 가격은 학습 기준 시점 이후 변화를 반영하지 못하고 확인할 방법도 없음.`,
                `<b>E:</b> 브레인스토밍에 조건을 더하면 아이디어 폭이 더 좁아짐.`]},
      principle:"원칙 ③ 요구에 맞는 선택" }
  ]}
]};
