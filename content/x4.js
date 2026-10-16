/* D4 추가 문항 풀 */
window.CCAO_EXTRA.push(

  { ts:"4.1", lvl:"기초",
    q:`A customer support lead has been asked to identify where Claude could help her eight-person team. The team answers email inquiries, writes weekly issue summaries, updates a help-center FAQ, and approves refund exceptions. Her manager wants a short proposal by the end of the month. What should she do FIRST?`,
    ko:`고객지원 리드가 8명 팀에서 Claude가 도울 수 있는 곳을 찾으라는 요청을 받았다. 팀은 이메일 문의 응대, 주간 이슈 요약 작성, 헬프센터 FAQ 갱신, 환불 예외 승인을 맡고 있다. 관리자는 이번 달 말까지 짧은 제안서를 원한다. 가장 먼저 해야 할 일은 무엇인가?`,
    opts:[
      {t:`List each recurring task with its inputs, outputs, frequency, and the cost of an error, then compare them.`, ko:`반복 업무마다 입력, 출력, 빈도, 틀렸을 때의 비용을 적어 비교하기`, ok:true},
      {t:`Ask Claude what a support team can generally do with AI and adopt the use cases at the top of its list.`, ko:`지원팀이 AI로 일반적으로 할 수 있는 일을 Claude에게 묻고 목록 위쪽의 사례를 채택하기`},
      {t:`Connect every available connector so that Claude can scan the team's tools and find use cases on its own.`, ko:`Claude가 팀 도구를 훑어 사용 사례를 스스로 찾도록 사용 가능한 커넥터를 모두 연결하기`},
      {t:`Choose the task with the highest volume and hand it to Claude completely so that the team sees results quickly.`, ko:`팀이 빨리 성과를 보도록 물량이 가장 많은 업무를 골라 Claude에 전부 맡기기`}
    ],
    explain:{ good:`사용 사례는 팀의 실제 업무 조건으로 골라야 함. 업무마다 입력·출력·빈도·오류 비용을 적으면 주간 요약처럼 맡기기 좋은 일과 환불 예외 승인처럼 사람이 맡을 일이 구분됨. 이 표가 이후 위임 설계의 출발 자료가 됨.`,
      wrongs:[`<b>B:</b> 일반적인 목록은 이 팀의 업무와 위험을 반영하지 않음. 팀 조건을 분석하지 않고 외부 목록을 받아들인 선택임.`,
              `<b>C:</b> 필요 없는 접근까지 열어 데이터 위험을 키움. 커넥터는 과업에 필요한 범위만 연결함.`,
              `<b>D:</b> 물량만 보고 업무 전체를 넘기면 단계별 위험 판단이 빠짐. 단계를 나눠 맡길 부분을 정해야 함.`]},
    principle:"원칙 ① 요청의 구체화" },

  { ts:"4.1", lvl:"실전",
    q:`A nonprofit program director pasted a 25-page government grant call into Claude and asked for a summary. The summary reads well, and she plans to write the application from it. A colleague points out that their last application was rejected for missing a required attachment that was mentioned only in the evaluation annex. What should she do NEXT?`,
    ko:`비영리단체 사업 책임자가 25쪽 분량의 정부 보조금 공고를 Claude에 붙여넣고 요약을 요청했다. 요약은 잘 읽히고, 책임자는 이 요약을 바탕으로 신청서를 쓸 계획이다. 동료는 지난번 신청이 평가 부록에만 언급된 필수 첨부서류를 빠뜨려 탈락했다고 알려준다. 다음에 해야 할 일은 무엇인가?`,
    opts:[
      {t:`Ask Claude to extract all requirements, including the annexes, into a table with source location and mandatory status.`, ko:`부록을 포함한 모든 요구사항을 원문 위치와 필수 여부를 담은 표로 추출하게 하기`, ok:true},
      {t:`Ask Claude for a longer and more detailed version of the summary so that fewer of the call's points are left out.`, ko:`공고의 요점이 덜 빠지도록 더 길고 자세한 요약을 요청하기`},
      {t:`Ask Claude to write the full application directly from the grant call, since it has already read the whole document.`, ko:`Claude가 이미 문서 전체를 읽었으므로 공고를 바탕으로 신청서 전체를 바로 쓰게 하기`},
      {t:`Switch to the most capable model and request the summary again, because a stronger model will catch the missing details.`, ko:`더 강력한 모델이 빠진 세부를 잡아낼 것이므로 최상위 모델로 바꿔 요약을 다시 요청하기`}
    ],
    explain:{ good:`서술형 요약은 읽기 좋지만 부록에만 있는 필수 요건 같은 항목을 놓쳐도 드러나지 않음. 원문 위치와 필수 여부를 열로 둔 표로 추출하면 항목마다 출처를 대조할 수 있고 빠진 부분이 보임. 이후 재점검으로 암시된 요구까지 확인함.`,
      wrongs:[`<b>B:</b> 길어진 요약도 서술형이라 누락을 찾기 어려운 구조는 같음.`,
              `<b>C:</b> 요구사항을 확정하지 않고 바로 작성하면 같은 누락이 신청서로 이어짐.`,
              `<b>D:</b> 누락이 드러나지 않는 원인은 서술형 출력 형식에 있음. 모델을 바꿔도 같은 형식의 요약이 나옴.`]},
    principle:"원칙 ① 요청의 구체화" },

  { ts:"4.2", lvl:"기초",
    q:`An operations coordinator at a facilities management company wants to find bottlenecks in the monthly vendor payment process. She has a written description of the process and a six-month log showing when each invoice entered and left every step. Which approach BEST fits?`,
    ko:`시설관리 회사의 운영 코디네이터가 월간 협력업체 대금 지급 절차의 병목을 찾으려 한다. 절차를 적은 설명서와, 송장이 각 단계에 들어오고 나간 시각이 담긴 6개월 치 기록이 있다. 가장 맞는 방법은 무엇인가?`,
    opts:[
      {t:`Have Claude map the steps from the description and compute the time spent at each step from the log with code execution.`, ko:`설명서로 Claude가 단계를 정리하게 하고 기록에서 단계별 소요 시간을 코드 실행으로 계산하게 하기`, ok:true},
      {t:`Ask Claude which step is usually the slowest in vendor payment processes at similar facilities management companies.`, ko:`비슷한 시설관리 회사의 대금 지급 절차에서 보통 어느 단계가 가장 느린지 Claude에게 묻기`},
      {t:`Ask Claude to read through the log and describe in its own words which of the steps seem to be taking the longest.`, ko:`Claude가 기록을 읽고 어느 단계가 오래 걸리는 것 같은지 자기 말로 설명하게 하기`},
      {t:`Use Research to find a best-practice payment workflow from other companies and replace the current process with it.`, ko:`Research로 다른 회사의 모범 지급 절차를 찾아 현재 절차를 그것으로 바꾸기`}
    ],
    explain:{ good:`단계 정리는 Claude의 종합에 맞고, 단계별 소요 시간은 실제 기록을 계산해야 하는 숫자임. 두 작업을 나눠 맡기면 병목을 감이 아닌 측정값으로 확인할 수 있음.`,
      wrongs:[`<b>B:</b> 다른 회사의 일반적 경향은 이 회사의 기록을 반영하지 않음. 이미 가진 기록을 쓰지 않은 선택임.`,
              `<b>C:</b> 기록을 읽고 문장으로 판단하게 하면 수치가 그럴듯하게만 나올 수 있음. 시간은 계산으로 구함.`,
              `<b>D:</b> 현재 병목을 확인하지 않고 외부 절차로 바꾸는 선택임. 무엇이 개선되었는지 측정할 기준도 없음.`]},
    principle:"원칙 ② 내보내기 전 검증" },

  { ts:"4.2", lvl:"실전", multi:2,
    q:`A marketing director is planning next year's content calendar with Claude's help. She has a spreadsheet of last year's post performance, needs to account for social platform policy changes announced in recent months, and must decide how much budget to risk on experimental formats. Which TWO approaches are MOST appropriate? (Select TWO.)`,
    ko:`마케팅 디렉터가 Claude의 도움을 받아 내년 콘텐츠 캘린더를 계획한다. 작년 게시물 성과 스프레드시트가 있고, 최근 몇 달 사이 발표된 소셜 플랫폼 정책 변경을 반영해야 하며, 실험적 포맷에 예산을 얼마나 걸지 정해야 한다. 가장 적절한 접근 두 가지는 무엇인가? (두 개 선택)`,
    opts:[
      {t:`Use web search or Research to gather the recent platform changes, then check key claims against the cited sources.`, ko:`웹 검색이나 Research로 최근 플랫폼 변경을 모은 뒤 핵심 주장을 인용된 출처와 대조하기`, ok:true},
      {t:`Compute engagement trends from the spreadsheet with code execution and have Claude build the plan on those figures.`, ko:`스프레드시트의 참여 추세를 코드 실행으로 계산하고 그 수치 위에서 Claude가 계획을 세우게 하기`, ok:true},
      {t:`Let Claude decide how much risk to take on experimental formats, based on what is typical in the industry.`, ko:`업계 일반 수준을 기준으로 실험적 포맷에 걸 위험의 크기를 Claude가 정하게 하기`},
      {t:`Ask Claude to recall typical engagement rates for each platform and use them as the baseline for planning.`, ko:`플랫폼별 일반적인 참여율을 Claude가 기억으로 제시하게 하고 계획의 기준값으로 쓰기`},
      {t:`Have Claude finalize the calendar and send it to the leadership review without the director making any edits.`, ko:`디렉터의 수정 없이 Claude가 캘린더를 확정해 경영진 검토에 바로 보내게 하기`}
    ],
    explain:{ good:`최근 정책 변경은 학습 기준 시점 이후 정보라 현재 소스로 모아야 함. 계획의 기준이 되는 참여 추세는 회사 데이터를 실제로 계산한 값이어야 함. 두 입력이 갖춰진 뒤 Claude가 종합하고, 위험 감수 수준은 디렉터가 정함.`,
      wrongs:[`<b>C:</b> 위험 감수 수준은 조직 상황과 책임이 걸린 판단이라 사람이 정함.`,
              `<b>D:</b> 기억에서 나온 일반 참여율은 이 회사의 실적도 최신 수치도 아님. 이미 가진 데이터를 계산해야 함.`,
              `<b>E:</b> 경영진에게 가는 계획은 디렉터 이름으로 나가는 결과물임. 검토 없이 확정하면 책임자가 확인하지 않은 계획이 됨.`]},
    principle:"원칙 ③ 요구에 맞는 선택" },

  { ts:"4.3", lvl:"기초",
    q:`An HR coordinator is asked to "build a chatbot that connects to our HR system and answers policy questions for all 2,000 employees, around the clock." She is comfortable using Projects and artifacts but has no software development background. What is the MOST appropriate action?`,
    ko:`HR 코디네이터가 "HR 시스템과 연결되어 전 직원 2,000명의 정책 질문에 24시간 답하는 챗봇을 만들라"는 요청을 받았다. 코디네이터는 Projects와 Artifacts는 능숙하게 쓰지만 소프트웨어 개발 경험은 없다. 가장 적절한 행동은 무엇인가?`,
    opts:[
      {t:`Escalate to a Claude Architect or Developer, bringing the policy documents and a clear list of requirements.`, ko:`정책 문서와 정리된 요구사항 목록을 가지고 Claude Architect나 Developer에게 에스컬레이션하기`, ok:true},
      {t:`Build the chatbot as an artifact over the weekend and share its link with all employees on Monday morning.`, ko:`주말 동안 챗봇을 Artifact로 만들어 월요일 아침에 전 직원에게 링크를 공유하기`},
      {t:`Ask Claude to write the HR system integration code, then deploy it herself by following online setup guides.`, ko:`Claude에게 HR 시스템 연동 코드를 쓰게 하고 온라인 설치 안내를 보며 직접 배포하기`},
      {t:`Decline the request outright, because Claude cannot be used to answer employee questions about HR policy.`, ko:`Claude로는 HR 정책 질문에 답할 수 없으므로 요청을 바로 거절하기`}
    ],
    explain:{ good:`사내 시스템 연동, 2,000명 규모의 사용, 24시간 가동은 모두 이관 신호임. 이 구축은 Associate 범위 밖이므로 넘기는 것이 맞음. 코디네이터는 정책 문서와 요구사항을 정리해 개발 담당자의 작업을 돕는 역할을 맡음.`,
      wrongs:[`<b>B:</b> 전사 사용과 시스템 연동, 상시 가동이 필요한 서비스를 개인이 만든 Artifact로 대신할 수 없음.`,
              `<b>C:</b> 시스템 연동을 직접 구축·배포하는 일은 Associate 범위 밖임. 보안·권한 검토도 빠짐.`,
              `<b>D:</b> 요청 자체는 정당한 사용 사례일 수 있음. 직접 만들 수 없다는 것은 거절 이유가 되지 않으며 맞는 담당자에게 넘기면 됨.`]},
    principle:"원칙 ⑤ 정책·사람 판단 우선" },

  { ts:"4.3", lvl:"실전",
    q:`A product marketing manager is prototyping an internal pricing comparison page as an artifact for a sales training session next week. After two design rounds, she notices that several discount totals shown in the artifact do not match the totals in the pricing spreadsheet she uploaded. She still has two design rounds planned. What should she do NEXT?`,
    ko:`제품 마케팅 매니저가 다음 주 영업 교육에 쓸 사내 가격 비교 페이지를 Artifact로 시안 작업 중이다. 두 차례 디자인 반복 후, Artifact에 표시된 할인 합계 여러 개가 올린 가격 스프레드시트의 합계와 다르다는 것을 발견했다. 디자인 반복은 두 차례가 더 남아 있다. 다음에 해야 할 일은 무엇인가?`,
    opts:[
      {t:`Have the totals calculated from the uploaded spreadsheet with code execution and check them before the next design round.`, ko:`올린 스프레드시트에서 코드 실행으로 합계를 계산하게 하고 다음 디자인 회차 전에 확인하기`, ok:true},
      {t:`Continue with the remaining design rounds as planned and correct the totals by hand at the very end before the session.`, ko:`남은 디자인 회차를 계획대로 진행하고 교육 직전 마지막에 합계를 손으로 고치기`},
      {t:`Ask Claude to carefully double-check its own arithmetic in the artifact and confirm that every total is now correct.`, ko:`Claude에게 Artifact 안의 계산을 꼼꼼히 다시 확인하고 모든 합계가 맞다고 확인하게 하기`},
      {t:`Switch to the most capable model for the remaining rounds so that the arithmetic in the artifact becomes more reliable.`, ko:`계산이 더 믿을 만해지도록 남은 회차에서 최상위 모델로 바꾸기`}
    ],
    explain:{ good:`Claude가 숫자를 계산하지 않고 문장처럼 생성하면 그럴듯하지만 틀린 합계가 나올 수 있음. 원본 스프레드시트에서 Code Execution으로 계산하게 하면 합계를 계산값으로 바꾸고 결과를 원본과 대조할 수 있음. 숫자를 먼저 바로잡아야 이후 디자인 회차가 틀린 값 위에 쌓이지 않음.`,
      wrongs:[`<b>B:</b> 틀린 숫자 위에서 디자인을 계속하면 마지막 수작업 수정에서 놓치는 값이 생기기 쉬움.`,
              `<b>C:</b> Claude의 자기 확인은 원본 대조를 대신하지 못함. 같은 방식으로 다시 생성할 뿐임.`,
              `<b>D:</b> 합계는 계산 기능으로 구해야 하는 숫자임. 모델 등급을 올려도 숫자를 계산하지 않고 생성한다면 같은 문제가 남음.`]},
    principle:"원칙 ⑥ 원인 진단 후 수정" },

  { ts:"4.4", lvl:"기초",
    q:`A team lead has used Claude to draft 50 meeting summaries, and all of them were accurate. A colleague now suggests letting Claude also assign action items to named people and send the assignments to the whole department automatically after each meeting. What is the MOST appropriate response?`,
    ko:`팀장이 Claude로 회의 요약 50건을 작성했고 모두 정확했다. 동료가 이제 회의마다 Claude가 실행 항목을 담당자별로 배정하고 그 배정을 부서 전체에 자동으로 보내게 하자고 제안한다. 가장 적절한 대응은 무엇인가?`,
    opts:[
      {t:`Judge the assign-and-send step on its own risks, and keep a person approving assignments before they go out.`, ko:`배정·발송 단계를 그 단계의 위험으로 따로 판단하고, 배정이 나가기 전에 사람이 승인하게 유지하기`, ok:true},
      {t:`Approve the change, because 50 accurate summaries show that Claude understands the team's meetings very well.`, ko:`요약 50건이 정확했으므로 Claude가 회의를 잘 이해한다고 보고 변경을 승인하기`},
      {t:`Approve the change, but have Claude add a short note to each message stating that the assignments were AI-generated.`, ko:`변경을 승인하되 각 메시지에 AI가 작성한 배정이라는 짧은 안내를 붙이게 하기`},
      {t:`Reject any further use of Claude in meetings, including the summaries, to avoid the risk of sending wrong assignments.`, ko:`잘못된 배정이 나갈 위험을 없애도록 요약을 포함한 회의 관련 Claude 사용을 모두 중단하기`}
    ],
    explain:{ good:`요약 작성과 업무 배정·발송은 다른 단계임. 배정은 사람에게 일을 맡기는 결정이고, 부서 전체 발송은 되돌리기 어려움. 앞 단계 성과와 관계없이 새 단계는 따로 판단하고, 배정은 팀장이 승인한 뒤 보냄.`,
      wrongs:[`<b>B:</b> 앞 단계의 정확도를 근거로 다음 단계를 넘기는 후광 위임임.`,
              `<b>C:</b> AI 작성 안내는 투명성에는 도움이 되지만 잘못된 배정을 막는 확인 단계가 되지 못함.`,
              `<b>D:</b> 위험이 낮고 효과가 확인된 요약 단계까지 버리는 과잉 대응임.`]},
    principle:"원칙 ⑤ 정책·사람 판단 우선" },

  { ts:"4.4", lvl:"실전", multi:2,
    q:`A university admissions office is redesigning how it answers applicant emails. The steps are: classify each inquiry, check it against admissions policy rules, draft a reply, approve exceptions such as deadline extensions, and send the reply. Six staff members currently apply the policy rules slightly differently. Which TWO design choices are MOST appropriate? (Select TWO.)`,
    ko:`대학 입학처가 지원자 이메일 답변 방식을 재설계한다. 단계는 문의 분류, 입학 정책 규칙 대조, 답변 초안 작성, 마감 연장 같은 예외 승인, 답변 발송이다. 현재 직원 6명이 정책 규칙을 조금씩 다르게 적용하고 있다. 가장 적절한 설계 선택 두 가지는 무엇인가? (두 개 선택)`,
    opts:[
      {t:`Package the policy-checking procedure as a shared Skill so that every staff member's drafts apply the same rules.`, ko:`정책 대조 절차를 공유 Skill로 만들어 모든 직원의 초안이 같은 규칙을 적용하게 하기`, ok:true},
      {t:`Keep exception approvals with a named admissions officer as an explicit step before any reply is sent.`, ko:`예외 승인은 지정된 입학 담당관이 답변 발송 전에 하는 명시적 단계로 유지하기`, ok:true},
      {t:`Let Claude grant deadline extensions on its own whenever the policy wording appears clear enough to apply.`, ko:`정책 문구가 충분히 분명해 보이면 Claude가 마감 연장을 스스로 승인하게 하기`},
      {t:`Have each staff member keep pasting their own version of the policy rules into chats, as they do today.`, ko:`지금처럼 직원마다 자기 버전의 정책 규칙을 채팅에 계속 붙여넣게 하기`},
      {t:`Describe the review step as "an officer may look at replies when available" to keep the process flexible.`, ko:`절차를 유연하게 유지하도록 검토 단계를 "담당관이 여유 있을 때 답변을 볼 수 있음"으로 정하기`}
    ],
    explain:{ good:`직원마다 규칙 적용이 다른 문제는 반복 절차를 공유 Skill로 담아 해결함. 마감 연장 같은 예외는 지원자에게 영향을 주고 책임이 따르는 결정이므로 지정된 담당관의 명시적 관문으로 둠.`,
      wrongs:[`<b>C:</b> 예외 승인은 책임이 걸린 결정임. 문구가 분명해 보인다는 점은 Claude에게 결정권을 넘길 근거가 되지 못함.`,
              `<b>D:</b> 지금의 불일치를 그대로 유지하는 방식임. 규칙이 사람마다 달라지는 원인이 남음.`,
              `<b>E:</b> 누가, 언제 확인하는지 정해지지 않은 검토는 관문으로 작동하지 않음. 사실상 검토 없는 발송이 됨.`]},
    principle:"원칙 ④ 반복 맥락의 설정화" },

  { ts:"4.5", lvl:"기초",
    q:`During a rollout meeting, a skeptical department head asks a project manager: "Won't Claude just make things up in these reports?" The workflow includes a step where analysts check every figure against the source data before reports are shared. Which reply BEST builds trust?`,
    ko:`도입 회의에서 회의적인 부서장이 프로젝트 매니저에게 "Claude가 보고서에 내용을 지어내지 않겠는가?"라고 묻는다. 이 업무 흐름에는 보고서 공유 전에 분석가가 모든 수치를 원자료와 대조하는 단계가 있다. 신뢰를 가장 잘 얻는 답은 무엇인가?`,
    opts:[
      {t:`Acknowledge that Claude can produce wrong details, and explain the step where analysts check each figure against the source.`, ko:`Claude가 틀린 세부 내용을 만들 수 있음을 인정하고, 분석가가 각 수치를 원자료와 대조하는 단계를 설명하기`, ok:true},
      {t:`Explain that Claude rarely makes mistakes in practice, so the concern is understandable but mostly overstated.`, ko:`실제로는 Claude가 거의 실수하지 않으므로 우려는 이해하지만 대체로 과하다고 설명하기`},
      {t:`State that the latest Claude models no longer produce made-up content, so additional checks are now unnecessary.`, ko:`최신 Claude 모델은 더 이상 지어낸 내용을 만들지 않으므로 추가 확인이 필요 없다고 말하기`},
      {t:`Offer to show the strongest reports from the pilot as proof that the made-up content problem has been solved for good.`, ko:`지어낸 내용 문제가 해결되었다는 증거로 시범 운영에서 가장 잘 나온 보고서를 보여주겠다고 제안하기`}
    ],
    explain:{ good:`환각은 실제로 발생하는 한계임. 이를 인정하고 그 오류를 잡는 확인 단계를 구체적으로 설명할 때 회의적인 청중의 신뢰가 생김. 한계를 숨기거나 작게 말한 설명은 첫 오류에서 신뢰를 잃음.`,
      wrongs:[`<b>B:</b> 근거 없이 위험을 작게 말하는 답임. 이후 오류가 발견되면 설명 전체의 신뢰가 떨어짐.`,
              `<b>C:</b> 사실이 아닌 주장임. 확인 단계를 없애는 근거로 쓰면 오류가 그대로 공유됨.`,
              `<b>D:</b> 잘 나온 사례는 오류가 없다는 증거가 되지 못함. 질문한 위험에 대한 통제도 설명하지 못함.`]},
    principle:"원칙 ② 내보내기 전 검증" },

  { ts:"4.5", lvl:"실전",
    q:`A consultant is preparing a business case for a Claude-assisted monthly reporting workflow to present to a client's CFO. She asks Claude to estimate the annual savings, and it replies: "about 38% less effort, roughly 1,200 hours per year." The client ran a six-week pilot and logged the time spent on each report. What should she do before using a savings figure?`,
    ko:`컨설턴트가 Claude를 활용한 월간 보고 업무 흐름의 사업성 자료를 고객사 CFO에게 발표하려고 준비한다. Claude에게 연간 절감 효과를 추정하게 했더니 "약 38% 노력 절감, 연간 약 1,200시간"이라고 답했다. 고객사는 6주간 시범 운영을 했고 보고서별 소요 시간을 기록해 두었다. 절감 수치를 쓰기 전에 무엇을 해야 하는가?`,
    opts:[
      {t:`Calculate the savings from the pilot's logged times with code execution and state the assumptions behind the annual figure.`, ko:`시범 운영의 기록 시간으로 코드 실행을 써서 절감 효과를 계산하고 연간 수치의 가정을 밝히기`, ok:true},
      {t:`Include Claude's estimate as it is, adding a footnote that the number was produced by Claude during the planning work.`, ko:`Claude의 추정치를 그대로 넣고 기획 과정에서 Claude가 만든 수치라는 각주를 달기`},
      {t:`Round the estimate up to 40% so that the slide is easier to read, since the exact figure is only approximate anyway.`, ko:`어차피 근사치이므로 슬라이드가 읽기 쉽게 40%로 올려 표기하기`},
      {t:`Ask Claude for a more conservative version of the same estimate and present the lower figure to the CFO to be safe.`, ko:`같은 추정의 보수적인 버전을 Claude에게 받아 안전하게 낮은 수치를 CFO에게 제시하기`}
    ],
    explain:{ good:`CFO에게 제시할 성과 수치는 측정값에서 나와야 함. 이미 시범 운영 기록이 있으므로 그 시간 데이터를 Code Execution으로 계산하고, 연간 환산에 쓴 가정을 함께 밝힘. Claude가 데이터 없이 만든 추정치는 성과 근거가 될 수 없음.`,
      wrongs:[`<b>B:</b> 각주는 출처를 밝힐 뿐 수치의 근거를 만들지 않음. 측정 기록이 있는데 쓰지 않은 선택임.`,
              `<b>C:</b> 근거 없는 수치를 더 부풀리는 선택임. 재무 책임자는 숫자의 근거를 물을 가능성이 큼.`,
              `<b>D:</b> 보수적으로 고쳐도 같은 방식으로 생성된 추정치임. 낮다고 해서 정확해지지 않음.`]},
    principle:"원칙 ② 내보내기 전 검증" }
);
