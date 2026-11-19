# Game Programmer Portfolio

Unreal Engine 게임 프로그래머 포트폴리오입니다. HTML, CSS, JavaScript만 사용하는 정적 사이트이며 빌드나 패키지 설치가 필요하지 않습니다.

## 파일 구성

```text
index.html       페이지 구조와 진입점
content.js       이름, 소개, 기술, 프로젝트, 자격증, 경력
theme.css        섹션별 색상
style.css        레이아웃과 반응형 스타일
app.js           화면 생성과 메뉴·펼치기 동작
assets/          공개할 이미지와 영상
docs/            편집 가이드와 프로토타입 설명
.gitignore       로컬 전용 파일 제외 규칙
.nojekyll        정적 파일을 그대로 게시하기 위한 파일
```

## 내용 수정

1. `content.js`의 주석을 따라 내용과 파일 경로를 수정합니다.
2. 이미지와 영상은 `assets/`에 넣고 `assets/example.jpg`처럼 상대 경로로 연결합니다.
3. 색상은 `theme.css`에서 변경합니다.
4. `index.html`을 브라우저에서 열어 확인합니다. 수정 후에는 새로고침합니다.

프로젝트를 추가하면 사이드바와 소개 목록에도 자동으로 반영됩니다. 구현의 `featured: true`는 기본 펼침, `false`는 기본 접힘입니다.

- [상세 편집 가이드](docs/편집가이드.md)
- [프로토타입 구성 설명](docs/포트폴리오-프로토타입.md)

## 게시 파일

GitHub Pages의 게시 폴더로 이 저장소의 루트를 사용할 수 있도록 구성했습니다. `index.html`과 연결된 CSS·JavaScript·assets를 함께 커밋해야 합니다. 실제 Pages 활성화와 게시 브랜치 설정은 별도로 진행합니다.

`.gitignore`는 환경 변수, 편집기 개인 설정, 임시 파일, 압축본을 제외합니다. `content.js`, 이미지, 문서는 공개 대상이므로 공개하려는 내용만 넣으세요. 이미 추적 중인 파일은 `.gitignore`에 추가하는 것만으로 추적이 해제되지 않습니다.
