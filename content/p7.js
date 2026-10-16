/* PART 07: 문제 해결·최적화 (D7, 10%) */
window.CCAO.p7 = { id:"p7", lessons:[

  /* ================= CH 1 · 7.1 원인 진단과 수정 ================= */
  { id:"p7c1", ch:"CH 1", obj:"7.1", title:"부진한 출력의 원인 진단과 수정", steps:[

    {type:"concept", kind:"PART BRIEFING · 파트 설명", h:"PART 07. 문제 해결·최적화",
     html:`<p class="lead">D7은 결과가 기대에 못 미칠 때 원인을 찾아 고치고, 반복 업무가 더 적은 수고로 돌아가게 만드는 영역임. 앞 파트에서 배운 프롬프트·컨텍스트·기능·설정 지식을 결과가 나빠졌을 때 다시 꺼내 쓰는 단계임.</p>
      <h4>파트 프로필</h4>
      <div class="tbl"><table>
        <tr><th>항목</th><th>내용</th></tr>
        <tr><td>출제 비중</td><td>10% · 60문항 중 약 6문항</td></tr>
        <tr><td>챕터 구성</td><td>CH 1 원인 진단(7.1) · CH 2 피드백 반영(7.2) · CH 3 업무 흐름 최적화(7.3) · 미니테스트 6문항</td></tr>
        <tr><td>공식 강좌</td><td>Prep Course 모듈 7 "Troubleshooting & Optimization" · 약 30분</td></tr>
      </table></div>
      <h4>다루는 범위</h4>
      <ul>
        <li><b>7.1 원인 진단과 수정</b>: 부진한 출력을 4가지 원인(명세 부족, 컨텍스트 과부하, 기능·모델 선택 오류, 낡은 설정)과 기대 불일치로 구분하고, 확인 비용이 낮은 순서로 점검함</li>
        <li><b>7.2 피드백 반영</b>: "뭔가 아니다" 같은 반응을 고칠 수 있는 지시로 바꾸고, 효과가 확인된 수정을 설정에 남겨 다시 잃지 않게 함</li>
        <li><b>7.3 업무 흐름 최적화</b>: 반복·수정·편차 신호로 개선할 곳을 찾고, 수정을 맞는 설정 위치로 옮긴 뒤 효과를 측정함</li>
      </ul>
      <h4>출제 형태</h4>
      <ul>
        <li>지문: 실무자가 Claude로 하던 일에서 결과가 나빠진 상황. 언제부터 나빠졌는지, 이미 무엇을 시도했는지, 매번 같은 손질을 하는지가 단서로 주어짐</li>
        <li>질문: 가장 가능성 높은 원인, 가장 먼저 할 조치, 가장 오래 유지되는 해결책, 목표 지표를 가장 직접 줄이는 변경을 고르는 형태</li>
        <li>오답 선택지: 가장 강력한 모델로 바로 교체, 프롬프트 전체 재작성, Claude로는 안 된다며 수작업 전환, 같은 긴 대화에서 지시 반복, 매주 손으로 계속 고치기</li>
        <li>다른 영역 개념이 정답 근거가 되는 문항이 많음. 모델 선택(D3), 프롬프트 5요소(D1), 설정 유지보수(D5), 결과 검증(D2)이 자주 함께 쓰임</li>
      </ul>
      <h4>연계</h4>
      <ul>
        <li>공식 강좌: Prep Course 모듈 7 "Troubleshooting & Optimization". 진단, 피드백 반영, 최적화 세 화면과 5문항 퀴즈로 구성됨</li>
        <li>업무 처리 흐름 지도: 윗줄 다섯 단계 아래의 "↩ 원인 진단·수정" 줄에 해당함. 결과가 나쁘면 원인을 찾아 원인이 있는 단계(① 도구·모델 선택, ② 환경 설정, ③ 요청 작성)로 돌아감</li>
      </ul>
      <div class="callout">학습 순서 · 이 파트는 PART 01(기능·모델·컨텍스트 선택), PART 02(프롬프트 작성), PART 05(설정·지식 관리)의 내용을 전제로 함. 해당 개념이 기억나지 않으면 그 파트를 먼저 훑을 것.</div>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"부진한 출력의 4가지 근본 원인",
     html:`<p class="lead">결과가 실망스러울 때 흔한 반응은 두 가지임. Claude로는 안 되는 일이라며 포기하거나, 프롬프트·모델·기능을 무작위로 바꿔 봄. 두 반응 모두 원인을 모르는 상태에서 움직이는 것임. 부진한 출력에는 찾을 수 있는 원인이 있고, 원인마다 해법이 다름.</p>

      <div class="callout term"><b>용어 카드</b> · <b>명세 부족(under-specification)</b>: 요청 문장에 대상 독자, 배경, 제약, 출력 형식 중 일부가 빠진 상태. 문제 위치는 프롬프트임.</div>
      <ul>
        <li>증상 시점: 새 대화의 첫 응답부터 일반적이거나 핵심 조건을 무시함</li>
        <li>예: "신제품 소개 이메일 작성"이라고만 요청함. 기존 고객 대상이라는 조건, 할인 기간, 신청 링크 위치가 모두 빠진 범용 문안이 돌아옴</li>
        <li>수정: 빠진 요소를 추가함. 가장 흔한 원인이고 고치는 비용도 가장 낮음</li>
      </ul>

      <div class="callout term"><b>용어 카드</b> · <b>컨텍스트 과부하(context overload)</b>: 한 대화에 메시지와 첨부 문서가 쌓여 컨텍스트 창(context window)이 한도에 가까워진 상태. 문제 위치는 대화 자체임.</div>
      <ul>
        <li>컨텍스트 창: 한 대화에서 Claude가 함께 참고할 수 있는 분량의 한도</li>
        <li>대화가 한도에 가까워지면 claude.ai가 앞부분을 자동으로 요약해 공간을 만듦(유료 플랜에서 Code Execution(코드 실행)이 켜져 있을 때)</li>
        <li>요약 과정에서 세부가 압축되어 초반에 준 지시의 영향력이 약해짐</li>
        <li>증상 시점: 처음에는 형식과 규칙을 잘 따르다가 긴 대화 중간부터 놓치기 시작함</li>
        <li>수정: 결정사항과 진행 상황을 요약받아 새 대화에서 이어감. 매번 필요한 규칙은 프로젝트 지시문(Project instructions)으로 옮김</li>
        <li>같은 대화에서 지시를 다시 강조하거나 프롬프트를 다듬어도 해결되지 않음</li>
      </ul>

      <div class="callout term"><b>용어 카드</b> · <b>기능·모델 선택 오류(wrong feature or model)</b>: 과업에 맞지 않는 기능이나 모델 등급으로 작업한 상태. 문제 위치는 도구 선택임.</div>
      <ul>
        <li>증상 시점: 같은 유형의 오류가 반복됨</li>
        <li>숫자가 미묘하게 틀림: 계산을 문장 생성으로 처리한 것이 원인. 수정은 계산을 Code Execution으로 실행시키는 것임</li>
        <li>세부를 더해도 분석이 계속 얕고, 속도용 경량 모델(예: Haiku)을 고른 상태: 수정은 깊은 분석에 맞는 상위 모델(Sonnet, Opus)로 바꾸는 것임</li>
        <li>프롬프트를 더 길게 써도 해결되지 않음. 도구를 바꿔야 해결됨</li>
      </ul>

      <div class="callout term"><b>용어 카드</b> · <b>낡은 설정(stale configuration)</b>: 프로젝트 지시문, 지식 베이스(knowledge base) 문서, Skill 중 일부가 현재 업무와 맞지 않게 된 상태. 문제 위치는 Project 설정임.</div>
      <ul>
        <li>증상 시점: "지난달까지는 잘 됐다"는 말이 나옴. 오류 표시 없이 결과가 조금씩 어긋남</li>
        <li>예: 가격표가 바뀌었는데 지식 베이스에 구버전 파일이 남아 있음. 사용자가 직접 올린 커스텀 Skill이 옛 보고서 양식을 그대로 씀(커스텀 Skill은 다시 올려야 바뀜)</li>
        <li>수정: 유지보수. 지시문 갱신, 구버전 문서 삭제, Skill 재업로드. 점검 항목은 PART 05(설정·지식 관리)에서 다룸</li>
      </ul>

      <h4>4가지 원인 비교</h4>
      <div class="tbl"><table>
        <tr><th>원인</th><th>문제 위치</th><th>증상 시점</th><th>수정 방향</th></tr>
        <tr><td>명세 부족</td><td>프롬프트</td><td>첫 응답부터</td><td>빠진 요소 추가</td></tr>
        <tr><td>컨텍스트 과부하</td><td>대화 길이</td><td>긴 대화 중간부터</td><td>요약 후 새 대화, 규칙은 지시문으로</td></tr>
        <tr><td>기능·모델 선택 오류</td><td>도구 선택</td><td>같은 유형 오류 반복</td><td>Code Execution 사용, 상위 모델로 변경</td></tr>
        <tr><td>낡은 설정</td><td>Project 설정</td><td>예전엔 됐는데 지금 어긋남</td><td>지시·문서·Skill 유지보수</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>겉으로 보이는 결과(일반적인 문안, 틀린 형식)는 원인이 달라도 비슷함. 원인을 가르는 단서는 "증상 시점" 열임.</p>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"진단 순서와 기대 불일치",
     html:`<div class="callout term"><b>용어 카드</b> · <b>원인 분리(isolate before fix)</b>: 무언가를 바꾸기 전에 실패가 어디서 생겼는지 먼저 특정하는 습관. 위치 후보는 프롬프트, 컨텍스트(창이 찼거나 잘못된 자료가 들어감), 기능 선택(진입점·모델·Code Execution), 기대 불일치 네 가지임.</div>
      <ul>
        <li>위치에 이름을 붙이면 해법이 바로 정해짐</li>
        <li>이름을 붙이지 못한 채 여러 가지를 동시에 바꾸면 무엇이 효과였는지 알 수 없음</li>
      </ul>

      <div class="callout term"><b>용어 카드</b> · <b>진단 순서(diagnostic sequence)</b>: 확인 비용이 낮은 원인부터 차례로 배제하는 점검 순서.</div>
      <div class="flow">
        <span class="nd">① 프롬프트<small>5요소 대비 재검토 · 몇 초</small></span><span class="ar">→</span>
        <span class="nd">② 컨텍스트<small>대화 길이·첨부 자료 확인</small></span><span class="ar">→</span>
        <span class="nd">③ 기능·모델<small>Code Execution·모델 등급</small></span><span class="ar">→</span>
        <span class="nd">④ 설정<small>지시문·지식·Skill 최신성</small></span><span class="ar">→</span>
        <span class="nd hot">⑤ 과업 적합성<small>맨 마지막에만 의심</small></span>
      </div>
      <p class="howto"><b>읽는 법</b>화살표 = 점검 순서. 왼쪽일수록 확인에 드는 시간과 비용이 적음. 앞 단계에서 원인이 나오면 거기서 고치고 멈춤. ⑤는 시도 자체를 끝내는 가장 비싼 판정이라 맨 끝에 둠.</p>
      <ul>
        <li>5요소: 역할, 맥락, 과업, 제약, 출력 형식. 실망스러운 결과를 5요소에 대 보면 빠진 칸이 드러남(PART 02 프롬프트 작성)</li>
        <li>흔한 실수: 순서를 거꾸로 밟음. 곧바로 최고 모델로 바꾸거나, Claude로는 안 되는 일이라고 먼저 판정함</li>
      </ul>

      <h4>① 단계 예시: 5요소 대비 재검토</h4>
      <div class="sample bad"><span class="sl">예시 · 수정 전 프롬프트</span>봄 시즌 프로모션 안내 문자 작성.</div>
      <div class="sample good"><span class="sl">예시 · 수정 후 프롬프트</span>역할: 화장품 브랜드 CRM 담당자.
맥락: 최근 6개월 안에 구매 이력이 있는 기존 회원 대상. 3월 4일부터 10일까지 전 품목 20% 할인. 신규 가입자는 대상 아님.
과업: 할인 안내 문자 문안 3개 작성.
제약: 각 90자 이내. "역대급", "최저가" 같은 과장 표현 금지. 수신 거부 안내 문구 포함.
출력 형식: 번호를 붙인 목록. 문안마다 강조한 혜택을 한 줄로 덧붙일 것.</div>

      <div class="callout term"><b>용어 카드</b> · <b>기대 불일치(expectation mismatch)</b>: 프롬프트 보강, 새 대화, 기능·모델 변경, 설정 갱신 중 어느 것으로도 얻을 수 없는 결과를 요구한 상태. 예: 다음 분기의 정확한 매출 금액.</div>
      <ul>
        <li>해법: 과업을 얻을 수 있는 형태로 재구성함(과업 재구성)</li>
        <li>대표적인 재구성: 가정을 밝힌 범위(낙관·기준·비관), 숫자를 바꿔 볼 수 있는 동인 모델(방문자 수 × 전환율 × 객단가)</li>
        <li>진짜 불일치를 알아보는 것도 기술임. 애초에 얻을 수 없는 결과를 위해 프롬프트를 계속 고치는 시간을 아낌</li>
        <li>기대 불일치 판정은 ①~④를 확인한 뒤에만 내림</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 재구성 전 요청</span>다음 분기 온라인몰 매출을 정확한 금액으로 예측할 것.</div>
      <div class="sample good"><span class="sl">예시 · 재구성 후 요청</span>첨부한 최근 8개 분기 매출 데이터를 바탕으로 다음 분기 매출 범위를 낙관·기준·비관 3개 시나리오로 제시할 것.
시나리오마다 방문자 수, 구매 전환율, 객단가 가정을 표로 밝힐 것.
계산은 Code Execution으로 실행하고, 가정 하나를 바꾸면 결과가 얼마나 달라지는지 함께 보여 줄 것.</div>

      <h4>진단 결과의 두 유형</h4>
      <ul>
        <li>대부분: 구체적이고 비용이 낮은 수정 하나로 끝남(빠진 조건 추가, 새 대화, Code Execution 사용)</li>
        <li>가끔: 이 과업은 재구성이 필요하다는 근거 있는 판정으로 끝남</li>
        <li>두 경우 모두 이유를 설명할 수 있는 결정이므로 진단은 성공한 것임</li>
        <li>반복 업무에서 매번 같은 손질이 필요하다면 그 자체가 진단 단서임. 프롬프트·컨텍스트·설정 어딘가에 빠진 것이 있다는 신호임</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"증상별 원인 판정 기준",
     html:`__MAP:fix__
      <p class="lead">문항은 증상을 보여 주고 원인이나 첫 조치를 묻는 형태가 많음. 표의 왼쪽 열(증상과 시점)만 보고 오른쪽 두 열을 떠올릴 수 있으면 됨.</p>
      <h4>증상 → 진단 → 수정</h4>
      <div class="tbl"><table>
        <tr><th>증상(업무 사례)</th><th>진단</th><th>수정</th></tr>
        <tr><td>새 대화에서 환불 문의 답변 초안을 요청함. 첫 응답부터 일반론이고 자사 환불 기준을 무시함</td><td>명세 부족</td><td>적용할 환불 기준과 고객 상황을 명시. 무엇이 핵심 조건인지 밝힘</td></tr>
        <tr><td>신입 교육 자료를 3시간째 한 대화에서 만드는 중. 중반 이후 슬라이드 형식 규칙을 지키지 않음</td><td>컨텍스트 과부하</td><td>요약 후 새 대화에서 재시작. 형식 규칙은 프로젝트 지시문으로 고정</td></tr>
        <tr><td>캠페인 성과표의 합계와 증감률이 조금씩 틀림</td><td>기능 선택 오류</td><td>계산을 Code Execution으로 실행</td></tr>
        <tr><td>설문 응답 분석이 세부를 세 번 보강해도 얕음. 속도용 경량 모델 사용 중</td><td>모델 등급 선택 오류</td><td>깊은 분석에 맞는 상위 모델로 변경</td></tr>
        <tr><td>지난달까지 맞던 주간 보고서가 이번 달부터 폐지된 KPI 이름을 씀</td><td>낡은 설정</td><td>지시문·지식 베이스·Skill 점검 후 갱신</td></tr>
        <tr><td>내년 신입 지원자 수를 정확히 맞혀 달라는 요청이 실행할 때마다 다른 숫자를 냄</td><td>기대 불일치</td><td>가정을 밝힌 범위와 동인으로 과업 재구성</td></tr>
      </table></div>

      <h4>첫 조치 판단: 상황 → 선택 → 이유</h4>
      <ul>
        <li>결과가 실망스럽고 원인은 아직 모름 → 진단 순서 ①부터 확인 → 비용이 낮은 원인이 가장 흔함</li>
        <li>긴 대화 후반에 규칙을 놓침 → 요약 후 새 대화 → 모델 등급을 올려도 가득 찬 대화 창은 그대로임</li>
        <li>세부를 더해도 같은 얕음이 반복됨 → 모델 등급 확인 → 명세 문제로 오진하면 세부만 계속 늘어남</li>
        <li>숫자만 계속 틀림 → Code Execution 사용 → 문장 생성은 그럴듯한 숫자를 낼 뿐 계산을 보장하지 않음</li>
        <li>①~④에서 원인이 나오지 않음 → 과업 재구성 → 얻을 수 없는 결과를 위한 프롬프트 수정은 시간 낭비임</li>
      </ul>
      <div class="callout">시험 포인트 · 지문에서 "언제부터" 나빠졌는지를 먼저 찾을 것. 첫 응답부터면 명세 부족, 긴 대화 중간부터면 컨텍스트 과부하, 같은 유형 오류가 반복되면 기능·모델, 예전엔 됐다면 낡은 설정임. 정답은 대개 그 원인을 직접 겨냥하는 가장 저렴한 조치임.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>원인 확인 없이 가장 강력한 모델로 교체하는 선택지: 컨텍스트·명세·설정 문제는 모델을 바꿔도 그대로 남음</li>
        <li>프롬프트 전체를 처음부터 다시 쓰는 선택지: 잘 되던 부분까지 잃고, 무엇이 문제였는지 알 수 없게 됨</li>
        <li>같은 긴 대화에서 지시를 대문자로 반복하는 선택지: 저하된 대화를 더 늘릴 뿐임</li>
        <li>Claude로는 안 되는 일이라고 판정하고 수작업으로 돌아가는 선택지: 진단 순서의 마지막 단계를 맨 앞에 둔 것임</li>
        <li>Claude에게 자기 결과를 다시 점검하게 하고 그 답을 믿는 선택지: 자체 평가는 정확성의 근거가 아님(PART 03 결과 검증)</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Onboarding FAQ session", ts:"7.1",
     q:`An HR coordinator has spent most of the afternoon in one chat building an onboarding FAQ, pasting in eight policy documents along the way. The early answers used her table format and cited the policy section each time. The latest answers are plain paragraphs with no section references, although she has not changed how she asks. What is the MOST appropriate next step?`,
     ko:`HR 코디네이터가 오후 대부분을 한 대화에서 신입 온보딩 FAQ를 만드는 데 썼고, 그 과정에서 정책 문서 8개를 붙여넣음. 초반 답변은 지정한 표 형식을 따랐고 매번 정책 조항을 인용함. 최근 답변은 조항 인용 없는 일반 문단으로 나오며, 요청 방식은 바꾸지 않았음. 가장 적절한 다음 조치는 무엇인가?`,
     opts:[
       {t:`Ask Claude to summarize the agreed format and progress, then continue in a new chat that starts from that summary.`, ko:`합의된 형식과 진행 상황을 요약받은 뒤, 그 요약으로 시작하는 새 대화에서 이어가기`, ok:true},
       {t:`Switch to the most capable model and keep working in the same chat, since it can handle more material at once.`, ko:`한 번에 더 많은 자료를 다룰 수 있도록 가장 역량 높은 모델로 바꾸고 같은 대화에서 계속 작업하기`},
       {t:`Repeat the table and citation rules in the same chat, in capital letters, before every new question.`, ko:`같은 대화에서 질문할 때마다 표 형식과 인용 규칙을 대문자로 다시 적기`},
       {t:`Rewrite her original request from scratch, this time with a more detailed description of the table she expects.`, ko:`이번에는 기대하는 표를 더 자세히 설명하도록 원래 요청을 처음부터 다시 쓰기`}
     ],
     hint:`문제가 첫 응답부터 있었는지, 대화가 길어진 뒤에 생겼는지 볼 것.`,
     explain:{good:`초반 답변은 형식과 인용 규칙을 지켰고 요청 방식도 그대로였음. 긴 대화와 많은 첨부 문서로 컨텍스트 창이 차면서 초반 지시가 압축된 상태로 진단됨. 결정사항을 요약받아 새 대화에서 이어가면 저하된 대화를 버리고 필요한 규칙만 가져갈 수 있음.`,
       wrongs:[`<b>B:</b> 모델 등급을 올려도 가득 찬 대화의 압축 문제는 그대로 남음. 원인을 확인하지 않고 가장 비싼 조치부터 고른 것임.`,
               `<b>C:</b> 저하된 대화를 더 늘릴 뿐임. 같은 대화 안에서 반복한 지시도 다시 압축 대상이 됨.`,
               `<b>D:</b> 첫 응답부터 형식을 지켰으므로 원래 요청에는 빠진 요소가 없음. 명세 부족은 첫 응답부터 드러남.`]},
     principle:"원칙 ⑥ 원인 진단 후 수정",
     why:{q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[{t:`같은 요청이 처음에는 통했고, 대화가 길어진 뒤에야 형식이 무너졌다는 시점`, ok:true},
             {t:`공식 강좌가 권장하는 기본 조치가 새 대화 시작이라는 점`},
             {t:`첨부한 정책 문서 8개의 내용이 서로 충돌한다는 점`},
             {t:`원래 요청에 표 형식 설명이 부족했다는 점`}],
       explain:`요청이 바뀌지 않았는데 결과만 후반에 나빠졌으므로 명세 부족은 배제됨. 증상이 나타난 시점이 컨텍스트 과부하를 가리킴.`}},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Conference attendance figure", ts:"7.1",
     q:`An event planner asked Claude for the exact number of attendees to expect at next year's industry conference. She supplied five years of registration data in a well-structured prompt and ran it in a fresh chat with a capable model. Each attempt returns a different single number, and her director needs a figure for the venue budget. What is the BEST way forward?`,
     ko:`행사 기획자가 내년 업계 콘퍼런스의 정확한 참석자 수를 Claude에 요청함. 5년 치 등록 데이터를 잘 구성된 프롬프트에 담았고, 역량 있는 모델로 새 대화에서 실행함. 시도할 때마다 서로 다른 숫자 하나가 나오며, 상사는 행사장 예산을 위한 수치가 필요함. 가장 좋은 진행 방법은 무엇인가?`,
     opts:[
       {t:`Ask for low, base and high attendance scenarios, each with its stated assumptions and the drivers behind it.`, ko:`가정과 근거 동인을 밝힌 낮음·기준·높음 참석자 시나리오를 요청하기`, ok:true},
       {t:`Keep refining the prompt with more historical detail until two runs in a row produce the same number.`, ko:`두 번 연속 같은 숫자가 나올 때까지 과거 데이터를 더 넣어 프롬프트를 다듬기`},
       {t:`Turn on Research so that Claude can locate next year's confirmed attendance figure in sources across the web.`, ko:`Research를 켜서 웹의 출처에서 내년 확정 참석자 수를 찾게 하기`},
       {t:`Treat the task as something Claude cannot do and build the whole estimate by hand in a spreadsheet instead.`, ko:`Claude로는 할 수 없는 일로 보고 스프레드시트에서 추정치를 모두 직접 만들기`}
     ],
     hint:`지문이 이미 배제해 준 원인을 진단 순서에 맞춰 하나씩 짚어 볼 것.`,
     explain:{good:`잘 구성된 프롬프트, 새 대화, 역량 있는 모델이 갖춰졌으므로 명세·컨텍스트·모델 원인은 배제됨. 내년 참석자 수의 정확한 단일 값은 어떤 조정으로도 얻을 수 없는 결과임. 가정을 밝힌 범위로 재구성하면 예산 결정에 쓸 수 있는 근거가 생김.`,
       wrongs:[`<b>B:</b> 같은 숫자가 두 번 나와도 그 숫자가 맞다는 근거가 되지 않음. 얻을 수 없는 결과를 위해 프롬프트를 계속 고치는 것임.`,
               `<b>C:</b> Research는 이미 존재하는 자료를 여러 출처에서 조사해 종합하는 기능임. 아직 열리지 않은 행사의 확정 참석자 수는 어느 출처에도 없음.`,
               `<b>D:</b> 진단 순서의 마지막 판정을 너무 빨리 내림. 과업을 범위 형태로 바꾸면 Claude로 충분히 도울 수 있음.`]},
     principle:"원칙 ⑥ 원인 진단 후 수정"}
  ]},

  /* ================= CH 2 · 7.2 피드백 반영 ================= */
  { id:"p7c2", ch:"CH 2", obj:"7.2", title:"피드백과 결과에 따른 방식 조정", steps:[

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"피드백을 구체적 조정으로 바꾸는 방법",
     html:`<p class="lead">결과물에 상사·고객·동료의 피드백이 돌아오면 다음 시도를 바꿔야 함. 피드백을 받은 표현 그대로 Claude에 전달하면 결과는 거의 바뀌지 않음. 피드백을 무엇을 바꿀지 정한 지시로 옮겨야 함.</p>

      <div class="callout term"><b>용어 카드</b> · <b>피드백 루프(feedback loop)</b>: 결과 확인 → 부족한 점에 이름 붙이기 → 해당 조정 지점 하나 수정 → 다시 실행해 비교하는 반복 과정. 한 번의 수정이 다음 결과에 어떤 차이를 냈는지 확인하는 것이 목적임.</div>
      <div class="callout term"><b>용어 카드</b> · <b>조정 지점(lever)</b>: 피드백을 실제 결과 변화로 연결하는 위치. 프롬프트, 로드된 컨텍스트, 설정값 세 가지가 있음.</div>
      <div class="tbl"><table>
        <tr><th>조정 지점</th><th>실체</th><th>예</th></tr>
        <tr><td>프롬프트</td><td>이번 요청에 쓰는 문장</td><td>대상 독자, 과업 동사, 길이 제한</td></tr>
        <tr><td>로드된 컨텍스트</td><td>이번 대화에 들어가 있는 자료</td><td>첨부 문서, 대화에 남은 이전 내용, 지식 베이스 파일</td></tr>
        <tr><td>설정값</td><td>매번 자동으로 적용되는 Project·도구 설정</td><td>프로젝트 지시문, Skill, 모델·기능 선택</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>위에서 아래로 갈수록 영향 범위가 넓어짐. 프롬프트 수정은 이번 한 번에, 설정값 수정은 이후 모든 대화에 적용됨.</p>

      <h4>반응과 지시의 차이</h4>
      <ul>
        <li>반응: "뭔가 아니다", "좀 더 잘 썼으면 한다", "브랜드 느낌이 안 난다". 불만은 전달하지만 무엇을 바꿀지는 담겨 있지 않음</li>
        <li>반응을 지시로 바꾸는 질문 1: 이 결과가 맞으려면 무엇이 있어야 하는가?</li>
        <li>반응을 지시로 바꾸는 질문 2: 그것을 통제하는 조정 지점은 어디인가?</li>
        <li>조정 지점을 지목하지 못하면 아직 반응 단계임. 그 상태의 다음 시도는 추측임</li>
      </ul>

      <h4>자주 받는 피드백의 변환</h4>
      <div class="tbl"><table>
        <tr><th>받은 피드백</th><th>빠진 것</th><th>조정 지점</th><th>바꾼 지시 예시</th></tr>
        <tr><td>"너무 뻔하다"</td><td>대상 독자와 원하는 행동</td><td>프롬프트의 맥락</td><td>독자: 서울 거주 30대 1인 가구. 목표 행동: 체험단 신청 버튼 클릭</td></tr>
        <tr><td>"톤이 안 맞는다"</td><td>어조 제약</td><td>프로젝트 지시문</td><td>고객 대상 문서는 존댓말 사용. 감탄사와 과장 형용사 금지</td></tr>
        <tr><td>"요점이 안 보인다"</td><td>결과물이 답할 질문</td><td>프롬프트 첫 줄</td><td>이 메모가 답할 질문: 3월 광고 예산을 늘려야 하는가</td></tr>
        <tr><td>"숫자가 이상하다"</td><td>계산 방식</td><td>기능 선택</td><td>증감률은 Code Execution으로 계산하고 계산식을 함께 표시</td></tr>
      </table></div>

      <h4>예시: 피드백 기록 비교</h4>
      <div class="sample bad"><span class="sl">예시 · 반응을 그대로 전달한 기록</span>1차 팀장 의견: 별로임 → Claude에 "다시 더 좋게 작성" 요청
2차 팀장 의견: 여전히 별로임 → "훨씬 더 좋게" 요청
3차: 결과가 비슷해 담당자가 처음부터 직접 다시 씀</div>
      <div class="sample good"><span class="sl">예시 · 조정 지점을 기록한 피드백 로그</span>회차 | 받은 피드백 | 빠진 것 | 조정 지점 | 바꾼 내용 | 결과
1 | 요점이 안 보임 | 답할 질문 | 프롬프트 | 첫 줄에 "증액 여부 판단" 명시 | 판단이 첫 문단으로 이동
2 | 근거 수치가 틀림 | 계산 방식 | 기능 선택 | 증감률을 Code Execution으로 계산 | 원자료와 수치 일치 확인
3 | 어조가 딱딱함 | 어조 제약 | 지시문 | "내부 보고는 간결한 평서문" 추가 | 수정 요청 없이 통과</div>

      <h4>한 번에 하나씩 바꾸기</h4>
      <ul>
        <li>한 회차에는 조정 지점 하나만 바꾸고 이전 결과와 나란히 비교함. 무엇이 효과를 냈는지 알 수 있음</li>
        <li>프롬프트 전체를 새로 쓰면 잘 되던 부분까지 잃고 원인도 알 수 없게 됨(PART 02의 표적 수정과 같은 원리)</li>
        <li>같은 요청을 여러 번 돌려 마음에 드는 것을 고르는 방식은 조정이 아님. 다음 회차에 남는 것이 없음</li>
      </ul>
      <h4>반복을 멈출 때</h4>
      <ul>
        <li>추가 회차의 변화가 단어 몇 개 수준으로 줄어들면 반복이 수렴한 것임. 남은 부분은 직접 편집하는 편이 빠름</li>
        <li>고객 제안서처럼 위험이 큰 외부 산출물에서 개선이 멈추면 동료나 전문가의 사람 검토로 넘김. 프롬프트로 만들 수 없는 판단이 필요하다는 신호임(PART 03 결과 검증)</li>
      </ul>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"효과가 확인된 수정의 보존",
     html:`<div class="callout term"><b>용어 카드</b> · <b>수정 보존(capture)</b>: 효과가 확인된 수정을 그 대화 안에만 두지 않고 설정(프로젝트 지시문, Skill, 지식 베이스)으로 옮겨, 다음 실행과 다른 담당자에게도 자동으로 적용되게 하는 것. 설정으로 옮기는 행위를 승격(promote)이라고 부름.</div>
      <ul>
        <li>대화 안에서만 고친 수정은 그 대화가 끝나면 다시 쓰이지 않음</li>
        <li>매주, 그리고 그 일을 맡는 모든 사람이 같은 수정을 다시 찾아내야 함</li>
        <li>설정으로 한 번 옮기면 매번 드는 비용이 한 번 드는 비용으로 바뀜</li>
      </ul>

      <h4>대화에만 둔 수정과 설정으로 옮긴 수정</h4>
      <div class="tbl"><table>
        <tr><th>구분</th><th>대화 안에서만 고침</th><th>설정으로 옮김</th></tr>
        <tr><td>다음 주 같은 작업</td><td>담당자가 기억해서 다시 말해야 함</td><td>새 대화에도 자동 적용</td></tr>
        <tr><td>다른 담당자가 맡을 때</td><td>수정 내용을 모름</td><td>같은 Project를 쓰면 그대로 적용</td></tr>
        <tr><td>깜빡했을 때의 결과</td><td>같은 오류가 다시 나감</td><td>설정을 바꾸기 전까지 유지됨</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>가운데 열은 사람의 기억에, 오른쪽 열은 설정에 의존함. 판정 질문은 하나임. 이 수정이 다음에도, 다른 사람에게도 다시 필요한가? 그렇다면 설정에 속함.</p>

      <h4>사례: 테스트 계정 제외</h4>
      <ul>
        <li>상황: 앱 마케팅팀 담당자가 Project에서 월간 회원 지표 보고서를 만듦. 매달 대화 중에 내부 테스트 계정을 집계에서 빼라고 말로 상기시킴</li>
        <li>사고: 담당자가 휴가 간 사이 동료가 같은 보고서를 대신 작성함. 동료는 이 수정을 몰랐고, 테스트 계정이 포함된 회원 수가 경영진 보고서로 나감</li>
        <li>원인: 효과 있는 수정이 한 사람의 대화 습관에만 존재했음</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 매달 대화에서 하던 말</span>참고로 이번에도 테스트 계정은 빼고 집계할 것.</div>
      <div class="sample good"><span class="sl">예시 · 프로젝트 지시문에 추가한 규칙</span>회원 수 집계 규칙
- 이메일 도메인이 @test.example인 계정과 계정명이 "qa_"로 시작하는 계정은 모든 지표에서 제외함.
- 제외한 계정 수를 표 아래에 "테스트 계정 n개 제외"로 표시함.
- 제외 기준에 해당하는지 애매한 계정은 집계에 넣지 말고 별도 목록으로 보여 줌.</div>

      <h4>Memory와 설정의 차이</h4>
      <ul>
        <li>Memory: 대화 사이에 반복되는 사실·선호를 이어 주는 기능. 반복 패턴을 스스로 잡아낼 수도 있음</li>
        <li>한계: 공식 강좌는 Memory를 사용자별·최선 노력 수준의 기능으로 설명함. 매번, 그리고 동료의 대화에도 적용된다는 보장이 없음</li>
        <li>팀이 함께 지켜야 하거나 반드시 적용되어야 하는 수정 → 의도적으로 적어 둔 설정(프로젝트 지시문, Skill)에 둠</li>
        <li>수정의 성격에 따라 위치가 다름. 규칙은 지시문, 순서가 있는 절차는 Skill, 참고 자료는 지식 베이스(CH 3에서 자세히 다룸)</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"피드백 대응 판단 기준",
     html:`__MAP:fix__
      <p class="lead">피드백 문항은 "다음 요청을 어떻게 바꾸는가"와 "같은 수정을 어떻게 오래 유지하는가" 두 가지를 주로 물음.</p>
      <div class="flow">
        <span class="nd">① 결과 확인<small>피드백 수집</small></span><span class="ar">→</span>
        <span class="nd">② 이름 붙이기<small>무엇이 빠졌나</small></span><span class="ar">→</span>
        <span class="nd">③ 조정 지점 하나 수정<small>프롬프트·컨텍스트·설정</small></span><span class="ar">→</span>
        <span class="nd">④ 재실행·비교<small>이전 결과와 나란히</small></span><span class="ar">→</span>
        <span class="nd hot">⑤ 설정에 보존<small>다시 필요한 수정만</small></span>
      </div>
      <p class="howto"><b>읽는 법</b>화살표 = 한 회차의 진행 순서. ④에서 개선이 없으면 ②로 돌아가 다른 조정 지점을 고름. ⑤는 같은 수정이 다시 필요할 때만 수행함.</p>

      <h4>상황 → 선택 → 이유</h4>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>피드백이 "별로다" 수준으로만 옴</td><td>무엇이 달라야 하는지 되물어 구체화</td><td>막연한 반응을 그대로 전달하면 다음 결과가 바뀌지 않음</td></tr>
        <tr><td>피드백이 구체적임(결론이 너무 늦게 나옴 등)</td><td>해당 조정 지점 하나만 수정 후 비교</td><td>무엇이 효과였는지 확인할 수 있음</td></tr>
        <tr><td>같은 수작업 수정을 매주 반복함</td><td>프로젝트 지시문이나 Skill로 보존</td><td>매번 드는 비용이 한 번으로 줄어듦</td></tr>
        <tr><td>곧 다른 사람이 업무를 이어받음</td><td>수정을 설정에 반영</td><td>인수인계 메모는 Claude의 결과를 바꾸지 못함</td></tr>
        <tr><td>몇 회차째 변화가 미미함</td><td>반복 중단 후 직접 편집. 고위험 산출물이면 사람 검토</td><td>수렴 상태에서 추가 프롬프트는 시간만 씀</td></tr>
        <tr><td>좋아진 느낌만 있고 근거가 없음</td><td>이전 결과와 나란히 비교</td><td>비교 없이 확정하면 효과를 알 수 없음</td></tr>
      </table></div>

      <div class="callout">시험 포인트 · 반복되는 수정은 대화 밖 설정(프로젝트 지시문, Skill, 지식 베이스)에 남겨야 다음 실행과 다른 담당자에게 이어짐. 매주 손으로 고치기, 새 대화마다 다시 설명하기, 모델 교체는 수정 내용을 남기지 못함. 피드백이 막연하면 먼저 구체적인 지시로 바꿀 것.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>"더 좋게", "더 따뜻하게" 같은 막연한 형용사만 추가하는 선택지: 두 사람이 같은 뜻으로 읽지 못하는 지시는 결과를 일관되게 바꾸지 못함</li>
        <li>여러 버전을 대량으로 만들어 고르게 하는 선택지: 비교 자체는 유용하지만 다음 회차에 남는 조정이 없음</li>
        <li>인수인계 문서나 체크리스트만 만드는 선택지: 다시 사람의 기억에 의존함</li>
        <li>Memory가 알아서 배울 것이라고 기다리는 선택지: 최선 노력 수준이라 매번, 팀 전체에 적용된다는 보장이 없음</li>
        <li>피드백 한 번에 모델 등급부터 바꾸는 선택지: 어조·요점 문제의 원인은 지시와 맥락에 있음</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Weekly competitor briefing", ts:"7.2",
     q:`A sales enablement manager uses a Claude Project to produce a weekly competitor briefing for the sales team. Every week she moves the pricing changes to the top and deletes a general market-trends section that sellers say they never read. A colleague will take over the briefing next month. What is the MOST durable way to handle these edits?`,
     ko:`세일즈 지원 매니저가 Claude Project로 영업팀용 주간 경쟁사 브리핑을 만듦. 매주 가격 변동 내용을 맨 위로 옮기고, 영업 담당자들이 읽지 않는다고 한 일반 시장 동향 섹션을 삭제함. 다음 달부터 동료가 이 브리핑을 맡을 예정임. 이 편집을 처리하는 가장 오래 유지되는 방법은 무엇인가?`,
     opts:[
       {t:`Add the section order and the trends-section removal to the Project's instructions, then check the next briefing.`, ko:`섹션 순서와 동향 섹션 제외를 Project 지시문에 추가하고, 다음 브리핑으로 확인하기`, ok:true},
       {t:`Keep making both edits by hand and write a handover note so the colleague knows exactly what to change each week.`, ko:`두 편집을 계속 직접 하고, 동료가 매주 무엇을 고칠지 알도록 인수인계 메모 작성하기`},
       {t:`Switch the Project to a more capable model so that it can work out on its own what the sales team prefers to read.`, ko:`영업팀이 선호하는 내용을 스스로 파악하도록 Project의 모델을 더 역량 높은 모델로 바꾸기`},
       {t:`Leave it to Memory, which should pick up the pattern after a few more weeks of seeing the same edits being made.`, ko:`같은 편집을 몇 주 더 보면 패턴을 잡을 것이므로 Memory에 맡기기`}
     ],
     hint:`다음 달에는 다른 사람이 같은 작업을 함. 선택지마다 수정 내용이 어디에 남는지 비교할 것.`,
     explain:{good:`같은 수작업 수정이 매주 반복되고 담당자도 바뀌므로 이 수정은 다시 필요함. 프로젝트 지시문에 넣으면 누가 새 대화를 열어도 같은 순서와 범위가 적용됨. 다음 브리핑을 확인하는 것은 바꾼 설정이 의도대로 작동하는지 보는 단계임.`,
       wrongs:[`<b>B:</b> 인수인계 메모는 동료의 기억에 다시 의존함. 매주 드는 수작업 비용도 그대로 남음.`,
               `<b>C:</b> 모델 등급은 팀의 선호를 알려 주지 않음. 섹션 순서는 지시로 정해야 하는 규칙임.`,
               `<b>D:</b> Memory는 최선 노력 수준이라 패턴을 잡는다는 보장이 없음. 동료가 맡은 뒤에도 반드시 적용되어야 하는 수정은 의도적으로 적어 둔 설정에 둠.`]},
     principle:"원칙 ④ 반복 맥락의 설정화",
     why:{q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[{t:`같은 수정이 매주, 그리고 다음 달 맡을 동료에게도 다시 필요하다는 점`, ok:true},
             {t:`Project 지시문이 Claude의 대표 설정 기능이라는 점`},
             {t:`영업 담당자들이 시장 동향 섹션을 읽지 않는다는 점`},
             {t:`현재 모델이 경쟁사 가격 변동을 잘못 요약하고 있다는 점`}],
       explain:`판정 질문은 이 수정이 다시 필요한가임. 매주 반복되고 담당자도 바뀌므로 설정에 두어야 함.`}},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Donor newsletter feedback", ts:"7.2",
     q:`A nonprofit communications lead used Claude to draft the spring donor newsletter. The executive director read it and said only, "This doesn't sound like us." The lead plans to send Claude the same draft with the note, "Make it sound more like us." What should she do FIRST to make the next draft better?`,
     ko:`비영리단체 커뮤니케이션 리드가 Claude로 봄 후원자 소식지 초안을 작성함. 사무국장은 초안을 읽고 "단체다운 느낌이 아니다"라고만 말함. 리드는 같은 초안에 "단체다운 느낌이 나게 고칠 것"이라는 메모를 붙여 Claude에 보내려 함. 다음 초안을 낫게 만들기 위해 가장 먼저 해야 할 일은 무엇인가?`,
     opts:[
       {t:`Find out what sounds wrong to the director, then give Claude those specifics plus two past newsletters as voice examples.`, ko:`사무국장이 어떤 점을 어색하게 느꼈는지 확인한 뒤, 그 구체 내용과 과거 소식지 2개를 말투 예시로 Claude에 주기`, ok:true},
       {t:`Generate five fresh versions of the newsletter and let the director choose whichever one feels closest to the organization.`, ko:`소식지를 새로 5개 버전 만들어 사무국장이 단체와 가장 가까운 것을 고르게 하기`},
       {t:`Send the draft back with her note, adding that the result should be warmer, more authentic and more personal.`, ko:`메모에 더 따뜻하고, 더 진정성 있고, 더 개인적으로 써야 한다는 말을 덧붙여 초안을 다시 보내기`},
       {t:`Move the task to the most capable model, since matching an organization's voice needs deeper reasoning than drafting.`, ko:`단체의 말투를 맞추는 일은 초안 작성보다 깊은 추론이 필요하므로 가장 역량 높은 모델로 옮기기`}
     ],
     hint:`사무국장의 말에 무엇을 바꿀지가 담겨 있는지 볼 것. 담겨 있지 않다면 그 정보를 어디서 얻어야 하는지 생각할 것.`,
     explain:{good:`사무국장의 말은 반응일 뿐 무엇을 바꿀지 담고 있지 않음. 어떤 표현과 어조가 어긋났는지 확인해 구체적 제약으로 바꾸고 과거 소식지를 예시로 주면, Claude가 맞춰야 할 기준이 생김. 이 조치는 프롬프트와 로드된 컨텍스트라는 조정 지점을 직접 바꿈.`,
       wrongs:[`<b>B:</b> 어긋난 이유를 모르는 상태라 다섯 버전 모두 같은 문제를 가질 수 있음. 다음 회차에 남는 조정도 없음.`,
               `<b>C:</b> "더 따뜻하게", "더 진정성 있게"는 막연한 형용사임. 사람마다 다르게 읽히는 지시는 결과를 일관되게 바꾸지 못함.`,
               `<b>D:</b> 원인을 확인하기 전에 모델부터 바꾼 것임. 단체의 말투는 Claude가 볼 수 없는 정보라 모델 등급으로 채워지지 않음.`]},
     principle:"원칙 ① 요청의 구체화"}
  ]},

  /* ================= CH 3 · 7.3 업무 흐름 최적화 ================= */
  { id:"p7c3", ch:"CH 3", obj:"7.3", title:"업무 흐름의 효율·효과 개선", steps:[

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"마찰 신호와 최적화 백로그",
     html:`<p class="lead">문제 해결은 나빠진 결과를 고치는 일임. 최적화는 이미 돌아가는 업무 흐름을 덜 수고롭고 더 일관되게 만드는 일임. 공식 강좌가 제시하는 순서는 관찰, 반복 수고 찾기, 설정으로 옮기기, 효과 측정임.</p>
      <div class="flow">
        <span class="nd">① 관찰<small>한 사이클의 수작업 기록</small></span><span class="ar">→</span>
        <span class="nd">② 마찰 찾기<small>반복·수정·편차</small></span><span class="ar">→</span>
        <span class="nd">③ 설정으로 승격<small>지시문·지식·Skill</small></span><span class="ar">→</span>
        <span class="nd hot">④ 효과 측정<small>시간·수정 횟수·일관성</small></span>
      </div>
      <p class="howto"><b>읽는 법</b>화살표 = 진행 순서. ④에서 목표에 도달하면 멈추고, 미달이면 ②로 돌아가 다음 항목을 고름. 잘 된 변경은 그 업무 흐름을 쓰는 모든 사람에게 효과가 쌓임.</p>

      <div class="callout term"><b>용어 카드</b> · <b>마찰 신호(friction signals)</b>: 설정으로 없앨 수 있는 반복 수고가 있다는 신호. 반복(Repetition), 수정(Correction), 편차(Variance) 세 가지임.</div>
      <div class="tbl"><table>
        <tr><th>신호</th><th>현장 모습</th><th>의미</th><th>옮길 곳(출발점)</th></tr>
        <tr><td>반복</td><td>매번 같은 배경 설명이나 참고 자료를 대화에 붙여넣음</td><td>저장된 맥락이 없음</td><td>지식 베이스, 프로젝트 지시문</td></tr>
        <tr><td>수정</td><td>매 결과에서 같은 결함을 손으로 고침</td><td>결함을 막는 설정이 없음</td><td>프로젝트 지시문, Skill</td></tr>
        <tr><td>편차</td><td>같은 과업인데 사람마다 결과 형식·품질이 다름</td><td>공유 기준이 없음</td><td>공유 Skill, 지식 베이스</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>오른쪽 열은 출발점임. 정확한 위치는 다음 개념의 규칙·참고자료·절차 구분으로 정함.</p>

      <div class="callout term"><b>용어 카드</b> · <b>최적화 백로그(optimization backlog)</b>: 업무 한 사이클을 실제로 돌면서 손으로 하는 모든 단계와 걸린 시간을 적은 목록. 백로그는 처리할 개선 항목을 모아 둔 목록이라는 뜻임. 마찰이 눈에 보이지 않을 때 개선 후보를 찾는 방법임.</div>
      <div class="sample"><span class="sl">예시 · 주간 SNS 성과 보고의 최적화 백로그</span>단계 | 손으로 하는 일 | 시간 | 신호 | 옮길 곳
1 | 브랜드 표기 규칙 문서를 대화에 붙여넣음 | 3분 | 반복 | 지식 베이스
2 | 채널별 성과 CSV 파일 3개 업로드 | 3분 | 해당 없음 | 매주 바뀌는 입력이라 그대로 둠
3 | 증감률을 계산기로 다시 확인 | 8분 | 수정 | Code Execution으로 계산
4 | 결론 문단을 "다음 주 실행 항목" 형식으로 고쳐 씀 | 6분 | 수정 | 프로젝트 지시문
5 | 팀원 3명의 보고서 형식을 하나로 맞춤 | 15분 | 편차 | 공유 Skill</div>
      <ul>
        <li>매주 바뀌는 데이터(이번 주 성과 파일)는 설정으로 옮길 대상이 아님. 그 회차의 입력임</li>
        <li>백로그의 시간 열이 우선순위 근거가 됨. 위 예에서는 5번 형식 맞추기가 가장 큰 개선 후보임</li>
      </ul>

      <div class="callout term"><b>용어 카드</b> · <b>통합(consolidate)</b>: 따로 실행하던 단계 중 함께 처리할 수 있는 것을 하나의 요청이나 절차로 묶는 최적화 방식.</div>
      <ul>
        <li>예: 인스타그램·유튜브·블로그 요약을 세 번 따로 요청하던 것을 같은 형식의 표 하나로 한 번에 요청함</li>
        <li>서로 독립적이고 형식이 같은 단계가 통합 대상임. 앞 단계 결과를 확인해야 다음 단계로 갈 수 있는 작업은 묶지 않음(PART 02 작업 분해)</li>
      </ul>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"보관 위치 선택·신중한 승격·효과 측정",
     html:`<div class="callout term"><b>용어 카드</b> · <b>규칙·참고자료·절차 테스트(Rule / Reference / Procedure test)</b>: 수정이나 반복 패턴을 어느 설정에 둘지 정하는 기준. 규칙은 프로젝트 지시문, 참고자료는 지식 베이스, 순서가 있는 절차는 Skills에 둠.</div>
      <div class="tbl"><table>
        <tr><th>수정의 성격</th><th>업무 예</th><th>보관 위치</th><th>잘못 넣었을 때</th></tr>
        <tr><td>규칙: 항상 지킬 행동</td><td>수치마다 출처 표시, 고객 문서는 존댓말</td><td>프로젝트 지시문</td><td>지식 베이스 문서 속에 두면 사실 자료와 섞여 규칙으로 관리하기 어려움</td></tr>
        <tr><td>참고자료: 확인할 사실</td><td>브랜드 용어집, 가격표, 정책 원문</td><td>지식 베이스</td><td>지시문에 통째로 넣으면 모든 요청이 비대해짐</td></tr>
        <tr><td>절차: 순서가 있는 여러 단계</td><td>견적 비교표 작성 6단계, 보고서 서식화</td><td>Skill(계정 수준이라 여러 Project에서 재사용)</td><td>지시문 한 줄로 줄이면 단계가 사라짐</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>왼쪽 열의 질문에 먼저 답한 뒤 보관 위치를 고름. 보관 위치가 틀리면 수정이 설정에 들어가도 효과가 정착하지 않음.</p>
      <div class="sample good"><span class="sl">예시 · 고객사 분기 리포트 업무의 설정 배치</span>[프로젝트 지시문: 규칙]
- 모든 수치 옆에 출처 파일명을 괄호로 표시함.
- 데이터에 없는 수치는 "미확인"으로 표시하고 추정하지 않음.
[지식 베이스: 참고자료]
- 고객사 브랜드 용어집(최신 개정판). 구버전 파일은 삭제함.
- 계약 범위 요약본.
[Skill: 절차]
1. 업로드된 성과 데이터에서 지표 6개 추출
2. Code Execution으로 전 분기 대비 증감률 계산
3. 고객사 리포트 양식에 맞춰 표 작성
4. 하이라이트 3개와 다음 분기 제안 2개 작성</div>

      <h4>신중한 승격</h4>
      <ul>
        <li>설정을 바꾼 뒤 몇 사이클 동안은 기존 방식도 쓸 수 있게 두고 결과를 비교함</li>
        <li>이유: 모두가 쓰는 업무 흐름에 나쁜 변경이 들어가면 그 비용도 모든 사람에게 쌓임</li>
        <li>몇 번의 실행으로 이득이 확인되면 기본 방식으로 확정함</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 설정 변경 승격 계획</span>변경 내용: 주간 보고 서식 Skill 도입(팀원 3명 공통)
비교 기간: 3주. 기존 방식 문서는 삭제하지 않고 유지함
비교 지표: 팀장의 형식 맞추기 시간, 보고서당 수정 요청 횟수
확정 기준: 3주 평균 형식 맞추기 시간이 절반 이하이고 수정 요청이 늘지 않으면 기본 방식으로 확정함</div>

      <h4>측정 지표 고르기</h4>
      <div class="tbl"><table>
        <tr><th>지표</th><th>무엇을 세는가</th><th>잘 맞는 업무</th></tr>
        <tr><td>사이클당 절약 시간</td><td>한 회차를 끝내는 데 드는 시간</td><td>내부 초안, 반복 정리 업무</td></tr>
        <tr><td>수정 라운드 수</td><td>내보내기 전에 고친 횟수, 검토에서 나온 지적 수</td><td>결과 품질이 문제였던 업무</td></tr>
        <tr><td>사람 간 일관성</td><td>담당자별 결과 형식·품질의 차이</td><td>여러 사람이 같은 과업을 하는 업무, 고객용 보고서</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>시간이 가장 재기 쉬운 지표임. 그러나 고객용 보고서는 속도보다 일관성과 정확성이 중요함. 업무 목적에 맞는 행을 고름.</p>
      <ul>
        <li>지표를 먼저 정해야 멈출 시점도 정해짐. 목표에 도달한 뒤의 추가 튜닝은 그 자체로 반복 수고가 됨</li>
        <li>지표와 변경을 맞춤. 줄이려는 숫자를 직접 줄이는 변경을 고름</li>
      </ul>
      <h4>예시: 효율 점검 전후(주간 SNS 성과 보고, 개선 대상 단계만)</h4>
      <div class="tbl"><table>
        <tr><th>단계</th><th>변경 전</th><th>바꾼 것</th><th>변경 후</th></tr>
        <tr><td>표기 규칙 붙여넣기</td><td>3분</td><td>지식 베이스에 업로드</td><td>0분</td></tr>
        <tr><td>증감률 재확인</td><td>8분</td><td>Code Execution으로 계산</td><td>2분(계산식 확인)</td></tr>
        <tr><td>결론 문단 고쳐 쓰기</td><td>6분</td><td>지시문에 형식 규칙 추가</td><td>1분</td></tr>
        <tr><td>형식 맞추기</td><td>15분</td><td>공유 서식 Skill</td><td>4분</td></tr>
        <tr><td>합계</td><td>32분</td><td></td><td>7분</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>숫자는 설명을 위한 예시임. 변경 후에도 확인 시간이 0이 되지 않는 단계가 있음. 계산 결과와 최종 보고서는 계속 사람이 확인함.</p>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"최적화 판단 기준",
     html:`__MAP:fix__
      <p class="lead">최적화 문항은 업무 흐름의 불편을 보여 주고 어떤 변경이 가장 효과적인지 묻는 형태가 많음. 먼저 어떤 신호인지, 무엇을 줄이려는지를 찾음.</p>
      <h4>상황 → 선택 → 이유</h4>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>매번 같은 배경 자료를 붙여넣음</td><td>지식 베이스에 업로드</td><td>참고자료는 한 번 올려 두고 모든 대화에서 참조</td></tr>
        <tr><td>매번 같은 검증 행동을 요청함(출처 표시 등)</td><td>프로젝트 지시문에 규칙 추가</td><td>규칙은 누가 요청하지 않아도 모든 대화에 적용</td></tr>
        <tr><td>매번 같은 다단계 서식 작업을 손으로 함</td><td>Skill로 절차화</td><td>단계가 그대로 보존되고 여러 Project에서 재사용</td></tr>
        <tr><td>사람마다 결과 형식이 달라 검토자가 맞추느라 시간을 씀</td><td>공유 서식 Skill</td><td>측정 대상(맞추는 시간)의 원인인 편차를 직접 없앰</td></tr>
        <tr><td>어디서 시간이 드는지 아무도 모름</td><td>한 사이클을 돌며 최적화 백로그 작성</td><td>측정 없이 고른 변경은 추측임</td></tr>
        <tr><td>개인 실험에서 효과를 본 변경을 팀 전체에 적용하려 함</td><td>몇 사이클 병행 비교 후 확정</td><td>나쁜 변경의 비용도 모두에게 쌓임</td></tr>
        <tr><td>목표 지표에 이미 도달함</td><td>튜닝 중단</td><td>추가 튜닝 자체가 새로운 수고가 됨</td></tr>
      </table></div>

      <div class="callout">시험 포인트 · 최적화 문항에서는 지문이 줄이려는 지표를 먼저 찾을 것. 정답은 그 지표의 원인을 직접 없애는 변경임. 모델 등급 상향, 일정 앞당기기, 검토자 추가는 대개 그 지표를 직접 겨냥하지 않는 오답 선택지임.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>상위 모델로 올리면 모든 것이 나아진다는 선택지: 형식 편차나 반복 붙여넣기는 모델 등급과 관계없음</li>
        <li>검토자를 늘리거나 마감을 앞당기는 선택지: 수고를 옮기거나 나눌 뿐 원인은 남음</li>
        <li>절차를 지시문 한 줄로, 참고자료를 지시문에 통째로 넣는 선택지: 보관 위치가 틀려 최적화가 정착하지 않음</li>
        <li>효과를 확인하지 않고 팀 전체의 기본 설정을 바로 바꾸는 선택지</li>
        <li>측정 없이 빨라진 느낌으로 판단하거나, 목적과 맞지 않는 지표를 고르는 선택지(정확성이 목표인 고객용 보고서를 작성 시간으로만 평가)</li>
        <li>효율을 이유로 사람 검토 단계를 없애고 외부 발송까지 맡기는 선택지: 과잉 위임임(PART 04 업무 흐름 설계, PART 06 거버넌스)</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Grade newsletters", ts:"7.3",
     q:`Three teachers each use Claude to draft a weekly newsletter for parents of the same grade. Their drafts come back with different section orders, headings and levels of detail, so the grade coordinator spends about an hour every Friday reworking them into one consistent format. The school wants to cut that Friday hour. Which change MOST directly addresses this goal?`,
     ko:`교사 3명이 같은 학년 학부모에게 보낼 주간 가정통신문을 각자 Claude로 작성함. 초안마다 섹션 순서, 제목, 세부 수준이 달라 학년 부장이 매주 금요일 약 1시간을 들여 하나의 형식으로 다시 맞춤. 학교는 이 금요일 1시간을 줄이려 함. 이 목표를 가장 직접적으로 다루는 변경은 무엇인가?`,
     opts:[
       {t:`Set up one shared newsletter procedure as a Skill that all three teachers use when they draft.`, ko:`세 교사가 초안을 쓸 때 함께 쓰는 공유 가정통신문 작성 절차를 Skill로 만들기`, ok:true},
       {t:`Move all three teachers to the most capable model so that each of their drafts comes back at a higher quality.`, ko:`각 초안의 품질이 높아지도록 세 교사 모두 가장 역량 높은 모델로 옮기기`},
       {t:`Ask the teachers to send their drafts on Wednesday so the coordinator has two extra days to rework them.`, ko:`학년 부장이 다시 맞출 시간이 이틀 더 생기도록 교사들에게 수요일까지 초안을 보내게 하기`},
       {t:`Add a second staff member to review the newsletters with the coordinator so the reworking time is shared.`, ko:`다시 맞추는 시간을 나누도록 학년 부장과 함께 검토할 교직원 1명을 추가하기`}
     ],
     hint:`줄이려는 1시간이 어디서 생기는지 볼 것. 각 초안의 품질 문제인지, 초안끼리 서로 다른 문제인지 구분할 것.`,
     explain:{good:`금요일 1시간은 세 초안의 형식이 서로 달라서 생김. 세 교사가 같은 서식 절차를 쓰면 편차가 처음부터 생기지 않아 측정 대상인 맞추기 시간이 직접 줄어듦. 절차는 여러 단계로 이루어지므로 지시문 한 줄보다 Skill이 맞는 보관 위치임.`,
       wrongs:[`<b>B:</b> 각 초안의 품질이 올라가도 세 사람의 형식은 여전히 다를 수 있음. 줄이려는 지표를 직접 겨냥하지 않음.`,
               `<b>C:</b> 맞추기에 드는 시간은 그대로이고 작업 시점만 앞당겨짐.`,
               `<b>D:</b> 같은 수고를 두 사람이 나눌 뿐, 형식이 달라지는 원인은 그대로 남음.`]},
     principle:"원칙 ④ 반복 맥락의 설정화",
     why:{q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[{t:`줄이려는 시간이 세 초안 사이의 형식 차이에서 생긴다는 점`, ok:true},
             {t:`Skill이 최근 강조되는 Claude 기능이라는 점`},
             {t:`교사마다 글쓰기 실력이 서로 다르다는 점`},
             {t:`금요일에 학년 부장의 업무가 몰린다는 점`}],
       explain:`측정 대상은 형식 맞추기 시간이고, 그 원인은 사람 간 편차임. 편차를 없애는 공유 절차가 그 시간을 직접 줄임.`}},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Vendor report rollout", ts:"7.3",
     q:`An operations analyst changed her own vendor-report setup by adding a new template and a checking step. Over two weeks her report time fell from about 50 to 30 minutes. She now wants to put the same change into the shared Project that six colleagues use for their own vendor reports, starting tomorrow. What is the MOST appropriate approach?`,
     ko:`운영 분석가가 새 템플릿과 확인 단계를 추가해 자신의 공급업체 보고서 설정을 바꿈. 2주 동안 보고서 작성 시간이 약 50분에서 30분으로 줄었음. 이제 동료 6명이 각자의 공급업체 보고서에 쓰는 공유 Project에 같은 변경을 내일부터 적용하려 함. 가장 적절한 접근은 무엇인가?`,
     opts:[
       {t:`Pilot the change in the shared Project for a few cycles while the old setup stays available, then compare results.`, ko:`기존 설정을 쓸 수 있게 둔 채 공유 Project에서 몇 사이클 시험 운영한 뒤 결과를 비교하기`, ok:true},
       {t:`Update the shared Project tomorrow as planned, since her own two weeks of results already prove the time savings.`, ko:`본인의 2주 결과가 이미 시간 절감을 증명하므로 계획대로 내일 공유 Project를 바꾸기`},
       {t:`Post the template in the team chat and let each colleague decide whether and how to adopt it on their own.`, ko:`팀 채팅에 템플릿을 올리고 도입 여부와 방식을 동료 각자가 정하게 하기`},
       {t:`Keep tuning the template on her own reports until they take under 20 minutes before showing it to anyone.`, ko:`누구에게 보여 주기 전에 본인 보고서가 20분 안에 끝날 때까지 템플릿을 계속 다듬기`}
     ],
     hint:`한 사람에게 효과가 있었다는 사실과, 여러 사람이 쓰는 설정을 바꾸는 위험을 함께 볼 것.`,
     explain:{good:`한 사람의 2주 결과는 유망한 신호이지만, 다른 동료의 보고서에서도 효과가 있다는 증거는 아님. 모두가 쓰는 설정에 나쁜 변경이 들어가면 비용도 모두에게 쌓임. 기존 방식을 남겨 둔 채 몇 사이클 비교하고 이득이 확인되면 확정하는 것이 신중한 승격임.`,
       wrongs:[`<b>B:</b> 개인 결과만으로 팀 전체의 기본 설정을 바꿈. 문제가 있으면 여섯 명이 같은 문제를 동시에 겪음.`,
               `<b>C:</b> 각자 다르게 적용하면 사람마다 결과가 달라지는 편차가 새로 생김. 효과를 측정하기도 어려워짐.`,
               `<b>D:</b> 이미 의미 있는 개선이 있는데 목표 없이 튜닝을 이어감. 충분히 좋아진 뒤의 추가 튜닝은 그 자체로 수고임.`]},
     principle:"원칙 ④ 반복 맥락의 설정화"}
  ]},

  /* ================= 미니테스트 ================= */
  { id:"p7test", type:"test", title:"D7 미니테스트 · 6문항", questions:[

    { ts:"7.1", lvl:"기초",
      q:`A marketing manager opens a new chat and types, "Write a launch email for our new budgeting app." The very first reply is generic, describes features the app does not have, and addresses readers as new prospects, although the email is meant only for existing customers. What is the MOST likely cause?`,
      ko:`마케팅 매니저가 새 대화를 열고 "새 가계부 앱 출시 이메일 작성"이라고 입력함. 첫 응답부터 일반적인 내용이고, 앱에 없는 기능을 설명하며, 기존 고객 전용 이메일인데도 독자를 신규 잠재 고객으로 대함. 가장 가능성 높은 원인은 무엇인가?`,
      opts:[
        {t:`The request left out the audience, the real product facts and the limits the email had to meet.`, ko:`요청에 대상 독자, 실제 제품 정보, 이메일이 지켜야 할 제약이 빠져 있음`, ok:true},
        {t:`The conversation had already grown too long, so the instructions given earlier were compressed.`, ko:`대화가 이미 너무 길어져 앞서 준 지시가 압축되었음`},
        {t:`The model tier selected for the chat was too lightweight to write persuasive marketing copy.`, ko:`선택한 모델 등급이 설득력 있는 마케팅 문안을 쓰기에 너무 가벼웠음`},
        {t:`The knowledge files in the team's marketing Project are out of date and need to be replaced.`, ko:`팀 마케팅 Project의 지식 파일이 낡아 교체가 필요함`}
      ],
      explain:{good:`새 대화의 첫 응답부터 일반적이고 조건을 놓쳤으므로 증상 시점이 명세 부족을 가리킴. 대상 독자, 실제 기능 정보, 제약이 없어 Claude가 그럴듯한 내용으로 빈칸을 채운 것임. 없는 기능을 쓴 부분은 발송 전에 사실 확인도 필요함.`,
        wrongs:[`<b>B:</b> 새 대화의 첫 응답이므로 대화 길이로 인한 압축은 생길 수 없음.`,
                `<b>C:</b> 모델 등급은 세부를 충분히 준 뒤에도 같은 유형의 얕음이 반복될 때 의심함. 이 요청에는 세부 자체가 없음.`,
                `<b>D:</b> 지문에는 Project 설정에 관한 단서가 없음. 낡은 설정은 예전에 잘 되던 결과가 어긋날 때 의심하는 원인임.`]},
      principle:"원칙 ⑥ 원인 진단 후 수정" },

    { ts:"7.1", lvl:"실전", multi:2,
      q:`An operations analyst uses a Claude Project to prepare a monthly logistics cost summary. This month the summary quotes last quarter's carrier rates. New rates took effect two weeks ago, and she uploaded the new rate sheet to the Project's knowledge base next to the old one. She also notices that the totals are off by small amounts, which colleagues say happened in earlier months too. Which TWO actions address the causes of these problems? (Select TWO.)`,
      ko:`운영 분석가가 Claude Project로 월간 물류비 요약을 작성함. 이번 달 요약은 지난 분기 운송사 운임을 인용함. 새 운임은 2주 전에 적용되었고, 분석가는 새 운임표를 Project 지식 베이스의 기존 운임표 옆에 올려 둠. 또 합계가 조금씩 틀리는데, 동료들은 이전 달에도 그랬다고 함. 이 문제들의 원인을 해결하는 조치 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Remove the old rate sheet from the Project's knowledge base so that only the current rates remain.`, ko:`현재 운임만 남도록 Project 지식 베이스에서 이전 운임표를 삭제하기`, ok:true},
        {t:`Have the totals produced by running the calculation with Code Execution rather than written in text.`, ko:`합계를 문장으로 쓰게 하지 말고 Code Execution으로 계산을 실행해 내게 하기`, ok:true},
        {t:`Switch the whole Project to the most capable model so that both the rates and the totals become reliable.`, ko:`운임과 합계가 모두 믿을 만해지도록 Project 전체를 가장 역량 높은 모델로 바꾸기`},
        {t:`Paste the new carrier rates into the chat at the start of every monthly conversation from now on.`, ko:`앞으로 매달 대화를 시작할 때마다 새 운임을 대화에 붙여넣기`},
        {t:`Ask Claude to double-check its own totals and confirm they are correct before it gives the answer.`, ko:`답하기 전에 Claude가 자기 합계를 다시 점검하고 맞는지 확인하게 하기`}
      ],
      explain:{good:`운임 문제는 지식 베이스에 남은 구버전 파일 때문이므로 낡은 설정임. 새 파일만 추가하면 두 버전이 함께 남아 틀린 쪽이 인용될 수 있으므로 구버전을 지워야 함. 합계 오차는 매달 반복되는 같은 유형의 오류로, 계산을 문장 생성으로 처리한 기능 선택 오류임. 두 원인이 다르므로 각각 맞는 조치가 필요함.`,
        wrongs:[`<b>C:</b> 모델 등급은 낡은 파일도, 문장으로 쓴 계산의 불확실성도 해결하지 못함.`,
                `<b>D:</b> 매달 붙여넣기는 임시방편임. 구버전 파일이 남아 있으면 두 운임이 섞이고, 붙여넣는 수고도 매달 반복됨.`,
                `<b>E:</b> Claude의 자체 점검은 정확성의 근거가 아님. 계산은 실행해서 검증해야 함.`]},
      principle:"원칙 ⑥ 원인 진단 후 수정" },

    { ts:"7.2", lvl:"기초",
      q:`A customer support lead asked Claude to draft replies to refund complaints. The quality team reviewed a sample of the drafts and said they "could have been sent to anyone." Which change to the next request MOST directly responds to this feedback?`,
      ko:`고객지원 리드가 환불 불만에 대한 답장 초안을 Claude에 요청함. 품질팀은 초안 일부를 검토한 뒤 "누구에게 보내도 될 법한 답장"이라고 평가함. 이 피드백에 가장 직접적으로 대응하는 다음 요청 변경은 무엇인가?`,
      opts:[
        {t:`Include the refund rule that applies and the specific next step each customer should take.`, ko:`적용되는 환불 기준과 고객별로 취해야 할 구체적 다음 단계를 요청에 넣기`, ok:true},
        {t:`Ask Claude to make every reply sound much more personal, caring and warm toward the customer.`, ko:`모든 답장을 고객에게 훨씬 더 개인적이고 배려 있고 따뜻하게 쓰라고 요청하기`},
        {t:`Run the same request several more times and keep the draft that sounds the least generic overall.`, ko:`같은 요청을 여러 번 더 실행해 가장 덜 일반적으로 들리는 초안을 고르기`},
        {t:`Switch to a faster model so the team can produce more drafts and compare a wider range of them.`, ko:`더 많은 초안을 만들어 폭넓게 비교할 수 있도록 더 빠른 모델로 바꾸기`}
      ],
      explain:{good:`누구에게나 보낼 수 있다는 피드백은 고객별 구체 정보가 빠졌다는 뜻임. 적용할 환불 기준과 고객이 취할 다음 단계를 요청에 넣으면 프롬프트의 맥락이라는 조정 지점이 직접 바뀜.`,
        wrongs:[`<b>B:</b> 막연한 형용사만 더한 요청임. 무엇이 일반적인지 다루지 않아 결과가 일관되게 바뀌지 않음.`,
                `<b>C:</b> 같은 요청을 반복하면 같은 정보 부족이 모든 초안에 남음. 다음 회차에 남는 조정도 없음.`,
                `<b>D:</b> 초안 수를 늘려도 각 초안에 빠진 정보는 그대로임. 모델 속도는 이 피드백과 관계없음.`]},
      principle:"원칙 ① 요청의 구체화" },

    { ts:"7.2", lvl:"실전", multi:2,
      q:`A consultant has revised a client proposal with Claude over five rounds, and the last two rounds changed only a few words each. Separately, in every proposal this quarter she has had to replace "customers" with the client's preferred term, "members." Two teammates also write proposals for this client in the same Project. Which TWO actions are MOST appropriate now? (Select TWO.)`,
      ko:`컨설턴트가 고객 제안서를 Claude와 5회에 걸쳐 수정했고, 마지막 두 회차는 각각 단어 몇 개만 바뀜. 이와 별도로 이번 분기 모든 제안서에서 "customers"를 고객사가 선호하는 용어 "members"로 직접 바꿔야 했음. 같은 Project에서 팀원 2명도 이 고객사 제안서를 작성함. 지금 가장 적절한 조치 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Stop prompting on this proposal, finish the remaining edits herself and ask a colleague to review it.`, ko:`이 제안서에 대한 프롬프트 반복을 멈추고 남은 수정은 직접 마친 뒤 동료에게 검토를 요청하기`, ok:true},
        {t:`Add the client's terminology rule to the Project's instructions so every teammate's drafts follow it.`, ko:`모든 팀원의 초안에 적용되도록 고객사 용어 규칙을 Project 지시문에 추가하기`, ok:true},
        {t:`Run two more rounds asking Claude to make the proposal "significantly stronger" before sending it.`, ko:`보내기 전에 제안서를 "훨씬 더 강하게" 만들라는 요청으로 두 회차 더 진행하기`},
        {t:`Switch to a different model for a fresh perspective and restart the revision process from the beginning.`, ko:`새로운 관점을 위해 다른 모델로 바꾸고 수정 과정을 처음부터 다시 시작하기`},
        {t:`Tell Claude in this chat to remember the "members" preference so that future proposals use it.`, ko:`이후 제안서에 쓰이도록 이 대화에서 Claude에게 "members" 선호를 기억하라고 말하기`}
      ],
      explain:{good:`최근 회차의 변화가 단어 몇 개 수준이면 반복이 수렴한 상태임. 남은 부분은 직접 편집하고, 외부 고객에게 나가는 제안서이므로 사람 검토를 거침. 용어 교체는 매번, 그리고 팀원에게도 다시 필요한 수정이므로 프로젝트 지시문으로 보존해야 함.`,
        wrongs:[`<b>C:</b> 수렴한 상태에서 막연한 요구로 회차를 늘리면 시간만 듦.`,
                `<b>D:</b> 원인 없이 도구를 바꾸고 처음부터 다시 시작하면 잘 된 부분까지 잃음.`,
                `<b>E:</b> 대화 중에 기억하라고 말하는 것은 의도적으로 적어 둔 설정이 아님. Memory는 최선 노력 수준이라 매번, 그리고 팀원 2명의 초안에도 적용된다는 보장이 없음.`]},
      principle:"원칙 ④ 반복 맥락의 설정화" },

    { ts:"7.3", lvl:"기초",
      q:`A training coordinator creates course materials for new employees in a Claude Project. Before each request, she pastes the same 12-page company style guide into the chat. Where should the style guide be kept so that she no longer has to paste it?`,
      ko:`교육 담당자가 Claude Project에서 신입 직원용 교육 자료를 만듦. 요청할 때마다 같은 12쪽짜리 회사 스타일 가이드를 대화에 붙여넣음. 더는 붙여넣지 않아도 되게 하려면 스타일 가이드를 어디에 두어야 하는가?`,
      opts:[
        {t:`Upload it once as a file in the Project's knowledge base so it is available in every chat.`, ko:`모든 대화에서 쓸 수 있도록 Project 지식 베이스에 파일로 한 번 올리기`, ok:true},
        {t:`Paste the full text of the guide into the Project's instructions so it applies to every request.`, ko:`모든 요청에 적용되도록 가이드 전문을 Project 지시문에 붙여넣기`},
        {t:`Turn the guide into a Skill so that Claude follows it as a step-by-step formatting procedure.`, ko:`Claude가 단계별 서식 절차로 따르도록 가이드를 Skill로 만들기`},
        {t:`Rely on Memory to carry the guide's contents from one conversation to the next automatically.`, ko:`Memory가 가이드 내용을 대화에서 대화로 자동으로 이어 가게 맡기기`}
      ],
      explain:{good:`스타일 가이드는 Claude가 확인할 참고자료이므로 지식 베이스에 둠. 한 번 올려 두면 Project의 모든 대화에서 다시 올리지 않고 참조됨.`,
        wrongs:[`<b>B:</b> 12쪽 참고자료를 지시문에 통째로 넣으면 모든 요청이 비대해짐. 지시문은 행동 규칙을 두는 곳임.`,
                `<b>C:</b> Skill은 순서가 있는 절차를 담는 곳임. 참고 문서 전체는 절차가 아님.`,
                `<b>D:</b> Memory는 대화 사이에 사실·선호를 최선 노력 수준으로 이어 주는 기능임. 12쪽 문서의 내용을 정확히 유지하는 용도가 아님.`]},
      principle:"원칙 ④ 반복 맥락의 설정화" },

    { ts:"7.3", lvl:"실전", multi:2,
      q:`A communications team uses Claude to draft quarterly updates for investors. This quarter the team's goal is fewer errors and a more consistent structure; drafting speed is not a concern. A colleague has proposed a new shared drafting Skill and several ways to judge whether it works. Which TWO steps BEST fit the team's goal? (Select TWO.)`,
      ko:`커뮤니케이션팀이 Claude로 투자자용 분기 업데이트 초안을 작성함. 이번 분기 팀의 목표는 오류 감소와 구조 일관성이며 작성 속도는 고려 대상이 아님. 동료가 새 공유 작성 Skill과 그 효과를 판단할 몇 가지 방법을 제안함. 팀의 목표에 가장 맞는 단계 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Count the corrections raised in review for each update, before and after the change, and compare.`, ko:`변경 전후로 업데이트마다 검토에서 나온 수정 건수를 세어 비교하기`, ok:true},
        {t:`Try the Skill on the next two updates while the current process stays available, then decide.`, ko:`현재 방식을 쓸 수 있게 둔 채 다음 두 번의 업데이트에 Skill을 시험한 뒤 결정하기`, ok:true},
        {t:`Judge success mainly by how many minutes each draft takes compared with last quarter's drafts.`, ko:`지난 분기 초안과 비교해 초안 한 건에 걸리는 시간으로 성공을 판단하기`},
        {t:`Keep refining the Skill until a full draft takes under ten minutes, then make it the team default.`, ko:`초안 한 건이 10분 안에 끝날 때까지 Skill을 다듬은 뒤 팀 기본값으로 정하기`},
        {t:`Roll the Skill out to every department at once so the whole company benefits from it immediately.`, ko:`회사 전체가 바로 효과를 보도록 모든 부서에 Skill을 한꺼번에 적용하기`}
      ],
      explain:{good:`목표가 오류와 일관성이므로 검토에서 나온 수정 건수를 변경 전후로 비교하는 것이 맞는 지표임. 투자자용 문서처럼 영향이 큰 업무는 기존 방식을 남겨 둔 채 몇 회차 시험한 뒤 확정해야 나쁜 변경이 퍼지지 않음.`,
        wrongs:[`<b>C:</b> 시간은 재기 쉽지만 이번 목표와 맞지 않는 지표임.`,
                `<b>D:</b> 목표가 아닌 속도를 기준으로 튜닝을 이어감. 확정 전 효과 확인도 없음.`,
                `<b>E:</b> 한 팀에서도 검증되지 않은 변경을 전사에 적용함. 문제가 있으면 비용이 모든 부서에 쌓임.`]},
      principle:"원칙 ③ 요구에 맞는 선택" }
  ]}

]};
