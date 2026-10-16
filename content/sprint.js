/* 3주 코스: 응시일에서 거꾸로 계산한 21일 계획
   items: {t:"lesson"|"test"|"exam"|"do", pk, id, label, url}
   t:"do" = 사이트 밖에서 하는 일(url이 있으면 공식 강좌 링크) */
(function(){
  var P = "https://anthropic-partners.skilljar.com/path/claude-certified-associate-foundations/";
  function L(pk, id){ return {t:"lesson", pk:pk, id:id}; }
  function T(pk){ return {t:"test", pk:pk, id:pk+"test"}; }
  function M(n, slug, name, min){ return {t:"do", label:"Prep Course 모듈 "+n+" · "+name+" ("+min+"분)", url:P+slug}; }
  window.CCAO_SPRINT = {
    days: 21,
    desc: "하루 60~90분 기준. 공식 Prep Course 모듈을 먼저 수강하고 같은 영역의 레슨과 미니테스트로 넘어가는 순서임. 마지막 이틀은 모의고사와 복습에 배정함.",
    weeks: [
      {no:1, title:"시험 구조 · 도구 선택 · 요청 작성", desc:"시험 형태와 판단 원칙을 먼저 익히고, 업무 흐름의 앞 단계인 D3와 D1을 끝냄"},
      {no:2, title:"결과 검증 · 업무 적용", desc:"출제 비중이 가장 큰 D2(21%)와 D4(16%)를 끝냄. 이 두 영역이 전체의 3분의 1 이상임"},
      {no:3, title:"설정 · 거버넌스 · 문제 해결 · 실전", desc:"D5, D6, D7을 끝내고 모의고사와 복습으로 마무리함"}
    ],
    plan: [
      {d:1, w:1, min:60, title:"시험 구조와 판단 원칙", why:"출제 영역과 비중, 문항 구조, 판단 원칙 6을 먼저 확인함. 이후 모든 해설이 이 원칙을 기준으로 함.", items:[L("p0","p0l1"), L("p0","p0l2")]},
      {d:2, w:1, min:80, title:"시험 영어와 공식 모듈 1", why:"질문 지시어와 조건 표현을 익힌 뒤, 공식 강좌 모듈 1로 D3 범위를 훑음.", items:[L("p0","p0l3"), M(1,"claude-platform-model-foundations","Claude Platform & Model Foundations",59)]},
      {d:3, w:1, min:70, title:"D3 ① 기능 선택과 모델 등급", items:[L("p1","p1c1"), L("p1","p1c2")]},
      {d:4, w:1, min:80, title:"D3 ② 모델 선택과 컨텍스트 관리 + 미니테스트", items:[L("p1","p1c3"), L("p1","p1c4"), T("p1")]},
      {d:5, w:1, min:80, title:"D1 시작: 공식 모듈 2와 프롬프트 구성", items:[M(2,"prompting-task-execution","Prompting & Task Execution",53), L("p2","p2c1")]},
      {d:6, w:1, min:70, title:"D1 ② 작업 분해와 반복 수정", items:[L("p2","p2c2"), L("p2","p2c3")]},
      {d:7, w:1, min:70, title:"D1 ③ 작업 유형별 전략 + 미니테스트", items:[L("p2","p2c4"), T("p2")]},
      {d:8, w:2, min:75, title:"D2 시작: 공식 모듈 3", why:"D2는 출제 비중이 가장 큰 영역임. 공식 모듈 3(74분)을 하루에 집중해서 수강함.", items:[M(3,"evaluating-validating-claudes-output","Evaluating & Validating Claude's Output",74)]},
      {d:9, w:2, min:75, title:"D2 ① 정확성·완전성과 환각·편향", items:[L("p3","p3c1"), L("p3","p3c2")]},
      {d:10, w:2, min:75, title:"D2 ② 사실 확인과 사람 검토 기준", items:[L("p3","p3c3"), L("p3","p3c4")]},
      {d:11, w:2, min:90, title:"D2 ③ 독자별 수정과 출력 형식 + 미니테스트", items:[L("p3","p3c5"), L("p3","p3c6"), T("p3")]},
      {d:12, w:2, min:90, title:"D4 시작: 공식 모듈 4와 요구사항 분석", items:[M(4,"workflow-integration-solution-design","Workflow Integration & Solution Design",63), L("p4","p4c1")]},
      {d:13, w:2, min:70, title:"D4 ② 리서치·기획과 설계 반복", items:[L("p4","p4c2"), L("p4","p4c3")]},
      {d:14, w:2, min:85, title:"D4 ③ 업무 흐름 통합과 이해관계자 설명 + 미니테스트", items:[L("p4","p4c4"), L("p4","p4c5"), T("p4")]},
      {d:15, w:3, min:90, title:"D5: 공식 모듈 5와 Projects 설정", items:[M(5,"configuration-knowledge-management","Configuration & Knowledge Management",47), L("p5","p5c1"), L("p5","p5c2")]},
      {d:16, w:3, min:80, title:"D5 ② 지시문 작성과 설정 관리 + 미니테스트", items:[L("p5","p5c3"), L("p5","p5c4"), T("p5")]},
      {d:17, w:3, min:90, title:"D6: 공식 모듈 6과 사용 사례·데이터 판단", items:[M(6,"governance-risk-responsible-use","Governance, Risk & Responsible Use",55), L("p6","p6c1"), L("p6","p6c2")]},
      {d:18, w:3, min:80, title:"D6 ② 조직 정책과 윤리 + 미니테스트", items:[L("p6","p6c3"), L("p6","p6c4"), T("p6")]},
      {d:19, w:3, min:90, title:"D7: 공식 모듈 7과 문제 해결 전체 + 미니테스트", items:[M(7,"troubleshooting-optimization","Troubleshooting & Optimization",30), L("p7","p7c1"), L("p7","p7c2"), L("p7","p7c3"), T("p7")]},
      {d:20, w:3, min:130, title:"모의고사 1회", why:"120분을 연속으로 확보한 뒤 응시함. 종료 후 영역별 정답률에서 75% 미만 영역을 확인함.", items:[{t:"exam", pk:"p8", id:"exam"}]},
      {d:21, w:3, min:60, title:"시험 전날 복습", why:"새 내용을 보지 않음. 판단 원칙·선택표와 모의고사 오답 해설만 다시 읽음.", items:[{t:"do", label:"부록: 판단 원칙 · 상황별 선택표", go:"appendix"}, {t:"do", label:"모의고사 오답 해설 다시 읽기 (모의고사 결과 화면)", go:"exam"}]}
    ]
  };
})();
