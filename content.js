// ============================================================
// 포트폴리오 내용 편집 파일 — 보통 이 파일만 수정하면 됩니다.
// 모든 인물 정보, 프로젝트, 기술 설명은 예시입니다.
// 1. 따옴표 안의 내용을 수정하고 저장한 뒤 브라우저를 새로고침하세요.
// 2. 항목 사이 쉼표와 { }, [ ] 기호는 유지하세요.
// 3. 문장 안에서 큰따옴표를 쓰려면 \"처럼 입력하세요.
// 4. 항목 추가: 같은 목록 안의 { ... } 묶음을 복사하고 쉼표로 구분합니다.
// 5. 삭제: { ... } 전체를 삭제합니다. 목록을 비우려면 []로 둡니다.
// 6. 색상은 theme.css에서 수정합니다. 자세한 예시는 편집가이드.md 참고.
// ============================================================
window.PORTFOLIO = {
  // 이름: 사이드바, 자기소개, 하단에 함께 반영됩니다.
  "name": "이름",
  // 메인 제목. 줄바꿈은 문자열 안에 \n으로 입력합니다.
  "headline": "플레이의 재미를,\n코드로 만듭니다.",
  // 자기소개 본문. 아래 예시를 본인의 소개로 교체하세요.
  "bio": "Unreal Engine과 C++로 게임을 만드는 프로그래머입니다.\n작은 상호작용부터 하나의 시스템까지, 더 나은 플레이 경험을 고민합니다.",
  // 기술 섹션. { ... } 한 묶음을 복사하면 행이 추가됩니다. title=분야, description=할 수 있는 일, detail=구체적인 방법.
  "skills": [
    {
      "title": "C++ / 구조 설계",
      "description": "캐릭터의 기능을 컴포넌트로 나누고 공통 로직을 재사용합니다.",
      "detail": "Interface로 공통 동작을 정의하고 Delegate로 상태 변화를 전달합니다."
    },
    {
      "title": "전투 / 어빌리티",
      "description": "GAS를 활용해 스킬 발동 조건과 자원 소모, 쿨다운을 구현합니다.",
      "detail": "Gameplay Ability와 Gameplay Effect의 역할을 나누고 Gameplay Tag로 상태를 구분합니다."
    },
    {
      "title": "AI / 행동 제어",
      "description": "적이 플레이어를 감지하고 추적·공격하도록 행동 흐름을 구성합니다.",
      "detail": "AI Perception으로 대상을 감지하고 Blackboard의 값에 따라 Behavior Tree를 전환합니다."
    },
    {
      "title": "UI / 데이터",
      "description": "아이템 정보를 화면에 표시하고 상태 변화에 맞춰 UI를 갱신합니다.",
      "detail": "Data Asset에 설정을 분리하고 UMG 위젯을 이벤트 기반으로 갱신합니다."
    },
    {
      "title": "디버깅 / 협업",
      "description": "문제를 재현하고 실행 흐름을 추적하며 변경 이력을 관리합니다.",
      "detail": "Visual Studio 중단점과 로그로 원인을 확인하고 Git 브랜치로 기능 단위 작업을 관리합니다."
    }
  ],
  // 자격증 목록. name=자격증명, issuer=발급 기관, date=취득 시기. 항목이 없으면 []로 둡니다.
  "certifications": [
    {
      "name": "자격증 이름",
      "issuer": "발급 기관",
      "date": "취득 연월",
      "description": "자격증 관련 설명을 입력하세요. (예시)"
    }
  ],
  // 경력 목록. organization=회사/기관, role=직무, period=기간. 게임업계 외 경력도 입력할 수 있습니다.
  "experience": [
    {
      "organization": "회사 또는 기관명",
      "role": "직무 / 담당 역할",
      // 기간. 프로젝트에서는 소개 요약과 상세 소개에 함께 표시됩니다. 빈 문자열이면 생략합니다.
      "period": "근무 시작 – 종료",
      "description": "담당 업무와 경험을 입력하세요. 게임업계 외 경력도 자유롭게 작성할 수 있습니다. (예시)"
    }
  ],
  // 프로젝트 목록. 표시 순서는 배열 순서와 같습니다. 프로젝트 한 묶음을 복사하면 사이드바와 소개 목록에도 자동 추가됩니다.
  "projects": [
    {
      // 프로젝트 이동 주소. 영문 소문자와 하이픈 사용 권장. 다른 프로젝트와 중복되지 않게 지정하세요.
      "id": "project-a",
      "name": "Project A",
      // 프로젝트 제목 위의 작은 분류 문구.
      "category": "ACTION RPG · 예시 프로젝트",
      "description": "스킬과 전투의 흐름에 집중한 3인칭 액션 RPG",
      "period": "2026.01 – 2026.04 (예시)",
      // 사용 엔진과 버전. 예: Unreal Engine 5.5. 빈 문자열이면 생략합니다.
      "engine": "Unreal Engine 5.4 (예시)",
      // 대표 이미지 경로. assets 폴더에 파일을 넣고 assets/파일명.jpg처럼 입력하세요.
      "image": "assets/project-placeholder.svg",
      // 이미지를 볼 수 없을 때 전달할 화면 설명.
      "imageAlt": "대표 이미지가 들어갈 자리를 보여주는 추상적인 게임 공간 일러스트",
      // 대표 이미지 하단의 작은 설명. 필요 없으면 빈 문자열로 둡니다.
      "imageCaption": "PROJECT IMAGE / 실제 프로젝트 이미지로 교체",
      // 영상 보기 버튼 주소. https://... 주소를 입력하세요. 빈 문자열은 준비 중으로 표시됩니다.
      "videoUrl": "",
      // GitHub 저장소 주소. 예: https://github.com/사용자명/저장소명
      "githubUrl": "",
      // 이 프로젝트만의 기술 스택. 문자열을 추가하면 네모 태그가 늘어납니다.
      "stack": [
        "Unreal Engine 5",
        "C++",
        "Blueprint",
        "GAS"
      ],
      // 핵심 구현 목록. 구현 한 묶음을 복사하면 접기/펼치기 항목이 추가됩니다.
      "implementations": [
        {
          "title": "GAS 기반 전투 시스템",
          // 접힌 상태에서도 보이는 한두 줄 요약.
          "summary": "스킬 발동, 쿨다운, 자원 소모를 공통 구조로 관리합니다.",
          // 펼친 상세 본문. title=소제목, text=설명. 아래 예시처럼 설계 고민도 블록으로 추가할 수 있습니다.
          // { "title": "설계 고민과 선택", "text": "상황 → 비교한 선택지 → 선택 이유 → 결과와 한계" }
          "blocks": [
            {
              "title": "구현 목표",
              "text": "새로운 스킬을 추가해도 기존 전투 로직을 반복해서 작성하지 않는 구조를 목표로 합니다. 이 내용은 구성 예시이며 실제 구현 경험으로 교체해 주세요."
            },
            {
              "title": "구현 방식 · 설계 이유",
              "text": "Gameplay Ability는 실행 흐름을, Gameplay Effect는 자원 변화와 쿨다운을 담당하도록 나눕니다. 스킬별 설정은 데이터로 분리해 변경 범위를 줄입니다."
            },
            {
              "title": "문제 해결 · 결과",
              "text": "발생한 문제와 재현 조건, 원인 분석, 선택한 해결책을 작성합니다. 비교 영상이나 측정 결과가 있다면 함께 첨부할 수 있습니다."
            }
          ],
          // 이 구현에 관련된 기술 태그. 프로젝트 전체의 stack과는 별개입니다.
          "tags": [
            "Gameplay Ability",
            "Gameplay Effect",
            "Gameplay Tags"
          ],
          // true: 처음부터 펼쳐서 표시 / false: 접어서 표시. 강조할 구현에 true를 지정하세요. 현재 상태는 유지했습니다.
          "featured": false
        },
        {
          "title": "상태에 반응하는 적 AI",
          "summary": "탐지부터 추적과 공격까지, 상황에 따라 행동을 전환합니다.",
          "blocks": [
            {
              "title": "구현 방식",
              "text": "Behavior Tree와 Blackboard의 역할, 타깃 탐지와 공격 전환 조건을 설명하는 영역입니다."
            },
            {
              "title": "문제 해결",
              "text": "AI 동작을 디버깅했던 과정과 해결 결과를 실제 경험으로 작성해 주세요."
            }
          ],
          "tags": [
            "Behavior Tree",
            "AI Perception"
          ],
          "featured": false
        },
        {
          "title": "데이터 기반 인벤토리",
          "summary": "아이템 데이터와 화면 표시를 분리해 확장하기 쉽게 구성합니다.",
          "blocks": [
            {
              "title": "구현 방식",
              "text": "아이템 정보의 저장 방식, UI 갱신 시점, 장착과 해제 흐름을 설명합니다. 필요하면 구조도와 핵심 코드를 추가하세요."
            }
          ],
          "tags": [
            "Data Asset",
            "UMG",
            "Delegate"
          ],
          "featured": false
        }
      ]
    },
    {
      "id": "project-b",
      "name": "Project B",
      "category": "DEVELOPMENT TOOL · 예시 프로젝트",
      "description": "반복 작업을 줄이는 언리얼 에디터 도구",
      "period": "2026.05 – 진행 중 (예시)",
      "engine": "Unreal Engine 5.5 (예시)",
      "image": "assets/project-placeholder.svg",
      "imageAlt": "에디터 도구 프로젝트의 이미지 자리",
      "imageCaption": "TOOL PREVIEW / 실제 도구 화면으로 교체",
      "videoUrl": "",
      "githubUrl": "",
      "stack": [
        "Unreal Engine 5",
        "C++",
        "Editor Utility Widget"
      ],
      "implementations": [
        {
          "title": "데이터 편집 작업 자동화",
          "summary": "반복되는 데이터 확인과 수정 작업을 에디터 내부에서 처리합니다.",
          "blocks": [
            {
              "title": "제작 배경",
              "text": "도구가 필요했던 작업 흐름과 사용자 요구를 설명합니다."
            },
            {
              "title": "구현 · 결과",
              "text": "입력 검증, 처리 과정, 결과 확인 방법을 작성합니다. 도구 사용 전후의 작업 과정을 보여주면 좋습니다."
            }
          ],
          "tags": [
            "Editor Utility Widget",
            "Data Table"
          ],
          "featured": false
        }
      ]
    }
  ]
};
