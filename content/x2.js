/* D1 추가 문항 풀 */
window.CCAO_EXTRA.push(

  { ts:"1.1", lvl:"기초",
    q:`A clinic office manager asks Claude to compare three appointment-reminder services using their pricing pages. The answer is accurate but written as five long paragraphs. She needs to paste a side-by-side comparison into a slide for Monday's staff meeting. Which addition to her original prompt would MOST likely have avoided an extra round?`,
    ko:`병원 사무장이 세 가지 예약 알림 서비스의 요금 안내 페이지를 근거로 비교를 요청함. 답은 정확하지만 긴 문단 다섯 개로 쓰여 있음. 사무장은 월요일 직원 회의 슬라이드에 서비스를 나란히 비교한 내용을 붙여야 함. 원래 프롬프트에 무엇을 추가했다면 추가 수정 라운드를 피할 가능성이 가장 컸는가?`,
    opts:[
      {t:`A table with one column per service and rows for price, setup effort, and supported channels.`, ko:`서비스별 열과 가격·도입 난이도·지원 채널 행으로 된 표`, ok:true},
      {t:`A role line asking Claude to answer as a healthcare technology consultant with clinic experience.`, ko:`병원 경험이 있는 의료 IT 컨설턴트로서 답하라는 역할 문장`},
      {t:`A limit of 150 words so the comparison would be short enough to read quickly during the meeting.`, ko:`회의 중 빠르게 읽을 수 있도록 비교를 150단어 이내로 제한하는 문장`},
      {t:`More background on the clinic's patient numbers, staff size, and current reminder process and costs.`, ko:`병원의 환자 수, 직원 규모, 현재 알림 방식과 비용에 대한 배경 설명`}
    ],
    explain:{ good:`내용은 정확했고 문제는 결과의 형태였음. 슬라이드에 나란히 붙일 비교라면 서비스별 열과 비교 항목별 행을 지정한 표 형식을 처음부터 밝혀야 함. 출력 형식을 미리 정하면 형식을 바꾸는 수정 라운드 한 번이 줄어듦.`,
      wrongs:[`<b>B:</b> 역할은 어휘와 깊이를 정하지만 결과를 표로 만들지는 않음.`,
              `<b>C:</b> 단어 수 제한은 길이만 줄일 뿐 나란히 비교하는 형태를 만들지 않음. 짧은 줄글이 나올 뿐임.`,
              `<b>D:</b> 맥락 보강은 내용이 일반적일 때 쓰는 수정임. 이 결과는 내용이 이미 정확했음.`]},
    principle:"원칙 ① 요청의 구체화" },

  { ts:"1.1", lvl:"실전",
    q:`A project manager asks Claude to draft a steering committee update on "the key decisions from the last two weeks." The draft lists plausible decisions, but two of them were never made. The real decisions are recorded in meeting notes stored in a shared drive that is not connected to Claude. What is the MOST appropriate next step?`,
    ko:`프로젝트 매니저가 "최근 2주간의 주요 결정 사항"에 대한 운영위원회 보고 초안을 Claude에 요청함. 초안에는 그럴듯한 결정 사항이 나열되어 있지만 그중 두 개는 실제로 내려진 적이 없음. 실제 결정 사항은 Claude와 연결되지 않은 공유 드라이브의 회의록에 기록되어 있음. 가장 적절한 다음 조치는 무엇인가?`,
    opts:[
      {t:`Attach the meeting notes, or link the drive through an approved connector, and ask for an update based only on them.`, ko:`회의록을 첨부하거나 승인된 커넥터로 드라이브를 연결하고, 그 자료만 근거로 보고서를 쓰게 하기`, ok:true},
      {t:`Tell Claude to look through the project's recent emails and shared files to find the actual decisions on its own.`, ko:`프로젝트의 최근 이메일과 공유 파일을 Claude가 직접 찾아보고 실제 결정 사항을 확인하라고 지시하기`},
      {t:`Delete the two incorrect decisions from the draft and send the rest, since the remaining items look reasonable.`, ko:`나머지 항목은 타당해 보이므로 틀린 결정 두 개만 지우고 나머지를 보내기`},
      {t:`Ask Claude to infer the most likely decisions from the original project plan and the team's stated milestones.`, ko:`원래 프로젝트 계획과 팀이 정한 마일스톤에서 가장 가능성 높은 결정을 추론하게 하기`}
    ],
    explain:{ good:`실제 결정 사항은 Claude와 연결되지 않은 드라이브에만 있으므로 Claude가 볼 수 없는 맥락 공백임. 회의록을 첨부하거나 승인된 커넥터로 연결하고 그 자료만 근거로 쓰라고 하면 지어낸 결정이 들어갈 여지가 줄어듦. 운영위원회에 나가는 자료이므로 완성본도 회의록과 대조해야 함.`,
      wrongs:[`<b>B:</b> 연결되지 않은 이메일과 파일은 Claude가 볼 수 없음. 볼 수 없는 자료를 찾으라고 하면 다시 그럴듯한 내용이 만들어질 수 있음.`,
              `<b>C:</b> 나머지 항목도 같은 방식으로 만들어졌음. 확인되지 않은 내용이 그대로 나감.`,
              `<b>D:</b> 계획서에서 추론한 결정은 실제 결정이 아님. 추측을 사실처럼 보고하게 됨.`]},
    principle:"원칙 ① 요청의 구체화" },

  { ts:"1.2", lvl:"기초",
    q:`A customer support lead wants Claude to help rebuild the team's library of saved replies. She has 300 recent tickets and wants new replies for the most common issues. Which approach is MOST likely to produce replies she can trust and explain to her manager?`,
    ko:`고객지원 리더가 팀의 저장된 답변 모음을 Claude와 함께 새로 만들려 함. 최근 문의 티켓 300건이 있고, 가장 흔한 문의에 대한 새 답변이 필요함. 리더가 믿을 수 있고 상사에게 근거를 설명할 수 있는 답변을 얻을 가능성이 가장 큰 방법은 무엇인가?`,
    opts:[
      {t:`Have Claude group the tickets into issue types with counts, review that grouping, then draft replies for the top types.`, ko:`티켓을 문의 유형별로 묶고 건수를 세게 한 뒤, 그 분류를 확인하고 상위 유형의 답변을 쓰게 하기`, ok:true},
      {t:`Ask Claude in one prompt to read all 300 tickets, decide the common issues, and write the new replies together.`, ko:`프롬프트 하나로 티켓 300건을 모두 읽고, 흔한 문의를 정하고, 새 답변까지 함께 쓰게 하기`},
      {t:`Ask Claude to write a broad set of replies first, then check which of the tickets each reply would have answered.`, ko:`답변을 넓게 먼저 쓰게 한 뒤, 각 답변이 어떤 티켓에 해당했을지 확인하기`},
      {t:`Split the tickets into six batches and ask for replies in a separate conversation for each batch of fifty tickets.`, ko:`티켓을 50건씩 여섯 묶음으로 나누고 묶음마다 별도 대화에서 답변을 요청하기`}
    ],
    explain:{ good:`문의 유형 분류와 건수는 어떤 답변을 쓸지 정하는 근거이므로 먼저 만들고 사람이 확인해야 함. 분류가 맞는지 확인한 뒤 상위 유형부터 답변을 쓰면 단계마다 근거를 설명할 수 있음. 건수 집계는 Code Execution으로 하면 더 믿을 수 있음.`,
      wrongs:[`<b>B:</b> 분류와 작성을 한 번에 하면 어떤 기준으로 흔한 문의를 골랐는지 확인할 지점이 없음.`,
              `<b>C:</b> 답변을 먼저 쓰고 근거를 나중에 맞추는 순서임. 실제로 많은 문의 유형이 빠질 수 있음.`,
              `<b>D:</b> 묶음마다 따로 처리하면 공통 분류가 없어 전체에서 어떤 문의가 가장 흔한지 알 수 없음.`]},
    principle:"원칙 ① 요청의 구체화" },

  { ts:"1.2", lvl:"실전", multi:2,
    q:`A procurement specialist has worked through a supplier evaluation with Claude in one long conversation: requirements, approved scoring criteria, scores for nine suppliers, and trade-offs. While drafting the final recommendation, Claude starts ignoring two criteria that were approved early on. Which TWO actions are MOST appropriate? (Select TWO.)`,
    ko:`구매 담당자가 하나의 긴 대화에서 Claude와 공급업체 평가를 진행해 옴: 요구사항, 승인된 평가 기준, 업체 9곳의 점수, 장단점 비교. 최종 추천을 작성하는 중에 Claude가 초반에 승인된 기준 두 개를 무시하기 시작함. 가장 적절한 조치 두 가지는 무엇인가? (두 개 선택)`,
    opts:[
      {t:`Ask Claude to summarize the approved criteria, scores, and open questions, then continue in a new conversation.`, ko:`승인된 기준, 점수, 미결 질문을 요약하게 한 뒤 새 대화에서 이어 가기`, ok:true},
      {t:`Check the final recommendation against the approved criteria and scores before it goes to the buying committee.`, ko:`최종 추천이 구매위원회로 가기 전에 승인된 기준과 점수에 맞는지 대조하기`, ok:true},
      {t:`Repeat the two missing criteria in the same conversation each time a new section of the recommendation is drafted.`, ko:`추천서의 새 부분을 쓸 때마다 같은 대화에서 빠진 기준 두 개를 반복해 알려 주기`},
      {t:`Switch to the most capable model in the same conversation so it can keep track of all the earlier instructions.`, ko:`앞선 지시를 모두 기억하도록 같은 대화에서 가장 역량 높은 모델로 바꾸기`},
      {t:`Restart the whole evaluation from the requirements step in a new conversation, without carrying anything forward.`, ko:`아무것도 가져가지 않고 새 대화에서 요구사항 단계부터 평가 전체를 다시 시작하기`}
    ],
    explain:{ good:`긴 대화에서 초반에 승인한 기준을 놓치는 것은 대화가 길어져 앞부분이 압축된 신호임. 승인된 기준·점수·미결 질문을 요약해 새 대화에서 이어 가면 이미 확인한 중간 결과를 유지하면서 작업할 수 있음. 최종 추천은 구매위원회로 나가므로 승인된 기준과 점수에 맞는지 대조해야 함.`,
      wrongs:[`<b>C:</b> 저하된 대화 안에서 지시를 반복하면 그 대화를 연장할 뿐임. 다음 부분에서 다시 빠질 수 있음.`,
              `<b>D:</b> 모델을 바꿔도 길어진 대화의 압축 문제는 해결되지 않음.`,
              `<b>E:</b> 이미 승인한 기준과 점수까지 버리고 처음부터 다시 하는 불필요한 반복임.`]},
    principle:"원칙 ⑥ 원인 진단 후 수정" },

  { ts:"1.3", lvl:"기초",
    q:`A volunteer coordinator at a food bank asks Claude for a recruitment post. She feels the draft is "off" and replies, "Make it better." The new version is almost identical. Looking closer, she realizes the post never says that volunteers can sign up for two-hour weekend shifts, which is the main selling point. What should she do NEXT?`,
    ko:`푸드뱅크의 자원봉사 담당자가 Claude에 봉사자 모집 글을 요청함. 초안이 어딘가 아쉽다고 느껴 "더 낫게 할 것"이라고 답함. 새 버전은 거의 같았음. 자세히 보니 가장 큰 장점인 주말 2시간 근무 신청이 가능하다는 내용이 글에 전혀 없었음. 다음에 무엇을 해야 하는가?`,
    opts:[
      {t:`Tell Claude to open with the two-hour weekend shift option and keep the rest of the post as it is.`, ko:`주말 2시간 근무 선택지로 글을 시작하고 나머지는 그대로 두라고 지시하기`, ok:true},
      {t:`Reply with stronger feedback such as "much better and more inspiring, please" to push for a bigger change.`, ko:`더 큰 변화를 끌어내도록 "훨씬 더 낫고 감동적으로" 같은 강한 피드백을 보내기`},
      {t:`Ask Claude to produce five very different versions and pick whichever one feels the least off to her.`, ko:`아주 다른 버전 다섯 개를 받아 가장 덜 어색하게 느껴지는 것을 고르기`},
      {t:`Start a new conversation and rewrite the whole request, since the first prompt clearly did not work at all.`, ko:`첫 프롬프트가 전혀 통하지 않았으므로 새 대화를 열고 요청 전체를 다시 쓰기`}
    ],
    explain:{ good:`"더 낫게"는 무엇을 바꿀지 정하지 않아 거의 같은 결과가 나옴. 원인(가장 큰 장점인 주말 2시간 근무 누락)을 찾았다면 그 내용을 어디에 넣을지 밝히고 나머지는 유지하라고 요청함. 막연한 반응을 구체적 지시로 바꾸는 것이 반복 수정의 출발점임.`,
      wrongs:[`<b>B:</b> 표현만 강해졌을 뿐 무엇을 바꿀지는 여전히 없음.`,
              `<b>C:</b> 빠진 정보는 다섯 버전 모두에 빠져 있을 수 있음. 원인을 이미 알았는데 결과를 고르는 데 기대는 방식임.`,
              `<b>D:</b> 글의 나머지에는 문제가 없음. 전면 재작성은 잘 된 부분까지 잃음.`]},
    principle:"원칙 ⑥ 원인 진단 후 수정" },

  { ts:"1.3", lvl:"실전",
    q:`Each month, a finance coordinator asks Claude in the team's Project to summarize department expenses. Every month the first draft includes internal test accounts and shows amounts in won instead of thousands of won, and she fixes both with follow-up messages. A colleague will take over the report next quarter. What is the BEST way to handle these fixes?`,
    ko:`재무 담당자가 매달 팀 Project에서 Claude에 부서별 경비 요약을 요청함. 매달 첫 초안에는 내부 테스트 계정이 포함되고 금액이 천 원 단위가 아닌 원 단위로 나와서, 후속 메시지로 두 가지를 고침. 다음 분기부터는 동료가 이 보고서를 맡게 됨. 이 수정 사항을 처리하는 가장 좋은 방법은 무엇인가?`,
    opts:[
      {t:`Add both rules to the Project instructions so every future summary starts with them already applied.`, ko:`앞으로의 모든 요약이 처음부터 반영하도록 두 규칙을 프로젝트 지시문에 추가하기`, ok:true},
      {t:`Keep sending the two follow-up messages each month, since the second draft always comes out correct anyway.`, ko:`두 번째 초안은 항상 맞게 나오므로 매달 후속 메시지 두 개를 계속 보내기`},
      {t:`Write the two fixes in a handover note so the colleague remembers to send the same follow-up messages each month.`, ko:`동료가 매달 같은 후속 메시지를 보내는 것을 잊지 않도록 인수인계 메모에 두 수정 사항을 적기`},
      {t:`Switch the Project to a more capable model so it learns to exclude test accounts without being told again.`, ko:`다시 말하지 않아도 테스트 계정을 빼도록 Project를 더 역량 높은 모델로 바꾸기`}
    ],
    explain:{ good:`매달 같은 수정을 반복한다면 그 수정은 대화가 아닌 설정에 있어야 함. 프로젝트 지시문에 두 규칙을 넣으면 첫 초안부터 반영되고, 업무를 넘겨받는 동료도 같은 결과를 얻음. 수정 라운드를 줄이는 동시에 인수인계 과정에서 수정이 빠지는 위험도 막음.`,
      wrongs:[`<b>B:</b> 매달 같은 수정 라운드에 시간을 씀. 수정 내용이 대화 안에만 있어 업무를 넘겨받는 동료에게 전달되지 않음.`,
              `<b>C:</b> 사람의 기억에 의존하는 방식임. 한 번이라도 잊으면 테스트 계정이 포함된 보고서가 나감.`,
              `<b>D:</b> 모델이 바뀌어도 조직의 규칙(테스트 계정 제외, 천 원 단위)은 알려 주지 않으면 알 수 없음.`]},
    principle:"원칙 ④ 반복 맥락의 설정화" },

  { ts:"1.4", lvl:"기초", multi:2,
    q:`A university career center coordinator wants Claude to draft an email inviting alumni to mentor current students for one semester. She wants a usable draft on the first try but does not want to write the email herself. Which TWO things should her prompt specify MOST clearly? (Select TWO.)`,
    ko:`대학 취업지원센터 담당자가 졸업생에게 한 학기 동안 재학생 멘토를 맡아 달라고 부탁하는 이메일 초안을 Claude에 요청하려 함. 첫 시도에 쓸 만한 초안을 원하지만 이메일을 직접 쓰고 싶지는 않음. 프롬프트에서 가장 분명하게 정해야 할 두 가지는 무엇인가? (두 개 선택)`,
    opts:[
      {t:`Who the readers are and what relationship they have with the career center.`, ko:`독자가 누구이며 취업지원센터와 어떤 관계인지`, ok:true},
      {t:`The tone to use and the structure, such as length and the order of key details.`, ko:`사용할 어조와 구성(길이, 주요 정보의 순서 등)`, ok:true},
      {t:`The exact wording of each sentence, so the draft matches her own writing style.`, ko:`초안이 담당자의 문체와 같도록 모든 문장의 정확한 표현`},
      {t:`A requirement to cite an external source for every statement made in the email.`, ko:`이메일의 모든 문장에 외부 출처를 인용하라는 요구`},
      {t:`As few constraints as possible, so Claude can explore many directions freely.`, ko:`Claude가 여러 방향을 자유롭게 시도하도록 제약을 최소로 두는 것`}
    ],
    explain:{ good:`초안 작성은 대상 독자·어조·형식을 엄격하게 정하고 문장 표현은 Claude에게 맡기는 유형임. 졸업생이 누구이며 센터와 어떤 관계인지, 어떤 어조와 구성으로 쓸지를 정하면 바로 다듬어 쓸 수 있는 초안이 나옴.`,
      wrongs:[`<b>C:</b> 모든 문장을 지정하면 직접 쓰는 것과 차이가 없어 Claude에게 맡기는 이점이 사라짐.`,
              `<b>D:</b> 인용 요구는 리서치 작업에서 엄격하게 정하는 부분임. 초대 이메일에는 맞지 않음.`,
              `<b>E:</b> 제약을 최소로 두는 방식은 브레인스토밍에 맞음. 독자에게 보낼 글은 형태를 정해야 함.`]},
    principle:"원칙 ③ 요구에 맞는 선택" },

  { ts:"1.4", lvl:"실전",
    q:`A product marketing manager ran a loose brainstorm with Claude and now has 40 varied tagline ideas for a budgeting app. She needs three to test with customers next week, and the legal team bans any claim about guaranteed savings. What is the BEST next prompt?`,
    ko:`제품 마케팅 매니저가 Claude와 조건을 느슨하게 둔 브레인스토밍을 해서 가계부 앱 슬로건 후보 40개를 다양하게 받음. 다음 주 고객 테스트에 쓸 3개가 필요하고, 법무팀은 절약 효과를 보장하는 표현을 금지함. 다음 프롬프트로 가장 좋은 것은 무엇인가?`,
    opts:[
      {t:`Give the brand voice, target user, and the savings-claim ban, and ask for a shortlist of three with reasons.`, ko:`브랜드 어조, 대상 사용자, 절약 보장 표현 금지를 주고 이유와 함께 후보 3개를 고르게 하기`, ok:true},
      {t:`Ask Claude to simply pick the three strongest taglines from the list, since it already knows all forty well.`, ko:`Claude가 40개를 이미 잘 알고 있으므로 가장 강한 슬로건 3개를 그냥 고르게 하기`},
      {t:`Ask for forty more ideas first, because a larger pool will make it easier to find three that clearly stand out.`, ko:`후보가 많을수록 눈에 띄는 3개를 찾기 쉬우므로 먼저 40개를 더 요청하기`},
      {t:`Restart the brainstorm with every requirement included from the beginning so that only usable ideas are produced.`, ko:`쓸 수 있는 아이디어만 나오도록 모든 조건을 처음부터 넣고 브레인스토밍을 다시 시작하기`}
    ],
    explain:{ good:`폭을 넓히는 단계는 이미 끝났으므로 이제는 기준을 주고 좁힐 차례임. 브랜드 어조, 대상 사용자, 법무팀의 절약 보장 표현 금지를 선정 기준으로 주고 이유와 함께 3개를 고르게 하면 테스트 후보를 설명할 수 있음. 고른 문구가 금지 표현에 걸리지 않는지는 사람이 최종 확인함.`,
      wrongs:[`<b>B:</b> 기준 없이 고르라고 하면 Claude가 임의의 기준을 씀. 법무 조건이 반영된다는 보장도 없음.`,
              `<b>C:</b> 이미 다양한 후보가 충분함. 기준 없이 수를 늘리면 고르는 일만 어려워짐.`,
              `<b>D:</b> 처음부터 조건을 모두 넣으면 아이디어 폭이 좁아짐. 넓게 모은 뒤 좁히는 순서가 맞음.`]},
    principle:"원칙 ③ 요구에 맞는 선택" }
);
