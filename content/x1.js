/* D3 추가 문항 풀 */
window.CCAO_EXTRA.push(

  { lvl:"기초", ts:"3.1",
    q:`A sales enablement manager needs a one-page comparison of the company's three service plans. Sales reps will open the page, adjust the wording for their own clients, and reuse it in future deals. Which way of receiving Claude's output BEST fits this need?`,
    ko:`세일즈 이네이블먼트 매니저가 회사의 서비스 요금제 3가지를 비교하는 한 페이지 자료가 필요함. 영업 담당자들은 이 자료를 열어 각자의 고객에 맞게 문구를 고치고 이후 영업에도 다시 씀. Claude의 결과를 받는 방식으로 가장 잘 맞는 것은 무엇인가?`,
    opts:[
      {t:`As a separate editable document block that sits beside the conversation`, ko:`대화 옆에 따로 표시되는 편집 가능한 문서 블록으로 받기`, ok:true},
      {t:`As a plain answer in the conversation that each rep copies into a personal file`, ko:`대화 안의 일반 답변으로 받고 담당자마다 각자 파일에 복사해 가기`},
      {t:`As the output of the research mode, so that plan details are checked against outside sources`, ko:`요금제 세부 내용이 외부 출처와 대조되도록 리서치 모드의 결과로 받기`},
      {t:`As a saved Memory entry, so that Claude can bring the full comparison back in any later conversation`, ko:`이후 어느 대화에서든 Claude가 비교 자료 전체를 다시 꺼낼 수 있도록 Memory 항목으로 저장하기`}
    ],
    explain:{good:`여러 사람이 열어 고치고 재사용할 산출물에는 대화와 분리된 편집 가능한 블록인 Artifacts가 맞음. 대화 흐름에 섞이지 않아 다듬고 다시 쓰기 쉬움.`,
      wrongs:[`<b>B:</b> 일반 답변은 대화 안에서 읽고 마칠 답에 맞음. 여러 사람이 열어 고치고 다시 쓸 자료라면 대화와 분리된 편집 가능한 블록이 다루기 쉬움.`,
              `<b>C:</b> 회사 자체 요금제는 외부 조사가 필요한 정보가 아님. 결과물의 형태 문제도 해결하지 못함.`,
              `<b>D:</b> Memory는 역할, 형식 선호 같은 업무 사실을 대화 사이에 이어 주는 기능임. 영업 담당자들이 열어 고칠 문서를 전달하는 방식이 아님.`]},
    principle:"원칙 ③ 요구에 맞는 선택" },

  { lvl:"실전", ts:"3.1", multi:2,
    q:`A public relations consultant must prepare, by Friday, a client briefing on how a data-privacy rule announced last month is being interpreted. She wants to cover industry association statements, law firm commentary, and news coverage, with a source for each point. The client's team will edit the briefing before sharing it internally. Which TWO choices BEST fit this task? (Select TWO.)`,
    ko:`PR 컨설턴트가 금요일까지 지난달 발표된 개인정보 규정이 어떻게 해석되고 있는지에 대한 고객 브리핑을 준비해야 함. 업계 협회 성명, 로펌 해설, 뉴스 보도를 다루고 각 내용에 출처를 붙이려 함. 고객사 팀은 브리핑을 내부에 공유하기 전에 직접 편집할 예정임. 이 일에 가장 잘 맞는 선택 두 가지는 무엇인가? (두 개 선택)`,
    opts:[
      {t:`Use the research mode to search several types of sources in steps and combine what they say.`, ko:`리서치 모드로 여러 종류의 출처를 단계적으로 검색하고 내용을 종합하기`, ok:true},
      {t:`Deliver the briefing as a separate editable document block that the client's team can revise.`, ko:`고객사 팀이 수정할 수 있도록 브리핑을 별도의 편집 가능한 문서 블록으로 전달하기`, ok:true},
      {t:`Rely on Claude's existing knowledge of privacy law, since the main principles of such rules are well known.`, ko:`이런 규정의 주요 원칙은 잘 알려져 있으므로 개인정보 법에 대한 Claude의 기존 지식에 의존하기`},
      {t:`Turn on web search, ask one short question, and use the first answer as the basis of the briefing.`, ko:`웹 검색을 켜고 짧은 질문 하나를 한 뒤 첫 답을 브리핑의 바탕으로 쓰기`},
      {t:`Choose the fastest model so that the briefing is finished well before the Friday deadline.`, ko:`금요일 마감보다 훨씬 일찍 끝내도록 가장 빠른 모델 고르기`}
    ],
    explain:{good:`지난달 발표된 규정에 대한 해석은 학습 기준 시점 이후 정보일 수 있고, 여러 종류의 출처를 비교·종합해야 하므로 Research가 맞음. 고객사 팀이 편집할 산출물이므로 Artifacts로 전달함. 규정을 다루는 자료이므로 공유 전에 주요 인용을 원문과 대조하는 확인도 필요함.`,
      wrongs:[`<b>C:</b> 지난달 발표된 규정은 학습 기준 시점 이후일 수 있어 기존 지식으로는 신뢰할 수 없음.`,
              `<b>D:</b> 웹 검색은 가벼운 확인에 맞음. 질문 하나의 첫 답으로는 여러 출처의 해석을 비교할 수 없음.`,
              `<b>E:</b> 마감까지 시간이 충분함. 해석이 필요한 고객 브리핑에서 속도를 우선할 근거가 없음.`]},
    principle:"원칙 ③ 요구에 맞는 선택" },

  { lvl:"기초", ts:"3.2",
    q:`An HR team lead wants to set one default model for the team's everyday work: drafting job postings, summarizing meeting notes, and reviewing internal policy documents. The team has no high-volume batch work, and complex cases come up only occasionally. Which approach is MOST appropriate?`,
    ko:`HR 팀 리드가 팀의 일상 업무(채용 공고 초안, 회의록 요약, 내부 정책 문서 검토)에 쓸 기본 모델 하나를 정하려 함. 팀에는 대량 일괄 작업이 없고, 복잡한 사례는 가끔만 생김. 가장 적절한 방법은 무엇인가?`,
    opts:[
      {t:`Use the balanced model as the default and move to the most capable one for the occasional complex case.`, ko:`균형형 모델을 기본으로 쓰고 가끔 생기는 복잡한 사례에는 가장 역량 높은 모델로 옮기기`, ok:true},
      {t:`Use the most capable model as the default for everything, so that no occasional complex case is ever missed.`, ko:`가끔 생기는 복잡한 사례를 놓치지 않도록 모든 일의 기본으로 가장 역량 높은 모델 쓰기`},
      {t:`Use the fastest model as the default, because job postings and meeting summaries are short documents.`, ko:`채용 공고와 회의록 요약은 짧은 문서이므로 가장 빠른 모델을 기본으로 쓰기`},
      {t:`Let each team member pick any model for each task, so that the team does not need a default at all.`, ko:`팀원마다 작업별로 아무 모델이나 고르게 하여 기본 모델을 아예 정하지 않기`}
    ],
    explain:{good:`초안, 요약, 문서 검토는 균형형 등급(Sonnet)이 기본으로 맡는 일임. 복잡한 사례가 생길 때만 상위 등급으로 올리면 품질과 비용을 함께 맞출 수 있음.`,
      wrongs:[`<b>B:</b> 가끔 생기는 복잡한 사례 때문에 모든 일상 업무를 최상위 등급으로 처리하면 비용과 대기 시간을 낭비함.`,
              `<b>C:</b> 짧은 문서와 정형 작업은 다름. 정책 문서 검토처럼 판단이 필요한 일은 가장 빠른 등급에 맞지 않음.`,
              `<b>D:</b> 기준 없이 고르면 같은 일에서도 결과 품질이 사람마다 달라짐. 기본값과 조정 기준을 정하는 편이 맞음.`]},
    principle:"원칙 ③ 요구에 맞는 선택" },

  { lvl:"실전", ts:"3.2",
    q:`A program director at a foundation used the most capable model to prepare a quarterly cost summary with growth percentages for a board presentation. The summary looks polished and well organized. Her manager says, "We used the top model, so we can skip checking the numbers this time." What is the MOST appropriate response?`,
    ko:`재단의 프로그램 디렉터가 가장 역량 높은 모델로 이사회 발표용 분기 비용 요약과 증가율을 작성함. 요약은 완성도 있고 잘 정리되어 보임. 매니저는 "최상위 모델을 썼으니 이번에는 숫자 확인을 건너뛰어도 된다"고 말함. 가장 적절한 대응은 무엇인가?`,
    opts:[
      {t:`Recalculate the figures by running the calculation on the source data, and check them before the deck goes out.`, ko:`원자료로 계산을 실제 실행해 수치를 다시 산출하고 발표 자료가 나가기 전에 확인하기`, ok:true},
      {t:`Generate the summary again with the same model and accept the numbers if both versions match each other.`, ko:`같은 모델로 요약을 다시 생성해 두 버전이 서로 일치하면 수치를 그대로 쓰기`},
      {t:`Ask the model to rate its confidence in each figure and recheck only those rated below 90 percent.`, ko:`모델에게 수치마다 확신도를 매기게 하고 90% 미만인 것만 다시 확인하기`},
      {t:`Send the deck as planned, because the most capable model is the most accurate option available for financial work.`, ko:`가장 역량 높은 모델이 재무 작업에서 가장 정확한 선택이므로 계획대로 발표 자료 보내기`}
    ],
    explain:{good:`모델 등급은 오류 가능성을 줄일 뿐 없애지 않음. 이사회 자료의 재무 수치는 위험도가 높으므로 Code Execution으로 원자료에서 다시 계산해 확인해야 함.`,
      wrongs:[`<b>B:</b> 같은 모델이 같은 오류를 반복할 수 있음. 두 결과가 일치해도 정확성의 증거가 되지 않음.`,
              `<b>C:</b> 모델이 스스로 매긴 확신도는 정확성을 보여 주지 않음. 확신 있는 어조와 정확성은 별개임.`,
              `<b>D:</b> 등급과 관계없이 생성된 수치는 그럴듯하지만 틀릴 수 있음. 고위험 자료를 검증 없이 보내는 선택임.`]},
    principle:"원칙 ② 내보내기 전 검증" },

  { lvl:"기초", ts:"3.3",
    q:`A marketing agency on usage-based billing runs three recurring jobs with the most capable model: labeling social media mentions as positive, neutral, or negative; drafting weekly client reports; and writing an annual brand strategy proposal. Monthly spending is now over budget. Which change is MOST appropriate?`,
    ko:`사용량 과금 방식을 쓰는 마케팅 대행사가 반복 업무 세 가지를 모두 가장 역량 높은 모델로 처리함. SNS 언급을 긍정·중립·부정으로 분류하는 일, 주간 고객 보고서 초안 작성, 연간 브랜드 전략 제안서 작성임. 현재 월 지출이 예산을 초과함. 가장 적절한 변경은 무엇인가?`,
    opts:[
      {t:`Move the mention labeling to the fastest model and keep the strategy proposal on the most capable one.`, ko:`언급 분류는 가장 빠른 모델로 옮기고 전략 제안서는 가장 역량 높은 모델에 두기`, ok:true},
      {t:`Move all three jobs to the fastest model, then ask account managers to correct any weak results.`, ko:`세 업무를 모두 가장 빠른 모델로 옮기고 약한 결과는 고객 담당자가 고치게 하기`},
      {t:`Keep the current setup and cut the number of weekly client reports from four to two each month.`, ko:`현재 구성을 유지하고 고객 주간 보고서를 월 4건에서 2건으로 줄이기`},
      {t:`Turn off optional features across the agency account so that each request costs less to process.`, ko:`요청당 처리 비용이 줄도록 대행사 계정 전체에서 선택 기능 끄기`}
    ],
    explain:{good:`세 가지 감정 라벨로 대량 분류하는 정형 작업은 빠른 등급으로 충분함. 연간 전략 제안서는 미묘한 판단이 필요한 고위험 산출물이므로 상위 등급을 유지함. 품질을 지키면서 낭비만 줄이는 조정임. 주간 보고서 초안은 일반 초안 작업이므로 기본 등급으로 충분한지 결과를 보고 정할 수 있음.`,
      wrongs:[`<b>B:</b> 전략 제안서까지 낮추면 품질이 가장 중요한 산출물에서 손실이 생김. 사후 수정으로 판단의 깊이를 채우기 어려움.`,
              `<b>C:</b> 고객에게 약속한 산출물을 줄이는 것은 모델 배정 문제를 해결하지 않음.`,
              `<b>D:</b> 기능을 끄는 것은 등급과 작업이 맞지 않는 원인을 다루지 않음.`]},
    principle:"원칙 ③ 요구에 맞는 선택" },

  { lvl:"실전", ts:"3.3",
    q:`A communications lead must give the CEO, within two hours, a summary of 15 leadership meeting transcripts that highlights decisions and disagreements. Earlier summaries made with the fastest model listed the decisions correctly but missed disagreements that were only implied. Her request already asks explicitly for implied disagreements. What is the BEST next step?`,
    ko:`커뮤니케이션 리드가 2시간 안에 경영진 회의 녹취록 15건의 요약을 CEO에게 전달해야 함. 요약에는 결정 사항과 의견 충돌이 드러나야 함. 앞서 가장 빠른 모델로 만든 요약은 결정 사항은 정확히 나열했지만 간접적으로만 드러난 의견 충돌을 놓쳤음. 요청에는 이미 간접적인 의견 충돌을 찾으라는 내용이 명시되어 있음. 가장 좋은 다음 단계는 무엇인가?`,
    opts:[
      {t:`Rerun the summary with a more capable model, since two hours is enough time for slower responses.`, ko:`2시간이면 느린 응답도 감당할 수 있으므로 더 역량 높은 모델로 요약을 다시 만들기`, ok:true},
      {t:`Run the fastest model three more times and merge every disagreement that appears in any of the versions.`, ko:`가장 빠른 모델을 세 번 더 돌려 어느 버전에든 나온 의견 충돌을 모두 합치기`},
      {t:`Split the transcripts across several quick conversations with the fastest model so the work finishes sooner.`, ko:`더 빨리 마치도록 녹취록을 여러 개의 짧은 대화로 나눠 가장 빠른 모델로 처리하기`},
      {t:`Add a stronger instruction such as "be very thorough about disagreements" and rerun with the same model.`, ko:`"의견 충돌을 매우 철저히 찾을 것" 같은 더 강한 지시를 넣고 같은 모델로 다시 실행하기`}
    ],
    explain:{good:`요청은 이미 충분하고, 오류는 간접적인 의견을 해석하지 못하는 깊이 부족에서 생김. 속도 위주 등급을 고른 데서 오는 증상이므로 더 역량 높은 등급으로 올림. 2시간이면 느린 응답을 감수할 수 있음.`,
      wrongs:[`<b>B:</b> 같은 깊이의 결과를 여러 번 합쳐도 해석의 깊이는 생기지 않음. 잘못 짚은 충돌까지 섞일 수 있음.`,
              `<b>C:</b> 속도는 이미 문제가 아님. 녹취록을 나누면 회의 사이에 이어지는 의견 차이를 보기가 더 어려워짐.`,
              `<b>D:</b> 요청에 이미 해당 내용이 있음. 같은 지시를 강하게 반복해도 모델 역량의 한계는 바뀌지 않음.`]},
    principle:"원칙 ⑥ 원인 진단 후 수정" },

  { lvl:"기초", ts:"3.4",
    q:`A university department head wants to brainstorm, in a standalone chat outside any Project, how to word a sensitive announcement about restructuring two teams. University policy allows this content in Claude. She does not want the conversation saved to her chat history or used to shape future suggestions. Which option BEST fits?`,
    ko:`대학의 학과장이 어떤 Project에도 속하지 않은 단독 대화에서 두 팀 개편에 관한 민감한 공지 문구를 브레인스토밍하려 함. 대학 정책은 이 내용을 Claude에 넣는 것을 허용함. 학과장은 이 대화가 채팅 이력에 저장되거나 이후 제안에 반영되기를 원하지 않음. 가장 잘 맞는 선택은 무엇인가?`,
    opts:[
      {t:`Run this brainstorm in Incognito mode so it stays out of saved chats and remembered context.`, ko:`저장된 대화와 기억된 맥락에 남지 않도록 이 브레인스토밍을 Incognito 모드로 진행하기`, ok:true},
      {t:`Tell Claude at the start of the chat to forget everything once the conversation is over.`, ko:`대화를 시작할 때 대화가 마무리되면 모든 내용을 잊으라고 Claude에게 말하기`},
      {t:`Create a new Project for the announcement so the brainstorm is kept apart from other work.`, ko:`브레인스토밍이 다른 업무와 분리되도록 공지용 새 Project 만들기`},
      {t:`Turn off Memory for the whole account and then delete every existing Memory entry afterward.`, ko:`계정 전체의 Memory를 끄고 그 뒤 기존 Memory 항목을 모두 삭제하기`}
    ],
    explain:{good:`정책상 사용은 허용되고, 이 대화만 이력과 Memory에 남기지 않으면 되는 상황임. Incognito 모드가 이 조건에 맞음. 조직의 데이터 보존 정책은 그대로 적용됨.`,
      wrongs:[`<b>B:</b> 대화 안에서 잊으라고 말하는 것은 통제 수단이 아님. 이력과 Memory에 남는지는 기능 설정으로 정해짐.`,
              `<b>C:</b> 새 Project는 맥락을 분리하지만 대화는 그 Project의 이력에 남음. 기록을 남기지 않으려는 목적과 맞지 않음.`,
              `<b>D:</b> 대화 하나 때문에 계정 전체의 Memory를 끄고 지우면 다른 업무의 유용한 연속성까지 잃음.`]},
    principle:"원칙 ⑤ 정책·사람 판단 우선" },

  { lvl:"실전", ts:"3.4", multi:2,
    q:`A market research analyst is starting, in her team's research Project, a three-day competitive analysis that needs the most capable model throughout. On a similar project last month, she worked in one very long conversation, hit her usage limit halfway through, and lost time working out where she had stopped. Which TWO practices BEST prevent this from happening again? (Select TWO.)`,
    ko:`시장조사 분석가가 팀의 리서치 Project에서 처음부터 끝까지 가장 역량 높은 모델이 필요한 3일짜리 경쟁 분석을 시작하려 함. 지난달 비슷한 프로젝트에서는 아주 긴 대화 하나로 작업하다 중간에 사용 한도에 걸렸고, 어디까지 했는지 되짚느라 시간을 잃었음. 같은 일을 가장 잘 예방하는 방법 두 가지는 무엇인가? (두 개 선택)`,
    opts:[
      {t:`Divide the analysis into stages and save each stage's interim findings to the Project's knowledge files.`, ko:`분석을 구간으로 나누고 구간별 중간 결과를 Project 지식 베이스 파일로 저장하기`, ok:true},
      {t:`Begin each new stage in a fresh conversation that opens with a summary of decisions and open questions.`, ko:`결정 사항과 남은 질문의 요약으로 시작하는 새 대화에서 다음 구간 시작하기`, ok:true},
      {t:`Keep the whole analysis in one conversation so that Claude never loses any of the earlier context.`, ko:`Claude가 이전 맥락을 하나도 잃지 않도록 분석 전체를 한 대화에서 진행하기`},
      {t:`Switch the entire analysis to the fastest model so that the usage limit is never reached.`, ko:`사용 한도에 걸리지 않도록 분석 전체를 가장 빠른 모델로 바꾸기`},
      {t:`Paste the full text of every earlier conversation into each new conversation to keep continuity.`, ko:`연속성을 유지하도록 이전 대화 전문을 매번 새 대화에 붙여넣기`}
    ],
    explain:{good:`상위 등급으로 오래 작업할 일은 구간을 나누고 중간 결과를 지식 베이스에 저장해 두면 중단되어도 이어갈 수 있음. 새 구간은 요약으로 시작해 품질이 떨어진 긴 대화를 계속 쓰지 않음.`,
      wrongs:[`<b>C:</b> 한 대화를 무한정 늘리는 방식이 지난달 문제의 원인임. 컨텍스트 저하와 한도 소진을 함께 일으킴.`,
              `<b>D:</b> 처음부터 끝까지 깊은 분석이 필요한 일임. 등급을 낮추면 한도는 아껴도 품질을 잃음.`,
              `<b>E:</b> 이전 대화 전문을 붙여넣으면 새 대화도 처음부터 용량이 참. 필요한 것은 요약임.`]},
    principle:"원칙 ④ 반복 맥락의 설정화" }
);
