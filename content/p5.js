/* PART 05: 설정·지식 관리 (D5, 12%) */
window.CCAO.p5 = { id:"p5", lessons:[

  /* ================= CH 1 · 5.1 Projects 지시문·지식 설정 ================= */
  { id:"p5c1", ch:"CH 1", obj:"5.1", title:"Projects 지시문·지식 설정", steps:[
    {type:"concept", kind:"PART BRIEFING · 파트 설명", h:"PART 05. 설정·지식 관리",
     html:`<p class="lead">Claude를 그때그때 프롬프트로 쓰는 단계에서, 미리 갖춘 환경 위에서 매번 같은 수준의 결과를 내는 단계로 넘어가는 영역임. 출제 목표 4개를 챕터 4개로 나누어 다룸.</p>
      <h4>파트 프로필</h4>
      <div class="tbl"><table>
        <tr><th>항목</th><th>내용</th></tr>
        <tr><td>출제 비중</td><td>12% (D5 Configuration and Knowledge Management)</td></tr>
        <tr><td>예상 문항</td><td>60문항 중 약 7문항</td></tr>
        <tr><td>챕터 구성</td><td>CH 1 Projects 지시문·지식 설정 (5.1)<br>CH 2 업로드 지식·커넥터 관리 (5.2)<br>CH 3 시스템 수준 지시문 작성 (5.3)<br>CH 4 설정·지식·지시문 유지·갱신 (5.4)</td></tr>
        <tr><td>공식 강좌</td><td>Prep Course 모듈 5 "Configuration &amp; Knowledge Management" (약 47분)</td></tr>
      </table></div>
      <h4>다루는 범위</h4>
      <ul>
        <li><b>CH 1 · 5.1</b> Project에 무엇을 어디에 넣을지 정하는 기준. 행동 규칙, 참고 자료, 절차, 진행 중 결정을 담는 네 가지 설정 위치의 구분</li>
        <li><b>CH 2 · 5.2</b> 업로드한 파일을 최신 상태로 유지하는 방법과, 외부 시스템 연결 기능을 필요한 범위만 확인 후 연결하는 방법</li>
        <li><b>CH 3 · 5.3</b> 모든 대화에 적용되는 지시를 누가 읽어도 같은 뜻인 규칙으로 쓰는 방법</li>
        <li><b>CH 4 · 5.4</b> 시간이 지나 낡은 설정을 찾아 고치는 방법. 정기 점검, Skill 업데이트, Memory 정리, 변경 사항 공유</li>
      </ul>
      <h4>출제 형태</h4>
      <ul>
        <li>지문 상황: 팀원이 매번 같은 자료를 붙여넣음, 사람마다 결과가 다름, 연결한 기능이 기대한 동작을 하지 않음, 잘 되던 결과가 오류 없이 조금씩 틀어짐</li>
        <li>질문 유형: 이 내용을 어디에 설정하는가, 가장 먼저 무엇을 하는가, 가장 가능성 높은 원인은 무엇인가</li>
        <li>자주 나오는 오답 선택지: 프롬프트를 더 길게 쓰기, 상위 모델로 바꾸기, Claude에게 기억해 달라고 말하기처럼 설정을 고치지 않는 대응</li>
        <li>복수 응답 문항에서는 여러 요구를 각각 맞는 설정 위치에 배치하는 형태가 나올 수 있음</li>
      </ul>
      <h4>연계</h4>
      <ul>
        <li>공식 강좌: Prep Course 모듈 5 "Configuration &amp; Knowledge Management". Projects·Memory·Skills의 기본 개념은 모듈 1, 외부 연결 기능과 Skill의 위험 판단은 모듈 6, 낡은 설정의 진단은 모듈 7에서 함께 다룸</li>
        <li>업무 흐름 지도: ② 환경 설정 단계. ① 도구·모델 선택(D3) 다음, ③ 요청 작성(D1) 앞에 위치함</li>
        <li>여기서 갖춘 설정은 이후 모든 대화의 출발점이 됨. 결과가 낡은 설정 때문에 틀어지면 ↩ 원인 진단·수정(D7)에서 다시 이 단계로 돌아옴</li>
      </ul>
      <div class="callout">시험 포인트 · 이 영역 문항은 주로 "어디에 설정하는가" 또는 "어느 설정이 원인인가"를 물음. 두 질문 모두 네 가지 설정 위치의 차이를 알아야 풀림.</div>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"사용과 운영, 네 가지 설정 위치",
     html:`<p class="lead">같은 Claude라도 매번 프롬프트로 맥락을 새로 주는 방식과, 미리 갖춘 환경에서 대화를 시작하는 방식은 결과의 일관성이 다름. 공식 강좌는 앞의 것을 사용(using), 뒤의 것을 운영(operating)이라고 부름.</p>
      <div class="callout term"><b>용어 카드</b> · <b>설정된 기준선(configured baseline)</b>: 지시·참고 자료·절차를 미리 넣어 두어 모든 새 대화가 같은 상태에서 출발하게 만든 환경. 화면으로 보면 Project 하나의 설정과 계정에 등록된 Skills를 합친 것임.</div>
      <ul>
        <li>기준선이 있으면 두 사람이 같은 질문을 해도 같은 수준의 답이 나옴</li>
        <li>기준선이 없으면 각자 매일 맥락을 다시 만들고, 결과가 사람마다 달라짐</li>
        <li>설정은 한 번 해 두면 이후 모든 대화에 효과가 있음. 대신 시간이 지나면 낡으므로 점검이 필요함(CH 4)</li>
      </ul>
      <h4>네 가지 설정 위치</h4>
      <div class="callout term"><b>용어 카드</b> · <b>프로젝트 지시문(Project instructions)</b>: Project 설정에 적어 두는 글. 그 Project의 모든 대화에 처음부터 적용되는 행동 규칙(어조, 기본 형식, 검증 습관)을 담음.</div>
      <div class="callout term"><b>용어 카드</b> · <b>지식 베이스(knowledge base)</b>: Project에 올려 둔 파일 모음. 매 대화에서 재업로드 없이 참조하는 사실·참고 자료(문서, 정책, 가이드)를 담음.</div>
      <div class="callout term"><b>용어 카드</b> · <b>Skills</b>: 계정 수준(Customize 메뉴)에 등록하는 절차 묶음. 여러 단계로 된 반복 작업을 정해진 순서대로 수행하게 하며, 관련 작업이면 어느 Project에서든 Claude가 불러 씀.</div>
      <div class="callout term"><b>용어 카드</b> · <b>프로젝트 단위 Memory(Project-scoped Memory)</b>: Project마다 따로 쌓이는 기억. 진행 중에 정해진 결정, 이해관계자 이름, 고정 선호를 다음 대화로 이어 주며 다른 Project와 섞이지 않음.</div>
      <div class="tbl"><table>
        <tr><th>설정 위치</th><th>담는 것</th><th>담지 않는 것</th><th>예시</th></tr>
        <tr><td>지시문</td><td>행동: 어조, 기본 형식, 검증 습관</td><td>사실 자료, 긴 절차</td><td>"수치 옆에 출처 파일명을 괄호로 표시할 것"</td></tr>
        <tr><td>지식 베이스</td><td>사실: 문서, 정책, 사양</td><td>행동 규칙</td><td>브랜드 가이드 PDF, 제품 사양표</td></tr>
        <tr><td>Skills</td><td>절차: 여러 단계의 반복 작업</td><td>한 번 쓰고 마는 지시</td><td>월간 실적 데이터를 보고서 양식으로 정리하는 6단계</td></tr>
        <tr><td>프로젝트 단위 Memory</td><td>연속성: 합의된 결정, 담당자, 선호</td><td>바뀌지 않는 참조 사실</td><td>"보도자료 최종 승인자는 홍보팀장"</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>한 행이 설정 위치 하나임. "담지 않는 것" 열은 그 위치에 잘못 넣는 흔한 내용을 보여 줌.</p>
      <ul>
        <li>지식 베이스와 Memory의 구분: 안정적인 참조 사실은 지식 베이스, 계속 바뀌는 Project 결정 기록은 Memory</li>
        <li>Skills는 특정 Project 안에 있지 않음. 계정에 한 번 만들어 두면 필요한 모든 Project에서 재사용함</li>
        <li>Project 안의 대화들은 지시문과 지식 베이스를 공유하지만, 서로의 대화 내용은 보지 못함</li>
      </ul>
      <div class="sample"><span class="sl">예시 · Project 설정 한 장 (가상 고객사 '누리헬스' 보도자료 Project)</span>[지시문]
- 독자는 일간지·전문지 기자임. 평서문으로 쓰고 한 문단은 3문장 이하로 할 것
- 첫 문단에 누가·무엇을·언제를 모두 넣을 것
- 수치는 지식 베이스 파일에 있는 것만 쓰고 옆에 (출처: 파일명)을 붙일 것
- 파일에 없는 수치가 필요하면 [확인 필요]로 남길 것

[지식 베이스]
- 누리헬스_회사소개_2026.pdf
- 슬림밴드3_제품사양표.xlsx
- 보도자료_표기원칙.docx
- 대표이사_인용문_승인본.docx

[Skills · 계정 수준]
- 보도자료 배포 양식 정리 (본문을 배포용 양식으로 바꾸는 5단계)

[프로젝트 단위 Memory]
- 보도자료 최종 승인자: 홍보팀장
- 3월 회의 결정: 제품명은 '슬림밴드 3'으로 띄어 씀</div>
      <p>위 예시에서 규칙은 지시문에, 근거 자료는 지식 베이스에, 반복 절차는 Skill에, 회의에서 정한 사항은 Memory에 들어가 있음. 같은 Project라도 내용의 종류가 위치를 정함.</p>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"짝 연결 원칙, Project 분리와 공유",
     html:`<p class="lead">설정 위치를 하나씩 고르는 것만으로 끝나지 않는 경우가 있음. 하나의 필요가 두 위치에 걸쳐 있거나, 업무를 Project 단위로 나누거나 함께 써야 하는 경우임.</p>
      <div class="callout term"><b>용어 카드</b> · <b>짝 연결 원칙(pairing rule)</b>: 하나의 필요를 행동 규칙(지시문 또는 Skill)과 그 규칙이 쓰는 자료(지식 베이스)에 함께 연결하는 설정 원칙. 둘 중 하나만 있으면 작동하지 않음.</div>
      <ul>
        <li>규칙만 있는 경우: "공식 자료를 근거로 답할 것"이라고 적었지만 근거 문서가 없음. Claude가 인용할 자료가 없음</li>
        <li>자료만 있는 경우: FAQ 파일은 올렸지만 사용 규칙이 없음. 어떤 답은 파일을 쓰고 어떤 답은 쓰지 않음</li>
        <li>Skill도 같음: 보고서 서식 절차(Skill)는 그 절차가 따르는 브랜드 가이드(지식 베이스)와 짝을 이룸</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 바꾸기 전 (사내 복지 문의 Project)</span>지시문: "직원 문의에는 회사 규정을 근거로 답하고 조항 번호를 밝힐 것"
지식 베이스: (비어 있음)</div>
      <div class="sample good"><span class="sl">예시 · 바꾼 후</span>지시문: "직원 문의에는 지식 베이스의 규정 파일을 근거로 답하고 조항 번호를 밝힐 것. 파일에 없는 내용이면 '규정에 해당 조항 없음, 인사팀 확인 필요'로 답할 것"
지식 베이스: 취업규칙_2026.pdf, 복리후생규정_2026.pdf</div>
      <h4>고객·업무별 Project 분리</h4>
      <ul>
        <li>경쟁 관계인 두 고객사의 기밀이 서로 섞이면 안 되는 경우: 고객사마다 별도 Project를 만듦</li>
        <li>프로젝트 단위 Memory는 Project 경계를 따라 분리됨. 고객사 A Project의 결정이 고객사 B Project 대화에 나타나지 않음</li>
        <li>해결책이 아닌 것: 한 Project에서 프롬프트로 조심하기, Memory를 계정 전체에서 끄기, 고객사마다 모델 등급을 다르게 쓰기</li>
      </ul>
      <h4>Project 공유</h4>
      <ul>
        <li>공식 강좌는 Team·Enterprise 환경에서 권한을 정해 Project를 팀원과 공유하는 방식을 소개함. 소속 조직에서 쓸 수 있는지는 관리자에게 확인함</li>
        <li>같은 고객을 맡은 팀원들이 같은 지시문·지식 베이스에서 일하게 되어 사람마다 결과가 달라지는 문제가 줄어듦</li>
        <li>팀 전체가 따라야 할 결정은 지시문이나 지식 베이스에 적어 둠. 적어 둔 내용은 팀원 누구나 같은 문구로 읽고 확인할 수 있음</li>
        <li>공식 강좌 모듈 7도 여러 사람이 의지할 규칙의 보관처로 Memory보다 지시문·Skill 같은 설정을 권함</li>
      </ul>
      <h4>Project를 만들 시점</h4>
      <p>공식 강좌 모듈 1의 판단 기준은 세 가지 질문임. 두 개 이상이 "예"면 Project를 만듦. 설정에 든 시간은 보통 2~3번의 세션 안에 회수됨.</p>
      <div class="flow"><span class="nd">① 반복되는가<small>매주·매월 같은 작업</small></span><span class="ar">+</span><span class="nd">② 배경이 매번 같은가<small>같은 자료·규칙을 붙여넣음</small></span><span class="ar">+</span><span class="nd">③ 형식이 일정한가<small>같은 양식의 결과물</small></span><span class="ar">→</span><span class="nd hot">2개 이상 "예"<small>Project 구성</small></span></div>
      <p class="howto"><b>읽는 법</b>"+"는 세 질문을 함께 확인한다는 뜻이고 순서는 없음. 화살표 오른쪽은 판단 결과임. "예"가 하나 이하면 일반 대화로 충분함.</p>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"설정 위치 선택 기준",
     html:`__MAP:setup__
      <p class="lead">지문의 내용을 먼저 규칙·사실·절차·결정 중 하나로 분류하면 설정 위치가 정해짐.</p>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>매번 같은 어조·형식·검증 요청을 입력함</td><td>지시문</td><td>모든 대화에 자동 적용됨</td></tr>
        <tr><td>매번 같은 문서·정책·가이드를 붙여넣음</td><td>지식 베이스</td><td>재업로드 없이 참조됨</td></tr>
        <tr><td>여러 단계 서식 작업을 매번 손으로 지시함</td><td>Skill</td><td>한 번 만들어 여러 Project에서 재사용함</td></tr>
        <tr><td>회의에서 정한 결정·승인자가 다음 대화에 이어져야 함</td><td>프로젝트 단위 Memory</td><td>Project 안의 연속성을 담당함</td></tr>
        <tr><td>규칙과 그 규칙이 쓰는 자료가 함께 필요함</td><td>두 위치에 함께 설정</td><td>하나만으로는 작동하지 않음</td></tr>
        <tr><td>경쟁 관계 고객사의 자료·결정이 섞이면 안 됨</td><td>고객사별 Project</td><td>Memory 분리가 Project 경계를 따름</td></tr>
        <tr><td>같은 고객을 맡은 팀원들이 같은 기준으로 일해야 함</td><td>Project 공유(조직에서 허용된 경우)</td><td>모두 같은 기준선에서 시작함</td></tr>
        <tr><td>일회성 질문, 다시 쓸 일 없음</td><td>일반 대화</td><td>설정 시간이 회수되지 않음</td></tr>
      </table></div>
      <div class="flow"><span class="nd">① 반복 확인<small>무엇을 매번 다시 주는가</small></span><span class="ar">→</span><span class="nd">② 내용 분류<small>규칙·사실·절차·결정</small></span><span class="ar">→</span><span class="nd">③ 위치 배치<small>지시문·지식 베이스·Skill·Memory</small></span><span class="ar">→</span><span class="nd">④ 짝 점검<small>규칙과 자료가 함께 있는가</small></span></div>
      <p class="howto"><b>읽는 법</b>화살표는 판단 순서임. ②의 분류 결과가 ③의 위치를 정하고, ④에서 규칙과 그 규칙이 쓰는 자료가 모두 설정되었는지 확인함.</p>
      <div class="callout">시험 포인트 · 지문에 나온 내용이 규칙인지, 사실인지, 절차인지, 진행 중 결정인지 먼저 분류할 것. 분류가 끝나면 설정 위치는 하나로 좁혀짐. 기밀 분리 상황의 정답은 Project 분리이며, 주의 문구는 통제 수단으로 인정되지 않음.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>여러 단계 절차를 지시문에 길게 적기: 단계가 빠지고 수정이 어려워짐</li>
        <li>행동 규칙을 참고 문서로 올리기: 매 대화에 적용된다는 보장이 없음</li>
        <li>브랜드 색상 코드 같은 고정 사실을 Memory에 맡기기: 바뀌지 않는 사실은 지식 베이스에 둠</li>
        <li>규칙만 쓰고 근거 문서를 올리지 않거나, 문서만 올리고 사용 규칙을 쓰지 않기</li>
        <li>기밀 분리를 "다른 고객사 정보는 무시할 것" 같은 프롬프트 문구로 해결하려 하기</li>
        <li>설정 문제를 모델 등급 변경으로 해결하려 하기</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Weekly social posts", ts:"5.1",
     q:`A marketing manager at a skincare brand drafts weekly social media posts with Claude. Every Monday she opens a new chat and pastes the brand voice guide, a list of claims the legal team has banned, and the post format. Two teammates do the same with slightly different copies of these materials, and their posts no longer sound alike. Their workspace lets team members share a Project. What is the MOST appropriate next step?`,
     ko:`한 스킨케어 브랜드의 마케팅 매니저가 Claude로 매주 SNS 게시물 초안을 작성함. 매주 월요일 새 대화를 열고 브랜드 어조 가이드, 법무팀이 금지한 표현 목록, 게시물 형식을 붙여넣음. 팀원 두 명도 같은 방식으로 일하지만 각자 조금씩 다른 버전의 자료를 쓰고 있어 게시물 어조가 서로 달라짐. 이 팀의 워크스페이스에서는 팀원끼리 Project를 공유할 수 있음. 가장 적절한 다음 단계는 무엇인가?`,
     opts:[
       {t:`Set up one shared Project: put the voice and format rules in its instructions and upload the guide and banned-claims list as files.`, ko:`공유 Project 하나를 만들어 어조·형식 규칙은 지시문에 넣고, 가이드와 금지 표현 목록은 파일로 올리기`, ok:true},
       {t:`Save the strongest version of the prompt in a shared document so every teammate pastes identical text into a new chat each week.`, ko:`가장 잘 된 프롬프트를 공유 문서에 저장해 팀원 모두가 매주 같은 문구를 새 대화에 붙여넣게 하기`},
       {t:`Have each teammate ask Claude to remember the brand voice from their own copy of the guide, so they can stop pasting it.`, ko:`팀원마다 자기가 가진 가이드 사본을 근거로 Claude에게 브랜드 어조를 기억해 달라고 요청해 붙여넣기를 그만두기`},
       {t:`Move the whole team to the most capable model, which should hold the brand voice more steadily even without the guide being pasted.`, ko:`팀 전체를 가장 성능 높은 모델로 바꿔 가이드를 붙여넣지 않아도 어조가 일정하게 유지되게 하기`}
     ],
     explain:{ good:`같은 자료와 규칙을 여러 사람이 매주 반복 입력하고, 사람마다 결과가 달라지는 상황임. 어조·형식 같은 행동 규칙은 지시문에, 가이드와 금지 표현 목록 같은 참고 자료는 지식 베이스에 두면 누가 대화를 열어도 같은 기준에서 시작함. 공유 Project이므로 자료 버전도 하나로 통일됨.`,
       wrongs:[
         `<b>B:</b> 문구는 통일되지만 매주 붙여넣는 반복은 그대로임. 누군가 붙여넣기를 잊거나 옛 문서를 쓰면 다시 결과가 달라짐.`,
         `<b>C:</b> 각자 다른 버전의 가이드를 근거로 기억시키므로 어조가 달라지는 원인이 그대로 남음. 금지 표현 목록과 형식도 한 버전으로 모이지 않음.`,
         `<b>D:</b> 모델을 바꿔도 Claude가 브랜드 가이드 내용을 알게 되지는 않음. 문제는 맥락이 설정되어 있지 않은 것임.`
       ]},
     principle:"원칙 ④ 반복 맥락의 설정화",
     hint:`누가, 얼마나 자주, 무엇을 반복해서 붙여넣고 있는지 확인할 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`여러 사람이 같은 규칙과 자료를 매주 반복 입력하고 있어 설정으로 옮길 대상임`, ok:true},
         {t:`Projects가 공식 가이드에서 권장하는 기능이라서`},
         {t:`상위 모델일수록 브랜드 어조를 스스로 더 잘 알기 때문에`},
         {t:`팀원마다 다른 모델 등급을 써서 어조가 달라졌기 때문에`}
       ],
       explain:`반복 입력과 사람마다 다른 결과는 맥락을 설정으로 옮기라는 신호임. 규칙은 지시문, 참고 자료는 지식 베이스로 나눠 넣는 것이 해법임.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Two competing clients", ts:"5.1",
     q:`A consultant advises two retail chains that compete in the same market. To save time, she keeps all work for both clients in a single Project and starts each prompt by naming the client. Last week a draft for one client mentioned a pricing assumption that only the other client had shared in confidence. What is the MOST appropriate change?`,
     ko:`한 컨설턴트가 같은 시장에서 경쟁하는 유통 체인 두 곳에 자문함. 시간을 아끼려고 두 고객사 업무를 한 Project에서 모두 처리하고, 프롬프트 첫머리에 고객사 이름을 적음. 지난주 한 고객사용 초안에 다른 고객사만 기밀로 공유한 가격 가정이 들어감. 가장 적절한 변경은 무엇인가?`,
     opts:[
       {t:`Give each client its own Project, so files, instructions and remembered decisions for one never reach the other's conversations.`, ko:`고객사마다 별도 Project를 만들어 한쪽의 파일·지시문·기억된 결정이 다른 쪽 대화에 닿지 않게 하기`, ok:true},
       {t:`Keep the single Project and add a firm line to every prompt telling Claude to ignore anything learned about the other client.`, ko:`Project는 하나로 두고 모든 프롬프트에 다른 고객사 정보는 무시하라는 문장을 넣기`},
       {t:`Turn off Memory for the entire account, so that no decision from any earlier conversation can appear in later drafts for either client.`, ko:`계정 전체의 Memory를 꺼서 어떤 이전 대화의 결정도 두 고객사의 이후 초안에 나타나지 않게 하기`},
       {t:`Run one client's work on Opus and the other's on Sonnet, so the two workstreams are never handled by the same model.`, ko:`한 고객사는 Opus, 다른 고객사는 Sonnet으로 처리해 두 업무가 같은 모델에서 처리되지 않게 하기`}
     ],
     explain:{ good:`기밀이 섞이면 안 되는 두 업무는 구조적으로 분리해야 함. 고객사별로 Project를 나누면 지시문과 지식 베이스가 따로 관리되고, 프로젝트 단위 Memory도 Project 경계를 따라 분리됨. 프롬프트 문구로 조심하는 방식은 한 번만 빠뜨려도 지켜지지 않으므로 통제 수단이 아님.`,
       wrongs:[
         `<b>B:</b> 같은 Project 안에 두 고객사의 자료와 결정이 함께 있는 상태는 그대로임. "무시하라"는 문장은 분리 장치가 아님.`,
         `<b>C:</b> Memory를 끄면 정상적인 연속성까지 잃음. 같은 Project의 지시문과 파일에 두 고객사 자료가 섞인 문제도 해결되지 않음.`,
         `<b>D:</b> 모델 등급은 정보 분리와 관계가 없음. 어떤 모델을 쓰든 같은 Project의 자료를 참조함.`
       ]},
     principle:"원칙 ⑤ 정책·사람 판단 우선",
     hint:`두 고객사의 파일, 지시문, 기억된 결정이 지금 어디에 함께 놓여 있는지 볼 것.`}
  ]},

  /* ================= CH 2 · 5.2 업로드 지식·커넥터 관리 ================= */
  { id:"p5c2", ch:"CH 2", obj:"5.2", title:"업로드 지식·커넥터 관리", steps:[
    {type:"concept", kind:"CONCEPT · 개념 설명", h:"지식 베이스 파일 관리",
     html:`<p class="lead">지식 베이스는 올린 파일을 그대로 참조함. 같은 문서의 여러 버전이 함께 있으면 Claude가 낡은 버전을 인용할 수 있음. 어떤 파일이 기준인지는 사람이 관리해야 함.</p>
      <div class="callout term"><b>용어 카드</b> · <b>구버전 문서(superseded document)</b>: 새 버전이 나와 더 이상 기준이 아닌 문서. 지식 베이스에 남아 있으면 오류 표시 없이 낡은 수치나 문구가 결과에 들어갈 수 있음.</div>
      <ul>
        <li>올린 파일은 올린 시점의 내용 그대로임. 원본 문서가 개정되면 새 파일을 올리고 이전 파일을 지워야 함</li>
        <li>구버전에서 나온 수치는 그럴듯해 보여서 검토자도 놓치기 쉬움</li>
      </ul>
      <h4>파일 관리 규칙</h4>
      <ul>
        <li>새 버전을 올리면 이전 버전은 같은 날 삭제함</li>
        <li>한 주제에는 현재 파일 하나만 둠</li>
        <li>파일명에 기준 시점을 넣음. 예: 휴가규정_2026-03개정.pdf</li>
        <li>초안·검토본은 올리지 않음. 확정본만 올림</li>
        <li>Project 목적과 관계없는 파일은 올리지 않음</li>
        <li>올리기 전에 민감도를 확인함. 고객 이름·연락처 같은 개인정보(PII)가 들어 있으면 조직 정책부터 확인함(PART 06)</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 바꾸기 전 (인사팀 복리후생 문의 Project의 파일 목록)</span>휴가규정_2025.pdf
휴가규정_2026_개정.pdf
휴가규정_2026_개정_검토중_v2.docx
복지포인트_안내_2024.pdf
복지포인트_안내_최종.pdf
신입사원_OT자료_마케팅팀.pptx

결과: "미사용 휴가는 최대 5일까지 이월 가능"(2025년 기준)이라고 답함</div>
      <div class="sample good"><span class="sl">예시 · 바꾼 후</span>휴가규정_2026-03개정.pdf
복지포인트_안내_2026.pdf

구버전·검토본·관계없는 파일은 삭제함. 개정 이력은 Project 밖 문서 보관함에서 관리함</div>
      <p>바꾼 후의 목록은 주제마다 현재 파일이 하나씩만 있음. Claude가 인용할 수 있는 휴가 규정이 하나뿐이므로 구버전 수치가 나올 여지가 없어짐.</p>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"커넥터의 연결 범위와 기능 범위",
     html:`<p class="lead">파일을 올리는 대신 Claude가 외부 시스템의 자료를 직접 찾아 읽게 하는 방법도 있음. 이 연결은 편리한 만큼 범위와 기능을 의도적으로 관리해야 함.</p>
      <div class="callout term"><b>용어 카드</b> · <b>커넥터(connector)</b>: 사용자가 승인한 외부 시스템(Google Drive, Gmail 등)에 Claude가 접근하게 하는 연결 설정. 예: Google Drive 커넥터로 문서를 검색하고, Gmail 커넥터로 관련 메일을 찾음. 연결 여부와 접근 범위는 사용자가 관리함.</div>
      <div class="tbl"><table>
        <tr><th>구분</th><th>파일 업로드(지식 베이스)</th><th>커넥터</th></tr>
        <tr><td>자료 위치</td><td>Project 안에 올린 사본</td><td>원래 시스템(Drive, Gmail)</td></tr>
        <tr><td>내용 갱신</td><td>새 파일을 다시 올려야 함</td><td>원래 시스템에 있는 자료를 찾아 읽음</td></tr>
        <tr><td>알맞은 자료</td><td>자주 바뀌지 않는 기준 문서</td><td>계속 쌓이는 메일, 공유 문서</td></tr>
        <tr><td>관리할 것</td><td>남길 파일 선택, 구버전 삭제</td><td>연결 대상, 가능한 동작, 추가 경로</td></tr>
      </table></div>
      <h4>필요한 범위만 연결</h4>
      <ul>
        <li>연결 가능한 모든 소스를 기본으로 켜지 않음. 작업마다 필요한 소스만 골라 연결함</li>
        <li>일을 해낼 수 있는 가장 좁은 접근만 줌(최소 권한). 작업이 바뀌면 다시 판단함</li>
        <li>"맥락이 많을수록 좋다"는 이유로 메일함·캘린더까지 연결하면 노출 범위만 넓어짐</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 작업별 커넥터 점검표 (고객지원팀 주간 문의 요약)</span>작업: 지난주 고객 문의 메일 요약, 반복 문의 상위 5개 정리
필요한 소스: Gmail (고객지원 공용 메일함 검색·읽기)
필요 없는 소스: Google Drive 전체, 개인 캘린더
역할 분담: 메일 검색·요약 초안은 Claude, 요약 검토와 공지 발송은 담당자
연결 전 확인: 승인된 커넥터인가, 이 커넥터로 무엇을 할 수 있는가</div>
      <div class="callout term"><b>용어 카드</b> · <b>기능 범위(capability boundary)</b>: 커넥터마다 정해진, 할 수 있는 동작의 한계. 공식 강좌가 드는 예: 메일 커넥터가 검색과 읽기는 되어도 발송은 되지 않을 수 있음. 실제 범위는 커넥터마다 확인함.</div>
      <ul>
        <li>경계 밖 동작을 기대하면 분명한 오류 메시지 대신 헷갈리는 실패가 생길 수 있음</li>
        <li>그 실패가 버그처럼 보이면 엉뚱한 팀에 보고되어 수정이 늦어질 수 있음</li>
        <li>공식 강좌는 이 현상을 문서화된 제품 동작이 아닌 현장 관찰 사례로 소개함. 확인할 주의 사항으로 받아들일 것</li>
        <li>커넥터로 워크플로를 만들기 전에 각 커넥터가 할 수 있는 일부터 확인함. 할 수 없는 단계는 사람이 맡도록 설계함</li>
      </ul>
      <h4>커넥터 추가 경로</h4>
      <ul>
        <li>공식 강좌가 소개한 현장 사례: 커넥터 추가 화면에서 눈에 띄는 경로가 조직이 검증한 목록이 아니라 공개 디렉터리(public directory)로 이어질 수 있음</li>
        <li>이 경우 이름이 비슷한 다른 제공자의 커넥터를 연결할 위험이 있음</li>
        <li>Team·Enterprise처럼 관리자가 있는 환경에서는 관리자에게 승인된 커넥터와 추가 경로를 먼저 확인함</li>
        <li>이 사례도 공식 제품 동작으로 문서화된 내용은 아님. 실제 커넥터 목록과 추가 경로는 제품 화면과 관리자에게 확인할 것</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 커넥터 추가 전 관리자 확인 요청 (사내 메신저)</span>[확인 요청] Google Drive 커넥터 연결 전 문의
- 용도: 마케팅팀 캠페인 폴더의 기획 문서 검색·요약
- 확인 1: 조직이 승인한 Google Drive 커넥터의 정확한 이름과 제공자
- 확인 2: 그 커넥터를 추가하는 승인된 경로 (공개 디렉터리를 거치지 않는 경로)
- 확인 3: 이 커넥터로 가능한 동작 (검색, 읽기, 파일 수정·이동 가능 여부)
- 연결 범위: 캠페인 업무에 필요한 범위만 연결 예정</div>
      <p>세 가지 확인이 끝나야 무엇을 Claude에게 맡기고 무엇을 사람이 할지 정할 수 있음. 확인 3의 답이 "검색·읽기만 가능"이면 파일 정리 단계는 처음부터 사람의 작업으로 설계함.</p>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"업로드 지식·커넥터 관리 기준",
     html:`__MAP:setup__
      <p class="lead">파일은 "어떤 버전을 남기는가", 커넥터는 "연결 전에 무엇을 확인하는가"가 판단 대상임.</p>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>정책 개정판을 받음</td><td>새 파일 추가 후 구버전 삭제</td><td>두 버전이 함께 있으면 낡은 쪽이 인용될 수 있음</td></tr>
        <tr><td>초안·검토본도 참고로 올리고 싶음</td><td>확정본만 업로드</td><td>초안 문구가 결과에 섞임</td></tr>
        <tr><td>계속 쌓이는 메일·공유 문서를 참조해야 함</td><td>해당 시스템의 커넥터</td><td>매번 파일을 올리지 않아도 됨</td></tr>
        <tr><td>"맥락이 많을수록 좋다"며 모든 소스 연결을 제안받음</td><td>이 작업에 필요한 소스만 연결</td><td>접근 범위는 작업에 비례해야 함</td></tr>
        <tr><td>커넥터로 하려던 동작이 오류 없이 되지 않음</td><td>기능 범위 확인, 경계 밖이면 그 단계는 사람이 맡음</td><td>버그 신고나 모델 교체로 해결되지 않음</td></tr>
        <tr><td>추가 화면에 이름이 비슷한 커넥터가 여러 개 있음</td><td>관리자에게 승인 목록과 경로 확인</td><td>공개 디렉터리의 다른 커넥터를 연결할 위험</td></tr>
        <tr><td>올릴 파일이나 연결할 메일함에 개인정보가 있음</td><td>정책 확인 후 비식별화 또는 승인 경로 사용</td><td>업로드 전에 민감도를 먼저 분류함(PART 06)</td></tr>
      </table></div>
      <div class="flow"><span class="nd">① 필요한 소스 정하기<small>이 작업에 무엇이 필요한가</small></span><span class="ar">→</span><span class="nd">② 승인 경로 확인<small>조직이 승인한 커넥터인가</small></span><span class="ar">→</span><span class="nd">③ 기능 범위 확인<small>검색·읽기·작성·발송 중 무엇이 되는가</small></span><span class="ar">→</span><span class="nd">④ 워크플로 설계<small>안 되는 단계는 사람이 맡음</small></span></div>
      <p class="howto"><b>읽는 법</b>화살표는 커넥터를 쓰기 전 확인 순서임. ①~③이 끝난 뒤에 ④에서 Claude와 사람의 역할을 나눔.</p>
      <div class="callout">시험 포인트 · 커넥터 상황에서는 연결 자체보다 연결 전 확인(필요 범위, 승인 경로, 기능 범위)이 판단 대상임. 파일 상황에서는 새 파일 추가와 구버전 삭제가 한 묶음임.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>새 버전만 올리고 구버전을 그대로 두기</li>
        <li>"새 파일을 우선할 것"이라는 지시로 버전 충돌을 해결하려 하기</li>
        <li>기대한 동작이 되지 않자 버그로 판단해 IT에 신고하기</li>
        <li>공개 목록에서 이름이 비슷한 커넥터를 추가하기</li>
        <li>나중을 대비해 모든 소스를 미리 연결하기</li>
        <li>"민감 정보는 기억하지 말 것"을 지시문에 적고 그대로 연결하기: 지시는 통제 수단이 아님</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Leave policy FAQ", ts:"5.2",
     q:`An HR coordinator maintains a Project that drafts answers to employee benefit questions. Last month she uploaded the revised 2026 leave policy, and the 2025 version is still in the Project's files. Today a draft FAQ stated the old limit on carrying over unused leave days. The figure looked plausible, so nobody noticed until a manager flagged it. What should she do FIRST?`,
     ko:`한 HR 코디네이터가 직원 복리후생 문의 답변 초안을 만드는 Project를 관리함. 지난달 2026년 개정 휴가 규정을 올렸고, 2025년 버전도 Project 파일에 그대로 있음. 오늘 FAQ 초안에 미사용 휴가 이월 한도가 예전 기준으로 적힘. 그럴듯한 수치라 관리자가 지적하기 전까지 아무도 알아채지 못함. 가장 먼저 해야 할 일은 무엇인가?`,
     opts:[
       {t:`Remove the 2025 policy from the Project so only the current version remains, then regenerate the FAQ and check its figures.`, ko:`2025년 규정을 Project에서 삭제해 현재 버전만 남긴 뒤, FAQ를 다시 만들고 수치를 확인하기`, ok:true},
       {t:`Tell Claude in the chat to prefer the newer file whenever two policy documents disagree, and keep both files for reference.`, ko:`두 규정 문서가 다르면 새 파일을 우선하라고 대화에서 지시하고 두 파일은 참고용으로 남겨 두기`},
       {t:`Upload the 2026 policy a second time so that the current rules outweigh the older file when Claude looks for an answer.`, ko:`2026년 규정을 한 번 더 올려 Claude가 답을 찾을 때 현재 규정의 비중이 커지게 하기`},
       {t:`Ask Claude to rate its confidence in each figure in the FAQ and re-check only the ones it marks as uncertain.`, ko:`FAQ의 수치마다 Claude에게 확신 정도를 매기게 하고 불확실하다고 표시한 것만 다시 확인하기`}
     ],
     explain:{ good:`같은 정책의 두 버전이 함께 있으면 Claude가 낡은 쪽을 근거로 인용할 수 있음. 구버전을 지우는 것이 원인을 없애는 조치임. 이미 만든 초안은 다시 만든 뒤 수치를 원문과 대조해 확인함.`,
       wrongs:[
         `<b>B:</b> 이번 대화에만 적용되는 지시이고 구버전은 계속 남음. 다음 대화나 다른 사람의 대화에서 같은 오류가 다시 나올 수 있음.`,
         `<b>C:</b> 같은 파일을 두 번 올리면 지식 베이스가 더 복잡해질 뿐 구버전 인용 가능성은 그대로임.`,
         `<b>D:</b> Claude의 자기 평가는 정확성의 근거가 아님. 이번 오류도 그럴듯해서 확신 있게 쓰인 수치였음.`
       ]},
     principle:"원칙 ④ 반복 맥락의 설정화",
     hint:`초안에 들어간 예전 수치가 어디에서 왔을지부터 생각할 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`같은 정책의 두 버전이 지식 베이스에 함께 있어 낡은 쪽이 인용될 수 있음`, ok:true},
         {t:`최신 파일만 남기는 것이 일반적인 정석이라서`},
         {t:`파일이 두 개 이상이면 Claude가 업로드 파일을 전혀 읽지 못하기 때문에`},
         {t:`Claude는 항상 가장 먼저 올린 파일만 참조하기 때문에`}
       ],
       explain:`오류의 출처는 지식 베이스에 남은 구버전 파일임. 원인을 지워야 같은 오류가 반복되지 않음.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Replies that never send", ts:"5.2",
     q:`A customer support lead connected the team's mailbox to Claude so it can find related threads and draft replies to common questions. Her plan was for Claude to send the approved replies at the end of each day. The drafts appear, but nothing is ever sent and no clear error is shown. A teammate suggests filing a bug report with IT. What should the lead do FIRST?`,
     ko:`한 고객지원 리드가 팀 메일함을 Claude에 연결해 관련 메일 스레드를 찾고 자주 묻는 질문의 답장 초안을 쓰게 함. 계획은 승인된 답장을 매일 업무 종료 시점에 Claude가 발송하는 것이었음. 초안은 만들어지지만 발송은 한 번도 되지 않고 뚜렷한 오류 메시지도 없음. 팀원은 IT에 버그를 신고하자고 제안함. 리드가 가장 먼저 할 일은 무엇인가?`,
     opts:[
       {t:`Check what this mail connection is able to do; if it only searches and reads, keep sending as a step a person does.`, ko:`이 메일 연결이 할 수 있는 동작을 확인하고, 검색·읽기만 된다면 발송은 사람이 하는 단계로 두기`, ok:true},
       {t:`File the bug report with IT and attach screenshots of the replies that were drafted but never sent, so they can reproduce it.`, ko:`IT에 버그를 신고하고 초안만 만들어지고 발송되지 않은 답장의 화면을 첨부해 재현할 수 있게 하기`},
       {t:`Remove the connection and add a similar mail connector from the public listing that advertises sending as a feature.`, ko:`연결을 해제하고 공개 목록에서 발송 기능을 내세운 비슷한 메일 커넥터를 추가하기`},
       {t:`Switch to a more capable model, since the current one may be ignoring the end-of-day sending instruction in the Project.`, ko:`현재 모델이 업무 종료 시 발송 지시를 무시하고 있을 수 있으므로 더 성능 높은 모델로 바꾸기`}
     ],
     explain:{ good:`커넥터에는 할 수 있는 동작의 한계가 있음. 공식 강좌는 메일 커넥터가 검색·읽기는 되어도 발송은 되지 않을 수 있고, 이런 경계 밖 동작은 분명한 오류 대신 헷갈리는 실패로 보일 수 있다고 주의를 줌. 기능 범위를 먼저 확인하면 버그 신고가 필요한지, 워크플로를 바꿔야 하는지가 정해짐. 고객에게 나가는 발송을 사람이 맡으면 검토 관문도 함께 생김.`,
       wrongs:[
         `<b>B:</b> 원래 할 수 없는 동작이라면 버그 신고는 엉뚱한 팀의 시간을 쓰고 해결을 늦춤. 신고 전에 기능 범위부터 확인함.`,
         `<b>C:</b> 공개 목록의 비슷한 커넥터는 조직이 승인하지 않은 제공자일 수 있음. 추가 전에 관리자에게 승인 경로를 확인해야 함.`,
         `<b>D:</b> 모델은 커넥터가 할 수 없는 동작을 가능하게 만들지 못함. 원인 진단 없이 도구를 바꾸는 대응임.`
       ]},
     principle:"원칙 ⑥ 원인 진단 후 수정",
     hint:`기대한 동작이 그 연결이 원래 할 수 있는 일인지부터 생각할 것.`}
  ]},

  /* ================= CH 3 · 5.3 시스템 수준 지시문 작성 ================= */
  { id:"p5c3", ch:"CH 3", obj:"5.3", title:"시스템 수준 지시문 작성", steps:[
    {type:"concept", kind:"CONCEPT · 개념 설명", h:"한 번 쓰고 모든 대화가 따르는 지시문",
     html:`<p class="lead">매 대화마다 다시 입력하던 규칙은 한 번 적어 두면 Project의 모든 대화가 이어받음. 요청하는 사람이 규칙을 기억하지 않아도 적용됨.</p>
      <div class="callout term"><b>용어 카드</b> · <b>시스템 수준 지시문(system-level instructions)</b>: 개별 프롬프트가 아니라 설정에 적어 두어 모든 대화가 처음부터 따르게 하는 지시. 이 과정에서는 주로 프로젝트 지시문을 가리키며, 지속 지시(persistent instructions)라고도 부름.</div>
      <div class="tbl"><table>
        <tr><th>구분</th><th>프롬프트</th><th>시스템 수준 지시문</th></tr>
        <tr><td>쓰는 곳</td><td>대화 입력창</td><td>Project 설정</td></tr>
        <tr><td>적용 범위</td><td>그 요청 한 번</td><td>그 Project의 모든 대화</td></tr>
        <tr><td>담는 내용</td><td>이번 작업의 목표·자료·형식</td><td>매번 같은 검증 규칙·형식·어조</td></tr>
        <tr><td>기억하는 주체</td><td>요청하는 사람이 매번</td><td>설정에 한 번 기록</td></tr>
      </table></div>
      <h4>지시문에 넣는 세 가지</h4>
      <ul>
        <li><b>검증 규칙</b>: 수치마다 출처 표시, 모르면 추측하지 말고 모른다고 쓰기, 자료에 없는 수치는 미확인으로 표시</li>
        <li><b>기본 형식</b>: 첫 줄 구성, 소제목 순서, 길이 상한</li>
        <li><b>어조</b>: 격식 수준, 호칭, 쓰지 않을 표현</li>
      </ul>
      <h4>미리 넣기</h4>
      <ul>
        <li>Project를 만들 때 용도를 예상해 미리 넣음</li>
        <li>예: 고객 응대 Project라면 첫 대화 전에 환불 금액·배송일 처리 규칙과 내부 용어 금지 규칙을 넣어 둠</li>
        <li>검증 규칙을 사고가 난 뒤에 추가하면 그 전 결과물은 이미 나간 상태임</li>
      </ul>
      <h4>지시문에 넣지 않는 것</h4>
      <ul>
        <li>긴 참고 자료: 지식 베이스로 옮김. 지시문에 넣으면 지나치게 길어지고 중요한 규칙을 찾기 어려워짐</li>
        <li>여러 단계 절차: Skill로 옮김. 한 줄 지시로 줄이면 단계가 빠짐</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 바꾸기 전 (월간 SNS 성과 보고 Project 지시문이 3쪽으로 늘어난 상태)</span>- 보고서 독자는 경영진이므로 격식체로 쓸 것
- 채널 코드표: IG=인스타그램, YT=유튜브, NB=네이버 블로그 … (40줄)
- 작성 순서: 1) 채널별 데이터 정리 2) 전월 대비 증감 정리 3) 상위 게시물 3개 선정 4) 표 작성 5) 요약 3줄 6) 다음 달 제안
- 수치에는 출처 파일명을 표시할 것</div>
      <div class="sample good"><span class="sl">예시 · 바꾼 후 (세 위치로 분리)</span>[지시문] 독자는 경영진, 격식체 사용. 수치마다 출처 파일명 표시. 자료에 없는 수치는 [미확인]
[지식 베이스] 채널코드표_2026.xlsx
[Skill] 월간 SNS 성과 보고 작성 (6단계 절차)</div>
      <p>나누고 나면 지시문에는 세 줄의 규칙만 남음. 코드표가 바뀌면 파일만 교체하고, 절차는 Skill에서 정해진 단계 순서대로 수행됨.</p>
      <div class="callout term"><b>용어 카드</b> · <b>설정 추가 원칙(configuration is additive)</b>: Claude가 스스로 알아채지 않는 중요한 사실(새 제약, 선호, 배경)을 매번 말하지 않고 지시문이나 Memory에 직접 추가하는 원칙. 예: "하반기 광고비 동결"이 정해지면 캠페인 기획 Project 지시문에 한 줄 추가함.</div>
      <div class="sample good"><span class="sl">예시 · 시스템 수준 지시문 (온라인 가구몰 고객 문의 답변 초안 Project)</span>[역할과 독자]
상담원이 고객에게 보낼 답변 초안을 작성함. 독자는 일반 고객임.

[형식]
1) 첫 문장에서 고객 질문에 바로 답할 것
2) 본문은 문단 3개 이하, 전체 300자 이내
3) 마지막 줄에 담당 부서와 연락 방법을 쓸 것

[어조]
- 존댓말을 쓰고 사과는 한 번만 할 것
- 내부 용어(CS코드, 물류센터 약칭)는 쓰지 않을 것

[검증 규칙]
- 환불 금액·배송일은 문의 본문이나 지식 베이스에 있을 때만 쓸 것
- 근거가 없으면 [계정 확인 필요]로 표시하고 추측하지 않을 것
- 정책 문구를 인용하면 (출처: 파일명)을 붙일 것</div>
      <p>이 지시문은 형식·어조·검증 규칙만 담고 있음. 환불 정책 전문은 지식 베이스 파일로 따로 올리고, 지시문은 그 파일을 근거로 쓰라는 규칙만 둠.</p>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"모호한 지시와 정밀한 지시",
     html:`<p class="lead">"전문적으로", "좋게", "정확하게", "최선을 다해" 같은 지시는 실패를 알리지 않음. 오류도 나지 않고 결과도 바뀌지 않아 효과가 없다는 사실을 알아채기 어려움.</p>
      <div class="callout term"><b>용어 카드</b> · <b>두 사람 해석 일치 기준</b>: 서로 다른 두 사람이 같은 지시를 읽고 같은 결과를 떠올리는지로 지시의 정밀성을 판단하는 기준. 해석이 갈리면 Claude의 결과도 대화마다 갈림.</div>
      <div class="tbl"><table>
        <tr><th>모호한 표현</th><th>확인 가능한 규칙으로 바꾼 예</th></tr>
        <tr><td>"전문적으로"</td><td>격식체 평서문, 감탄 표현과 이모지 없음</td></tr>
        <tr><td>"읽기 쉽게"</td><td>문단은 3문장 이하, 약어는 처음 나올 때 풀어 씀</td></tr>
        <tr><td>"정확하게"</td><td>수치마다 출처 표시, 자료에 없는 수치는 [미확인] 표시</td></tr>
        <tr><td>"요점 위주로"</td><td>첫 줄에 결론 한 문장, 결정 사항은 별도 목록</td></tr>
        <tr><td>"간결하게"</td><td>전체 500자 이내, 글머리표 5개 이하</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>왼쪽은 읽는 사람마다 다르게 해석되는 표현, 오른쪽은 결과를 보고 지켜졌는지 바로 확인할 수 있는 조건임.</p>
      <div class="sample bad"><span class="sl">예시 · 바꾸기 전 (주간 회의록 Project 지시문)</span>회의록을 전문적이고 깔끔하게 정리할 것. 중요한 내용은 빠뜨리지 말고 정확하게 쓸 것.</div>
      <div class="sample good"><span class="sl">예시 · 바꾼 후</span>1) 첫 줄: 이번 회의의 결론 한 문장
2) 소제목 3개를 이 순서로 고정: 결정 사항 / 담당자·기한 / 미결 사항
3) 각 항목은 한 줄로 씀
4) 약어는 처음 나올 때 풀어 씀. 예: CAC(고객 획득 비용)
5) 회의 기록에 없는 날짜·수치는 쓰지 않고 [기록 없음]으로 표시
6) 담당자가 기록에 없으면 "담당자 미정"으로 표시</div>
      <ul>
        <li>바꾼 지시문은 누가 대화를 시작해도 같은 구조를 만듦</li>
        <li>검토자는 6개 조건만 대조하면 됨</li>
        <li>5)와 6)은 기록에 없는 내용을 만들어 내는 문제를 함께 막음</li>
      </ul>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"지시문 작성 판단 기준",
     html:`__MAP:setup__
      <p class="lead">지시문 문항은 "무엇을 지시문에 넣는가"와 "어떻게 쓰는가"를 함께 물음.</p>
      <div class="tbl"><table>
        <tr><th>상황</th><th>선택</th><th>이유</th></tr>
        <tr><td>매번 같은 검증 요청을 입력함</td><td>지시문에 검증 규칙으로 기록</td><td>요청자가 잊어도 모든 대화에 적용됨</td></tr>
        <tr><td>지시문이 형용사로만 되어 있음</td><td>확인 가능한 조건으로 교체</td><td>모호한 지시는 효과 없이 지나감</td></tr>
        <tr><td>지시문이 긴 참고 자료로 채워짐</td><td>자료는 지식 베이스로 이동</td><td>규칙이 잘 보이고 수정이 쉬워짐</td></tr>
        <tr><td>지시문에 단계별 절차가 들어 있음</td><td>절차는 Skill로 분리</td><td>단계가 보존되고 여러 Project에서 재사용됨</td></tr>
        <tr><td>새 제약(예산 동결, 승인자 변경)이 생김</td><td>지시문이나 Memory에 직접 추가</td><td>Claude가 스스로 알 수 없음</td></tr>
        <tr><td>긴 대화 후반에 초반 지시를 따르지 않음</td><td>형식을 지시문으로 고정하거나 요약 후 새 대화</td><td>컨텍스트 창(context window)이 차면 앞부분이 요약·압축될 수 있음(PART 01)</td></tr>
        <tr><td>예시 파일만 올리고 규칙은 없음</td><td>규칙을 지시문에 추가</td><td>예시의 어떤 특징을 따를지 정해지지 않음</td></tr>
      </table></div>
      <div class="flow"><span class="nd">① 반복 요청 모으기<small>매번 다시 쓰는 문장</small></span><span class="ar">→</span><span class="nd">② 종류 나누기<small>규칙·자료·절차</small></span><span class="ar">→</span><span class="nd">③ 조건으로 쓰기<small>개수·길이·표시 방법·순서</small></span><span class="ar">→</span><span class="nd">④ 두 사람 해석 점검<small>같은 결과를 떠올리는가</small></span></div>
      <p class="howto"><b>읽는 법</b>화살표는 지시문을 만드는 순서임. ②에서 규칙만 지시문에 남기고, 자료와 절차는 각자의 위치로 보냄.</p>
      <div class="callout">시험 포인트 · 지시문 문항의 정답은 개수, 길이, 표시 방법, 순서 같은 확인 가능한 조건을 담은 선택지임. 형용사와 다짐을 늘린 선택지는 길고 그럴듯해 보여도 오답임.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>"더 꼼꼼하게", "최선을 다해" 같은 표현을 추가하는 수정</li>
        <li>같은 지시를 대화마다 다시 붙여넣기</li>
        <li>예시 파일만 올리고 규칙은 쓰지 않기</li>
        <li>팀이 함께 지켜야 할 검증 규칙을 Memory에 맡기기: 팀 공통 규칙은 누구나 읽고 확인할 수 있는 지시문에 적음</li>
        <li>"개인정보는 기억하지 말 것" 같은 지시를 데이터 통제 수단으로 여기기</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Meeting minutes rules", ts:"5.3",
     q:`An operations team uses a Project to turn meeting notes into minutes. Its only instruction reads: "Write clear, professional, and accurate minutes." The minutes come back in a different structure each week, and twice they listed a deadline that nobody had agreed in the meeting. Which revision to the Project setup is MOST likely to fix both problems?`,
     ko:`한 운영팀이 회의 메모를 회의록으로 정리하는 Project를 씀. 지시문은 "명료하고 전문적이며 정확한 회의록을 작성할 것" 한 줄뿐임. 회의록 구조가 매주 다르게 나오고, 회의에서 합의하지 않은 마감일이 두 번 적힘. 두 문제를 모두 고칠 가능성이 가장 높은 Project 설정 수정은 무엇인가?`,
     opts:[
       {t:`Replace it with fixed headings for decisions, owners and due dates, plus a rule to write "[not in notes]" for any date not recorded.`, ko:`결정 사항·담당자·기한 소제목을 고정하고, 메모에 없는 날짜는 "[메모에 없음]"으로 쓰는 규칙으로 바꾸기`, ok:true},
       {t:`Keep the sentence and add "Be extremely careful, thorough, and precise, and double-check every single detail before you finish."`, ko:`기존 문장을 두고 "매우 신중하고 꼼꼼하고 정밀하게, 마치기 전에 모든 세부를 다시 확인할 것"을 추가하기`},
       {t:`Paste the same instruction at the start of every meeting's chat, so Claude sees it more recently than the Project setting.`, ko:`같은 지시를 회의마다 대화 첫머리에 붙여넣어 Claude가 Project 설정보다 최근에 보게 하기`},
       {t:`Upload three well-formatted past minutes as example files and leave the instruction as it is, since examples show the format.`, ko:`형식이 잘 된 과거 회의록 세 개를 예시 파일로 올리고, 예시가 형식을 보여 주므로 지시문은 그대로 두기`}
     ],
     explain:{ good:`"명료하게", "정확하게" 같은 형용사는 실패를 알리지 않고 효과만 없음. 소제목 순서와 미기록 날짜 표시 방법처럼 확인 가능한 규칙은 누가 읽어도 같은 뜻이므로 매주 같은 구조가 나옴. 기록에 없는 날짜를 표시하게 하는 규칙은 만들어 낸 마감일 문제도 함께 막음.`,
       wrongs:[
         `<b>B:</b> 형용사를 더 붙여도 무엇을 어떻게 해야 하는지는 여전히 정해지지 않음. 길어졌을 뿐 같은 모호한 지시임.`,
         `<b>C:</b> 같은 모호한 지시를 반복하는 것이므로 결과가 바뀌지 않음. 매번 붙여넣는 수고만 늘어남.`,
         `<b>D:</b> 예시는 형식 참고는 되지만 규칙이 없으면 일관되게 따른다는 보장이 없음. 없는 날짜를 만들어 내는 문제도 다루지 못함.`
       ]},
     principle:"원칙 ① 요청의 구체화",
     hint:`지금 지시문을 두 사람이 따로 읽었을 때 같은 회의록을 떠올릴지 생각할 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`형용사로 된 지시는 효과가 없으므로 누가 읽어도 같은 뜻인 확인 가능한 규칙이 필요함`, ok:true},
         {t:`지시문은 길수록 공식 권장에 가까워지기 때문에`},
         {t:`Claude는 Project 지시문을 첫 대화에서만 읽기 때문에`},
         {t:`형식 문제는 모델 등급을 올려야 해결되기 때문에`}
       ],
       explain:`모호한 지시는 오류 없이 효과만 없음. 소제목, 표시 방법처럼 확인 가능한 조건을 쓰면 두 사람이 읽어도 같은 결과를 기대하게 됨.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Grant report reminders", ts:"5.3",
     q:`A nonprofit communications lead writes grant reports in a Project. At the start of every session she types two reminders: name the source file for each figure, and say when information is missing instead of guessing. While she was on leave, a colleague used the Project without those reminders, and a draft with an unsupported number nearly went to a funder. What is the MOST appropriate change?`,
     ko:`한 비영리단체 커뮤니케이션 리드가 Project에서 보조금 보고서를 작성함. 세션을 시작할 때마다 두 가지를 입력함. 수치마다 출처 파일명을 밝힐 것, 정보가 없으면 추측하지 말고 없다고 쓸 것. 리드가 휴가 중일 때 동료가 이 문구 없이 Project를 썼고, 근거 없는 수치가 든 초안이 후원 기관에 나갈 뻔함. 가장 적절한 변경은 무엇인가?`,
     opts:[
       {t:`Write both reminders into the Project's instructions, so every conversation follows them no matter who starts it.`, ko:`두 문구를 Project 지시문에 적어, 누가 대화를 시작하든 모든 대화가 따르게 하기`, ok:true},
       {t:`Write a short handover checklist for anyone covering her work, reminding them to type the two reminders at the start.`, ko:`업무를 대신 맡는 사람용 인수인계 체크리스트를 만들어 시작할 때 두 문구를 입력하라고 안내하기`},
       {t:`Upload a short document listing the two reminders to the Project's files, so Claude can refer to it when relevant.`, ko:`두 문구를 적은 짧은 문서를 Project 파일로 올려 Claude가 관련 있을 때 참고하게 하기`},
       {t:`Add a final proofread for tone and grammar before any report goes to a funder, and leave the session prompts unchanged.`, ko:`보고서가 후원 기관에 나가기 전 어조·문법 최종 교정 단계를 추가하고 세션 프롬프트는 그대로 두기`}
     ],
     explain:{ good:`매번 입력하던 검증 규칙은 사람의 기억에 의존하므로, 입력을 잊는 순간 빠짐. 지시문에 한 번 적어 두면 요청하는 사람이 누구든 모든 대화가 그 규칙을 이어받음. 사람 검토도 여전히 필요하며, 규칙이 설정에 있어야 검토자가 확인할 출처 표시도 매번 남음.`,
       wrongs:[
         `<b>B:</b> 여전히 사람이 기억해서 입력해야 함. 이번 사고가 난 원인인 기억 의존 구조가 그대로임.`,
         `<b>C:</b> 두 문구는 모든 대화에 적용할 행동 규칙임. 참고 문서로 올리면 매 대화에 적용된다는 보장이 없음. 규칙은 지시문, 사실 자료는 지식 베이스에 둠.`,
         `<b>D:</b> 어조·문법 교정은 근거 없는 수치를 잡지 못함. 검토 대상이 위험과 맞지 않음.`
       ]},
     principle:"원칙 ④ 반복 맥락의 설정화",
     hint:`그 두 문구가 지금 누구의 기억에 의존하고 있는지 볼 것.`}
  ]},

  /* ================= CH 4 · 5.4 설정·지식·지시문 유지·갱신 ================= */
  { id:"p5c4", ch:"CH 4", obj:"5.4", title:"설정·지식·지시문 유지·갱신", steps:[
    {type:"concept", kind:"CONCEPT · 개념 설명", h:"설정 노후화와 정기 점검",
     html:`<p class="lead">설정은 시간이 지나면 낡음. 낡은 설정은 오류 메시지 없이 결과 품질을 조금씩 떨어뜨림. 설정 작업의 나머지 절반은 유지보수임.</p>
      <div class="callout term"><b>용어 카드</b> · <b>설정 노후화(configuration drift)</b>: 지시문·지식 베이스·Skill·Memory가 현재 업무와 어긋나면서, 오류 표시 없이 결과가 서서히 나빠지는 현상. "예전엔 잘 됐는데"라는 말이 대표 증상임.</div>
      <div class="tbl"><table>
        <tr><th>설정 위치</th><th>낡는 방식</th><th>결과에 보이는 증상</th></tr>
        <tr><td>지시문</td><td>지난 분기 프로세스·기간·승인자 기준</td><td>이전 기간 기준으로 정리됨</td></tr>
        <tr><td>지식 베이스</td><td>대체된 문서가 남아 있음</td><td>구버전 수치·문구를 인용함</td></tr>
        <tr><td>Skill</td><td>예전 양식 기준</td><td>매번 형식이 조금씩 틀림</td></tr>
        <tr><td>Memory</td><td>퇴사자, 끝난 결정, 바뀐 선호</td><td>떠난 담당자를 수신자로 적음</td></tr>
      </table></div>
      <div class="callout term"><b>용어 카드</b> · <b>정기 설정 점검</b>: 활성 Project의 지시문·지식 베이스·Skills를 월 1회 정도 현재 업무와 대조하는 습관. 대부분의 노후화를 이 점검에서 잡음. 뚜렷한 이유 없이 품질이 떨어졌다면 점검이 늦었다는 신호임.</div>
      <div class="sample"><span class="sl">예시 · 월간 설정 점검표 (영업지원팀 제안서 Project)</span>□ 지시문: 현재 프로세스·기간·승인자와 맞는가
□ 지식 베이스: 대체된 문서, 초안, 지난 분기 자료가 남아 있지 않은가
□ Skills: 이 Project에 맞는 Skill이 켜져 있는가, 커스텀 Skill이 현재 양식 기준인가
□ Memory: 퇴사자, 종료된 결정, 바뀐 선호가 남아 있지 않은가
□ 커넥터: 지금 작업에 필요한 소스만 연결되어 있는가
□ 공유: 바꾼 항목과 이유를 Project 사용자에게 알렸는가
점검일: 매월 첫째 주 · 담당: Project 관리자</div>
      <ul>
        <li>결과가 미묘하게 틀려지면 프롬프트를 고치기 전에 설정 유지보수부터 확인함</li>
        <li>낡은 지시를 고치고, 구버전 양식을 지우고, 퇴사자 Memory를 삭제하면 프롬프트 방식을 바꾸지 않아도 품질이 돌아옴</li>
        <li>매번 형식이 조금씩 틀리게 나오는 Skill은 프롬프트로 매번 보정하지 않고 Skill 자체를 고침</li>
      </ul>`},

    {type:"concept", kind:"CONCEPT · 개념 설명", h:"Skill 업데이트, Memory 관리 주기, 변경 공유",
     html:`<p class="lead">설정 위치마다 갱신 방식이 다름. 자동으로 바뀌는 것과 사람이 직접 고쳐야 바뀌는 것을 구분해야 함.</p>
      <h4>Skill 업데이트 방식</h4>
      <div class="tbl"><table>
        <tr><th>Skill 종류</th><th>업데이트 방식</th><th>사용자가 할 일</th></tr>
        <tr><td>Anthropic이 만든 Skill</td><td>자동 업데이트</td><td>결과가 기대와 다르면 원인 점검</td></tr>
        <tr><td>조직이 배포한 Skill</td><td>자동 업데이트</td><td>문제가 보이면 배포 담당자에게 알림</td></tr>
        <tr><td>직접 업로드한 커스텀 Skill</td><td>다시 업로드할 때만 바뀜</td><td>양식·절차가 바뀌면 파일을 고쳐 다시 업로드하고 결과 몇 건을 대조함</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>위 두 행은 사용자가 손대지 않아도 갱신되는 Skill, 마지막 행은 사용자가 고치지 않으면 계속 그대로인 Skill임.</p>
      <div class="callout term"><b>용어 카드</b> · <b>Memory 관리 주기(Memory lifecycle)</b>: Memory를 주기적으로 검토하고, 낡은 항목을 고치거나 지우고, 큰 변경 전에 내보내기(export)로 백업하고, 필요하면 전체 초기화(reset)하는 관리 절차. Memory는 양보다 정확성이 중요함.</div>
      <div class="flow"><span class="nd">① 검토<small>월 1회 정도</small></span><span class="ar">→</span><span class="nd">② 수정·삭제<small>퇴사자, 끝난 결정</small></span><span class="ar">→</span><span class="nd">③ 내보내기<small>큰 변경 전 백업</small></span><span class="ar">→</span><span class="nd">④ 전체 초기화<small>낡은 맥락이 너무 많을 때</small></span></div>
      <p class="howto"><b>읽는 법</b>①②는 정기적으로 반복하는 단계임. ③④는 조직 개편이나 고객사 변경처럼 큰 변경이 있을 때만 진행함. ④ 전에는 ③을 먼저 함.</p>
      <ul>
        <li>지난 분기엔 맞았지만 검토하지 않은 항목은 지금 작업을 잘못된 방향으로 이끔</li>
        <li>Incognito 모드는 Project 밖 단독 대화를 Memory와 이력에서 제외하는 기능임. 이미 쌓인 Memory를 정리하는 수단이 아님</li>
      </ul>
      <div class="sample bad"><span class="sl">예시 · 점검 전 (분기 실적 브리핑 Project, 10월)</span>지시문: "2026년 2분기 목표 대비 실적으로 정리할 것"
Memory: "보고 대상: 영업본부 박 상무"
지식 베이스: 3분기_실적.xlsx, 2분기_실적.xlsx, 2분기_보고양식.docx

결과: 3분기 데이터를 2분기 목표와 비교하고, 8월에 다른 본부로 옮긴 박 상무에게 보고하는 초안이 나옴</div>
      <div class="sample good"><span class="sl">예시 · 점검 후</span>지시문: "2026년 3분기 목표 대비 실적으로 정리할 것"
Memory: 박 상무 항목 삭제, "보고 대상: 영업본부 최 상무" 추가
지식 베이스: 3분기_실적.xlsx, 보고양식_2026-07.docx (2분기 파일 삭제)</div>
      <h4>변경 사항 알리기</h4>
      <ul>
        <li><b>설정에 알리기</b>: 새 승인자, 예산 동결, 기간 변경처럼 Claude가 스스로 알 수 없는 변화는 지시문이나 Memory에 직접 추가함</li>
        <li><b>사용자에게 알리기</b>: 공유 Project의 설정을 바꾸면 모든 사용자의 결과가 바뀜. 무엇을 왜 바꿨는지 알려야 각자 쓰던 보정 프롬프트가 새 규칙과 충돌하지 않음</li>
        <li><b>신중하게 확정하기</b>: 바꾼 규칙은 몇 번의 실제 작업에서 기존 방식과 비교한 뒤 기본값으로 확정함. 잘못된 변경이 모두의 워크플로에 들어가면 손실도 모두에게 쌓임(공식 강좌 모듈 7)</li>
      </ul>
      <div class="sample"><span class="sl">예시 · 공유 Project 변경 공지 (팀 채널)</span>[영업 제안서 Project 설정 변경 안내]
- 변경 항목: 지시문의 할인 조건 규칙 (조건별 표 한 개로 고정)
- 변경 이유: 할인 조건 문단이 읽기 어렵다는 의견 5건
- 시험 기간: 11월 1~2주차. 기존 방식과 새 방식으로 각각 3건씩 작성해 비교
- 요청 사항: 각자 쓰던 할인 조건 보정 프롬프트는 시험 기간 동안 쓰지 않을 것
- 확정 시점: 11월 3주차 회의에서 결정. 문의는 Project 관리자에게</div>`},

    {type:"concept", kind:"TOPIC · 주제 설명", h:"증상별 유지보수 판단",
     html:`__MAP:setup__
      <p class="lead">결과에 나타난 낡은 정보를 따라가면 고칠 설정 위치가 정해짐.</p>
      <div class="tbl"><table>
        <tr><th>증상</th><th>점검 위치</th><th>조치</th></tr>
        <tr><td>새 자료는 있는데 이전 기간 기준으로 정리됨</td><td>지시문, Memory</td><td>기간을 새 기준으로 갱신</td></tr>
        <tr><td>대체된 문구·수치를 인용함</td><td>지식 베이스</td><td>구버전 삭제</td></tr>
        <tr><td>서식 Skill의 결과가 매번 조금씩 틀림</td><td>Skill</td><td>커스텀이면 고쳐서 재업로드</td></tr>
        <tr><td>떠난 담당자나 끝난 결정을 언급함</td><td>Memory</td><td>해당 항목 수정·삭제</td></tr>
        <tr><td>Memory에 오도할 만큼 낡은 맥락이 쌓임</td><td>Memory 전체</td><td>내보내기로 백업 후 초기화</td></tr>
        <tr><td>몇 달 동안 뚜렷한 이유 없이 품질이 떨어짐</td><td>설정 전체</td><td>지시문·지식 베이스·Skills 점검</td></tr>
        <tr><td>새 대화의 첫 응답부터 조건을 무시함</td><td>프롬프트</td><td>요청 구체화(PART 02)</td></tr>
        <tr><td>긴 대화 중간부터 형식이 흐트러짐</td><td>대화 길이</td><td>요약 후 새 대화(PART 01)</td></tr>
      </table></div>
      <p class="howto"><b>읽는 법</b>위 여섯 행이 유지보수 대상이고, 마지막 두 행은 증상이 비슷해 보여도 원인이 설정에 있지 않은 경우임.</p>
      <div class="flow"><span class="nd">① 프롬프트<small>요청에 빠진 조건</small></span><span class="ar">→</span><span class="nd">② 대화 길이<small>컨텍스트 압축</small></span><span class="ar">→</span><span class="nd">③ 기능·모델<small>맞는 도구인가</small></span><span class="ar">→</span><span class="nd hot">④ 설정 최신성<small>지시문·지식·Skill·Memory</small></span><span class="ar">→</span><span class="nd">⑤ 과업 적합성<small>마지막에 의심</small></span></div>
      <p class="howto"><b>읽는 법</b>공식 강좌 모듈 7의 진단 순서이며, 왼쪽일수록 확인 비용이 낮음. 강조된 ④가 이 챕터의 범위임. "예전엔 잘 됐는데"라는 증상이면 ④를 먼저 의심함.</p>
      <div class="callout">시험 포인트 · 오류 메시지 없이 결과가 서서히 틀어졌다는 지문은 설정 노후화를 가리킴. 정답은 해당 설정 위치를 고치는 선택지이고, 프롬프트 재작성과 모델 교체는 자주 나오는 오답 선택지임.</div>
      <h4>자주 틀리는 지점</h4>
      <ul>
        <li>직접 올린 커스텀 Skill이 자동으로 업데이트될 것으로 기대하기</li>
        <li>큰 변경 전에 Memory를 내보내지 않고 바로 지우기</li>
        <li>"이전 정보는 무시할 것"을 지시문에 추가하고 낡은 항목은 그대로 두기</li>
        <li>새 파일만 추가하고 지시문의 기간 표기를 그대로 두기</li>
        <li>공유 Project의 설정을 바꾸고 사용자에게 알리지 않기</li>
        <li>바꾼 규칙을 비교 없이 곧바로 모든 사람의 기본값으로 확정하기</li>
      </ul>`},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 1: Quarterly briefs drift", ts:"5.4",
     q:`A sales enablement manager set up a Project that produced competitor briefs smoothly for two quarters. This quarter the briefs compare results against last quarter's targets and address a regional director who left the company in August. No error appears, and the new quarter's data file is already in the Project. What is the MOST likely cause?`,
     ko:`한 영업지원 매니저가 만든 Project가 두 분기 동안 경쟁사 브리핑을 문제없이 만들어 왔음. 이번 분기에는 브리핑이 지난 분기 목표와 실적을 비교하고, 8월에 퇴사한 지역 본부장을 수신자로 적음. 오류 메시지는 없고 이번 분기 데이터 파일은 이미 Project에 있음. 가장 가능성 높은 원인은 무엇인가?`,
     opts:[
       {t:`The instructions and remembered details still point to last quarter and the former director, so they need updating.`, ko:`지시문과 기억된 정보가 아직 지난 분기와 전임 본부장을 가리키고 있어 갱신이 필요함`, ok:true},
       {t:`The requests have become too brief, so each prompt now needs more background on this quarter's goals and audience.`, ko:`요청이 너무 짧아져서 프롬프트마다 이번 분기 목표와 독자에 대한 배경을 더 넣어야 함`},
       {t:`The conversation history has grown too long, so earlier instructions were compressed and should be pasted in again.`, ko:`대화 이력이 너무 길어져 앞선 지시가 압축되었으므로 다시 붙여넣어야 함`},
       {t:`The model has gradually degraded from repeated use in one Project, so a higher tier is needed to restore quality.`, ko:`한 Project에서 반복 사용하면서 모델 성능이 점점 떨어졌으므로 상위 등급이 필요함`}
     ],
     explain:{ good:`"예전엔 잘 됐는데 오류 없이 틀어졌다"는 증상은 낡은 설정을 가리킴. 새 데이터는 이미 지식 베이스에 있으므로, 이전 기간을 고정한 지시문과 퇴사자가 남은 Memory가 원인임. 기간을 갱신하고 낡은 Memory 항목을 지우면 프롬프트 방식을 바꾸지 않아도 품질이 돌아옴.`,
       wrongs:[
         `<b>B:</b> 두 분기 동안 같은 요청으로 잘 작동했음. 첫 응답부터 틀리는 명세 부족과 증상이 다름.`,
         `<b>C:</b> 긴 대화의 압축은 한 대화 중간부터 형식이 흐트러지는 증상임. 지난 분기 목표와 퇴사자라는 구체적인 낡은 정보는 설정에 남은 내용을 가리킴.`,
         `<b>D:</b> 모델 성능 저하를 뒷받침하는 단서가 지문에 없음. 낡은 정보의 출처를 확인하지 않고 도구를 바꾸는 대응임.`
       ]},
     principle:"원칙 ⑥ 원인 진단 후 수정",
     hint:`새 자료는 이미 있다는 조건과, 결과에 나타난 정보가 얼마나 구체적으로 낡았는지를 함께 볼 것.`,
     why:{ q:`이 상황에서 정답을 결정하는 근거는 무엇인가?`,
       opts:[
         {t:`새 데이터는 이미 있는데 지시문과 Memory가 지난 분기와 퇴사자를 고정하고 있음`, ok:true},
         {t:`유지보수가 공식 권장 절차라서`},
         {t:`분기가 바뀌면 Claude가 지식 베이스를 자동으로 비우기 때문에`},
         {t:`같은 Project를 오래 쓰면 모델 성능이 떨어지기 때문에`}
       ],
       explain:`결과에 나온 낡은 정보가 어디에 저장되어 있는지 추적하면 고칠 설정 위치가 정해짐. 이 문항에서는 지시문과 Memory임.` }},

    {type:"quiz", kind:"PRACTICE · 실전 진단", h:"Practice 2: Run-sheet Skill", ts:"5.4",
     q:`An event planner formats vendor run-sheets with a custom Skill she uploaded last spring. In July the company switched to a new run-sheet template, and the brand team shared it with everyone. Three months later her run-sheets still follow the old layout. She had assumed the Skill would pick up company changes on its own. What is the MOST appropriate next step?`,
     ko:`한 행사 기획자가 지난봄 직접 업로드한 커스텀 Skill로 협력업체 진행표를 정리함. 7월에 회사가 새 진행표 양식으로 바꾸었고 브랜드팀이 전 직원에게 공유함. 석 달이 지났는데도 진행표가 예전 배치로 나옴. 기획자는 Skill이 회사 변경 사항을 알아서 반영할 것이라고 생각했음. 가장 적절한 다음 단계는 무엇인가?`,
     opts:[
       {t:`Revise the Skill's files to match the new template, upload it again, and compare a few outputs with the template.`, ko:`Skill 파일을 새 양식에 맞게 고쳐 다시 업로드하고, 결과 몇 건을 양식과 대조하기`, ok:true},
       {t:`Wait for the next automatic update, since Skills are refreshed when the company publishes a new official template.`, ko:`회사가 새 공식 양식을 배포하면 Skill이 갱신되므로 다음 자동 업데이트를 기다리기`},
       {t:`Add the new template to each Project's files and keep the Skill as it is, letting Claude reconcile the two layouts.`, ko:`새 양식을 각 Project 파일에 추가하고 Skill은 그대로 두어 Claude가 두 배치를 조정하게 하기`},
       {t:`Describe the new layout in detail in every request, so the Skill's output is corrected each time it runs.`, ko:`요청할 때마다 새 배치를 자세히 설명해 Skill이 실행될 때마다 결과를 바로잡기`}
     ],
     explain:{ good:`직접 업로드한 커스텀 Skill은 다시 업로드해야만 바뀜. 자동 업데이트는 Anthropic이 만든 Skill과 조직이 배포한 Skill에 해당함. 절차가 담긴 Skill 자체를 고쳐야 모든 Project에서 한 번에 바로잡히고, 몇 건을 대조해 새 양식대로 나오는지 확인함.`,
       wrongs:[
         `<b>B:</b> 사용자가 올린 커스텀 Skill에는 자동 업데이트가 없음. 기다려도 예전 배치가 계속 나옴.`,
         `<b>C:</b> 낡은 절차(Skill)와 새 자료(양식 파일)가 서로 다른 내용을 담게 되어 결과가 더 불안정해질 수 있음. 원인인 Skill은 그대로임.`,
         `<b>D:</b> 매번 프롬프트로 보정하면 유지보수를 사람의 기억에 맡기게 됨. 설정을 고치면 한 번으로 끝남.`
       ]},
     principle:"원칙 ④ 반복 맥락의 설정화",
     hint:`그 Skill을 누가 올렸는지가 업데이트 방식을 정함.`}
  ]},

  /* ================= D5 미니테스트 ================= */
  { id:"p5test", type:"test", title:"D5 미니테스트 · 8문항", questions:[
    { lvl:"기초", ts:"5.1",
      q:`A high school teacher gives written feedback on student essays every week. In each chat she re-explains the course rubric, attaches the assignment sheet, and repeats her rule: list two strengths and then one improvement, in that order. She wants to stop repeating this setup every week. Which setup BEST fits her needs?`,
      ko:`한 고등학교 교사가 매주 학생 에세이에 서면 피드백을 씀. 대화마다 평가 기준표를 다시 설명하고, 과제 안내문을 첨부하고, "강점 두 개 다음에 개선점 한 개를 이 순서로 쓸 것"이라는 규칙을 반복함. 매주 하는 이 반복을 멈추고 싶음. 가장 알맞은 설정은 무엇인가?`,
      opts:[
        {t:`A Project with the rubric and assignment sheet uploaded as files and the feedback order written as its instruction.`, ko:`평가 기준표와 과제 안내문은 파일로 올리고 피드백 순서는 지시문으로 적은 Project`, ok:true},
        {t:`A Project whose instruction field holds the full rubric text, the assignment sheet and the feedback rule all together.`, ko:`지시문 칸에 평가 기준표 전문, 과제 안내문, 피드백 규칙을 한꺼번에 모두 넣은 Project`},
        {t:`A regular chat in which she asks Claude to remember the rubric and the feedback rule for all of her future conversations.`, ko:`평가 기준표와 피드백 규칙을 앞으로의 모든 대화에서 기억해 달라고 요청하는 일반 대화`},
        {t:`A Project with only the rubric uploaded, where she reminds Claude of the feedback order at the start of each new chat.`, ko:`평가 기준표만 올린 Project에서 새 대화마다 피드백 순서를 다시 알려 주기`}
      ],
      explain:{ good:`기준표와 안내문은 참고 자료이므로 지식 베이스에, "강점 두 개 후 개선점 한 개"는 행동 규칙이므로 지시문에 둠. 규칙과 그 규칙이 쓰는 자료를 각각 맞는 위치에 함께 넣어야 반복 없이 같은 결과가 나옴.`,
        wrongs:[
          `<b>B:</b> 긴 참고 자료를 지시문에 넣으면 지시문이 지나치게 길어지고 수정이 어려워짐. 정작 지켜야 할 규칙도 찾기 어려워짐.`,
          `<b>C:</b> 기준표 같은 고정 참고 자료는 지식 베이스, 피드백 순서 같은 행동 규칙은 지시문이 맞는 위치임. Memory는 진행 중 결정과 선호를 이어 주는 위치이고, 공식 강좌 모듈 7도 반복 규칙의 보관처로는 지시문 같은 설정을 권함.`,
          `<b>D:</b> 자료는 설정했지만 규칙은 여전히 매번 반복해야 함. 절반만 설정한 상태임.`
        ]},
      principle:"원칙 ④ 반복 맥락의 설정화" },

    { lvl:"실전", ts:"5.1", multi:2,
      q:`A project lead at a marketing agency is setting up a Project for a new client. Four needs came up: a formal tone, with any figure not found in the client's data clearly marked; the client's 40-page brand book; a six-step routine that turns monthly analytics into the report template, which the agency also uses for other clients; and slogans the client approved in earlier meetings. Which TWO placements are correct? (Select TWO.)`,
      ko:`한 마케팅 대행사의 프로젝트 리드가 신규 고객사용 Project를 설정함. 필요한 것은 네 가지임. 격식 있는 어조와 고객 데이터에 없는 수치 표시, 고객사의 40쪽 브랜드북, 월간 분석 데이터를 보고서 양식으로 바꾸는 6단계 절차(다른 고객사에도 같은 절차를 씀), 지난 회의에서 고객이 승인한 슬로건. 올바른 배치 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Put the tone rule and the rule for marking unfound figures in the Project's instructions.`, ko:`어조 규칙과 데이터에 없는 수치 표시 규칙을 Project 지시문에 넣기`, ok:true},
        {t:`Build the six-step routine once as a Skill, so other client Projects can reuse it.`, ko:`6단계 절차를 Skill로 한 번 만들어 다른 고객사 Project에서도 재사용하기`, ok:true},
        {t:`Paste the full 40-page brand book into the instructions, so it applies in every conversation.`, ko:`40쪽 브랜드북 전문을 지시문에 붙여넣어 모든 대화에 적용되게 하기`},
        {t:`Upload a document describing the six steps to the files, so Claude reads it each time.`, ko:`6단계를 설명한 문서를 파일로 올려 Claude가 매번 읽게 하기`},
        {t:`Store the brand book's color codes and type rules in Memory, so they persist across sessions.`, ko:`브랜드북의 색상 코드와 글꼴 규칙을 Memory에 저장해 세션 간에 유지되게 하기`}
      ],
      explain:{ good:`어조와 수치 표시 같은 행동 규칙은 지시문에, 여러 고객사에 반복되는 단계별 절차는 계정 수준의 Skill에 둠. 나머지 두 필요도 위치가 정해져 있음. 브랜드북은 지식 베이스, 승인된 슬로건 같은 진행 중 결정은 프로젝트 단위 Memory가 맞는 위치임.`,
        wrongs:[
          `<b>C:</b> 긴 참고 자료를 지시문에 넣으면 지시문이 지나치게 길어지고 규칙을 관리하기 어려워짐. 브랜드북은 지식 베이스에 올림.`,
          `<b>D:</b> 절차를 참고 문서로 올리면 단계가 일관되게 지켜진다는 보장이 없고 다른 고객사 Project에서 재사용할 수도 없음.`,
          `<b>E:</b> 색상 코드처럼 바뀌지 않는 사실은 지식 베이스가 맞는 위치임. Memory는 계속 바뀌는 결정 기록용임.`
        ]},
      principle:"원칙 ④ 반복 맥락의 설정화" },

    { lvl:"기초", ts:"5.2",
      q:`An operations analyst is preparing a weekly vendor-performance summary in Claude. The summary only needs spreadsheets stored in the team's shared drive. A colleague recommends connecting the drive, the team mailbox, the calendar and every other available source "so Claude always has the full picture." What is the MOST appropriate approach?`,
      ko:`한 운영 분석가가 Claude로 주간 협력업체 성과 요약을 준비함. 요약에 필요한 것은 팀 공유 드라이브의 스프레드시트뿐임. 동료는 "Claude가 항상 전체 상황을 알도록" 드라이브, 팀 메일함, 캘린더 등 연결 가능한 모든 소스를 연결하라고 권함. 가장 적절한 방식은 무엇인가?`,
      opts:[
        {t:`Connect only the shared drive for this summary, and add other sources later only when a specific task requires them.`, ko:`이번 요약에는 공유 드라이브만 연결하고, 다른 소스는 특정 작업에 실제로 필요해질 때만 추가하기`, ok:true},
        {t:`Connect every available source now, so the team avoids repeating setup work each time a new task comes along later.`, ko:`나중에 새 작업이 생길 때마다 설정을 반복하지 않도록 지금 연결 가능한 소스를 모두 연결하기`},
        {t:`Connect all the sources, then write a Project instruction telling Claude not to look at mail or calendar entries.`, ko:`모든 소스를 연결한 뒤 메일과 캘린더는 보지 말라는 Project 지시문을 쓰기`},
        {t:`Avoid connections entirely and download the spreadsheets each week to paste their contents into the chat by hand.`, ko:`연결은 전혀 쓰지 않고 매주 스프레드시트를 내려받아 내용을 대화에 직접 붙여넣기`}
      ],
      explain:{ good:`커넥터는 작업에 필요한 범위를 골라 연결함. 일을 해낼 수 있는 가장 좁은 접근만 주고, 작업이 바뀌면 다시 판단함. 필요 없는 메일함과 캘린더까지 연결하면 노출 범위만 넓어짐.`,
        wrongs:[
          `<b>B:</b> 설정 수고를 줄이려고 필요 없는 접근까지 미리 여는 방식임. 접근 범위는 작업에 비례해야 함.`,
          `<b>C:</b> 지시문의 "보지 말 것"은 접근 통제가 아님. 연결된 이상 접근 범위는 그대로 넓음.`,
          `<b>D:</b> 필요한 소스까지 연결하지 않아 매주 같은 수작업이 반복됨. 위험을 줄이는 방법은 범위 제한임.`
        ]},
      principle:"원칙 ⑤ 정책·사람 판단 우선" },

    { lvl:"실전", ts:"5.2", multi:2,
      q:`A marketing coordinator wants to connect the team's cloud drive so Claude can help reorganize campaign folders. Her company's Claude workspace is managed by an IT admin. On the add screen she finds three connectors with nearly identical names, one from a publisher she does not recognize. She also plans to have Claude move and rename files automatically every Friday. Which TWO actions are MOST appropriate before she builds this workflow? (Select TWO.)`,
      ko:`한 마케팅 코디네이터가 Claude로 캠페인 폴더 정리를 하려고 팀 클라우드 드라이브를 연결하려 함. 이 회사의 Claude 워크스페이스는 IT 관리자가 관리함. 추가 화면에서 이름이 거의 같은 커넥터 세 개를 발견했는데, 그중 한 개는 모르는 제공자의 것임. 매주 금요일 Claude가 파일을 자동으로 옮기고 이름을 바꾸게 할 계획도 있음. 이 워크플로를 만들기 전 가장 적절한 행동 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`Ask the workspace admin which connector and add path the organization has approved before connecting anything.`, ko:`연결하기 전에 조직이 승인한 커넥터와 추가 경로를 워크스페이스 관리자에게 확인하기`, ok:true},
        {t:`Confirm what the approved connector can and cannot do with files before designing the Friday routine around it.`, ko:`금요일 작업을 설계하기 전에 승인된 커넥터가 파일에 대해 할 수 있는 일과 없는 일을 확인하기`, ok:true},
        {t:`Add the connector whose name matches the drive most closely, and remove it later if anything looks unusual.`, ko:`드라이브 이름과 가장 비슷한 커넥터를 추가하고, 이상해 보이면 나중에 제거하기`},
        {t:`Add any of the three and write a Project instruction limiting Claude to the campaign folders only.`, ko:`셋 중 아무거나 추가하고 캠페인 폴더만 다루라는 Project 지시문을 쓰기`},
        {t:`Skip the connector and ask Claude to remember the folder structure from earlier chats instead.`, ko:`커넥터 없이 이전 대화에서 본 폴더 구조를 기억하라고 Claude에게 요청하기`}
      ],
      explain:{ good:`이름이 거의 같은 커넥터가 셋이고 그중 한 개는 모르는 제공자의 것임. 공식 강좌는 추가 화면의 눈에 띄는 경로가 조직 승인 목록이 아닌 공개 디렉터리로 이어질 수 있다는 현장 사례를 주의 사항으로 소개함. 그래서 연결 전에 관리자에게 승인된 커넥터와 경로를 확인함. 또한 커넥터마다 할 수 있는 동작이 다를 수 있으므로 자동 작업을 설계하기 전에 그 범위를 확인해야 함.`,
        wrongs:[
          `<b>C:</b> 모르는 제공자의 커넥터를 연결하는 순간 이미 접근이 열림. 나중에 제거하는 것은 사후 대응임.`,
          `<b>D:</b> 지시문은 접근 통제가 아님. 어떤 제공자의 커넥터인지 확인하는 문제도 그대로 남음.`,
          `<b>E:</b> 이전 대화의 기억은 현재 폴더 상태를 반영하지 못하고, 파일을 옮기는 작업도 할 수 없음.`
        ]},
      principle:"원칙 ⑤ 정책·사람 판단 우선" },

    { lvl:"기초", ts:"5.3",
      q:`An HR team uses a Project to draft job postings. The only instruction says: "Make every posting inclusive and appealing." Hiring managers report that the drafts still differ widely from one another, and one draft described the team as "young and energetic." Which instruction change is MOST likely to produce consistent, inclusive postings?`,
      ko:`한 HR팀이 채용 공고 초안을 Project로 작성함. 지시문은 "모든 공고를 포용적이고 매력적으로 작성할 것" 한 줄뿐임. 채용 관리자들은 초안이 여전히 제각각이고, 한 초안은 팀을 "젊고 활기찬 팀"으로 묘사했다고 알림. 일관되고 포용적인 공고를 만들 가능성이 가장 높은 지시문 변경은 무엇인가?`,
      opts:[
        {t:`List required and preferred skills separately, use neutral job titles, and avoid age-related words such as "young."`, ko:`필수·우대 역량을 나눠 적고, 중립적인 직무명을 쓰며, "젊은" 같은 나이 관련 표현을 쓰지 않게 하기`, ok:true},
        {t:`Rewrite it as: "Write inclusive, appealing, and professional postings that truly reflect our company values and culture."`, ko:`"회사의 가치와 문화를 진정으로 반영한 포용적이고 매력적이며 전문적인 공고를 작성할 것"으로 바꾸기`},
        {t:`Upload last year's best-performing posting as an example file and keep the current instruction exactly as it is.`, ko:`작년에 반응이 가장 좋았던 공고를 예시 파일로 올리고 현재 지시문은 그대로 두기`},
        {t:`Add a line asking Claude to rate how inclusive each posting is on a scale of one to ten before finishing.`, ko:`마무리 전에 공고마다 포용성 점수를 1~10점으로 매기라는 문장을 추가하기`}
      ],
      explain:{ good:`"포용적으로", "매력적으로" 같은 형용사는 읽는 사람마다 다르게 해석되어 효과가 없음. 역량 구분, 직무명, 피해야 할 표현처럼 확인 가능한 규칙은 누가 읽어도 같은 뜻이고 검토자도 대조하기 쉬움. 채용처럼 사람에게 영향이 큰 업무에서는 편향을 줄이는 규칙을 구체적으로 써야 함.`,
        wrongs:[
          `<b>B:</b> 형용사를 더 늘렸을 뿐 무엇을 해야 하는지는 정해지지 않음. 같은 모호한 지시임.`,
          `<b>C:</b> 예시는 참고가 되지만 규칙이 없으면 예시의 어떤 특징을 따라야 하는지 정해지지 않음. 예시에 편향 표현이 있으면 그대로 반복될 수 있음.`,
          `<b>D:</b> Claude의 자기 평가 점수는 포용성의 근거가 아님. 무엇을 피해야 하는지 알려 주지도 않음.`
        ]},
      principle:"원칙 ① 요청의 구체화" },

    { lvl:"실전", ts:"5.3", multi:2,
      q:`A customer service manager at a travel agency is writing instructions for a Project that 12 agents will use to draft refund replies. Right now the drafts vary in length, sometimes include internal policy codes, and once stated a refund amount that was not in the ticket. Which TWO additions to the instructions would MOST improve consistency and accuracy? (Select TWO.)`,
      ko:`한 여행사의 고객 서비스 매니저가 상담원 12명이 환불 답장 초안에 쓸 Project의 지시문을 작성함. 지금은 초안 길이가 제각각이고, 내부 정책 코드가 들어가기도 하며, 한 번은 티켓에 없는 환불 금액이 적힘. 일관성과 정확성을 가장 크게 높일 지시문 추가 두 가지는 무엇인가? (두 개 선택)`,
      opts:[
        {t:`"If the refund amount is not stated in the ticket, write [check account] instead of estimating it."`, ko:`"티켓에 환불 금액이 없으면 추정하지 말고 [계정 확인]으로 쓸 것" 추가하기`, ok:true},
        {t:`"Answer the customer's question in the first sentence, stay under 120 words, and never include internal codes."`, ko:`"첫 문장에서 고객 질문에 답하고, 120단어 이내로 쓰며, 내부 코드는 넣지 말 것" 추가하기`, ok:true},
        {t:`"Always be empathetic, professional and helpful, and do your very best on every single reply."`, ko:`"항상 공감하고 전문적이며 도움이 되게, 모든 답장에 최선을 다할 것" 추가하기`},
        {t:`Paste the full 30-page refund policy into the instructions so every rule is always in front of Claude.`, ko:`30쪽 환불 정책 전문을 지시문에 붙여넣어 모든 규칙이 항상 Claude에게 보이게 하기`},
        {t:`"Do not keep customer names or card numbers in memory after this conversation ends."`, ko:`"대화가 끝나면 고객 이름과 카드 번호를 기억하지 말 것" 추가하기`}
      ],
      explain:{ good:`금액이 없을 때의 처리 규칙은 근거 없는 금액이 쓰이는 문제를 막고, 첫 문장·길이·내부 코드 규칙은 12명이 같은 형태의 초안을 받게 함. 둘 다 누가 읽어도 같은 뜻이고 검토자가 바로 확인할 수 있는 조건임.`,
        wrongs:[
          `<b>C:</b> 형용사와 다짐뿐이라 무엇을 바꿔야 하는지 정해지지 않음. 모호한 지시는 효과가 없음.`,
          `<b>D:</b> 긴 참고 자료는 지식 베이스에 둠. 지시문에 넣으면 지나치게 길어지고 규칙을 관리하기 어려워짐.`,
          `<b>E:</b> "기억하지 말 것"이라는 지시는 데이터 통제 수단이 아님. 카드 번호 같은 민감 정보는 정책에 따라 다룰 수 있는지부터 판단해야 함.`
        ]},
      principle:"원칙 ② 내보내기 전 검증" },

    { lvl:"기초", ts:"5.4",
      q:`A project manager set up a status-report Project in January. It is now October, and the reports have slowly become less useful. Some refer to an approval process the company retired in the summer, and one quoted an outdated report template. Nobody has reviewed the Project's setup since January. What should the manager do FIRST?`,
      ko:`한 프로젝트 매니저가 1월에 현황 보고 Project를 만들었음. 지금은 10월이고 보고서의 유용성이 서서히 떨어짐. 일부는 회사가 여름에 폐지한 승인 절차를 언급하고, 한 건은 예전 보고서 양식을 인용함. 1월 이후 아무도 Project 설정을 점검하지 않았음. 매니저가 가장 먼저 할 일은 무엇인가?`,
      opts:[
        {t:`Review the instructions, files and enabled Skills against how the team works today, and remove what no longer applies.`, ko:`지시문·파일·켜진 Skills를 지금 팀의 업무 방식과 대조하고 더 이상 맞지 않는 것을 정리하기`, ok:true},
        {t:`Switch the Project to the most capable model available, since the reports have become less useful over several months.`, ko:`몇 달에 걸쳐 보고서 품질이 떨어졌으므로 Project를 가장 성능 높은 모델로 바꾸기`},
        {t:`Rewrite the weekly report prompt from scratch with more detail about what this month's report should contain.`, ko:`이번 달 보고서에 들어갈 내용을 더 자세히 담아 주간 보고 프롬프트를 처음부터 다시 쓰기`},
        {t:`Delete the Project and start each report in a fresh chat, so no old material can affect the output ever again.`, ko:`Project를 삭제하고 보고서마다 새 대화에서 시작해 예전 자료가 결과에 다시는 영향을 주지 못하게 하기`}
      ],
      explain:{ good:`오류 없이 몇 달에 걸쳐 품질이 떨어진 것은 설정 노후화의 전형적인 증상임. 폐지된 절차는 지시문에, 예전 양식은 지식 베이스나 Skill에 남아 있을 가능성이 높으므로 설정을 현재 업무와 대조하는 점검이 먼저임. 월 1회 정도 점검했다면 대부분 일찍 잡혔을 문제임.`,
        wrongs:[
          `<b>B:</b> 모델을 바꿔도 낡은 지시문과 양식은 그대로 참조됨. 원인을 확인하지 않은 비싼 대응임.`,
          `<b>C:</b> 원인은 설정에 남은 낡은 내용임. 프롬프트를 다시 써도 같은 설정 위에서 실행됨.`,
          `<b>D:</b> 낡은 부분만 고치면 되는 설정을 통째로 버리는 과잉 대응임. 배경 자료와 규칙을 다시 매번 입력해야 함.`
        ]},
      principle:"원칙 ⑥ 원인 진단 후 수정" },

    { lvl:"실전", ts:"5.4",
      q:`An account director at a PR agency has used one Project for a manufacturing client for two years. The client just reorganized, with new stakeholders, merged departments and a different approval chain. Claude's remembered details are full of former contacts and decisions that no longer apply, and drafts keep addressing people who have left. She plans a large clean-up this week. What is the MOST appropriate approach?`,
      ko:`한 PR 대행사의 어카운트 디렉터가 제조업 고객사 한 곳의 업무를 2년간 한 Project에서 처리해 옴. 고객사가 최근 조직을 개편해 이해관계자, 부서 구성, 승인 라인이 모두 바뀜. Claude에 기억된 정보는 전임 담당자와 더 이상 유효하지 않은 결정으로 가득하고, 초안은 계속 떠난 사람들을 수신자로 적음. 이번 주에 대대적인 정리를 할 계획임. 가장 적절한 방식은 무엇인가?`,
      opts:[
        {t:`Export the current memory as a backup, then reset or edit it for the new structure and update the instructions to match.`, ko:`현재 Memory를 내보내 백업한 뒤 초기화하거나 새 구조에 맞게 수정하고, 지시문도 함께 갱신하기`, ok:true},
        {t:`Add an instruction telling Claude to ignore any remembered names and decisions from before the reorganization, and keep the memory as it is.`, ko:`조직 개편 이전에 기억된 이름과 결정은 무시하라는 지시문을 추가하고 Memory는 그대로 두기`},
        {t:`Delete the outdated entries one by one right away without saving a copy, since the old structure will not be needed again.`, ko:`예전 구조는 다시 필요 없으므로 사본 없이 낡은 항목을 바로 하나씩 삭제하기`},
        {t:`Leave the memory alone and start new chats, since Claude gives recent conversations more weight than older remembered details.`, ko:`Claude가 오래된 기억보다 최근 대화를 더 중시하므로 Memory는 그대로 두고 새 대화를 시작하기`}
      ],
      explain:{ good:`큰 변경 전에는 Memory를 내보내 백업해 두고, 오도할 만큼 낡은 맥락이 쌓였다면 전체 초기화도 선택지임. 바뀐 승인 라인처럼 Claude가 스스로 알 수 없는 사실은 지시문이나 Memory에 직접 추가해야 함.`,
        wrongs:[
          `<b>B:</b> 낡은 항목과 "무시하라"는 지시가 서로 충돌하는 상태가 됨. 원인인 낡은 Memory는 그대로 남음.`,
          `<b>C:</b> 정리 방향은 맞지만 큰 변경 전에 백업을 남기지 않음. 지운 항목 중 필요한 것이 있으면 되돌릴 수 없음.`,
          `<b>D:</b> 근거 없는 가정임. 새 대화를 열어도 Project의 Memory는 계속 이어짐.`
        ]},
      principle:"원칙 ④ 반복 맥락의 설정화" }
  ]}
]};
