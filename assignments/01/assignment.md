# React의 주요 개념 정리

## React란?

### UI 제작을 도와주는 Javascript 라이브러리

WEB 환경에 제한된 것이 아닌, 다른 환경에서도 UI 제작을 도와준다.

#### 라이브러리와 프레임워크에 대해서

- 라이브러리 : API를 기반으로 대상 환경에서 바로 실행될 수 있도록 *모듈*화된 프로그램 모음
- 프레임워크 : Frame(틀) + work(일)이라는 단어의 합성어로, 일의 구조 혹은 작업 구조라는 뜻과 같이 _어떠한 일을 처리하기 위한 구조를 제공_
- 유사점
  - 개발자가 기능을 구현하는 데 사용할 수 있는 함수 또는 클래스를 제공한다.
  - 재사용이 가능하도록 설계되어 동일한 코드를 반복적으로 작성하지 않아도 된다.
    - `Next.js` 의 `Link` 컴포넌트
    - `React` 의 `useState()` 훅
  - 어플리케이션을 구축할 때 시간과 노력을 절약할 수 있다.
- 차이점
  - 제어 반전
    - 라이브러리를 사용하면 개발의 흐름을 개발자가 제어하는 반면, 프레임워크를 사용하면 개발의 흐름을 개발자가 아닌 프레임워크가 결정한다.
    - 필요할때마다 사용하느냐, 사용하기 위해서는 필요하느냐?

### 등장 배경에 대해

#### 전통적인 개발 환경의 재사용성, 유지보수의 어려움

애플리케이션의 볼륨이 커질수록 HTML, CSS, JavaScript 코드 간의 상호작용이 복잡해져 유지보수에 어려움을 겪었다.  
또한, 코드의 재사용성이 낮고, 동일한 기능을 다른 부분에서도 사용하기 위해 반복해서 작성해야하는 경우가 많았다.  
이를 React는 컴포넌트라는 개념으로 재사용성을 높이고, 유지보수에 도움을 줄 수 있었다.

#### DOM 조작의 비효율성

JS를 사용한 직접적인 DOM 조작은 성능 저하를 가져올 수도 있다.  
브라우저에게 DOM을 해석하고 렌더링 하는 것은 굉장히 비싼 작업이기 때문이다.  
이를 React에서는 가상 DOM(Virtual DOM) 이라는 개념으로 도움을 준다.

## MPA와 SPA, SSR와 CSR에 대해서

### MPA와 SPA

#### MPA (Multiple Page Application)

<img src="https://agilie.com/_next/image?url=/api/imageproxy?url=https%3A%2F%2Fd12zh9bqbty5wp.cloudfront.net%2Fckeditor_assets%2Fpictures%2F1849%2Fcontent_single-page_apps_vs_multiple-page_web_apps-04.png&w=1920&q=75" width="400" />

- 특징
  - 각각의 페이지가 독립적으로 존재하며,  
    사용자가 다른 페이지로 이동할 때마다 서버로부터 새로운 페이지를 요청하고 브라우저가 이를 렌더링한다.
- 장점
  - SEO(검색 엔진 최적화)에 적합하다.
    - 각 페이지가 독립적인 URL을 가지고 있기 때문에 검색 엔진이 웹사이트의 내용을 쉽게 인덱싱할 수 있다.  
      이 과정은 웹사이트의 검색 엔진 순위를 향상시키는데에 도움이 된다.
  - 쉽게 확장이 가능하다.
    - 새로운 컨텐츠나 기능, 페이지 추가에 제한이 없다.
- 단점
  - 사용자가 페이지를 전환할 때마다 전체 페이지를 새로 불러와야 하기 때문에 페이지 로딩 시간이 길어질 수 있다.
  - 개발의 복잡도 상승과 유지보수의 어려움이 생길 수 있다.

#### SPA (Single Page Application)

<img src="https://agilie.com/_next/image?url=/api/imageproxy?url=https%3A%2F%2Fd12zh9bqbty5wp.cloudfront.net%2Fckeditor_assets%2Fpictures%2F1850%2Fcontent_single-page_apps_vs_multiple-page_web_apps-05.png&w=1920&q=75" width="400" />

