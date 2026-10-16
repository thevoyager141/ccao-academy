/* D5 추가 문항 풀 */
window.CCAO_EXTRA.push(
  { lvl:"기초", ts:"5.1",
    q:`A school administrator needs a short thank-you note to a guest speaker after tomorrow's parent seminar. The school rarely invites outside speakers, and she does not expect to write a similar note again this year. A colleague suggests first creating a dedicated Project with instructions and files for the note. Which approach BEST fits this task?`,
    ko:`한 학교 행정 담당자가 내일 학부모 세미나가 끝난 뒤 초청 연사에게 보낼 짧은 감사 메모가 필요함. 학교는 외부 연사를 거의 초청하지 않고, 올해 비슷한 메모를 다시 쓸 일도 없을 것으로 봄. 동료는 먼저 지시문과 파일을 갖춘 전용 Project를 만들자고 제안함. 이 작업에 가장 알맞은 방식은 무엇인가?`,
    opts:[
      {t:`Write it in a regular chat, giving the speaker's topic, the audience and the tone she wants in one clear request.`, ko:`일반 대화에서 연사의 발표 주제, 청중, 원하는 어조를 한 번의 명확한 요청에 담아 작성하기`, ok:true},
      {t:`Create the dedicated Project with instructions and a tone guide, so any future notes stay consistent with this one.`, ko:`지시문과 어조 가이드를 갖춘 전용 Project를 만들어 이후 메모가 이번 것과 일관되게 하기`},
      {t:`Build a reusable Skill for thank-you notes at the account level, so the format can be applied in any Project later.`, ko:`계정 수준에서 감사 메모용 Skill을 만들어 나중에 어느 Project에서든 형식을 적용할 수 있게 하기`},
      {t:`Use Research to gather background on the speaker from several sources before asking Claude to draft the note.`, ko:`메모 초안을 요청하기 전에 Research로 여러 출처에서 연사 배경을 조사하기`}
    ],
    explain:{ good:`반복되지 않고, 배경 맥락을 다시 쓸 일도 없고, 고정 형식도 필요 없는 일회성 작업임. 설정 시간이 회수되지 않으므로 일반 대화에서 필요한 조건을 한 번에 주는 것이 맞음.`,
      wrongs:[
        `<b>B:</b> Project는 반복되는 작업에서 설정 시간이 회수될 때 의미가 있음. 다시 쓸 일이 없는 메모에는 과한 설정임.`,
        `<b>C:</b> Skill은 여러 번 반복되는 절차를 담는 곳임. 한 번 쓰는 메모에 절차를 만들 이유가 없음.`,
        `<b>D:</b> 여러 출처를 깊이 종합할 과업이 아님. 연사 정보는 담당자가 이미 알고 있는 내용으로 충분함.`
      ]},
    principle:"원칙 ③ 요구에 맞는 선택" },

  { lvl:"실전", ts:"5.1", multi:2,
    q:`Two trainers at a manufacturing company work in the same shared Project for onboarding materials. Yesterday Trainer A agreed on a new module order with Claude in one conversation. Today Trainer B opened a new conversation in the same Project, and Claude's suggestions ignore that order. B suspects the Project is broken. Which TWO statements BEST explain the situation or fix it? (Select TWO.)`,
    ko:`한 제조사의 교육 담당자 두 명이 신규 입사자 교육 자료용 Project 하나를 공유해 함께 씀. 어제 교육 담당자 A가 한 대화에서 Claude와 새 모듈 순서를 정함. 오늘 교육 담당자 B가 같은 Project에서 새 대화를 열었는데 Claude의 제안이 그 순서를 반영하지 않음. B는 Project가 고장 났다고 의심함. 상황을 가장 잘 설명하거나 해결하는 두 가지는 무엇인가? (두 개 선택)`,
    opts:[
      {t:`Conversations in one Project share its instructions and files, but not the content of each other's chats.`, ko:`한 Project 안의 대화들은 지시문과 파일은 공유하지만 서로의 대화 내용은 공유하지 않음`, ok:true},
      {t:`Record the agreed module order in the Project's instructions or files, so every new conversation starts from it.`, ko:`합의한 모듈 순서를 Project 지시문이나 파일에 기록해 모든 새 대화가 그 순서에서 출발하게 하기`, ok:true},
      {t:`B should switch to the same model A used yesterday, because the module order was stored with that model.`, ko:`모듈 순서가 그 모델에 저장되었으므로 B가 어제 A가 쓴 모델로 바꾸기`},
      {t:`The Project has a fault, so B should create a new Project and upload the same files there again.`, ko:`Project에 결함이 있으므로 B가 새 Project를 만들어 같은 파일을 다시 올리기`},
      {t:`B should ask Claude to look up the order in A's conversation, since chats in one Project can read each other.`, ko:`한 Project의 대화끼리는 서로 내용을 볼 수 있으므로 B가 Claude에게 A의 대화에서 순서를 찾아보라고 요청하기`}
    ],
    explain:{ good:`같은 Project의 대화들은 지시문과 지식 베이스를 공유하지만 다른 대화의 내용은 보지 못함. 팀이 함께 따라야 할 결정은 공유되는 설정 위치(지시문이나 파일)에 적어야 모든 대화의 출발점이 됨.`,
      wrongs:[
        `<b>C:</b> 대화에서 정한 내용은 모델에 저장되지 않음. 모델을 바꿔도 다른 대화의 내용은 보이지 않음.`,
        `<b>D:</b> 정상적인 동작을 결함으로 오진한 대응임. 새 Project에서도 같은 일이 반복됨.`,
        `<b>E:</b> 같은 Project 안의 대화는 서로의 내용을 보지 못함. 다른 대화에서 정한 결정은 지시문이나 파일에 적어야 모든 대화가 참조함.`
      ]},
    principle:"원칙 ④ 반복 맥락의 설정화" },

  { lvl:"기초", ts:"5.2",
    q:`A corporate communications team's Project holds 14 files, including three versions of the same press kit (first draft, second draft and final) and a logo usage guide that was replaced last year. Claude sometimes quotes a CEO statement from the first draft, which was later rewritten before release. What should the team do FIRST?`,
    ko:`한 기업 커뮤니케이션팀의 Project에 파일 14개가 있음. 같은 보도 자료 키트의 세 버전(1차 초안, 2차 초안, 최종본)과 작년에 대체된 로고 사용 가이드가 포함되어 있음. Claude가 배포 전에 다시 쓰인 1차 초안의 대표이사 발언을 가끔 인용함. 팀이 가장 먼저 할 일은 무엇인가?`,
    opts:[
      {t:`Delete both drafts and the replaced logo guide from the Project, so each topic is covered by one current file only.`, ko:`두 초안과 대체된 로고 가이드를 Project에서 삭제해 주제마다 현재 파일 하나만 남기기`, ok:true},
      {t:`Rename the final press kit to "FINAL_USE_THIS" so Claude can tell which version is the right one to quote.`, ko:`최종본 파일명을 "FINAL_USE_THIS"로 바꿔 Claude가 인용할 버전을 구분하게 하기`},
      {t:`Add a line to the instructions telling Claude to quote only the most recent file when versions differ, and keep all three.`, ko:`버전이 다르면 가장 최근 파일만 인용하라는 문장을 지시문에 넣고 세 파일은 모두 유지하기`},
      {t:`Ask Claude to name the file behind each quote and fix the wrong quotes by hand whenever they appear.`, ko:`인용마다 근거 파일을 밝히게 하고 틀린 인용이 나올 때마다 손으로 고치기`}
    ],
    explain:{ good:`같은 문서의 여러 버전이 함께 있으면 Claude가 낡은 버전을 인용할 수 있음. 초안과 대체된 가이드를 지워 주제마다 현재 파일 하나만 남기면 원인이 사라짐.`,
      wrongs:[
        `<b>B:</b> 파일명으로 구분해도 초안 내용은 여전히 지식 베이스에 남아 인용될 수 있음. 부분적인 조치임.`,
        `<b>C:</b> 판단을 Claude에게 맡기는 방식이고 구버전은 그대로 남음. 원인을 없애는 조치가 아님.`,
        `<b>D:</b> 출처 표시는 검증에 도움이 되지만, 원인을 그대로 두고 오류를 매번 사람이 고치는 반복 작업이 남음.`
      ]},
    principle:"원칙 ④ 반복 맥락의 설정화" },

  { lvl:"실전", ts:"5.2", multi:2,
    q:`A finance operations analyst wants to connect a shared mailbox so Claude can summarize open vendor invoice disputes each week. Many messages in that mailbox include vendors' bank account details and the personal phone numbers of their staff. Her manager is eager to start this week. Which TWO actions are MOST appropriate? (Select TWO.)`,
    ko:`한 재무 운영 분석가가 매주 미결 협력업체 송장 분쟁을 요약하도록 공용 메일함을 Claude에 연결하려 함. 그 메일함의 메일 상당수에 협력업체 계좌 정보와 직원 개인 전화번호가 들어 있음. 관리자는 이번 주에 바로 시작하길 원함. 가장 적절한 행동 두 가지는 무엇인가? (두 개 선택)`,
    opts:[
      {t:`Check the organization's policy on connecting mailboxes that contain financial account details before connecting it.`, ko:`연결하기 전에 계좌 정보가 담긴 메일함 연결에 관한 조직 정책을 확인하기`, ok:true},
      {t:`Limit the connection to what the dispute summary needs instead of connecting every account she can access.`, ko:`접근 가능한 모든 계정을 연결하지 않고 분쟁 요약에 필요한 범위로 연결을 제한하기`, ok:true},
      {t:`Connect it now and add an instruction telling Claude not to retain any account numbers it reads.`, ko:`지금 연결하고 읽은 계좌 번호는 보관하지 말라는 지시문을 추가하기`},
      {t:`Run the weekly summary in Incognito mode, which makes the mailbox safe to connect without further checks.`, ko:`Incognito 모드로 주간 요약을 실행하면 추가 확인 없이 메일함을 연결해도 안전하므로 그렇게 하기`},
      {t:`Connect it this week, since internal finance analysis is an approved use of Claude in general.`, ko:`내부 재무 분석은 일반적으로 승인된 Claude 사용이므로 이번 주에 연결하기`}
    ],
    explain:{ good:`계좌 정보처럼 민감한 데이터가 들어 있는 소스는 연결 전에 그 데이터가 이 경로로 들어와도 되는지 정책부터 확인함. 허용되더라도 작업에 필요한 범위만 연결해 노출을 최소화함.`,
      wrongs:[
        `<b>C:</b> "보관하지 말 것"이라는 지시는 통제 수단이 아님. 데이터는 이미 연결된 경로로 들어옴.`,
        `<b>D:</b> Incognito 모드는 이력과 Memory에 남길지를 정할 뿐임. 그 데이터가 여기에 들어와도 되는지는 확인해 주지 않음.`,
        `<b>E:</b> 일반적인 사용 승인이 특정 민감 데이터의 반입 허용을 뜻하지 않음. 데이터별 정책 확인이 필요함.`
      ]},
    principle:"원칙 ⑤ 정책·사람 판단 우선" },

  { lvl:"기초", ts:"5.3",
    q:`A regional sales director at a B2B software company is writing the instruction for a Project that summarizes recorded sales calls. Account executives complain that summaries vary in structure and sometimes mention discount levels nobody actually offered. Reviewers want to check each summary in under a minute. Which instruction is MOST likely to meet these needs?`,
    ko:`한 B2B 소프트웨어 회사의 지역 영업 이사가 녹음된 영업 통화를 요약하는 Project의 지시문을 작성함. 영업 담당자들은 요약 구조가 매번 다르고, 실제로 제안하지 않은 할인율이 가끔 들어간다고 불만을 제기함. 검토자는 요약 한 건을 1분 안에 확인하고 싶어 함. 이 요구를 충족할 가능성이 가장 높은 지시문은 무엇인가?`,
    opts:[
      {t:`"Start with deal stage and next step, list objections in the customer's words, and mark any price not in the transcript as [unconfirmed]."`, ko:`"거래 단계와 다음 행동으로 시작하고, 반대 의견은 고객의 표현대로 나열하며, 녹취록에 없는 가격은 [미확인]으로 표시할 것"`, ok:true},
      {t:`"Summarize every call thoroughly and professionally, always highlighting whatever matters most for moving the deal forward."`, ko:`"모든 통화를 꼼꼼하고 전문적으로 요약하고, 거래 진행에 가장 중요한 것을 항상 강조할 것"`},
      {t:`"Act as a world-class sales strategist with twenty years of experience and produce sharp, insightful summaries every time."`, ko:`"20년 경력의 세계적인 영업 전략가로서 매번 날카롭고 통찰력 있는 요약을 작성할 것"`},
      {t:`"Keep every summary short and easy to scan, but make sure that nothing important from the call is ever left out."`, ko:`"모든 요약을 짧고 훑어보기 쉽게 쓰되, 통화의 중요한 내용은 절대 빠뜨리지 말 것"`}
    ],
    explain:{ good:`시작 항목, 나열 방식, 미확인 가격 표시처럼 확인 가능한 조건이 있어야 누가 읽어도 같은 뜻이 됨. 구조가 고정되면 검토자는 정해진 위치만 확인하면 되고, [미확인] 표시는 제안하지 않은 할인율이 사실처럼 적히는 문제를 막음.`,
      wrongs:[
        `<b>B:</b> "꼼꼼하게", "가장 중요한 것" 모두 사람마다 다르게 해석됨. 구조와 가격 처리 방법이 정해지지 않음.`,
        `<b>C:</b> 역할 부여만으로는 출력 구조와 검증 규칙이 정해지지 않음. 형용사 위주의 모호한 지시임.`,
        `<b>D:</b> "짧게"와 "빠짐없이"가 서로 충돌하고 판단 기준이 없음. 무엇이 중요한지 정의되지 않음.`
      ]},
    principle:"원칙 ① 요청의 구체화" },

  { lvl:"실전", ts:"5.3",
    q:`A university admissions office uses one Project for weekly applicant reports. Over time its instruction field has grown to four pages: tone rules, a nine-step routine for building the statistics table, and the full list of 120 program codes. Staff find it hard to edit, and Claude sometimes skips steps in the routine. Which restructuring is MOST appropriate?`,
    ko:`한 대학 입학처가 주간 지원자 보고서용 Project 하나를 씀. 시간이 지나며 지시문이 4쪽으로 늘어남. 어조 규칙, 통계표를 만드는 9단계 절차, 학과 코드 120개 전체 목록이 모두 들어 있음. 직원들은 수정하기 어렵다고 하고, Claude는 가끔 절차의 단계를 건너뜀. 가장 적절한 재구성은 무엇인가?`,
    opts:[
      {t:`Keep the tone rules in the instructions, move the program codes into an uploaded file, and turn the nine steps into a Skill.`, ko:`어조 규칙은 지시문에 두고, 학과 코드는 업로드 파일로 옮기고, 9단계는 Skill로 만들기`, ok:true},
      {t:`Delete the routine and the code list to shorten the instructions, and rely on Claude's general knowledge of admissions reporting.`, ko:`지시문을 줄이기 위해 절차와 코드 목록을 지우고 입학 보고서에 대한 Claude의 일반 지식에 맡기기`},
      {t:`Split the content into three separate Projects, one each for tone, the routine and the codes, and switch between them weekly.`, ko:`어조, 절차, 코드용으로 Project를 세 개 나누고 매주 그 사이를 오가며 쓰기`},
      {t:`Move all four pages into one uploaded document and leave the instruction field empty so editing happens in a single place.`, ko:`4쪽 전체를 업로드 문서 하나로 옮기고 지시문 칸은 비워 한곳에서만 수정하게 하기`}
    ],
    explain:{ good:`규칙은 지시문, 참고 자료는 지식 베이스, 단계가 있는 절차는 Skill에 두는 것이 기본 배치임. 절차를 지시문에 길게 쓰면 단계가 빠지고, 참고 자료를 지시문에 넣으면 지시문이 지나치게 길어져 수정이 어려워짐. 나누어 두면 각각을 따로 고칠 수 있음.`,
      wrongs:[
        `<b>B:</b> 학과 코드와 절차는 Claude가 스스로 알 수 없는 조직 고유 정보임. 지우면 결과가 틀려짐.`,
        `<b>C:</b> 하나의 작업에 필요한 설정을 Project 여러 개로 흩으면 어느 대화에서도 전체가 갖춰지지 않음.`,
        `<b>D:</b> 행동 규칙까지 참고 문서로 옮기면 매 대화에 적용된다는 보장이 없음. 절차를 건너뛰는 문제도 남음.`
      ]},
    principle:"원칙 ④ 반복 맥락의 설정화" },

  { lvl:"기초", ts:"5.4",
    q:`A freelance copywriter works in a Project for a long-term client. For the past three months, Claude has kept addressing drafts to a marketing manager who moved to another team in the spring. That manager's name does not appear anywhere in the Project's instructions or files. Where should the copywriter look FIRST, and what should she do?`,
    ko:`한 프리랜서 카피라이터가 장기 고객사 업무를 Project에서 처리함. 지난 석 달 동안 Claude가 봄에 다른 팀으로 옮긴 마케팅 매니저를 초안 수신자로 계속 적음. 그 매니저의 이름은 Project 지시문이나 파일 어디에도 없음. 카피라이터가 가장 먼저 확인할 곳과 할 일은 무엇인가?`,
    opts:[
      {t:`Check what the Project has remembered about past contacts, then edit or delete the outdated entry about that manager.`, ko:`Project에 기억된 과거 담당자 정보를 확인하고, 그 매니저에 대한 낡은 항목을 수정하거나 삭제하기`, ok:true},
      {t:`Add an instruction naming the new contact and telling Claude to disregard the previous manager, leaving everything else unchanged.`, ko:`새 담당자를 적고 이전 매니저는 무시하라는 지시문을 추가하고 나머지는 그대로 두기`},
      {t:`Switch the Project's conversations to Incognito mode, so that names from earlier chats can no longer be carried forward.`, ko:`Project 대화를 Incognito 모드로 바꿔 이전 대화의 이름이 더 이상 이어지지 않게 하기`},
      {t:`Start every draft in a brand-new conversation and paste the correct contact name at the top of each request.`, ko:`초안마다 완전히 새 대화에서 시작하고 요청 첫머리에 올바른 담당자 이름을 붙여넣기`}
    ],
    explain:{ good:`지시문과 파일에 없는 이름이 여러 대화에 걸쳐 계속 나온다면 Memory에 남은 항목이 출처일 가능성이 높음. 낡은 항목을 고치거나 지우면 원인이 사라짐. 새 담당자 정보는 Claude가 스스로 알 수 없으므로 함께 추가함.`,
      wrongs:[
        `<b>B:</b> 새 담당자를 알리는 것은 필요하지만, 낡은 Memory 항목을 두면 지시와 기억이 충돌함. 원인은 그대로임.`,
        `<b>C:</b> Incognito 모드는 Project 밖 단독 대화에 적용되는 기능임. 이미 쌓인 Memory 항목을 고치지도 않음.`,
        `<b>D:</b> Memory는 새 대화에도 이어짐. 매번 붙여넣는 반복 작업만 늘어남.`
      ]},
    principle:"원칙 ⑥ 원인 진단 후 수정" },

  { lvl:"실전", ts:"5.4", multi:2,
    q:`A grants team lead at a university owns a proposal Project that she shares with eight staff members. Staff complain that the budget section it drafts is hard to follow, and several now add their own workaround prompts. The lead has drafted a new budget-section instruction. Which TWO steps are MOST appropriate when rolling out the change? (Select TWO.)`,
    ko:`한 대학의 연구비 지원팀 리드가 직원 8명과 공유해 쓰는 제안서 Project를 관리함. 직원들은 이 Project가 쓰는 예산 섹션을 이해하기 어렵다고 불만을 제기하고, 몇 명은 자기만의 보정 프롬프트를 덧붙여 씀. 리드는 새 예산 섹션 지시문 초안을 만들었음. 변경을 적용할 때 가장 적절한 단계 두 가지는 무엇인가? (두 개 선택)`,
    opts:[
      {t:`Try the new instruction on a few real proposals alongside the current one before making it the default for everyone.`, ko:`모두의 기본값으로 정하기 전에 실제 제안서 몇 건에서 현재 지시문과 나란히 새 지시문을 시험하기`, ok:true},
      {t:`Tell the staff what changed and why, so they stop adding workaround prompts that could conflict with the new rule.`, ko:`무엇이 왜 바뀌었는지 직원들에게 알려, 새 규칙과 충돌할 수 있는 보정 프롬프트를 그만 쓰게 하기`, ok:true},
      {t:`Apply the change for all staff immediately, since the complaints already show the old instruction is clearly wrong.`, ko:`불만이 이미 기존 지시문의 문제를 보여 주므로 모든 직원에게 즉시 적용하기`},
      {t:`Ask each person to save their own preferred budget wording to memory and leave the shared instruction unchanged.`, ko:`공유 지시문은 그대로 두고 직원마다 자기가 선호하는 예산 문구를 Memory에 저장하게 하기`},
      {t:`Switch the Project to the most capable model at the same time, so the new instruction is followed more closely.`, ko:`새 지시문을 더 잘 따르도록 같은 시점에 Project를 가장 성능 높은 모델로 바꾸기`}
    ],
    explain:{ good:`공유 설정의 변경은 모든 사용자의 결과를 바꿈. 몇 번의 실제 작업에서 기존 방식과 비교해 효과를 확인한 뒤 확정해야 잘못된 변경이 모두에게 퍼지지 않음. 사용자에게 변경 내용을 알리면 각자 쓰던 보정 프롬프트가 새 규칙과 충돌하는 일을 막을 수 있음.`,
      wrongs:[
        `<b>C:</b> 불만은 문제가 있다는 신호일 뿐 새 지시문이 더 낫다는 증거가 아님. 검증 없이 확정하면 실수도 모두에게 퍼짐.`,
        `<b>D:</b> 직원마다 다른 문구를 저장하게 하므로 팀 공통 기준이 생기지 않음. 지금의 보정 프롬프트를 다른 곳으로 옮긴 것과 같음. 팀이 함께 따를 문구는 공유 지시문에 둠.`,
        `<b>E:</b> 두 가지를 동시에 바꾸면 어떤 변경이 효과를 냈는지 알 수 없음. 모델 변경은 지시문 문제와 관계가 없음.`
      ]},
    principle:"원칙 ④ 반복 맥락의 설정화" }
);
