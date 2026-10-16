/* D2 추가 문항 풀 */
window.CCAO_EXTRA.push(

  /* 2.1 기초 */
  { ts:"2.1", lvl:"기초",
    q:`A program manager at a youth nonprofit asks Claude to draft the outcomes section of a grant report from her program data. The draft says "participant engagement improved significantly" and "we recommend expanding to three new cities," but gives no time period, measure, or data behind either statement. What is the MOST appropriate next step before the report goes to the funder?`,
    ko:`청소년 비영리단체의 사업 매니저가 사업 데이터를 바탕으로 지원금 보고서의 성과 부분 초안을 Claude에게 요청했다. 초안에는 "참여도가 크게 향상되었다"와 "3개 도시로 확대할 것을 권고한다"는 문장이 있지만, 두 문장 모두 기간, 측정 기준, 근거 데이터가 없다. 보고서를 후원 기관에 보내기 전 가장 적절한 다음 조치는 무엇인가?`,
    opts:[
      {t:`Tie each claim and recommendation to specific figures and periods from her data, and cut any that the data cannot support.`, ko:`주장과 권고마다 자료의 구체적 수치와 기간을 붙이고, 데이터로 뒷받침되지 않는 것은 빼기`, ok:true},
      {t:`Send the section as written, since the funder already knows the program well and expects a short summary.`, ko:`후원 기관이 사업을 잘 알고 짧은 요약을 기대하므로 그대로 보내기`},
      {t:`Ask Claude to rewrite both statements in a more confident tone so that the outcomes sound more convincing to the funder.`, ko:`성과가 더 설득력 있게 들리도록 두 문장을 더 확신 있는 어조로 고쳐 쓰게 하기`},
      {t:`Shorten the section to a single sentence so that there are fewer statements that could turn out to be wrong.`, ko:`틀릴 수 있는 문장 수를 줄이도록 성과 부분을 한 문장으로 줄이기`}
    ],
    explain:{ good:`기간·측정 기준 없는 성과 주장과 근거 없는 권고는 전문 기준에서 실패한 결과물임. 문장이 매끄러워도 후원 기관이 확인할 수 있는 근거가 없음. 자료의 수치와 기간을 붙이고 뒷받침되지 않는 주장은 빼야 함.`,
      wrongs:[
        `<b>B:</b> 상대가 사업을 잘 안다는 사실이 근거 없는 주장을 정당화하지 않음.`,
        `<b>C:</b> 어조를 강하게 바꾸면 근거 없는 주장이 더 그럴듯해 보일 뿐임.`,
        `<b>D:</b> 분량을 줄여도 남은 문장의 근거 문제는 그대로이고, 요구된 성과 보고도 부족해짐.`
      ]},
    principle:"원칙 ② 내보내기 전 검증" },

  /* 2.1 실전 */
  { ts:"2.1", lvl:"실전",
    q:`An operations manager receives two Claude outputs on the same afternoon: a list of activity ideas for the team's internal offsite, and a summary of a vendor's service agreement that the legal team will rely on when negotiating renewal terms. She is short on time and plans to give both the same quick read. What is the MOST appropriate approach?`,
    ko:`운영 매니저가 같은 날 오후 Claude 결과물 두 개를 받았다. 첫째는 팀 내부 워크숍 활동 아이디어 목록이고, 둘째는 법무팀이 갱신 조건 협상에 활용할 공급업체 서비스 계약 요약이다. 시간이 부족해 두 결과물을 똑같이 빠르게 훑어볼 계획이다. 가장 적절한 방법은 무엇인가?`,
    opts:[
      {t:`Give the ideas a light check, and verify every term in the agreement summary against the actual contract.`, ko:`아이디어 목록은 가볍게 확인하고, 계약 요약은 모든 조건을 실제 계약서와 대조하기`, ok:true},
      {t:`Check both outputs line by line against source material, so that her review standard stays consistent.`, ko:`검토 기준을 일관되게 유지하도록 두 결과물 모두 원자료와 한 줄씩 대조하기`},
      {t:`Give both a quick read, since both came from the same Project with the same standing instructions.`, ko:`같은 Project와 같은 지시문에서 나왔으므로 두 결과물 모두 빠르게 훑어보기`},
      {t:`Ask Claude to rate the risk level of each output, and review in detail only the one that it rates as higher.`, ko:`Claude에게 결과물별 위험도를 매기게 하고 더 높다고 한 것만 자세히 검토하기`}
    ],
    explain:{ good:`검토 깊이는 결과물의 위험도에 맞춤. 내부 워크숍 아이디어는 틀려도 비용이 작으므로 가벼운 확인이면 충분함. 법무팀 협상의 근거가 될 계약 요약은 조건마다 원문 대조가 필요함.`,
      wrongs:[
        `<b>B:</b> 저위험 아이디어 목록까지 원자료와 대조하면 도구가 아껴 준 시간을 잃음. 같은 기준 적용 자체가 문제임.`,
        `<b>C:</b> 같은 설정에서 나왔어도 결과물의 위험도는 다름. 계약 요약을 훑어보기만 하면 오류가 협상에 그대로 들어감.`,
        `<b>D:</b> 검토 깊이는 사람이 위험 기준으로 정함. Claude의 위험도 평가는 그 판단을 대신하지 않음.`
      ]},
    principle:"원칙 ③ 요구에 맞는 선택" },

  /* 2.2 기초 */
  { ts:"2.2", lvl:"기초",
    q:`A UX researcher asks Claude to summarize 24 customer interviews for the product team. Eight of the interviews were with customers over 60. The summary's five "key themes" all come from younger users, and the older customers' complaints about small text and hard-to-find buttons appear only as "a few users had other concerns." What is the MOST appropriate next step?`,
    ko:`UX 리서처가 고객 인터뷰 24건을 제품팀용으로 요약해 달라고 Claude에게 요청했다. 이 중 8건은 60세 이상 고객 인터뷰였다. 요약의 "핵심 주제" 5개는 모두 젊은 사용자 의견에서 나왔고, 고령 고객의 작은 글씨와 찾기 어려운 버튼에 대한 불만은 "일부 사용자의 기타 의견"으로만 처리되었다. 가장 적절한 다음 조치는 무엇인가?`,
    opts:[
      {t:`Compare the summary against the interview breakdown, ask for themes by user group, and review the wording herself.`, ko:`인터뷰 구성과 요약을 비교하고, 사용자 집단별 주제를 요청한 뒤 표현을 직접 검토하기`, ok:true},
      {t:`Accept the summary, because every quote in it is accurate and the five themes reflect what most interviewees said.`, ko:`인용이 모두 정확하고 주제 5개가 다수 의견을 반영하므로 그대로 받아들이기`},
      {t:`Ask Claude whether its summary is biased toward any age group, and share the summary if Claude says it is balanced.`, ko:`Claude에게 특정 연령대로 치우쳤는지 묻고 균형 있다고 하면 공유하기`},
      {t:`Remove all age references from the summary, so that the product team focuses on the themes instead of on demographics.`, ko:`제품팀이 인구 특성보다 주제에 집중하도록 요약에서 연령 언급을 모두 지우기`}
    ],
    explain:{ good:`인터뷰의 3분의 1을 차지하는 집단이 한 줄로 처리된 것은 요약의 편향임. 원자료의 구성과 요약의 반영 비중을 비교하면 확인할 수 있음. 집단별로 다시 정리하게 하고 표현은 사람이 검토해야 함.`,
      wrongs:[
        `<b>B:</b> 인용이 정확해도 특정 집단이 빠진 요약은 원자료를 제대로 대표하지 않음.`,
        `<b>C:</b> 치우침 여부를 Claude의 자기 평가로 판단할 수 없음. 기준은 원자료의 구성임.`,
        `<b>D:</b> 연령 정보를 지우면 치우침이 보이지 않게 될 뿐 고쳐지지 않음.`
      ]},
    principle:"원칙 ② 내보내기 전 검증" },

  /* 2.2 실전 */
  { ts:"2.2", lvl:"실전",
    q:`A communications lead is preparing her CEO's keynote for an industry conference that will be livestreamed. Claude's draft includes a quotation attributed to a well-known economist and a statistic from "a recent survey by a major consulting firm." She did not provide either source. The CEO wants the final text by tomorrow morning. What is the MOST appropriate action?`,
    ko:`커뮤니케이션 리드가 생중계되는 업계 콘퍼런스의 CEO 기조연설문을 준비하고 있다. Claude 초안에는 유명 경제학자의 발언으로 소개된 인용문과 "대형 컨설팅사의 최근 조사"에서 나온 통계가 들어 있다. 리드는 두 출처 모두 제공하지 않았다. CEO는 내일 아침까지 최종 원고를 원한다. 가장 적절한 조치는 무엇인가?`,
    opts:[
      {t:`Locate the original sources for the quote and the statistic, and remove or replace anything she cannot trace.`, ko:`인용문과 통계의 원출처를 찾고, 추적할 수 없는 것은 빼거나 바꾸기`, ok:true},
      {t:`Ask Claude to provide a web link for each one, and keep the items that come with a link attached to them.`, ko:`Claude에게 각각의 웹 링크를 달라고 하고 링크가 붙은 항목은 유지하기`},
      {t:`Keep the idea but change the quote to a paraphrase, such as "as one leading economist has argued," to lower the risk.`, ko:`위험을 낮추도록 내용은 유지하고 "한 저명한 경제학자의 주장처럼" 식의 간접 표현으로 바꾸기`},
      {t:`Keep both, because well-known quotations and consulting surveys are widely repeated and easy for the audience to accept.`, ko:`유명 인용문과 컨설팅 조사는 널리 인용되어 청중이 받아들이기 쉬우므로 둘 다 유지하기`}
    ],
    explain:{ good:`제공하지 않은 인용과 통계는 조작된 구체 정보일 수 있음. 생중계 연설은 외부 청중에게 가고 되돌릴 수 없으므로 원출처를 직접 찾아 확인해야 함. 추적할 수 없는 항목은 빼거나 확인된 자료로 바꿈.`,
      wrongs:[
        `<b>B:</b> Claude가 제시한 링크도 지어낸 것일 수 있음. 링크가 붙었다는 사실은 확인이 아니며, 직접 열어 내용을 대조해야 함.`,
        `<b>C:</b> 간접 표현으로 바꿔도 출처가 확인되지 않은 주장이라는 점은 그대로임.`,
        `<b>D:</b> 널리 반복된다는 사실은 정확성의 증거가 아님. 유명인에게 잘못 붙은 인용도 많음.`
      ]},
    principle:"원칙 ② 내보내기 전 검증" },

  /* 2.3 기초 */
  { ts:"2.3", lvl:"기초",
    q:`An HR operations specialist used code execution to total overtime hours by department from a timesheet export. Most totals look reasonable, but one department's total is about double what she expected from last quarter. The totals will be shared with department heads next week. What should she do FIRST?`,
    ko:`HR 운영 담당자가 근태 기록 추출 파일에서 부서별 초과근무 시간 합계를 Code Execution으로 계산했다. 대부분의 합계는 타당해 보이지만, 한 부서의 합계가 지난 분기를 기준으로 예상한 값의 약 두 배다. 합계는 다음 주 부서장들에게 공유된다. 가장 먼저 할 일은 무엇인가?`,
    opts:[
      {t:`Check how that total was calculated, such as which columns and filters were used and whether rows were duplicated.`, ko:`사용한 열과 필터, 행 중복 여부 등 그 합계의 계산 방식을 확인하기`, ok:true},
      {t:`Accept the figure as it is, because a result produced by running code is reliable in a way that a prose answer is not.`, ko:`코드를 실행해 나온 결과는 산문 답과 달리 신뢰할 수 있으므로 그대로 받아들이기`},
      {t:`Ask Claude to estimate the same total in prose without code, and use whichever figure seems more realistic.`, ko:`코드 없이 산문으로 같은 합계를 추정하게 하고 더 현실적인 값을 쓰기`},
      {t:`Run the same calculation three more times and report the average of the four results for that department.`, ko:`같은 계산을 세 번 더 실행해 그 부서의 네 결과 평균을 보고하기`}
    ],
    explain:{ good:`Code Execution은 계산을 실제로 실행하지만, 코드는 Claude가 쓰므로 로직에 오류가 있을 수 있음. 이상한 값이 나오면 어떤 열과 조건으로 계산했는지, 중복 행이 들어갔는지부터 확인하고 고친 뒤 다시 실행함.`,
      wrongs:[
        `<b>B:</b> 실행된 계산이라도 로직이 틀리면 값도 틀림. 보장되는 것은 확인하고 재실행할 수 있다는 점뿐임.`,
        `<b>C:</b> 산문 추정은 검증 수단이 아님. "더 현실적인 값"은 기준이 될 수 없음.`,
        `<b>D:</b> 같은 코드를 다시 돌리면 같은 오류가 반복됨. 평균은 원인을 찾지 못함.`
      ]},
    principle:"원칙 ⑥ 원인 진단 후 수정" },

  /* 2.3 실전 (복수응답) */
  { ts:"2.3", lvl:"실전", multi:2,
    q:`A consultant asks Claude to estimate the size of the domestic pet insurance market for a client proposal. She asks the same question three times in separate chats and gets three different figures. The proposal is due to the client on Thursday, and the market size will appear on the opening slide. Which TWO actions are MOST appropriate? (Select TWO.)`,
    ko:`컨설턴트가 고객 제안서에 넣을 국내 반려동물 보험 시장 규모를 Claude에게 추정해 달라고 했다. 별도 대화에서 같은 질문을 세 번 했더니 세 가지 다른 수치가 나왔다. 제안서는 목요일에 고객에게 가고, 시장 규모는 첫 슬라이드에 들어간다. 가장 적절한 조치 두 가지는 무엇인가? (두 개 선택)`,
    opts:[
      {t:`Treat the disagreement as a sign that the figure is weak and must be checked before it is used.`, ko:`세 답이 갈린 것을 수치가 불확실하다는 신호로 보고 사용 전에 확인하기`, ok:true},
      {t:`Base the figure on an identified, authoritative source she has opened herself, and cite that source on the slide.`, ko:`직접 열어 본 신뢰할 수 있는 출처에 수치를 근거하고 슬라이드에 그 출처를 표기하기`, ok:true},
      {t:`Use the average of the three figures, since averaging several answers reduces the error in any single one.`, ko:`여러 답을 평균하면 개별 오차가 줄어들므로 세 수치의 평균을 쓰기`},
      {t:`Choose the figure with the most decimal places, since a more precise number suggests a more careful estimate.`, ko:`더 정밀한 숫자가 더 신중한 추정을 뜻하므로 소수점이 가장 긴 수치를 고르기`},
      {t:`Ask Claude which of its three answers it is most confident in, and use that figure on the opening slide.`, ko:`Claude에게 세 답 중 가장 확신하는 것을 묻고 그 수치를 첫 슬라이드에 쓰기`}
    ],
    explain:{ good:`같은 질문에 대한 답이 실행마다 갈리면 그 지점이 약한 부분임. 고객 제안서 첫 슬라이드에 들어갈 수치는 직접 확인한 신뢰할 수 있는 출처에 근거해야 하고, 출처를 밝혀 두면 고객도 확인할 수 있음.`,
      wrongs:[
        `<b>C:</b> 근거 없는 값 세 개의 평균도 근거 없는 값임. 평균은 검증이 아님.`,
        `<b>D:</b> 출처 없는 정밀함은 오히려 의심 신호임.`,
        `<b>E:</b> Claude의 확신도는 정확성의 증거가 아님. 세 답 모두 같은 방식으로 만들어졌음.`
      ]},
    principle:"원칙 ② 내보내기 전 검증" },

  /* 2.4 기초 */
  { ts:"2.4", lvl:"기초",
    q:`A team lead at a marketing agency is writing a review rule after a client presentation went out with a wrong growth figure that Claude had produced. She wants a rule that will actually prevent a repeat without slowing down low-risk internal work. Which version of the rule is MOST effective?`,
    ko:`마케팅 대행사 팀장이 Claude가 만든 틀린 성장률 수치가 고객 발표 자료에 들어간 채 나간 뒤 검토 규칙을 만들고 있다. 저위험 내부 작업은 늦추지 않으면서 같은 일이 다시 생기지 않게 막는 규칙을 원한다. 가장 효과적인 규칙은 무엇인가?`,
    opts:[
      {t:`Before any client deliverable is sent, the account lead checks its figures, client names, and commitments against source files.`, ko:`고객 산출물은 발송 전에 담당 리드가 수치, 고객명, 약속 문구를 원자료와 대조함`, ok:true},
      {t:`Someone on the team should take a look at any AI-generated content whenever they have some free time available.`, ko:`팀원 중 누군가가 시간이 날 때 AI가 만든 콘텐츠를 살펴봄`},
      {t:`Every output that Claude produces, including internal notes and brainstorms, must be approved by the department director.`, ko:`내부 메모와 브레인스토밍을 포함해 Claude의 모든 결과물은 본부장 승인을 받음`},
      {t:`Claude must be asked to review each client deliverable twice for errors before the account team sends it out.`, ko:`고객 산출물은 발송 전 Claude에게 오류 검토를 두 번 요청함`}
    ],
    explain:{ good:`효과 있는 검토 규칙은 누가(담당 리드), 무엇을(수치·고객명·약속 문구), 언제(발송 전) 확인하는지 정함. 대상도 고객 산출물로 한정되어 저위험 내부 작업은 늦추지 않음.`,
      wrongs:[
        `<b>B:</b> 담당자도, 확인 항목도, 시점도 없음. 실제로는 아무도 검토하지 않는 규칙이 됨.`,
        `<b>C:</b> 모든 내부 결과물까지 결재에 올리면 과잉 검토로 도구가 아낀 시간을 잃음.`,
        `<b>D:</b> Claude의 자기 검토는 사람 검토를 대신하지 않음. 이번 오류도 Claude가 만든 수치였음.`
      ]},
    principle:"원칙 ⑤ 정책·사람 판단 우선" },

  /* 2.4 실전 */
  { ts:"2.4", lvl:"실전",
    q:`An event planner is deciding whether to cancel an outdoor festival because a major storm is forecast. Claude summarized the venue contract's cancellation terms, including clause numbers and the penalty amounts. Cancelling would cost the company a large fee that cannot be recovered, and the decision must be made within two days. What is the MOST appropriate next step?`,
    ko:`행사 기획자가 대형 폭풍 예보 때문에 야외 축제를 취소할지 결정하고 있다. Claude는 조항 번호와 위약금 금액을 포함해 장소 계약서의 취소 조건을 요약했다. 취소하면 회사는 돌려받을 수 없는 큰 비용을 내야 하고, 결정은 이틀 안에 해야 한다. 가장 적절한 다음 조치는 무엇인가?`,
    opts:[
      {t:`Have the contract owner or a legal reviewer confirm the cancellation terms in the actual contract before deciding.`, ko:`결정 전에 계약 담당자나 법무 검토자가 실제 계약서에서 취소 조건을 확인하게 하기`, ok:true},
      {t:`Make the decision based on the summary, since it cites specific clause numbers that point to the actual contract.`, ko:`실제 계약서를 가리키는 조항 번호가 있으므로 요약을 근거로 결정하기`},
      {t:`Ask Claude to read the contract again and confirm that its summary of the cancellation terms is fully correct.`, ko:`Claude에게 계약서를 다시 읽고 취소 조건 요약이 정확한지 확인하게 하기`},
      {t:`Cancel the festival now to be safe, and dispute the penalty later if the venue charges more than Claude's summary says.`, ko:`안전을 위해 지금 취소하고, Claude 요약보다 많이 청구되면 나중에 위약금을 다투기`}
    ],
    explain:{ good:`되돌릴 수 없는 비용이 걸린 결정이고 계약이라는 법적 조건이 적용됨. Claude의 요약은 검토를 시작할 초안으로 쓰고, 실제 조건은 책임자가 계약서 원문에서 확인해야 함.`,
      wrongs:[
        `<b>B:</b> 조항 번호가 있어도 내용이 원문과 맞는지는 확인되지 않음. 번호 자체가 틀렸을 수도 있음.`,
        `<b>C:</b> 같은 모델의 재확인은 외부 기준과의 대조가 아니며 책임 있는 사람의 확인을 대신하지 않음.`,
        `<b>D:</b> 되돌릴 수 없는 결정을 확인 없이 먼저 내리는 것은 순서가 반대임.`
      ]},
    principle:"원칙 ⑤ 정책·사람 판단 우선" },

  /* 2.5 기초 */
  { ts:"2.5", lvl:"기초",
    q:`A nonprofit communications coordinator has an accurate draft of the monthly volunteer newsletter from Claude. Almost every sentence includes hedges such as "may possibly," "in some cases it could be said," and "to a certain extent," which makes the main points hard to find. Which edit is MOST appropriate?`,
    ko:`비영리단체 커뮤니케이션 코디네이터에게 Claude가 쓴 월간 자원봉사자 뉴스레터의 정확한 초안이 있다. 거의 모든 문장에 "어쩌면 ~일 수도", "경우에 따라서는", "어느 정도는" 같은 단서가 붙어 있어 요점을 찾기 어렵다. 가장 적절한 편집은 무엇인가?`,
    opts:[
      {t:`Cut the unnecessary hedges and repetition while keeping the facts and any uncertainties that are real.`, ko:`사실과 실제로 불확실한 부분은 남기고 불필요한 단서와 반복을 지우기`, ok:true},
      {t:`Add more statistics to each paragraph so that every cautious statement is backed up by some supporting data.`, ko:`조심스러운 문장마다 근거가 붙도록 단락마다 통계를 더 넣기`},
      {t:`Rewrite the newsletter in a more formal register so that it sounds more official and authoritative to volunteers.`, ko:`자원봉사자에게 더 공식적이고 권위 있게 들리도록 더 격식 있는 문체로 고쳐 쓰기`},
      {t:`Convert the whole newsletter into a table so that volunteers can scan the information more quickly.`, ko:`자원봉사자가 더 빨리 훑어볼 수 있도록 뉴스레터 전체를 표로 바꾸기`}
    ],
    explain:{ good:`내용은 정확하고 문제는 요점이 보이지 않는 것임. 이는 편집 3단계 중 명료성 단계의 일임. 과도한 단서와 반복을 지우되, 실제로 불확실한 내용은 그대로 밝혀 둠.`,
      wrongs:[
        `<b>B:</b> 문제는 근거 부족에서 생기지 않았음. 통계를 더하면 글이 더 길어지고 요점은 더 묻힘.`,
        `<b>C:</b> 어조를 바꿔도 단서가 남아 있으면 요점은 여전히 보이지 않음. 자원봉사자 대상 글에 맞는 격식도 아님.`,
        `<b>D:</b> 뉴스레터는 읽는 글임. 서식 변경은 명료성 문제를 풀지 않음.`
      ]},
    principle:"원칙 ⑥ 원인 진단 후 수정" },

  /* 2.5 실전 (복수응답) */
  { ts:"2.5", lvl:"실전", multi:2,
    q:`A university communications team must post a public FAQ for students and parents about a data incident in the campus housing system. Their prompt already includes the confirmed facts, the audience, the tone, and the topics to cover. Because the FAQ is sensitive and cannot be quietly taken back once posted, they want the best possible version. Which TWO actions are MOST appropriate? (Select TWO.)`,
    ko:`대학 커뮤니케이션팀이 기숙사 시스템 데이터 사고에 대해 학생과 학부모용 공개 FAQ를 게시해야 한다. 프롬프트에는 이미 확인된 사실, 대상, 어조, 다룰 주제가 들어 있다. FAQ는 민감하고 게시 후 조용히 거둘 수 없으므로 최선의 버전을 원한다. 가장 적절한 조치 두 가지는 무엇인가? (두 개 선택)`,
    opts:[
      {t:`Generate several drafts and compare them against set criteria such as accuracy to confirmed facts, clarity, and tone.`, ko:`여러 초안을 받아 확인된 사실과의 일치, 명료성, 어조 같은 기준으로 비교하기`, ok:true},
      {t:`After editing the chosen draft, have the responsible officer review it against the confirmed facts before posting.`, ko:`선택한 초안을 편집한 뒤 게시 전에 책임자가 확인된 사실과 대조해 검토하게 하기`, ok:true},
      {t:`Choose the longest draft, since a longer FAQ is likely to answer more of the questions that families will have.`, ko:`더 긴 FAQ가 가족들의 질문에 더 많이 답할 것이므로 가장 긴 초안을 고르기`},
      {t:`Merge all of the drafts into one document without further editing, so that no useful point is lost along the way.`, ko:`유용한 내용이 빠지지 않도록 모든 초안을 추가 편집 없이 하나로 합치기`},
      {t:`Ask Claude to pick the strongest of the drafts and post that version, since it wrote all of them with the same facts.`, ko:`모든 초안이 같은 사실로 작성되었으므로 Claude가 가장 좋은 초안을 골라 게시하게 하기`}
    ],
    explain:{ good:`프롬프트가 이미 구체적이고 품질이 중요하므로 여러 초안을 기준에 비춰 비교하는 방법이 맞음. 공개 후 되돌리기 어려운 외부 문서이므로 편집이 끝난 버전은 게시 전에 책임자가 검토해야 함.`,
      wrongs:[
        `<b>C:</b> 길이는 비교 기준이 아님. 긴 FAQ는 핵심 안내를 찾기 어렵게 만들 수 있음.`,
        `<b>D:</b> 편집 없이 합치면 중복과 어조 충돌이 생김. 비교는 가장 좋은 바탕을 고르기 위한 것임.`,
        `<b>E:</b> 초안 선택과 게시 판단을 Claude에게 맡기면 사람 검토가 빠짐.`
      ]},
    principle:"원칙 ⑤ 정책·사람 판단 우선" },

  /* 2.6 기초 */
  { ts:"2.6", lvl:"기초",
    q:`A team lead wants a rough sense of how many hours per week her eight-person team spends writing meeting notes. She will mention it in an informal one-on-one with her manager about whether to try a new note-taking routine; no report or decision document will be produced. Which output is MOST appropriate?`,
    ko:`팀장이 8명 팀원이 회의록 작성에 매주 쓰는 시간을 대략 알고 싶어 한다. 새 회의록 작성 방식을 시도할지 상사와 편하게 나누는 1:1 대화에서 언급할 예정이며, 보고서나 의사결정 문서는 만들지 않는다. 가장 적절한 출력은 무엇인가?`,
    opts:[
      {t:`A quick inline estimate with its assumptions stated, such as the number of meetings and minutes per set of notes.`, ko:`회의 수, 회의록당 소요 시간 같은 가정을 밝힌 간단한 인라인 추정`, ok:true},
      {t:`A code execution analysis of the team's full calendar export, reviewed by the finance team before the conversation.`, ko:`팀 전체 일정 추출 파일을 Code Execution으로 분석하고 대화 전에 재무팀 검토를 받기`},
      {t:`An Artifact dashboard that tracks note-taking hours by person and by week for the next several months.`, ko:`앞으로 몇 달간 사람별·주별 회의록 작성 시간을 추적하는 Artifact 대시보드`},
      {t:`A structured table with a defined column schema for every meeting held by the team in the past quarter.`, ko:`지난 분기 팀의 모든 회의를 정해진 열 구조로 정리한 구조화 표`}
    ],
    explain:{ good:`대략적인 규모를 가늠하는 저위험 내부 대화용이므로 산문 추정으로 충분함. 가정을 함께 밝혀 두면 상사도 숫자의 성격을 알 수 있음. 정밀한 계산이나 추적 도구는 이 용도에 비해 과함.`,
      wrongs:[
        `<b>B:</b> 보고·결정에 쓰이지 않는 대략적 수치에 정밀 계산과 재무 검토는 과잉 대응임.`,
        `<b>C:</b> 한 번의 대화에 몇 달짜리 추적 도구를 만들 필요가 없음.`,
        `<b>D:</b> 후속 도구가 받아 쓸 데이터가 아님. 분기 전체 회의를 정리하는 수고가 용도에 비해 큼.`
      ]},
    principle:"원칙 ③ 요구에 맞는 선택" },

  /* 2.6 실전 (복수응답) */
  { ts:"2.6", lvl:"실전", multi:2,
    q:`A grants manager runs a Claude Project whose knowledge base holds the 2023, 2024, and 2025 versions of a foundation's application guidelines. Recent drafts sometimes state eligibility rules that were dropped in 2025, and colleagues are starting to copy those drafts into live applications. Which TWO actions are MOST appropriate? (Select TWO.)`,
    ko:`지원금 담당 매니저가 운영하는 Claude Project의 지식 베이스에 재단 신청 지침 2023년판, 2024년판, 2025년판이 모두 들어 있다. 최근 초안에 2025년에 삭제된 자격 요건이 가끔 나오고, 동료들은 그 초안을 실제 신청서에 옮기기 시작했다. 가장 적절한 조치 두 가지는 무엇인가? (두 개 선택)`,
    opts:[
      {t:`Remove the superseded 2023 and 2024 guidelines from the knowledge base so that only the current version remains.`, ko:`지식 베이스에서 대체된 2023년판과 2024년판을 지워 현행판만 남기기`, ok:true},
      {t:`Check every eligibility statement in recent drafts, including any already copied into applications, against the 2025 guidelines.`, ko:`이미 신청서에 옮긴 것을 포함해 최근 초안의 자격 요건 문장을 모두 2025년판과 대조하기`, ok:true},
      {t:`Switch the Project to a more capable model so that it can tell on its own which guideline version is current.`, ko:`어느 지침이 현행인지 스스로 구분하도록 Project를 더 상위 모델로 바꾸기`},
      {t:`Ask Claude for longer drafts that describe the eligibility rules from all three years so nothing is missed.`, ko:`누락이 없도록 세 연도의 자격 요건을 모두 설명하는 더 긴 초안을 요청하기`},
      {t:`Paste all three guideline versions into each new chat as well, so that Claude has the full history in front of it.`, ko:`Claude가 전체 이력을 보도록 새 대화마다 세 버전 지침을 모두 붙여 넣기`}
    ],
    explain:{ good:`같은 지침의 여러 버전이 섞인 입력이 낡은 요건 인용의 원인임. 대체된 버전을 지워 입력을 정리해야 함. 이미 만든 초안과 그 초안을 옮긴 신청서는 현행 지침과 대조해 틀린 요건을 고쳐야 함.`,
      wrongs:[
        `<b>C:</b> 상위 모델도 어느 파일이 현행인지 알 수 없음. 원인은 입력에 있음.`,
        `<b>D:</b> 폐지된 요건까지 길게 쓰게 하면 혼란이 더 커짐.`,
        `<b>E:</b> 같은 혼재 자료를 다시 넣으면 같은 문제가 반복됨.`
      ]},
    principle:"원칙 ④ 반복 맥락의 설정화" }

);