- 특징
  - 하나의 페이지 안에서 모든 상호작용을 처리하며,  
    브라우저가 전체 앱 데이터를 다운로드해 페이지를 다시 로드하는 과정이 존재하지 않는다.
- 장점
  - 속도와 반응성
    - 성능 측면에서 MPA보다 좋은 성능을 보이며, 사용자의 상호작용에 따라 필요한 부분만 JS를 통해 갱신할 수 있다.  
      따라서 필요한 데이터만 주고받을 수 있다.
      이는 사용자 경험에 큰 이점을 가져올 수 있다.
- 단점
  - SEO에 적합하지 않다.
    - 페이지의 내용이 클라이언트 측에서 동적으로 생성되기 때문에 검색 엔진이 웹사이트의 내용을 제대로 인덱싱하기 어렵다.

#### React를 사용한 웹 개발 방식은 SPA를 사용해 제작한다.

### SSR과 CSR

#### SSR

<img src="https://velog.velcdn.com/images%2Fvagabondms%2Fpost%2F8c4c7988-c35d-4722-8e78-4c4f4bbb54a5%2Fimage.png" />

1. 유저가 웹사이트 요청을 보낸다.
2. 서버는 즉시 렌더링이 가능한 HTML 파일을 만든다.
3. 클라이언트에 전달 된 후, 렌더링 준비가 되어있기 때문에 HTML은 바로 렌더링 된다. 하지만 사이트 조작은 불가능하다. (JS가 읽히기 전이기 때문)
4. 클라이언트가 JS를 다운로드받는다.
5. 다운로드 받는 도중 유저는 컨텐츠를 볼 수 있지만 상호작용할수는 없다. 이 때의 상호작용을 기억하고 있는다.
6. 브라우저가 JS 프레임워크/라이브러리를 실행한다.
7. JS가 컴파일 된 후 기억하고있던 상호작용이 실행되고 사이트 조작이 가능해진다.

서버에서 렌더링이 가능한 상대로 클라이언트에 전달되어 JS가 다운로드 되는 동안 사용자는 UI를 보고 있을 수 있다.

#### CSR

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmvAPF%2FbtrcM1fGQEJ%2FoqGeGnUFg9wXZOkClMC39k%2Fimg.png" />

1. 유저가 웹사이트에 요청을 보낸다.
2. CDN이 HTML 파일과 JS로 접근 가능한 링크를 클라이언트로 보낸다.
3. 클라이언트는 HTML과 JS를 다운로드 받는다. 이 때, 사용자는 아무것도 볼 수 없다.
4. 다운로드가 완료된 JS가 실행되고, 데이터를 위한 API가 호출된다. 이 때, 사용자는 placeholder를 보게 된다.
5. 서버가 API로부터의 요청에 응답한다.
6. API로부터 받아온 data를 placeholder 자리에 넣어준다. 그리고 페이지에서 상호작용이 가능해진다.

서버에서의 처리 없이 클라이언트로 보내주기 때문에, JS가 모두 다운로드 되고 실행이 끝나기 전까지 사용자는 볼 수 있는 UI가 없다.

#### React는 CSR을 사용한다.

SSR과 CSR 각각의 장점과 단점이 있겠지만,
SPA와 관련해 리액트는 CSR을 사용하는 것이 아닌가하는 추측이 든다.

## React의 주요 개념

### 가상 DOM

<img src="https://velog.velcdn.com/images/harry21/post/f8e1cd74-ba38-445c-be16-825b1628096d/image.png" />

가상 돔(VDOM)은 가상 UI 표현이 메모리에 유지되고, ReactDOM과 같은 라이브러리에 의해 실제 DOM과 동기화되는 프로그래밍 개념이다.

실제 DOM에서는 DOM이 업데이트될 때마다 업데이트 된 요소와 해당 하위 요소를 다시 랜더링하여 UI를 업데이트해야하지만, 가상 DOM 에서는 정확히 _무엇이 변경되었는지 파악해(Diffing)_ 실제 DOM에서 _해당 객체의 UI만 업데이트 해준다.(Reconciliation)_

이로 인한 실제 DOM과의 차이점은

