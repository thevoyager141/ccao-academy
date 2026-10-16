/* PART 00: 시험 구조 분석 */
window.CCAO.p0 = { id:"p0", lessons:[

  /* ================= 0-1 시험 구조와 출제 비중 ================= */
  { id:"p0l1", ch:"0-1", title:"시험 구조와 출제 비중", steps:[
    {type:"concept", kind:"OVERVIEW · 시험 개요", h:"CCAO-F 시험 개요",
     html:`<p class="lead">CCAO-F(Claude Certified Associate – Foundations)는 Claude를 업무 도구로 쓰는 실무자의 판단력을 확인하는 시험임. 개발 지식은 묻지 않음.</p>
      <div class="tbl"><table>
        <tr><th>항목</th><th>내용</th></tr>
        <tr><td>문항</td><td>60문항 · 120분 (문항당 평균 2분)</td></tr>
        <tr><td>문항 형식</td><td>단일 정답(multiple-choice)과 복수 정답(multiple-response). 문항마다 고를 개수가 표시됨</td></tr>
        <tr><td>합격 기준</td><td>100~1000점 환산 점수 중 720점 이상</td></tr>
        <tr><td>성적표</td><td>합격 여부, 환산 점수, 영역별 정답 비율</td></tr>
        <tr><td>응시</td><td>Pearson VUE 온라인 감독 또는 시험장. 예약 변경·취소는 응시 24시간 전까지 가능</td></tr>
        <tr><td>응시료</td><td>$99. 결제 화면 금액에는 파트너 등급별 할인이 반영될 수 있음</td></tr>
        <tr><td>유효 기간</td><td>취득일부터 12개월. 기간 안에 Partner Academy의 무료 갱신 평가(감독 없음)를 마치면 갱신됨. 만료되면 정가로 전체 시험을 다시 봐야 함</td></tr>
        <tr><td>재응시</td><td>대기 기간: 첫 불합격 후 14일, 두 번째 불합격 후 30일, 세 번째 불합격 후 90일. 최근 12개월 동안 최대 4회 응시</td></tr>
      </table></div>
      <h4>시험이 상정하는 응시자</h4>
      <ul>
        <li>기획·마케팅·운영·교육·커뮤니케이션 등에서 Claude를 매일 업무에 쓰는 실무자</li>
        <li>Projects를 직접 구성하고, 결과물을 검토해 업무에 적용하는 수준</li>
        <li>개발이나 API 경험은 요구하지 않음</li>
      </ul>
      <h4>출제 범위 밖</h4>
      <ul>
        <li>API 연동, 에이전트 구축, 기업 단위 아키텍처 설계는 이 시험의 범위가 아님</li>
        <li>이런 일이 필요한 상황에서는 Claude Architect·Developer에게 넘기는 것(에스컬레이션)이 정답임. 이 경계를 알아보는 판단 자체가 출제됨</li>
      </ul>
      <div class="callout">시험 포인트 · 정답은 대부분 상황의 조건을 지키면서 일을 끝내는 선택임. 가장 강력한 기능이라는 사실만으로는 정답의 근거가 되지 않음. 지문의 조건(독자, 위험도, 정책, 분량)을 놓치지 않는 것이 점수를 결정함.</div>`},

    {type:"concept", kind:"BLUEPRINT · 출제 범위", h:"7개 영역과 이 사이트의 파트 구성",
     html:`<p class="lead">공식 가이드는 출제 영역 7개와 비중을 공개함. 이 사이트는 공식 Prep Course 모듈 순서대로 파트를 배치함.</p>
      <div class="tbl"><table>
        <tr><th>영역</th><th>내용</th><th>비중</th><th>약 문항</th><th>사이트 파트</th><th>Prep Course</th></tr>
        <tr><td>D3</td><td>제품 기능·모델 선택</td><td>12%</td><td>7</td><td>PART 01</td><td>모듈 1</td></tr>
        <tr><td>D1</td><td>프롬프트 작성·작업 실행</td><td>14%</td><td>8</td><td>PART 02</td><td>모듈 2</td></tr>
        <tr><td>D2</td><td>결과물 평가·검증</td><td>21%</td><td>13</td><td>PART 03</td><td>모듈 3</td></tr>
        <tr><td>D4</td><td>업무 흐름 통합·설계</td><td>16%</td><td>10</td><td>PART 04</td><td>모듈 4</td></tr>
        <tr><td>D5</td><td>설정·지식 관리</td><td>12%</td><td>7</td><td>PART 05</td><td>모듈 5</td></tr>
        <tr><td>D6</td><td>거버넌스·리스크·책임 있는 사용</td><td>15%</td><td>9</td><td>PART 06</td><td>모듈 6</td></tr>
        <tr><td>D7</td><td>문제 해결·최적화</td><td>10%</td><td>6</td><td>PART 07</td><td>모듈 7</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>약 문항 = 비중을 60문항에 배분한 근사치. 실제 시험은 회차마다 조금씩 다를 수 있음. 사이트 모의고사는 이 수대로 출제함.</p>
      <h4>업무 한 건의 흐름으로 본 7개 영역</h4>
      __MAP:__
      <ul>
        <li>7개 영역은 업무 한 건을 처리하는 순서로 이어짐: 도구를 고르고(D3), 환경을 갖추고(D5), 요청하고(D1), 결과를 확인하고(D2), 업무에 붙임(D4)</li>
        <li>결과가 나쁘면 원인을 찾아 앞 단계로 돌아감(D7). 데이터·정책·사람 판단(D6)은 모든 단계에 적용됨</li>
        <li>레슨마다 이 지도가 다시 나오며, 지금 배우는 단계가 강조 표시됨</li>
      </ul>
      <div class="callout">시험 포인트 · D2(21%)와 D4(16%), D6(15%)를 합하면 절반이 넘음. 결과 검증, 업무 적용, 데이터·정책 판단이 시험의 중심임.</div>`},

    {type:"concept", kind:"GUIDE · 학습 방법", h:"이 사이트와 공식 강좌 함께 쓰는 법",
     html:`<h4>공식 자료</h4>
      <div class="tbl"><table>
        <tr><th>자료</th><th>무엇</th><th>용도</th><th>시점</th></tr>
        <tr><td><a href="https://anthropic-partners.skilljar.com/path/claude-certified-associate-foundations" target="_blank" rel="noopener">CCAO-F Prep Course ↗</a></td><td>Partner Academy의 공식 시험 대비 강좌. 모듈 8개, 약 6.5시간. 화면을 넘기며 읽는 자료와 연습·퀴즈</td><td>각 영역의 공식 설명과 판단 틀 확인</td><td>파트 시작 전 해당 모듈 수강</td></tr>
        <tr><td><a href="https://anthropic-partners.skilljar.com/claude-certified-associate-foundations-certification" target="_blank" rel="noopener">시험 등록 페이지 ↗</a></td><td>시험 가이드 PDF와 결제·등록 화면</td><td>출제 범위 원문 확인, 응시 등록</td><td>학습 시작 시 가이드 확인, 응시일이 정해지면 등록</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>두 링크 모두 Partner Academy 안의 페이지임. 등록·결제 후 확인 안내에 따라 Pearson VUE 계정을 만들고, 그 계정에서 응시 날짜를 예약함.</p>
      <h4>레슨 구성</h4>
      <div class="flow">
        <span class="nd">① 파트 설명<small>영역 범위·출제 형태</small></span><span class="ar">→</span>
        <span class="nd">② 개념 설명<small>용어와 실제 예시</small></span><span class="ar">→</span>
        <span class="nd">③ 주제 설명<small>판단 기준 조립</small></span><span class="ar">→</span>
        <span class="nd hot">④ 연습 문제<small>실전 형식 영어 문항</small></span>
      </div>
      <p class="howto"><b>읽는 법</b>화살표 = 레슨 안의 진행 순서. ①은 파트 첫 레슨에만 있음.</p>
      <h4>문제 풀이 규칙</h4>
      <ul>
        <li>연습 문제를 틀리면 정답 대신 힌트가 먼저 나옴. 두 번째로 틀리면 해설이 공개되고 오답으로 기록됨</li>
        <li>일부 문항은 정답 뒤에 이유 확인 질문이 붙음. 이유를 맞혀야 다음으로 넘어감</li>
        <li>영어 지문은 상단 KO 버튼으로 번역 표시 방식을 바꿀 수 있음: 번역 끔 / 문장 클릭 / 항상 표시</li>
        <li>파트 끝 미니테스트는 힌트 없이 실전처럼 진행됨. 기준 정답률은 75%</li>
        <li>모의고사는 60문항·120분, 영역 비중대로 출제되며 번역이 잠김</li>
      </ul>
      <h4>기록</h4>
      <ul>
        <li>진도와 정답 기록은 이 브라우저에만 저장됨. 서버로 전송되지 않음</li>
        <li>다른 기기로 옮기려면 상단 ⇅ 버튼에서 기록 코드를 복사해 다른 기기에 붙여넣음</li>
      </ul>`}
  ]},

  /* ================= 0-2 판단 원칙과 문항 해부 ================= */
  { id:"p0l2", ch:"0-2", title:"판단 원칙 6과 문항 해부", steps:[
    {type:"concept", kind:"CONCEPT · 문항 구조", h:"한 문항의 구성 요소",
     html:`<p class="lead">CCAO-F 문항은 짧은 업무 상황 하나와 질문 하나로 구성됨. 정답을 가르는 정보는 대부분 상황 설명의 조건 부분에 있음.</p>
      <div class="sample"><span class="sl">예시 문항 · 구성 요소 표시</span>[역할·업무] A training coordinator uses Claude to turn a 40-page safety manual into a one-page checklist for new warehouse staff.
[결과·상황] The checklist reads well, but it lists five steps for forklift inspection while the manual describes seven.
[조건] The checklist will be posted on the warehouse floor next week.
[질문] What is the MOST appropriate next step?</div>
      <ul>
        <li><b>역할·업무</b>: 누가 무엇을 하는지. 독자와 용도가 여기서 드러남</li>
        <li><b>결과·상황</b>: Claude가 무엇을 냈고 무엇이 이상한지. 증상이 여기 있음</li>
        <li><b>조건</b>: 위험도, 공개 범위, 정책, 분량, 기한. 같은 증상도 조건에 따라 정답이 바뀜</li>
        <li><b>질문</b>: MOST, FIRST, BEST, LEAST 같은 지시어가 무엇을 고를지 정함(0-3 레슨에서 다룸)</li>
      </ul>
      <p>위 예시의 정답 방향은 매뉴얼 원문과 대조해 빠진 두 단계를 확인하고 보완하는 것임. 현장에 게시되는 안전 문서이므로 완전성 확인이 필수이기 때문임. 문장을 다듬거나 더 좋은 모델로 다시 만드는 선택지는 누락 문제를 해결하지 못함.</p>
      <div class="callout">시험 포인트 · 지문을 읽을 때 조건 문장에 표시를 해 둘 것. 게시 예정, 고객 발송, 정책 제한, 대량 처리 같은 조건이 어떤 판단 원칙을 적용할지를 정함.</div>`},

    {type:"concept", kind:"CONCEPT · 판단 원칙", h:"판단 원칙 6",
     html:`<p class="lead">7개 영역의 문항은 여섯 가지 판단 원칙으로 정리됨. 레슨의 모든 해설에 해당 원칙이 표시됨.</p>
      <div class="tbl"><table>
        <tr><th>원칙</th><th>내용</th><th>지문 신호</th><th>대표 오답</th></tr>
        <tr><td>① 요청의 구체화</td><td>목적·독자·맥락·형식·제약을 밝히고, 큰 작업은 단계로 나눔</td><td>결과가 일반적임, 엉뚱한 답, 여러 일을 한 번에 요청</td><td>모델만 바꾸기, "더 잘 쓸 것" 같은 막연한 요청 반복</td></tr>
        <tr><td>② 내보내기 전 검증</td><td>수치·인용·출처·이름은 원문과 대조한 뒤 사용</td><td>구체적 숫자, 조항 번호, 인용문, 외부 공개 예정</td><td>Claude의 확신이나 자체 평가 신뢰</td></tr>
        <tr><td>③ 요구에 맞는 선택</td><td>기능·모델·출력 형식을 품질·속도·비용·분량에 맞춤</td><td>대량 처리, 깊은 분석, 계산, 최신 정보</td><td>항상 최상위 모델, 계산을 글로 요청</td></tr>
        <tr><td>④ 반복 맥락의 설정화</td><td>매번 반복하는 지시·자료·형식을 Projects·Skills 같은 설정으로 옮기고 관리함</td><td>매주 같은 배경 붙여넣기, 사람마다 다른 결과</td><td>더 긴 프롬프트, 사람이 매번 수정</td></tr>
        <tr><td>⑤ 정책·사람 판단 우선</td><td>민감 데이터는 정책 확인 후 최소화·익명화. 영향이 크거나 되돌리기 어려우면 사람이 검토·승인</td><td>개인정보, 고객 자료, 외부 발송, 채용·평가</td><td>"저장하지 말 것" 지시로 대신하기, 무검토 자동화</td></tr>
        <tr><td>⑥ 원인 진단 후 수정</td><td>결과가 나쁘면 원인(명세 부족·긴 대화·도구 선택·낡은 설정)을 먼저 찾음</td><td>"예전엔 됐는데", 긴 대화 후반의 품질 저하</td><td>바로 최상위 모델, 처음부터 다시 쓰기, 포기</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>지문 신호 = 이 원칙이 적용되는 문항에서 자주 나오는 상황. 대표 오답 = 그 문항에서 자주 고르는 틀린 선택지.</p>
      <div class="callout">시험 포인트 · 오답 선택지는 대개 네 종류로 나뉨: 근거 없는 신뢰(확신 표현 믿기), 과잉 선택(가장 비싼 모델·모든 기능), 지시로 통제 대신하기("기억하지 말 것"), 회피(작업 포기). 각 유형이 어떤 판단 원칙에 어긋나는지 설명할 수 있으면, 남은 선택지를 지문의 조건에 비춰 비교하기 쉬워짐.</div>`},

    {type:"concept", kind:"TOPIC · 공식 샘플 분석", h:"공식 가이드 샘플 3문항의 공통 구조",
     html:`<p class="lead">공식 시험 가이드 8장에 예시 문항 3개가 실려 있음. 원문은 등록 페이지의 가이드 PDF에서 확인할 것. 아래는 구조 분석임.</p>
      <div class="tbl"><table>
        <tr><th>샘플</th><th>상황</th><th>정답 방향</th><th>지워지는 오답</th></tr>
        <tr><td>샘플 1 · D2</td><td>새 규정을 요약했더니 특정 조항 번호를 단정적으로 인용함. 컴플라이언스팀에 보낼 예정</td><td>인용된 조항을 공식 규정 원문과 대조</td><td>확신 표현 믿기, Claude에게 자체 확신도 묻기, 문체만 다듬기</td></tr>
        <tr><td>샘플 2 · D3</td><td>짧은 고객 답장 초안을 대량으로 만들어야 함. 깊은 추론보다 속도·비용이 중요</td><td>빠르고 저렴한 모델 선택</td><td>모든 건에 최상위 모델, 기능 전부 끄기, 다른 플랫폼으로 이동</td></tr>
        <tr><td>샘플 3 · D6</td><td>고객 이름·계좌번호가 든 스프레드시트를 분석하려 함. 정책상 규제 대상 개인정보 공유 제한</td><td>업로드 전 식별 정보 제거·익명화</td><td>내부 분석이라 그대로 업로드, 저장하지 말라고 지시, 분석 포기</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>지워지는 오답 열 = 공식 해설이 틀린 이유를 밝힌 선택지의 유형.</p>
      <h4>세 문항의 공통점</h4>
      <ul>
        <li>정답은 일을 멈추지 않으면서 조건을 지키는 조치임. 샘플 3의 "분석 포기", 샘플 2의 "다른 플랫폼으로 이동"처럼 문제를 피하는 선택지는 오답임</li>
        <li>Claude의 확신 표현이나 자체 평가는 근거가 되지 못함. Claude에게 "보관하지 말 것"이라고 지시하는 것도 정책이 요구하는 통제 수단이 되지 못함</li>
        <li>정답 선택지는 구체적인 행동을 담고 있음: 원문 대조, 모델 선택, 식별 정보 제거</li>
      </ul>
      <div class="callout">시험 포인트 · Claude의 자기 설명은 확인 수단이 아님. Claude에게 출처나 정확성을 다시 물어도 그 답 역시 같은 모델이 만든 내용임. 확인은 원문, 정책, 사람, 실제 계산 같은 Claude 바깥의 기준으로 함.</div>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Partnership press release", ts:"2.3",
     q:`A communications lead uses Claude to draft a press release about a new regional partnership. The draft includes a quote attributed to the partner company's CEO and says the partnership "will create 300 jobs in the region." Neither the quote nor the job figure appears in the briefing notes the lead uploaded. What is the MOST appropriate next step before the release goes to both companies for approval?`,
     ko:`커뮤니케이션 담당자가 Claude로 새 지역 파트너십 보도자료 초안을 작성함. 초안에는 파트너사 CEO의 발언으로 된 인용문과 "지역에 일자리 300개를 창출할 것"이라는 문장이 있음. 인용문과 일자리 수치 모두 담당자가 업로드한 브리핑 자료에는 없음. 보도자료를 양사 승인 절차에 넘기기 전에 가장 적절한 다음 조치는 무엇인가?`,
     opts:[
       {t:`Confirm the quote and the job figure with the partner company, and remove anything that cannot be confirmed.`, ko:`인용문과 일자리 수치를 파트너사에 확인하고, 확인되지 않는 내용은 삭제하기`, ok:true},
       {t:`Ask Claude which source the quote and the job figure came from, and keep both if it names a specific source.`, ko:`Claude에게 인용문과 수치의 출처를 묻고, 구체적인 출처를 대면 둘 다 유지하기`},
       {t:`Leave the content as drafted, because approvers at both companies will read the release before it is published anyway.`, ko:`어차피 양사 승인자가 발표 전에 읽으므로 초안 내용을 그대로 두기`},
       {t:`Regenerate the release with an instruction to sound more authoritative, so the quote reads naturally.`, ko:`더 권위 있게 들리도록 지시해 보도자료를 다시 생성하고 인용문이 자연스럽게 읽히게 하기`}
     ],
     hint:`업로드한 자료에 없는 구체적인 인용과 수치가 어디서 왔는지 생각할 것. 그리고 그 확인을 누구에게, 무엇으로 해야 하는지가 기준임.`,
     explain:{good:`제공한 자료에 없는 인용문과 구체적 수치는 Claude가 그럴듯하게 만들어 낸 내용일 수 있음. 외부에 공개되는 보도자료이므로 원출처(파트너사)에 확인하고, 확인되지 않는 내용은 빼야 함.`,
       wrongs:[`<b>B:</b> Claude가 출처를 말해도 그 답 자체가 지어낸 것일 수 있음. 확인은 Claude 바깥의 기준으로 해야 함.`,
               `<b>C:</b> 뒤 단계 승인자가 있다고 작성 단계의 검증 책임이 사라지지 않음. 승인자는 인용이 지어낸 것인지 알 수 없음.`,
               `<b>D:</b> 문체를 바꾸면 틀린 내용이 더 그럴듯해질 뿐 정확성 문제는 그대로임.`]},
     principle:"원칙 ② 내보내기 전 검증",
     why:{q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`업로드 자료에 없는 구체적 인용·수치는 지어낸 내용일 수 있고, 외부 공개 문서이므로 원출처 확인이 필요함`, ok:true},
         {t:`공식 가이드 샘플 1과 같은 유형의 문항이라서`},
         {t:`보도자료에는 인용문을 넣으면 안 된다는 업계 규칙이 있어서`},
         {t:`승인 절차가 있으면 작성자가 따로 확인할 필요가 없어서`}
       ],
       explain:`정답의 근거는 두 가지 조건의 결합임: 출처가 없는 구체 정보, 그리고 외부 공개.`}},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Conference feedback export", ts:"6.2",
     q:`An event planner wants Claude to find the main themes in attendee feedback from a conference. The export contains attendee names, email addresses, and free-text comments. Company policy allows customer data in Claude only after personal identifiers are removed. Which approach is MOST appropriate?`,
     ko:`행사 기획자가 Claude로 콘퍼런스 참석자 피드백의 주요 주제를 찾으려 함. 내보낸 파일에는 참석자 이름, 이메일 주소, 자유 서술 의견이 들어 있음. 회사 정책은 개인 식별 정보를 제거한 경우에만 고객 데이터를 Claude에 넣도록 허용함. 가장 적절한 방법은 무엇인가?`,
     opts:[
       {t:`Remove names, email addresses and any identifying details in the comments, then upload them for theme analysis.`, ko:`이름, 이메일 주소, 의견 속 식별 정보를 제거한 뒤 의견을 올려 주제를 분석하기`, ok:true},
       {t:`Upload the full export in Incognito mode so the conversation is kept out of chat history and memory.`, ko:`대화가 채팅 기록과 Memory에 남지 않도록 Incognito 모드에서 파일 전체를 올리기`},
       {t:`Upload the full export and include a clear instruction telling Claude to ignore all names and email addresses.`, ko:`파일 전체를 올리고 이름과 이메일 주소를 무시하라는 지시를 명확히 넣기`},
       {t:`Avoid using Claude for this and read every comment manually, since any customer data creates policy risk.`, ko:`고객 데이터는 모두 정책 위험이 있으므로 Claude를 쓰지 않고 의견을 전부 직접 읽기`}
     ],
     hint:`정책 문장이 허용하는 조건을 그대로 읽을 것. 기록을 남기지 않는 것과 데이터를 넣어도 되는 것은 서로 다른 문제임.`,
     explain:{good:`정책은 식별 정보를 제거한 뒤에만 사용을 허용함. 주제 분석에는 이름과 이메일이 필요 없으므로, 제거하고 올리면 정책을 지키면서 작업을 끝낼 수 있음. 자유 서술 의견에도 이름이나 소속이 적혀 있을 수 있으므로 함께 확인함.`,
       wrongs:[`<b>B:</b> Incognito 모드는 기록과 Memory에 남기지 않는 기능일 뿐, 식별 정보를 넣어도 되게 만들지 않음. 정책 위반은 그대로임.`,
               `<b>C:</b> 무시하라는 지시를 넣어도 식별 정보는 이미 Claude에 들어감. 지시는 정책이 요구하는 통제가 아님.`,
               `<b>D:</b> 식별 정보를 제거하면 정책 안에서 작업할 수 있으므로 작업 자체를 포기할 이유가 없음.`]},
     principle:"원칙 ⑤ 정책·사람 판단 우선"}
  ]},

  /* ================= 0-3 시험 영어 ================= */
  { id:"p0l3", ch:"0-3", title:"시험 영어: 질문 지시어와 핵심 어휘", steps:[
    {type:"concept", kind:"CONCEPT · 질문 지시어", h:"질문 지시어별 요구 사항",
     html:`<p class="lead">문항 끝 질문 문장의 지시어가 "무엇을 고르는가"를 정함. 지문을 읽기 전에 질문 문장부터 읽을 것.</p>
      <div class="tbl"><table>
        <tr><th>지시어</th><th>요구 사항</th><th>읽는 요령</th></tr>
        <tr><td>MOST appropriate</td><td>틀리지 않은 선택지가 여럿일 수 있고, 그중 조건에 가장 잘 맞는 것</td><td>이 상황의 조건에 맞는 행동을 고름. 일반론으로 맞는 말이라도 조건에 맞지 않으면 오답임</td></tr>
        <tr><td>BEST</td><td>MOST와 같은 성격. 여러 방법 중 가장 효과적인 것</td><td>비용·위험·정확성을 함께 비교</td></tr>
        <tr><td>FIRST</td><td>순서상 가장 먼저 할 일</td><td>좋은 조치라도 순서가 뒤면 오답. 대개 확인·진단이 먼저임</td></tr>
        <tr><td>NEXT</td><td>지문에 이미 한 일이 있고, 그다음 단계</td><td>이미 끝난 단계를 반복하는 선택지를 지움</td></tr>
        <tr><td>MOST likely cause</td><td>증상의 원인 진단</td><td>증상이 나타난 시점(처음부터인가, 대화 후반인가)을 확인</td></tr>
        <tr><td>LEAST appropriate</td><td>가장 부적절한 것 하나</td><td>나머지 셋이 모두 괜찮은 조치임. 질문을 반대로 읽는 실수가 많음</td></tr>
        <tr><td>NOT / EXCEPT</td><td>해당하지 않는 것</td><td>선택지마다 참·거짓을 표시한 뒤 거짓을 고름</td></tr>
        <tr><td>(Select TWO.)</td><td>정답 2개를 고름. 공식 가이드에 부분 점수 규정이 없으므로 둘 다 맞혀야 정답으로 가정할 것</td><td>하나만 확실하면 나머지 넷 중 가장 확실한 것을 고름</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>지시어는 대개 대문자로 표시됨. 대문자 단어를 보면 질문의 방향이 바뀌었다고 볼 것.</p>`},

    {type:"concept", kind:"CONCEPT · 조건 표현", h:"정답을 바꾸는 조건 표현",
     html:`<p class="lead">아래 표현은 지문에서 짧게 지나가지만 정답을 바꿈. 같은 증상이라도 이 표현이 있으면 검증·정책·사람 검토 쪽 선택지가 정답이 됨.</p>
      <div class="tbl"><table>
        <tr><th>표현</th><th>뜻</th><th>정답에 주는 영향</th></tr>
        <tr><td>before sharing / before it is sent</td><td>공유·발송 전</td><td>내보내기 전 검증 단계가 필요함</td></tr>
        <tr><td>client-facing / external / board</td><td>고객용 / 외부 / 이사회</td><td>독자의 중요도가 높음. 사람 검토 기준이 올라감</td></tr>
        <tr><td>regulated / compliance / audit</td><td>규제 대상 / 준법 / 감사</td><td>원문 대조와 사람 검토가 필수에 가까움</td></tr>
        <tr><td>policy restricts / only after</td><td>정책이 제한함 / ~한 뒤에만</td><td>정책이 허용하는 조건을 그대로 지키는 선택지가 정답</td></tr>
        <tr><td>personal data / identifiers / account numbers</td><td>개인정보 / 식별 정보 / 계좌번호</td><td>업로드 전 제거·익명화, 또는 승인 경로 확인</td></tr>
        <tr><td>high volume / hundreds of</td><td>대량 / 수백 건</td><td>속도·비용을 고려한 모델·방식 선택</td></tr>
        <tr><td>every week / each time / again</td><td>매주 / 매번 / 또다시</td><td>반복되는 맥락은 설정(Projects·Skills)으로 옮기는 방향</td></tr>
        <tr><td>long conversation / after many messages</td><td>긴 대화 / 많은 메시지 뒤</td><td>컨텍스트 창이 한도에 가까워졌을 가능성. 요약 후 새 대화로 시작하는 방향</td></tr>
        <tr><td>used to work / last month it was fine</td><td>예전엔 됐음</td><td>낡은 설정(지시문·지식·Skill) 점검</td></tr>
        <tr><td>exact / precise figures / totals</td><td>정확한 수치 / 합계</td><td>글로 추정하지 않고 Code Execution으로 계산</td></tr>
      </table></div>`},

    {type:"concept", kind:"CONCEPT · 핵심 어휘", h:"영역별 핵심 어휘",
     html:`<div class="tbl"><table>
        <tr><th>영역</th><th>어휘 (뜻)</th></tr>
        <tr><td>D1</td><td>role (역할) · context (배경 정보) · constraint (제약) · output format (출력 형식) · decompose (나누다) · iterate (반복 수정하다) · refine (다듬다) · scope (범위)</td></tr>
        <tr><td>D2</td><td>accurate (정확한) · complete (빠짐없는) · hallucination (지어낸 내용) · fabricated (지어낸) · cite / citation (인용하다 / 인용) · verify (확인하다) · ground (근거에 묶다) · audience (독자) · tone (어조) · inline (대화 안 답변)</td></tr>
        <tr><td>D3</td><td>feature (기능) · tier (등급) · latency (응답 지연) · throughput / volume (처리량 / 분량) · context window (한 번에 담을 수 있는 대화 분량) · restart (새로 시작) · summarize (요약) · persist (계속 유지)</td></tr>
        <tr><td>D4</td><td>requirement (요구사항) · use case (활용 사례) · stakeholder (이해관계자) · delegate (맡기다) · bottleneck (병목) · handoff (넘겨주기) · pilot (시범 운영) · deliverable (산출물)</td></tr>
        <tr><td>D5</td><td>instructions (지시문) · knowledge base (지식 베이스) · connector (외부 서비스 연결) · upload (올리다) · outdated / stale (낡은) · maintain (관리하다) · version (판)</td></tr>
        <tr><td>D6</td><td>sensitive (민감한) · confidential (기밀의) · anonymize / redact (익명화하다 / 가리다) · retain (보관하다) · approval (승인) · governance (관리 체계) · bias (편향) · disclose (공개하다) · escalate (상위 담당자에게 넘기다)</td></tr>
        <tr><td>D7</td><td>underperform (기대보다 못하다) · root cause (근본 원인) · diagnose (진단하다) · feedback (의견) · optimize (최적화하다) · bottleneck (병목) · recurring (반복되는)</td></tr>
      </table></div>
      <h4>지문 읽는 순서 (문항당 30초 목표)</h4>
      <ol>
        <li>질문 문장과 지시어(MOST, FIRST, LEAST, Select TWO)를 먼저 읽음</li>
        <li>지문에서 역할·목표, 증상, 조건(독자·정책·분량·위험도)을 찾음</li>
        <li>선택지에서 오답 네 유형(근거 없는 신뢰, 과잉 선택, 지시로 통제 대신하기, 회피)을 먼저 지움</li>
        <li>남은 선택지 중 조건을 모두 지키는 것을 고름</li>
      </ol>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 3: Social media drafts", ts:"6.1",
     q:`A marketing team plans to use Claude to draft weekly social media posts for the company's public accounts. Which of the following is the LEAST appropriate way to use Claude for this task?`,
     ko:`마케팅팀이 회사 공식 계정에 올릴 주간 소셜 미디어 게시물 초안을 Claude로 작성하려 함. 다음 중 이 작업에 Claude를 쓰는 방식으로 가장 부적절한 것은 무엇인가?`,
     opts:[
       {t:`Schedule Claude's drafts to publish automatically on the company accounts without anyone on the team reading them first.`, ko:`팀원 누구도 먼저 읽지 않은 채 Claude 초안이 회사 계정에 자동 게시되도록 예약하기`, ok:true},
       {t:`Keep the brand voice guide in a Project so that every weekly draft starts from the same tone and wording rules.`, ko:`브랜드 보이스 가이드를 Project에 두어 매주 초안이 같은 어조·표현 규칙에서 시작하게 하기`},
       {t:`Ask Claude for several versions of each post and choose the strongest one as the base for editing.`, ko:`게시물마다 여러 버전을 요청하고 가장 좋은 것을 골라 편집의 바탕으로 쓰기`},
       {t:`Have a team member check product names, prices, and dates in each post before it is scheduled.`, ko:`예약 전에 팀원이 게시물마다 제품명, 가격, 날짜를 확인하게 하기`}
     ],
     hint:`질문은 LEAST, 즉 가장 부적절한 것을 묻고 있음. 나머지 셋은 모두 괜찮은 방식임. 외부에 공개되는 글이라는 조건을 기준으로 볼 것.`,
     explain:{good:`회사 공식 계정의 게시물은 외부에 공개되고 게시 후에는 되돌리기 어려움. 아무도 읽지 않고 자동 게시하면 틀린 정보나 부적절한 표현을 막을 지점이 없음. 이 질문에서는 이것이 가장 부적절한 방식임.`,
       wrongs:[`<b>B:</b> 반복되는 어조 규칙을 Project에 두는 것은 권장되는 방식임. 부적절하지 않음.`,
               `<b>C:</b> 여러 초안을 비교해 가장 좋은 것을 고르는 것은 품질을 높이는 방식임. 부적절하지 않음.`,
               `<b>D:</b> 게시 전 사실 확인은 외부 공개 글에 필요한 검토임. 부적절하지 않음.`]},
     principle:"원칙 ⑤ 정책·사람 판단 우선"}
  ]}
]};
