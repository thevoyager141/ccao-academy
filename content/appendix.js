/* 부록: 판단 원칙 · 상황별 선택표 */
window.CCAO_APPENDIX = {

principles: `
<div class="tbl"><table>
<tr><th>원칙</th><th>내용</th><th>대표 오답</th></tr>
<tr><td><b>① 요청의 구체화</b></td><td>목적·독자·맥락·형식·제약을 밝힘. 여러 단계가 섞인 일은 단계별로 나누고 중간 결과를 확인함</td><td>모델만 바꾸기, "더 잘 쓸 것" 같은 막연한 요청 반복, 한 프롬프트에 모든 단계 몰아넣기</td></tr>
<tr><td><b>② 내보내기 전 검증</b></td><td>수치·인용·조항 번호·이름은 원문과 대조한 뒤 사용함. 검토 깊이는 위험도에 맞춤</td><td>확신 있는 어조 믿기, Claude에게 자체 평가 요청, 문체만 다듬기</td></tr>
<tr><td><b>③ 요구에 맞는 선택</b></td><td>기능·모델·출력 형식을 품질·속도·비용·분량에 맞춤. 정확한 수치는 Code Execution으로 계산함</td><td>항상 최상위 모델, 계산을 글로 요청, 모든 기능 켜기</td></tr>
<tr><td><b>④ 반복 맥락의 설정화</b></td><td>매번 반복하는 지시·자료·절차를 프로젝트 지시문·지식 베이스·Skills로 옮기고 주기적으로 갱신함</td><td>매번 더 긴 프롬프트, 사람이 매번 같은 수정, 낡은 문서 방치</td></tr>
<tr><td><b>⑤ 정책·사람 판단 우선</b></td><td>민감 데이터는 정책 확인 → 최소화·익명화 → 사용. 영향이 크거나 되돌리기 어려운 결정은 사람이 검토·승인. 기술 구축은 Architect·Developer에게 넘김</td><td>"저장하지 말 것" 지시나 Incognito로 정책 대신하기, 무검토 자동화</td></tr>
<tr><td><b>⑥ 원인 진단 후 수정</b></td><td>결과가 나쁘면 명세 → 대화 길이 → 기능·모델 → 설정 → 과업 적합성 순으로 원인을 찾음</td><td>바로 최상위 모델로 교체, 처음부터 다시 쓰기, 포기</td></tr>
</table></div>`,

cheat: `
<h4>진입점·기능 선택 (D3)</h4>
<div class="tbl"><table>
<tr><th>상황</th><th>선택</th></tr>
<tr><td>한 번 묻고 끝나는 질문, 빠른 초안</td><td>채팅(Chat)</td></tr>
<tr><td>같은 배경 설명을 매번 다시 붙여넣음, 반복 업무, 형식 고정</td><td>Projects (지시문 + 지식 베이스)</td></tr>
<tr><td>받는 사람이 열어 보고 고쳐 쓸 문서·표·도구</td><td>Artifacts</td></tr>
<tr><td>여러 출처를 깊이 조사해 종합</td><td>Research (유료 플랜)</td></tr>
<tr><td>가벼운 최신 정보 확인</td><td>채팅의 웹 검색</td></tr>
<tr><td>보고에 쓰일 정확한 수치, 데이터 정리, 차트, 파일 생성</td><td>Code Execution</td></tr>
<tr><td>정해진 절차를 매번 같은 방식으로</td><td>Skills (계정 수준, 여러 Project에서 재사용)</td></tr>
<tr><td>세션이 바뀌어도 이어져야 하는 사실·선호</td><td>Memory (고객별 분리는 Project 단위 Memory)</td></tr>
</table></div>

<h4>모델 선택 (D3)</h4>
<div class="tbl"><table>
<tr><th>모델</th><th>맞는 작업</th></tr>
<tr><td>Haiku</td><td>구조가 명확한 추출·분류를 대량으로, 속도가 중요하고 개별 오류 비용이 낮을 때</td></tr>
<tr><td>Sonnet</td><td>대부분의 초안·요약·분석·문서 검토의 기본 출발점</td></tr>
<tr><td>Opus</td><td>미묘한 판단, 복잡한 다단계 추론, 해석이 필요한 모호한 자료, 고객용·고위험 산출물. 대신 느림</td></tr>
</table></div>

<h4>긴 대화의 품질 저하 대응 (D3·D7)</h4>
<div class="tbl"><table>
<tr><th>상황</th><th>대응</th></tr>
<tr><td>대화가 크게 어긋났거나 같은 업무의 새 과제 시작</td><td>새 대화로 다시 시작(Restart). 프로젝트 지시문·지식 베이스는 그대로 이어짐</td></tr>
<tr><td>이어가야 하지만 대화가 너무 길어짐</td><td>결정 사항·진행 중 작업·남은 질문을 요약받아 새 대화 첫머리에 붙임(Summarize)</td></tr>
<tr><td>앞으로 모든 대화에 필요한 정보</td><td>Memory 또는 지식 베이스에 저장(Persist)</td></tr>
<tr><td>오답 대응</td><td>같은 대화에서 지시 반복, 모델 등급만 올리기</td></tr>
</table></div>

<h4>프롬프트 구성 요소와 작업 유형 (D1)</h4>
<div class="tbl"><table>
<tr><th>요소</th><th>내용</th></tr>
<tr><td>Role</td><td>이 작업에서 Claude가 맡을 역할</td></tr>
<tr><td>Context</td><td>Claude가 알 수 없는 배경: 독자, 상황, 이전 결정, 원자료. 가장 자주 빠지는 요소</td></tr>
<tr><td>Task</td><td>분명한 동사 하나로 쓴 행동: 요약, 비교, 작성, 식별</td></tr>
<tr><td>Constraints</td><td>길이, 어조, 포함·제외 범위</td></tr>
<tr><td>Output format</td><td>표, 글머리 기호, 3문단 메모, 이메일 초안</td></tr>
</table></div>
<div class="tbl"><table>
<tr><th>작업 유형</th><th>좁게 정할 것</th><th>맡길 것</th></tr>
<tr><td>분석</td><td>기준·범위·판단 방식</td><td>표현</td></tr>
<tr><td>리서치</td><td>질문·출처·인용 요구</td><td>종합 방식</td></tr>
<tr><td>초안 작성</td><td>독자·어조·형식</td><td>문장 선택</td></tr>
<tr><td>브레인스토밍</td><td>목표와 최소한의 기준</td><td>아이디어 수와 방향</td></tr>
</table></div>

<h4>결과 검토와 사람 검토 (D2)</h4>
<div class="tbl"><table>
<tr><th>구분</th><th>내용</th></tr>
<tr><td>검토 기준 3가지</td><td>① 요청한 내용을 빠짐없이 다뤘는가 ② 제공한 원자료와 일치하는가 ③ 전문가 기준(단위, 근거, 확인 가능한 인용)을 갖췄는가</td></tr>
<tr><td>판정 3가지</td><td>바로 사용(Ready to use) / 수정 후 사용(Needs revision) / 사람에게 넘김(Needs human override)</td></tr>
<tr><td>사람 검토 4기준</td><td>위험도(틀리면 비용이 큰가) · 되돌릴 수 있는가 · 독자(외부·임원·규제 기관) · 규제·계약·법 적용 여부</td></tr>
<tr><td>검증을 프롬프트에 넣는 법</td><td>제공 자료만 근거로 쓰게 하기, 모르면 모른다고 답하게 하기, 인용 위치 표시, 긴 문서는 관련 문장을 먼저 뽑은 뒤 분석</td></tr>
<tr><td>반복해도 나아지지 않음</td><td>프롬프트 반복을 멈춤. 남은 부분은 직접 편집하고, 고위험 산출물이면 동료·전문가에게 검토를 넘김</td></tr>
</table></div>

<h4>출력 형식 (D2)</h4>
<div class="tbl"><table>
<tr><th>용도</th><th>형식</th></tr>
<tr><td>대화 안에서 읽고 끝낼 답</td><td>인라인 응답</td></tr>
<tr><td>다듬고 다시 쓸 문서·도구</td><td>Artifacts</td></tr>
<tr><td>다른 도구나 사람이 바로 받아 쓸 데이터</td><td>표·정해진 구조의 데이터</td></tr>
<tr><td>보고·의사결정에 쓰일 수치</td><td>Code Execution 계산 결과</td></tr>
</table></div>

<h4>업무 단계별 위임 (D4)</h4>
<div class="tbl"><table>
<tr><th>분류</th><th>해당 단계</th></tr>
<tr><td>AI 수행</td><td>되돌릴 수 있고 위험이 낮은 기계적 단계(추출, 규칙 대조). 수치는 Code Execution</td></tr>
<tr><td>협업</td><td>초안은 Claude, 판단은 사람(수정안 초안, 개인화 문구)</td></tr>
<tr><td>사람 보유</td><td>승인·거절, 금액 확정, 서명·발송처럼 책임이 걸리거나 되돌릴 수 없는 단계</td></tr>
<tr><td>판단 기준</td><td>되돌릴 수 있는가 · 틀리면 비용이 큰가 · 결과에 누가 책임지는가</td></tr>
<tr><td>넘길 신호</td><td>여러 사람이 매일 의존하는 도구가 되어 안정성·보안·연동이 필요해지면 Developer·Architect에게</td></tr>
</table></div>

<h4>설정 위치 선택 (D5·D7)</h4>
<div class="tbl"><table>
<tr><th>담을 것</th><th>위치</th></tr>
<tr><td>행동 규칙 (항상 출처 표시, 어조, 기본 형식)</td><td>프로젝트 지시문</td></tr>
<tr><td>사실·참고 자료 (정책 문서, 브랜드 가이드)</td><td>지식 베이스</td></tr>
<tr><td>여러 단계의 절차 (정해진 보고서 서식 만들기)</td><td>Skills</td></tr>
<tr><td>진행 중 결정·선호·관계자</td><td>Project 단위 Memory</td></tr>
<tr><td>짝 규칙</td><td>규칙과 그 규칙이 쓰는 자료는 함께 설정(지시문 + 지식 베이스, Skill + 지식 베이스)</td></tr>
<tr><td>관리</td><td>새 버전을 올리면 이전 버전은 삭제. 활성 Project는 월 1회 정도 점검</td></tr>
</table></div>

<h4>데이터 민감도 (D6)</h4>
<div class="tbl"><table>
<tr><th>등급</th><th>예</th><th>처리</th></tr>
<tr><td>Green</td><td>공개 자료, 익명·집계 데이터, 공유가 승인된 내부 문서</td><td>그대로 사용</td></tr>
<tr><td>Yellow</td><td>외부 유출 금지 내부 문서, 이름·연락처, 미발표 정보</td><td>정책 확인 후 사용. 과업에 필요 없는 식별 정보는 제거·대체</td></tr>
<tr><td>Red</td><td>규제 데이터(건강·금융·공공), 계정 정보·비밀번호, 제3자 기밀 의무 자료</td><td>승인된 경로가 없으면 넣지 않음. 관리자에게 확인</td></tr>
</table></div>
<p class="howto"><b>읽는 법</b>두 등급 사이에서 애매하면 확인될 때까지 더 민감한 쪽으로 취급함. Incognito 모드는 대화를 채팅 이력과 Memory에서 제외할 뿐임. 조직의 데이터 보존 정책은 그대로 적용되고, 데이터를 넣어도 되게 만들지 않음.</p>

<h4>Skill 도입 판단 (D6)</h4>
<div class="tbl"><table>
<tr><th>확인 항목</th><th>질문</th></tr>
<tr><td>출처</td><td>누가 만들어 배포했는가. Anthropic 제공·조직 승인 Skill이 위험이 낮은 출발점</td></tr>
<tr><td>접근 범위</td><td>실행되는 대화의 접근 권한을 그대로 씀. 그 범위가 작업에 비해 적절한가</td></tr>
<tr><td>적합성</td><td>이 작업에 맞는 도구인가, 필요 이상의 기능이 있지 않은가</td></tr>
<tr><td>결론</td><td>모두 통과하면 사용 / 출처 불명·접근 과다면 관리자·보안 담당에게 넘김 / 명백히 과도하면 사용하지 않음</td></tr>
</table></div>

<h4>문제 진단 순서 (D7)</h4>
<div class="flow">
<span class="nd">① 명세<small>5요소 점검</small></span><span class="ar">→</span>
<span class="nd">② 대화 길이<small>요약 후 재시작</small></span><span class="ar">→</span>
<span class="nd">③ 기능·모델<small>계산·깊이</small></span><span class="ar">→</span>
<span class="nd">④ 설정<small>지시문·지식·Skill</small></span><span class="ar">→</span>
<span class="nd">⑤ 과업 적합성<small>작업 재구성</small></span>
</div>
<p class="howto"><b>읽는 법</b>왼쪽일수록 확인 비용이 낮음. 앞 단계를 배제한 뒤 다음 단계로 감. 처음부터 틀림 = 명세, 대화 후반부터 틀림 = 대화 길이, 숫자만 틀림 = 기능, "예전엔 됐음" = 설정.</p>
<div class="tbl"><table>
<tr><th>반복 신호</th><th>옮길 곳</th></tr>
<tr><td>매번 같은 배경 붙여넣기</td><td>지식 베이스</td></tr>
<tr><td>매번 같은 결함 수정</td><td>프로젝트 지시문 또는 Skill</td></tr>
<tr><td>사람마다 다른 결과 형식</td><td>공유 Skill·지식 베이스</td></tr>
</table></div>`
};