- 실제 DOM을 조작하는 것보다 빠르게 UI 변경사항을 관리한다.
- 변경이 필요한 부분만 실제 DOM에 반영해, 페이지 전체를 새로 불러오는 것보다 효율적이다.
- DOM을 직접 다루는 대신 React가 가상 DOM을 이용해 필요한 부분만 자동으로 업데이트해 훨씬 편리하고 높은 생산성으로 서비스를 만들 수 있다.

### JSX

JS를 확장한 문법으로, React에서 UI 구조를 표현하는 데 사용된다.
또한, React 라이브러리의 `createElement` 함수 호출을 보다 직관적으로 표현해주는 문법적 편의(syntactic sugar) 이다.

JSX는 브라우저가 아닌 JS만 읽을 수 있으며,
따라서 트랜스파일러(babel 등)을 사용해 JSX를 일반 JS로 변환해 브라우저에 보내주어야 한다.

```javascript
// 컴포넌트 선언
function SomeComponent() {
  return <h1>{3 + 5}</h1>;
}

// 엘리먼트 생성
const someElement = <SomeComponent />;

// 컴포넌트의 재사용
function AnotherComponent() {
  return (
    <div>
      <SomeComponent />
      <SomeComponent />
    </div>
  );
}
```

#### 장점

- 읽기 쉽고, 작성하기 편리하다.
  - HTML 문법과 유사해 가독성이 좋고, 그로인해 생산성이 높아진다.
- 컴포넌트 구조의 명확화
  - 컴포넌트의 구조를 한 눈에 파악하기 쉬워 프로젝트의 유지보수성이 향상된다.

#### 컴포넌트와 엘리먼트의 차이

- 컴포넌트: UI의 한 부분을 캡슐화한 코드 블록이다.
- 엘리먼트: 컴포넌트의 인스턴스로, 화면에 표시할 내용을 기술한 객체이다.

```javascript
// Component
function Greeting() {
  return <div>Hi</div>;
}

// Element
<Greeting />;
```

### State

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // 초기값 0

  const increment = () => {
    setCount(count + 1); // count를 1 증가시키는 함수
  };

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={increment}>증가</button>
    </div>
  );
}
```

- React 컴포넌트 내부의 동적인 데이터를 관리하는 데 사용되는 데이터 구조
- 일반적으로 시간에 따라 변하는 값이나 상호작용 또는 네트워크 응답 등에 의해 변경되는 값을 관리한다.
- State가 바뀌면 컴포넌트는 리렌더링되고, 함수가 재실행되어 화면이 다시 그려지게 된다.
- 함수가 재실행되어 값이 초기화될 것 같지만, 계속 저장이 되고 있다. ([React 톺아보기](https://goidle.github.io/react/in-depth-react-hooks_1/))

### Props

```javascript
function Greeting(props) {
  return <h1>안녕하세요, {props.name}님!</h1>;
}

function App() {
  const someName = "철수";
  return (
    <div>
      <Greeting name="지수" />
      <Greeting name={someName} />
    </div>
  );
}
```

- 부모 컴포넌트로부터 자식 컴포넌트에 전달하는 데이터
- 자식 컴포넌트에서 Props는 Read only이며, 수정되어서는 안됨
  - 수정하려면 그 props를 수정하는 함수를 전달해주어야 함. 절대 직접 수정 X
- Props를 잘 활용하면 컴포넌트의 재사용성과 유연성이 크게 증가
  - [같이 보면 좋은 글 - 아토믹 디자인을 활용한 디자인 시스템 도입기](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)
- 부모의 props 값이 바뀌면 자식 컴포넌트는 리렌더링을 한다.

### 리렌더링의 조건

- state가 변경되는 상황
- 부모 컴포넌트로부터 전달받는 props의 값이 변경 될 때
- 부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링
  - 방지 방법 - React.memo() 메서드

### React Component Life cycle

<img src="https://velog.velcdn.com/images/remon/post/8e4e21c4-25d3-4de9-99ff-4fb430fa0e96/image.png" width="500" />

라이프 사이클마다 실행되는 메서드  
[출처](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## 정리하며 느낀 점

각 특징이나 개념을 점점 파고들어가다보면 끝도 없는것을 느꼈습니다.  
지금의 단계에서는 깊숙한 내용을 알아가기보다는 얕은 내용을 정확히 이해하는 과정이 중요한 것 같습니다.
