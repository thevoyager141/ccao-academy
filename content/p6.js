/* PART 06: 거버넌스·리스크·책임 있는 사용 (D6, 15%) */
window.CCAO.p6 = { id:"p6", lessons:[

  /* ================= CH 1 · 6.1 적절·부적절 사용 사례 식별 ================= */
  { id:"p6c1", ch:"CH 1", obj:"6.1", title:"적절·부적절 사용 사례 식별", steps:[

    {type:"concept", kind:"PART BRIEFING · 파트 설명", h:"PART 06. 거버넌스·리스크·책임 있는 사용",
     html:`<p class="lead">이 파트는 업무 중에 내리는 세 가지 판단을 다룸. 이 일을 Claude에 맡겨도 되는가, 이 데이터를 넣어도 되는가, 이 결과를 이대로 써도 되는가.</p>
      <h4>파트 프로필</h4>
      <div class="tbl"><table>
        <tr><th>항목</th><th>내용</th></tr>
        <tr><td>출제 비중</td><td>15% (D2 21%, D4 16% 다음으로 큼)</td></tr>
        <tr><td>예상 문항 수</td><td>약 9문항 (60문항 기준)</td></tr>
        <tr><td>챕터 구성</td><td>CH 1~4. 공식 출제 목표 6.1~6.4와 하나씩 대응함</td></tr>
        <tr><td>공식 강좌</td><td>Prep Course 모듈 6 "Governance, Risk &amp; Responsible Use" (약 55분)</td></tr>
      </table></div>
      <h4>다루는 범위</h4>
      <ul>
        <li><b>CH 1 · 적절·부적절 사용 사례 식별 (6.1)</b>: 업무를 Claude에 맡길지, 사람 검토를 붙일지, 사람이 맡을지 4가지 기준으로 분류함</li>
        <li><b>CH 2 · 데이터 민감도·규제·개인정보 고려 (6.2)</b>: 업로드 전에 자료를 3등급으로 나누고, 식별 정보 제거와 Incognito 모드의 한계를 다룸</li>
        <li><b>CH 3 · 조직 AI 정책·거버넌스 준수 (6.3)</b>: 정책과 실제 사용 사이의 간극, Skill·커넥터(connector) 도입 심사, 정책 개정 후 재점검을 다룸</li>
        <li><b>CH 4 · AI 사용의 윤리적 영향 (6.4)</b>: 편향, 공정성, AI 활용 공개, 혼자 결정하기 어려운 윤리 문제의 처리를 다룸</li>
      </ul>
      <h4>출제 형태</h4>
      <ul>
        <li>지문: 직무(마케팅, HR, 운영, 교육 등), 하려는 업무, 걸리는 조건(고객 정보 포함, 정책 제한, 출처를 모르는 Skill, 마감 압박)을 제시함</li>
        <li>질문: "가장 적절한 조치는 무엇인가", "먼저 해야 할 일은 무엇인가" 형태가 대부분임</li>
        <li>정답 유형: 정책을 지키면서 업무를 끝내는 방법. 식별 정보 제거 후 진행, 승인 경로 확인, 담당자를 정한 사람 검토, 에스컬레이션(상위 담당자에게 넘김)</li>
        <li>오답 선택지 유형: 내부용이라 그대로 진행, Claude에게 "기억하지 말 것"이라고 지시, Incognito 모드로 해결, 동료 추천을 근거로 사용, 업무 전체 포기</li>
      </ul>
      <div class="callout">공식 가이드 샘플 3(고객 이름과 계좌번호가 든 스프레드시트로 추세 분석)이 이 영역 문항임. 정답은 정책에 맞게 식별 정보를 제거하거나 익명화한 뒤 올리는 것. 그대로 올리기, 보관하지 말라고 Claude에 지시하기, 분석 포기는 모두 오답임.</div>
      <h4>연계</h4>
      <ul>
        <li>공식 Prep Course 모듈 6 "Governance, Risk &amp; Responsible Use"의 내용을 정리함. 모듈의 기준 역량은 Diligence(결과를 확인하고 책임짐)와 Delegation(맡길 일과 사람이 할 일을 나눔)임</li>
        <li>업무 처리 흐름 지도에서는 특정 단계 하나가 아닌 아랫줄(전 단계 공통 기준)에 해당함. 도구 선택부터 업무 적용까지 모든 단계에 적용됨</li>
        <li>D2(사람 검토가 필요한 시점), D4(업무 단계별 위임), D5(Project·커넥터 설정)와 내용이 겹침. 이 파트는 그 판단에 "정책상 허용되는가"라는 조건을 더함</li>
      </ul>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"사용 사례 심사 4가지 기준",
     html:`<div class="callout term"><b>용어 카드</b> · <b>거버넌스(governance)</b>: 조직이 AI 사용의 범위·책임·절차를 정하고 지키는 체계. 공식 강좌는 이를 정책 문서 자체보다 실무자가 업무마다 내리는 판단으로 설명함.</div>
      <div class="callout term"><b>용어 카드</b> · <b>사용 사례(use case)</b>: Claude에 맡기려는 구체적인 업무 한 건. "보도자료 작성"처럼 넓게 잡지 않고, "승인된 제품 정보로 보도자료 초안 작성"처럼 자료·결과물·사용처까지 정함.</div>
      <h4>무엇이고 언제 하는가</h4>
      <ul>
        <li>사용 사례 심사는 화면이나 설정이 아닌 판단 절차임. 업무를 맡기기 전에 4가지 기준을 확인하고, 분류와 근거를 한 줄로 남김</li>
        <li>적용 시점: 새 업무에 Claude를 처음 쓸 때, 팀 업무 흐름에 Claude 단계를 넣을 때, 결과가 외부로 나가거나 사람에게 영향을 줄 때</li>
        <li>정책은 경계를 정함. 지금 이 업무가 그 경계 안에 있는지는 그 순간 실무자가 판단함</li>
      </ul>
      <h4>4가지 기준</h4>
      <div class="tbl"><table>
        <tr><th>기준</th><th>묻는 질문</th><th>예</th></tr>
        <tr><td>되돌릴 수 있는가<br><small>Reversibility</small></td><td>잘못되면 피해가 생기기 전에 발견하고 되돌릴 수 있는가</td><td>내부 회의 안건 초안은 되돌릴 수 있음. 이미 발송한 고객 공지는 되돌리기 어려움</td></tr>
        <tr><td>오류의 결과<br><small>Consequence of error</small></td><td>틀리면 누가 어떤 손해를 보는가</td><td>슬로건 아이디어 하나가 틀린 것과 계약 금액이 틀린 것은 손해의 크기가 다름</td></tr>
        <tr><td>사람의 창의성·공감 필요<br><small>Need for human creativity or empathy</small></td><td>관계, 배려, 사람의 판단 자체가 업무의 가치인가</td><td>고객 조의 메시지, 직원 면담 피드백</td></tr>
        <tr><td>책임 소재<br><small>Accountability</small></td><td>결과에 누가 답하는가. 그 사람이 AI 결과물에 대해서도 그 책임을 실제로 질 수 있는가</td><td>의료·법률 판정은 자격을 가진 전문가가 책임짐. 이 책임은 AI에 넘어가지 않음</td></tr>
      </table></div>
      <h4>기준은 함께 작동함</h4>
      <ul>
        <li>4기준은 하나만 걸리면 탈락하는 점검표가 아님. 네 가지를 모두 본 뒤 종합함</li>
        <li>위험이 낮고 되돌릴 수 있어도 공감이 업무의 가치면 사람이 맡음 (예: 고객 조의 메시지)</li>
        <li>오류의 결과가 커도 지정된 검토자가 사용 전에 승인하면 Claude를 쓸 수 있음 (예: 의사결정에 쓰이는 재무 요약)</li>
      </ul>
      <div class="callout term"><b>용어 카드</b> · <b>결정 기준(load-bearing criterion)</b>: 4기준 중 그 값이 바뀌면 분류도 바뀌는 기준. 분류 근거를 설명할 때 이 기준을 지목함.</div>
      <ul>
        <li>"위험해 보임"은 다른 사람에게 전달할 수 있는 근거가 아님</li>
        <li>"되돌릴 수 없는 결과이고, 전문가 책임은 넘길 수 없음"처럼 기준 이름으로 설명해야 분류를 방어할 수 있음</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · 사용 사례 심사 기록 (고객지원팀)</span>업무: 요금 이의 제기 고객에게 보낼 답변 초안 작성
되돌릴 수 있는가: 발송 전에는 가능, 발송 후에는 어려움
오류의 결과: 금액·약관 설명이 틀리면 회사가 그 설명을 책임짐
공감 필요: 어조 조정은 필요, 관계 자체가 업무의 가치는 아님
책임 소재: 고객에게 한 설명 → 회사(담당 상담원·팀장)
결정 기준: 책임 소재
분류: 사람 검토 조건부 사용
검토 단계: 담당 상담원이 계정 기록과 금액·날짜를 대조하고 어조를 조정한 뒤 발송 전에 승인</div>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"3분류와 검토 단계 정의",
     html:`<div class="callout term"><b>용어 카드</b> · <b>사용 사례 3분류</b>: 그대로 사용 가능(Fully appropriate), 사람 검토 조건부 사용(Appropriate with human review), 사용 부적절(Inappropriate). 분류마다 남기는 기록이 다름.</div>
      <div class="tbl"><table>
        <tr><th>분류</th><th>뜻</th><th>남길 기록</th><th>예</th></tr>
        <tr><td>그대로 사용 가능</td><td>평소 수준의 확인만 하고 맡김</td><td>분류 근거 한 줄</td><td>승인된 정책 문서로 사내 FAQ 초안 작성</td></tr>
        <tr><td>사람 검토 조건부 사용</td><td>Claude가 초안을 만들고, 정해진 사람이 사용 전에 확인함</td><td>검토 단계(누가·무엇을·언제)</td><td>지원자 이력서 요약으로 후보 압축. 선택은 채용 관리자가 하고 편향 점검을 붙임</td></tr>
        <tr><td>사용 부적절</td><td>Claude에 맡기지 않음</td><td>맡기지 않는 이유, 그 업무를 맡을 사람의 역할</td><td>최종 의료·법률 판정, 사람 검토 없는 최종 수급 자격 판정</td></tr>
      </table></div>
      <div class="callout term"><b>용어 카드</b> · <b>검토 단계(review gate)</b>: 사람 검토를 누가(책임 있는 역할), 무엇을(잡아야 할 구체적 위험), 언제(사용 전) 하는지 정한 것.</div>
      <ul>
        <li>가장 자주 틀리는 분류는 "사람 검토 조건부 사용"임. 라벨만 붙이고 검토 단계를 정하지 않는 경우가 많음</li>
        <li>누가: 시간이 되는 사람이 아닌, 결과에 책임 있는 역할</li>
        <li>무엇을: 사실 정확성, 공정성, 정책 준수처럼 잡아야 할 구체적 위험</li>
        <li>언제: 결과를 쓰거나 내보내기 전</li>
        <li>세 요소를 말할 수 없으면 아직 운영할 준비가 안 된 상태임</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 검토 단계 (정의되지 않음)</span>업무: 마케팅 인턴 지원서 요약으로 면접 후보 압축
분류: 사람 검토 조건부 사용
검토: 팀에서 시간이 되는 사람이 확인함</div>
      <div class="sample good"><span class="sl">예시 · 검토 단계 (정의됨)</span>업무: 마케팅 인턴 지원서 요약으로 면접 후보 압축
분류: 사람 검토 조건부 사용
누가: 채용 담당 매니저 (최종 선택 책임자)
무엇을: 요약이 지원서 원문과 일치하는지, 경력 공백·출신 학교 같은 조건으로 특정 집단이 불리하게 걸러지지 않았는지
언제: 압축 결과를 면접 일정에 반영하기 전</div>
      <h4>D4 위임 분류와의 관계</h4>
      <ul>
        <li>D4의 단계별 위임 분류(AI 적합·사람 유지·협업)와 같은 논리임. 3분류는 업무 한 건에, 위임 분류는 업무 안의 단계에 적용함</li>
        <li>검토자가 실제로 배치되지 않은 "AI 초안 + 사람 검토"는 사실상 자동화 단계임</li>
        <li>초안 품질이 좋다는 사실은 결정까지 맡길 근거가 되지 않음</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"사용 사례 분류 판단 규칙",
     html:`__MAP:gov__
      <p class="lead">사용 사례 판단은 지도 아랫줄의 공통 기준에 속함. 도구를 고르기 전에 한 번, 결과를 내보내기 전에 한 번 적용함.</p>
      <h4>상황 → 분류 → 이유</h4>
      <div class="tbl"><table>
        <tr><th>상황</th><th>분류</th><th>이유(결정 기준)</th></tr>
        <tr><td>승인된 자료로 만드는 사내용 초안, 언제든 수정 가능</td><td>그대로 사용 가능</td><td>4기준 모두 낮음</td></tr>
        <tr><td>고객에게 금액·약관을 설명하는 답변</td><td>사람 검토 조건부</td><td>책임 소재: 회사가 고객에게 한 설명을 책임짐</td></tr>
        <tr><td>사람을 평가·선발하는 데 쓰이는 요약</td><td>사람 검토 조건부 + 편향 점검</td><td>오류의 결과와 공정성. 선택 책임은 관리자에게 있음</td></tr>
        <tr><td>의사결정에 쓰이는 재무 요약</td><td>사람 검토 조건부</td><td>오류의 결과는 크지만 지정 검토자의 사전 승인으로 관리할 수 있음</td></tr>
        <tr><td>조의 메시지처럼 관계가 업무의 가치인 메시지</td><td>사람이 맡음</td><td>사람의 공감 필요</td></tr>
        <tr><td>최종 의료·법률 판정, 사람 검토 없는 최종 자격 판정</td><td>사용 부적절</td><td>되돌릴 수 없는 결과 + 넘길 수 없는 전문가 책임</td></tr>
      </table></div>
      <h4>분류 순서</h4>
      <div class="flow"><span class="nd">① 업무 정의<small>자료·결과물·사용처</small></span><span class="ar">→</span><span class="nd">② 4기준 확인<small>네 가지 모두</small></span><span class="ar">→</span><span class="nd">③ 결정 기준 지목<small>바뀌면 분류가 바뀌는 기준</small></span><span class="ar">→</span><span class="nd hot">④ 분류<small>3분류 중 하나</small></span><span class="ar">→</span><span class="nd">⑤ 기록<small>근거, 검토 단계</small></span></div>
      <p class="howto"><b>읽는 법</b>왼쪽에서 오른쪽 순서로 진행함. ③에서 결정 기준을 지목하지 못하면 ②로 돌아감. "사람 검토 조건부 사용"은 ⑤에서 누가·무엇을·언제를 채워야 완료됨.</p>
      <div class="callout">시험 포인트 · 검토 단계는 담당자, 확인 대상, 시점이 정해져야 실제로 작동함. "사람이 확인함"이라는 말만으로는 검토 단계가 아님. 결과가 커도 사전 승인 단계가 있으면 사용할 수 있고, 위험이 낮아도 공감이 업무의 가치면 사람이 맡음.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>4기준 중 하나만 보고 결론 내림 (예: "위험이 크니 무조건 금지")</li>
        <li>초안 품질이 좋다는 이유로 결정까지 맡김</li>
        <li>Claude에게 확신도를 매기게 하고 낮은 것만 사람이 봄. Claude의 자기 평가는 정확성의 근거가 아님</li>
        <li>결과를 보낸 뒤 일부를 확인하는 것을 검토 단계로 봄</li>
        <li>위험 요소가 하나 있다는 이유로 업무 전체를 포기함. 단계를 나누면 맡길 수 있는 부분이 남는 경우가 많음</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Donor letter rollout", ts:"6.1",
     q:`A nonprofit's communications lead plans to use Claude to draft 600 year-end thank-you letters. Each letter names the donor's gift amount and the program it funded. The team's proposal labels this use "appropriate with human review" and adds only that staff will check the letters. The executive director asks for one change before approving the rollout. What is the MOST appropriate change?`,
     ko:`비영리 단체의 커뮤니케이션 책임자가 연말 감사 편지 600통의 초안을 Claude로 작성하려 함. 편지마다 기부자의 후원 금액과 그 금액이 쓰인 사업이 들어감. 팀의 제안서는 이 업무를 "사람 검토 조건부 사용"으로 분류하고 "직원이 편지를 확인함"이라고만 적음. 사무국장은 도입 승인 전에 한 가지 수정을 요청함. 가장 적절한 수정은 무엇인가?`,
     opts:[
       {t:`Name the gift officer who checks each amount and program against donor records before any letter is mailed.`, ko:`발송 전에 후원 담당자가 편지마다 금액과 사업을 후원자 기록과 대조하도록 지정하기`, ok:true},
       {t:`Ask Claude to flag the letters it is least confident about so staff can focus their checks on those.`, ko:`Claude가 확신이 가장 낮은 편지를 표시하게 해 직원이 그 편지만 집중 확인하기`},
       {t:`Reclassify it as fully appropriate, since any wrong letter can be fixed later with a short correction note.`, ko:`틀린 편지는 나중에 정정 안내로 고칠 수 있으므로 그대로 사용 가능으로 재분류하기`},
       {t:`Have whichever volunteer is free review a random sample of mailed letters each week for errors.`, ko:`시간이 되는 자원봉사자가 매주 발송된 편지 중 일부를 무작위로 확인하기`}
     ],
     explain:{ good:`"사람 검토 조건부" 분류는 검토 단계가 정해져야 작동함. 정답은 누가(책임 있는 후원 담당자), 무엇을(금액·사업과 후원자 기록의 일치), 언제(발송 전)를 모두 정함. 후원 금액이 틀린 편지는 기관의 신뢰 문제로 이어지므로 사전 확인이 필요함.`,
       wrongs:[
         `<b>B:</b> Claude의 확신도는 정확성의 근거가 아님. 확신이 높은 편지에도 틀린 금액이 있을 수 있음.`,
         `<b>C:</b> 발송된 편지는 되돌리기 어렵고, 후원 금액에 대한 책임은 기관에 있음. 정정 안내는 사후 수습이며 검토가 아님.`,
         `<b>D:</b> 담당이 정해지지 않았고(시간 되는 사람), 시점이 발송 후이며, 일부만 확인함. 검토 단계의 세 요소를 하나도 갖추지 못함.`
       ]},
     hint:`제안서의 "직원이 확인함"이라는 문장에 무엇이 빠져 있는지 살펴볼 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`검토 담당·확인 대상·시점이 정해지지 않으면 사람 검토 분류가 실제로 작동하지 않음`, ok:true},
         {t:`공식 강좌가 권장하는 검토 형식이라서`},
         {t:`감사 편지는 공감이 필요한 업무라 Claude에 맡길 수 없어서`},
         {t:`편지 수가 600통으로 많아 오류 가능성이 높아서`}
       ],
       explain:`분류 라벨보다 검토 단계의 구체성이 이 문항을 결정함. 감사 편지는 사람이 검토하면 Claude를 써도 되는 업무이며, 문제는 검토 방식이 정해지지 않은 점임.` },
     principle:"원칙 ⑤ 정책·사람 판단 우선"},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Role elimination notices", ts:"6.1",
     q:`An HR coordinator at a manufacturing company must inform four employees that their positions are being eliminated. She wants to use Claude to save time. The package has two parts: a personal notification message from each employee's manager, and a factual FAQ about severance and benefits based on the approved HR policy. Which approach BEST fits this situation?`,
     ko:`제조 회사의 HR 담당자가 직원 4명에게 직무 폐지를 알려야 함. 시간을 줄이기 위해 Claude를 쓰려 함. 전달 자료는 두 가지임. 각 직원의 관리자가 보내는 개인 통보 메시지, 그리고 승인된 인사 정책에 근거한 퇴직금·복리후생 안내 FAQ. 이 상황에 가장 적합한 방식은 무엇인가?`,
     opts:[
       {t:`Have managers write their own messages, and use Claude to draft the benefits FAQ for HR to check.`, ko:`개인 메시지는 관리자가 직접 쓰고, 복리후생 FAQ는 Claude로 초안을 만들어 HR이 확인하기`, ok:true},
       {t:`Use Claude for both documents, because each message can still be edited before it reaches the employee.`, ko:`메시지는 전달 전에 수정할 수 있으므로 두 자료 모두 Claude로 작성하기`},
       {t:`Use Claude for both documents, and add a line to each message stating that it was drafted with AI.`, ko:`두 자료 모두 Claude로 작성하고, 메시지마다 AI로 초안을 만들었다는 문구 넣기`},
       {t:`Keep Claude out of every part of the process, including the FAQ, because the situation is emotionally sensitive.`, ko:`상황 전체가 정서적으로 민감하므로 FAQ를 포함한 모든 과정에서 Claude를 쓰지 않기`}
     ],
     explain:{ good:`개인 통보 메시지는 수정할 수 있어도 관계와 배려가 업무의 가치이므로 사람이 맡음. 이 업무의 결정 기준은 사람의 공감 필요임. 반면 FAQ는 승인된 정책을 바탕으로 한 사실 정리이므로 HR 확인을 거쳐 Claude를 쓸 수 있음.`,
       wrongs:[
         `<b>B:</b> 수정 가능성(되돌릴 수 있는가)만 보고 공감 필요 기준을 놓침. 4기준은 하나만 보고 판단하지 않음.`,
         `<b>C:</b> AI 활용 공개는 투명성을 다룰 뿐, 관리자가 직접 전해야 하는 메시지의 성격을 바꾸지 않음.`,
         `<b>D:</b> 업무를 나누지 않고 전체를 포기함. FAQ처럼 Claude가 도울 수 있는 부분까지 잃음.`
       ]},
     hint:`두 자료를 따로 놓고, 각 자료에서 업무의 가치가 무엇인지 비교할 것.`,
     principle:"원칙 ⑤ 정책·사람 판단 우선"}
  ]},

  /* ================= CH 2 · 6.2 데이터 민감도·규제·개인정보 고려 ================= */
  { id:"p6c2", ch:"CH 2", obj:"6.2", title:"데이터 민감도·규제·개인정보 고려", steps:[

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"데이터 민감도 3등급과 업로드 전 분류",
     html:`<div class="callout term"><b>용어 카드</b> · <b>데이터 민감도(data sensitivity)</b>: 자료가 밖으로 나가거나 잘못 쓰였을 때 생기는 피해의 크기. 공식 강좌는 Green·Yellow·Red 3등급으로 나눔.</div>
      <div class="callout term"><b>용어 카드</b> · <b>개인정보(PII)</b>: 특정 개인을 알아볼 수 있는 정보. 이름·연락처·계좌번호처럼 바로 식별되는 정보와, 직함·날짜·지역처럼 조합하면 식별되는 정보가 있음.</div>
      <h4>무엇이고 언제 하는가</h4>
      <ul>
        <li>업로드 전 분류는 기능이 아닌 습관임. 채팅, Project 지식 베이스(knowledge base), 커넥터, Code Execution(코드 실행) 등 어떤 기능에 자료를 넣기 전에 등급부터 정함</li>
        <li>Incognito 모드, 프로젝트 단위 Memory 같은 기능별 설정은 이 분류 결과에 따라 고르는 수단임</li>
        <li>유출을 막는 것은 기능 설정보다 업로드 전 분류임</li>
      </ul>
      <h4>3등급 분류표</h4>
      <div class="tbl"><table>
        <tr><th>등급</th><th>해당 자료</th><th>처리</th><th>사무실 예</th></tr>
        <tr><td><b>Green</b><br>사용 가능</td><td>공개 자료, 익명·집계 데이터, 넓은 공유가 승인된 내부 문서</td><td>별도 통제 없이 사용</td><td>배포된 보도자료, 홈페이지 상품 설명, 연령대별로 집계한 설문 결과</td></tr>
        <tr><td><b>Yellow</b><br>먼저 확인</td><td>외부 유출 금지 내부 문서, 이름·연락처가 든 자료, 미발표 거래·제품 관련 초안</td><td>정책 확인 후 사용. 과업에 필요 없는 식별 정보는 제거. 기록이 남지 않아야 하면 Incognito 모드 검토</td><td>사내 전용 가격 정책, 이벤트 응모자 명단, 출시 전 신제품 기획안</td></tr>
        <tr><td><b>Red</b><br>승인 경로 없으면 넣지 않음</td><td>규제 데이터(건강·금융·공공 관련), 계정 정보·비밀번호·API 키, 제3자에 대한 비밀유지 의무가 걸린 자료</td><td>승인된 진입점(entry point)과 절차부터 확인. 없으면 중단하고 관리자에게 에스컬레이션</td><td>고객 계좌번호, 직원 건강검진 결과, 파트너사와 비밀유지 계약을 맺은 자료, 광고 계정 비밀번호</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>위에서 아래로 갈수록 민감함. 오른쪽 열은 한국 사무실에서 자주 다루는 자료를 등급별로 배치한 예임.</p>
      <ul>
        <li>두 등급 사이에서 애매하면 확인될 때까지 더 민감한 쪽으로 취급함</li>
        <li>한 파일에 여러 등급의 정보가 섞여 있으면 가장 민감한 정보를 기준으로 취급함</li>
        <li>"내부 분석용"이라는 목적은 등급을 낮추지 않음. 등급은 자료의 내용으로 정해짐</li>
        <li>정책과 적용 법규의 해석은 법무·개인정보 담당 부서의 일임. 실무자는 분류하고, 애매하면 확인을 요청함</li>
      </ul>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"식별 정보 제거와 Incognito 모드의 한계",
     html:`<div class="callout term"><b>용어 카드</b> · <b>비식별화(redaction)</b>: 업로드 전에 과업에 필요 없는 식별 정보를 지우거나 "고객 1" 같은 대체값으로 바꾸는 것. <b>익명화(anonymization)</b>는 자료에서 개인을 다시 알아볼 수 없게 만드는 처리임.</div>
      <ul>
        <li>쓰는 때: 과업이 민감한 세부 정보 없이도 성립할 때. 문의 유형 추세 분석은 고객 이름이 없어도 결과가 같음</li>
        <li>방법: 이름은 "고객 1·2"로 바꾸고, 연락처·주문번호는 지우고, 정확한 날짜는 주 단위로 묶음</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 업로드 전 원본 (그대로 올리지 않음)</span>접수일,고객명,연락처,주문번호,문의 내용
2026-09-02,김민지,010-1234-5678,A-20931,배송이 5일째 지연됨
2026-09-03,박서준,010-9876-5432,A-21007,환불 처리 기간 문의
2026-09-03,이도윤,010-5555-0101,A-21012,배송 지연으로 주문 취소 요청</div>
      <div class="sample good"><span class="sl">예시 · 비식별화 후 (문의 유형 추세 분석용)</span>접수 주,고객,문의 유형,문의 내용
9월 1주,고객 1,배송,배송이 5일째 지연됨
9월 1주,고객 2,환불,환불 처리 기간 문의
9월 1주,고객 3,배송·취소,배송 지연으로 주문 취소 요청</div>
      <h4>비식별화의 실패 유형</h4>
      <div class="tbl"><table>
        <tr><th>유형</th><th>모습</th><th>문제</th><th>대응</th></tr>
        <tr><td>부분 비식별화</td><td>이름만 지우고 계좌번호, 드문 직함, 특정 날짜를 남김</td><td>작은 집단에서는 남은 단서의 조합으로 개인이 특정됨 (예: "부산지점 유일한 여성 팀장, 3월 14일 퇴사")</td><td>과업에 필요 없는 단서까지 일반화하거나 제거</td></tr>
        <tr><td>과업을 망가뜨리는 비식별화</td><td>사번별 급여 정정 내역 작성처럼 실제 값이 필요한 일에서 값을 지움</td><td>결과가 쓸모없어짐</td><td>비식별화 대신 승인 경로 확인. 없으면 사용 중단</td></tr>
      </table></div>
      <ul>
        <li>비식별화는 민감한 정보와 과업에 필요한 정보가 겹치지 않을 때 쓰는 도구임</li>
        <li>어떤 데이터든 안전하게 만들어 주는 방법은 아님</li>
      </ul>
      <h4>공식 가이드 샘플 3에 적용</h4>
      <p>상황: 고객 이름과 계좌번호가 든 스프레드시트로 추세를 분석하려 하고, 회사 정책은 규제 대상 개인정보의 공유를 제한함. 열마다 "추세 분석에 필요한가"를 묻고 처리를 정함.</p>
      <div class="tbl"><table>
        <tr><th>열</th><th>추세 분석에 필요한가</th><th>처리</th></tr>
        <tr><td>고객명</td><td>필요 없음</td><td>"고객 1·2"로 대체</td></tr>
        <tr><td>계좌번호</td><td>필요 없음</td><td>삭제</td></tr>
        <tr><td>가입 월</td><td>필요함</td><td>유지</td></tr>
        <tr><td>상품 유형</td><td>필요함</td><td>유지</td></tr>
        <tr><td>월 거래액</td><td>필요함</td><td>유지. 값이 너무 커서 소수 고객이 특정될 수 있으면 구간으로 묶음</td></tr>
        <tr><td>상세 주소</td><td>필요 없음</td><td>삭제. 지역 분석이 필요하면 시·도 단위로 일반화</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>가운데 열이 "필요 없음"이면 지우거나 대체함. "필요함"인 열도 그 값만으로 개인이 드러나지 않는지 한 번 더 확인함. 계좌번호 자체가 분석 대상이라면 비식별화 대신 승인 경로 확인으로 넘어감.</p>
      <h4>Incognito 모드가 통제하는 것과 하지 않는 것</h4>
      <div class="tbl"><table>
        <tr><th>통제함</th><th>통제하지 않음</th></tr>
        <tr><td>이 대화를 채팅 이력과 Memory에서 제외함</td><td>조직의 데이터 보존 정책은 그대로 적용됨. 조직 데이터 내보내기에 포함될 수 있음</td></tr>
        <tr><td>세션 사이에 남으면 안 되는 기밀 업무를 지금 처리할 수 있게 함</td><td>그 데이터를 여기에 넣어도 되는지는 판단하지 않음</td></tr>
      </table></div>
      <ul>
        <li>"Incognito 모드면 민감한 자료도 괜찮다"는 생각은 공식 강좌가 가장 흔한 오류로 꼽는 것임</li>
        <li>규제 데이터는 "여기서 허용되는가"를 "여기서 어떻게 다루는가"보다 먼저 확인함</li>
        <li>Claude에게 "이 내용은 기억하지 말 것"이라고 지시하는 것도 통제 수단이 아님 (공식 가이드 샘플 3의 오답 C)</li>
      </ul>
      <h4>함께 알아 둘 기능 사실</h4>
      <ul>
        <li>Memory: 세션 사이에 정보를 옮김. 민감 업무에서는 이 지속성이 원치 않는 결과가 될 수 있음</li>
        <li>프로젝트 단위 Memory: Project마다 Memory를 분리함. 고객 A의 정보가 고객 B의 대화에 섞이지 않음</li>
        <li>Code Execution: 업로드한 파일을 격리된 실행 환경(샌드박스)에서 처리함. 분석 전에 무엇을 올리는지 검토함</li>
        <li>진입점별 데이터 보존: 조직 설정에 따라 claude.ai의 진입점마다 다를 수 있음. 불확실하면 업로드 전에 관리자에게 물음</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"데이터 처리 판단 규칙",
     html:`__MAP:gov__
      <p class="lead">데이터 판단은 지도 아랫줄의 공통 기준에 속함. 특히 ② 환경 설정(지식 베이스 업로드, 커넥터 연결)과 ③ 요청 작성(파일 첨부) 직전에 적용함.</p>
      <h4>상황 → 선택 → 이유</h4>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>익명 설문 결과로 추세 분석 (Green)</td><td>그대로 사용. 정확한 집계는 Code Execution</td><td>통제가 필요 없음. 보고할 숫자는 계산으로 확인</td></tr>
        <tr><td>기밀이지만 규제 대상은 아닌 문서, 세션 사이에 남으면 안 됨 (Yellow)</td><td>정책 확인 후 Incognito 모드</td><td>지금 분석하되 Memory·이력에 남기지 않음. 정책상 그 진입점이 금지면 넣지 않음</td></tr>
        <tr><td>고객 이름·연락처가 든 자료로 유형 분석 (Yellow)</td><td>식별 정보를 제거·대체한 뒤 업로드</td><td>과업에 이름이 필요 없음</td></tr>
        <tr><td>실제 계좌번호·건강 정보가 반드시 필요한 일 (Red)</td><td>승인된 진입점·절차 확인. 없으면 중단하고 에스컬레이션</td><td>비식별화하면 과업이 성립하지 않고, Incognito 모드는 허용 여부를 바꾸지 못함</td></tr>
        <tr><td>지금 쓰는 진입점의 보존 방식을 모름</td><td>업로드 전 관리자에게 확인</td><td>보존 방식은 조직 설정마다 다름</td></tr>
        <tr><td>고객 A의 자료가 고객 B 작업에 섞이면 안 됨</td><td>고객별 Project + 프로젝트 단위 Memory</td><td>대화마다 조심하는 방식보다 구조적 분리가 확실함</td></tr>
      </table></div>
      <h4>업로드 전 처리 순서</h4>
      <div class="flow"><span class="nd">① 등급 분류<small>Green·Yellow·Red</small></span><span class="ar">→</span><span class="nd hot">② 허용 여부 확인<small>정책·승인 진입점</small></span><span class="ar">→</span><span class="nd">③ 필요한 정보만 남김<small>비식별화</small></span><span class="ar">→</span><span class="nd">④ 기능 설정<small>Incognito·Project 분리</small></span><span class="ar">→</span><span class="nd">⑤ 업로드·분석</span></div>
      <p class="howto"><b>읽는 법</b>왼쪽부터 순서대로 진행함. ④의 기능 설정은 ①·②를 통과한 자료에만 적용됨. ②에서 승인 경로가 없으면 ⑤로 가지 않고 관리자에게 넘김.</p>
      <div class="callout">시험 포인트 · 정답은 대개 정책을 지키면서 일을 끝내는 방법임. 식별 정보 제거로 해결되면 그것이 정답이고, 실제 값이 필요하면 승인 경로 확인이 정답임. 비식별화로 진행할 수 있는 상황에서 작업을 포기하는 선택지는 오답임.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>"내부 분석이라서" 그대로 업로드함</li>
        <li>Claude에게 "저장하지 말 것", "잊을 것"이라고 지시하고 업로드함</li>
        <li>Incognito 모드가 규제 데이터의 반입을 허용해 준다고 봄</li>
        <li>Incognito 모드가 조직의 데이터 보존까지 없앤다고 봄</li>
        <li>이름만 지우고 직함·날짜·번호를 남김</li>
        <li>개인 계정이나 승인되지 않은 도구로 옮겨 처리함</li>
        <li>업로드 후 대화를 삭제하면 된다고 봄</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Exit interview themes", ts:"6.2",
     q:`An HR analyst at a 40-person design studio wants Claude to find common themes in last year's exit interview notes. Company policy requires employee data to be de-identified before use with AI tools. She replaced every name with "Employee A," "Employee B," and so on, but kept job titles, team names, and exact departure dates. What should she do before uploading?`,
     ko:`직원 40명 규모 디자인 스튜디오의 HR 분석가가 작년 퇴사 면담 기록에서 공통 주제를 찾으려 함. 회사 정책은 직원 데이터를 AI 도구에 쓰기 전에 비식별화하도록 요구함. 분석가는 이름을 모두 "직원 A", "직원 B" 식으로 바꿨지만 직함, 팀 이름, 정확한 퇴사일은 그대로 둠. 업로드 전에 무엇을 해야 하는가?`,
     opts:[
       {t:`Generalize or remove titles, team names, and exact dates that could identify people in a small studio.`, ko:`소규모 조직에서 특정인을 가리킬 수 있는 직함·팀 이름·정확한 날짜를 일반화하거나 지우기`, ok:true},
       {t:`Upload the notes now, since every name has been replaced and the policy mainly concerns removing names.`, ko:`이름을 모두 바꿨고 정책은 주로 이름 제거에 관한 것이므로 지금 업로드하기`},
       {t:`Upload the notes in an Incognito chat so the content stays out of her chat history and Memory.`, ko:`채팅 이력과 Memory에 남지 않도록 Incognito 대화에서 업로드하기`},
       {t:`Tell Claude at the start of the chat to ignore any details that might identify a former employee.`, ko:`대화 시작 시 전 직원을 식별할 수 있는 세부 정보는 무시하라고 Claude에 지시하기`}
     ],
     explain:{ good:`이름만 지우고 다른 단서를 남기는 것은 부분 비식별화임. 직원 40명 규모에서는 "디자인팀 시니어, 3월 14일 퇴사" 같은 조합만으로 개인이 특정됨. 주제 분석에는 직함이나 정확한 날짜가 필요하지 않으므로 "디자이너", "1분기"처럼 일반화해도 결과에 손실이 없음.`,
       wrongs:[
         `<b>B:</b> 정책의 목적은 개인을 알아볼 수 없게 하는 것임. 이름 외 단서가 남아 있으면 정책을 충족하지 못함.`,
         `<b>C:</b> Incognito 모드는 이력과 Memory 저장 여부만 통제함. 식별 가능한 데이터를 넣어도 되게 만들지 않음.`,
         `<b>D:</b> Claude에 무시하라고 지시하는 것은 통제 수단이 아님. 식별 가능한 데이터는 이미 업로드된 상태임.`
       ]},
     hint:`작은 조직에서 "이름이 없음"과 "누구인지 알 수 없음"이 같은 뜻인지 생각할 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`소규모 조직에서는 직함·팀·날짜의 조합만으로 개인이 특정될 수 있음`, ok:true},
         {t:`개인정보는 무조건 모두 지우는 것이 정석이라서`},
         {t:`퇴사자 기록은 Red 등급이라 어떤 경우에도 업로드할 수 없어서`},
         {t:`이름이 없으면 Claude가 주제를 분석하지 못해서`}
       ],
       explain:`정답을 가르는 조건은 조직 규모와 남은 단서임. 이름 교체만으로는 식별 가능성이 사라지지 않으므로 추가 일반화가 필요함.` },
     principle:"원칙 ⑤ 정책·사람 판단 우선"},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Clinic feedback forms", ts:"6.2",
     q:`A marketing coordinator at a dermatology clinic wants Claude to summarize 200 patient feedback forms for a newsletter about service improvements. The forms include patient names, diagnoses, and treatment notes. She plans to use an Incognito chat so nothing is saved afterward. Her manager is out of the office today. What is the MOST appropriate action?`,
     ko:`피부과 의원의 마케팅 담당자가 서비스 개선을 다루는 소식지를 위해 환자 의견서 200건을 Claude로 요약하려 함. 의견서에는 환자 이름, 진단명, 진료 메모가 있음. 담당자는 끝난 뒤 아무것도 남지 않도록 Incognito 대화를 쓸 계획임. 담당자의 관리자는 오늘 부재 중임. 가장 적절한 조치는 무엇인가?`,
     opts:[
       {t:`Pause and confirm with her manager whether an approved route exists for patient health data before uploading.`, ko:`업로드를 보류하고, 환자 건강 정보에 승인된 경로가 있는지 관리자에게 확인하기`, ok:true},
       {t:`Go ahead in the Incognito chat, since the forms will be kept out of Memory and her chat history.`, ko:`Memory와 채팅 이력에 남지 않으므로 Incognito 대화에서 그대로 진행하기`},
       {t:`Upload the forms in a normal chat, then delete the conversation once the summary has been copied out.`, ko:`일반 대화에 올려 요약을 복사한 뒤 대화를 삭제하기`},
       {t:`Remove patient names but keep diagnoses and treatment notes, because the newsletter themes depend on them.`, ko:`소식지 주제에 필요하므로 이름만 지우고 진단명과 진료 메모는 남기기`}
     ],
     explain:{ good:`건강 정보는 Red 등급(규제 데이터)임. Red 등급은 어떤 기능 설정을 쓸지보다 승인된 진입점과 절차가 있는지를 먼저 확인함. 확인되지 않으면 중단하고 관리자에게 에스컬레이션함. 관리자 부재는 업로드를 서두를 이유가 되지 않음.`,
       wrongs:[
         `<b>B:</b> Incognito 모드는 저장 여부만 통제하며 규제 데이터를 넣어도 되는지는 판단하지 않음. 조직의 데이터 보존 정책도 그대로 적용됨.`,
         `<b>C:</b> 업로드 후 삭제는 사후 조치임. 허용되지 않은 데이터를 이미 넣은 뒤에는 되돌릴 수 없음.`,
         `<b>D:</b> 진단명과 진료 메모는 그 자체로 규제 대상 건강 정보임. 이름만 지우는 것은 부분 비식별화이며 승인 경로 확인을 대신하지 못함.`
       ]},
     hint:`이 자료가 어느 등급인지 먼저 정하고, 그 등급에서 가장 먼저 확인할 것이 무엇인지 떠올릴 것.`,
     principle:"원칙 ⑤ 정책·사람 판단 우선"}
  ]},

  /* ================= CH 3 · 6.3 조직 AI 정책·거버넌스 준수 ================= */
  { id:"p6c3", ch:"CH 3", obj:"6.3", title:"조직 AI 정책·거버넌스 준수", steps:[

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"정책과 실제 사용 사이의 간극",
     html:`<div class="callout term"><b>용어 카드</b> · <b>AI 사용 정책(AI policy)</b>: 조직이 정한 AI 도구 사용 규칙. 승인된 도구와 진입점, 넣을 수 있는 데이터, 반드시 거칠 검토 단계, 새 기능 도입 승인 절차 등을 담음.</div>
      <div class="callout term"><b>용어 카드</b> · <b>정책-실무 간극(diligence gap)</b>: 정책이 요구하는 것과 실제 사용 방식 사이의 차이. 공식 강좌는 위험이 바로 이 간극에서 생긴다고 설명함.</div>
      <h4>무엇이고 언제 문제가 되는가</h4>
      <ul>
        <li>정책 준수는 매일의 업무 결정에서 이어지는 습관임. 동의서에 한 번 서명하는 것으로 끝나지 않음</li>
        <li>누가 볼 때만 지키는 정책은 작동하지 않음</li>
        <li>이탈(drift)은 눈에 잘 띄지 않는 일상 결정에서 쌓임. 작은 파일 하나 올리기, Skill 하나 켜기, 마감 직전 검토 한 번 건너뛰기</li>
        <li>정책과 기능은 모두 바뀜. 지난 분기에 준수였던 방식이 정책 개정이나 새 기능 도입 후에는 아닐 수 있음</li>
      </ul>
      <h4>월간 사용 점검 사례: 발견 → 원인 → 수정</h4>
      <div class="tbl"><table>
        <tr><th>발견</th><th>원인</th><th>습관·구조 수준의 수정</th></tr>
        <tr><td>승인되지 않은 진입점에 고객 자료 업로드</td><td>어느 진입점이 승인되었는지 모름</td><td>승인된 진입점 목록을 팀 공지와 Project 안내문에 넣음</td></tr>
        <tr><td>출처 확인 없이 Skill 사용</td><td>확인 절차 자체가 없음</td><td>Project 설정 절차에 Skill 확인 단계를 추가함</td></tr>
        <tr><td>마감 압박으로 고객 보고서 검토 생략</td><td>검토를 건너뛸 수 있는 구조</td><td>고객 산출물에는 생략할 수 없는 검토 단계를 지정함</td></tr>
        <tr><td>로그인이 번거로워 개인 계정 사용</td><td>승인 경로의 불편함</td><td>IT와 함께 불편을 줄여 승인 경로를 가장 쉬운 기본값으로 만듦</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>왼쪽 열은 점검에서 보이는 현상, 가운데 열은 그 현상이 생긴 이유, 오른쪽 열은 같은 일이 반복되지 않게 하는 조치임. 수정은 사람이 아닌 원인을 겨냥함.</p>
      <ul>
        <li>악의 없는 이탈에는 개인 징계나 전면 금지보다 습관과 구조를 고치는 대응이 맞음</li>
        <li>개인 탓으로 돌리면 원인(불편한 경로, 없는 절차)이 남아 같은 일이 반복됨</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · 업무 전 정책 점검표 (마케팅팀)</span>□ 이 자료의 등급은 무엇인가? (Green / Yellow / Red)
□ 지금 쓰는 진입점이 이 등급의 자료에 승인되어 있는가?
□ 쓰려는 Skill·커넥터가 조직 승인 목록에 있는가?
□ 결과가 외부로 나가는가? 나간다면 누가 언제 검토하는가?
□ 최근 정책 개정 이후 이 업무 방식을 다시 확인했는가?</div>
      <h4>정책에 조항이 없을 때</h4>
      <ul>
        <li>정책이 모든 상황을 다루지는 않음. 조항이 없으면 혼자 해석해 진행하지 않음</li>
        <li>관리자나 거버넌스 담당에게 상황, 관련 조항, 불명확한 점을 정리해 묻고, 답이 올 때까지의 임시 조치를 함께 적음</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · 거버넌스 담당 문의 (사내 커뮤니케이션팀)</span>상황: 직원 인터뷰 녹취록을 Claude로 요약해 사보 기사 초안을 만들려 함
관련 정책: "고객 개인정보는 승인된 진입점에서만 사용" 조항만 있음
불명확한 점: 직원 인터뷰 녹취록(이름·부서·개인 경험 포함)도 이 조항과 같은 기준으로 다루는지
제안: 이름·부서를 지운 녹취록으로 요약하고, 실명은 기사 확정 단계에서 담당자가 직접 넣음
답변 전까지: 녹취록은 업로드하지 않음</div>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"Skill·커넥터 도입 심사와 최소 권한",
     html:`<div class="callout term"><b>용어 카드</b> · <b>Skills</b>: 특정 업무 유형을 정해진 절차대로 수행하게 하는 재사용 절차. 계정 수준에 있으며, 관련 있는 대화에서 Claude가 자동으로 사용함.</div>
      <h4>Skill을 소프트웨어처럼 다루는 이유</h4>
      <ul>
        <li>Skill은 실행되는 대화에서 Claude가 가진 접근 범위를 함께 가짐</li>
        <li>Code Execution을 통해 실제 동작을 수행할 수 있음</li>
        <li>그래서 출처를 모르는 Skill은 실제 위험임</li>
        <li>대응은 무조건 신뢰도, 일괄 금지도 아닌 매번 같은 방식으로 하는 신뢰 평가임</li>
      </ul>
      <div class="callout term"><b>용어 카드</b> · <b>Skill 신뢰 평가</b>: Skill을 켜기 전에 출처(Source), 접근 범위(Reach), 적합성(Appropriateness)을 확인하는 절차.</div>
      <div class="tbl"><table>
        <tr><th>항목</th><th>질문</th><th>확인 방법</th></tr>
        <tr><td>출처</td><td>누가 만들어 배포했는가</td><td>Anthropic 제공 Skill, 조직이 승인한 Skill이 위험이 낮은 출발점. 공개 포럼·개인 배포는 출처 확인이 필요함</td></tr>
        <tr><td>접근 범위</td><td>이 대화에서 무엇에 닿을 수 있는가. 그 범위가 업무에 비례하는가</td><td>켜기 전에 Skill 묶음의 내용(지시문, 의존 요소, 포함 파일)을 점검함</td></tr>
        <tr><td>적합성</td><td>이 업무에 맞는 도구인가. 필요 이상의 기능이 있지 않은가</td><td>서식 정리용 Skill의 지시문이 서식 범위를 크게 벗어나면 경고 신호임</td></tr>
      </table></div>
      <h4>평가 결과 3가지</h4>
      <ul>
        <li><b>사용(Enable)</b>: 세 항목 모두 통과. 예: Anthropic 제공 문서 서식 Skill</li>
        <li><b>상위 검토(Escalate)</b>: 유용하지만 출처가 불명확하거나 접근이 넓어 보임. 관리자·보안 담당 검토로 넘기고 혼자 켜지 않음</li>
        <li><b>사용 안 함(Decline)</b>: 접근이 명백히 과도하거나 출처를 확정할 수 없고, 검토를 거쳐도 바뀌지 않음</li>
      </ul>
      <h4>검증으로 착각하기 쉬운 것</h4>
      <ul>
        <li>사내 제작: 다른 팀의 Skill은 편의상 넓은 접근을 주었거나 옛 정책 기준으로 만들어졌을 수 있음. 게시한 팀에 무엇에 왜 접근하는지 묻고 현재 정책과 대조함</li>
        <li>동료 추천: 추천은 출처 검증이 아님</li>
        <li>켜고 지켜보기: 켜는 순간 접근이 생기므로 검토가 아님</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · Skill 신뢰 평가 기록 (홍보팀)</span>[1] 문서 서식 Skill
출처: Anthropic 제공
접근 범위: 대화에 첨부한 문서의 서식 변환
적합성: 보도자료 서식 정리에 맞음
결과: 사용

[2] 해시태그 추천 Skill
출처: 외부 블로그 배포 (작성자 확인 안 됨)
접근 범위: 지시문에 "연결된 메일함의 최근 메일을 참고할 것"이 있음
적합성: 해시태그 추천에 메일 열람은 필요 없음
결과: 상위 검토 (팀장·보안 담당에게 전달, 승인 전까지 사용하지 않음)</div>
      <div class="callout term"><b>용어 카드</b> · <b>최소 권한(least privilege)</b>: 일을 해낼 수 있는 가장 좁은 접근만 주고, 업무가 바뀌면 다시 검토하는 원칙. Skill뿐 아니라 커넥터처럼 데이터를 읽거나 동작하는 모든 기능에 적용함.</div>
      <ul>
        <li>커넥터는 모든 소스를 기본으로 연결하지 않음. 이 업무에 필요한 소스만 연결함</li>
        <li>커넥터 추가는 조직이 승인한 경로로 함. 화면에서 바로 보이는 커넥터 추가 메뉴가 조직 승인 목록 대신 공개 디렉터리로 연결될 수 있음(공식 강좌가 현장 관찰 사항으로 소개함). 비슷한 이름의 다른 커넥터를 연결할 위험이 있으므로 추가 전에 관리자에게 올바른 경로를 확인함</li>
        <li>API 연동이나 여러 부서가 매일 의존하는 도구 구축이 필요하면 Claude Architect·Developer에게 에스컬레이션함. Associate 범위 밖의 일임</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"정책 준수 판단 규칙",
     html:`__MAP:gov__
      <p class="lead">정책 준수는 지도 아랫줄의 공통 기준에 속함. ① 도구 선택(어떤 진입점·Skill을 쓸지)과 ② 환경 설정(커넥터·Project 설정) 단계에서 특히 자주 출제됨.</p>
      <h4>상황 → 선택 → 이유</h4>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>승인 경로가 불편해 개인 계정·비승인 도구로 우회하는 사례 발견</td><td>승인 경로의 불편을 줄여 준수 경로를 가장 쉬운 기본값으로 만듦</td><td>원인을 없애야 반복되지 않음. 징계·전면 금지는 원인을 남김</td></tr>
        <tr><td>월간 점검에서 악의 없는 이탈 여러 건</td><td>습관·구조 수준 수정(승인 진입점 안내, Skill 확인 단계, 생략 불가 검토 단계)</td><td>이탈은 일상 결정에서 쌓임</td></tr>
        <tr><td>정책 개정이나 새 기능 도입</td><td>기존 업무 흐름을 다시 점검</td><td>지난 분기의 준수가 지금의 준수를 보장하지 않음</td></tr>
        <tr><td>동료가 추천한 외부 Skill</td><td>조직 검토 전에는 켜지 않음</td><td>추천은 출처 검증이 아님</td></tr>
        <tr><td>다른 팀이 만든 사내 Skill</td><td>접근 대상과 이유를 게시 팀에 확인하고 현재 정책과 대조</td><td>사내 제작이 검증을 뜻하지 않음</td></tr>
        <tr><td>업무에 일부 자료만 필요한데 모든 소스를 연결하려 함</td><td>필요한 범위만 연결, 업무가 바뀌면 재검토</td><td>최소 권한</td></tr>
        <tr><td>여러 부서가 의존할 연동·도구 구축이 필요함</td><td>Architect·Developer에게 에스컬레이션</td><td>Associate 범위 밖</td></tr>
      </table></div>
      <h4>Skill 신뢰 평가 순서</h4>
      <div class="flow"><span class="nd">① 출처<small>누가 배포했는가</small></span><span class="ar">→</span><span class="nd">② 접근 범위<small>지시문·포함 파일 점검</small></span><span class="ar">→</span><span class="nd">③ 적합성<small>업무에 맞는 도구인가</small></span><span class="ar">→</span><span class="nd hot">④ 결과<small>사용 · 상위 검토 · 사용 안 함</small></span></div>
      <p class="howto"><b>읽는 법</b>세 항목을 모두 확인한 뒤 ④에서 결과를 정함. 한 항목이라도 확인되지 않으면 "상위 검토"로 감. 혼자 켜는 선택은 ①~③을 모두 통과했을 때만 해당함.</p>
      <div class="callout">시험 포인트 · 새 Skill이나 연결 도구는 조직의 확인 절차를 거친 뒤 사용함. 동료 추천, 사내 제작, 켜고 지켜보기, 한 번의 동의서 서명은 검증이나 통제로 인정되지 않음. 우회 사례는 사람을 탓하기보다 원인(불편한 승인 경로)을 고쳐야 반복되지 않음.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>정책 문서를 다시 배포하고 서명받는 것으로 해결했다고 봄</li>
        <li>위반자 징계나 팀 전체 사용 중단으로 대응함</li>
        <li>사내 Skill이라서 검증된 것으로 봄</li>
        <li>Skill이 업무에 필요한 접근만 쓸 것이라고 가정함</li>
        <li>일단 켜고 문제가 생기면 끔</li>
        <li>작년에 승인된 업무 흐름을 개정 정책과 대조하지 않고 그대로 유지함</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Personal account workaround", ts:"6.3",
     q:`An operations manager at a logistics company learns that several coordinators have been pasting customer shipment emails into personal Claude accounts. The approved company workspace requires a VPN and a separate login that times out every 30 minutes. The coordinators say they were trying to meet same-day deadlines. What is the MOST appropriate response?`,
     ko:`물류 회사의 운영 관리자가 코디네이터 여러 명이 고객 배송 이메일을 개인 Claude 계정에 붙여넣어 왔다는 사실을 알게 됨. 승인된 회사 업무 공간은 VPN과 별도 로그인이 필요하고 30분마다 로그인이 끊김. 코디네이터들은 당일 마감을 맞추려 했다고 말함. 가장 적절한 대응은 무엇인가?`,
     opts:[
       {t:`Work with IT to remove the login friction so the approved workspace becomes the easiest option, then brief the team.`, ko:`IT와 함께 로그인 불편을 없애 승인된 업무 공간을 가장 쉬운 선택지로 만든 뒤 팀에 안내하기`, ok:true},
       {t:`Issue formal warnings to the coordinators who used personal accounts so the rest of the team takes policy seriously.`, ko:`팀 전체가 정책을 진지하게 받아들이도록 개인 계정을 쓴 코디네이터에게 공식 경고하기`},
       {t:`Suspend Claude use for the whole team until a stricter policy can be drafted and signed by every coordinator.`, ko:`더 엄격한 정책을 만들어 모든 코디네이터의 서명을 받을 때까지 팀의 Claude 사용 중단하기`},
       {t:`Allow personal accounts for now, as long as coordinators delete customer names before pasting any email.`, ko:`이메일을 붙여넣기 전에 고객 이름을 지우는 조건으로 당분간 개인 계정 사용 허용하기`}
     ],
     explain:{ good:`정책과 실제 사용 사이의 간극(diligence gap)이며 원인은 승인 경로의 불편함임. 원인을 없애 승인 경로가 가장 쉬운 기본값이 되어야 우회가 반복되지 않음. 악의 없는 이탈에는 개인 처벌보다 구조와 습관을 고치는 대응이 맞음.`,
       wrongs:[
         `<b>B:</b> 개인 탓으로 돌리면 불편한 로그인이라는 원인이 그대로 남아 같은 우회가 다시 생김.`,
         `<b>C:</b> 전면 중단은 업무 자체를 막고 원인인 접근 불편은 해결하지 않음. 한 번의 서명도 일상 결정에서의 준수를 보장하지 않음.`,
         `<b>D:</b> 관리자가 정책 예외를 임의로 만듦. 고객 이메일에는 이름 외에도 주소·연락처 같은 정보가 남을 수 있음.`
       ]},
     hint:`코디네이터들이 왜 개인 계정을 썼는지, 그 이유가 그대로 남으면 어떻게 되는지 생각할 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`우회의 원인이 승인 경로의 불편함이므로 그 원인을 없애야 반복되지 않음`, ok:true},
         {t:`관리자는 IT 부서와 협의하는 것이 정석이라서`},
         {t:`개인 계정에서는 Claude의 기능이 더 적어서`},
         {t:`징계 권한은 인사팀에만 있어서`}
       ],
       explain:`지문의 "30분마다 끊기는 로그인"과 "당일 마감"이 원인을 알려 줌. 원인을 고치는 선택지가 정답임.` },
     principle:"원칙 ⑤ 정책·사람 판단 우선"},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Forum Skill with wide reach", ts:"6.3",
     q:`A content marketer finds a "Brand Voice Rewriter" Skill on a public forum, and a colleague says it works well. Reading the bundled instructions, she notices a line telling Claude to open every file in the connected Google Drive "for background context." Her team keeps Drive connected to Claude for daily work. What should she do?`,
     ko:`콘텐츠 마케터가 공개 포럼에서 "브랜드 어조 변환" Skill을 발견했고, 동료는 잘 작동한다고 말함. 묶음에 포함된 지시문을 읽어 보니 "배경 맥락을 위해" 연결된 Google Drive의 모든 파일을 열라는 문장이 있음. 팀은 일상 업무를 위해 Drive를 Claude에 연결해 둠. 마케터는 어떻게 해야 하는가?`,
     opts:[
       {t:`Leave it off and send it to her manager or security team for review, noting the broad file access line.`, ko:`켜지 않고, 넓은 파일 접근 문장을 적어 관리자나 보안 담당에게 검토 요청하기`, ok:true},
       {t:`Turn it on in a single test chat first and watch what it does before sharing it with the rest of the team.`, ko:`팀에 공유하기 전에 테스트 대화 하나에서 먼저 켜고 동작을 지켜보기`},
       {t:`Turn it on, since a colleague has already used it for weeks and reported no problems with the output.`, ko:`동료가 몇 주간 써 보고 결과물에 문제가 없었다고 했으므로 켜서 사용하기`},
       {t:`Delete the file-access line from the instructions herself, then turn the edited Skill on for her own work.`, ko:`지시문에서 파일 접근 문장을 직접 지운 뒤 수정한 Skill을 본인 업무에 켜기`}
     ],
     explain:{ good:`어조 변환에 Drive 전체 파일이 필요하지 않으므로 접근 범위가 업무에 비해 과도함. 출처도 공개 포럼이라 확인되지 않음. 유용해 보여도 출처가 불명확하거나 접근이 넓으면 혼자 켜지 않고 상위 검토로 넘김.`,
       wrongs:[
         `<b>B:</b> 테스트 대화에서도 Skill은 그 대화의 접근 범위로 실행됨. "켜고 지켜보기"는 검토가 아님.`,
         `<b>C:</b> 동료 추천은 출처 검증이 아님. 결과물에 문제가 없었다는 것이 접근이 안전하다는 뜻도 아님.`,
         `<b>D:</b> 지시문 한 줄을 고쳐도 출처는 여전히 확인되지 않았고, 다른 포함 파일이나 의존 요소에 같은 문제가 있을 수 있음. 조직 검토를 건너뜀.`
       ]},
     hint:`이 Skill이 하려는 일과 지시문이 요구하는 접근 범위를 나란히 놓고 비교할 것.`,
     principle:"원칙 ⑤ 정책·사람 판단 우선"}
  ]},

  /* ================= CH 4 · 6.4 AI 사용의 윤리적 영향 ================= */
  { id:"p6c4", ch:"CH 4", obj:"6.4", title:"AI 사용의 윤리적 영향", steps:[

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"편향·공정성·투명성",
     html:`<p class="lead">윤리 문제는 특별한 사건보다 평범한 결과물에서 더 자주 생김. 그래서 편향·공정성·투명성 점검은 별도 활동으로 미루지 않고 평소 결과 검토에 포함함.</p>
      <h4>평범한 결과물 속 윤리 위험</h4>
      <ul>
        <li>한 집단 쪽으로 기운 요약</li>
        <li>편향된 프레이밍으로 작성된 권고</li>
        <li>AI가 작성을 도운 문서를 전부 사람이 쓴 것처럼 제시</li>
      </ul>
      <div class="callout term"><b>용어 카드</b> · <b>편향(bias)</b>: 결과가 특정 집단이나 관점 쪽으로 체계적으로 기우는 것. 출처는 프롬프트, 질문의 프레이밍, 언어 생성의 기저 패턴 세 가지임.</div>
      <div class="callout term"><b>용어 카드</b> · <b>공정성(fairness)</b>: 같은 조건의 사람을 같은 기준으로 다루는 것. 채용, 성과 평가, 특정 집단 대상 커뮤니케이션처럼 사람에 관한 업무에서 점검함.</div>
      <ul>
        <li>위험이 커지는 때: 사람에 관한 업무에서, 개인에게 걸린 결과가 클수록 커짐</li>
        <li>예: 채용 후보 압축, 성과 평가 요약, 고객 집단별 메시지, 승진·보상 관련 자료</li>
      </ul>
      <h4>편향의 세 가지 출처</h4>
      <div class="tbl"><table>
        <tr><th>출처</th><th>모습</th><th>예</th><th>대응</th></tr>
        <tr><td>프롬프트</td><td>질문이 답을 미리 정함</td><td>"20대 고객의 충성도가 낮은 이유 5가지를 정리할 것"</td><td>전제 없는 질문으로 바꾸고 데이터로 확인</td></tr>
        <tr><td>프레이밍</td><td>같은 사실을 집단마다 다른 틀로 서술함</td><td>같은 행동을 한 사람은 "적극적", 다른 사람은 "공격적"으로 표현</td><td>모든 대상에 같은 기준·같은 표현 규칙 적용</td></tr>
        <tr><td>생성 패턴</td><td>언어 데이터에 있는 고정관념이 문장에 섞임</td><td>간호사는 "그녀", 엔지니어는 "그"로 지칭</td><td>결과를 집단별로 나란히 놓고 비교 검토</td></tr>
      </table></div>
      <div class="sample bad"><span class="sl">예시 · 프롬프트 (결론을 정해 둔 질문)</span>멤버십 데이터를 보고 20대 고객의 충성도가 낮은 이유 5가지를 정리할 것.</div>
      <div class="sample good"><span class="sl">예시 · 프롬프트 (전제 없는 질문)</span>멤버십 데이터를 보고 연령대별 재구매율과 이탈률을 비교할 것.
연령대 사이에 의미 있는 차이가 있는지부터 확인하고, 차이가 없으면 없다고 쓸 것.
차이가 있으면 데이터에서 확인되는 요인과 추정 요인을 구분해 표시할 것.</div>
      <div class="sample bad"><span class="sl">예시 · 평가 문장 (같은 행동, 다른 표현)</span>김 대리: 회의에서 공격적으로 자기 의견을 밀어붙임.
박 대리: 회의에서 적극적으로 의견을 개진함.</div>
      <div class="sample good"><span class="sl">예시 · 평가 문장 (같은 기준, 같은 표현)</span>김 대리: 회의에서 의견을 강하게 제시함 (근거: 3분기 기획 회의록 4건).
박 대리: 회의에서 의견을 강하게 제시함 (근거: 3분기 기획 회의록 3건).</div>
      <div class="callout term"><b>용어 카드</b> · <b>투명성(transparency)과 AI 활용 공개(disclosure)</b>: 결과물 작성에 AI가 관여한 사실을 필요한 상대에게 밝히는 것.</div>
      <ul>
        <li>공개 요구는 맥락과 정책에 따라 다름. 어떤 곳은 공개를 요구하고, 어떤 곳은 AI를 일상 도구로 봄</li>
        <li>요구 여부가 불확실하면 숨기기보다 공개하는 것이 책임 있는 기본값임</li>
        <li>AI가 쓴 글을 실제 인물의 말이나 경험담처럼 제시하는 것은 투명성에 어긋남</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · AI 활용 공개 문구 (외부 보고서 말미)</span>본 보고서의 자료 정리와 초안 작성에 AI 도구(Claude)를 활용함. 모든 수치와 인용은 담당자가 원자료와 대조해 확인함.</div>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"판단이 어려운 윤리 사례의 처리",
     html:`<p class="lead">규칙만으로 답이 나오지 않는 사례가 있음. 이때는 정해진 질문으로 추론하고, 그 추론을 기록으로 남김.</p>
      <div class="callout term"><b>용어 카드</b> · <b>윤리 사례 4질문</b>: 판단이 어려운 사례에서 짚는 질문. 누가 영향을 받는가, 무엇이 잘못될 수 있는가, 공정한 결과는 어떤 모습인가, 어떤 공개가 필요한가.</div>
      <ol>
        <li><b>누가 영향을 받는가</b>: 직접 대상(지원자, 고객, 직원)과 간접 대상(그 집단 전체)을 적음</li>
        <li><b>무엇이 잘못될 수 있는가</b>: 특정 집단의 체계적 불이익, 사실과 다른 평가, 오해를 부르는 표현</li>
        <li><b>공정한 결과는 어떤 모습인가</b>: 같은 조건이면 같은 결과, 같은 기준과 같은 표현</li>
        <li><b>어떤 공개가 필요한가</b>: 정책 요구, 상대가 알아야 판단할 수 있는 사실</li>
      </ol>
      <div class="sample good"><span class="sl">예시 · 윤리 검토 기록 (성과 평가 요약)</span>업무: 팀장 메모를 바탕으로 팀원 12명의 연간 평가 요약 초안 작성
영향 받는 사람: 팀원 12명 (보상·승진에 반영됨)
잘못될 수 있는 것: 같은 행동을 사람마다 다른 표현으로 요약함, 메모에 없는 평가가 추가됨
공정한 결과: 모든 요약이 메모와 일치하고 같은 기준·같은 표현 규칙을 따름
공개: 사내 정책에 따라 AI 지원 사실을 인사팀에 알림
분류: 사람 검토 조건부 사용 (팀장이 요약마다 메모와 대조한 뒤 확정)</div>
      <h4>평소 결과 검토에 넣는 윤리 항목</h4>
      <ul>
        <li>D2의 결과 검토(사실·완전성 확인)와 같은 시점에 함께 확인함</li>
        <li>별도 회의나 별도 담당자를 기다리지 않음</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · 결과 검토 점검표에 추가할 윤리 항목</span>□ 같은 조건의 대상에 같은 기준과 같은 표현을 썼는가?
□ 결과를 집단별(성별·연령대·지역 등)로 나란히 놓았을 때 한쪽으로 기울지 않았는가?
□ 원자료에 없는 평가나 단정이 추가되지 않았는가?
□ 이 결과를 받는 사람에게 AI 활용 사실을 밝혀야 하는가?</div>
      <h4>혼자 결정하지 않는 사안</h4>
      <ul>
        <li>영향 범위가 넓은 문제 (여러 부서, 많은 고객, 지역 주민 전체)</li>
        <li>잠재적 피해가 큰 문제 (채용, 자격, 보상처럼 개인의 기회에 영향)</li>
        <li>팀이 판단할 위치에 있지 않은 문제 (회사 차원의 기준이 필요한 경우)</li>
        <li>위 경우는 조직의 AI 거버넌스·윤리 담당 조직에 에스컬레이션함</li>
        <li>결론만 들고 가기보다 4질문으로 정리한 추론을 함께 가져가는 것이 유용함. 어떤 틀을 적용했고 어디서 판단이 막혔는지 보여 줌</li>
      </ul>
      <h4>자동 선별에서의 핵심 우려</h4>
      <ul>
        <li>탈락자를 아무도 보지 않는 자동 선별에서 가장 직접적인 우려는 편향임</li>
        <li>특정 집단이 체계적으로 불리해져도 아무도 발견하지 못함</li>
        <li>AI 활용 공개, 지식재산권, 책임 이전도 쟁점일 수 있으나, 이 구조에서 가장 먼저 다룰 문제는 감지되지 않는 편향임</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"윤리적 판단 규칙",
     html:`__MAP:gov__
      <p class="lead">윤리 판단은 지도 아랫줄의 공통 기준에 속하며, 특히 ④ 결과 검증·다듬기 단계에서 함께 점검함. 사실 확인과 같은 시점에 편향·공정성·공개를 확인함.</p>
      <h4>상황 → 선택 → 이유</h4>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>사람을 평가·선발하는 요약이나 순위</td><td>사람 검토 조건부 + 공정성 점검</td><td>개인에게 걸린 결과가 크고, 선택 책임은 관리자에게 있음</td></tr>
        <tr><td>탈락자를 아무도 보지 않는 자동 선별</td><td>탈락 결과도 사람이 표본 확인, 집단별 결과 비교</td><td>체계적 불이익이 감지되지 않는 것이 가장 직접적인 우려</td></tr>
        <tr><td>질문이 결론을 미리 정함</td><td>전제 없는 질문으로 바꾸고 데이터로 확인</td><td>프롬프트가 편향의 출처가 됨</td></tr>
        <tr><td>같은 내용을 대상마다 다른 표현으로 서술</td><td>모든 대상에 같은 기준·같은 표현 규칙 적용</td><td>프레이밍 편향은 단어 하나보다 기준의 문제임</td></tr>
        <tr><td>AI 활용 공개 여부가 불확실함</td><td>공개</td><td>불확실할 때의 책임 있는 기본값</td></tr>
        <tr><td>영향이 크거나 팀 권한을 벗어난 윤리 문제</td><td>4질문으로 추론을 기록해 거버넌스 담당 조직에 에스컬레이션</td><td>혼자 결정할 사안이 아님</td></tr>
      </table></div>
      <h4>윤리 사례 추론 순서</h4>
      <div class="flow"><span class="nd">① 영향 받는 사람<small>직접·간접 대상</small></span><span class="ar">→</span><span class="nd">② 잘못될 수 있는 것<small>불이익·오해</small></span><span class="ar">→</span><span class="nd">③ 공정한 결과<small>같은 기준</small></span><span class="ar">→</span><span class="nd">④ 필요한 공개<small>정책·상대</small></span><span class="ar">→</span><span class="nd hot">⑤ 기록 후 결정<small>또는 에스컬레이션</small></span></div>
      <p class="howto"><b>읽는 법</b>왼쪽부터 차례로 답함. ⑤에서 팀이 결정할 수 있는 사안이면 기록과 함께 결정하고, 영향이 크거나 권한 밖이면 같은 기록을 들고 거버넌스 담당에게 넘김.</p>
      <div class="callout">시험 포인트 · 사람에 관한 업무에서 정답은 사람이 결과를 확인하고 집단 간 차이를 점검하는 선택지임. 더 성능 좋은 모델, Claude의 자기 평가, 어조 수정은 사람의 편향 점검을 대신하지 못함. 공개 여부가 애매하면 공개하는 쪽이 정답임.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>편향 점검을 나중의 별도 윤리 검토로 미룸</li>
        <li>Claude에게 결과가 공정한지 묻고 그 답을 근거로 삼음</li>
        <li>더 성능 좋은 모델로 바꾸면 편향 점검이 필요 없다고 봄</li>
        <li>문제 표현 한두 개만 고치고 같은 기준이 적용되었는지는 확인하지 않음</li>
        <li>사람이 최종 수정했으니 AI 활용 사실을 밝힐 필요가 없다고 봄</li>
        <li>시범 운영에서 불만이 없으면 공정하다고 봄</li>
        <li>큰 윤리 문제를 팀 안에서 결론 냄</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Job ad wording", ts:"6.4",
     q:`An HR specialist at a logistics firm uses Claude to draft two job ads. The office administrator ad asks for someone "nurturing and detail-oriented," while the forklift operator ad asks for "strong, competitive guys who can keep up with a young team." She has a posting deadline this afternoon. What is the MOST appropriate next step?`,
     ko:`물류 회사의 HR 담당자가 Claude로 채용 공고 두 건의 초안을 작성함. 사무 행정직 공고는 "세심하고 배려심 있는 사람"을, 지게차 운전직 공고는 "젊은 팀에 맞출 수 있는 힘세고 승부욕 있는 남자"를 찾는다고 씀. 오늘 오후가 게시 마감임. 가장 적절한 다음 단계는 무엇인가?`,
     opts:[
       {t:`Review both ads for wording that signals a preferred gender or age, and rewrite them around job requirements.`, ko:`두 공고에서 특정 성별·연령을 선호하는 표현을 검토하고 직무 요건 중심으로 다시 쓰기`, ok:true},
       {t:`Post both ads as drafted, since the wording came from Claude rather than from the company's own preferences.`, ko:`표현은 회사의 선호가 아닌 Claude가 만든 것이므로 초안 그대로 게시하기`},
       {t:`Ask Claude to make both ads sound more energetic so they attract a larger number of applicants this week.`, ko:`이번 주 지원자를 늘리도록 두 공고를 더 활기찬 어조로 바꿔 달라고 Claude에 요청하기`},
       {t:`Replace the word "guys" in the forklift ad, then post both ads before the afternoon deadline.`, ko:`지게차 공고의 "남자"만 바꾼 뒤 오후 마감 전에 두 공고 게시하기`}
     ],
     explain:{ good:`두 공고 모두 직무와 무관한 성별·연령 고정관념이 섞임. 언어 생성의 기저 패턴이 편향의 출처가 된 경우임. 채용 공고는 특정 집단에 영향을 주는 외부 문서이므로 게시 전에 같은 기준으로 두 공고를 모두 점검함. 게시한 회사가 문구에 책임을 짐.`,
       wrongs:[
         `<b>B:</b> Claude가 쓴 문구도 게시하는 회사의 책임임. AI가 만든 표현이라는 사실은 편향을 정당화하지 않음.`,
         `<b>C:</b> 어조 수정은 공정성 문제를 다루지 않음. 편향된 표현이 더 강조될 수도 있음.`,
         `<b>D:</b> 단어 하나만 고친 부분 수정임. "젊은 팀"의 연령 표현과 행정직 공고의 성별 고정관념이 그대로 남음.`
       ]},
     hint:`두 공고 전체에 같은 기준을 적용해 볼 것. 문제 표현이 한 곳에만 있는지 확인할 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`두 공고 전체에 직무와 무관한 성별·연령 표현이 있고, 게시하는 회사가 그 문구를 책임짐`, ok:true},
         {t:`채용 업무는 사람이 검토하는 것이 정석이라서`},
         {t:`Claude에는 채용 공고 작성 기능이 없어서`},
         {t:`마감이 촉박한 업무는 Claude에 맡기면 안 되어서`}
       ],
       explain:`편향은 단어 하나보다 문서 전체에 적용된 기준의 문제임. AI가 쓴 초안이어도 결과물의 책임은 게시하는 사람과 회사에 있음.` },
     principle:"원칙 ② 내보내기 전 검증"},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Income-based outreach", ts:"6.4",
     q:`A university's communications lead plans to have Claude write personalized outreach emails to 5,000 prospective students. Messages would differ by the household income level the team infers from each student's postal code. Some colleagues worry this could steer lower-income students away from certain programs. The lead is unsure whether the approach is acceptable. What should she do?`,
     ko:`대학교 커뮤니케이션 책임자가 입학 예정자 5,000명에게 보낼 맞춤형 안내 이메일을 Claude로 작성하려 함. 메시지는 팀이 우편번호로 추정한 가구 소득 수준에 따라 달라짐. 일부 동료는 이 방식이 저소득층 학생을 특정 학과에서 멀어지게 할 수 있다고 우려함. 책임자는 이 방식이 괜찮은지 확신하지 못함. 어떻게 해야 하는가?`,
     opts:[
       {t:`Note who is affected and what could go wrong, and bring that reasoning to the AI governance group.`, ko:`영향 받는 사람과 잘못될 수 있는 점을 정리해 그 추론을 AI 거버넌스 조직에 가져가기`, ok:true},
       {t:`Send the emails to a small pilot group first, and stop the whole campaign if any complaints arrive.`, ko:`소규모 시범 집단에 먼저 보내고 불만이 들어오면 캠페인 전체를 중단하기`},
       {t:`Ask Claude whether the segmentation is ethical and follow its recommendation for the full campaign.`, ko:`세분화가 윤리적인지 Claude에 묻고 그 권고를 캠페인 전체에 따르기`},
       {t:`Drop the income field but keep postal-code targeting, since postal codes alone are not personal data.`, ko:`우편번호만으로는 개인정보가 아니므로 소득 항목만 빼고 우편번호 타기팅은 유지하기`}
     ],
     explain:{ good:`영향 범위가 크고(5,000명), 학생의 진로 선택에 영향을 줄 수 있으며, 공정성 판단이 팀 권한을 벗어남. 이런 윤리 문제는 혼자 결정하지 않고 조직의 거버넌스 담당에게 넘김. 4질문으로 정리한 추론을 함께 가져가면 어떤 틀을 적용했고 어디서 판단이 막혔는지 보여 줄 수 있음.`,
       wrongs:[
         `<b>B:</b> 시범 운영은 사전 판단을 대신하지 못함. 불만이 없어도 불이익은 생길 수 있고, 발견했을 때는 피해가 이미 발생한 뒤임.`,
         `<b>C:</b> 윤리 판단을 Claude에 맡김. Claude의 답은 참고 자료가 될 수 있어도 책임 있는 결정이 되지 못함.`,
         `<b>D:</b> 우편번호는 소득을 대신 나타내는 지표로 작동해 같은 불이익을 만들 수 있음. 문제의 원인이 그대로 남음.`
       ]},
     hint:`이 결정이 누구에게 얼마나 큰 영향을 주는지, 그리고 이 팀이 혼자 판단할 위치인지 생각할 것.`,
     principle:"원칙 ⑤ 정책·사람 판단 우선"}
  ]},

  /* ================= D6 미니테스트 ================= */
  { id:"p6test", type:"test", title:"D6 미니테스트 · 8문항", questions:[

    { lvl:"기초", ts:"6.1",
      q:`An operations analyst at an insurance company proposes letting Claude approve or deny small property claims automatically, with no adjuster involved, to clear a backlog. In a pilot, Claude's decisions matched the adjusters' decisions on most past claims. How should this proposal be classified?`,
      ko:`보험사의 운영 분석가가 적체 업무를 줄이기 위해, 소액 재산 보험금 청구의 승인·거절을 손해사정인 없이 Claude가 자동으로 결정하도록 제안함. 시범 운영에서 Claude의 결정은 과거 청구 대부분에서 손해사정인의 결정과 일치함. 이 제안은 어떻게 분류해야 하는가?`,
      opts:[
        {t:`Inappropriate as proposed: denials are hard to reverse, and the decision belongs to a licensed adjuster.`, ko:`제안대로는 사용 부적절로 분류하기. 거절은 되돌리기 어렵고 결정 책임은 자격을 가진 손해사정인에게 있음`, ok:true},
        {t:`Fully appropriate for claims below a set dollar amount, since the financial risk of each error stays small.`, ko:`건당 오류의 금전적 위험이 작으므로 정해진 금액 이하 청구는 그대로 사용 가능으로 분류하기`},
        {t:`Appropriate, provided Claude includes a clear explanation of its reasoning in every approval or denial letter.`, ko:`모든 승인·거절 통지서에 Claude가 판단 근거를 명확히 쓰는 조건으로 사용 가능하다고 보기`},
        {t:`Appropriate, since the pilot already showed strong agreement with adjusters on past claims of the same type.`, ko:`시범 운영에서 같은 유형의 과거 청구와 높은 일치율을 보였으므로 사용 가능하다고 보기`}
      ],
      explain:{ good:`사람 검토 없는 최종 판정은 되돌리기 어려운 결과와 넘길 수 없는 책임이 겹치는 경우임. 손해사정인의 결정 책임은 AI 결과물로 옮겨지지 않음. Claude가 검토 자료나 초안을 만드는 방식은 가능하지만, 제안처럼 결정 자체를 맡기는 것은 부적절함.`,
        wrongs:[
          `<b>B:</b> 건당 금액이 작아도 거절은 청구인에게 되돌리기 어려운 결과이며, 결정 책임 문제는 그대로 남음.`,
          `<b>C:</b> 판단 근거를 쓰는 것은 투명성을 높일 뿐 책임 있는 사람의 결정을 대신하지 못함.`,
          `<b>D:</b> 과거 일치율은 정확성의 일부 근거일 뿐, 개별 결정의 책임을 Claude에 넘기는 근거가 되지 않음.`
        ]},
      principle:"원칙 ⑤ 정책·사람 판단 우선"},

    { lvl:"실전", ts:"6.1", multi:2,
      q:`A marketing manager at a cosmetics brand is listing candidate tasks for Claude before a product launch. Her team has approved spec sheets, a brand guide, and a customer complaint log. She wants to hand some of these tasks to Claude with only the team's usual light review. Which TWO tasks are suitable for that level of review? (Select TWO.)`,
      ko:`화장품 브랜드의 마케팅 매니저가 제품 출시 전에 Claude에 맡길 후보 업무를 정리함. 팀에는 승인된 제품 사양서, 브랜드 가이드, 고객 불만 기록이 있음. 이 중 일부 업무를 팀의 평소 수준의 가벼운 검토만 거쳐 Claude에 맡기려 함. 이 수준의 검토로 충분한 업무 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Brainstorming 20 email subject lines for an internal shortlist before A/B testing`, ko:`A/B 테스트 전 내부 후보 목록용 이메일 제목 20개 아이디어 내기`, ok:true},
        {t:`Drafting an internal sales-team FAQ from the approved product spec sheets`, ko:`승인된 제품 사양서로 영업팀용 사내 FAQ 초안 작성하기`, ok:true},
        {t:`Writing the final ingredient safety claims printed on the product label`, ko:`제품 라벨에 인쇄될 최종 성분 안전성 문구 작성하기`},
        {t:`Choosing which influencer contracts to end after an online controversy`, ko:`온라인 논란 이후 종료할 인플루언서 계약 선택하기`},
        {t:`Writing the personal apology to a customer who reported an allergic reaction`, ko:`알레르기 반응을 신고한 고객에게 보낼 개인 사과문 작성하기`}
      ],
      explain:{ good:`내부 후보 목록용 제목 아이디어와 승인된 사양서로 만드는 사내 FAQ는 되돌릴 수 있고, 오류의 결과가 작고, 근거 자료가 있음. 4기준이 모두 낮으므로 평소 수준의 확인으로 맡길 수 있음.`,
        wrongs:[
          `<b>C:</b> 라벨의 성분 안전성 문구는 외부에 인쇄되어 되돌리기 어렵고 규제 대상이 될 수 있음. 책임 있는 담당자의 사전 검토가 필요함.`,
          `<b>D:</b> 계약 종료는 회사가 책임지는 결정이며 되돌리기 어려움. Claude는 자료 정리를 도울 수 있지만 결정은 사람이 함.`,
          `<b>E:</b> 알레르기 반응을 겪은 고객에게 보내는 사과는 관계와 공감이 업무의 가치임. 사람이 맡음.`
        ]},
      principle:"원칙 ⑤ 정책·사람 판단 우선"},

    { lvl:"기초", ts:"6.2",
      q:`A sales enablement lead wants Claude to help build a product quiz for new hires. She has three files: the public product brochure, a pricing guide marked "internal only, do not share externally," and a CRM export with client names and phone numbers. The quiz only needs product and pricing facts. What is the MOST appropriate approach?`,
      ko:`영업 지원 책임자가 신입 사원용 제품 퀴즈를 Claude로 만들려 함. 파일은 세 가지임. 공개된 제품 브로슈어, "사내 전용, 외부 공유 금지"가 표시된 가격 가이드, 고객 이름과 전화번호가 든 CRM 내보내기 파일. 퀴즈에는 제품과 가격 정보만 필요함. 가장 적절한 방법은 무엇인가?`,
      opts:[
        {t:`Use the brochure, check policy before adding the pricing guide, and leave out the CRM export entirely.`, ko:`브로슈어는 사용하고, 가격 가이드는 정책 확인 후 추가하고, CRM 파일은 아예 제외하기`, ok:true},
        {t:`Upload all three files, since the quiz will be used only by internal staff and never leaves the company.`, ko:`퀴즈는 사내 직원만 쓰고 회사 밖으로 나가지 않으므로 세 파일 모두 업로드하기`},
        {t:`Upload all three files in an Incognito chat so that none of the client details are remembered afterward.`, ko:`고객 정보가 나중에 기억되지 않도록 Incognito 대화에서 세 파일 모두 업로드하기`},
        {t:`Skip all three files and write the quiz by hand, since any company file could carry some level of risk.`, ko:`회사 파일은 모두 어느 정도 위험이 있으므로 세 파일을 쓰지 않고 퀴즈를 직접 작성하기`}
      ],
      explain:{ good:`파일마다 등급이 다름. 브로슈어는 Green, 사내 전용 가격 가이드는 Yellow(정책 확인 후 사용), 고객 이름·전화번호는 퀴즈에 필요 없는 개인정보임. 과업에 필요한 정보만 넣는 것이 정책을 지키면서 일을 끝내는 방법임.`,
        wrongs:[
          `<b>B:</b> 사내용이라는 목적은 등급을 낮추지 않음. 고객 연락처는 퀴즈에 필요하지도 않음.`,
          `<b>C:</b> Incognito 모드는 기억 여부만 통제함. 필요 없는 개인정보를 넣는 문제는 그대로 남음.`,
          `<b>D:</b> 브로슈어처럼 바로 쓸 수 있는 자료까지 버림. 등급별로 나누면 업무를 진행할 수 있음.`
        ]},
      principle:"원칙 ⑤ 정책·사람 판단 우선"},

    { lvl:"실전", ts:"6.2", multi:2,
      q:`A consultant at a strategy firm needs a summary of a client's confidential merger memo before a meeting. The memo contains no regulated data, but firm policy says confidential client material may be used only in approved workspaces and must not carry over into later sessions. She is working in claude.ai. Which TWO actions are appropriate? (Select TWO.)`,
      ko:`전략 컨설팅사의 컨설턴트가 회의 전에 고객사의 기밀 합병 메모를 요약해야 함. 메모에는 규제 데이터가 없음. 다만 회사 정책은 고객 기밀 자료를 승인된 업무 공간에서만 쓰고, 이후 세션으로 이어지지 않게 하도록 정함. 컨설턴트는 claude.ai에서 작업 중임. 적절한 조치 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Confirm that her current workspace is approved for this client's confidential material before uploading.`, ko:`업로드 전에 현재 업무 공간이 이 고객의 기밀 자료에 승인되어 있는지 확인하기`, ok:true},
        {t:`Once approval is confirmed, run the summary in an Incognito chat so it stays out of Memory and history.`, ko:`승인이 확인되면 Memory와 이력에 남지 않도록 Incognito 대화에서 요약하기`, ok:true},
        {t:`Tell Claude at the start not to remember or store anything from the memo after the summary is done.`, ko:`요약 후 메모 내용을 기억하거나 저장하지 말라고 대화 시작 시 Claude에 지시하기`},
        {t:`Treat the Incognito chat as removing the memo from the firm's retained data as well as from Memory.`, ko:`Incognito 대화가 Memory뿐 아니라 회사의 보존 데이터에서도 메모를 지운다고 보기`},
        {t:`Paste the memo into her personal account so the firm workspace history stays free of client material.`, ko:`회사 업무 공간 이력에 고객 자료가 남지 않도록 개인 계정에 메모를 붙여넣기`}
      ],
      explain:{ good:`규제 데이터는 없지만 고객 기밀 자료이고, 세션 사이에 남으면 안 되는 경우임. 먼저 그 진입점이 이 자료에 승인되어 있는지 확인하고, 승인되어 있으면 Incognito 모드로 Memory·이력 저장을 막음. 허용 여부 확인은 기능 설정보다 먼저 함.`,
        wrongs:[
          `<b>C:</b> Claude에 기억하지 말라고 지시하는 것은 통제 수단이 아님. 저장 여부는 기능 설정과 정책이 정함.`,
          `<b>D:</b> Incognito 모드는 Memory와 채팅 이력에서 제외할 뿐, 조직의 데이터 보존 정책은 그대로 적용됨. 둘은 별개의 통제임.`,
          `<b>E:</b> 개인 계정은 승인된 업무 공간이 아님. 정책의 첫 조건을 어김.`
        ]},
      principle:"원칙 ⑤ 정책·사람 판단 우선"},

    { lvl:"기초", ts:"6.3",
      q:`A project manager at an education technology company wants to use an internal "Weekly Status Formatter" Skill that the finance team built 18 months ago. Its instructions tell Claude to read every file in the shared drive. The company updated its AI policy last quarter. What should she do before turning the Skill on?`,
      ko:`에듀테크 회사의 프로젝트 매니저가 재무팀이 18개월 전에 만든 사내 Skill "주간 현황 서식기"를 쓰려 함. 이 Skill의 지시문은 Claude에게 공유 드라이브의 모든 파일을 읽게 함. 회사는 지난 분기에 AI 정책을 개정함. 이 Skill을 켜기 전에 무엇을 해야 하는가?`,
      opts:[
        {t:`Ask the finance team what the Skill reads and why, and check that against the current policy.`, ko:`재무팀에 Skill이 무엇을 왜 읽는지 묻고 현행 정책과 대조하기`, ok:true},
        {t:`Turn it on, since Skills built inside the company were approved when they were first published.`, ko:`사내에서 만든 Skill은 처음 게시될 때 승인된 것이므로 켜기`},
        {t:`Turn it on, but avoid running it on any reports that contain confidential project information.`, ko:`켜되 기밀 프로젝트 정보가 든 보고서에는 쓰지 않기`},
        {t:`Rebuild a similar Skill from scratch herself so she knows exactly what every instruction does.`, ko:`지시문을 모두 알 수 있도록 비슷한 Skill을 직접 처음부터 만들기`}
      ],
      explain:{ good:`사내 제작은 검증을 뜻하지 않음. 다른 팀의 Skill은 편의상 넓은 접근을 주었거나 개정 전 정책 기준으로 만들어졌을 수 있음. 게시 팀에 접근 대상과 이유를 확인하고 현재 정책과 맞는지 점검한 뒤 사용함.`,
        wrongs:[
          `<b>B:</b> 18개월 전 기준의 승인은 지난 분기 정책 개정 이후의 준수를 보장하지 않음.`,
          `<b>C:</b> 공유 드라이브 전체를 읽는 접근은 그대로이므로 위험이 줄지 않음. 쓰는 보고서를 고르는 것은 통제가 아님.`,
          `<b>D:</b> 직접 다시 만드는 것은 필요 이상의 작업이며, 새 Skill도 조직 검토를 거쳐야 함. 기존 Skill에 대한 확인으로 해결할 수 있음.`
        ]},
      principle:"원칙 ⑤ 정책·사람 판단 우선"},

    { lvl:"실전", ts:"6.3",
      q:`A compliance coordinator in a regional bank's marketing department runs a monthly review of Claude use. She finds two uploads to an entry point not approved for customer data, a Skill enabled without any source check, and a client campaign report sent without its required review because of a deadline. None of the staff involved meant any harm. Which response BEST addresses these findings?`,
      ko:`지역 은행 마케팅 부서의 컴플라이언스 담당자가 Claude 사용 현황을 매월 점검함. 고객 데이터에 승인되지 않은 진입점에 두 차례 업로드, 출처 확인 없이 켠 Skill, 마감 때문에 필수 검토 없이 발송된 고객 캠페인 보고서가 발견됨. 관련 직원 중 악의를 가진 사람은 없음. 발견 사항에 가장 잘 대응하는 방법은 무엇인가?`,
      opts:[
        {t:`Point staff to approved entry points, add a Skill check to Project setup, and make the report review non-skippable.`, ko:`승인된 진입점을 안내하고, Project 설정 절차에 Skill 확인 단계를 넣고, 보고서 검토를 생략할 수 없게 만들기`, ok:true},
        {t:`Recirculate the full AI policy document to the whole department and have every employee sign it again this month.`, ko:`AI 정책 문서 전체를 부서에 다시 배포하고 이번 달에 모든 직원의 서명을 다시 받기`},
        {t:`Restrict Claude access to team managers only until the next monthly review shows no further policy issues.`, ko:`다음 월간 점검에서 문제가 없을 때까지 Claude 사용을 팀장급으로 제한하기`},
        {t:`Report the staff members involved to HR so that each case is recorded and handled under the disciplinary process.`, ko:`각 사례를 기록하고 징계 절차로 처리하도록 관련 직원을 인사팀에 보고하기`}
      ],
      explain:{ good:`악의 없는 이탈(drift)은 눈에 잘 띄지 않는 일상 결정에서 쌓임. 정답은 세 발견 각각의 원인(진입점을 모름, 확인 절차 없음, 생략 가능한 검토)을 습관과 구조 수준에서 고침. 같은 상황이 다시 와도 준수 경로를 따르게 됨.`,
        wrongs:[
          `<b>B:</b> 정책 재배포와 서명은 한 번의 동의일 뿐, 일상 결정에서의 적용을 바꾸지 않음.`,
          `<b>C:</b> 사용 제한은 업무 가치를 잃게 하고 이탈의 원인은 그대로 둠.`,
          `<b>D:</b> 악의 없는 이탈을 개인 책임으로만 돌리면 같은 구조에서 같은 문제가 다시 생김.`
        ]},
      principle:"원칙 ⑤ 정책·사람 판단 우선"},

    { lvl:"기초", ts:"6.4",
      q:`A consultant at a small agency used Claude heavily to gather material and draft sections of a market research report for a client. She checked every figure and quote against the original sources. The client contract does not mention AI tools, and she is unsure whether to say anything about them. What is the MOST appropriate approach?`,
      ko:`소규모 에이전시의 컨설턴트가 고객사용 시장 조사 보고서의 자료 수집과 일부 초안 작성에 Claude를 많이 활용함. 모든 수치와 인용은 원자료와 대조해 확인함. 고객 계약서에는 AI 도구에 대한 언급이 없고, 컨설턴트는 이를 밝혀야 할지 확신하지 못함. 가장 적절한 방식은 무엇인가?`,
      opts:[
        {t:`Tell the client that AI tools helped prepare the report and describe the checks she carried out.`, ko:`보고서 작성에 AI 도구를 활용했다는 사실과 수행한 확인 절차를 고객에게 알리기`, ok:true},
        {t:`Say nothing about AI, because she checked every figure and quote herself before delivering the report.`, ko:`납품 전에 수치와 인용을 모두 직접 확인했으므로 AI 활용은 언급하지 않기`},
        {t:`Mention AI only if the client asks directly, since the contract does not require any disclosure.`, ko:`계약상 공개 의무가 없으므로 고객이 직접 물을 때만 AI 활용 언급하기`},
        {t:`Rewrite the AI-drafted sections by hand before delivery so the question of disclosure does not come up.`, ko:`공개 문제가 생기지 않도록 AI가 작성한 부분을 납품 전에 손으로 다시 쓰기`}
      ],
      explain:{ good:`공개 여부는 맥락과 정책에 따라 다르지만, 불확실할 때 책임 있는 기본값은 공개임. 확인 절차를 함께 밝히면 고객이 보고서를 얼마나 믿을지 판단할 근거가 생김.`,
        wrongs:[
          `<b>B:</b> 검증은 정확성 문제를 다루고, 공개는 투명성 문제를 다룸. 검증을 했다고 공개 필요가 사라지지 않음.`,
          `<b>C:</b> 계약에 조항이 없다는 것은 공개 금지를 뜻하지 않음. 불확실할 때 숨기는 쪽을 고른 것임.`,
          `<b>D:</b> 공개를 피하려고 작업을 다시 하는 것은 시간 낭비이며, AI 활용을 감추려는 목적 자체가 투명성에 어긋남.`
        ]},
      principle:"원칙 ⑤ 정책·사람 판단 우선"},

    { lvl:"실전", ts:"6.4", multi:2,
      q:`The HR team at a retail chain wants Claude to score and rank 400 applications for store manager roles so that recruiters only read the top 50. Recruiters will not look at the other 350 applications. The HR director supports the plan but asks which safeguards matter most. Which TWO safeguards should the team put in place? (Select TWO.)`,
      ko:`소매 체인의 HR팀이 매장 관리자 지원서 400건을 Claude로 채점·순위화해 채용 담당자가 상위 50건만 읽게 하려 함. 나머지 350건은 채용 담당자가 보지 않음. HR 이사는 계획을 지지하지만 어떤 안전장치가 가장 중요한지 물음. 팀이 갖춰야 할 안전장치 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Have the hiring manager review the shortlist and a sample of screened-out applications before decisions.`, ko:`결정 전에 채용 관리자가 압축 명단과 탈락 지원서 표본을 함께 검토하기`, ok:true},
        {t:`Compare scores across applicant groups to see whether any group is ranked lower for reasons unrelated to the job.`, ko:`지원자 집단별 점수를 비교해 직무와 무관한 이유로 낮게 평가된 집단이 있는지 확인하기`, ok:true},
        {t:`Run the ranking on the most capable model available so that the scores are as accurate as possible.`, ko:`점수가 최대한 정확하도록 가장 성능 높은 모델로 순위 매기기`},
        {t:`Ask Claude to rate its confidence in each score and have recruiters review only the low-confidence ones.`, ko:`Claude가 점수마다 확신도를 매기게 하고 확신이 낮은 것만 채용 담당자가 검토하기`},
        {t:`Avoid telling applicants that AI is involved so they cannot tailor their applications to the scoring.`, ko:`지원자가 채점 방식에 맞춰 지원서를 쓰지 않도록 AI 활용 사실을 알리지 않기`}
      ],
      explain:{ good:`탈락자를 아무도 보지 않는 자동 선별의 가장 직접적인 우려는 편향임. 체계적인 불이익이 생겨도 발견되지 않음. 그래서 탈락 결과까지 사람이 표본으로 확인하고, 집단별 결과를 비교해 기준이 특정 집단에 불리하게 작동하지 않는지 점검함.`,
        wrongs:[
          `<b>C:</b> 모델 성능은 공정성을 보장하지 않음. 어떤 모델을 쓰든 집단별 결과를 사람이 확인해야 편향을 발견할 수 있음.`,
          `<b>D:</b> Claude의 확신도는 근거가 아님. 확신이 높은 채점에도 편향이 있을 수 있음.`,
          `<b>E:</b> AI 활용을 숨기는 것은 투명성에 어긋나며 편향 문제를 줄이지도 않음.`
        ]},
      principle:"원칙 ⑤ 정책·사람 판단 우선"}
  ]}
]};
