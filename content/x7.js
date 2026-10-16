/* D7 추가 문항 풀 */
window.CCAO_EXTRA.push(

  { ts:"7.1", lvl:"기초",
    q:`A market research analyst picked the fastest model to keep things moving, then asked Claude to explain the underlying tensions across forty customer interview transcripts. She has added more background and clearer criteria three times, yet each answer still lists surface-level themes with no interpretation. What is the MOST likely cause?`,
    ko:`시장조사 분석가가 빠른 진행을 위해 가장 빠른 모델을 고른 뒤, 고객 인터뷰 녹취록 40개에 걸친 근본적인 긴장 관계를 설명하라고 Claude에 요청함. 배경과 기준을 세 번 보강했지만 답변은 여전히 해석 없이 표면적인 주제만 나열함. 가장 가능성 높은 원인은 무엇인가?`,
    opts:[
      {t:`The task needs deeper interpretation than the speed-focused model she picked is suited for.`, ko:`과업에 필요한 해석 깊이가 고른 속도 중심 모델에 맞지 않음`, ok:true},
      {t:`Her request is still missing the background and criteria Claude needs to go past the surface.`, ko:`요청에 Claude가 표면을 넘어서는 데 필요한 배경과 기준이 아직 빠져 있음`},
      {t:`The transcripts include many near-duplicate files, which is confusing Claude's reading of them.`, ko:`녹취록에 거의 같은 파일이 많이 섞여 Claude의 해석을 혼란스럽게 함`},
      {t:`The Project's instructions have become outdated and are quietly steering the analysis to old themes.`, ko:`Project 지시문이 낡아 분석을 예전 주제 쪽으로 조용히 끌고 감`}
    ],
    explain:{good:`세부를 세 번 보강해도 같은 얕음이 반복되고, 속도용 모델을 고른 상태임. 이 조합은 모델 등급 선택 오류를 가리킴. 해석이 필요한 다문서 분석에는 Sonnet이나 Opus 같은 상위 모델이 맞음.`,
      wrongs:[`<b>B:</b> 이미 배경과 기준을 세 번 보강했음. 명세 문제로 오진하면 세부만 계속 늘어남.`,
              `<b>C:</b> 지문에 중복 파일에 관한 단서가 없음. 입력 정리는 결과가 서로 충돌하거나 혼란스러울 때의 조치임.`,
              `<b>D:</b> 낡은 설정은 예전에 잘 되던 결과가 어긋날 때 의심함. 이 과업은 처음부터 얕았음.`]},
    principle:"원칙 ③ 요구에 맞는 선택" },

  { ts:"7.1", lvl:"실전", multi:2,
    q:`After one disappointing output, a project manager tells her team, "Claude just can't do risk registers," and a colleague suggests trying another AI tool. The output listed vague risks without the likelihood and impact ratings the team uses. She had made the request in a chat that has run all week across several projects. Which TWO checks should come FIRST? (Select TWO.)`,
    ko:`실망스러운 결과 한 번 뒤에 프로젝트 매니저가 팀에 "Claude는 리스크 대장을 못 만든다"고 말하고, 동료는 다른 AI 도구를 써 보자고 제안함. 결과물은 팀이 쓰는 발생 가능성·영향도 등급 없이 모호한 리스크만 나열했음. 요청은 여러 프로젝트에 걸쳐 일주일 내내 이어 온 대화에서 했음. 가장 먼저 해야 할 점검 두 가지는 무엇인가? (두 개 선택)`,
    opts:[
      {t:`Check whether the request stated the register's columns, the rating scale and who will read it.`, ko:`요청에 리스크 대장의 열, 등급 기준, 독자가 들어 있었는지 점검하기`, ok:true},
      {t:`Check whether the week-long chat has become overloaded, and retry in a new conversation if so.`, ko:`일주일간 이어진 대화가 과부하 상태인지 점검하고, 그렇다면 새 대화에서 다시 시도하기`, ok:true},
      {t:`Accept that this task is not suited to Claude and go back to building the register by hand.`, ko:`이 과업은 Claude에 맞지 않는다고 받아들이고 리스크 대장을 다시 손으로 만들기`},
      {t:`Upgrade to the most capable model and send exactly the same request again in the same chat.`, ko:`가장 역량 높은 모델로 올리고 같은 대화에서 같은 요청을 그대로 다시 보내기`},
      {t:`Move the work to a different AI platform, as the colleague suggested, and compare the results.`, ko:`동료의 제안대로 다른 AI 플랫폼으로 작업을 옮겨 결과를 비교하기`}
    ],
    explain:{good:`진단 순서는 확인 비용이 낮은 원인부터 점검함. 먼저 요청에 리스크 대장의 열, 등급 기준, 독자가 들어 있었는지 5요소로 확인함. 다음으로 여러 주제가 일주일 동안 쌓인 대화라면 컨텍스트 과부하를 의심하고 새 대화에서 다시 시도함. 과업 적합성 판정은 이 점검 뒤에 내림.`,
      wrongs:[`<b>C:</b> 진단 순서의 마지막 판정을 첫 단계로 당긴 것임.`,
              `<b>D:</b> 원인을 확인하지 않고 가장 비싼 조치부터 고름. 같은 대화에 같은 요청을 보내면 명세와 컨텍스트 문제는 그대로 남음.`,
              `<b>E:</b> 실패 위치를 찾지 않고 도구부터 바꿈. 요청에 빠진 정보는 다른 도구에서도 빠져 있음.`]},
    principle:"원칙 ⑥ 원인 진단 후 수정" },

  { ts:"7.2", lvl:"기초",
    q:`Four recruiters share a Claude Project for writing job postings. One recruiter noticed that Claude began adding the required pay-range line to her drafts after she had corrected it several times, and she assumes the whole team is now covered. What should she do to make sure every posting includes the line?`,
    ko:`채용 담당자 4명이 채용 공고 작성용 Claude Project를 함께 씀. 한 담당자는 여러 번 고쳐 준 뒤로 Claude가 자신의 초안에 필수 급여 범위 문구를 넣기 시작한 것을 보고, 팀 전체에 적용되었다고 생각함. 모든 공고에 이 문구가 들어가게 하려면 무엇을 해야 하는가?`,
    opts:[
      {t:`Add the pay-range requirement to the Project's instructions so it applies to every recruiter's chats.`, ko:`모든 담당자의 대화에 적용되도록 급여 범위 요건을 Project 지시문에 추가하기`, ok:true},
      {t:`Leave things as they are, since Memory has clearly learned the requirement from her corrections.`, ko:`Memory가 수정 내용을 통해 요건을 학습한 것이 분명하므로 그대로 두기`},
      {t:`Ask each of the other recruiters to correct Claude several times as well so that it learns for them.`, ko:`다른 담당자들도 각자 Claude를 여러 번 고쳐 주어 학습하게 하기`},
      {t:`Turn Memory off for the Project so that Claude stops relying on patterns it picked up from past chats.`, ko:`Claude가 지난 대화에서 잡은 패턴에 기대지 않도록 Project의 Memory를 끄기`}
    ],
    explain:{good:`Memory가 잡은 패턴은 최선 노력 수준이라 매번, 그리고 다른 담당자의 대화에도 적용된다는 보장이 없음. 반드시 들어가야 하는 문구는 프로젝트 지시문에 규칙으로 적어야 모든 담당자의 모든 대화에 적용됨.`,
      wrongs:[`<b>B:</b> 한 사람의 대화에서 관찰한 패턴이 팀 전체에 적용된다는 근거가 없음.`,
              `<b>C:</b> 사람마다 같은 수정을 반복하게 하는 것은 보존이 아님. 적용 여부도 여전히 보장되지 않음.`,
              `<b>D:</b> Memory를 꺼도 규칙이 새로 생기지 않음. 문구가 들어가게 하는 설정은 여전히 없음.`]},
    principle:"원칙 ④ 반복 맥락의 설정화" },

  { ts:"7.2", lvl:"실전",
    q:`A PR agency account lead received client feedback on a press release draft: "Too long, and the news is buried." Her next prompt said only, "Make it shorter and punchier." The new draft was shorter, but the announcement still did not appear until the third paragraph. The client meeting is tomorrow. What should she change in her next request?`,
    ko:`PR 대행사 어카운트 리드가 보도자료 초안에 대해 고객사로부터 "너무 길고 핵심 소식이 묻혀 있다"는 피드백을 받음. 다음 프롬프트에는 "더 짧고 강렬하게"라고만 적음. 새 초안은 짧아졌지만 발표 내용은 여전히 세 번째 문단에서야 등장함. 고객 미팅은 내일임. 다음 요청에서 무엇을 바꿔야 하는가?`,
    opts:[
      {t:`Name the one announcement the release must lead with, require it in the first sentence, and set a word limit.`, ko:`보도자료가 앞세울 발표 하나를 지정해 첫 문장에 넣도록 요구하고 단어 수 제한을 두기`, ok:true},
      {t:`Ask again for a version half as long, this time stressing that the wording must be far punchier.`, ko:`이번에는 표현이 훨씬 더 강렬해야 한다고 강조하며 절반 길이의 버전을 다시 요청하기`},
      {t:`Rewrite the whole prompt from scratch, combining every piece of feedback the client has given so far.`, ko:`고객사가 지금까지 준 피드백을 모두 합쳐 프롬프트 전체를 처음부터 다시 쓰기`},
      {t:`Generate several new versions and send all of them to the client before tomorrow's meeting so the client can pick one.`, ko:`새 버전을 여러 개 만들어 내일 미팅 전에 모두 고객사에 보내 하나를 고르게 하기`}
    ],
    explain:{good:`피드백에는 길이와 핵심 소식의 위치라는 두 문제가 있었는데, 이전 수정은 길이만 다룸. 첫 문장에 둘 발표를 지목하고 단어 수 제한을 함께 주면 남은 문제를 직접 겨냥함. 바꾼 결과는 이전 초안과 나란히 비교해 확인함.`,
      wrongs:[`<b>B:</b> 같은 막연한 요구를 강도만 높여 반복함. 핵심 소식의 위치는 여전히 지정되지 않음.`,
              `<b>C:</b> 전체를 새로 쓰면 이미 해결된 길이 문제까지 다시 흔들리고, 무엇이 효과였는지 알 수 없게 됨.`,
              `<b>D:</b> 검토하지 않은 여러 버전을 외부 고객에게 보내는 것은 사람 검토를 건너뛴 것임. 원인도 고쳐지지 않음.`]},
    principle:"원칙 ① 요청의 구체화" },

  { ts:"7.3", lvl:"기초",
    q:`An event planner compares vendor quotes the same way every time: extract the prices, convert them to the same units, total each quote, rank them, flag missing items and build a summary table. She types out these steps in every request, and colleagues working in other Projects run the same comparison. Where do these steps BEST belong?`,
    ko:`행사 기획자가 공급업체 견적을 매번 같은 방식으로 비교함. 가격 추출, 단위 통일, 견적별 합계, 순위 매기기, 누락 항목 표시, 요약표 작성 순서임. 요청할 때마다 이 단계를 직접 적고, 다른 Project에서 일하는 동료들도 같은 비교를 함. 이 단계들을 두기에 가장 적절한 곳은 어디인가?`,
    opts:[
      {t:`In a shared Skill that keeps the steps in order and can be reused across Projects.`, ko:`단계 순서를 유지하고 여러 Project에서 재사용할 수 있는 공유 Skill`, ok:true},
      {t:`In one line of Project instructions that says, "Always compare vendor quotes carefully."`, ko:`"공급업체 견적은 항상 꼼꼼히 비교할 것"이라는 Project 지시문 한 줄`},
      {t:`In the knowledge base, as a past comparison table that Claude is asked to imitate.`, ko:`Claude가 따라 하도록 지식 베이스에 올린 과거 비교표`},
      {t:`In a saved text note that she copies and pastes at the start of each new request.`, ko:`새 요청을 시작할 때마다 복사해 붙여넣는 저장된 메모`}
    ],
    explain:{good:`순서가 있는 여러 단계는 절차이므로 Skill에 둠. Skill은 계정 수준에 있어 여러 Project에서 재사용되고, 동료와 함께 쓰는 공유 Skill이면 사람 간 결과 차이도 줄어듦. 합계 단계는 Skill 안에서도 Code Execution으로 계산하게 하는 것이 안전함.`,
      wrongs:[`<b>B:</b> 절차를 지시문 한 줄로 줄이면 단계가 사라짐. "꼼꼼히"는 검증할 수 있는 규칙도 아님.`,
              `<b>C:</b> 지식 베이스는 참고자료를 두는 곳임. 결과 예시만으로는 단계 순서가 보존되지 않음.`,
              `<b>D:</b> 매번 붙여넣는 방식은 반복 수고를 그대로 둠. 다른 Project의 동료에게도 공유되지 않음.`]},
    principle:"원칙 ④ 반복 맥락의 설정화" },

  { ts:"7.3", lvl:"실전", multi:2,
    q:`An operations team says its monthly supplier scorecard "takes forever," but no one can say where the time actually goes. The manager wants to use Claude to make the process faster without lowering its quality. Which TWO actions should the team take FIRST? (Select TWO.)`,
    ko:`운영팀은 월간 공급업체 평가표 작업이 "끝이 없다"고 하지만, 시간이 실제로 어디에 드는지는 아무도 말하지 못함. 관리자는 품질을 낮추지 않으면서 Claude로 이 과정을 빠르게 만들고자 함. 팀이 가장 먼저 해야 할 조치 두 가지는 무엇인가? (두 개 선택)`,
    opts:[
      {t:`Walk through one full cycle and record each manual step along with how long it takes.`, ko:`한 사이클을 처음부터 끝까지 진행하며 손으로 하는 단계와 걸리는 시간을 모두 기록하기`, ok:true},
      {t:`Agree on what to measure, such as time per cycle or correction rounds, before changing anything.`, ko:`무엇이든 바꾸기 전에 사이클당 시간이나 수정 라운드 수처럼 측정할 지표를 합의하기`, ok:true},
      {t:`Move the whole scorecard process to the most capable model so every step runs at higher quality.`, ko:`모든 단계의 품질이 높아지도록 평가표 작업 전체를 가장 역량 높은 모델로 옮기기`},
      {t:`Have Claude produce the scorecard end to end and send it straight to suppliers without a review step.`, ko:`Claude가 평가표를 처음부터 끝까지 만들어 검토 없이 공급업체에 바로 보내게 하기`},
      {t:`Rewrite all of the Project's instructions from scratch so the process restarts on a clean setup.`, ko:`깨끗한 설정에서 다시 시작하도록 Project 지시문 전체를 처음부터 다시 쓰기`}
    ],
    explain:{good:`반복 수고가 어디에 있는지 보이지 않을 때는 한 사이클을 돌며 손으로 하는 단계와 시간을 적어 최적화 백로그를 만드는 것이 출발점임. 줄일 지표를 먼저 정해야 변경의 효과를 판단하고 멈출 시점도 정할 수 있음.`,
      wrongs:[`<b>C:</b> 시간이 어디에 드는지 모르는 상태에서 고른 비싼 변경임. 반복 붙여넣기나 형식 맞추기는 모델 등급과 관계없음.`,
              `<b>D:</b> 외부로 나가는 평가표에서 검토 단계를 없애는 것은 과잉 위임임. 품질을 낮추지 말라는 조건에도 어긋남.`,
              `<b>E:</b> 원인을 모르는 채 전체를 다시 쓰면 잘 되던 설정까지 잃음.`]},
    principle:"원칙 ⑥ 원인 진단 후 수정" }
);
