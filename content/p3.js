/* PART 03: 결과물 평가·검증 (D2, 21%) */
window.CCAO.p3 = { id:"p3", lessons:[

  /* ================= CH 1 · 2.1 정확성·완전성 평가 ================= */
  { id:"p3c1", ch:"CH 1", obj:"2.1", title:"정확성·완전성 평가", steps:[
    {type:"concept", kind:"PART BRIEFING · 파트 설명", h:"PART 03. 결과물 평가·검증",
     html:`<p class="lead">Claude가 만든 결과물을 쓰기 전에 확인하고, 다듬고, 맞는 형식으로 내놓는 판단을 다룸. 7개 영역 중 출제 비중이 가장 큼.</p>
      <h4>파트 프로필</h4>
      <div class="tbl"><table>
        <tr><th>항목</th><th>내용</th></tr>
        <tr><td>출제 비중</td><td>21% (7개 영역 중 최대)</td></tr>
        <tr><td>예상 문항</td><td>60문항 중 약 13문항</td></tr>
        <tr><td>챕터 구성</td><td>6개 챕터. 출제 목표 2.1~2.6에 하나씩 대응</td></tr>
        <tr><td>공식 강좌</td><td>Prep Course 모듈 3 "Evaluating &amp; Validating Claude's Output" (약 74분)</td></tr>
      </table></div>
      <ul>
        <li>공식 강좌는 이 영역의 비중이 큰 이유를 책임(accountability)으로 설명함</li>
        <li>검증을 건너뛰어 아끼는 시간은 작고 바로 보임. 검증하지 않은 오류의 비용은 크고 나중에 발생함</li>
        <li>강좌 도입부 사례: 고객용 발표 자료에 근거 없는 성장률 수치가 들어간 채 전달됨</li>
      </ul>
      <h4>다루는 범위</h4>
      <ul>
        <li><b>CH 1 정확성·완전성 평가 (2.1)</b>: 결과물을 요구사항·원자료·전문 기준에 대조하고 3가지 판정 중 하나로 분류하는 방법</li>
        <li><b>CH 2 환각·불일치·편향 식별 (2.2)</b>: 그럴듯하지만 틀린 출력의 유형과 유형별로 알아보는 신호</li>
        <li><b>CH 3 사실 확인·검증 기법 (2.3)</b>: 프롬프트 단계의 예방형 검증과 결과물 단계의 원문 대조·재계산</li>
        <li><b>CH 4 사람 검토·추가 검증 판단 (2.4)</b>: 위험 기준 4가지로 사람 검토 의무를 정하는 방법</li>
        <li><b>CH 5 청중 맞춤 편집·비교 (2.5)</b>: 편집 3단계, 청중별 재구성, 여러 초안 비교</li>
        <li><b>CH 6 정보 정리·출력 형식 선택 (2.6)</b>: 입력 자료 정리와 출력 형식 4가지 중 선택</li>
      </ul>
      <h4>출제 형태</h4>
      <ul>
        <li>지문: Claude가 만든 결과물(요약, 보고서 수치, 인용, 초안)과 그 결과물이 갈 곳(컴플라이언스팀, 임원, 고객, 규제 기관)이 함께 제시됨</li>
        <li>질문: "내보내기 전 가장 적절한 조치", "가장 먼저 할 일", "가장 의심해야 할 문제"를 물음</li>
        <li>대표적인 오답 유형: Claude의 확신 표현을 근거로 삼기, Claude에게 자기 평가 시키기, 문장만 다듬기, 처음부터 다시 생성하기, 저위험 작업을 과잉 검증하기</li>
        <li>공식 가이드 샘플 1(규정 요약 속 조항 번호 인용)이 이 영역 문항임. 정답은 인용된 조항을 공식 규정 원문과 대조하는 것임. Claude의 확신, 자기 평가 점수, 격식 있는 문장 다듬기는 모두 오답으로 제시됨</li>
      </ul>
      <h4>연계</h4>
      <ul>
        <li>Prep Course 모듈 3 "Evaluating &amp; Validating Claude's Output"이 이 파트 전체를 다룸</li>
        <li>업무 처리 흐름 지도에서 ④ 결과 검증·다듬기 단계임. ③ 요청 작성(D1)이 만든 결과물을 받아 ⑤ 업무 적용(D4)으로 넘기기 전에 거침</li>
        <li>결과가 나쁘면 ↩ 원인 진단·수정(D7)으로 돌아감. 사람 검토 의무 판단은 모든 단계에 걸쳐 있는 데이터·정책·사람 판단(D6) 영역과 겹침</li>
      </ul>
      <div class="callout">학습 순서 · CH 1~4는 결과물이 맞는지와 누가 확인하는지를 다룸. CH 5~6은 확인을 마친 결과물을 누구에게 어떤 형식으로 내놓는지를 다룸.</div>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"Discernment와 Diligence, 세 가지 평가 기준점",
     html:`<p class="lead">결과물 평가는 Claude 화면의 기능이 아님. 결과물을 받은 사람이 매번 수행하는 확인 절차임.</p>
      <div class="callout term"><b>용어 카드</b> · <b>Discernment</b>: 결과물을 요구사항·원자료·전문 기준에 비춰 평가하는 역량. "어떻게 검토하는가"에 해당함.</div>
      <div class="callout term"><b>용어 카드</b> · <b>Diligence</b>: 언제 검증이 필요한지 정하고 결과에 책임지는 태도. "왜, 어느 수준으로 검토하는가"에 해당함.</div>
      <h4>Claude에게 넘어가지 않는 책임</h4>
      <ul>
        <li>자기 이름으로 내보낸 결과물의 모든 주장은 보낸 사람의 책임임</li>
        <li>Claude가 쓴 문장에도 직접 쓴 문서와 같은 전문 기준이 적용됨</li>
        <li>"AI가 쓴 것"은 오류의 해명이 되지 않음</li>
      </ul>
      <h4>세 가지 평가 기준점</h4>
      <div class="tbl"><table>
        <tr><th>기준점</th><th>확인 질문</th><th>실패 예</th></tr>
        <tr><td>① 요구사항</td><td>요청한 항목을 모두 다뤘는가. 쉬운 부분만 다루고 어려운 부분을 건너뛰지 않았는가</td><td>지역 5곳 분석을 요청했는데 3곳만 분석함</td></tr>
        <tr><td>② 원자료</td><td>제공한 문서와 일치하는가. 구체적인 주장을 원문 위치까지 추적할 수 있는가</td><td>요금표의 "최소 50석 계약" 조건이 요약에서 빠짐</td></tr>
        <tr><td>③ 전문 기준</td><td>해당 업무의 기본 기준을 충족하는가. 단위 없는 숫자, 근거 없는 권고, 찾을 수 없는 인용이 없는가</td><td>"전환율 12% 상승"에 기간과 비교 기준이 없음</td></tr>
      </table></div>
      <ul>
        <li>문장이 유창해도 세 기준점 중 하나에서 실패하면 그대로 쓸 수 없음</li>
        <li>세 기준점 대조를 매번 같은 방식으로 수행하는 절차를 Discernment protocol이라 부름. 바쁠 때도 검토 품질이 유지됨</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 검토 체크리스트 (주간 시장 동향 보고서)</span>[요구사항] 요청한 5개 항목(경쟁사 동향, 가격 변화, 신제품, 고객 반응, 시사점)이 모두 있는가
[요구사항] 요청한 분량(A4 2쪽)과 형식(항목별 소제목)을 지켰는가
[원자료] 모든 수치에 출처 파일명이 붙어 있는가
[원자료] 핵심 수치를 원문 위치에서 직접 대조했는가
[전문 기준] 모든 숫자에 단위와 기간이 있는가
[전문 기준] 권고 사항마다 근거 데이터가 있는가</div>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"정확성과 완전성의 구분, 3분류 판정",
     html:`<div class="callout term"><b>용어 카드</b> · <b>정확성(accuracy)</b>: 결과물에 있는 내용이 사실과 원자료에 맞는 정도.</div>
      <div class="callout term"><b>용어 카드</b> · <b>완전성(completeness)</b>: 요청했거나 원자료에 있는 중요한 내용이 빠지지 않은 정도.</div>
      <ul>
        <li>두 가지는 따로 실패함. 있는 내용이 모두 맞아도 중요한 내용이 빠질 수 있음</li>
        <li>빠진 내용은 화면에 눈길을 끄는 표시가 없어 틀린 내용보다 찾기 어려움</li>
        <li>누락은 Claude의 주의가 가장 낮은 곳에 몰림. 그곳이 가장 중요한 파일인 경우가 많음</li>
        <li>완전성 점검의 기준은 사람이 가진 요구사항 목록과 원자료임. Claude에게 "빠진 것이 있는가"를 묻고 그 답을 믿는 것은 점검으로 인정되지 않음</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · Claude 요약 결과와 검토 표시</span>요청: 업로드한 경쟁사 3곳의 요금표 PDF를 비교하고, 요금제별 가격과 계약 조건을 표로 정리할 것

A사 베이직 | 월 9,900원/1인 | 월 단위 해지 가능   <b>✓ 원문 일치</b>
A사 프로 | 월 19,900원/1인 | 연 약정 시 10% 할인   <b>✓ 원문 일치</b>
B사 엔터프라이즈 | 월 15,000원/1인 | 월 단위 결제   <b>✕ 원문의 "최소 50석 계약" 조건 누락</b>
C사 스탠다드 | 월 12,000원/1인 | 월 단위 해지 가능   <b>✓ 원문 일치</b>

판정: 있는 수치는 모두 정확함. 계약 조건 하나가 빠져 완전성 실패. B사 요금이 실제보다 유리해 보이는 비교표가 됨</div>
      <div class="sample good"><span class="sl">예시 · 수정 요청 (전체 재작성 대신 결함 지목)</span>B사 요금표 PDF만 근거로 엔터프라이즈 요금제의 계약 조건을 다시 확인할 것. 조건마다 원문 문장을 그대로 인용할 것. 나머지 행은 수정하지 말 것.</div>
      <h4>3분류 판정</h4>
      <div class="tbl"><table>
        <tr><th>판정</th><th>의미</th><th>다음 행동</th></tr>
        <tr><td>Ready to use (바로 사용)</td><td>세 기준점을 통과했고 위험도에 맞는 확인을 마침</td><td>그대로 사용</td></tr>
        <tr><td>Needs revision (수정 후 사용)</td><td>특정 결함이 있으나 고칠 수 있음</td><td>결함을 지목해 다시 요청하거나 직접 수정</td></tr>
        <tr><td>Needs human override (사람 판단 필요)</td><td>위험도가 높거나 Claude가 근거를 가질 수 없는 내용</td><td>전문가·책임자에게 에스컬레이션(상위 담당자에게 넘김)</td></tr>
      </table></div>
      <ul>
        <li>판정마다 근거를 한 줄로 기록함. 예: "Needs revision · 원자료 대조 실패 · B사 계약 조건 누락"</li>
        <li>검토 깊이는 위험도에 맞춤. 법률 분석, 재무 수치, 컴플라이언스 보고는 모든 주장을 확인함. 저위험 내부 브레인스토밍은 가볍게 확인함</li>
        <li>두 종류의 작업에 같은 수준의 검토를 적용하는 것이 문제임. 고위험 작업을 대충 보면 오류가 밖으로 나가고, 저위험 작업을 과잉 검증하면 도구가 아껴 준 시간을 잃음</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"결과물 판정 규칙",
     html:`__MAP:verify__
      <p class="lead">판정은 세 기준점의 결과와 위험도로 정함. 결과물의 겉모습은 판정 근거로 쓰지 않음.</p>
      <div class="flow"><span class="nd">① 요구사항 대조<small>요청 항목이 모두 있음?</small></span><span class="ar">→</span><span class="nd">② 원자료 대조<small>구체 주장 추적</small></span><span class="ar">→</span><span class="nd">③ 전문 기준 확인<small>단위·근거·인용</small></span><span class="ar">→</span><span class="nd">④ 위험도 확인<small>검토 깊이 결정</small></span><span class="ar">→</span><span class="nd hot">⑤ 3분류 판정<small>근거 기록</small></span></div>
      <p class="howto"><b>읽는 법</b>화살표 방향 = 검토 순서. ①~③은 결과물 자체를 보는 단계, ④는 결과물이 갈 곳을 보는 단계임. 강조된 칸이 최종 판정임.</p>
      <div class="tbl"><table>
        <tr><th>상황</th><th>판정·행동</th><th>이유</th></tr>
        <tr><td>경쟁사 요금 요약에서 계약 조건 하나가 빠짐</td><td>Needs revision · 해당 PDF로 출처를 제한해 다시 요청</td><td>원자료 대조 실패. 결함 위치가 특정되어 전체 재작성은 필요 없음</td></tr>
        <tr><td>내부 논의용 개선 아이디어 3가지, 대조할 원자료 없음, 기준 충족</td><td>Ready to use</td><td>저위험 내부 자료. 과잉 검증은 시간 낭비임</td></tr>
        <tr><td>규정 원문 없이 학습한 기억만으로 만든 사내 정책·규정 차이 분석</td><td>Needs human override · 컴플라이언스 담당에게 넘김</td><td>바뀌었을 수 있는 규정을 기억에 의존함. 위험도가 높음. 전문가가 참고할 초안일 뿐 전문가 판단을 대신하지 못함</td></tr>
        <tr><td>확인한 수치는 모두 맞으나 요청 항목 하나가 약하게 다뤄짐</td><td>요구사항 목록 대비 완전성 점검 후 해당 부분만 재요청</td><td>정확성 통과가 완전성을 보장하지 않음</td></tr>
        <tr><td>파일 여러 개 요약에서 짧은 파일들이 잘 요약됨</td><td>가장 중요한 파일부터 원문 대조</td><td>누락은 주의가 낮은 곳에 몰림</td></tr>
      </table></div>
      <div class="callout">시험 포인트 · "확인한 부분이 맞다"와 "빠진 것이 없다"는 별개의 질문임. 확인한 수치가 모두 맞은 뒤에도 요구사항 목록과 원자료를 기준으로 빠진 항목과 조건을 따로 확인해야 함.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>문장이 매끄럽고 숫자가 정밀하다는 이유로 정확하다고 판단함</li>
        <li>Claude에게 "빠뜨린 것이 있는가"를 묻고 그 답으로 완전성 점검을 대신함</li>
        <li>결함 하나 때문에 전체를 다시 생성해 잘된 부분까지 잃음</li>
        <li>저위험 브레인스토밍에 법률 문서 수준의 검증을 적용함</li>
        <li>Needs human override를 "결과물 폐기"로 이해함. 실제 의미는 전문가에게 초안으로 넘기는 것임</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: A new-hire benefits overview", ts:"2.1",
     q:`An HR coordinator uploads five benefits policies (health, leave, remote work, training budget, retirement) and asks Claude for a one-page overview for new hires. She checks every figure in the overview against the policy files, and all of them match. However, the leave policy, which new hires ask about most, gets only one general sentence. What is the MOST appropriate next step?`,
     ko:`HR 코디네이터가 복리후생 규정 5종(건강, 휴가, 재택근무, 교육비, 퇴직연금)을 올리고 신규 입사자용 1쪽 안내문을 요청했다. 안내문의 모든 수치를 규정 파일과 대조했고 모두 일치했다. 그런데 신규 입사자가 가장 많이 묻는 휴가 규정은 일반적인 문장 하나로만 다뤄졌다. 가장 적절한 다음 조치는 무엇인가?`,
     opts:[
       {t:`Compare the overview with her list of required topics, then have Claude redo the leave section from the leave policy file only.`, ko:`요구 항목 목록과 대조한 뒤 휴가 규정 파일만 근거로 휴가 부분을 다시 쓰게 하기`, ok:true},
       {t:`Approve the overview for distribution, since every figure she checked matched the policy documents exactly.`, ko:`확인한 수치가 모두 규정과 일치했으므로 배포를 승인하기`},
       {t:`Ask Claude whether any important information was left out, and finalize the overview if it says nothing is missing.`, ko:`Claude에게 빠진 중요 정보가 있는지 묻고, 없다고 하면 확정하기`},
       {t:`Regenerate the entire overview with a more capable model so that all five policies receive the same level of detail.`, ko:`다섯 규정이 같은 수준으로 다뤄지도록 더 상위 모델로 안내문 전체를 다시 생성하기`}
     ],
     explain:{ good:`수치가 모두 맞았다는 것은 정확성 점검을 통과했다는 뜻임. 가장 중요한 휴가 규정이 한 문장으로 처리된 것은 완전성 실패임. 요구 항목 목록으로 누락을 확인하고, 해당 파일로 출처를 제한해 그 부분만 다시 요청하는 것이 결함에 맞는 조치임.`,
       wrongs:[
         `<b>B:</b> 정확성만 확인한 상태임. 있는 내용이 맞아도 빠진 내용은 따로 점검해야 함.`,
         `<b>C:</b> 누락 여부를 Claude의 답으로 판단하는 것은 점검이 아님. 기준은 사람이 가진 요구 항목 목록과 원자료임.`,
         `<b>D:</b> 결함은 한 섹션에 있음. 전체 재생성은 이미 맞는 부분까지 다시 확인하게 만들고, 모델 교체가 누락의 원인을 해결하지도 않음.`
       ]},
     principle:"원칙 ② 내보내기 전 검증",
     hint:`수치가 맞았다는 사실이 무엇을 보장하고 무엇을 보장하지 않는지 구분할 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`확인한 내용이 정확해도 빠진 내용은 별도로 점검해야 하기 때문`, ok:true},
         {t:`공식 강좌가 권장하는 재요청 기법이기 때문`},
         {t:`규정 문서는 상위 모델이 아니면 요약할 수 없기 때문`},
         {t:`휴가 규정은 법적 문서라서 Claude가 다룰 수 없기 때문`}
       ],
       explain:`정확성과 완전성은 따로 실패함. 이 지문의 결함은 가장 중요한 항목의 누락이므로 요구 항목 대비 점검이 정답을 결정함.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Ideas for tomorrow's meeting", ts:"2.1",
     q:`An operations team lead asks Claude for ten ideas to shorten the team's weekly internal stand-up meeting. The list will be used only to start the discussion at tomorrow's team meeting, and the team will decide what to try. She is thinking about asking a colleague to find research evidence for each idea before the meeting. What is the MOST appropriate action?`,
     ko:`운영팀 리더가 주간 내부 스탠드업 회의를 줄일 아이디어 10개를 Claude에게 요청했다. 이 목록은 내일 팀 회의에서 논의를 시작하는 용도로만 쓰이고, 시도할 안은 팀이 정한다. 리더는 회의 전에 동료에게 아이디어마다 연구 근거를 찾게 할지 고민 중이다. 가장 적절한 조치는 무엇인가?`,
     opts:[
       {t:`Read the list quickly for relevance and bring it to the meeting, since it is a low-risk internal starting point.`, ko:`저위험 내부 논의의 출발점이므로 관련성만 빠르게 확인하고 회의에 가져가기`, ok:true},
       {t:`Have the colleague verify each idea against published research so that the team does not discuss unproven options.`, ko:`검증되지 않은 안을 논의하지 않도록 동료에게 아이디어마다 연구 자료와 대조하게 하기`},
       {t:`Ask Claude to attach a source to every idea and remove any idea that does not come with a citation.`, ko:`Claude에게 모든 아이디어에 출처를 붙이게 하고 인용이 없는 아이디어는 삭제하기`},
       {t:`Classify the list as needing human override, because Claude produced it without any source documents.`, ko:`원자료 없이 만든 결과물이므로 사람 판단 필요로 분류하기`}
     ],
     explain:{ good:`내부 논의의 출발점으로만 쓰이는 아이디어 목록은 틀려도 비용이 작고, 최종 선택은 팀이 다시 함. 위험도에 비해 과한 검증은 Claude가 아껴 준 시간을 다시 쓰게 만듦. 관련성을 빠르게 확인하는 수준이 이 상황에 맞는 검토 깊이임.`,
       wrongs:[
         `<b>B:</b> 연구 근거 대조는 고위험 산출물에 맞는 검토 수준임. 내일 논의할 내부 아이디어에는 과잉 검증임.`,
         `<b>C:</b> 아이디어 목록은 사실 주장이 아니므로 인용 여부가 품질 기준이 되지 않음. 쓸 만한 아이디어까지 버리게 됨.`,
         `<b>D:</b> 사람 판단 필요는 위험도가 높거나 Claude가 근거를 가질 수 없는 결론에 쓰는 판정임. 원자료가 없다는 사실만으로는 해당하지 않음.`
       ]},
     principle:"원칙 ③ 요구에 맞는 선택",
     hint:`이 목록이 어디에 쓰이고, 틀렸을 때 비용이 얼마나 되는지 확인할 것.`}
  ]},

  /* ================= CH 2 · 2.2 환각·불일치·편향 식별 ================= */
  { id:"p3c2", ch:"CH 2", obj:"2.2", title:"환각·불일치·편향 식별", steps:[
    {type:"concept", kind:"CONCEPT · 개념 설명", h:"환각 관련 실패 패턴과 알아보는 신호",
     html:`<p class="lead">Claude는 틀린 내용도 맞는 내용과 같은 어조로 씀. 오류 표시가 따로 나오지 않으므로 유형별 신호를 알고 읽어야 함.</p>
      <div class="callout term"><b>용어 카드</b> · <b>환각(hallucination)</b>: 근거 없는 내용을 사실처럼 생성하는 현상. 근거 없는 주장, 지어낸 통계·인용·출처 등이 포함됨.</div>
      <ul>
        <li>원인: Claude의 글은 가장 그럴듯한 다음 텍스트를 만드는 방식으로 생성됨. 숫자, 이름, 날짜도 그럴듯하게만 만들어질 수 있음</li>
        <li>환각에는 경고 표시가 붙지 않음. 문서 안의 다른 문장과 겉으로 구별되지 않음</li>
      </ul>
      <h4>환각과 관련된 실패 패턴 네 가지</h4>
      <div class="tbl"><table>
        <tr><th>패턴</th><th>모습</th><th>알아보는 신호</th></tr>
        <tr><td>근거 없는 주장</td><td>"업계 표준으로 자리 잡은 방식이다"</td><td>출처나 데이터 없이 단정함</td></tr>
        <tr><td>조작된 구체 정보(fabricated specifics)</td><td>통계, 날짜, 사람 이름, 인용문, 출처명</td><td>제공한 자료에 없는 정밀한 수치나 이름. 정밀함 자체가 의심 신호임</td></tr>
        <tr><td>확신 어조</td><td>"확실히", "분명히", "입증되었다"</td><td>불확실한 내용을 단정 표현으로 감쌈. 어조는 정확성의 증거가 아님</td></tr>
        <tr><td>능력 환각(capability hallucination)</td><td>"메일을 발송함", "파일을 저장함"</td><td>그 대화에 연결된 도구가 없는 외부 행동을 했다고 주장함</td></tr>
      </table></div>
      <ul>
        <li>조작된 구체 정보가 가장 설득력이 높음. 구체적인 숫자와 이름이 권위처럼 읽히기 때문임</li>
        <li>claude.ai에서 Claude는 대화, 연결된 도구, 업로드한 파일 안에서만 일함. 도구가 주어지지 않은 외부 행동은 수행하지 않음</li>
        <li>Claude가 주장한 외부 행동(발송, 저장, 등록)은 해당 시스템에서 직접 확인하기 전까지 미검증 상태임</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · Claude가 쓴 보도자료 초안과 검토 표시</span>○○푸드, 비건 간편식 3종 출시
국내 비건 간편식 시장은 2025년 3,240억 원 규모로 성장했다. <b>[1]</b>
○○대체식품연구소 김○○ 연구위원은 "비건 간편식이 3년 안에 주류 식품군이 될 것"이라고 말했다. <b>[2]</b>
신제품은 기존 제품보다 나트륨을 40% 줄였다. <b>[3]</b>
(Claude의 마지막 메시지) 완성된 보도자료를 기자 명단 120곳에 메일로 발송 완료함. <b>[4]</b>

[1] 제공한 자료에 없는 정밀 수치, 출처 없음 → 조작된 구체 정보 의심. 원출처를 찾지 못하면 삭제
[2] 실존 여부를 확인할 수 없는 기관·인물·발언 → 원문 확인 전 사용 금지
[3] 제품팀 자료에는 "35% 감소"로 기재됨 → 원자료와 불일치
[4] 메일 도구가 연결되지 않은 대화 → 능력 환각. 실제 발송 여부를 메일 시스템에서 확인</div>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"내부 불일치, 확증 편향 프레이밍, 편향",
     html:`<div class="callout term"><b>용어 카드</b> · <b>내부 불일치(inconsistency)</b>: 한 결과물 안에서 같은 대상에 대한 수치·이름·날짜·주장이 서로 맞지 않는 상태. 긴 출력에서 자주 생김.</div>
      <ul>
        <li>문단 단위로만 읽으면 각 문단은 그럴듯해서 놓치기 쉬움</li>
        <li>확인 방법: 같은 수치·이름·날짜가 나오는 곳을 모두 찾아 서로 맞춰 봄. 어느 쪽이 맞는지는 원자료로 정함</li>
        <li>한 곳만 고치면 다른 곳에 틀린 값이 남음. 해당 값이 나오는 모든 위치를 함께 수정함</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 행사 결과 보고서 속 불일치</span>요약(1쪽): 참가자 1,200명, 만족도 4.6점
본문 표(3쪽): 총 참가자 1,050명
결론(5쪽): "참가자 1,200명 중 70%가 재참가 의향"
→ 등록 시스템 기록으로 실제 참가자 수를 확인한 뒤 세 곳을 모두 수정</div>
      <div class="callout term"><b>용어 카드</b> · <b>확증 편향 프레이밍(confirmation bias framing)</b>: 프롬프트가 원하는 답을 암시해 결과가 그 답 쪽으로 기우는 현상.</div>
      <div class="sample bad"><span class="sl">예시 · 답을 암시한 프롬프트</span>첨부한 판매 데이터를 보고, 신규 앱 푸시 알림이 재구매율을 끌어올린 이유를 정리할 것.</div>
      <div class="sample good"><span class="sl">예시 · 열린 질문으로 바꾼 프롬프트</span>첨부한 판매 데이터를 보고, 푸시 알림 도입 전후의 재구매율 변화를 비교할 것. 알림 효과를 지지하는 근거와 반대하는 근거를 각각 정리할 것. 데이터로 판단할 수 없으면 판단할 수 없다고 적을 것.</div>
      <ul>
        <li>앞의 프롬프트는 효과가 있었다는 전제를 깔고 있어 결과가 지지 근거만 모아 옴</li>
        <li>결론이 프롬프트의 표현과 똑같이 나오면 프레이밍을 먼저 의심함</li>
      </ul>
      <div class="callout term"><b>용어 카드</b> · <b>편향(bias)</b>: 특정 집단이나 관점이 과하게 또는 불리하게 다뤄지는 치우침. 프롬프트, 질문의 틀(프레이밍), Claude가 문장을 만드는 방식 자체에 있는 패턴에서 생김.</div>
      <ul>
        <li>평범한 출력 속에 들어 있음: 한 집단의 의견만 대표로 인용한 요약, 특정 집단에 불리한 표현이 들어간 권고</li>
        <li>채용, 성과평가, 특정 집단 대상 안내문처럼 사람에 관한 업무일수록 개인에게 걸린 위험이 큼</li>
        <li>편향 점검은 일상 검토 항목에 포함됨. 별도의 윤리 활동으로 미루지 않음</li>
        <li>확인 방법: 원자료의 응답 분포와 요약의 인용 분포를 비교함</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 직원 설문 요약 속 편향</span>원자료: 응답 300건 (본사 180건, 지역 매장 120건)
Claude 요약: 주요 의견 5개를 모두 본사 응답에서 인용함. 지역 매장 의견은 "기타 의견 다수"로 한 줄 처리
→ 응답 집단별로 나눠 다시 요약하게 하고, 표현은 사람이 검토</div>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"실패 유형별 확인 행동",
     html:`__MAP:verify__
      <p class="lead">신호를 보면 유형을 정하고, 유형마다 정해진 확인 행동을 함.</p>
      <div class="tbl"><table>
        <tr><th>보이는 신호</th><th>의심 유형</th><th>확인 행동</th></tr>
        <tr><td>출처 없는 정밀 통계</td><td>조작된 구체 정보</td><td>원출처를 찾아 대조. 찾지 못하면 삭제하거나 "확인 필요" 표시</td></tr>
        <tr><td>실존 인물·기관의 발언 인용</td><td>조작된 인용</td><td>원문 기사·발표 자료 확인. 확인 전에는 외부 문서에 쓰지 않음</td></tr>
        <tr><td>"발송함", "저장함", "등록함"</td><td>능력 환각</td><td>메일함·드라이브·해당 시스템에서 직접 확인</td></tr>
        <tr><td>앞뒤에서 다른 수치·날짜</td><td>내부 불일치</td><td>원자료로 맞는 값을 정한 뒤 모든 위치 수정</td></tr>
        <tr><td>결론이 프롬프트 표현과 같고 근거가 한쪽에만 있음</td><td>확증 편향 프레이밍</td><td>답을 암시하지 않는 열린 질문으로 다시 요청</td></tr>
        <tr><td>특정 집단만 대표되거나 불리하게 묘사됨</td><td>편향</td><td>원자료 분포와 비교, 표현 수정, 사람 검토</td></tr>
        <tr><td>"확실히", "입증되었다" 등 단정 표현</td><td>확신 어조</td><td>어조와 무관하게 주장마다 근거 확인</td></tr>
      </table></div>
      <div class="callout">시험 포인트 · 정밀함, 확신, 유창함은 정확성의 증거가 아님. 판단 기준은 그 수치·인용·행동 주장을 제공한 자료, 원출처, 해당 시스템 기록까지 추적할 수 있는지임.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>숫자와 기관명이 구체적일수록 믿을 만하다고 판단함</li>
        <li>같은 대화에서 Claude에게 "이 통계가 실제인가"를 묻고 확인으로 간주함</li>
        <li>Claude가 "발송 완료"라고 하면 발송된 것으로 처리함</li>
        <li>긴 보고서를 문단 단위로만 읽어 앞뒤 불일치를 놓침</li>
        <li>원하는 답을 프롬프트에 넣고, 그 답이 나오면 검증된 것으로 간주함</li>
        <li>근거 없는 수치를 덜 정밀한 표현("약 4분의 3")으로 바꾸면 문제가 해결된다고 봄</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: A precise statistic with no source", ts:"2.2",
     q:`A nonprofit communications lead asks Claude to draft a donor newsletter based on the program notes she uploaded. The draft includes the sentence "According to the 2024 Global Giving Index, 78% of donors give again after receiving an impact update." Nothing about this index appears in her notes. What is the MOST appropriate way to handle this sentence?`,
     ko:`비영리단체 커뮤니케이션 담당자가 업로드한 사업 메모를 바탕으로 후원자 뉴스레터 초안을 요청했다. 초안에 "2024 Global Giving Index에 따르면 성과 소식을 받은 후원자의 78%가 다시 후원한다"는 문장이 들어 있다. 메모에는 이 지수에 관한 내용이 전혀 없다. 이 문장을 다루는 가장 적절한 방법은 무엇인가?`,
     opts:[
       {t:`Treat the figure as possibly invented and keep it only if she can find and read the original source.`, ko:`지어낸 수치일 수 있다고 보고, 원출처를 찾아 확인한 경우에만 남기기`, ok:true},
       {t:`Keep the sentence, because a named index and a specific year suggest that Claude drew on a real report.`, ko:`지수명과 연도가 구체적이므로 실제 보고서를 근거로 했다고 보고 유지하기`},
       {t:`Ask Claude in the same conversation whether the index is real, and keep the sentence if Claude confirms it.`, ko:`같은 대화에서 Claude에게 지수가 실제인지 묻고, 그렇다고 하면 유지하기`},
       {t:`Change "78%" to "about three in four donors" so the claim is less precise and therefore less risky.`, ko:`"78%"를 "후원자 4명 중 약 3명"으로 바꿔 덜 정밀하고 그만큼 덜 위험한 주장으로 만들기`}
     ],
     explain:{ good:`업로드한 자료에 없는 정밀 수치와 출처명은 조작된 구체 정보의 전형적인 신호임. 외부 후원자에게 나가는 문서이므로 원출처를 직접 찾아 확인하기 전에는 쓸 수 없음. 찾지 못하면 문장을 삭제함.`,
       wrongs:[
         `<b>B:</b> 구체적인 이름과 연도는 권위처럼 읽힐 뿐 실재의 증거가 아님. 정밀함 자체가 의심 신호임.`,
         `<b>C:</b> 같은 모델에게 다시 묻는 것은 외부 기준과의 대조가 아님. Claude는 지어낸 출처도 실제라고 답할 수 있음.`,
         `<b>D:</b> 표현을 흐리게 바꿔도 근거 없는 주장이라는 점은 그대로임. 표현 수정은 정확성 문제를 해결하지 않음.`
       ]},
     principle:"원칙 ② 내보내기 전 검증",
     hint:`이 수치가 어디에서 왔는지, 담당자가 제공한 자료와 비교해 볼 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`제공한 자료에 없는 정밀한 수치와 출처는 지어낸 것일 수 있기 때문`, ok:true},
         {t:`공식 가이드 샘플 문항과 같은 유형이기 때문`},
         {t:`후원자 대상 문서는 모두 법무 검토를 거쳐야 하기 때문`},
         {t:`Claude는 어떤 통계도 정확하게 제시하지 못하기 때문`}
       ],
       explain:`판단 근거는 수치의 출처가 담당자 자료 밖에 있다는 점임. 원출처가 확인된 통계라면 Claude가 제시한 것이어도 사용할 수 있음.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: A claimed action", ts:"2.2",
     q:`An event planner is working in a regular Claude chat with no connectors or other tools enabled. She pastes the updated venue details and a list of 40 attendee email addresses, then asks Claude to send the update to everyone. Claude replies, "Done. All 40 attendees have been emailed." What should she do NEXT?`,
     ko:`행사 기획자가 커넥터나 다른 도구를 켜지 않은 일반 Claude 채팅에서 작업하고 있다. 변경된 장소 정보와 참가자 40명의 메일 주소를 붙여 넣고 모두에게 보내 달라고 요청했다. Claude가 "완료. 참가자 40명 모두에게 메일을 보냈다"라고 답했다. 다음에 할 일은 무엇인가?`,
     opts:[
       {t:`Treat the reply as unverified, since that chat had no way to send email, and send the update from her own email system.`, ko:`메일을 보낼 수단이 없는 대화였으므로 미검증으로 보고, 자신의 메일 시스템으로 직접 발송하기`, ok:true},
       {t:`Ask Claude to send a reminder tomorrow to anyone on the list who has not yet replied to the venue update.`, ko:`장소 변경 안내에 아직 회신하지 않은 참가자에게 내일 알림을 다시 보내 달라고 Claude에게 요청하기`},
       {t:`Accept the confirmation and plan to check with a few attendees later in the week to see whether it arrived.`, ko:`확인 메시지를 믿고 이번 주 후반에 일부 참가자에게 수신 여부를 물어보기`},
       {t:`Ask Claude to list the 40 addresses it used, so she can confirm that the messages went to the right people.`, ko:`메일이 맞는 사람에게 갔는지 확인하기 위해 Claude에게 사용한 주소 40개를 나열하게 하기`}
     ],
     explain:{ good:`도구가 연결되지 않은 대화에서 Claude는 외부로 메일을 보낼 수 없음. "보냈다"는 답은 능력 환각이므로 실제로는 아무것도 발송되지 않았다고 보고 행동해야 함. 참가자에게 정보가 전달되려면 기획자가 직접 발송해야 함.`,
       wrongs:[
         `<b>B:</b> 일어나지 않은 발송을 전제로 후속 조치를 요청함. 같은 능력 환각이 반복될 뿐임.`,
         `<b>C:</b> 확인을 미루는 동안 참가자는 바뀐 장소를 모름. 외부 행동 주장은 즉시 직접 확인해야 함.`,
         `<b>D:</b> Claude가 나열한 주소는 발송의 증거가 아님. 확인은 메일 시스템의 발송 기록으로 해야 함.`
       ]},
     principle:"원칙 ② 내보내기 전 검증",
     hint:`그 대화에서 Claude가 실제로 쓸 수 있는 수단이 무엇이었는지 확인할 것.`}
  ]},

  /* ================= CH 3 · 2.3 사실 확인·검증 기법 ================= */
  { id:"p3c3", ch:"CH 3", obj:"2.3", title:"사실 확인·검증 기법", steps:[
    {type:"concept", kind:"CONCEPT · 개념 설명", h:"프롬프트 단계의 예방형 검증",
     html:`<p class="lead">가장 강한 검증은 출력이 생기기 전에 프롬프트에 넣는 것임. 환각을 생성 단계에서 줄이고, 남은 오류도 확인하기 쉬운 형태로 만듦.</p>
      <div class="callout term"><b>용어 카드</b> · <b>그라운딩(grounding)</b>: 답을 제공한 출처에 묶어 생성 범위를 제한하는 기법. 출처 제한, 모름 허용, 인용 요구, 인용문 먼저 추출 후 분석이 해당함.</div>
      <div class="tbl"><table>
        <tr><th>기법</th><th>프롬프트에 넣는 문장</th><th>효과</th></tr>
        <tr><td>출처 제한</td><td>"첨부한 계약서 내용만 근거로 답할 것"</td><td>일반 지식으로 빈칸을 채우는 것을 막음</td></tr>
        <tr><td>모름 허용</td><td>"계약서에서 답을 찾을 수 없으면 '계약서에 해당 내용 없음'이라고 적을 것"</td><td>추측 대신 빈칸이 보이게 함</td></tr>
        <tr><td>인용 요구</td><td>"답마다 근거 조항 번호와 원문 문장을 붙일 것"</td><td>사람이 확인할 위치가 생김</td></tr>
        <tr><td>인용문 먼저 추출(quote first, then analyze)</td><td>"먼저 관련 원문 문장을 그대로 뽑고, 그 문장만으로 분석할 것"</td><td>긴 문서에서 분석 근거를 원문 문장에 고정함</td></tr>
      </table></div>
      <div class="sample good"><span class="sl">예시 · 네 기법을 합친 프롬프트 (물류 위탁 계약서 질의)</span>첨부한 물류 위탁 계약서 내용만 근거로 아래 질문에 답할 것.
1단계: 질문과 관련된 계약서 원문 문장을 조항 번호와 함께 그대로 옮길 것.
2단계: 1단계에서 옮긴 문장만 사용해 답할 것.
계약서에서 답을 찾을 수 없으면 "계약서에 해당 내용 없음"이라고 적고 추측하지 말 것.
질문: 배송 지연 시 위약금 산정 기준과 상한은 무엇인가?</div>
      <ul>
        <li>"정확하게 답할 것", "신중하게 답할 것" 같은 당부는 그라운딩이 아님. 생성 범위를 실제로 제한하지 않음</li>
        <li>역할 지정("계약 전문가로서")도 출처를 제한하지 않음</li>
      </ul>
      <h4>근거 있는 인용과 기억에서 나온 인용</h4>
      <ul>
        <li>웹 검색은 채팅 중 최신 정보를 찾아오는 기능임. Research(리서치 모드)는 여러 출처를 단계적으로 검색해 종합하는 기능임</li>
        <li>웹 검색이나 Research 결과처럼 실제 출처에서 가져온 인용은 그 출처를 직접 열어 확인할 수 있음</li>
        <li>학습한 기억만으로 만든 인용은 똑같이 확신 있어 보여도 별도로 검증해야 함</li>
        <li>학습 기준 시점(training cutoff) 이후에 바뀐 규정·가격·수치는 Claude의 기억에 없음. 최신 정보가 필요하면 웹 검색이나 Research로 출처를 확보한 뒤 그 출처를 직접 확인함</li>
      </ul>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"결과물 단계의 원문 대조·재계산·비교",
     html:`<p class="lead">이미 받은 결과물은 Claude 밖의 기준과 대조해 확인함. 기준은 공식 원문, 실제 실행한 계산 결과, 시스템 기록임.</p>
      <h4>① 권위 있는 원자료와 대조</h4>
      <ul>
        <li>규정 요약의 조항 번호는 공식 규정 원문에서, 계약 조건은 계약서 원본에서, 고객 정보는 사내 시스템 기록에서 확인함</li>
        <li>같은 대화나 새 대화에서 Claude에게 "맞는가"를 다시 묻는 것은 대조가 아님. 같은 모델의 두 번째 응답은 외부 기준이 될 수 없음</li>
        <li>Claude가 스스로 매긴 확신도("확신 9/10")도 정확성의 증거가 아님</li>
      </ul>
      <h4>② 숫자는 실행한 계산으로 재확인</h4>
      <div class="callout term"><b>용어 카드</b> · <b>Code Execution(코드 실행)</b>: Claude가 코드를 직접 작성·실행해 계산값, 차트, 처리된 파일을 돌려주는 기능. 사용자가 코드를 짤 필요는 없음.</div>
      <ul>
        <li>산문으로 생성한 숫자는 그럴듯하기만 할 수 있음. 실제로 실행한 계산은 다시 돌려 확인할 수 있음</li>
        <li>코드는 Claude가 쓰므로 로직에 오류가 있을 수 있음. 보장되는 것은 계산을 읽고, 확인하고, 재실행할 수 있다는 점임</li>
        <li>그래서 결과값과 함께 계산 기준(사용한 열, 제외한 행, 적용한 조건)을 보여 달라고 요청하고 그 기준을 확인함</li>
        <li>스프레드시트 작업에서는 Claude for Excel의 셀 단위 인용(cell-level citations)이 수치를 입력 셀까지 연결해 대조를 돕는 수단으로 소개됨</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · 재계산 요청</span>업로드한 3분기 캠페인 실적 파일로 채널별 CPA(전환 1건당 비용)를 Code Execution으로 계산할 것.
계산에 사용한 열 이름, 제외한 행과 그 조건, 채널별 합계를 함께 표로 보여 줄 것.
앞서 산문으로 제시한 CPA와 값이 다르면 차이를 따로 표시할 것.</div>
      <h4>③ 여러 번 실행해 비교</h4>
      <div class="callout term"><b>용어 카드</b> · <b>Best-of-N 비교</b>: 같은 요청을 여러 번 실행해 결과를 비교하는 방법. 결과가 일치하면 신뢰도가 올라가고, 갈리는 부분은 사람이 확인할 약한 지점이 됨.</div>
      <ul>
        <li>비교로 약한 지점을 찾은 뒤, 그 지점은 원자료나 계산으로 확인함</li>
        <li>여러 답의 평균을 내거나 가장 그럴듯한 답을 고르는 것은 검증이 아님</li>
      </ul>
      <h4>④ 주장된 외부 행동은 해당 시스템에서 확인</h4>
      <ul>
        <li>"저장함", "발송함" 같은 주장은 드라이브, 메일함 등 실제 시스템에서 확인함</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"검증 기법 선택 규칙",
     html:`__MAP:verify__
      <div class="flow"><span class="nd">① 예방<small>출처 제한·모름 허용·인용 요구</small></span><span class="ar">→</span><span class="nd">② 생성<small>Claude 결과물</small></span><span class="ar">→</span><span class="nd">③ 대조<small>공식 원문·시스템 기록</small></span><span class="ar">→</span><span class="nd">④ 재계산<small>숫자는 Code Execution</small></span><span class="ar">→</span><span class="nd hot">⑤ 판정<small>사용·수정·사람 판단</small></span></div>
      <p class="howto"><b>읽는 법</b>화살표 방향 = 작업 순서. ①은 출력 전에 프롬프트에서, ③·④는 출력 후에 Claude 밖의 기준으로 확인하는 단계임. 강조된 칸에서 CH 1의 3분류 판정을 내림.</p>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>계약서·규정에 관한 질문에 답해야 함</td><td>출처 제한 + 모름 허용 + 조항 인용 요구</td><td>생성 범위를 줄이고 확인 위치를 만듦</td></tr>
        <tr><td>100쪽 보고서에서 특정 주제만 분석</td><td>관련 원문을 먼저 추출하게 한 뒤 그 문장만으로 분석</td><td>분석 근거가 원문 문장에 고정됨</td></tr>
        <tr><td>이미 받은 요약에 조항 번호·인용이 있음</td><td>공식 원문과 직접 대조</td><td>확신 어조와 자기 평가는 증거가 아님</td></tr>
        <tr><td>보고·결정에 쓸 합계·비율</td><td>Code Execution으로 재계산하고 계산 기준 확인</td><td>산문 숫자는 그럴듯하기만 할 수 있음. 코드 로직도 확인 대상임</td></tr>
        <tr><td>최신 규정·시장 수치가 필요</td><td>웹 검색이나 Research로 출처 확보 후 출처 확인</td><td>학습 기준 시점 이후 정보는 기억에 없음</td></tr>
        <tr><td>같은 질문의 답이 실행마다 다름</td><td>갈리는 지점을 찾아 원자료로 확인</td><td>불일치가 약한 지점을 알려 줌</td></tr>
      </table></div>
      <div class="callout">시험 포인트 · 검증 기준은 Claude 밖에 있어야 함. Claude에게 다시 확인시키기와 확신도 점수 받기는 같은 모델 안에서 끝나므로 검증이 되지 않음. 기준이 되는 것은 공식 원문, 실행한 계산, 시스템 기록임.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>같은 대화나 새 대화에서 Claude에게 "이 내용이 맞는가"를 물어 검증을 대신함</li>
        <li>Claude가 매긴 확신도 점수로 사용 여부를 정함</li>
        <li>산문으로 받은 합계를 보고서에 그대로 옮김</li>
        <li>Code Execution 결과라면 로직 확인 없이 무조건 맞다고 봄</li>
        <li>"정확하게 답할 것" 같은 막연한 당부를 그라운딩으로 착각함</li>
        <li>같은 계산을 여러 번 시켜 평균을 냄</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Questions about a long contract", ts:"2.3",
     q:`A procurement specialist uses Claude to answer colleagues' questions about a 60-page supplier contract she uploaded. Last week, one answer described a late-delivery penalty that does not appear anywhere in the contract. She wants to change how she asks questions so that this is less likely and easier to catch. Which approach is BEST?`,
     ko:`구매 담당자가 업로드한 60쪽 공급 계약서에 대한 동료들의 질문에 Claude로 답하고 있다. 지난주 한 답변에 계약서 어디에도 없는 납기 지연 위약금이 설명되어 있었다. 담당자는 이런 일이 덜 생기고, 생겨도 쉽게 잡히도록 질문 방식을 바꾸려 한다. 가장 좋은 방법은 무엇인가?`,
     opts:[
       {t:`Tell Claude to answer only from the contract, say so when it has no answer, and quote the supporting clause each time.`, ko:`계약서만 근거로 답하고, 답이 없으면 없다고 밝히고, 매번 근거 조항을 인용하게 지시하기`, ok:true},
       {t:`Ask Claude to act as an experienced contract lawyer and to be especially careful and precise in every single answer it gives.`, ko:`숙련된 계약 전문 변호사 역할을 맡기고 모든 답을 특히 신중하고 정확하게 하라고 요청하기`},
       {t:`Ask Claude to rate its confidence from 1 to 10 for each answer and to flag any answer that scores below 8.`, ko:`답마다 1~10점 확신도를 매기게 하고 8점 미만은 표시하게 하기`},
       {t:`Paste the full contract again before every question so it stays fresh, and ask for shorter answers.`, ko:`계약서 내용이 흐려지지 않도록 질문마다 전문을 다시 붙여 넣고 짧게 답하게 하기`}
     ],
     explain:{ good:`출처 제한은 계약서 밖의 내용으로 빈칸을 채우는 것을 막음. 모름 허용은 추측 대신 빈칸을 보이게 하고, 조항 인용은 동료가 바로 원문을 확인할 위치를 줌. 세 가지를 합치면 환각이 줄고 남은 오류도 쉽게 잡힘.`,
       wrongs:[
         `<b>B:</b> 역할 지정과 막연한 당부는 생성 범위를 제한하지 않음. 계약서에 없는 조항이 다시 나올 수 있음.`,
         `<b>C:</b> Claude가 매긴 확신도는 정확성의 증거가 아님. 지어낸 조항에도 높은 점수를 줄 수 있음.`,
         `<b>D:</b> 자료를 반복해 붙여 넣어도 계약서 밖 내용을 막는 지시가 없음. 짧은 답은 확인할 근거를 오히려 줄임.`
       ]},
     principle:"원칙 ① 요청의 구체화",
     hint:`지문의 두 가지 목표(오류가 덜 생기게 하기, 생긴 오류를 쉽게 잡기)를 각 선택지가 모두 충족하는지 확인할 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`답의 범위를 계약서로 묶고, 모를 때 빈칸을 보이게 하고, 확인할 조항 위치를 남기기 때문`, ok:true},
         {t:`가장 최근에 소개된 프롬프트 기법이기 때문`},
         {t:`역할을 지정하지 않으면 Claude가 계약서를 읽지 못하기 때문`},
         {t:`계약서 질문에는 항상 최상위 모델을 써야 하기 때문`}
       ],
       explain:`정답은 생성 범위 제한, 빈칸 표시, 확인 위치 제공을 함께 갖춤. 나머지 근거는 사실이 아니거나 이 상황의 문제와 관련이 없음.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Figures headed for payroll", ts:"2.3",
     q:`A sales operations manager asked Claude to total each rep's quarterly commission from an uploaded sales file. Claude answered with a paragraph listing a total for each of the 14 reps. The figures will be sent to the payroll team on Friday. Which way of validating them is MOST appropriate?`,
     ko:`영업 운영 매니저가 업로드한 판매 파일로 영업 담당자별 분기 수수료 합계를 내 달라고 요청했다. Claude는 14명의 합계를 문단으로 나열해 답했다. 이 수치는 금요일에 급여 담당 부서로 넘어간다. 가장 적절한 검증 방법은 무엇인가?`,
     opts:[
       {t:`Have Claude recompute the totals from the file using code execution, and check which rows and rules it used.`, ko:`파일로 Code Execution 재계산을 시키고, 계산에 쓰인 행과 규칙을 확인하기`, ok:true},
       {t:`Open a new chat, paste in the paragraph, and ask Claude to check whether each of the totals is correct.`, ko:`새 대화를 열어 문단을 붙여 넣고 합계가 맞는지 Claude에게 확인시키기`},
       {t:`Run the same request three more times and send payroll the average of the four totals for each rep.`, ko:`같은 요청을 세 번 더 실행해 담당자별 네 합계의 평균을 보내기`},
       {t:`Ask Claude to explain its arithmetic step by step in prose and approve the totals if the logic reads well to her.`, ko:`계산 과정을 산문으로 단계별 설명하게 하고 논리가 자연스러우면 승인하기`}
     ],
     explain:{ good:`급여에 쓰이는 수치는 정확해야 함. 산문으로 생성한 숫자는 그럴듯하기만 할 수 있음. Code Execution은 실제 계산을 실행해 다시 확인할 수 있는 값을 냄. 다만 코드도 Claude가 쓰므로 어떤 행과 수수료 규칙을 적용했는지 확인해야 검증이 끝남.`,
       wrongs:[
         `<b>B:</b> 같은 모델에게 다시 묻는 것은 외부 기준과의 대조가 아님. 산문으로 다시 계산한 값도 같은 문제를 가짐.`,
         `<b>C:</b> 틀릴 수 있는 값 여러 개의 평균은 검증된 값이 아님. 오류가 평균에 섞일 뿐임.`,
         `<b>D:</b> 읽기 좋은 설명은 계산이 맞다는 증거가 아님. 실제로 실행한 계산이 필요함.`
       ]},
     principle:"원칙 ② 내보내기 전 검증",
     hint:`급여 금액처럼 정확해야 하는 숫자를 어떤 방식으로 만들어야 다시 확인할 수 있는지 생각할 것.`}
  ]},

  /* ================= CH 4 · 2.4 사람 검토·추가 검증 판단 ================= */
  { id:"p3c4", ch:"CH 4", obj:"2.4", title:"사람 검토·추가 검증 판단", steps:[
    {type:"concept", kind:"CONCEPT · 개념 설명", h:"사람 검토 의무를 정하는 네 가지 기준",
     html:`<p class="lead">사람 검토 여부는 결과물의 완성도나 Claude의 확신 정도로 정하지 않음. 결과물이 틀렸을 때의 결과와 결과물이 갈 곳으로 정함.</p>
      <div class="callout term"><b>용어 카드</b> · <b>사람 검토</b>: 결과물을 사용하거나 내보내기 전에 책임 있는 사람이 정확성과 적합성을 확인하는 단계.</div>
      <div class="callout term"><b>용어 카드</b> · <b>위험 임계 기준(risk thresholds)</b>: 사람 검토 의무를 정하는 네 가지 기준. Stakes, Reversibility, Audience, Regulatory exposure로 구성됨.</div>
      <div class="tbl"><table>
        <tr><th>기준</th><th>확인 질문</th><th>검토 필수 쪽 예</th><th>가벼운 확인 쪽 예</th></tr>
        <tr><td>Stakes (오류 비용)</td><td>틀리면 비용이 큰가</td><td>이사회 보고 재무 수치</td><td>팀 점심 메뉴 설문 문항</td></tr>
        <tr><td>Reversibility (되돌릴 수 있음)</td><td>내보낸 뒤 되돌릴 수 있는가</td><td>발송한 고객 안내문, 제출한 보고서</td><td>공유 문서 속 수정 가능한 초안</td></tr>
        <tr><td>Audience (청중)</td><td>누가 읽는가</td><td>외부 고객, 임원, 규제 기관</td><td>작성자 본인, 소규모 내부 팀</td></tr>
        <tr><td>Regulatory exposure (규제 노출)</td><td>법·계약·규칙이 적용되는가</td><td>개인정보(PII) 처리 방침 안내, 금융 상품 설명</td><td>사내 동호회 공지</td></tr>
      </table></div>
      <ul>
        <li>Stakes가 높으면 출력이 얼마나 확신에 차 있든 사람 검토를 거침</li>
        <li>되돌릴 수 없는 결과물에는 수정 가능한 초안보다 높은 기준을 적용함</li>
        <li>외부·임원·규제 기관 대상 결과물은 내부 작업 초안보다 높은 수준의 검토가 필요함</li>
        <li>AI를 썼다는 사실이 법·계약상 의무를 없애지 않음</li>
      </ul>
      <h4>"검토 없이 내보내지 말 것" 목록의 사전 지정</h4>
      <ul>
        <li>검토 여부는 사고가 난 뒤 그 자리에서 정하지 않음. 정책으로 미리 정해 둠</li>
        <li>마감 직전의 즉석 판단은 검토 생략으로 이어지기 쉬움</li>
      </ul>
      <div class="sample good"><span class="sl">예시 · 팀 운영 규칙 (사전 지정 목록)</span>다음 결과물은 지정 검토자의 확인 없이 내보내지 않음.
1. 고객에게 전달하는 최종 산출물 (제안서, 결과 보고서, 고객 안내문)
2. 감사 대상이거나 재무적으로 중요한 계산
3. 규제 대상·기밀·고민감 데이터가 들어간 모든 결과물
4. 공개·법적 커뮤니케이션 (보도자료, 공식 입장문, 약관 변경 안내)
검토자: 해당 산출물 담당 팀장
확인 항목: 수치, 인용, 고객명, 약속 문구
시점: 발송·제출 전</div>
      <ul>
        <li>쓸모 있는 규칙은 누가(책임 있는 역할), 무엇을(잡아야 할 위험), 언제(사용 전) 확인하는지 담음</li>
        <li>"사람이 한 번 본다"는 검토 단계로 인정되지 않음. 검토자가 실제로 배정되지 않으면 사람 검토 단계는 작동하지 않음</li>
      </ul>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"반복 중단과 에스컬레이션 시점",
     html:`<div class="callout term"><b>용어 카드</b> · <b>수확 체감(diminishing returns)</b>: 반복해도 개선이 거의 없는 상태. 프롬프트를 더 고치는 대신 사람에게 넘길 신호.</div>
      <ul>
        <li>이 신호는 눈에 띄는 오류로 나타나지 않음. 수정 회차마다 개선 폭이 줄어드는 흐름 자체가 신호임</li>
        <li>반복으로 더 나아지지 않는 결과물에는 사람의 판단이 필요함. 프롬프트로는 상황이 요구하는 판단을 만들어 낼 수 없음</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 고객 제안서 수정 기록</span>1차 → 2차: 목차 재구성, 가격 섹션 추가 (큰 개선)
2차 → 3차: 사례 2건 교체 (개선)
3차 → 4차: 문장 일부 수정 (작은 변화)
4차 → 5차: 형용사 몇 개 교체 (변화 거의 없음)
판정: 프롬프트 반복 중단. 고위험 외부 산출물이므로 이 제안서를 처음 읽는 동료에게 검토 요청</div>
      <h4>에스컬레이션 대상과 방식</h4>
      <ul>
        <li>Needs human override 판정이 나면 결과물을 해당 분야 책임자에게 넘김. 규제 해석은 법무·컴플라이언스, 재무 수치는 재무 담당, 고객 계약 문구는 계약 책임자가 대상임</li>
        <li>Claude 결과물은 전문가가 참고할 초안으로 넘김. 전문가 판단을 대신하지 않음</li>
        <li>넘길 때는 무엇을 확인했고 무엇이 불확실한지 함께 적어 전달함</li>
      </ul>
      <h4>추가 검증을 함께 거치는 경우</h4>
      <ul>
        <li>사람 검토와 추가 검증은 함께 쓰일 수 있음. 이사회 보고 재무 요약은 Code Execution 재계산과 책임자 검토를 모두 거침</li>
        <li>일부 수치를 확인해 맞았더라도 규제 기관 제출물은 사람 검토를 생략할 수 없음</li>
        <li>겉보기 완성도는 판단에 쓰지 않음. 깔끔한 표와 매끄러운 문장도 같은 기준으로 검토함</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"검토 수준 결정 규칙",
     html:`__MAP:verify__
      <div class="flow"><span class="nd">① 오류 비용<small>Stakes</small></span><span class="ar">→</span><span class="nd">② 되돌릴 수 있음<small>Reversibility</small></span><span class="ar">→</span><span class="nd">③ 청중<small>Audience</small></span><span class="ar">→</span><span class="nd">④ 규제 노출<small>Regulatory exposure</small></span><span class="ar">→</span><span class="nd hot">검토 수준 결정<small>바로 사용 · 사람 검토 · 에스컬레이션</small></span></div>
      <p class="howto"><b>읽는 법</b>화살표 방향 = 확인 순서. 네 칸 중 하나라도 높은 쪽에 걸리면 오른쪽 결정은 바로 사용이 될 수 없고 사람 검토 이상이 됨. 결과물의 겉모습은 어느 칸에도 들어가지 않음.</p>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>내부 회의 안건 초안</td><td>바로 사용</td><td>저위험·가역·내부·비규제로 네 기준 모두 낮음</td></tr>
        <tr><td>깔끔해 보이는 이사회 보고 재무 요약</td><td>사람 검토 + Code Execution 재계산</td><td>오류 비용, 임원 청중, 일부 비가역에 걸림. 겉모습은 근거가 아님</td></tr>
        <tr><td>다섯 번 수정한 고객 제안서, 최근 수정의 변화가 미미함</td><td>반복 중단, 동료 검토 요청</td><td>수확 체감 + 외부 고위험 산출물</td></tr>
        <tr><td>일부 수치를 확인한 규제 기관 제출 자료</td><td>제출 전 지정 검토자 확인 필수</td><td>부분 검증이 맞아도 규제 노출 기준에 걸림</td></tr>
        <tr><td>규정 원문 없이 기억으로 만든 규정 해석</td><td>컴플라이언스 담당에게 에스컬레이션</td><td>바뀐 규정을 반영하지 못했을 수 있음</td></tr>
        <tr><td>마감 직전인데 검토자가 자리에 없음</td><td>제출 일정 조정 또는 대리 검토자 지정</td><td>제출 후 사후 보고는 검토를 대신하지 못함</td></tr>
      </table></div>
      <div class="callout">시험 포인트 · 검토 필요 여부는 오류 비용, 되돌릴 수 있는지, 청중, 규제 적용 여부로 정함. 결과물이 외부·임원·규제 기관으로 가거나 내보낸 뒤 되돌리기 어려우면 사람 검토가 필요함. 저위험 내부 초안에 결재 단계를 추가하는 것은 과잉 대응임.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>결과물이 깔끔하고 Claude가 확신하므로 검토를 생략함</li>
        <li>마감 때문에 먼저 제출하고 오류는 나중에 보고함</li>
        <li>"팀장이 한 번 볼 것"처럼 누가·무엇을·언제가 없는 검토 규칙을 만듦</li>
        <li>개선이 멈췄는데 프롬프트만 계속 고치거나 모델만 바꿈</li>
        <li>Claude에게 자기 결과물의 법적 위험을 검토시키고 사람 검토를 대신함</li>
        <li>저위험 내부 초안까지 모두 결재에 올려 도구가 아낀 시간을 잃음</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: A public statement under time pressure", ts:"2.4",
     q:`A communications manager at a regional water utility uses Claude to draft a public statement about a service outage. It will be posted on the company website and sent to local media within the hour. The draft reads well and matches the internal incident notes she provided. What is the MOST appropriate step before release?`,
     ko:`지역 상수도 회사의 커뮤니케이션 매니저가 단수 사고에 대한 공식 입장문 초안을 Claude로 작성했다. 입장문은 한 시간 안에 회사 홈페이지에 게시되고 지역 언론에 배포된다. 초안은 잘 읽히고 매니저가 제공한 내부 사고 기록과도 일치한다. 공개 전에 할 가장 적절한 조치는 무엇인가?`,
     opts:[
       {t:`Have the designated reviewer confirm the facts and wording before the statement is published.`, ko:`공개 전에 지정 검토자가 사실과 문구를 확인하게 하기`, ok:true},
       {t:`Publish it now, because the draft already matches the internal incident notes she gave Claude.`, ko:`제공한 내부 사고 기록과 이미 일치하므로 바로 공개하기`},
       {t:`Ask Claude to review its own draft for legal and reputational risks, and publish it if none are found.`, ko:`Claude에게 법적·평판 위험을 스스로 검토시키고 문제가 없으면 공개하기`},
       {t:`Publish it on time and prepare a correction notice in case any detail later turns out to be wrong.`, ko:`제때 공개하고, 나중에 틀린 내용이 발견될 경우를 대비해 정정 공지를 준비하기`}
     ],
     explain:{ good:`공개 입장문은 외부 청중에게 가고, 게시와 배포 후에는 되돌리기 어려우며, 잘못 말하면 오래 남는 커뮤니케이션임. 이런 결과물은 초안 품질과 관계없이 사람 검토를 거쳐야 함. 한 시간이라는 마감은 검토를 생략할 이유가 되지 않음.`,
       wrongs:[
         `<b>B:</b> 내부 기록과의 일치는 원자료 대조 하나를 통과했다는 뜻임. 외부 공개 문구의 적절성과 책임 확인은 별도임.`,
         `<b>C:</b> Claude의 자기 검토는 책임 있는 사람의 확인을 대신하지 않음.`,
         `<b>D:</b> 정정 공지는 이미 배포된 내용을 되돌리지 못함. 되돌리기 어려운 결과물은 내보내기 전에 검토함.`
       ]},
     principle:"원칙 ⑤ 정책·사람 판단 우선",
     hint:`이 결과물이 누구에게 가는지, 내보낸 뒤 되돌릴 수 있는지 확인할 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`외부에 공개되면 되돌리기 어렵고 오래 남는 커뮤니케이션이기 때문`, ok:true},
         {t:`공식 입장문은 관례상 항상 결재를 받기 때문`},
         {t:`Claude 초안은 내부 기록과 일치할 수 없기 때문`},
         {t:`한 시간 안에 내보내야 하므로 속도가 가장 중요하기 때문`}
       ],
       explain:`외부 청중과 되돌리기 어려움이 사람 검토 의무를 정함. 관례 자체는 근거가 아니며, 초안 품질은 판단 기준에 들어가지 않음.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Revisions that no longer improve", ts:"2.4",
     q:`A consultant has revised a client strategy memo with Claude seven times. Her prompts already include the client's background, goals, and constraints. The last two rounds changed only a few words, but she still feels the recommendations do not quite fit the client's situation. The memo goes to the client's leadership team in two days. What should she do NEXT?`,
     ko:`컨설턴트가 고객 전략 메모를 Claude와 함께 일곱 번 수정했다. 프롬프트에는 이미 고객의 배경, 목표, 제약 조건이 들어 있다. 최근 두 번의 수정은 단어 몇 개만 바꿨지만, 권고안이 고객 상황에 잘 맞지 않는다는 느낌은 여전하다. 메모는 이틀 뒤 고객 경영진에게 전달된다. 다음에 할 일은 무엇인가?`,
     opts:[
       {t:`Stop revising with Claude and ask an experienced colleague to review the recommendations against the client's situation.`, ko:`Claude와의 수정을 멈추고 경험 많은 동료에게 고객 상황 기준으로 권고안 검토를 요청하기`, ok:true},
       {t:`Rewrite the prompt from scratch with more background on the client and run several more revision rounds.`, ko:`고객 배경을 더 넣어 프롬프트를 처음부터 다시 쓰고 수정을 몇 번 더 반복하기`},
       {t:`Switch to the most capable model available and repeat the latest revision request with the same instructions.`, ko:`가장 상위 모델로 바꿔 같은 지시로 최근 수정 요청을 반복하기`},
       {t:`Send the memo to the client now, because the changes have stopped and the content has clearly stabilized.`, ko:`변화가 멈췄고 내용이 안정되었으므로 지금 고객에게 보내기`}
     ],
     explain:{ good:`최근 수정에서 변화가 거의 없는 것은 수확 체감 신호임. 남은 문제는 고객 상황에 대한 판단이고, 이 판단은 프롬프트를 더 고쳐서 얻을 수 없음. 고객 경영진에게 가는 고위험 외부 산출물이므로 사람의 검토로 넘기는 것이 맞음.`,
       wrongs:[
         `<b>B:</b> 고객 배경은 이미 프롬프트에 있으므로 명세 부족이 원인이 아님. 일곱 번의 반복 뒤에도 같은 문제가 남았고, 반복을 더 늘리면 수확 체감 상태가 길어질 뿐임.`,
         `<b>C:</b> 모델 교체는 고객 상황에 대한 판단 부족을 해결하지 않음.`,
         `<b>D:</b> 변화가 멈춘 것은 품질 확인이 아님. 작성자 스스로 권고안에 의문이 있는 상태로 외부에 보내는 것은 위험함.`
       ]},
     principle:"원칙 ⑤ 정책·사람 판단 우선",
     hint:`최근 수정 회차의 변화 폭과, 남은 문제가 어떤 종류의 판단인지 확인할 것.`}
  ]},

  /* ================= CH 5 · 2.5 청중 맞춤 편집·비교 ================= */
  { id:"p3c5", ch:"CH 5", obj:"2.5", title:"청중 맞춤 편집·비교", steps:[
    {type:"concept", kind:"CONCEPT · 개념 설명", h:"편집 3단계와 청중 보정",
     html:`<p class="lead">정확한 초안도 완성품은 아님. 사실 확인을 마친 초안을 읽을 사람에게 맞게 손질해야 산출물이 됨.</p>
      <div class="callout term"><b>용어 카드</b> · <b>편집 패스(editing pass)</b>: 초안을 산출물로 만드는 세 단계 손질. 명료성 → 어조 → 서식 순으로 진행함.</div>
      <div class="tbl"><table>
        <tr><th>단계</th><th>하는 일</th><th>확인 질문</th></tr>
        <tr><td>① 명료성</td><td>군더더기, 반복, 과도한 단서("~일 수도 있으며 경우에 따라") 제거</td><td>한 번 읽고 요점이 보이는가</td></tr>
        <tr><td>② 어조</td><td>관계와 상황에 맞게 격식 조정</td><td>임원·고객·동료 중 누구에게 쓰는 글인가</td></tr>
        <tr><td>③ 서식</td><td>읽히는 방식에 맞춰 구성</td><td>메신저, 인쇄 보고서, 슬라이드 중 어디서 읽히는가</td></tr>
      </table></div>
      <div class="sample bad"><span class="sl">예시 · 편집 전 (Claude 초안 그대로)</span>이번 주 캠페인은 전반적으로 긍정적인 반응을 얻었다고 볼 수 있으며, 여러 채널에서 다양한 성과가 있었으나 일부 채널에서는 기대에 다소 미치지 못한 측면도 있었던 것으로 보임. 검색 광고는 비교적 효율이 좋았던 것으로 판단되며, 인스타그램의 경우 전환당 비용이 상대적으로 높은 편이었을 가능성이 있음. 향후 예산 배분에 대해서는 추가 논의가 필요할 수도 있음.</div>
      <div class="sample good"><span class="sl">예시 · 편집 후 (마케팅 본부장 보고용)</span>결정 요청: 인스타그램 예산 30%를 검색 광고로 이동 (금요일까지)
· 전체 전환 1,240건, 목표 대비 103%
· 검색 광고 CPA 8,200원 (채널 중 최저)
· 인스타그램 CPA 21,000원 (채널 중 최고)
· 이동 시 같은 예산으로 전환 약 90건 추가 예상 (계산 근거 첨부)</div>
      <ul>
        <li>명료성: 단서 표현을 빼고 수치로 바꿈</li>
        <li>어조: 본부장에게 필요한 결정 요청을 첫 줄에 둠</li>
        <li>서식: 메신저에서도 읽히도록 짧은 항목으로 나눔</li>
        <li>편집 전에 초안의 수치를 원자료로 확인함. 문장을 다듬어도 틀린 수치는 그대로 남음</li>
      </ul>
      <div class="callout term"><b>용어 카드</b> · <b>청중 보정(audience calibration)</b>: 같은 사실을 읽는 사람에 맞게 내용 선택, 깊이, 어조를 조정하는 것.</div>
      <div class="tbl"><table>
        <tr><th>청중</th><th>앞에 둘 것</th><th>줄이거나 뺄 것</th><th>어조</th></tr>
        <tr><td>임원</td><td>결정할 사항과 그 영향</td><td>분석 방법과 과정</td><td>간결, 결론 우선</td></tr>
        <tr><td>실무팀</td><td>세부 수치, 방법, 담당·기한이 있는 실행 항목</td><td>임원용 요약의 반복</td><td>구체적</td></tr>
        <tr><td>외부 (고객·언론·협력사)</td><td>상대에게 필요하고 공개해도 되는 사실</td><td>내부 수치, 미확정 원인, 내부 인명·용어</td><td>공식적, 공개 범위 통제</td></tr>
      </table></div>
      <div class="sample good"><span class="sl">예시 · 같은 분석의 청중별 버전 (2분기 고객 이탈 분석)</span>[임원용] 2분기 이탈률 4.8%, 1분기 대비 1.2%p 상승. 주요 원인은 요금 인상 직후 해지 문의 응답 지연. 상담 인력 2명 증원 승인 요청 (월 900만 원)
[실무팀용] 해지 문의 평균 응답 시간 26시간 (목표 8시간). 요금 인상 공지 후 2주간 문의 3배 증가. 실행 항목: ① 해지 문의 전용 대기열 신설 (CS팀장, 7월 15일까지) ② 응답 템플릿 3종 작성 (운영팀, 7월 10일까지)
[고객 공지용] 7월부터 상담 인력을 늘리고, 요금·해지 관련 문의는 전용 창구에서 먼저 처리한다.</div>
      <ul>
        <li>세 버전의 사실은 같음. 고른 내용, 깊이, 어조가 다름</li>
        <li>고객 공지용에서는 이탈률, 비용, 내부 담당 조직을 뺌. 공개 범위 밖의 내부 정보이기 때문임</li>
      </ul>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"여러 초안 비교와 선택",
     html:`<p class="lead">품질이 중요한 산출물은 초안 여러 개를 만들어 비교한 뒤 가장 좋은 바탕을 골라 편집함. 초안 하나를 계속 고치는 방식보다 효율적임.</p>
      <ul>
        <li>방법: 같은 요청을 여러 번 실행하거나 여러 모델로 실행해 초안 여러 개를 받음</li>
        <li>약한 초안 하나를 살리는 것보다 비교가 비용이 적게 듦</li>
        <li>예상하지 못한 구성이나 관점을 얻을 수 있음</li>
        <li>비교 기준은 청중과 목적에서 나옴. 기준 없이 마음에 드는 초안을 고르는 것은 비교가 아님</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 초안 비교표 (신제품 출시 안내 메일 3안)</span>기준: ① 첫 문장의 핵심 메시지 ② 고객 혜택의 구체성 ③ 브랜드 어조 ④ 모바일에서 읽을 수 있는 길이
1안: ② 우수, ① 미흡 (회사 소개로 시작)
2안: ①·③ 우수, ② 보통 (혜택 설명이 추상적)
3안: ④ 미흡 (길이 초과), ③ 미흡 (과장 표현)
선택: 2안을 바탕으로 1안의 혜택 문단을 가져와 편집. 편집 후 가격·일정 수치를 원자료와 다시 대조</div>
      <h4>비교와 재생성의 구분</h4>
      <ul>
        <li>비교가 맞는 경우: 프롬프트가 이미 청중·어조·형식·핵심 메시지를 담고 있고, 산출물의 품질이 중요함</li>
        <li>원인 진단이 먼저인 경우: 결과가 일반적이거나 요청과 다른 방향으로 나옴. 이때는 빠진 맥락이나 조건을 찾아 고침(D1·D7). 같은 프롬프트를 여러 번 돌려 고르는 것은 해결책이 아님</li>
        <li>초안을 섞고 다듬는 과정에서 수치가 바뀔 수 있음. 편집이 끝난 뒤 수치와 고유명사를 원자료와 다시 대조함</li>
      </ul>
      <h4>외부용 결과물의 추가 확인</h4>
      <ul>
        <li>외부 문서는 공개 범위를 먼저 정함. 내부 수치, 미확정 원인, 내부 인명은 뺌</li>
        <li>조직 정책이 AI 지원 사실의 공개를 요구하는지 확인함. 확실하지 않으면 공개하는 쪽이 책임 있는 기본값임(D6)</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"청중별 편집 규칙",
     html:`__MAP:verify__
      <div class="flow"><span class="nd">① 사실 확인<small>CH 1~3</small></span><span class="ar">→</span><span class="nd">② 명료성<small>군더더기 제거</small></span><span class="ar">→</span><span class="nd">③ 어조<small>관계에 맞는 격식</small></span><span class="ar">→</span><span class="nd">④ 서식<small>읽히는 방식</small></span><span class="ar">→</span><span class="nd hot">⑤ 청중별 버전<small>임원·실무·외부</small></span></div>
      <p class="howto"><b>읽는 법</b>화살표 방향 = 작업 순서. 편집(②~④)은 사실 확인(①) 다음에 함. 다듬은 문장은 틀린 사실을 더 그럴듯하게 보이게 만들 수 있기 때문임.</p>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>분석 결과를 임원에게 보고</td><td>결정과 영향을 앞에 두고 방법을 뺀 별도 버전</td><td>임원은 판단에 필요한 내용만 봄</td></tr>
        <tr><td>같은 분석을 실무팀에 공유</td><td>세부 수치·방법 유지, 담당·기한이 있는 실행 항목 추가</td><td>실무팀은 실행을 맡음</td></tr>
        <tr><td>장애 원인 분석을 고객에게 공유</td><td>확인된 사실, 영향, 후속 조치만 담은 외부 버전 + 사람 검토</td><td>외부 문서는 되돌리기 어렵고 공개 범위 통제가 필요함</td></tr>
        <tr><td>정확하지만 길고 딱딱한 초안</td><td>길이·어조 조건만 바꿔 재요청하거나 직접 편집</td><td>내용은 이미 맞음. 처음부터 다시 만들 이유가 없음</td></tr>
        <tr><td>중요한 캠페인 문구, 프롬프트는 충분히 구체적임</td><td>초안 여러 개를 받아 기준표로 비교한 뒤 가장 좋은 바탕을 편집</td><td>약한 초안 하나를 살리는 것보다 효율적임</td></tr>
      </table></div>
      <div class="callout">시험 포인트 · 청중마다 결정, 실행, 공개 범위가 다르므로 같은 결과물을 모든 청중에게 그대로 보내지 않음. 문장 다듬기는 사실 오류를 고치지 않음. 공식 가이드 샘플 1(규정 요약 속 조항 번호 인용)에서 "더 격식 있게 고쳐 보내기"가 오답인 이유도 같음.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>Claude 원본 출력을 그대로 임원에게 보냄</li>
        <li>모든 청중에게 같은 전체 초안을 보냄</li>
        <li>문장을 격식 있게 다듬은 뒤 검증이 끝났다고 봄</li>
        <li>외부용 버전에 내부 수치나 미확정 원인을 남김</li>
        <li>비교 기준 없이 초안을 고르거나, 원인 진단 없이 같은 프롬프트로 재생성만 반복함</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: A training survey analysis", ts:"2.5",
     q:`A learning and development manager has an accurate six-page analysis of this year's employee training survey. She must brief the chief operating officer, who has five minutes for the topic and must approve next year's training budget. She also needs to give the training coordinators clear next steps. Which approach is BEST?`,
     ko:`인재개발 매니저에게 올해 직원 교육 설문을 분석한 정확한 6쪽 자료가 있다. 매니저는 이 내용을 COO에게 보고해야 한다. COO는 이 안건에 5분만 쓸 수 있고 내년 교육 예산을 승인해야 한다. 또 교육 담당자들에게는 분명한 다음 할 일을 전달해야 한다. 가장 좋은 방법은 무엇인가?`,
     opts:[
       {t:`Make a short COO brief that leads with the budget decision, plus a detailed coordinator version with owners and deadlines.`, ko:`예산 결정을 앞에 둔 COO용 짧은 보고와, 담당·기한을 넣은 담당자용 상세 버전을 따로 만들기`, ok:true},
       {t:`Send the full six-page analysis to both audiences so that everyone is working from the same complete information.`, ko:`모두가 같은 전체 정보로 일하도록 6쪽 분석을 두 청중에게 그대로 보내기`},
       {t:`Give the COO the coordinators' detailed version, with the most important findings highlighted in bold.`, ko:`담당자용 상세 버전을 COO에게 주되 핵심 결과를 굵게 표시하기`},
       {t:`Ask Claude to cut the analysis down to one page and send that single shorter version to both audiences.`, ko:`분석을 1쪽으로 줄이게 해 그 한 가지 버전을 두 청중에게 보내기`}
     ],
     explain:{ good:`같은 사실이라도 COO에게는 예산 결정과 그 영향이, 담당자에게는 실행할 항목과 기한이 필요함. 한 버전으로 두 청중을 모두 만족시킬 수 없음. 청중별로 내용 선택과 깊이를 바꾼 두 버전이 정답임.`,
       wrongs:[
         `<b>B:</b> 5분 안에 결정해야 하는 COO에게 6쪽 전체를 주면 판단에 필요한 내용을 찾기 어려움.`,
         `<b>C:</b> 굵게 표시하는 것은 서식 조정일 뿐임. 임원에게 필요한 결정 중심 구성은 여전히 없음.`,
         `<b>D:</b> 1쪽 요약은 COO에게는 맞을 수 있으나 담당자에게 필요한 세부와 실행 항목이 빠짐.`
       ]},
     principle:"원칙 ③ 요구에 맞는 선택",
     hint:`두 청중이 이 자료를 받아 각각 무엇을 해야 하는지 비교할 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`같은 사실이라도 독자마다 필요한 내용과 깊이가 다르기 때문`, ok:true},
         {t:`공식 강좌가 두 버전 작성을 권장하기 때문`},
         {t:`임원에게는 세부 수치를 공유하면 안 되기 때문`},
         {t:`Claude 원본에는 항상 틀린 내용이 섞여 있기 때문`}
       ],
       explain:`COO는 결정을, 담당자는 실행을 맡음. 독자의 다음 행동이 다르므로 버전을 나눔.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: A tagline that matters", ts:"2.5",
     q:`A brand marketer needs a tagline for the company's biggest campaign of the year. Her prompt already specifies the target audience, tone, length limit, and key message. Claude's first tagline is acceptable but not memorable. What is the MOST efficient way to reach a strong final version?`,
     ko:`브랜드 마케터에게 올해 가장 큰 캠페인의 태그라인이 필요하다. 프롬프트에는 이미 타깃 고객, 어조, 길이 제한, 핵심 메시지가 들어 있다. Claude가 처음 낸 태그라인은 쓸 만하지만 기억에 남지 않는다. 좋은 최종안에 가장 효율적으로 도달하는 방법은 무엇인가?`,
     opts:[
       {t:`Generate several tagline drafts, compare them against the brief's criteria, and refine the strongest one.`, ko:`여러 초안을 받아 브리프 기준으로 비교하고 가장 좋은 안을 다듬기`, ok:true},
       {t:`Keep asking Claude to improve the first tagline, one round at a time, until it finally feels right to her.`, ko:`마음에 들 때까지 첫 태그라인을 한 번씩 계속 개선하게 하기`},
       {t:`Use the first tagline as it is, because the prompt already contained every detail the campaign needs.`, ko:`프롬프트에 필요한 내용이 다 있었으므로 첫 태그라인을 그대로 쓰기`},
       {t:`Add the words "more creative" and "more premium" to the prompt and regenerate a single new tagline.`, ko:`프롬프트에 "더 창의적으로", "더 고급스럽게"를 추가해 태그라인 하나를 다시 받기`}
     ],
     explain:{ good:`프롬프트가 이미 충분히 구체적이므로 명세 부족은 원인이 아님. 품질이 중요한 산출물은 초안 여러 개를 기준에 비춰 비교하고 가장 좋은 바탕을 편집하는 편이 약한 초안 하나를 계속 고치는 것보다 효율적임. 비교 과정에서 예상하지 못한 표현도 얻을 수 있음.`,
       wrongs:[
         `<b>B:</b> 초안 하나를 반복 수정하면 첫 초안의 방향을 벗어나기 어렵고 회차마다 개선 폭이 줄어듦.`,
         `<b>C:</b> 연중 가장 큰 캠페인 문구를 "쓸 만한" 수준에서 끝내는 것은 품질 요구에 맞지 않음.`,
         `<b>D:</b> "더 창의적으로" 같은 막연한 표현은 실질적인 명세가 아님. 초안이 하나뿐이라 비교할 대상도 없음.`
       ]},
     principle:"원칙 ③ 요구에 맞는 선택",
     hint:`프롬프트에 이미 무엇이 들어 있는지 보고, 첫 결과가 아쉬운 원인이 프롬프트의 명세에 있는지 판단할 것.`}
  ]},

  /* ================= CH 6 · 2.6 정보 정리·출력 형식 선택 ================= */
  { id:"p3c6", ch:"CH 6", obj:"2.6", title:"정보 정리·출력 형식 선택", steps:[
    {type:"concept", kind:"CONCEPT · 개념 설명", h:"입력 자료 정리",
     html:`<p class="lead">정리된 입력이 정리된 출력을 만듦. 출력 형식을 정하기 전에 Claude에게 넣는 자료부터 정리함.</p>
      <div class="callout term"><b>용어 카드</b> · <b>입력 큐레이션(input curation)</b>: 중복 제거, 라벨링, 무관 자료 제외로 입력 자료를 정리해 출력 품질을 높이는 것. 맞는 자료를 더하는 일과 틀리거나 필요 없는 자료를 빼는 일을 모두 포함함.</div>
      <div class="tbl"><table>
        <tr><th>정리 작업</th><th>필요한 상황</th><th>하지 않으면 생기는 일</th></tr>
        <tr><td>중복 제거</td><td>거의 같은 사본이 여러 개 섞임 (기획안_v2, 기획안_v2_최종, 기획안_v2_최종_수정)</td><td>Claude가 유사본 사이를 맞추느라 혼란이 생기고 옛 버전 수치를 인용함</td></tr>
        <tr><td>라벨링</td><td>승인본과 초안이 섞임, 각 자료의 역할이 불분명함</td><td>초안의 미승인 수치가 확정 수치처럼 쓰임</td></tr>
        <tr><td>무관 자료 제외</td><td>질문과 관련 없는 자료가 함께 들어감</td><td>관련 없는 내용이 출력에 섞임</td></tr>
      </table></div>
      <div class="sample good"><span class="sl">예시 · 라벨을 붙인 입력</span>[자료 1 · 승인본] 2026 하반기 마케팅 예산안_확정.xlsx → 모든 수치의 기준
[자료 2 · 참고용] 상반기 캠페인 결과 보고서.pdf → 비교용. 인용 시 출처 표기
[자료 3 · 초안, 미승인] 신규 채널 제안 메모.docx → 아이디어 참고만. 수치 사용 금지
요청: 자료 1의 수치를 기준으로 하반기 채널별 예산 배분표를 만들 것.</div>
      <ul>
        <li>혼란한 출력의 원인이 중복·혼재 자료라면 모델 등급 상향, 출력 길이 확대, 같은 파일 다시 붙여 넣기, 같은 파일로 새 대화 시작은 해결이 되지 않음</li>
        <li>입력을 정리한 뒤 같은 요청을 다시 실행함</li>
        <li>Project의 지식 베이스(knowledge base)에 같은 문서의 여러 버전이 쌓인 경우도 같음. 대체된 버전을 지움(D5)</li>
      </ul>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"출력 형식 4가지와 선택 기준",
     html:`<p class="lead">출력 형식은 결과물을 다음에 어디에 쓰는지와 숫자를 얼마나 믿어야 하는지에 따라 정함. 보기 좋은 모양은 선택 기준이 아님.</p>
      <div class="callout term"><b>용어 카드</b> · <b>인라인 응답(inline response)</b>: 대화 창 안에 바로 나오는 답. 읽고 그 자리에서 쓰고 끝낼 답에 맞음.</div>
      <div class="callout term"><b>용어 카드</b> · <b>Artifacts(아티팩트)</b>: 대화 흐름과 분리되어 옆에 표시되는 편집 가능한 결과물 블록. 다듬고 재사용하고 공유할 문서, 표, 코드, 간단한 내부 도구에 맞음.</div>
      <div class="callout term"><b>용어 카드</b> · <b>구조화 데이터(structured data)</b>: 표나 정해진 항목 구조(스키마)처럼 틀이 정해진 출력. 다음 도구나 사람이 바로 받아 쓸 데이터에 맞음.</div>
      <div class="tbl"><table>
        <tr><th>형식</th><th>맞는 상황</th><th>업무 예</th></tr>
        <tr><td>인라인 응답</td><td>대화 안에서 읽고 끝낼 답</td><td>회의 전 용어 확인, 메일 답장 문구 아이디어</td></tr>
        <tr><td>Artifacts</td><td>여러 번 다듬고 재사용·공유할 결과물</td><td>행사 운영 매뉴얼, 신입 교육 자료, 팀 내부용 대시보드</td></tr>
        <tr><td>구조화 데이터</td><td>후속 도구나 독자가 바로 받아 쓸 데이터</td><td>고객 관리 시스템(CRM)에 올릴 문의 분류표, 스프레드시트로 옮길 일정표</td></tr>
        <tr><td>Code Execution 결과</td><td>숫자가 맞아야 하고 보고·결정에 쓰임</td><td>분기 매출 집계, 예산 대비 집행률, 차트</td></tr>
      </table></div>
      <div class="sample good"><span class="sl">예시 · 구조화 형식 지정</span>고객 문의 200건을 아래 열 구조의 표로 정리할 것.
열: 문의번호 | 유형 | 긴급도 | 요약
유형은 배송, 환불, 제품, 기타 중 하나만 쓸 것.
긴급도는 상, 중, 하 중 하나만 쓸 것.
요약은 30자 이내로 쓸 것.
유형을 판단할 수 없으면 '기타'로 두고 요약에 이유를 적을 것.</div>
      <h4>출력 형식과 숫자 신뢰도의 관계</h4>
      <ul>
        <li>산문 답 속 숫자는 그럴듯하게 생성된 값일 수 있음. 틀린 합계가 보고서에 들어가면 그 합계를 쓴 모든 슬라이드가 함께 틀림</li>
        <li>보고·결정에 쓸 숫자는 Code Execution으로 계산해 행 단위로 추적할 수 있게 만듦</li>
        <li>저위험 내부용으로 대략적인 규모만 가늠할 때는 산문 답도 쓸 수 있음</li>
        <li>표 서식이 깔끔해도 소계와 합계가 맞지 않으면 사용하지 않음. 원자료로 재계산해 불일치를 해소한 뒤 씀</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 산문 답의 합계 오류와 처리 (지역별 분기 매출)</span>[산문 답] 서울 12.4억 원 + 부산 6.1억 원 + 대구 4.3억 원, 합계 23.8억 원
[검토] 12.4 + 6.1 + 4.3 = 22.8 → 합계가 1억 원 다름
[조치] 원자료 파일로 Code Execution 재계산. 사용한 열과 제외한 행을 확인한 뒤 표에 반영
[영향] 이 합계를 그대로 썼다면 합계를 인용한 슬라이드와 전년 대비 성장률까지 모두 틀림</div>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"입력 정리와 형식 선택 규칙",
     html:`__MAP:verify__
      <div class="flow"><span class="nd">① 입력 정리<small>중복 제거·라벨링·무관 자료 제외</small></span><span class="ar">→</span><span class="nd">② 용도 확인<small>읽고 끝냄 / 재사용 / 다른 도구로</small></span><span class="ar">→</span><span class="nd">③ 숫자 정확성 확인<small>보고·결정에 쓰임?</small></span><span class="ar">→</span><span class="nd hot">④ 형식 지정<small>인라인·Artifacts·구조화·Code Execution</small></span></div>
      <p class="howto"><b>읽는 법</b>화살표 방향 = 판단 순서. ①은 Claude에 넣는 자료를, ②·③은 결과물이 쓰일 곳을 보는 단계임. ③에서 "예"가 나오면 다른 형식과 함께 Code Execution을 씀.</p>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>회의 직전 개념 하나 확인</td><td>인라인 응답</td><td>대화 안에서 쓰고 끝남</td></tr>
        <tr><td>몇 주간 수정해 팀에 배포할 교육 자료</td><td>Artifacts</td><td>대화와 분리되어 편집·재사용이 쉬움</td></tr>
        <tr><td>마케팅 자동화 도구에 올릴 고객 세그먼트 목록</td><td>열이 정해진 표</td><td>후속 도구가 그대로 읽음</td></tr>
        <tr><td>이사회 보고용 분기 실적 합계</td><td>Code Execution</td><td>행 단위로 추적 가능한 계산값</td></tr>
        <tr><td>내부 대화용 대략적 규모 가늠</td><td>산문 답도 가능</td><td>저위험이라 정밀 계산의 이득이 작음</td></tr>
        <tr><td>소계와 합계가 맞지 않는 표</td><td>사용 중지, Code Execution 재계산 후 불일치 해소</td><td>서식이 깔끔해도 수치 오류는 그대로임</td></tr>
        <tr><td>버전이 섞인 자료로 수치가 뒤섞인 출력</td><td>중복 제거·라벨링·무관 자료 제외 후 재실행</td><td>원인은 입력에 있음</td></tr>
      </table></div>
      <div class="callout">시험 포인트 · 형식은 "결과물이 다음에 어디에 쓰이는가"와 "숫자를 얼마나 믿어야 하는가"로 정함. 혼란한 출력의 원인이 입력 자료에 있으면 모델 등급 상향, 길이 확대, 자료 다시 붙여 넣기로는 해결되지 않음.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>보고서에 들어갈 수치를 산문 답에서 그대로 옮김</li>
        <li>소계가 맞지 않는 표를 보기 좋게 다시 서식만 바꿈</li>
        <li>중복·충돌 자료를 그대로 둔 채 모델 등급만 올리거나 같은 파일로 새 대화를 시작함</li>
        <li>Code Execution 결과의 계산 기준(사용한 열, 제외한 행)을 확인하지 않음</li>
        <li>후속 도구에 넣을 데이터를 열 구조 없이 산문으로 받아 손으로 옮김</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Mixed versions in the inputs", ts:"2.6",
     q:`An operations analyst asks Claude to turn a shared folder into a project status report. The folder holds three nearly identical versions of the budget plan (draft, revised, and final) plus meeting notes from an unrelated project. The report mixes budget figures from different versions. What is the MOST appropriate next step?`,
     ko:`운영 분석가가 공유 폴더의 자료로 프로젝트 현황 보고서를 만들어 달라고 Claude에게 요청했다. 폴더에는 거의 같은 예산안 세 버전(초안, 수정본, 최종본)과 관련 없는 다른 프로젝트의 회의록이 들어 있다. 보고서에 서로 다른 버전의 예산 수치가 섞여 나왔다. 가장 적절한 다음 조치는 무엇인가?`,
     opts:[
       {t:`Remove the extra versions and unrelated notes, label the final plan as the approved source, then run it again.`, ko:`남는 버전과 무관한 회의록을 빼고, 최종본을 승인 기준으로 표시한 뒤 다시 실행하기`, ok:true},
       {t:`Switch to a more capable model so that it can work out on its own which of the budget versions is the current one.`, ko:`어느 예산안이 최신인지 스스로 판단하도록 더 상위 모델로 바꾸기`},
       {t:`Start a new chat, upload the same folder again, and ask Claude to be more careful with the budget figures.`, ko:`새 대화를 열어 같은 폴더를 다시 올리고 예산 수치에 더 주의하라고 요청하기`},
       {t:`Ask for a longer, more detailed report that shows the figures from every version side by side.`, ko:`모든 버전의 수치를 나란히 보여 주는 더 길고 자세한 보고서를 요청하기`}
     ],
     explain:{ good:`수치가 섞인 원인은 거의 같은 예산안 여러 개와 무관한 자료가 함께 들어간 입력에 있음. 중복을 빼고, 기준이 되는 최종본을 밝히고, 관련 없는 자료를 제외하면 같은 요청으로도 정리된 결과가 나옴.`,
       wrongs:[
         `<b>B:</b> 상위 모델도 어느 파일이 승인본인지 알 수 없음. 입력의 혼란은 모델 등급으로 해결되지 않음.`,
         `<b>C:</b> 같은 자료를 그대로 다시 넣으면 같은 혼란이 반복됨. "주의하라"는 당부는 입력을 바꾸지 않음.`,
         `<b>D:</b> 모든 버전을 나열하면 혼란이 더 커짐. 보고서에 필요한 것은 승인된 한 가지 기준임.`
       ]},
     principle:"원칙 ⑥ 원인 진단 후 수정",
     hint:`수치가 섞인 원인이 모델, 요청 문장, 입력 자료 중 어디에 있는지 먼저 찾을 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`출력의 혼란이 중복되고 무관한 자료가 섞인 입력에서 생겼기 때문`, ok:true},
         {t:`공식 강좌에서 강조한 정리 기법이기 때문`},
         {t:`모델 등급이 낮으면 여러 파일을 읽지 못하기 때문`},
         {t:`새 대화는 항상 이전 대화보다 정확하기 때문`}
       ],
       explain:`원인이 입력에 있으므로 수정도 입력에서 해야 함. 모델·대화·길이를 바꾸는 선택지는 원인을 그대로 둠.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Data for a tracking sheet", ts:"2.6",
     q:`A project manager wants Claude to go through 150 vendor emails and produce a list that her team will import into their shared tracking spreadsheet. The team needs to filter the list by vendor, request type, and due date. Which output format is MOST appropriate?`,
     ko:`프로젝트 매니저가 공급업체 메일 150건을 Claude로 정리해 팀 공용 추적 스프레드시트에 가져올 목록을 만들려 한다. 팀은 이 목록을 업체, 요청 유형, 마감일로 필터링해야 한다. 가장 적절한 출력 형식은 무엇인가?`,
     opts:[
       {t:`A table with columns defined in the prompt, such as vendor, request type, due date, and status.`, ko:`업체, 요청 유형, 마감일, 상태처럼 프롬프트에서 정한 열을 가진 표`, ok:true},
       {t:`A well-organized prose summary in the chat, grouped by theme, that the team can read before importing.`, ko:`팀이 가져오기 전에 읽을 수 있도록 주제별로 묶은 대화 속 산문 요약`},
       {t:`An Artifact containing a narrative report with a separate heading and paragraph for each vendor.`, ko:`업체마다 제목과 문단을 둔 서술형 보고서를 담은 Artifact`},
       {t:`A series of short inline answers, one for each batch of emails, to be copied into the sheet by hand.`, ko:`메일 묶음마다 짧은 인라인 응답을 받아 시트에 손으로 옮기기`}
     ],
     explain:{ good:`이 결과물은 스프레드시트로 가져가 필터링할 데이터임. 열이 미리 정해진 표는 그대로 가져올 수 있고 팀의 필터 기준과도 맞음.`,
       wrongs:[
         `<b>B:</b> 산문 요약은 읽기에는 좋지만 필터링할 수 있는 열이 없음. 결국 사람이 다시 옮겨야 함.`,
         `<b>C:</b> 업체마다 제목과 문단을 둔 서술형 보고서에는 필터링할 열이 없음. Artifact에 담더라도 스프레드시트로 가져갈 데이터 구조가 되지 않음.`,
         `<b>D:</b> 손으로 옮기는 과정에서 누락과 오기가 생김. 후속 도구가 쓸 데이터는 처음부터 정해진 구조로 받아야 함.`
       ]},
     principle:"원칙 ③ 요구에 맞는 선택",
     hint:`이 결과물을 다음에 받아 쓰는 것이 사람인지 도구인지 확인할 것.`}
  ]},

  /* ================= D2 미니테스트 ================= */
  { id:"p3test", type:"test", title:"D2 미니테스트 · 12문항", questions:[

    /* 2.1 기초 */
    { ts:"2.1", lvl:"기초",
      q:`A project coordinator at a fintech startup asked Claude to compare the company's customer data policy with a recently updated privacy regulation. She did not upload the regulation, so Claude worked from what it already knew. The analysis is well organized and identifies three specific gaps. How should she classify this output?`,
      ko:`핀테크 스타트업의 프로젝트 코디네이터가 회사의 고객 데이터 정책과 최근 개정된 개인정보 규정을 비교해 달라고 Claude에게 요청했다. 규정 원문은 올리지 않았으므로 Claude는 이미 알고 있는 내용으로 답했다. 분석은 잘 정리되어 있고 구체적인 차이점 3가지를 제시한다. 이 결과물을 어떻게 분류해야 하는가?`,
      opts:[
        {t:`Needs human override: pass it to the compliance team as a starting point, not as a finished analysis.`, ko:`사람 판단 필요로 분류하고, 완성된 분석이 아닌 참고 초안으로 컴플라이언스팀에 넘기기`, ok:true},
        {t:`Ready to use: the analysis is clearly structured, and the three gaps it identifies are specific and well argued.`, ko:`구조가 분명하고 차이점이 구체적이며 논거도 갖췄으므로 바로 사용으로 분류하기`},
        {t:`Needs revision: ask Claude to double-check its analysis and fix any gaps it finds on its own.`, ko:`수정 후 사용으로 분류하고 Claude에게 분석을 다시 점검해 스스로 고치게 하기`},
        {t:`Discard it: an analysis made without the regulation text has no value for any later work.`, ko:`규정 원문 없이 만든 분석은 이후 작업에 쓸모가 없으므로 폐기하기`}
      ],
      explain:{ good:`규정 원문 없이 학습한 기억에 의존했으므로 최근 개정 내용이 반영되지 않았을 수 있음. 규제와 관련되어 위험도도 높음. 이런 결과물은 전문가가 확인할 초안으로 넘기는 사람 판단 필요 판정이 맞음.`,
        wrongs:[
          `<b>B:</b> 구조와 구체성은 겉모습임. 근거가 된 규정 내용이 최신인지 확인되지 않음.`,
          `<b>C:</b> Claude의 자기 점검은 원문 대조를 대신하지 않음. 기억에 없는 개정 내용은 다시 점검해도 나오지 않음.`,
          `<b>D:</b> 전문가가 검토를 시작할 초안으로는 쓸 수 있음. 폐기는 과잉 대응임.`
        ]},
      principle:"원칙 ⑤ 정책·사람 판단 우선" },

    /* 2.1 실전 (복수응답) */
    { ts:"2.1", lvl:"실전", multi:2,
      q:`A sales enablement lead asked Claude to build a one-page comparison of the company's product and two competitors across five criteria she listed, using vendor datasheets she uploaded. The sheet will go to 60 sales reps next week. It looks polished, but she has not yet reviewed it in detail. Which TWO checks would MOST directly catch problems before it is shared? (Select TWO.)`,
      ko:`세일즈 인에이블먼트 리드가 업로드한 업체 데이터시트를 바탕으로, 자신이 정한 5개 기준에 따라 자사 제품과 경쟁사 2곳을 비교하는 1쪽 자료를 Claude에게 요청했다. 자료는 다음 주 영업 담당자 60명에게 배포된다. 겉보기는 깔끔하지만 아직 자세히 검토하지 않았다. 배포 전에 문제를 가장 직접적으로 잡아낼 점검 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Check that all five requested criteria are covered for all three products, not only the easier ones.`, ko:`쉬운 기준만이 아니라 요청한 5개 기준이 세 제품 모두에 빠짐없이 다뤄졌는지 확인하기`, ok:true},
        {t:`Trace each specification and price in the sheet back to the matching line in the uploaded datasheets.`, ko:`자료의 사양과 가격을 업로드한 데이터시트의 해당 줄까지 하나씩 추적하기`, ok:true},
        {t:`Ask Claude to list any weaknesses in its own comparison and accept the sheet if it reports none.`, ko:`Claude에게 비교표의 약점을 스스로 나열하게 하고 없다고 하면 승인하기`},
        {t:`Review the layout, fonts, and color scheme so that the sheet matches the company's brand template.`, ko:`회사 브랜드 템플릿에 맞도록 레이아웃, 글꼴, 색상을 검토하기`},
        {t:`Regenerate the sheet with the most capable model, since a newer draft is likely to contain fewer errors.`, ko:`새 초안이 오류가 적을 것이므로 최상위 모델로 다시 생성하기`}
      ],
      explain:{ good:`요구사항 대조는 5개 기준이 모두 다뤄졌는지, 즉 완전성을 확인함. 원자료 대조는 사양과 가격이 데이터시트와 일치하는지, 즉 정확성을 확인함. 60명에게 배포되는 자료이므로 두 기준점을 모두 확인해야 함.`,
        wrongs:[
          `<b>C:</b> Claude의 자기 평가는 점검 기준이 될 수 없음. 기준은 요청 목록과 데이터시트임.`,
          `<b>D:</b> 서식 검토는 정확성과 완전성을 확인하지 않음.`,
          `<b>E:</b> 다시 생성한 초안도 같은 검토가 필요함. 모델 등급은 대조를 대신하지 않음.`
        ]},
      principle:"원칙 ② 내보내기 전 검증" },

    /* 2.2 기초 */
    { ts:"2.2", lvl:"기초",
      q:`A nonprofit's development officer is reviewing an annual report drafted with Claude. The opening summary says the program "served 3,200 families," but the impact table later in the same report shows 2,950 families. The report goes to major donors next week. What is the MOST appropriate action?`,
      ko:`비영리단체 모금 담당자가 Claude로 작성한 연차 보고서를 검토하고 있다. 첫 요약에는 사업이 "3,200가구를 지원했다"고 되어 있지만, 같은 보고서 뒤쪽 성과 표에는 2,950가구로 나온다. 보고서는 다음 주 주요 후원자에게 발송된다. 가장 적절한 조치는 무엇인가?`,
      opts:[
        {t:`Check the program records for the correct figure and update every place the number appears.`, ko:`사업 기록으로 정확한 수치를 확인하고 그 수치가 나오는 모든 곳을 수정하기`, ok:true},
        {t:`Keep the table figure and change only the summary, because tables are usually more reliable than text.`, ko:`표가 본문보다 대체로 정확하므로 표 수치를 기준으로 요약만 고치기`},
        {t:`Ask Claude which of the two numbers is correct and use the figure it recommends throughout.`, ko:`Claude에게 어느 수치가 맞는지 묻고 권하는 수치로 통일하기`},
        {t:`Remove both numbers and describe the reach in general terms, such as "thousands of families."`, ko:`두 수치를 모두 지우고 "수천 가구"처럼 일반적인 표현으로 바꾸기`}
      ],
      explain:{ good:`한 문서 안에서 같은 대상의 수치가 다른 것은 내부 불일치임. 어느 쪽이 맞는지는 문서 밖의 원자료, 여기서는 사업 기록으로 정해야 함. 맞는 값을 확인한 뒤 그 값이 나오는 모든 위치를 함께 고침.`,
        wrongs:[
          `<b>B:</b> 표 형식이 정확성을 보장하지 않음. 표 수치가 틀린 쪽일 수도 있음.`,
          `<b>C:</b> 두 값을 만든 같은 모델에게 묻는 것은 외부 기준과의 대조가 아님.`,
          `<b>D:</b> 숫자를 흐리면 불일치는 사라져도 정확한 성과 보고라는 목적을 잃음.`
        ]},
      principle:"원칙 ② 내보내기 전 검증" },

    /* 2.2 실전 (복수응답) */
    { ts:"2.2", lvl:"실전", multi:2,
      q:`A product marketing manager uploads six months of sales data and asks Claude, "Explain how our new loyalty program increased repeat purchases." Claude returns five supporting points and no caveats. Her director plans to use the analysis to justify doubling the program's budget. Which TWO actions BEST address the risk in this output? (Select TWO.)`,
      ko:`제품 마케팅 매니저가 6개월치 판매 데이터를 올리고 Claude에게 "새 멤버십 프로그램이 재구매를 어떻게 늘렸는지 설명할 것"이라고 요청했다. Claude는 지지 근거 5가지를 제시했고 한계나 반론은 없었다. 본부장은 이 분석으로 프로그램 예산 2배 증액을 정당화하려 한다. 이 결과물의 위험에 가장 잘 대응하는 조치 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Ask again with a neutral question that requests evidence both for and against an effect on repeat purchases.`, ko:`재구매 효과에 대한 찬반 근거를 모두 요청하는 중립적인 질문으로 다시 묻기`, ok:true},
        {t:`Check the claimed effect against the raw data, including the months before launch and other changes in that period.`, ko:`출시 전 기간과 같은 시기의 다른 변화까지 포함해 원데이터로 주장된 효과를 확인하기`, ok:true},
        {t:`Ask Claude to add more supporting examples so that the case for the budget increase is harder to challenge.`, ko:`예산 증액 논리가 반박되기 어렵도록 지지 사례를 더 추가하게 하기`},
        {t:`Switch to a more capable model and repeat the same request to get a more thorough version of the analysis.`, ko:`더 상위 모델로 바꿔 같은 요청을 반복해 더 철저한 분석을 받기`},
        {t:`Add a sentence at the end noting that the analysis was produced with AI assistance, then share it.`, ko:`분석이 AI 지원으로 작성되었다는 문장을 끝에 덧붙여 공유하기`}
      ],
      explain:{ good:`프롬프트가 "늘렸다"는 결론을 전제로 깔고 있어 결과가 지지 근거만 모은 확증 편향 프레이밍임. 열린 질문으로 다시 묻고, 원데이터로 출시 전후와 다른 요인을 확인해야 예산 결정에 쓸 수 있음.`,
        wrongs:[
          `<b>C:</b> 한쪽 근거를 더 쌓으면 치우침이 커짐. 결정 근거로서의 신뢰도는 오히려 떨어짐.`,
          `<b>D:</b> 같은 프롬프트를 쓰면 상위 모델도 같은 전제를 따름. 원인은 질문의 틀에 있음.`,
          `<b>E:</b> AI 지원 공개는 투명성 조치일 뿐 분석의 치우침을 고치지 않음.`
        ]},
      principle:"원칙 ② 내보내기 전 검증" },

    /* 2.3 기초 */
    { ts:"2.3", lvl:"기초",
      q:`A marketing manager asks Claude which disclosure rules currently apply to paid influencer posts, so she can add them to her team's campaign guide. Web search was not turned on, and Claude answers confidently with a list of specific requirements. What should she do before adding the rules to the guide?`,
      ko:`마케팅 매니저가 팀 캠페인 가이드에 넣기 위해 유료 인플루언서 게시물에 현재 적용되는 표시 규정을 Claude에게 물었다. 웹 검색은 켜지 않았고, Claude는 구체적인 요건 목록을 확신 있게 답했다. 가이드에 규정을 넣기 전에 무엇을 해야 하는가?`,
      opts:[
        {t:`Check each requirement against the current official guidance, for example by finding it through web search.`, ko:`웹 검색 등으로 현행 공식 지침을 찾아 요건마다 대조하기`, ok:true},
        {t:`Add the rules as written, because Claude listed specific requirements instead of giving a vague, general answer.`, ko:`막연한 일반론 대신 구체적인 요건을 제시했으므로 그대로 넣기`},
        {t:`Ask Claude what date its knowledge goes up to, and add the rules if that date seems recent enough.`, ko:`Claude에게 지식 기준 날짜를 묻고 충분히 최근이면 넣기`},
        {t:`Rewrite the rules in a more formal tone so that they match the style of the rest of the campaign guide.`, ko:`가이드의 다른 부분과 맞도록 규정 문장을 더 격식 있게 고쳐 쓰기`}
      ],
      explain:{ good:`현재 규정은 학습 기준 시점 이후 바뀌었을 수 있고, 기억에서 나온 답은 확신 있어 보여도 검증이 필요함. 팀 전체가 따를 가이드에 들어가므로 현행 공식 지침을 찾아 요건마다 대조해야 함.`,
        wrongs:[
          `<b>B:</b> 구체성은 정확성의 증거가 아님. 오래된 규정도 구체적으로 답할 수 있음.`,
          `<b>C:</b> 지식 기준 날짜를 알아도 개별 요건이 현재 맞는지는 확인되지 않음.`,
          `<b>D:</b> 문장 다듬기는 내용의 정확성을 바꾸지 않음.`
        ]},
      principle:"원칙 ② 내보내기 전 검증" },

    /* 2.3 실전 */
    { ts:"2.3", lvl:"실전",
      q:`A research coordinator at an education nonprofit must brief her board on what a 120-page government report says about teacher shortages in rural schools. Two earlier attempts mixed the report's findings with general statements that she could not find anywhere in the report. Which approach is MOST likely to produce an analysis she can trust and check?`,
      ko:`교육 비영리단체의 리서치 코디네이터가 120쪽 정부 보고서가 농어촌 학교 교사 부족에 대해 무엇을 말하는지 이사회에 보고해야 한다. 앞선 두 번의 시도에서는 보고서 내용과 보고서 어디에서도 찾을 수 없는 일반론이 섞여 나왔다. 믿고 확인할 수 있는 분석을 얻을 가능성이 가장 높은 방법은 무엇인가?`,
      opts:[
        {t:`First have Claude extract the report's passages on rural teacher shortages word for word, then analyze only those.`, ko:`먼저 농어촌 교사 부족에 관한 보고서 문장을 그대로 뽑게 한 뒤 그 문장만으로 분석하게 하기`, ok:true},
        {t:`Ask Claude for a summary of the whole report first, then ask it to expand the parts about rural schools.`, ko:`먼저 보고서 전체를 요약하게 한 뒤 농어촌 학교 부분을 확장하게 하기`},
        {t:`Split the report across five separate chats and combine the five summaries into one board briefing.`, ko:`보고서를 다섯 개 대화로 나눠 요약한 뒤 다섯 요약을 하나의 이사회 보고로 합치기`},
        {t:`Ask Claude to add supporting research from its own knowledge so the board sees the broader national picture.`, ko:`이사회가 전국 상황을 보도록 Claude가 아는 관련 연구를 덧붙이게 하기`}
      ],
      explain:{ good:`인용문을 먼저 추출하게 하면 분석 근거가 보고서 원문 문장에 고정됨. 추출된 문장은 코디네이터가 원문과 바로 대조할 수 있음. 앞선 시도처럼 보고서 밖 일반론이 섞이는 것도 막을 수 있음.`,
        wrongs:[
          `<b>B:</b> 전체 요약을 거치면 원문과의 연결이 한 단계 더 멀어짐. 일반론이 섞이는 문제도 그대로임.`,
          `<b>C:</b> 대화를 나눠도 각 요약이 원문에 묶이지 않음. 합치는 과정에서 확인은 더 어려워짐.`,
          `<b>D:</b> 기억에서 가져온 연구는 문제의 원인인 보고서 밖 내용을 오히려 늘림.`
        ]},
      principle:"원칙 ① 요청의 구체화" },

    /* 2.4 기초 */
    { ts:"2.4", lvl:"기초",
      q:`A customer support lead used Claude for four tasks this morning, all in the same Project with the team's standard instructions. She wants to save time by skipping a separate review step wherever it is safe to do so. Which output can MOST reasonably be used without an additional human review step?`,
      ko:`고객지원 리드가 오늘 오전 팀 표준 지시문이 설정된 같은 Project에서 Claude로 네 가지 작업을 했다. 안전한 경우에는 별도 검토 단계를 건너뛰어 시간을 아끼려 한다. 추가 사람 검토 없이 사용해도 가장 무리가 없는 결과물은 무엇인가?`,
      opts:[
        {t:`A list of discussion topics for her own team's internal retrospective meeting next week.`, ko:`다음 주 자기 팀 내부 회고 회의에서 다룰 논의 주제 목록`, ok:true},
        {t:`A refund decision letter to a long-time customer who has threatened to cancel the account.`, ko:`계정을 해지하겠다고 한 장기 고객에게 보내는 환불 결정 안내문`},
        {t:`A summary of complaint volumes that will be included in a report to the industry regulator.`, ko:`업계 규제 기관 보고서에 들어갈 불만 접수 건수 요약`},
        {t:`Revised wording for the public help-center article that explains the company's data retention terms.`, ko:`회사의 데이터 보관 조건을 설명하는 공개 고객센터 문서의 수정 문구`}
      ],
      explain:{ good:`내부 회고 주제 목록은 틀려도 비용이 작고, 내부 청중이 보며, 언제든 바꿀 수 있고, 규제와 관련이 없음. 네 기준이 모두 낮으므로 가벼운 확인으로 충분함. 나머지는 고객, 규제 기관, 공개 문서로 가는 결과물임.`,
        wrongs:[
          `<b>B:</b> 고객의 돈과 관계에 관한 결정이 외부로 나가고 되돌리기 어려움. 사람 검토가 필요함.`,
          `<b>C:</b> 규제 기관 보고에 들어가는 수치는 규제 노출 기준에 걸림.`,
          `<b>D:</b> 공개 문서이고 데이터 보관이라는 법적 조건을 설명함. 잘못 말하면 오래 남음.`
        ]},
      principle:"원칙 ⑤ 정책·사람 판단 우선" },

    /* 2.4 실전 (복수응답) */
    { ts:"2.4", lvl:"실전", multi:2,
      q:`An operations analyst at a pharmaceutical distributor uses Claude to prepare a quarterly table of temperature-control incidents for a regulator. She has checked about half of the figures against the warehouse logs and found them correct. The submission is due tomorrow, and her manager says the table "looks fine." Which TWO actions are MOST appropriate before submission? (Select TWO.)`,
      ko:`의약품 유통업체의 운영 분석가가 규제 기관에 낼 분기별 온도 관리 이상 건수 표를 Claude로 준비하고 있다. 수치의 절반 정도를 창고 기록과 대조했고 모두 맞았다. 제출 기한은 내일이고, 매니저는 표가 괜찮아 보인다고 말한다. 제출 전에 가장 적절한 조치 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Have the designated reviewer for regulatory filings check the table before it is submitted.`, ko:`규제 제출물 지정 검토자가 제출 전에 표를 확인하게 하기`, ok:true},
        {t:`Recompute all figures from the warehouse logs with code execution and resolve any mismatches.`, ko:`창고 기록으로 모든 수치를 Code Execution 재계산하고 불일치를 해소하기`, ok:true},
        {t:`Submit on time and report any errors found afterward, since half of the figures already checked out.`, ko:`절반이 이미 맞았으므로 제때 제출하고 나중에 발견된 오류는 사후 보고하기`},
        {t:`Ask Claude to mark the figures it is least confident about and verify only those before submitting.`, ko:`Claude에게 확신이 낮은 수치를 표시하게 하고 그것만 확인한 뒤 제출하기`},
        {t:`Accept the manager's view that the table looks fine and submit it, noting that Claude prepared it.`, ko:`표가 괜찮아 보인다는 매니저 의견을 받아들여 Claude가 작성했다고 적고 제출하기`}
      ],
      explain:{ good:`규제 기관 제출물은 일부 수치가 맞았더라도 사람 검토를 생략할 수 없음. 나머지 절반의 수치는 아직 확인되지 않았으므로 원자료로 전체를 재계산해 불일치를 해소해야 함. 마감은 두 조치를 건너뛸 이유가 되지 않음.`,
        wrongs:[
          `<b>C:</b> 제출한 보고서는 되돌리기 어려움. 사후 보고는 검토를 대신하지 못함.`,
          `<b>D:</b> Claude의 확신도는 어느 수치가 틀렸는지 알려 주는 근거가 아님.`,
          `<b>E:</b> "괜찮아 보인다"는 겉모습 판단이며, AI 작성 표기는 검증이 아님.`
        ]},
      principle:"원칙 ⑤ 정책·사람 판단 우선" },

    /* 2.5 기초 */
    { ts:"2.5", lvl:"기초",
      q:`A project manager asked Claude for a short update on a website launch to post in the team's chat channel. The draft is accurate but reads like a formal report, with about 400 words, long sentences, and several cautious qualifiers. What is the MOST efficient way to fix it?`,
      ko:`프로젝트 매니저가 팀 채팅 채널에 올릴 웹사이트 출시 관련 짧은 공지를 Claude에게 요청했다. 초안은 정확하지만 약 400단어 분량에 문장이 길고 조심스러운 단서가 여럿 붙어 공식 보고서처럼 읽힌다. 가장 효율적인 수정 방법은 무엇인가?`,
      opts:[
        {t:`Ask for a shorter, conversational version with the same facts, or trim the draft directly.`, ko:`같은 사실로 더 짧고 대화체인 버전을 요청하거나 초안을 직접 줄이기`, ok:true},
        {t:`Rewrite the whole prompt from scratch with more background on the launch and regenerate the update.`, ko:`출시 배경을 더 넣어 프롬프트를 처음부터 다시 쓰고 공지를 다시 생성하기`},
        {t:`Switch to a different model that tends to write in a more casual style and run the same prompt again.`, ko:`더 편한 문체로 쓰는 경향이 있는 다른 모델로 바꿔 같은 프롬프트를 다시 실행하기`},
        {t:`Post the draft as it is, since the information is accurate and the team can skim the parts they need.`, ko:`정보가 정확하고 팀이 필요한 부분만 훑어볼 수 있으므로 그대로 올리기`}
      ],
      explain:{ good:`내용은 이미 정확하므로 바꿀 것은 길이와 어조뿐임. 그 조건만 조정해 다시 요청하거나 직접 편집하는 것이 가장 효율적임. 맞는 내용을 처음부터 다시 만들 이유가 없음.`,
        wrongs:[
          `<b>B:</b> 문제는 배경 부족에서 생기지 않았음. 전체 재작성은 이미 맞는 내용을 잃을 위험만 더함.`,
          `<b>C:</b> 길이와 어조 문제는 조건 조정으로 해결됨. 모델 교체는 원인과 맞지 않음.`,
          `<b>D:</b> 채팅 채널 공지는 짧게 읽혀야 함. 정확해도 청중과 형식에 맞지 않는 상태임.`
        ]},
      principle:"원칙 ⑥ 원인 진단 후 수정" },

    /* 2.5 실전 */
    { ts:"2.5", lvl:"실전",
      q:`A customer success manager must share an analysis of last week's service outage with an enterprise client. Claude's internal analysis is accurate but includes the names of the engineers involved, an unconfirmed theory about the root cause, and the internal cost of the incident. The client's operations director asked for the report by Friday. What is the MOST appropriate approach?`,
      ko:`고객 성공 매니저가 지난주 서비스 장애 분석을 기업 고객에게 공유해야 한다. Claude가 만든 내부 분석은 정확하지만 관련 엔지니어 이름, 확인되지 않은 근본 원인 추정, 장애로 인한 내부 비용이 들어 있다. 고객사 운영 이사는 금요일까지 보고서를 요청했다. 가장 적절한 방법은 무엇인가?`,
      opts:[
        {t:`Prepare a client version with confirmed facts, impact, and next steps, and have it reviewed before sending.`, ko:`확인된 사실, 영향, 후속 조치만 담은 고객용 버전을 만들고 발송 전 검토를 받기`, ok:true},
        {t:`Send the full internal analysis, because sharing everything shows transparency and builds the client's trust.`, ko:`모든 내용을 공유하는 것이 투명성을 보여 신뢰를 쌓으므로 내부 분석 전체를 보내기`},
        {t:`Send the executive summary that was prepared for the company's own leadership team last week.`, ko:`지난주 자사 경영진용으로 만든 요약본을 그대로 보내기`},
        {t:`Ask Claude to make the tone of the internal analysis more apologetic, then send it to the client directly.`, ko:`내부 분석의 어조를 더 사과하는 투로 바꾸게 한 뒤 고객에게 바로 보내기`}
      ],
      explain:{ good:`외부 청중에게는 상대에게 필요하고 공개해도 되는 사실만 담음. 내부 인명, 미확정 원인, 내부 비용은 빼야 함. 고객에게 가는 문서는 되돌리기 어려우므로 발송 전 사람 검토도 거침.`,
        wrongs:[
          `<b>B:</b> 미확정 원인과 내부 정보를 외부에 공개하면 공개 범위 통제에 실패함. 확인되지 않은 추정은 나중에 정정이 필요할 수 있음.`,
          `<b>C:</b> 자사 경영진용 요약은 내부 청중 기준으로 만든 문서임. 외부 공개 범위가 검토되지 않았음.`,
          `<b>D:</b> 어조 조정은 내부 정보와 미확정 원인을 그대로 둠.`
        ]},
      principle:"원칙 ⑤ 정책·사람 판단 우선" },

    /* 2.6 기초 */
    { ts:"2.6", lvl:"기초",
      q:`A school coordinator is creating a parent handbook with Claude. She expects to revise it over several weeks, reuse some sections in next year's edition, and give the finished version to the principal to read and approve. In which form should she ask Claude to produce the handbook?`,
      ko:`학교 코디네이터가 Claude로 학부모 안내 책자를 만들고 있다. 몇 주에 걸쳐 수정하고, 일부 섹션은 내년 판에 다시 쓰고, 완성본은 교장이 읽고 승인하도록 넘길 예정이다. 책자를 어떤 형태로 만들어 달라고 요청해야 하는가?`,
      opts:[
        {t:`As an Artifact, so the handbook sits apart from the chat and can be edited and reused.`, ko:`대화와 분리되어 편집·재사용할 수 있도록 Artifact로 만들기`, ok:true},
        {t:`As inline answers in the chat, one section at a time, which she then copies into a document.`, ko:`대화 안에서 섹션별 인라인 응답으로 받아 문서에 복사하기`},
        {t:`As code execution output, so that the handbook is generated by a calculation she can rerun.`, ko:`다시 실행할 수 있는 계산으로 만들어지도록 Code Execution 출력으로 받기`},
        {t:`As a structured data table with one row per paragraph, so it can be imported into a spreadsheet.`, ko:`스프레드시트로 가져갈 수 있도록 문단마다 한 행인 구조화 데이터 표로 받기`}
      ],
      explain:{ good:`여러 번 다듬고 재사용하며 다른 사람이 열어 읽을 문서는 Artifacts에 맞음. Artifact는 대화 흐름과 분리된 편집 가능한 결과물이므로 수정과 재사용이 쉬움.`,
        wrongs:[
          `<b>B:</b> 인라인 응답은 읽고 끝낼 답에 맞음. 몇 주간 고칠 문서를 대화 곳곳에 흩어 두면 관리가 어려움.`,
          `<b>C:</b> Code Execution은 정확해야 하는 계산에 쓰는 기능임. 안내 책자 작성과 맞지 않음.`,
          `<b>D:</b> 구조화 데이터는 도구가 받아 쓸 데이터에 맞는 형식임. 읽는 문서를 표의 행으로 쪼갤 이유가 없음.`
        ]},
      principle:"원칙 ③ 요구에 맞는 선택" },

    /* 2.6 실전 */
    { ts:"2.6", lvl:"실전",
      q:`A product manager has three tasks this afternoon: answer a teammate's quick question about what a metric means before a 3 p.m. call, create a launch checklist that she will keep revising over the next month, and calculate monthly churn rates from a customer data export for a board update. Which combination of output formats is MOST appropriate?`,
      ko:`제품 매니저가 오늘 오후에 할 일은 세 가지다. 오후 3시 통화 전 동료가 물은 지표의 의미에 짧게 답하기, 다음 한 달간 계속 고쳐 쓸 출시 체크리스트 만들기, 이사회 보고용으로 고객 데이터 추출 파일에서 월별 이탈률 계산하기. 가장 적절한 출력 형식 조합은 무엇인가?`,
      opts:[
        {t:`An inline answer for the question, an Artifact for the checklist, and code execution for the churn rates.`, ko:`질문은 인라인 응답, 체크리스트는 Artifact, 이탈률은 Code Execution`, ok:true},
        {t:`An Artifact for all three tasks, so that every output is kept in one editable place that sits apart from the chat.`, ko:`모든 결과물을 대화와 분리된 하나의 편집 공간에 두도록 세 가지 모두 Artifact`},
        {t:`Inline answers for all three, using the most capable model so that the churn figures come out accurate.`, ko:`이탈률이 정확하도록 최상위 모델을 쓰고 세 가지 모두 인라인 응답`},
        {t:`Code execution for all three, so that every output comes from a process that can be rerun and checked.`, ko:`모든 결과물을 재실행·확인할 수 있도록 세 가지 모두 Code Execution`}
      ],
      explain:{ good:`짧은 질문은 대화 안에서 읽고 끝나므로 인라인 응답이 맞음. 한 달간 갱신할 체크리스트는 편집·재사용할 문서이므로 Artifact가 맞음. 이사회에 보고할 이탈률은 정확해야 하므로 실제 계산을 실행하는 Code Execution이 맞음.`,
        wrongs:[
          `<b>B:</b> 짧은 질문까지 Artifact로 만들 필요가 없고, Artifact라는 형식이 숫자의 정확성을 보장하지도 않음.`,
          `<b>C:</b> 모델 등급을 올려도 산문으로 생성한 숫자는 그럴듯하기만 할 수 있음.`,
          `<b>D:</b> 지표 설명과 체크리스트는 계산이 필요 없는 일임. 용도에 맞지 않는 형식임.`
        ]},
      principle:"원칙 ③ 요구에 맞는 선택" }
  ]}

]};
