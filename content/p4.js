/* PART 04: 업무 흐름 통합·설계 (D4, 16%) */
window.CCAO.p4 = { id:"p4", lessons:[

  /* ================= CH 1 · 4.1 요구사항·사용 사례 분석 ================= */
  { id:"p4c1", ch:"CH 1", obj:"4.1", title:"요구사항·사용 사례 분석", steps:[

    {type:"concept", kind:"PART BRIEFING · 파트 설명", h:"PART 04. 업무 흐름 통합·설계",
     html:`<p class="lead">PART 04는 Claude를 개인 도구로 쓰는 단계에서 팀의 업무 흐름 안에 넣어 반복 운영하는 단계로 옮기는 판단을 다룸. 시험은 어떤 단계를 Claude에 맡기고 어떤 단계를 사람이 맡을지 고르는 능력을 봄.</p>
      <h4>파트 프로필</h4>
      <div class="tbl"><table>
        <tr><th>항목</th><th>내용</th></tr>
        <tr><td>출제 영역</td><td>D4 Workflow Integration and Solution Design</td></tr>
        <tr><td>출제 비중</td><td>16% · 약 10문항 (D2 다음으로 큰 영역)</td></tr>
        <tr><td>챕터 구성</td><td>출제 목표 5개 = 챕터 5개 + 미니테스트 10문항</td></tr>
      </table></div>
      <h4>다루는 범위</h4>
      <ul>
        <li><b>CH 1 요구사항·사용 사례 분석 (4.1)</b>: 흩어진 요청과 긴 문서에서 요구사항을 표로 뽑고, 모호한 항목을 다시 점검하는 방법</li>
        <li><b>CH 2 리서치·기획·프로세스 개선 (4.2)</b>: 계획의 숫자는 계산 기능이, 권고 정리는 Claude가, 최종 결정은 사람이 맡는 역할 배분</li>
        <li><b>CH 3 솔루션 설계·개발·반복 지원 (4.3)</b>: Artifacts(아티팩트)로 시안을 만들고 피드백으로 고치는 반복 방식과, 개발 조직에 넘길 시점</li>
        <li><b>CH 4 기존 업무 흐름에 통합·재설계 (4.4)</b>: 업무 단계를 AI 위임·협업·사람 유지로 나누는 위임 매핑과 검토 관문 설계</li>
        <li><b>CH 5 이해관계자에게 가치·한계 설명 (4.5)</b>: 청중에 맞춰 성과, 한계, 사람 확인 지점을 함께 전달하는 방법</li>
      </ul>
      <h4>출제 형태</h4>
      <ul>
        <li>지문: 한 팀의 업무 흐름(제안서 대응, 인력 계획, 계약 검토, 온보딩, 보도자료 배포 등)과 지금 생긴 상황이 제시됨</li>
        <li>질문: 어느 단계를 맡길지, 무엇을 먼저 할지, 언제 개발 조직에 넘길지, 이해관계자(stakeholder)에게 어떻게 설명할지를 물음</li>
        <li>오답 선택지 유형: 전체 자동화, 앞 단계 성과를 근거로 다음 단계까지 맡기기, 가장 강력한 모델로 교체, 반대로 Claude 사용 전면 중단</li>
        <li>정답 유형: 단계마다 위험을 따로 판단하고, 숫자는 계산 기능으로 확정하며, 결정과 되돌릴 수 없는 행동은 사람에게 남기는 선택</li>
      </ul>
      <h4>연계</h4>
      <ul>
        <li>공식 Prep Course 모듈 4 "Workflow Integration &amp; Solution Design"(약 63분)이 이 영역을 다룸</li>
        <li>기준 역량은 AI Fluency 4역량(Description·Discernment·Diligence·Delegation) 중 위임 판단(Delegation)임</li>
        <li>업무 처리 흐름 지도에서 ⑤ 업무 적용 단계에 해당함</li>
        <li>앞 단계의 결과 검증(D2), 환경 설정(D5), 데이터·정책 판단(D6) 지식이 이 파트의 문항에 함께 쓰임</li>
      </ul>
      <div class="callout">시험 포인트 · 개인이 Claude를 잘 쓰는 것과 팀의 업무 흐름이 Claude를 쓰는 것은 다른 문제임. 공식 강좌 모듈 4는 업무 흐름의 가치가 맡길 단계를 골라내는 판단에서 나온다고 설명함.</div>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"요구사항 추출과 과업 정의",
     html:`<div class="callout term"><b>용어 카드</b> · <b>요구사항(requirement)</b>: 결과물이 반드시 충족해야 하는 조건. 누가, 무엇을, 언제까지, 어떤 기준으로 받아야 하는지를 담음.</div>
      <div class="callout term"><b>용어 카드</b> · <b>사용 사례(use case)</b>: Claude를 적용할 구체적인 업무 장면. 누가 어떤 입력으로 어떤 결과물을 얻는지로 정의함.</div>
      <h4>Claude를 요구사항 분석에 쓰는 장면</h4>
      <ul>
        <li>무엇인가: 대화 안에서 하는 분석 작업임. 별도 기능 화면이 있는 것은 아님</li>
        <li>입력: 긴 제안요청서(RFP), 여러 부서의 이메일, 회의 메모, 구두 요청을 받아 적은 메모처럼 정리되지 않은 자료</li>
        <li>출력: 요구사항 목록과 모호하거나 빠진 부분의 표시</li>
        <li>언제 쓰는가: 제안서 대응, 캠페인 브리프 접수, 행사 기획 요청 접수, 사내 보고 양식 개편처럼 여러 사람의 요구를 한 문서로 모아야 할 때</li>
      </ul>
      <h4>서술형 요약 대신 구조화된 추출</h4>
      <ul>
        <li>"요약할 것"이라고 요청하면 읽기 좋은 문단이 나옴. 문단 속에서는 빠진 요구사항이 눈에 띄지 않음</li>
        <li>출력 형식(output format)을 열이 정해진 표로 지정하면 항목마다 출처와 기준을 대조할 수 있음</li>
        <li>원문에 없는 내용을 더하지 말라는 조건도 함께 넣음</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 약한 요청</span>첨부한 RFP 내용을 요약할 것.</div>
      <div class="sample good"><span class="sl">예시 · 구조화된 추출 요청</span>첨부한 '2027 지역 축제 운영 대행 RFP'에서 요구사항을 표로 추출할 것.
열: 번호 / 요구사항 / 원문 위치(쪽·항) / 필수·선택 / 측정 기준 / 모호한 점
원문에 없는 내용은 추가하지 말 것.
원문에 측정 기준이 없으면 해당 칸에 "없음"이라고 적을 것.</div>
      <div class="sample"><span class="sl">예시 · 추출 결과 일부</span>번호 | 요구사항 | 원문 위치 | 필수·선택 | 측정 기준 | 모호한 점
R-07 | 현장 안전요원 배치 | 12쪽 3항 | 필수 | 관람객 500명당 1명 | 없음
R-12 | 신속한 민원 응대 체계 | 15쪽 1항 | 필수 | 없음 | "신속"의 기준 없음
R-18 | 지역 업체 우선 활용 | 20쪽 표 4 | 선택 | 없음 | 비율·대상 범위 불명</div>
      <h4>업무 니즈를 과업 정의로 바꾸기</h4>
      <ul>
        <li>요청은 흔히 "보고가 더 나아져야 한다"처럼 막연한 니즈로 들어옴</li>
        <li>그대로 Claude에 넘기면 결과물도 막연해짐. 결과를 무엇에 비춰 판단할지도 정할 수 없음</li>
        <li>다섯 가지를 정하면 검증 가능한 과업이 됨: 무슨 문서인가, 누가 읽는가, 얼마나 자주 나가는가, 어떤 데이터를 쓰는가, 어떤 형식인가</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 막연한 니즈</span>본부장 요청: 주간 영업 보고가 더 나아져야 함.</div>
      <div class="sample good"><span class="sl">예시 · 과업 정의</span>문서: 주간 영업 보고(본부장 보고용)
독자: 영업본부장. 결정할 사항만 빠르게 확인함
주기: 매주 월요일 오전 9시 전
데이터: CRM 주간 실적 내보내기 파일, 지역별 목표표
형식: 1쪽. 첫 줄에 목표 대비 달성률, 이어서 이상 지역 3곳과 원인, 마지막에 결정 필요 사항</div>
      <ul>
        <li>과업 정의가 끝나야 무엇을 맡기고 무엇을 검토할지가 정해짐</li>
        <li>과업 정의 자체도 Claude와 함께 할 수 있음. 요청 메모를 주고 "이 요청을 보고서 과업으로 정의하는 데 필요한 질문을 목록으로 만들 것"이라고 요청함</li>
      </ul>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"요구사항 재점검과 반복 업무의 Project 운영",
     html:`<div class="callout term"><b>용어 카드</b> · <b>요구사항 재점검(pressure-testing)</b>: 추출한 요구사항 목록을 Claude에게 다시 따져보게 해 숨은 요구를 드러내는 단계. 측정 기준이 없는 항목, 두 가지로 해석되는 항목, 본문에 직접 쓰이지 않고 암시만 된 항목을 찾음.</div>
      <h4>재점검이 필요한 이유</h4>
      <ul>
        <li>추출 표가 깔끔해 보여도 숨은 요구는 표에 드러나지 않음</li>
        <li>예: "신속한 민원 응대 체계"는 담당자 두 명이 서로 다른 체계를 만들 수 있는 항목임</li>
        <li>예: 평가 기준표에만 "지역 고용 실적" 배점이 있고 본문 요구사항에는 없으면 제안서에서 빠지기 쉬움</li>
        <li>숨은 요구를 놓친 제안서는 형식이 완벽해도 평가에서 점수를 잃음</li>
        <li>공식 강좌는 이 단계를 결과물 평가 역량(Discernment, PART 03)을 요구사항 단계에 적용한 것으로 설명함</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · 재점검 요청</span>위 요구사항 표를 다시 검토할 것.
1. 측정 기준이 없어 담당자마다 다르게 수행할 수 있는 항목
2. 두 가지 이상으로 해석되는 항목
3. 본문에는 없지만 평가 기준표·첨부 양식·질의응답에서 암시되는 요구
각 항목을 위 세 유형으로 표시하고, 발주처에 보낼 확인 질문으로 바꿀 것.</div>
      <div class="sample"><span class="sl">예시 · 재점검 결과 일부</span>R-12 신속한 민원 응대 체계 → 유형 1
확인 질문: 민원 접수 후 1차 응답 목표 시간이 정해져 있는가?
신규 R-25 지역 고용 실적 → 유형 3 (평가 기준표 3쪽, 배점 10점)
확인 질문: 지역 고용 인원의 산정 기준(거주지·계약 형태)은 무엇인가?</div>
      <ul>
        <li>확인 질문을 실제로 보낼지, 입찰에 참여할지는 담당자가 결정함</li>
        <li>재점검 결과도 Claude의 출력임. 원문 위치를 열어 대조한 뒤 사용함</li>
      </ul>
      <h4>반복되는 요구사항 분석은 Project로 운영</h4>
      <ul>
        <li>제안 업무가 매달 반복되고, 참고할 과거 우수 제안서가 있고, 추출 형식이 매번 같다면 대화마다 다시 설명할 필요가 없음</li>
        <li>Projects: 과거 우수 제안서는 지식 베이스(knowledge base)에, 추출 표의 열과 규칙은 프로젝트 지시문(Project instructions)에 둠</li>
        <li>Skills: 추출 결과를 회사 제안서 양식으로 바꾸는 서식 절차는 Skill(여러 단계로 된 반복 절차를 담아 두는 기능)로 둠. Skill은 계정 수준에 있으므로 이 Project 안의 대화에서도 쓰임</li>
        <li>이 구성은 개발 작업 없이 Associate가 직접 할 수 있는 범위임. 설정 세부는 PART 05에서 다룸</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 제안서 대응 Project 구성</span>Project 이름: 공공 제안 대응
프로젝트 지시문: 모든 RFP는 요구사항 표(번호/요구사항/원문 위치/필수·선택/측정 기준/모호한 점)로 먼저 추출함. 추출 후 재점검 3유형을 표시함. 원문에 없는 내용은 추정하지 않음.
지식 베이스: 2025~2026 수주 제안서 4건, 회사 소개서 최신본
Skill(계정 수준): 제안서 목차·서식 변환 절차</div>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"요구사항 분석 판단 기준",
     html:`__MAP:apply__
      <div class="flow">
        <span class="nd">① 입력 모으기<small>RFP·메일·회의 메모</small></span><span class="ar">→</span>
        <span class="nd">② 구조화 추출<small>열을 정한 표</small></span><span class="ar">→</span>
        <span class="nd hot">③ 재점검<small>기준 없음·이중 해석·암시</small></span><span class="ar">→</span>
        <span class="nd">④ 확인·결정<small>요청자 확인·담당자 판단</small></span><span class="ar">→</span>
        <span class="nd">⑤ 반복이면 설정<small>Project·Skill</small></span>
      </div>
      <p class="howto"><b>읽는 법</b>화살표 = 작업 순서. 강조된 ③은 가장 자주 생략되는 단계임. ④부터는 사람이 결정함.</p>
      <h4>상황 → 선택 → 이유</h4>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>요청이 "더 좋게", "개선 필요"처럼 막연함</td><td>문서·독자·주기·데이터·형식을 먼저 정함</td><td>정의되지 않은 과업은 검증할 기준이 없음</td></tr>
        <tr><td>긴 문서와 흩어진 메일에서 요구사항을 모아야 함</td><td>열을 정한 표로 추출 요청</td><td>항목마다 출처와 기준을 대조할 수 있음</td></tr>
        <tr><td>추출 표가 완성되어 보임</td><td>재점검 요청 후 확인 질문 작성</td><td>숨은 요구는 표에 드러나지 않음</td></tr>
        <tr><td>항목에 측정 기준이 없음</td><td>요청 부서·발주처에 확인</td><td>Claude가 기준값을 채우면 근거 없는 요구사항이 생김</td></tr>
        <tr><td>같은 유형 문서를 매달 분석함</td><td>Project(지시문·지식 베이스) + 서식 Skill</td><td>같은 설명을 반복하지 않음. 개발 작업 없이 구성 가능</td></tr>
        <tr><td>팀 업무 중 Claude 적용 후보를 고름</td><td>반복성·입력 형태·결과물 형식·틀렸을 때 비용을 표로 비교</td><td>사용 사례를 감이 아닌 조건으로 고를 수 있음</td></tr>
      </table></div>
      <h4>사용 사례 선별 표 예시</h4>
      <div class="tbl"><table>
        <tr><th>업무(마케팅팀)</th><th>반복</th><th>입력</th><th>형식</th><th>틀렸을 때</th><th>판단</th></tr>
        <tr><td>캠페인 브리프 요구사항 정리</td><td>매주</td><td>메일·회의 메모</td><td>일정</td><td>내부에서 수정 가능</td><td>적용 후보</td></tr>
        <tr><td>월간 광고비 정산</td><td>매월</td><td>집행 내역 파일</td><td>일정</td><td>금액 오류</td><td>계산은 Code Execution(코드 실행, CH 2에서 설명), 확정은 사람</td></tr>
        <tr><td>위기 대응 공식 입장문</td><td>드묾</td><td>상황별</td><td>매번 다름</td><td>외부 공개, 되돌리기 어려움</td><td>초안 보조까지만, 결정은 사람</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>행 = 팀 업무 하나. 오른쪽 열로 갈수록 위험 조건을 봄. 단계별 위임 기준의 세부는 CH 4에서 다룸.</p>
      <div class="callout">시험 포인트 · 요구사항 문항의 정답은 "추출 → 재점검 → 사람이 확인" 순서를 지킴. 표가 완성되어 보인다는 이유로 바로 작성에 들어가는 선택지와, 비어 있는 기준을 Claude가 채우게 하는 선택지는 오답임.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>막연한 니즈를 그대로 Claude에 넘김</li>
        <li>요구사항을 서술형 요약으로만 받음</li>
        <li>추출만 하고 재점검을 생략해 숨은 요구를 놓침</li>
        <li>측정 기준이 없는 항목을 Claude가 "업계 일반 수준"으로 채우게 함</li>
        <li>Claude에게 항목별 확신도를 묻고 낮은 항목을 지움. 자기 평가는 정확도의 근거가 아님</li>
        <li>매달 반복되는 분석인데 매번 새 대화에서 형식을 다시 설명함</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Before the build starts", ts:"4.1",
     q:`A marketing manager at a cosmetics brand collected requests for a new campaign landing page from three teams through emails and meeting notes. She asked Claude to turn them into a requirements table, and the table looks complete. Several rows say things like "mobile-friendly design" and "fast loading." The web agency starts building next week. What should she do FIRST?`,
     ko:`화장품 브랜드의 마케팅 매니저가 새 캠페인 랜딩 페이지에 대한 세 팀의 요청을 이메일과 회의 메모로 모았다. Claude에게 요구사항 표로 정리하게 했고 표는 완성되어 보인다. 여러 행에 "모바일 친화적 디자인", "빠른 로딩" 같은 표현이 있다. 웹 에이전시는 다음 주에 제작을 시작한다. 가장 먼저 해야 할 일은 무엇인가?`,
     opts:[
       {t:`Ask Claude to recheck the table for items with no clear standard or more than one reading, then confirm those with the requesting teams.`, ko:`기준이 분명하지 않거나 두 가지로 읽히는 항목을 Claude가 다시 점검하게 한 뒤, 해당 항목을 요청한 팀에 확인하기`, ok:true},
       {t:`Send the table to the agency now and let their developers raise questions about any unclear items during the build.`, ko:`표를 지금 에이전시에 보내고 불분명한 항목은 제작 중에 개발자가 질문하게 하기`},
       {t:`Ask Claude to rewrite the table as a polished one-page narrative brief so the agency can read it more easily.`, ko:`에이전시가 읽기 쉽도록 표를 한 쪽짜리 서술형 브리프로 다시 쓰게 하기`},
       {t:`Ask Claude to replace each vague item with a reasonable industry-standard value so the agency can start building right away without waiting.`, ko:`에이전시가 기다리지 않고 바로 제작할 수 있도록 모호한 항목마다 업계 표준 수준의 값을 Claude가 채우게 하기`}
     ],
     explain:{ good:`"모바일 친화적", "빠른 로딩"은 측정 기준이 없어 제작자마다 다르게 구현할 수 있는 항목임. 추출 표가 완성되어 보여도 이런 항목은 표 안에서 드러나지 않음. Claude에게 기준 없음·이중 해석·암시된 요구를 다시 점검하게 하고, 결과를 요청 팀에 확인해야 제작 전에 요구사항이 확정됨.`,
       wrongs:[`<b>B:</b> 질문은 제작 중에도 나오지만 그때는 이미 일정과 비용이 쓰인 뒤임. 확인은 제작 전에 끝내야 함.`,
               `<b>C:</b> 서술형으로 바꾸면 읽기는 쉬워지지만 모호한 항목은 그대로 남고 오히려 덜 보이게 됨.`,
               `<b>D:</b> 근거 없는 기준값이 그대로 요구사항이 됨. 요청 팀이 원한 기준과 다를 수 있음.`]},
     principle:"원칙 ① 요청의 구체화",
     hint:`표가 완성되어 보인다는 사실과, 표의 각 항목을 두 사람이 같은 뜻으로 읽을 수 있는지는 별개의 문제임. 제작이 시작되기 전에 무엇이 확정되어야 하는지 볼 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[ {t:`측정 기준이 없는 항목은 제작자마다 다르게 구현되므로 제작 전에 숨은 모호함을 드러내 확인해야 하기 때문`, ok:true},
              {t:`공식 강좌가 권장하는 절차라서`},
              {t:`Claude의 추출 결과에는 항상 누락이 있어 매번 처음부터 다시 만들어야 하기 때문`},
              {t:`에이전시는 표보다 서술형 문서를 더 잘 이해하기 때문`} ],
       explain:`정답의 근거는 "두 사람이 다르게 읽을 수 있는 항목"이 남아 있다는 조건임. 추출 결과를 버릴 필요는 없고, 재점검으로 모호한 항목만 골라 확인하면 됨.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: A vague request from above", ts:"4.1",
     q:`An HR coordinator at a mid-sized logistics company is told by her director: "Our onboarding reporting needs to be better. See if Claude can help." No other details are given. She can access the HR system's monthly export and last quarter's onboarding report. What should she do FIRST?`,
     ko:`중견 물류 회사의 HR 코디네이터가 본부장에게 "온보딩 보고가 더 나아져야 한다. Claude가 도움이 되는지 보라."는 말을 들었다. 다른 세부 사항은 없다. 코디네이터는 HR 시스템의 월간 내보내기 파일과 지난 분기 온보딩 보고서를 쓸 수 있다. 가장 먼저 해야 할 일은 무엇인가?`,
     opts:[
       {t:`Clarify which report is meant, who reads it, how often it goes out, which data it uses, and what format it should take.`, ko:`어떤 보고서인지, 누가 읽는지, 얼마나 자주 나가는지, 어떤 데이터를 쓰는지, 어떤 형식인지를 먼저 확정하기`, ok:true},
       {t:`Upload last quarter's report and ask Claude to produce an improved version, then refine it over a few rounds of feedback.`, ko:`지난 분기 보고서를 올려 개선판을 만들게 한 뒤 몇 차례 피드백으로 다듬기`},
       {t:`Create a Project with all the onboarding files so that Claude can work out on its own what a better report would look like.`, ko:`온보딩 파일을 모두 담은 Project를 만들어 더 나은 보고서가 무엇인지 Claude가 스스로 판단하게 하기`},
       {t:`Ask Claude for a list of onboarding metrics that leading companies track, and build the new report around the most common ones.`, ko:`선도 기업들이 추적하는 온보딩 지표 목록을 Claude에게 받아 가장 흔한 지표 중심으로 새 보고서를 구성하기`}
     ],
     explain:{ good:`"보고가 더 나아져야 한다"는 아직 막연한 니즈 단계임. 문서·독자·주기·데이터·형식이 정해져야 Claude에게 무엇을 요청하고 결과를 무엇에 비춰 검토할지가 생김. 정의 없이 만든 개선판은 본부장이 원한 방향인지 판단할 기준이 없음.`,
       wrongs:[`<b>B:</b> 반복 개선은 좋은 방법이지만 목표가 정의되지 않으면 피드백도 감에 의존함. 순서가 뒤바뀐 선택임.`,
               `<b>C:</b> Project 설정은 반복 업무에 유용하지만 무엇이 "더 나은" 보고서인지는 파일에서 나오지 않음. 그 기준은 본부장의 요구에서 나옴.`,
               `<b>D:</b> 다른 회사의 일반 지표는 이 본부장의 결정에 필요한 정보와 다를 수 있음. 요구를 확인하지 않고 외부 기준을 들여온 선택임.`]},
     principle:"원칙 ① 요청의 구체화",
     hint:`지금 손에 있는 것은 정의된 과업인가, 막연한 바람인가? 결과물을 무엇에 비춰 좋고 나쁨을 판단할지 아직 정해지지 않았다는 점을 볼 것.`}
  ]},

  /* ================= CH 2 · 4.2 리서치·기획·프로세스 개선 ================= */
  { id:"p4c2", ch:"CH 2", obj:"4.2", title:"리서치·기획·프로세스 개선", steps:[

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"계획 업무의 종합과 계산 분리",
     html:`<div class="callout term"><b>용어 카드</b> · <b>종합(synthesis)</b>: 여러 자료와 고려사항을 비교하고 저울질해 구조화된 권고로 묶는 일. 계획 업무에서 Claude의 기여가 가장 큰 단계임.</div>
      <div class="callout term"><b>용어 카드</b> · <b>계산</b>: 추세, 처리량, 비용처럼 숫자를 산출하는 일. Claude가 문장으로 생성한 숫자는 그럴듯해도 틀릴 수 있으므로 Code Execution으로 실제 계산함.</div>
      <h4>계획 업무 안의 두 종류 작업</h4>
      <ul>
        <li>계획 업무에는 Claude가 잘하는 종합과 반드시 검증해야 하는 계산이 섞여 있음</li>
        <li>Claude는 글을 쓸 때 가장 그럴듯한 다음 내용을 만듦. 숫자도 같은 방식으로 나오므로 그럴듯함과 정확함이 일치하지 않을 수 있음</li>
        <li>Code Execution은 Claude가 내부적으로 코드를 작성·실행해 계산 결과를 돌려주는 기능임. 사용자가 코드를 쓸 필요는 없음</li>
        <li>신뢰할 수 있는 계획 흐름의 순서: 데이터 업로드 → Code Execution으로 수치 계산 → 그 수치 위에서 Claude가 권고 종합 → 사람이 최종 결정</li>
        <li>이 순서를 지키면 계획의 숫자 하나하나를 원자료와 계산식으로 설명할 수 있음</li>
      </ul>
      <h4>예시: 고객센터 다음 분기 인력 계획</h4>
      <div class="sample bad"><span class="sl">예시 · 약한 요청</span>다음 분기에 상담 인력이 몇 명 필요한지 알려줄 것.</div>
      <ul>
        <li>이 요청에는 데이터가 없음. Claude는 일반적인 상담원 처리량이나 업계 평균에 기댄 숫자를 만들 수 있음</li>
        <li>숫자의 출처를 물으면 답할 수 없는 계획이 됨</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · 계산 후 종합 요청</span>[1단계] 첨부한 최근 18개월 문의 기록 파일을 코드 실행으로 분석할 것.
- 월별 문의량과 전년 동월 대비 증감률
- 상담원 1인당 월평균 처리 건수
- 3월·9월 성수기의 평시 대비 증가율
계산에 쓴 열과 계산식을 표로 함께 보일 것.

[2단계] 1단계 수치만 근거로 다음 분기 인력 안을 3가지로 정리할 것.
각 안마다 필요 인원, 근거 수치, 가정(이직률, 상담 채널 이동 등)을 적을 것.
수치에 없는 내용은 "가정"으로 표시할 것.</div>
      <ul>
        <li>1단계와 2단계를 나누는 것은 작업 분해(task decomposition, PART 02)를 계획 업무에 적용한 것임</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 2단계 결과 일부 (가상 수치)</span>안 A: 상담원 22명(현 인원 유지)
근거: 1인당 월평균 처리 410건(계산값), 다음 분기 예상 월평균 문의 9,000건(계산값)
가정: 이직률 현 수준 유지, 채팅 상담 비중 변화 없음

안 B: 상담원 26명(+4명)
근거: 9월 성수기 예상 문의 10,620건(평시 대비 +18%, 계산값) ÷ 1인당 410건
가정: 성수기를 정규 인력만으로 대응

안 C: 정규 22명 + 9월 한 달 임시 인력 6명
근거: 안 B와 같은 성수기 수치
가정: 임시 인력의 처리량은 정규 인력의 70% 수준</div>
      <ul>
        <li>근거 칸의 숫자는 모두 1단계 계산값에서 옴. 가정 칸은 사람이 맞는지 따져 볼 항목임</li>
        <li>Claude가 정리한 3가지 안은 판단 재료임</li>
        <li>예산 한도, 채용 동결 논의, 팀의 위험 감수 성향처럼 Claude가 볼 수 없는 현실은 담당 관리자가 따져 최종 안을 정함</li>
      </ul>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"최신 정보 조사와 프로세스 개선",
     html:`<h4>최신 정보가 필요한 조사</h4>
      <ul>
        <li>Claude의 지식에는 학습 기준 시점(training cutoff)이 있음. 그 이후의 사건·규제·시장 변화는 현재 소스 없이 신뢰할 수 없음</li>
        <li>가벼운 최신 확인(이번 주 발표 여부, 최근 일정 변경) → 채팅의 웹 검색(web search)</li>
        <li>여러 출처를 깊이 조사해 종합하는 일(최근 3개월 경쟁사 동향, 새 규제에 대한 업계 반응) → Research(리서치 모드). 여러 단계로 검색하고 결과를 종합하는 기능임</li>
        <li>두 경우 모두 결과에 붙은 출처를 열어 핵심 주장을 확인한 뒤 계획에 반영함</li>
      </ul>
      <div class="tbl"><table>
        <tr><th>구분</th><th>채팅의 웹 검색</th><th>Research</th></tr>
        <tr><td>무엇</td><td>채팅 입력창에서 대화별로 켜는 검색</td><td>여러 출처에 걸쳐 단계적으로 검색하고 종합하는 조사 기능</td></tr>
        <tr><td>맞는 일</td><td>사실 한두 개의 최신 확인</td><td>여러 회사·기간·출처를 묶는 조사</td></tr>
        <tr><td>예</td><td>A사가 이번 주 신제품을 발표했는지 확인</td><td>간편결제 3사의 최근 3개월 수수료 정책 변화 조사</td></tr>
        <tr><td>사용 전 확인</td><td>인용된 출처를 열어 대조</td><td>핵심 주장마다 출처 대조, 단일 출처 항목 표시</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>열 = 기능. 둘 다 학습 기준 시점 이후 정보를 가져오는 수단이며, 필요한 깊이와 범위로 고름.</p>
      <div class="sample"><span class="sl">예시 · Research 요청</span>국내 간편결제 3사(A페이, B페이, C페이)의 최근 3개월 가맹점 수수료 정책 변경을 조사할 것.
출처는 공식 공지, 보도자료, 업계 기사 순으로 우선할 것.
결과는 회사별 표(변경 일자 / 변경 내용 / 출처 링크)로 정리하고, 출처가 기사 한 건뿐인 항목은 "단일 출처"로 표시할 것.</div>
      <h4>프로세스 개선에 쓰는 방법</h4>
      <ul>
        <li>프로세스 개선: 지금 하는 업무 절차에서 반복·대기·수작업이 몰린 단계를 찾아 줄이는 일</li>
        <li>Claude의 역할: 흩어진 절차 설명을 단계 표로 정리하고, 반복되는 수작업과 개선 후보를 제시함</li>
        <li>단계별 소요 시간처럼 숫자로 판단할 부분은 실제 기록(처리 시각, 작업 로그)을 Code Execution으로 계산함</li>
        <li>어느 개선안을 먼저 할지는 팀이 비용·영향·조직 상황을 보고 정함</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · 프로세스 정리 요청</span>아래는 월간 성과 보고 작성 절차를 팀원 3명이 각자 적은 메모임.
1. 메모를 합쳐 단계 표로 정리할 것(단계 / 담당 / 입력 / 출력 / 수작업 여부 / 매달 반복 여부).
2. 메모끼리 서로 다르게 적힌 단계는 따로 표시할 것.
3. 반복되는 수작업 단계마다 개선 후보를 1개씩 제시하고, 그 안이 의존하는 가정을 적을 것.
소요 시간은 추정하지 말 것. 첨부한 작업 기록 파일에서 코드 실행으로 계산할 것.</div>
      <ul>
        <li>메모끼리 다르게 적힌 단계는 사람마다 일하는 방식이 다르다는 신호임. 표준화 후보가 됨</li>
        <li>반복 수작업을 설정(지시문, Skill, 지식 베이스)으로 옮기는 세부 방법은 PART 07에서 다룸</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"리서치·기획 역할 배분 기준",
     html:`__MAP:apply__
      <div class="flow">
        <span class="nd">① 자료 확보<small>내부 데이터·기록</small></span><span class="ar">→</span>
        <span class="nd hot">② 계산<small>Code Execution</small></span><span class="ar">→</span>
        <span class="nd">③ 최신 정보 보강<small>웹 검색·Research</small></span><span class="ar">→</span>
        <span class="nd">④ 종합<small>Claude, 가정 명시</small></span><span class="ar">→</span>
        <span class="nd">⑤ 결정<small>사람: 예산·조직 현실</small></span>
      </div>
      <p class="howto"><b>읽는 법</b>화살표 = 작업 순서. ③은 최신 정보가 필요할 때만 들어감. 숫자가 들어가는 계획은 강조된 ②를 건너뛰지 않음. ⑤는 항상 사람이 맡음.</p>
      <h4>상황 → 선택 → 이유</h4>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>계획이 추세·처리량·비용 같은 수치에 의존함</td><td>데이터 업로드 후 Code Execution으로 계산</td><td>계산된 숫자여야 근거를 한 줄씩 설명할 수 있음</td></tr>
        <tr><td>여러 고려사항을 비교해 선택지를 정리함</td><td>Claude 종합, 가정 명시 요구</td><td>Claude의 기여가 가장 큰 단계</td></tr>
        <tr><td>이번 주 발표·일정 등 가벼운 최신 확인</td><td>채팅의 웹 검색</td><td>빠르고 출처를 바로 열어 볼 수 있음</td></tr>
        <tr><td>여러 출처의 최근 동향을 깊이 조사함</td><td>Research</td><td>다단계 검색과 종합</td></tr>
        <tr><td>예산 동결, 조직 내 사정, 위험 감수 판단</td><td>사람이 결정</td><td>Claude가 볼 수 없는 현실과 책임이 걸림</td></tr>
        <tr><td>절차의 병목을 찾음</td><td>Claude로 단계 표 정리, 기록으로 시간 계산</td><td>감이 아닌 측정값으로 병목을 확인함</td></tr>
      </table></div>
      <div class="callout">시험 포인트 · 계획 문항의 정답은 "계산 → 종합 → 사람 결정" 순서를 지킴. 권고를 먼저 받고 숫자를 나중에 맞추는 선택지, 업계 평균으로 숫자를 채우는 선택지, Claude의 권고를 그대로 최종안으로 확정하는 선택지는 오답임.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>계획의 핵심 수치를 Claude의 문장 속 추정, 학습된 지식, 업계 평균으로 대신함</li>
        <li>권고를 먼저 받고 수치를 나중에 끼워 맞춤</li>
        <li>Claude의 권고를 최종 결정으로 그대로 확정함</li>
        <li>최근 정보가 필요한데 검색 없이 Claude의 기존 지식에 기댐</li>
        <li>깊은 다출처 조사를 빠른 검색 한 번으로 끝냄. 반대로 간단한 사실 확인에 Research를 씀</li>
        <li>프로세스 병목을 기록 없이 "느린 것 같은 단계"로 정함</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: A plan the director will question", ts:"4.2",
     q:`An operations analyst at an online grocery company must propose next quarter's warehouse staffing levels to her director. She has 18 months of order and shift data in a spreadsheet. The director has said he will ask where every number in the plan comes from. Which approach is MOST appropriate?`,
     ko:`온라인 식료품 회사의 운영 분석가가 다음 분기 물류센터 인력 수준을 본부장에게 제안해야 한다. 18개월 치 주문·근무조 데이터가 스프레드시트에 있다. 본부장은 계획의 모든 숫자가 어디서 나왔는지 물어보겠다고 말했다. 가장 적절한 방법은 무엇인가?`,
     opts:[
       {t:`Upload the data, have Claude compute trends and per-shift throughput with code execution, then build options on those figures.`, ko:`데이터를 올리고 Claude가 코드 실행으로 추세와 근무조별 처리량을 계산하게 한 뒤, 그 수치 위에서 인력 안을 만들게 하기`, ok:true},
       {t:`Ask Claude to recommend staffing levels using typical warehouse productivity ratios, then adjust the result based on her own experience.`, ko:`일반적인 물류센터 생산성 비율로 Claude가 인력 수준을 권고하게 한 뒤 본인 경험으로 조정하기`},
       {t:`Have Claude write the staffing recommendation first, then spot-check a few of its numbers against the spreadsheet before sending it.`, ko:`Claude가 인력 권고를 먼저 쓰게 하고, 보내기 전에 숫자 몇 개만 스프레드시트와 대조하기`},
       {t:`Use Research to find what similar grocery companies did last year and propose the staffing level that appears most often in the results.`, ko:`Research로 비슷한 식료품 회사들의 작년 사례를 찾고 결과에 가장 자주 나온 인력 수준을 제안하기`}
     ],
     explain:{ good:`본부장이 모든 숫자의 출처를 묻겠다는 조건이 결정적임. 이 회사의 실제 데이터를 Code Execution으로 계산해야 각 숫자를 원자료와 계산식으로 설명할 수 있음. Claude는 그 검증된 수치를 바탕으로 선택지와 가정을 정리하는 종합을 맡음.`,
       wrongs:[`<b>B:</b> 일반 비율은 이 회사의 주문 패턴을 반영하지 않음. 경험에 따른 조정도 근거로 제시하기 어려움.`,
               `<b>C:</b> 결론을 먼저 쓰고 숫자 일부만 나중에 대조하는 방식은 순서가 거꾸로임. 확인하지 않은 숫자가 계획에 남음.`,
               `<b>D:</b> 다른 회사의 인력 수준은 이 회사의 물량과 처리량을 반영하지 않음. 이미 가진 내부 데이터를 쓰지 않은 선택임.`]},
     principle:"원칙 ② 내보내기 전 검증",
     hint:`본부장이 "이 숫자는 어디서 나왔는가"를 물을 때 무엇으로 답할 수 있어야 하는가? 이미 손에 있는 자료를 볼 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[ {t:`계획의 숫자를 원자료와 계산식으로 설명할 수 있어야 하므로 문장 생성이 아닌 실제 계산이 필요하기 때문`, ok:true},
              {t:`Code Execution이 가장 최신 기능이라서`},
              {t:`Claude는 숫자를 다룰 수 없으므로 계산을 모두 사람이 해야 하기 때문`},
              {t:`업계 평균은 언제나 실제보다 낮게 나오기 때문`} ],
       explain:`정답의 근거는 "숫자마다 출처를 대야 한다"는 조건임. Claude는 계산 결과를 바탕으로 선택지를 정리하는 데 그대로 쓰이므로, Claude가 숫자를 다룰 수 없다는 이유는 맞지 않음.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Recent competitor moves", ts:"4.2",
     q:`A sales enablement manager at a B2B software firm is preparing a quarterly briefing on what five competitors have announced in the past three months, including pricing changes, partnerships, and product launches. Sales reps will use the briefing in client meetings. Which approach BEST fits this task?`,
     ko:`B2B 소프트웨어 회사의 세일즈 이네이블먼트 매니저가 경쟁사 5곳이 최근 3개월 동안 발표한 가격 변경, 제휴, 제품 출시를 정리한 분기 브리핑을 준비한다. 영업 담당자들이 고객 미팅에서 이 브리핑을 쓴다. 이 과업에 가장 맞는 방법은 무엇인가?`,
     opts:[
       {t:`Run a Research task across multiple sources, then check the key claims against the cited sources before finalizing the briefing.`, ko:`여러 출처에 걸친 Research를 실행하고, 브리핑 확정 전에 핵심 주장을 인용된 출처와 대조하기`, ok:true},
       {t:`Ask Claude in a regular chat without search, since it already has broad knowledge of these well-known competitors and their products.`, ko:`잘 알려진 경쟁사와 제품은 Claude가 이미 폭넓게 알고 있으므로 검색 없는 일반 채팅으로 묻기`},
       {t:`Turn on web search and ask one short question per competitor, using the first answer returned for each one in the briefing.`, ko:`웹 검색을 켜고 경쟁사마다 짧은 질문을 하나씩 한 뒤 처음 나온 답을 브리핑에 쓰기`},
       {t:`Ask Claude to update last quarter's briefing deck by rewording each section so that it reads as current information.`, ko:`지난 분기 브리핑 자료를 Claude가 이번 분기 정보처럼 읽히도록 문장만 바꿔 업데이트하게 하기`}
     ],
     explain:{ good:`최근 3개월 정보는 학습 기준 시점 이후일 수 있으므로 현재 소스가 필요함. 경쟁사 5곳의 여러 유형 발표를 깊이 모아 종합하는 일이므로 다단계·다출처 조사인 Research가 맞음. 영업 담당자가 고객 앞에서 쓰는 자료이므로 핵심 주장은 출처를 열어 확인한 뒤 확정함.`,
       wrongs:[`<b>B:</b> 최근 3개월 발표는 Claude의 기존 지식에 없을 수 있음. 유명한 회사라는 점은 최신성을 보장하지 않음.`,
               `<b>C:</b> 웹 검색은 가벼운 최신 확인에 맞음. 5개 회사의 여러 유형 발표를 깊이 모으기에는 부족하고, 첫 답을 검증 없이 쓰는 것도 문제임.`,
               `<b>D:</b> 지난 분기 정보를 문장만 바꾸면 내용은 그대로 낡은 상태임. 고객 미팅에서 틀린 정보가 나갈 수 있음.`]},
     principle:"원칙 ③ 요구에 맞는 선택",
     hint:`필요한 정보의 시점과 범위를 볼 것. 몇 개 회사의, 어떤 기간의 정보를, 얼마나 깊이 모아야 하는가?`}
  ]},

  /* ================= CH 3 · 4.3 솔루션 설계·개발·반복 지원 ================= */
  { id:"p4c3", ch:"CH 3", obj:"4.3", title:"솔루션 설계·개발·반복 지원", steps:[

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"반복 개선 순환과 Artifacts 시안",
     html:`<div class="callout term"><b>용어 카드</b> · <b>반복 개선 순환(iteration loop)</b>: 아이디어 → 시안 → 피드백 → 개선을 해법이 안정될 때까지 반복하는 설계 방식.</div>
      <div class="callout term"><b>용어 카드</b> · <b>시안(prototype)</b>: 설계 초기에 빠르게 만드는 작동하는 초안. 사용자가 직접 써 보고 반응할 수 있는 수준이면 충분함.</div>
      <div class="callout term"><b>용어 카드</b> · <b>Artifacts</b>: 대화 흐름과 분리되어 옆에 따로 표시되는 편집 가능한 결과물 블록. 문서뿐 아니라 내부용 대시보드 같은 작동하는 도구도 대화만으로 만들 수 있음.</div>
      <h4>설계 협업자로 쓰는 방식</h4>
      <ul>
        <li>요청 한 번에 완성품을 받는 방식은 설계 업무에 맞지 않음. 요구가 시안을 보면서 구체화되기 때문임</li>
        <li>Claude를 순환의 협업자로 씀: 첫 시안을 빨리 만들고, 써 본 사람의 피드백을 한 번에 한 가지씩 반영함</li>
        <li>코드를 직접 쓰지 않아도 됨. 화면과 기능을 말로 요청하고 결과를 보며 고침</li>
        <li>피드백은 구체적인 변경으로 바꿔 전달함. "더 보기 좋게"는 변경 지시가 되지 못함</li>
      </ul>
      <h4>예시: 캠페인 예산 현황 대시보드 3회 반복</h4>
      <div class="sample"><span class="sl">예시 · 1회차 요청 (만들기)</span>첨부한 캠페인별 예산 표로 현황 대시보드를 Artifact로 만들 것.
표시 항목: 캠페인명, 채널, 배정 예산, 집행액, 잔액.
마케팅팀 4명이 주간 회의에서 화면으로 함께 볼 용도임.</div>
      <div class="sample"><span class="sl">예시 · 2회차 요청 (필터·합계)</span>주간 회의 피드백 반영: 채널별로 걸러 볼 수 있는 필터를 추가할 것.
표 맨 아래에 배정 예산·집행액·잔액 합계 행을 추가할 것.
합계는 표에 있는 값으로 계산할 것.</div>
      <div class="sample"><span class="sl">예시 · 3회차 요청 (표시·인쇄)</span>집행률 90% 이상인 행은 붉은색 배경으로 표시할 것.
A4 가로 한 장에 인쇄되도록 글자 크기와 열 너비를 조정할 것.</div>
      <ul>
        <li>회차마다 바꾸는 범위가 하나로 정해져 있음. 무엇이 결과를 바꿨는지 추적할 수 있음</li>
        <li>합계 같은 숫자는 표 값에서 계산하게 하고 원본 표와 대조함(PART 03)</li>
      </ul>
      <h4>반응을 변경 지시로 바꾸기</h4>
      <div class="sample bad"><span class="sl">예시 · 반응을 그대로 전달</span>팀장 의견: 더 보기 좋게 바꾸면 좋겠음. 반영할 것.</div>
      <div class="sample good"><span class="sl">예시 · 변경 지시로 바꿔 전달</span>회의 피드백: 붉은 행이 너무 많아 정작 위험한 캠페인이 눈에 띄지 않음.
변경: 붉은색 배경은 집행률 90% 이상 행에만 적용하고, 80~89%는 글자색만 주황으로 바꿀 것.
나머지 배치와 필터는 그대로 둘 것.</div>
      <ul>
        <li>좋은 변경 지시는 무엇을, 어떤 기준으로 바꾸고, 무엇을 그대로 둘지를 담음</li>
        <li>"그대로 둘 것"을 적지 않으면 Claude가 잘 된 부분까지 바꿀 수 있음</li>
      </ul>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"Project 안의 반복과 개발 조직 이관 시점",
     html:`<h4>여러 날에 걸친 반복의 Project 진행</h4>
      <ul>
        <li>반복이 여러 날에 걸치면 새 대화마다 제약과 이전 결정을 다시 설명하게 됨</li>
        <li>Project 안에서 진행하면 프로젝트 지시문과 지식 베이스가 모든 대화에 이어짐. 매 회차가 이전 결정 위에 쌓임</li>
        <li>같은 Project 안의 대화끼리는 대화 내용을 공유하지 않음. 확정된 결정은 지시문이나 지식 베이스 문서에 적어 둠</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · 프로젝트 지시문에 적은 확정 결정</span>[확정 결정 · 10월 2주 기준]
- 통화 단위: 원, 천 단위 쉼표
- 채널: 검색, SNS, 영상, 제휴, 오프라인 5개로 고정
- 경고 기준: 집행률 90% 이상
- 폐기한 안: 원형 차트(회의에서 읽기 어렵다는 의견)</div>
      <h4>개발 조직에 넘길 시점</h4>
      <div class="callout term"><b>용어 카드</b> · <b>에스컬레이션 신호(escalation signal)</b>: 직접 만든 결과물이 여러 사람이 의존하는 시스템이 되는 순간. 가동 안정성·보안·다른 시스템 연동 요구가 생기면 Claude Developer·Architect에게 넘길 시점임.</div>
      <ul>
        <li>Associate의 범위: 자신과 팀의 업무 흐름을 Claude 기능(Projects, Artifacts, Skills, 커넥터(connector))으로 설계하고 개선하는 일</li>
        <li>범위 밖: API 연동, 에이전트 시스템 구축, 사내 시스템과의 자동 연결, 전사 단위 설계. 이런 일은 에스컬레이션(상위 담당자에게 넘김) 대상임</li>
        <li>신호는 사용 범위로 판단함: 여러 부서가 매일 의존함, 접근 권한 구분이 필요함, 멈추면 업무가 멈춤, 다른 시스템 데이터가 자동으로 들어와야 함</li>
        <li>넘길 때 Associate가 준비할 수 있는 것: 현재 시안, 사용 부서와 빈도, 요구사항 목록, 확정된 결정 기록</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 이관 신호 점검 질문</span>□ 만든 팀 밖의 부서가 매일 쓰는가?
□ 부서별로 볼 수 있는 범위를 나눠야 하는가?
□ 멈추면 다른 팀의 업무가 멈추는가?
□ 다른 시스템의 데이터가 자동으로 들어와야 하는가?
□ 고객 정보 같은 민감 데이터가 연결되는가?
"예"인 항목이 있으면 Developer·Architect와 이관 여부를 상의함.</div>
      <div class="sample"><span class="sl">예시 · 개발 조직 요청 메모</span>제목: 캠페인 예산 대시보드 시스템화 요청
배경: 마케팅팀이 Artifact로 만든 예산 대시보드를 현재 영업·재무팀도 매일 사용함.
요구: 회계 시스템 집행 데이터 자동 반영, 부서별 열람 권한, 장애 시 대응 담당자 지정.
현재 상태: 담당자 1명이 매주 파일을 수동으로 올림. 장애 대응 체계 없음.
첨부: 현재 화면, 사용 부서·빈도, 요구사항 표, 확정 결정 기록.</div>
      <ul>
        <li>시안과 요구사항이 정리되어 있으면 개발 담당자가 처음부터 요구를 파악하는 시간이 줄어듦</li>
        <li>반대로 4명이 쓰고 연동 요구가 없는 도구는 넘길 이유가 없음. 직접 계속 개선함</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"설계·반복 판단 기준",
     html:`__MAP:apply__
      <div class="flow">
        <span class="nd">① 아이디어<small>요구사항 표</small></span><span class="ar">→</span>
        <span class="nd">② 시안<small>Artifact 1회차</small></span><span class="ar">→</span>
        <span class="nd">③ 피드백<small>사용자 반응</small></span><span class="ar">→</span>
        <span class="nd">④ 개선<small>한 번에 한 가지</small></span><span class="ar">→</span>
        <span class="nd hot">⑤ 사용 범위 점검<small>의존하는 사람·시스템</small></span>
      </div>
      <p class="howto"><b>읽는 법</b>②~④는 해법이 안정될 때까지 반복됨. 강조된 ⑤에서 여러 부서가 의존하거나 시스템 연동이 필요해지면 개발 조직으로 넘김.</p>
      <h4>상황 → 선택 → 이유</h4>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>소규모 팀 내부용 도구, 연동 요구 없음</td><td>Artifact로 직접 만들고 대화로 개선</td><td>요청과 반복으로 충분한 범위</td></tr>
        <tr><td>반복이 여러 날에 걸침</td><td>Project에서 진행하고 확정 결정을 지시문에 기록</td><td>매번 다시 설명하지 않음</td></tr>
        <tr><td>이해관계자 피드백이 막연함("더 임원용으로")</td><td>구체적 변경(지표 3개만, 전월 대비 표시)으로 바꿔 요청</td><td>막연한 피드백은 결과를 바꾸지 못함</td></tr>
        <tr><td>시안의 숫자가 원본과 다름</td><td>원본 데이터에서 계산하게 하고 대조</td><td>디자인 반복 전에 수치를 바로잡음</td></tr>
        <tr><td>여러 부서가 매일 의존, 권한·연동·가동 요구 발생</td><td>Claude Developer·Architect에게 이관</td><td>Associate 범위 밖의 구축 작업</td></tr>
        <tr><td>작은 내부 도구를 "혹시 몰라" 개발 조직에 넘기려 함</td><td>직접 운영 유지</td><td>이관 신호(의존·연동·가동 요구)가 없음</td></tr>
      </table></div>
      <div class="callout">시험 포인트 · 설계 문항의 오답 선택지는 두 방향으로 나뉨. 작은 내부 도구를 처음부터 개발 조직에 넘기는 선택과, 여러 부서가 의존하게 된 도구를 계속 프롬프트로만 관리하는 선택임. 이관 여부는 누가 얼마나 의존하는지와 연동·보안·가동 요구로 판단함.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>모든 요구를 긴 프롬프트 하나에 담아 한 번에 완성품을 요구함</li>
        <li>회차마다 새 대화에서 처음부터 다시 설명함</li>
        <li>이해관계자의 막연한 반응을 그대로 다음 요청에 붙여넣음</li>
        <li>여러 부서가 의존하게 된 도구를 프롬프트와 대화로만 계속 관리함</li>
        <li>연동 요구를 Claude에게 코드를 받아 직접 배포하는 방식으로 해결하려 함</li>
        <li>Incognito 모드 전환이나 모델 교체를 의존도 문제의 해법으로 고름</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: When a team tool grows", ts:"4.3",
     q:`An event planner built a venue-comparison tool as an artifact for her four-person team. Over two months, the finance, sales, and executive teams started using it daily. They now ask for a live connection to the company's booking system, separate access levels by department, and someone who can fix it quickly when it breaks. What is the MOST appropriate next step?`,
     ko:`행사 기획자가 4명으로 이루어진 팀을 위해 장소 비교 도구를 Artifact로 만들었다. 두 달 사이 재무팀, 영업팀, 경영진이 이 도구를 매일 쓰기 시작했다. 이들은 이제 회사 예약 시스템과의 실시간 연결, 부서별 접근 권한, 고장 났을 때 빠르게 고칠 담당자를 요구한다. 가장 적절한 다음 단계는 무엇인가?`,
     opts:[
       {t:`Bring the tool, its current users, and the new requirements to a Claude Developer or Architect to plan a supported build.`, ko:`도구, 현재 사용자, 새 요구사항을 정리해 Claude Developer나 Architect에게 가져가 지원 체계를 갖춘 구축을 계획하기`, ok:true},
       {t:`Keep improving it through prompts in the same conversation, adding the booking-system connection and access levels step by step.`, ko:`같은 대화에서 프롬프트로 계속 개선하며 예약 시스템 연결과 접근 권한을 단계적으로 추가하기`},
       {t:`Rebuild the tool inside a new Project with more detailed instructions so that it can handle the larger number of users.`, ko:`더 자세한 지시문을 넣은 새 Project에서 도구를 다시 만들어 늘어난 사용자를 감당하게 하기`},
       {t:`Move the work into Incognito mode so that the other departments' heavy daily use does not clutter her chat history.`, ko:`다른 부서의 잦은 사용이 채팅 이력을 어지럽히지 않도록 작업을 Incognito 모드로 옮기기`}
     ],
     explain:{ good:`여러 부서가 매일 의존하고, 시스템 연동·접근 통제·장애 대응이 요구된다는 점이 이관 신호임. 이 요구는 시스템 연동과 운영 체계가 필요한 구축 작업이라 Associate 범위 밖임. Associate는 지금까지의 시안과 요구사항을 정리해 넘기는 역할을 맡음.`,
       wrongs:[`<b>B:</b> 예약 시스템 연동과 권한 관리는 대화 속 프롬프트로 해결할 수 있는 범위가 아님. 장애 대응 담당도 생기지 않음.`,
               `<b>C:</b> 지시문을 늘리면 Claude 응답의 일관성은 나아질 수 있지만 연동·권한·가동 요구는 그대로 남음.`,
               `<b>D:</b> Incognito 모드는 대화를 이력과 Memory에 남기지 않는 기능임. 도구에 대한 의존이나 연동 요구와는 관계가 없음.`]},
     principle:"원칙 ⑤ 정책·사람 판단 우선",
     hint:`도구를 만든 방식보다, 지금 누가 얼마나 이 도구에 기대고 있는지와 어떤 종류의 요구가 새로 생겼는지를 볼 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[ {t:`여러 부서가 매일 의존하고 시스템 연동·권한·장애 대응이 필요해져 Associate가 맡을 구축 범위를 벗어났기 때문`, ok:true},
              {t:`Developer 자격이 Associate보다 상위 자격이라서`},
              {t:`Artifact는 정해진 인원 이상이 쓸 수 없는 기능이라서`},
              {t:`프롬프트로 만든 도구는 처음부터 신뢰할 수 없기 때문`} ],
       explain:`판단 근거는 사용 범위와 요구의 종류임. 같은 도구라도 4명만 쓰고 연동 요구가 없었다면 직접 계속 개선하는 것이 맞음.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Iterating over several days", ts:"4.3",
     q:`A curriculum coordinator at a language school is designing a new lesson-plan template with Claude over several days. Each day she opens a new chat and re-explains, from memory, the student levels, class length, and the layouts teachers have already rejected. On some days she leaves out one or two rejected layouts, and the drafts drift back toward them. What is the MOST appropriate change?`,
     ko:`어학원의 커리큘럼 코디네이터가 며칠에 걸쳐 Claude와 새 수업 계획 양식을 설계하고 있다. 매일 새 채팅을 열고 학생 수준, 수업 시간, 강사들이 이미 거절한 레이아웃을 기억에 의존해 다시 설명한다. 어떤 날은 거절된 레이아웃 한두 개를 빠뜨리고, 그러면 초안이 그 레이아웃 쪽으로 되돌아간다. 가장 적절한 변경은 무엇인가?`,
     opts:[
       {t:`Set up a Project and record the fixed constraints and rejected layouts in its instructions so each round starts from them.`, ko:`Project를 만들고 고정 제약과 거절된 레이아웃을 지시문에 기록해 매 회차가 그 기준에서 시작하게 하기`, ok:true},
       {t:`Write one long prompt with every requirement in it and ask Claude to produce the final template in a single response today.`, ko:`모든 요구를 담은 긴 프롬프트 하나로 오늘 한 번에 최종 양식을 받기`},
       {t:`Switch to the most capable model, since a stronger model will remember the decisions made in her earlier chats better.`, ko:`더 강력한 모델이 이전 채팅의 결정을 더 잘 기억할 것이므로 최상위 모델로 바꾸기`},
       {t:`Keep using new chats, but paste a longer and more detailed explanation of the constraints at the start of each session.`, ko:`새 채팅을 계속 쓰되 매 회차 시작 시 제약을 더 길고 자세하게 붙여넣기`}
     ],
     explain:{ good:`여러 날에 걸친 반복에서 매번 같은 맥락을 다시 설명하고 있음. Project 지시문에 고정 제약과 폐기한 안을 적어 두면 모든 대화가 그 상태에서 시작해 이전 결정 위에 다음 회차가 쌓임. 대화가 바뀔 때마다 사라지던 결정이 설정으로 남음.`,
       wrongs:[`<b>B:</b> 설계는 시안을 보며 요구가 구체화되는 일이라 한 번에 완성품을 받는 방식이 맞지 않음. 오늘 정한 결정도 다음 수정 때 다시 사라짐.`,
               `<b>C:</b> 모델 등급은 다른 채팅의 결정을 이어받는 문제와 관계가 없음. 맥락이 전달되지 않는 구조가 원인임.`,
               `<b>D:</b> 매번 붙여넣는 방식은 같은 수고를 반복함. 설명이 길어질수록 빠뜨리는 항목도 생기기 쉬움.`]},
     principle:"원칙 ④ 반복 맥락의 설정화",
     hint:`매일 되풀이하는 설명이 무엇인지, 그리고 그 설명이 다음 날 대화로 이어질 장소가 있는지를 볼 것.`}
  ]},

  /* ================= CH 4 · 4.4 기존 업무 흐름에 통합·재설계 ================= */
  { id:"p4c4", ch:"CH 4", obj:"4.4", title:"기존 업무 흐름 통합·재설계", steps:[

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"위임 매핑과 세 가지 판단 기준",
     html:`<div class="callout term"><b>용어 카드</b> · <b>위임 판단</b>: 업무의 각 단계를 Claude에 맡길지, 사람이 맡을지, 함께 할지 정하는 역량. AI Fluency 4역량 중 하나이며 이 파트의 기준 역량임.</div>
      <div class="callout term"><b>용어 카드</b> · <b>위임 매핑(delegation mapping)</b>: 업무 흐름을 단계로 나눈 뒤 단계마다 판단 기준을 적용해 담당을 정하는 방법. 결과물은 단계별 담당이 적힌 표 한 장임.</div>
      <h4>같은 도구, 다른 결과</h4>
      <ul>
        <li>공식 강좌는 같은 계약 검토 업무에 Claude를 도입한 두 팀을 비교함</li>
        <li>A팀: 수정안 초안은 Claude가 쓰고 최종 결정은 변호사가 함. 검토 시간이 절반으로 줄고 품질도 유지됨</li>
        <li>B팀: 저위험 조항의 승인까지 감독 없이 Claude에 맡김. 아무도 확인하지 않은 의무 조항이 계약에 들어갔고 팀은 도구 사용을 중단함</li>
        <li>두 팀의 차이는 도구 성능에서 생기지 않음. 어떤 단계를 맡겼는지에서 생김</li>
      </ul>
      <h4>세 가지 분류</h4>
      <div class="tbl"><table>
        <tr><th>분류</th><th>뜻</th><th>예</th></tr>
        <tr><td>AI 위임(AI-appropriate)</td><td>Claude가 수행하고 사람은 일반 확인만 함</td><td>조항 추출, 정책 규칙 대조, 파일에서 항목 뽑기</td></tr>
        <tr><td>협업(Collaborative)</td><td>Claude가 초안을 만들고 사람이 각 판단을 내림</td><td>계약 수정안 초안, 환영 메시지 개인화</td></tr>
        <tr><td>사람 유지(Human-retained)</td><td>사람이 수행하거나 결정함</td><td>변경 승인·거절, 서명·발송, 금액 확정 확인</td></tr>
      </table></div>
      <h4>판단 기준 세 가지</h4>
      <div class="tbl"><table>
        <tr><th>기준</th><th>묻는 질문</th><th>사람 쪽으로 기우는 경우</th></tr>
        <tr><td>되돌릴 수 있음(Reversibility)</td><td>틀렸을 때 피해 전에 잡고 되돌릴 수 있는가?</td><td>발송, 서명, 제출, 외부 공개</td></tr>
        <tr><td>오류 비용(Stakes)</td><td>틀리면 비용이 얼마나 큰가?</td><td>금액, 법적 의무, 고객 관계</td></tr>
        <tr><td>책임 소재(Accountability)</td><td>결과에 누가 답하는가?</td><td>담당자 명의의 결정과 승인</td></tr>
      </table></div>
      <ul>
        <li>초안 작성은 맡길 수 있음. 책임은 맡길 수 없음. 결과에 답하는 사람은 그대로임</li>
        <li>세 기준은 단계마다 따로 적용함. 업무 전체에 한 번만 적용하지 않음</li>
      </ul>
      <h4>예시: 신규 입사자 온보딩 서류 업무의 위임 매핑</h4>
      <div class="tbl"><table>
        <tr><th>단계</th><th>되돌림</th><th>오류 비용</th><th>책임</th><th>분류 · 기능</th></tr>
        <tr><td>HR 시스템 내보내기 파일에서 입사자 정보 추출</td><td>가능</td><td>낮음</td><td>HR 담당 확인</td><td>AI 위임 · Code Execution</td></tr>
        <tr><td>필수 서류 누락 대조(체크리스트 규칙)</td><td>가능</td><td>낮음</td><td>HR 담당 확인</td><td>AI 위임 · Skill</td></tr>
        <tr><td>환영 메시지 작성</td><td>가능</td><td>중간(첫인상)</td><td>팀장</td><td>협업 · 초안은 Claude, 개인화 판단은 팀장</td></tr>
        <tr><td>보상 금액이 승인안과 일치하는지 확인</td><td>어려움</td><td>높음</td><td>HR 책임자</td><td>사람 유지</td></tr>
        <tr><td>서명된 처우 제안서 발송</td><td>불가</td><td>높음(법적 효력)</td><td>HR 책임자</td><td>사람 유지</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>행 = 업무 단계 하나. 가운데 세 열에 기준을 적용한 결과가 오른쪽 분류를 정함. 아래 행으로 갈수록 되돌리기 어렵고 책임이 무거워짐.</p>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"매핑 후 재설계: 기능 배치와 검토 관문",
     html:`<ul>
        <li>매핑이 끝나면 단계마다 맞는 기능을 넣어 업무 흐름을 다시 설계함</li>
        <li>반복 절차나 정책 규칙 대조 → Skill. 매번 정확한 문구를 기억해 프롬프트를 쓰는 방식보다 결과가 일관됨</li>
        <li>정확해야 하는 수치 단계 → Code Execution. 추정 대신 계산 결과를 씀</li>
        <li>매번 쓰는 참고 자료와 행동 규칙 → Project의 지식 베이스와 지시문</li>
        <li>사람 유지 단계 → 검토 관문으로 설계함. 나중에 덧붙이는 확인으로 두지 않음</li>
      </ul>
      <div class="callout term"><b>용어 카드</b> · <b>검토 관문(review gate)</b>: 사람 유지 단계를 업무 흐름 안의 명시적 확인 지점으로 만든 것. 누가(책임 있는 역할), 무엇을(확인할 위험), 언제(다음 단계 전) 확인하는지가 정해져 있음.</div>
      <ul>
        <li>"사람 검토(human review) 있음"이라고만 적은 단계는 관문이 아님. 담당자와 확인 항목이 빠지면 바쁜 날 가장 먼저 생략됨</li>
        <li>관문을 정하는 방식은 PART 06(거버넌스)의 정의된 관문과 같은 형식임</li>
      </ul>
      <h4>예시: 출장 경비 정산 업무 재설계</h4>
      <div class="sample bad"><span class="sl">예시 · 현재 흐름</span>① 담당자가 영수증을 보며 항목·금액을 엑셀에 입력
② 출장 규정 문서를 열어 항목마다 대조
③ 엑셀로 합계와 한도 초과액 계산
④ 초과 항목 사유 메모 작성
⑤ 팀장 승인
⑥ 재무팀 제출
→ 모든 단계를 사람이 수작업으로 처리함</div>
      <div class="sample good"><span class="sl">예시 · 재설계 흐름</span>① 영수증 항목·금액 추출 → AI 위임 · Code Execution(파일 처리)
② 출장 규정 대조 → AI 위임 · 규정 대조 Skill
③ 합계·한도 초과액 계산 → AI 위임 · Code Execution
④ 초과 항목 설명 초안 → 협업 · Claude 초안, 담당자가 영수증과 대조 후 수정
⑤ 승인·반려 → 사람 유지 · 검토 관문(팀장 / 초과 항목과 금액 / 제출 전)
⑥ 재무팀 제출 → 사람 유지 · 담당자 명의로 실행, 제출 후 되돌리기 번거로움</div>
      <ul>
        <li>①~③은 기계적이고 되돌릴 수 있는 단계라 맡김. 숫자가 나오는 ①·③에는 계산 기능을 붙임</li>
        <li>④는 초안 성격이라 협업. 담당자의 대조가 빠지면 이 단계는 사실상 자동화 단계가 됨</li>
        <li>⑤·⑥은 책임이 걸린 결정과 실행이라 사람이 맡음</li>
        <li>업무 내용이 달라도(계약 검토, 온보딩, 경비 정산) 같은 기준을 쓰면 같은 패턴이 나옴: 기계적·초안 단계는 맡기고, 수치 확정과 되돌릴 수 없는 행동은 사람이 맡음</li>
        <li>사내 시스템끼리 데이터를 자동으로 주고받게 하는 연동이 필요해지면 그 부분은 Developer·Architect에게 넘김</li>
      </ul>
      <h4>자기 업무에 적용하는 양식</h4>
      <div class="sample"><span class="sl">예시 · 위임 매핑 작성 양식</span>업무: (예: 월간 고객 뉴스레터 발행)
단계 | 되돌릴 수 있는가 | 틀리면 비용 | 결과에 답하는 사람 | 분류 | 기능 | 관문(누가 / 무엇을 / 언제)
1.
2.
3.
작성 순서: 단계를 먼저 모두 적고, 기능 열은 마지막에 채움.
관문 열이 비어 있는 사람 유지·협업 단계는 아직 설계가 끝나지 않은 것임.</div>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"위임 설계 판단 기준",
     html:`__MAP:apply__
      <div class="flow">
        <span class="nd">① 업무 단계 나열<small>기능이 아닌 일 기준</small></span><span class="ar">→</span>
        <span class="nd">② 3기준 적용<small>되돌림·오류 비용·책임</small></span><span class="ar">→</span>
        <span class="nd">③ 분류<small>AI·협업·사람</small></span><span class="ar">→</span>
        <span class="nd">④ 기능 배치<small>Skill·Code Execution·Project</small></span><span class="ar">→</span>
        <span class="nd hot">⑤ 검토 관문 지정<small>누가·무엇을·언제</small></span>
      </div>
      <p class="howto"><b>읽는 법</b>화살표 = 설계 순서. ①에서 기능을 먼저 떠올리지 않음. 일을 먼저 나누고 ④에서 기능을 맞춤. 강조된 ⑤가 빠지면 협업 단계가 자동화 단계로 바뀜.</p>
      <h4>단계 성격 → 분류 → 근거</h4>
      <div class="tbl"><table>
        <tr><th>단계 성격</th><th>분류</th><th>근거</th></tr>
        <tr><td>되돌릴 수 있고 기계적(추출, 규칙 대조, 분류)</td><td>AI 위임 + Skill</td><td>오류 비용이 낮고 절차를 Skill에 담을 수 있음</td></tr>
        <tr><td>정확해야 하는 수치(금액 산출, 재무 노출액 계산)</td><td>AI 위임 + Code Execution</td><td>추정 대신 계산</td></tr>
        <tr><td>초안을 만들고 사람이 판단(수정안, 개인화 메시지)</td><td>협업</td><td>작성은 Claude, 판단은 사람</td></tr>
        <tr><td>결과에 책임이 걸린 확인(승인·거절, 금액 확정)</td><td>사람 유지</td><td>책임은 위임되지 않음</td></tr>
        <tr><td>되돌릴 수 없고 외부·법적 효력이 있음(서명, 발송)</td><td>사람 유지</td><td>실행 후 수정 불가</td></tr>
        <tr><td>앞 단계에서 Claude 성과가 좋았음</td><td>다음 단계를 따로 판단</td><td>앞 단계의 정확도가 다음 단계의 위험을 낮추지 않음</td></tr>
      </table></div>
      <div class="callout">시험 포인트 · 위임 문항은 단계별로 따로 판단하는지를 봄. 승인, 서명, 발송, 금액 확정은 앞 단계 성과와 관계없이 사람이 맡음. 반대로 위험이 낮은 기계적 단계까지 모두 사람이 계속 처리하는 선택지도 정답이 되지 않음.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li><b>과잉 위임(over-delegation)</b>: 위험 수준이 허용하는 것보다 많이 맡김. 초안 품질이 좋다는 이유로 결정권까지 넘김</li>
        <li><b>후광 위임(halo delegation)</b>: 앞 단계가 잘 됐다는 이유로 다음 단계도 따로 판단하지 않고 넘김</li>
        <li><b>형식만 남은 협업</b>: "Claude 초안 + 사람 검토"라고 적었지만 실제 검토자가 배치되지 않음. 이 단계는 사실상 자동화 단계임</li>
        <li><b>도구 중심 매핑</b>: 만들어 둔 Skill이나 선호하는 기능을 중심으로 맵을 그림. 일을 먼저 나눠야 함</li>
        <li>반대 방향 오류: 위험이 낮은 기계적 단계까지 사람이 수작업으로 계속 처리해 도입 효과가 없음</li>
        <li>Claude의 자기 점검이나 "확신 없으면 보류" 지시를 사람 관문 대신 둠</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Extending what Claude does", ts:"4.4",
     q:`A procurement team at a manufacturing company uses Claude to draft redline suggestions for supplier contract renewals, and a buyer reviews each draft. After three months of accurate drafts, the team lead proposes letting Claude also approve renewals under a set value and send them for e-signature automatically. What is the MOST appropriate response?`,
     ko:`제조 회사 구매팀이 공급업체 계약 갱신의 수정안 초안을 Claude로 작성하고, 구매 담당자가 초안마다 검토한다. 3개월 동안 초안이 정확하자 팀장이 일정 금액 이하의 갱신은 Claude가 승인하고 전자서명 요청까지 자동으로 보내게 하자고 제안한다. 가장 적절한 대응은 무엇인가?`,
     opts:[
       {t:`Keep approval and signature with a named buyer, and continue using Claude to draft redlines for that buyer to review.`, ko:`승인과 서명은 지정된 구매 담당자가 맡고, Claude는 그 담당자가 검토할 수정안 초안 작성을 계속 맡기`, ok:true},
       {t:`Allow it for low-value renewals only, since three months of accurate drafts show that the risk at that level is low.`, ko:`3개월간의 정확한 초안이 그 금액대의 위험이 낮다는 것을 보여주므로 소액 갱신에 한해 허용하기`},
       {t:`Allow it, but instruct Claude to hold back any renewal it feels unsure about so that a buyer can look at those cases.`, ko:`허용하되 확신이 없는 갱신은 Claude가 보류해 담당자가 보도록 지시하기`},
       {t:`Stop using Claude for renewals altogether, because any automation in the contract process creates unacceptable legal risk for the team.`, ko:`계약 절차의 모든 자동화는 감당할 수 없는 법적 위험을 만들므로 갱신 업무에서 Claude 사용을 전면 중단하기`}
     ],
     explain:{ good:`승인과 전자서명은 되돌리기 어렵고 법적 효력이 있으며, 결과에 답하는 사람이 구매 담당자인 단계임. 초안 작성이 잘 된다는 사실은 다음 단계의 위험을 낮추지 않음. 초안은 계속 맡기고 결정과 서명은 지정된 사람이 맡는 구성이 효과와 통제를 함께 유지함.`,
       wrongs:[`<b>B:</b> 앞 단계의 성과를 근거로 다음 단계까지 넘기는 후광 위임임. 소액이어도 서명된 계약의 의무는 되돌리기 어려움.`,
               `<b>C:</b> Claude의 확신 여부는 통제 수단이 아님. 확신 있게 틀린 갱신은 검토 없이 서명까지 나감.`,
               `<b>D:</b> 초안 단계는 위험이 낮고 효과가 확인된 단계임. 단계를 나눠 판단하지 않고 전체를 버린 과잉 대응임.`]},
     principle:"원칙 ⑤ 정책·사람 판단 우선",
     hint:`초안 작성과 승인·서명은 같은 단계인가? 새로 맡기려는 단계가 틀렸을 때 되돌릴 수 있는지와, 결과에 누가 답하는지를 볼 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[ {t:`승인과 서명은 되돌리기 어렵고 법적 효력이 있으며 책임이 사람에게 남는 단계이기 때문`, ok:true},
              {t:`공식 강좌의 계약 사례에 그렇게 나와 있기 때문`},
              {t:`3개월은 Claude의 정확도를 판단하기에 짧은 기간이기 때문`},
              {t:`Claude는 전자서명 도구와 연결할 수 없기 때문`} ],
       explain:`기간이 1년으로 늘어도 판단은 같음. 초안의 정확도와 관계없이 승인·서명 단계의 성격(되돌림, 오류 비용, 책임)이 사람 유지를 결정함.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: A review step that stopped working", ts:"4.4",
     q:`A customer support lead redesigned the refund-reply process: Claude drafts each reply, and an agent reviews it before sending. Two months later, she finds that agents approve drafts in bulk at the end of each shift without opening the account records. One customer received a reply with the wrong refund amount. What should she do FIRST?`,
     ko:`고객지원 리드가 환불 답변 절차를 재설계했다. Claude가 답변 초안을 쓰고 상담원이 발송 전에 검토하는 방식이다. 두 달 뒤, 상담원들이 근무 종료 무렵 계정 기록을 열어 보지 않고 초안을 한꺼번에 승인하고 있음을 발견했다. 한 고객은 환불 금액이 틀린 답변을 받았다. 가장 먼저 해야 할 일은 무엇인가?`,
     opts:[
       {t:`Redefine the review step so the assigned agent checks each reply's refund amount against the account record before sending.`, ko:`담당 상담원이 발송 전에 답변의 환불 금액을 계정 기록과 대조하도록 검토 단계를 다시 정의하기`, ok:true},
       {t:`Switch the drafting step to the most capable model available so that the drafts stop containing amount errors in the first place.`, ko:`초안에 금액 오류가 처음부터 생기지 않도록 초안 작성 단계를 가장 강력한 모델로 바꾸기`},
       {t:`Add a line to the instructions telling Claude to double-check every refund amount carefully before it writes the draft reply.`, ko:`초안을 쓰기 전에 모든 환불 금액을 꼼꼼히 다시 확인하라는 문장을 Claude 지시문에 추가하기`},
       {t:`Remove the review step, since agents are not really doing it anyway, and let Claude send the replies directly to save time.`, ko:`상담원이 실제로 검토하지 않으므로 검토 단계를 없애고 시간 절약을 위해 Claude가 바로 발송하게 하기`}
     ],
     explain:{ good:`설계상으로는 협업 단계였지만 검토자가 실제로 확인하지 않아 사실상 자동화 단계로 바뀌었음. 검토 관문을 누가(담당 상담원), 무엇을(금액과 계정 기록 일치), 언제(발송 전) 확인하는지로 다시 정의해야 함. 환불 금액은 회사가 고객의 돈에 대해 하는 약속이므로 사람 확인이 빠질 수 없는 단계임.`,
       wrongs:[`<b>B:</b> 상위 모델도 금액을 틀릴 수 있음. 원인은 확인 단계가 작동하지 않는 데 있음.`,
               `<b>C:</b> Claude에게 스스로 확인하라고 하는 지시는 계정 기록과의 대조를 대신하지 못함.`,
               `<b>D:</b> 형식만 남은 검토를 공식화하는 선택임. 고위험 단계에서 사람 확인을 없애면 같은 오류가 그대로 고객에게 나감.`]},
     principle:"원칙 ⑤ 정책·사람 판단 우선",
     hint:`오류가 생긴 곳은 초안 작성인가, 초안이 고객에게 나간 경로인가? 설계에 적힌 검토와 실제로 일어난 검토를 비교할 것.`}
  ]},

  /* ================= CH 5 · 4.5 이해관계자에게 가치·한계 설명 ================= */
  { id:"p4c5", ch:"CH 5", obj:"4.5", title:"이해관계자 대상 가치·한계 설명", steps:[

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"정확한 주장과 과장 표현",
     html:`<div class="callout term"><b>용어 카드</b> · <b>이해관계자</b>: 업무 흐름 변경에 영향을 받거나 승인·예산·도입 여부를 정하는 사람. 임원, 실무 책임자, 리스크·보안 담당, 현장 사용자가 해당함.</div>
      <div class="callout term"><b>용어 카드</b> · <b>과장 표현(overclaiming)</b>: 사람 확인 단계를 문장에서 지우거나 측정 근거 없이 능력을 부풀리는 설명. "완전 자동화", "Claude가 처리함", "사람만큼 잘함"이 대표적임.</div>
      <h4>정확한 주장과 신뢰</h4>
      <ul>
        <li>한계를 가치만큼 분명하게 말함</li>
        <li>과장한 설명은 첫 번째로 눈에 띈 실수에서 신뢰를 잃음. 그 뒤에는 정확한 설명도 의심받음</li>
        <li>공식 강좌는 이 기술을 요청 전달 역량(Description, PART 02)을 바깥의 이해관계자에게 향하게 한 것으로 설명함</li>
        <li>설명에 들어갈 네 가지: 도구가 실제로 하는 일, 사람이 확인하는 지점, 알려진 한계, 측정된 성과</li>
      </ul>
      <h4>과장 표현과 고쳐 쓴 표현</h4>
      <div class="tbl"><table>
        <tr><th>과장 표현</th><th>문제</th><th>고쳐 쓴 표현</th></tr>
        <tr><td>"계약 검토가 완전 자동화됨"</td><td>사람 확인 단계가 사라진 것처럼 읽힘</td><td>"Claude가 조항 추출과 수정안 초안을 맡고, 변경 승인은 법무 담당자가 함"</td></tr>
        <tr><td>"Claude가 고객 문의를 처리함"</td><td>누가 발송을 결정하는지 문장에서 빠짐</td><td>"Claude가 답변 초안을 쓰고 상담원이 확인 후 발송함"</td></tr>
        <tr><td>"사람만큼 잘함"</td><td>측정 근거 없이 판단을 대신한다는 인상을 줌</td><td>"시범 운영 기간 초안의 수정 비율은 측정치 기준 ○%였음"</td></tr>
      </table></div>
      <div class="sample bad"><span class="sl">예시 · 과장된 사내 공지</span>법무팀 계약 검토에 Claude를 도입해 검토가 완전 자동화되었음. 앞으로 일반 계약은 법무팀 확인 없이 진행 가능함.</div>
      <div class="sample good"><span class="sl">예시 · 고쳐 쓴 사내 공지</span>법무팀 계약 검토 절차에 Claude를 도입함.
- Claude가 하는 일: 조항 추출, 표준 조건과의 차이 표시, 수정안 초안 작성
- 사람이 하는 일: 모든 변경의 승인·거절과 서명은 법무 담당자가 함
- 알려진 한계: 환각(hallucination)으로 원문에 없는 조항 번호를 인용할 수 있음. 인용 조항은 원문과 대조 후 사용함
- 성과: 4주 시범 운영의 건당 검토 시간 측정 결과를 첨부함(측정 방법 포함)</div>
      <ul>
        <li>성과 수치는 시범 운영에서 실제로 잰 값을 씀</li>
        <li>Claude에게 절감률을 추정하게 한 숫자는 성과 근거가 아님. 보고 전에 측정 기록과 계산으로 확인함(PART 03)</li>
      </ul>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"청중별 설명 구성",
     html:`<ul>
        <li>같은 업무 흐름과 같은 사람 확인 단계를 설명하더라도 청중마다 강조점이 다름</li>
        <li>바뀌는 것은 강조와 세부 수준임. 사람 확인 단계와 한계는 어느 청중에게도 빠지지 않음</li>
        <li>모든 청중에게 기대치를 실제 능력 범위에 맞춰 설명함. 나중에 놀랄 일을 없애는 것이 목적임</li>
      </ul>
      <div class="tbl"><table>
        <tr><th>청중</th><th>관심사</th><th>설명의 중심</th></tr>
        <tr><td>AI 이해도가 높은 실무 책임자(예: 법무 리드)</td><td>어떻게 작동하고 어디서 틀리는가</td><td>기능 세부, 알려진 실패 유형, 사람이 맡은 확인 단계</td></tr>
        <tr><td>결과 중심 임원</td><td>무엇이 얼마나 좋아지는가</td><td>측정된 성과 수치, 그대로 유지되는 승인 기준</td></tr>
        <tr><td>리스크·보증 담당</td><td>무엇이 통제되는가</td><td>사람이 모든 조건을 검토·승인하는 통제 구조, 데이터 처리 방식</td></tr>
        <tr><td>현장 사용자</td><td>업무가 어떻게 바뀌는가</td><td>맡기는 단계, 직접 확인할 항목, 자주 보이는 오류 유형</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>행 = 청중 한 유형. 앞의 세 유형은 공식 강좌가 제시한 구분이고, 현장 사용자는 같은 원칙을 실제 사용자에게 적용한 것임.</p>
      <div class="sample good"><span class="sl">예시 · 임원 보고 메모 (같은 계약 검토 흐름)</span>보고: 계약 검토 Claude 도입 시범 결과
- 성과: 4주간 계약 32건 처리, 건당 검토 시간 측정치 첨부
- 유지되는 기준: 모든 변경 승인과 서명은 법무 담당자가 함. 승인 기준 변경 없음
- 한계: 인용 조항 번호 오류 가능성이 있어 원문 대조 단계를 둠
- 요청 사항: 영업 계약까지 확대할지 결정</div>
      <div class="sample good"><span class="sl">예시 · 리스크 담당 설명 메모 (같은 흐름)</span>통제 구조
- Claude는 초안과 차이 표시만 작성함. 승인·서명 권한 없음
- 법무 담당자가 모든 조건을 원문과 대조해 승인함. 승인 기록은 계약 관리 대장에 남김
- 개인정보(PII)가 포함된 부속 문서는 사내 정책에 따라 비식별화 후 사용함
- 이상 사례가 생기면 법무 리드에게 보고함</div>
      <ul>
        <li>앞의 사내 공지와 두 메모 모두 사람 확인 단계가 들어 있음. 청중에 따라 성과·통제·세부의 비중만 달라짐</li>
        <li>"Claude에게 데이터를 보관하지 말라고 지시함"은 통제 장치로 설명하지 않음. 통제는 정책 확인, 비식별화, 사람 승인 같은 실제 절차임(PART 06)</li>
      </ul>
      <h4>회의적인 질문에 답하는 방식</h4>
      <div class="sample good"><span class="sl">예시 · 현장 사용자의 질문에 대한 답변</span>질문: "Claude가 보고서 수치를 지어내지 않는가?"
답변 요지
- 지어낼 수 있음. 출처 없는 통계, 인용, 조항 번호 같은 구체 정보에서 생기기 쉬움
- 그래서 모든 수치는 공유 전에 분석가가 원자료와 대조함
- 대조에서 발견된 오류는 기록해 지시문과 절차 개선에 씀</div>
      <ul>
        <li>한계를 먼저 인정하고, 그 한계를 잡는 단계와 담당자를 바로 이어서 말함</li>
        <li>"거의 틀리지 않음", "최신 모델은 괜찮음" 같은 답은 확인 단계를 약하게 만들고, 첫 오류가 나오면 신뢰를 잃음</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"이해관계자 설명 판단 기준",
     html:`__MAP:apply__
      <div class="flow">
        <span class="nd">① 청중 파악<small>관심사·결정 권한</small></span><span class="ar">→</span>
        <span class="nd">② 도구가 하는 일<small>구체적 동사로</small></span><span class="ar">→</span>
        <span class="nd hot">③ 사람 확인 지점<small>누가·언제 확인</small></span><span class="ar">→</span>
        <span class="nd hot">④ 알려진 한계<small>실패 유형·대응</small></span><span class="ar">→</span>
        <span class="nd">⑤ 측정된 성과<small>시범 운영 실측</small></span>
      </div>
      <p class="howto"><b>읽는 법</b>화살표 = 설명을 구성하는 순서. 청중에 따라 ②·⑤의 비중이 바뀜. 강조된 ③·④는 어느 청중에게도 생략하지 않음.</p>
      <h4>상황 → 선택 → 이유</h4>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>임원이 확대 도입을 결정해야 함</td><td>측정된 성과 + 유지되는 승인 기준</td><td>결과 중심 청중에게 결정에 필요한 정보</td></tr>
        <tr><td>리스크 담당이 통제 방식을 물음</td><td>단계별 사람 검토·승인, 데이터 처리 방식</td><td>통제 중심 청중</td></tr>
        <tr><td>실무 책임자가 작동 방식을 물음</td><td>기능 세부, 알려진 실패 유형, 확인 단계</td><td>AI 이해도가 높은 청중</td></tr>
        <tr><td>회의적인 동료가 "내용을 지어내지 않느냐"고 물음</td><td>오류 가능성을 인정하고 잡아내는 확인 단계를 설명</td><td>한계를 인정해야 신뢰가 생김</td></tr>
        <tr><td>성과 수치가 필요함</td><td>시범 운영 실측치와 계산 근거</td><td>Claude의 추정치는 성과 근거가 아님</td></tr>
        <tr><td>공지 문안에 "완전 자동화"가 들어감</td><td>도구가 하는 일과 사람 확인 지점으로 고쳐 씀</td><td>과장은 첫 실수에서 신뢰를 잃게 함</td></tr>
      </table></div>
      <div class="callout">시험 포인트 · 설명 문항의 정답은 가치, 한계, 사람 확인 지점을 함께 담음. 한계를 숨기는 설명과, 한계만 강조해 가치를 전하지 못하는 설명은 모두 오답 선택지로 쓰임.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>"완전 자동화", "Claude가 처리함", "사람만큼 잘함" 같은 표현 사용</li>
        <li>신뢰를 잃을 것을 걱정해 알려진 한계를 빼고 설명함</li>
        <li>반대로 위험만 강조해 도입 효과를 설명하지 못함</li>
        <li>모든 청중에게 같은 기술 세부를 그대로 전달함</li>
        <li>잘 나온 사례 몇 건을 정확도 근거로 제시함</li>
        <li>Claude가 추정한 절감률을 측정 없이 성과로 보고함</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Briefing the decision-maker", ts:"4.5",
     q:`A marketing operations manager ran a four-week pilot in which Claude drafts press releases and a brand manager approves every claim before distribution. She will now brief the CMO, who decides whether to roll the workflow out to all brand teams. Which framing is MOST appropriate?`,
     ko:`마케팅 운영 매니저가 4주 동안 시범 운영을 했다. Claude가 보도자료 초안을 쓰고 브랜드 매니저가 배포 전에 모든 주장을 승인하는 방식이다. 이제 이 흐름을 전 브랜드 팀으로 확대할지 결정하는 CMO에게 보고한다. 가장 적절한 설명 방식은 무엇인가?`,
     opts:[
       {t:`Share the measured time savings from the pilot and state that a brand manager still approves every release before it goes out.`, ko:`시범 운영에서 측정한 시간 절감을 공유하고, 모든 보도자료는 여전히 배포 전에 브랜드 매니저가 승인한다고 밝히기`, ok:true},
       {t:`Describe the process as fully automated from end to end, since the pilot drafts needed only a few small edits overall.`, ko:`시범 초안에 작은 수정만 몇 번 필요했으므로 처음부터 끝까지 완전 자동화된 절차라고 설명하기`},
       {t:`Walk through every prompt, Skill setting, and instruction in detail so the CMO fully understands how the workflow runs internally.`, ko:`CMO가 내부 작동을 완전히 이해하도록 모든 프롬프트, Skill 설정, 지시문을 자세히 설명하기`},
       {t:`Emphasize that Claude now writes as well as the senior copywriters, using the two strongest pilot drafts as the main evidence.`, ko:`가장 잘 나온 시범 초안 두 건을 주요 근거로 Claude가 이제 시니어 카피라이터만큼 쓴다고 강조하기`}
     ],
     explain:{ good:`CMO는 확대 여부를 정하는 결과 중심 청중임. 실제로 잰 성과와 함께 그대로 유지되는 승인 단계를 밝혀야 기대치가 실제 운영 방식과 맞음. 승인 단계를 말하지 않으면 확대 후 첫 오류에서 신뢰가 무너짐.`,
       wrongs:[`<b>B:</b> 사람 승인 단계가 문장에서 사라진 과장 표현임. 실제 흐름과 다른 기대를 만듦.`,
               `<b>C:</b> 설정 세부는 AI 이해도가 높은 실무 책임자에게 맞는 내용임. 결정권자에게 필요한 성과와 통제 정보가 묻힘.`,
               `<b>D:</b> 잘 나온 사례 두 건은 측정 근거가 아님. "사람만큼 잘한다"는 주장은 첫 실수에서 신뢰를 잃게 함.`]},
     principle:"원칙 ② 내보내기 전 검증",
     hint:`이 청중이 결정해야 하는 것은 무엇인가? 그 결정에 필요한 정보와, 어떤 청중에게도 빠지면 안 되는 정보를 나눠 볼 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[ {t:`결정권자인 임원에게는 측정된 성과와 유지되는 승인 기준을 함께 알려야 기대치가 실제 능력과 맞기 때문`, ok:true},
              {t:`보고서 양식에 그렇게 정해져 있어서`},
              {t:`임원은 기술 세부를 많이 볼수록 도입을 더 신뢰하기 때문`},
              {t:`시범 결과가 좋으면 한계는 따로 밝히지 않아도 되기 때문`} ],
       explain:`청중이 임원이라 성과 수치가 중심이 되지만, 승인 단계는 청중과 관계없이 빠지지 않음. 두 정보를 함께 담은 설명이 기대치를 실제 운영에 맞춤.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Rewriting an announcement", ts:"4.5",
     q:`A nonprofit communications lead is drafting an internal announcement about a new workflow. Her draft says: "Claude now handles our grant reports, so program staff no longer need to review them." In the actual workflow, Claude drafts each report from program data and program staff verify the figures before submission. Which revision is MOST appropriate?`,
     ko:`비영리단체 커뮤니케이션 리드가 새 업무 흐름에 대한 사내 공지를 쓰고 있다. 초안 문장은 "Claude가 이제 보조금 보고서를 처리하므로 사업 담당자는 더 이상 검토할 필요가 없다"이다. 실제 흐름에서는 Claude가 사업 데이터로 보고서 초안을 쓰고 사업 담당자가 제출 전에 수치를 확인한다. 가장 적절한 수정 문장은 무엇인가?`,
     opts:[
       {t:`"Claude drafts each grant report from program data; program staff verify the figures and approve it before submission."`, ko:`"Claude가 사업 데이터로 보조금 보고서 초안을 쓰고, 사업 담당자가 제출 전에 수치를 확인해 승인함"`, ok:true},
       {t:`"Claude handles grant reports with accuracy close to our staff, so reviews are now optional for routine reports."`, ko:`"Claude가 직원에 가까운 정확도로 보조금 보고서를 처리하므로 정기 보고서의 검토는 선택 사항임"`},
       {t:`"Claude can make mistakes, so for now the team will keep writing every grant report by hand without using it."`, ko:`"Claude는 실수할 수 있으므로 당분간 모든 보조금 보고서를 Claude 없이 직접 작성함"`},
       {t:`"Claude handles grant reports, and program staff can review a report whenever they have time before the deadline."`, ko:`"Claude가 보조금 보고서를 처리하며, 사업 담당자는 마감 전에 시간이 날 때 검토할 수 있음"`}
     ],
     explain:{ good:`실제 흐름을 그대로 적은 문장이 정답임. 도구가 하는 일(초안 작성)과 사람이 하는 일(수치 확인·승인)이 모두 문장 안에 있음. "처리한다"는 표현은 사람 확인 단계를 문장에서 지워 실제와 다른 기대를 만듦.`,
       wrongs:[`<b>B:</b> 측정 근거 없는 정확도 주장이고 검토를 선택 사항으로 만듦. 실제 흐름과도 다름.`,
               `<b>C:</b> 한계만 강조해 실제로 운영 중인 흐름의 가치를 지움. 사실과도 다른 공지임.`,
               `<b>D:</b> "처리한다"는 과장이 그대로 남아 있음. 검토를 시간이 날 때 하는 일로 바꿔 확인 단계를 약하게 만듦.`]},
     principle:"원칙 ⑤ 정책·사람 판단 우선",
     hint:`실제 흐름에서 Claude가 하는 일과 사람이 하는 일을 각각 적어 볼 것. 어느 문장이 둘을 모두 정확하게 담는가?`}
  ]},

  /* ================= D4 미니테스트 ================= */
  { id:"p4test", type:"test", title:"D4 미니테스트 · 10문항", questions:[

    { ts:"4.1", lvl:"기초",
      q:`An account manager at a PR agency responds to two or three public-sector RFPs every month. Each time, she opens a new chat, pastes the same requirement-table format, and uploads the same three past winning proposals for reference. Which setup BEST fits this work?`,
      ko:`PR 대행사의 어카운트 매니저가 매달 공공기관 RFP 2~3건에 대응한다. 매번 새 채팅을 열어 같은 요구사항 표 형식을 붙여넣고, 참고용으로 같은 과거 수주 제안서 3건을 올린다. 이 업무에 가장 맞는 구성은 무엇인가?`,
      opts:[
        {t:`Create a Project with the past proposals in its knowledge base and the table format in its instructions.`, ko:`과거 제안서는 지식 베이스에, 표 형식은 지시문에 둔 Project 만들기`, ok:true},
        {t:`Save the table format to Memory and keep uploading the three past proposals at the start of each new chat.`, ko:`표 형식은 Memory에 저장하고 과거 제안서 3건은 새 채팅마다 계속 올리기`},
        {t:`Ask a developer to build an automated pipeline that pulls each new RFP and fills in the table without her.`, ko:`새 RFP를 가져와 표를 자동으로 채우는 파이프라인을 개발자에게 구축 요청하기`},
        {t:`Run a Research task for every new RFP so that Claude can find similar winning proposals from other agencies online.`, ko:`새 RFP마다 Research를 실행해 다른 대행사의 수주 제안서를 온라인에서 찾게 하기`}
      ],
      explain:{ good:`반복되는 업무, 매번 같은 참고 자료, 일정한 출력 형식이라는 세 조건이 모두 맞음. 참고 자료는 지식 베이스에, 형식 규칙은 지시문에 두면 모든 대화가 그 상태로 시작함. 개발 작업 없이 Associate가 직접 구성할 수 있는 범위임.`,
        wrongs:[`<b>B:</b> 형식 일부만 옮기고 같은 자료를 매번 올리는 수고는 그대로 남음. 고정 참고 자료는 지식 베이스에 맞음.`,
                `<b>C:</b> Project 설정으로 해결되는 반복 업무를 개발 과제로 키운 선택임. 시스템 연동이나 다수 의존 같은 이관 조건이 없음.`,
                `<b>D:</b> 필요한 것은 이미 가진 사내 제안서를 매번 쓰는 구성임. 외부 제안서 검색은 문제와 관계가 없음.`]},
      principle:"원칙 ④ 반복 맥락의 설정화" },

    { ts:"4.1", lvl:"실전", multi:2,
      q:`A program manager at a city culture foundation is preparing a bid for a festival operations contract. She used Claude to extract requirements from a 60-page RFP and from emails sent by three internal departments. The resulting table has 42 rows and looks complete. The writing team wants to start drafting tomorrow. Which TWO actions should she take before drafting begins? (Select TWO.)`,
      ko:`시 문화재단의 사업 매니저가 축제 운영 용역 입찰을 준비한다. Claude로 60쪽 분량의 RFP와 내부 3개 부서가 보낸 이메일에서 요구사항을 추출했다. 결과 표는 42행이며 완성되어 보인다. 작성팀은 내일부터 원고를 쓰고 싶어 한다. 작성 시작 전에 해야 할 행동 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Have Claude go back through the table and flag items with no measurable standard, items open to two readings, and needs only implied elsewhere.`, ko:`측정 기준이 없는 항목, 두 가지로 읽히는 항목, 다른 곳에서 암시만 된 요구를 Claude가 표를 다시 보며 표시하게 하기`, ok:true},
        {t:`Turn the flagged items into specific questions and confirm the answers with the issuing department or the internal requesters.`, ko:`표시된 항목을 구체적인 질문으로 바꿔 발주 부서나 내부 요청 부서에 답을 확인하기`, ok:true},
        {t:`Ask Claude to fill each item that lacks a standard with typical industry values so the table is complete for the writers.`, ko:`작성자가 쓸 수 있도록 기준이 없는 항목마다 업계 일반 값을 Claude가 채우게 하기`},
        {t:`Ask Claude to rate its confidence in each row and remove the rows it rates lowest to keep the table reliable.`, ko:`각 행에 대한 Claude의 확신도를 매기게 하고 가장 낮은 행을 지워 표의 신뢰도를 유지하기`},
        {t:`Have Claude rewrite the table as a persuasive narrative summary to share at the writing team's kickoff meeting.`, ko:`작성팀 착수 회의에서 공유하도록 표를 설득력 있는 서술형 요약으로 다시 쓰게 하기`}
      ],
      explain:{ good:`표가 완성되어 보이는 것과 숨은 요구가 없는 것은 별개임. 먼저 기준 없음·이중 해석·암시된 요구를 다시 점검해 드러내고, 드러난 항목은 요청한 쪽에 확인해 확정함. 이 두 단계를 거쳐야 작성팀이 확정된 요구사항으로 쓰기 시작함.`,
        wrongs:[`<b>C:</b> 근거 없는 기준값이 확정된 요구사항처럼 쓰임. 발주처의 실제 기준과 다르면 평가에서 점수를 잃음.`,
                `<b>D:</b> Claude의 자기 평가는 정확도의 근거가 아님. 확신도가 낮다는 이유로 실제 요구사항을 지울 수 있음.`,
                `<b>E:</b> 서술형 요약은 읽기 쉽지만 모호한 항목을 덜 보이게 만듦. 확인 단계를 대신하지 못함.`]},
      principle:"원칙 ① 요청의 구체화" },

    { ts:"4.2", lvl:"기초",
      q:`A sales enablement lead has a call with a partner company in one hour. Before the call, she wants to quickly confirm whether the partner announced a new product line this week, so she can mention it if it is relevant. Which approach BEST fits?`,
      ko:`세일즈 이네이블먼트 리드가 1시간 뒤 파트너사와 통화한다. 통화 전에 파트너사가 이번 주에 새 제품군을 발표했는지 빠르게 확인해, 관련이 있으면 통화에서 언급하려 한다. 가장 맞는 방법은 무엇인가?`,
      opts:[
        {t:`Turn on web search in a chat, ask about this week's announcement, and open the cited source to confirm it.`, ko:`채팅에서 웹 검색을 켜고 이번 주 발표를 물은 뒤 인용된 출처를 열어 확인하기`, ok:true},
        {t:`Start a Research task covering the partner's full product history, strategy, and recent news from many sources.`, ko:`파트너사의 전체 제품 이력, 전략, 최근 뉴스를 여러 출처에서 조사하는 Research 실행하기`},
        {t:`Ask Claude in a chat without search, since a major product announcement would already be part of its knowledge.`, ko:`큰 제품 발표라면 이미 Claude의 지식에 있을 것이므로 검색 없는 채팅으로 묻기`},
        {t:`Upload last month's partner newsletter to a Project and ask Claude whether it mentions a new product line.`, ko:`지난달 파트너 소식지를 Project에 올리고 새 제품군 언급이 있는지 묻기`}
      ],
      explain:{ good:`이번 주에 나온 정보 하나를 1시간 안에 확인하는 가벼운 최신 확인임. 채팅의 웹 검색이 이 범위에 맞고, 인용된 출처를 열면 바로 확인할 수 있음.`,
        wrongs:[`<b>B:</b> Research는 깊은 다출처 조사용임. 사실 하나를 확인하는 데는 범위와 시간이 과함.`,
                `<b>C:</b> 이번 주 발표는 학습 기준 시점 이후 정보라 Claude의 기존 지식에 없음.`,
                `<b>D:</b> 지난달 소식지에는 이번 주 발표가 담길 수 없음. 자료의 시점이 질문과 맞지 않음.`]},
      principle:"원칙 ③ 요구에 맞는 선택" },

    { ts:"4.2", lvl:"실전", multi:2,
      q:`An operations manager at a delivery company is preparing next quarter's driver staffing plan. She has two years of daily delivery volume data. Leadership is still discussing a possible hiring freeze, which Claude has no information about. She wants Claude's help but needs a plan she can defend line by line. Which TWO steps belong in her approach? (Select TWO.)`,
      ko:`배송 회사의 운영 매니저가 다음 분기 배송 기사 인력 계획을 준비한다. 2년 치 일별 배송 물량 데이터가 있다. 경영진은 채용 동결 가능성을 아직 논의 중이며 Claude는 이 정보를 알지 못한다. Claude의 도움을 받되 계획을 한 줄씩 설명할 수 있어야 한다. 접근에 들어가야 할 단계 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Upload the volume data and have Claude compute trends and per-driver throughput with code execution before drafting options.`, ko:`물량 데이터를 올리고 인력 안을 만들기 전에 코드 실행으로 추세와 기사 1인당 처리량을 계산하게 하기`, ok:true},
        {t:`Keep the final headcount decision with herself, weighing Claude's options against the pending hiring-freeze discussion.`, ko:`최종 인원 결정은 본인이 맡아 Claude의 안을 채용 동결 논의와 비교해 판단하기`, ok:true},
        {t:`Ask Claude to estimate per-driver throughput from its general knowledge of the delivery industry to save analysis time.`, ko:`분석 시간을 줄이도록 배송 업계 일반 지식으로 기사 1인당 처리량을 Claude가 추정하게 하기`},
        {t:`Let Claude pick the final headcount option, since its synthesis already considers all of the uploaded data.`, ko:`Claude의 종합이 올린 데이터를 모두 고려했으므로 최종 인원 안을 Claude가 고르게 하기`},
        {t:`Have Claude draft the full recommendation first and then calculate supporting numbers that match its conclusions.`, ko:`Claude가 권고안을 먼저 쓰게 하고 그 결론에 맞는 근거 수치를 나중에 계산하게 하기`}
      ],
      explain:{ good:`계획의 숫자는 이 회사의 데이터를 실제로 계산한 값이어야 한 줄씩 설명할 수 있음. 채용 동결처럼 Claude가 볼 수 없는 현실과 위험 판단이 걸린 최종 결정은 매니저가 맡음. 계산 → 종합 → 사람 결정의 순서가 지켜지는 조합임.`,
        wrongs:[`<b>C:</b> 업계 일반 지식에서 나온 처리량은 이 회사의 실제 처리량이 아님. 근거를 물으면 답할 수 없음.`,
                `<b>D:</b> 종합은 판단 재료를 정리하는 단계임. Claude는 채용 동결 논의를 알지 못하므로 최종 결정을 맡길 수 없음.`,
                `<b>E:</b> 결론을 먼저 정하고 숫자를 맞추면 숫자가 결론을 검증하지 못함. 계산이 종합보다 먼저 와야 함.`]},
      principle:"원칙 ② 내보내기 전 검증" },

    { ts:"4.3", lvl:"기초",
      q:`A three-person HR team built an interview-scheduling tracker as an artifact through conversation with Claude. Only the three of them use it, and it does not connect to any other system. Their manager asks whether the team should hand it to developers to rebuild. What is the MOST appropriate answer?`,
      ko:`3명으로 구성된 HR팀이 Claude와 대화하며 면접 일정 관리 도구를 Artifact로 만들었다. 세 사람만 쓰며 다른 시스템과 연결되어 있지 않다. 관리자가 개발자에게 넘겨 다시 만들어야 하는지 묻는다. 가장 적절한 답은 무엇인가?`,
      opts:[
        {t:`Keep improving it through conversation, since it is a small internal tool with no integration or uptime needs.`, ko:`연동이나 가동 요구가 없는 소규모 내부 도구이므로 대화로 계속 개선하기`, ok:true},
        {t:`Hand it to developers now, because any tool created with Claude should be rebuilt by technical staff before use.`, ko:`Claude로 만든 도구는 사용 전에 모두 기술 인력이 다시 만들어야 하므로 지금 개발자에게 넘기기`},
        {t:`Stop using it, because artifacts are meant only for one-time outputs and cannot serve as ongoing working tools.`, ko:`Artifact는 일회성 결과물용이라 지속적인 업무 도구로 쓸 수 없으므로 사용을 중단하기`},
        {t:`Turn it into an account-level Skill so that every employee in the company can open and use the tracker.`, ko:`회사의 모든 직원이 열어 쓸 수 있도록 계정 수준 Skill로 바꾸기`}
      ],
      explain:{ good:`세 명만 쓰고 다른 시스템과 연결되지 않는 도구에는 이관 신호가 없음. 이런 소규모 내부 도구는 Associate가 요청과 반복 개선으로 운영할 수 있는 범위임. 여러 부서가 의존하거나 연동 요구가 생기면 그때 넘김.`,
        wrongs:[`<b>B:</b> 이관은 의존 범위와 연동·가동 요구로 판단함. 모든 도구를 개발 조직에 넘기면 개발 자원이 필요 없는 일에 쓰임.`,
                `<b>C:</b> Artifact로 작동하는 내부 도구를 만들고 계속 고쳐 쓰는 것은 정상적인 사용 방식임.`,
                `<b>D:</b> Skill은 반복 절차를 담는 기능임. 도구를 전사에 배포하는 수단이 아니며 이 팀에 필요한 일도 아님.`]},
      principle:"원칙 ③ 요구에 맞는 선택" },

    { ts:"4.3", lvl:"실전",
      q:`A marketing analyst has gone through three rounds of building a campaign performance dashboard as an artifact. After reviewing it, the CMO says only: "Make it more executive-friendly." The analyst knows the CMO checks the dashboard on a phone before Monday meetings and mainly asks about the top three channels. What is the MOST effective next step?`,
      ko:`마케팅 분석가가 캠페인 성과 대시보드를 Artifact로 세 차례 반복해 만들었다. CMO는 검토 후 "더 임원 친화적으로 만들라"고만 말했다. 분석가는 CMO가 월요일 회의 전에 휴대폰으로 대시보드를 보고 주로 상위 3개 채널을 묻는다는 것을 알고 있다. 가장 효과적인 다음 단계는 무엇인가?`,
      opts:[
        {t:`Turn the comment into specific changes, like showing the top three channels with monthly change in a mobile layout.`, ko:`의견을 상위 3개 채널과 전월 대비 변화만 모바일 배치로 보여주는 식의 구체적 변경으로 바꿔 요청하기`, ok:true},
        {t:`Paste the CMO's comment into the chat exactly as written and ask Claude to make the dashboard more executive-friendly.`, ko:`CMO의 말을 그대로 붙여넣고 대시보드를 더 임원 친화적으로 만들라고 요청하기`},
        {t:`Start a new chat and rebuild the dashboard from scratch with every requirement written into one long, detailed prompt.`, ko:`새 채팅에서 모든 요구를 긴 프롬프트 하나에 담아 대시보드를 처음부터 다시 만들기`},
        {t:`Switch to the most capable model and regenerate the dashboard several times until the CMO approves one of the versions.`, ko:`최상위 모델로 바꾸고 CMO가 하나를 승인할 때까지 대시보드를 여러 번 다시 생성하기`}
      ],
      explain:{ good:`"임원 친화적"은 반응이고 변경 지시가 되지 못함. 분석가가 아는 사용 맥락(휴대폰, 월요일 회의, 상위 3개 채널)을 구체적 변경으로 바꿔야 다음 회차가 실제로 달라짐. 기존 시안 위에서 한 방향만 바꾸므로 지금까지의 반복 결과도 유지됨.`,
        wrongs:[`<b>B:</b> 막연한 반응을 그대로 넘기면 Claude도 추측으로 바꿈. 결과가 CMO의 실제 필요와 맞을지 알 수 없음.`,
                `<b>C:</b> 세 차례 반복으로 쌓은 결정을 버리고 한 번에 완성품을 요구하는 방식임. 설계 업무에 맞지 않음.`,
                `<b>D:</b> 무엇을 바꿀지 정하지 않은 채 모델과 횟수만 늘린 선택임. 원인은 요청이 구체적이지 않은 데 있음.`]},
      principle:"원칙 ① 요청의 구체화" },

    { ts:"4.4", lvl:"기초",
      q:`An event agency is mapping its client-proposal workflow before bringing Claude in. The steps are: pull venue details from past project files, calculate the total budget for each option, draft the proposal narrative, and send the signed proposal to the client. Which step should stay entirely with a person?`,
      ko:`행사 대행사가 Claude 도입 전에 고객 제안 업무 흐름을 매핑하고 있다. 단계는 과거 프로젝트 파일에서 장소 정보 가져오기, 안별 총예산 계산, 제안서 본문 초안 작성, 서명된 제안서를 고객에게 발송하기이다. 전적으로 사람이 맡아야 할 단계는 무엇인가?`,
      opts:[
        {t:`Sending the signed proposal to the client once it is final`, ko:`최종 확정된 서명 제안서를 고객에게 발송하기`, ok:true},
        {t:`Pulling venue details from the past project files`, ko:`과거 프로젝트 파일에서 장소 정보 가져오기`},
        {t:`Calculating the total budget for each of the venue options`, ko:`장소 안마다 총예산 계산하기`},
        {t:`Drafting the proposal narrative based on the venue summary`, ko:`장소 요약을 바탕으로 제안서 본문 초안 작성하기`}
      ],
      explain:{ good:`서명된 제안서 발송은 외부로 나가고 되돌릴 수 없으며 계약 효력과 연결된 행동임. 결과에 답하는 사람도 회사 담당자이므로 사람 유지 단계임. 나머지는 기계적 추출, 계산 기능을 붙일 수 있는 수치 단계, 사람이 검토하는 초안 단계임.`,
        wrongs:[`<b>B:</b> 과거 파일에서 정보를 뽑는 일은 기계적이고 되돌릴 수 있는 단계라 맡길 수 있음.`,
                `<b>C:</b> 정확해야 하는 수치 단계지만 Code Execution으로 계산하면 맡길 수 있음. 사람은 결과를 확인함.`,
                `<b>D:</b> 초안은 Claude가 쓰고 사람이 판단하는 협업 단계임. 전부 사람에게 남길 필요는 없음.`]},
      principle:"원칙 ⑤ 정책·사람 판단 우선" },

    { ts:"4.4", lvl:"실전", multi:2,
      q:`A PR agency is redesigning its monthly media coverage report for a client. The steps are: collect articles through a connector, classify each article's tone, count coverage and share of voice, draft insight commentary, and send the report to the client. Tone classification has been accurate for six months. Which TWO design choices are MOST appropriate? (Select TWO.)`,
      ko:`PR 대행사가 고객사에 보내는 월간 언론 보도 리포트를 재설계한다. 단계는 커넥터로 기사 수집, 기사별 논조 분류, 보도량과 점유율 집계, 인사이트 코멘트 초안 작성, 고객사에 리포트 발송이다. 논조 분류는 6개월 동안 정확했다. 가장 적절한 설계 선택 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Run the coverage counts and share-of-voice figures through code execution rather than having Claude estimate them in prose.`, ko:`보도량과 점유율 수치는 Claude가 문장으로 추정하지 않게 하고 코드 실행으로 계산하기`, ok:true},
        {t:`Have an account manager review and approve the insight commentary before the report is sent to the client.`, ko:`리포트를 고객사에 보내기 전에 어카운트 매니저가 인사이트 코멘트를 검토·승인하기`, ok:true},
        {t:`Let Claude send the report directly to the client once its figures pass Claude's own internal consistency check.`, ko:`수치가 Claude 자체 일관성 점검을 통과하면 Claude가 리포트를 고객사에 바로 발송하게 하기`},
        {t:`Because tone classification has been accurate, let Claude also finalize the client recommendations without review.`, ko:`논조 분류가 정확했으므로 고객사 권고안도 검토 없이 Claude가 확정하게 하기`},
        {t:`First build a custom Skill for the report, then decide which workflow steps that Skill should be used to cover.`, ko:`리포트용 커스텀 Skill을 먼저 만든 뒤 그 Skill이 맡을 단계를 정하기`}
      ],
      explain:{ good:`집계 수치는 정확해야 하는 단계이므로 계산 기능을 붙임. 인사이트 코멘트는 고객에게 나가는 판단이 담긴 초안이므로 담당자가 검토 관문을 맡음. 단계마다 성격에 맞춰 기능과 사람 확인을 배치한 조합임.`,
        wrongs:[`<b>C:</b> Claude의 자기 점검은 사람 확인을 대신하지 못함. 고객 발송은 되돌릴 수 없는 외부 행동임.`,
                `<b>D:</b> 앞 단계의 정확도를 근거로 다음 단계를 넘기는 후광 위임임. 권고안은 책임이 걸린 판단임.`,
                `<b>E:</b> 도구부터 정하고 일을 맞추는 순서임. 단계를 먼저 나누고 기능은 그다음에 배치함.`]},
      principle:"원칙 ⑤ 정책·사람 판단 우선" },

    { ts:"4.5", lvl:"기초",
      q:`An academic coordinator at a high school is introducing a workflow in which Claude drafts written feedback on student essays. Several teachers worry that the feedback will contain mistakes. When explaining the workflow to these teachers, which message is MOST appropriate?`,
      ko:`고등학교 학사 코디네이터가 학생 에세이에 대한 서면 피드백을 Claude가 초안으로 쓰는 업무 흐름을 도입한다. 여러 교사가 피드백에 오류가 있을까 걱정한다. 이 교사들에게 업무 흐름을 설명할 때 가장 적절한 메시지는 무엇인가?`,
      opts:[
        {t:`Explain what Claude drafts, which errors to watch for, and that teachers edit and approve every comment before students see it.`, ko:`Claude가 무엇을 초안으로 쓰는지, 어떤 오류를 살펴야 하는지, 학생이 보기 전에 교사가 모든 코멘트를 고치고 승인한다는 점을 설명하기`, ok:true},
        {t:`Reassure the teachers that Claude's feedback is as reliable as their own, so reviewing it is optional when they are short on time.`, ko:`Claude의 피드백이 교사만큼 믿을 만하므로 시간이 부족하면 검토를 생략해도 된다고 안심시키기`},
        {t:`Avoid mentioning possible errors during the session so that teachers do not lose confidence in the new workflow early on.`, ko:`교사들이 초반에 새 흐름에 대한 신뢰를 잃지 않도록 설명회에서 오류 가능성은 언급하지 않기`},
        {t:`Tell teachers that Claude should not be trusted with feedback and should be used only for checking spelling and grammar.`, ko:`Claude는 피드백 작성에 믿을 수 없으므로 맞춤법과 문법 확인에만 쓰라고 안내하기`}
      ],
      explain:{ good:`현장 사용자에게는 맡기는 일, 직접 확인할 오류 유형, 사람이 승인하는 지점을 함께 알려야 함. 한계를 인정하고 확인 방법을 보여주는 설명이 걱정하는 청중의 신뢰를 얻음.`,
        wrongs:[`<b>B:</b> 근거 없는 정확도 주장으로 검토를 약하게 만듦. 첫 오류가 학생에게 나가면 신뢰를 잃음.`,
                `<b>C:</b> 한계를 숨기면 교사가 무엇을 확인해야 하는지 모름. 오류를 발견했을 때 신뢰가 더 크게 떨어짐.`,
                `<b>D:</b> 위험만 강조해 실제 가치를 지운 설명임. 사람 승인 단계가 있으면 초안 작성까지 맡길 수 있음.`]},
      principle:"원칙 ② 내보내기 전 검증" },

    { ts:"4.5", lvl:"실전", multi:2,
      q:`A consultant is presenting the results of a Claude-assisted contract review pilot to a client's risk committee. Committee members are experienced with AI tools and want to understand where the workflow could fail. Which TWO elements should the presentation include? (Select TWO.)`,
      ko:`컨설턴트가 Claude를 활용한 계약 검토 시범 운영 결과를 고객사 리스크 위원회에 발표한다. 위원들은 AI 도구 경험이 많고 이 흐름이 어디서 실패할 수 있는지 알고 싶어 한다. 발표에 포함해야 할 요소 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Which steps Claude performs, and where a named reviewer checks and approves each change before anything is signed.`, ko:`Claude가 수행하는 단계와, 서명 전에 지정된 검토자가 각 변경을 확인·승인하는 지점`, ok:true},
        {t:`Failure types seen in the pilot, such as citing clause numbers that do not exist, and the step that catches them.`, ko:`존재하지 않는 조항 번호 인용처럼 시범 운영에서 나온 실패 유형과 그것을 잡아내는 단계`, ok:true},
        {t:`A statement that the workflow is now fully automated, to show the committee how much efficiency it delivers.`, ko:`효율을 보여주기 위해 흐름이 이제 완전 자동화되었다는 설명`},
        {t:`A claim that Claude's accuracy matches the legal team's, supported by several of the strongest sample reviews.`, ko:`가장 잘 나온 검토 사례 몇 건을 근거로 Claude의 정확도가 법무팀과 같다는 주장`},
        {t:`A note that Claude was instructed not to retain contract data, presented as the workflow's main data control.`, ko:`Claude에게 계약 데이터를 보관하지 말라고 지시했다는 점을 주요 데이터 통제로 제시`}
      ],
      explain:{ good:`리스크 위원회는 통제 중심이면서 AI 이해도가 높은 청중임. 누가 어디서 승인하는지와, 실제로 관찰된 실패 유형 및 그 대응을 함께 보여줘야 함. 한계를 구체적으로 밝히는 설명이 이 청중의 신뢰를 얻음.`,
        wrongs:[`<b>C:</b> 사람 승인 단계를 지우는 과장 표현임. 리스크 위원회가 가장 먼저 문제 삼을 설명임.`,
                `<b>D:</b> 잘 나온 사례 몇 건은 정확도 측정이 아님. 근거 없는 동등성 주장은 첫 실수에서 신뢰를 잃게 함.`,
                `<b>E:</b> Claude에게 하는 지시는 데이터 통제 장치가 아님. 통제는 반입 전 정책 확인과 비식별화 같은 실제 절차임.`]},
      principle:"원칙 ⑤ 정책·사람 판단 우선" }
  ]}

]};
