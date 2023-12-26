# CLIP(e-commerce)
<img width="90%" src="https://github.com/supercoding-commerce/FE/assets/102341066/65c6c4dd-7bc7-447c-83d8-1c3eba5caca1"/>

## 💻 프로젝트 소개
여러 쇼핑몰을 한 곳에 모아 사용자들이 좀 더 쉽게 다양한 쇼핑몰에 접근할 수 있도록 만든 쇼핑몰 사이트입니다.
<br/>

## 🧑‍🤝‍🧑 멤버
- 프론트엔드: 조수빈, 육동영, 문지은, 김승규, 김희진
- 백엔드: 문종현, 함다빈, 유재준, 김채현
<br/>

## 📆 프로젝트 기간
- 2023.08 ~ 2023.09
<br/>

## 📖 사용기술 및 라이브러리
- `TypeScript`, `React`, `Recoil`, `Axios`, `Emotion`, `React-Query`
<br/>

## ✍ **What I've experienced**

- **통신 로직 분리**
    - 데이터 처리 및 상태관리 혹은 API엔드포인트와 같은 부분 변경시 **해당 컴포넌트 변경 최소화**와 가독성 증가를 위해 API모듈화를 하였습니다.
- **TypeScript 사용**
    - 개발 생산성 향상 및 서비스 안정화를 경험하였습니다.
- **모바일 퍼스트 채택**
    - 모바일 서비스의 특성을 고려한 UI/UX디자인 및 기능 개발을 경험
- **이미지 최적화** [(✔벨로그 정리)](https://velog.io/@moonjieun/%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%B5%9C%EC%A0%81%ED%99%94)
    - 메인페이지 배너 부분 큰파일 형식의 이미지 랜더링 파일크기 조정 및 이미지 차세대 형식(WebP)으로 전환
<br/>

## 🧙‍♂️ 내가 참여한 주요기능

### 👩‍🎤 Emotion을 사용한 **공통 컴포넌트 구현 (Input)** 

👩‍💻Input 공통 컴포넌트 코드보기

```js
import { ComponentProps, CSSProperties, ReactNode } from 'react';
import { cx } from '@emotion/css';

import * as S from './Input.styles';

interface InputProps extends Omit<ComponentProps<'input'>, 'size' | 'style'> {
  size?: 'md' | 'sm';
  isFullWidth?: boolean;
  error?: boolean;
  errorMessage?: string;
  rightSlot?: ReactNode;
  style?: CSSProperties;
  variant?: 'outline' | 'underline';
}

export function Input({
  variant = 'outline',
  size = 'md',
  isFullWidth = false,
  error,
  errorMessage,
  rightSlot,
  style,
  ...rest
}: InputProps) {
  const _size = `size_${size}`;
  const _variant = `variant_${variant}`;

  return (
    <>
      <S.InputWrapper
        className={cx(_size, _variant, {
          ['full-width']: isFullWidth,
          error,
        })}
        style={style}
      >
        <S.Input {...rest} />
        {rightSlot}
      </S.InputWrapper>
      {error && errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </>
  );
}
```


개발 진행 전 디자인 단계에서 **공통으로 쓰일 컴포넌트를 분리** 후 공통 컴포넌트 개발진행
<img width="90%" src="https://github.com/moonjieun/clip/assets/102341066/76ffabb0-ea22-47eb-b5ea-53fb222b497e"/>

- **`cx` 함수를 사용하여 동적으로 클래스를 조작하고 조건부 스타일을 적용**할 수 있고, 필요에 따라 스타일을 쉽게 변경할 수 있게 사용하였습니다.   
- **가변스타일링**을 위해 `variant` 사용 기본값 : `outline | underline`일경우 입력
- `{rightSlot}` 로 입력 필드 오른쪽에 동적으로 삽입할 수 있게하여 아이콘, 버튼 또는 기타를 입력 필드의 오른쪽에 삽입할 수 있게 하였습니다.
- `Omit` 을 이용하여 `input`의 기본속성인 `size`와 `style`을 제외하고 `style?: CSSProperties`을 사용하여 변경 필요시 **인라인 스타일을 정의**하여 해당 **컴포넌트의 스타일을 동적으로 변경**하고 **커스터마이징**할 수 있게 하였습니다.
  
### **메인**
- 클라이언트단에서 관리하는 스와이퍼 이미지 최적화 [(✔벨로그 정리)](https://velog.io/@moonjieun/%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%B5%9C%EC%A0%81%ED%99%94)
- 스와이퍼 라이브러리를 이용한 홈 배너 및 **`useInfiniteQuery`** 사용한 무한스크롤 구현
- **`react-query`라이브러리인 `useInfiniteQuery`의 사용** 하여 상품 무한스크롤 구현 [(✔벨로그 정리)](https://velog.io/@moonjieun/refactor-useInfiniteQuery-%EC%A0%81%EC%9A%A9%EC%8B%9C%ED%82%A4%EA%B8%B0)
    - 캐싱 및 상태 관리 기능을 활용하여 **데이터를 쉽게 관리**하고 **로딩 중, 에러 상태를 간단히 처리**해 볼 수 있엇으며, **페이징과 관련 된 복잡한 로직을 간결**히 해줄 수 있어 이로 인해 **코드 간결성 유지보수, 데이터 관리와 관련된 다양한 기능** 또한 사용 할 수 있어 적용하게 되었습니다.
<img width="90%" src="https://github.com/moonjieun/clip/assets/102341066/173d4045-d24a-4f40-8968-684e687d1da0"/>
<br/>

### **검색**
- **디바운스 적용** [(✔벨로그 정리)](https://velog.io/@moonjieun/%EA%B2%80%EC%83%89%EC%B0%BD%EC%97%90-debounce-%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0)   
    - 검색창 예시:`'k', 'ko', 'kor'` 이렇게 비효율적으로 통신이 3번 이루어지는 것을 방지하기 위해 정해진 딜레이 후 한번만 처리하는 패턴을 사용하여 불필요한 네트워크 통신을 막기 위해 적용하게 되었습니다.
  <img width="90%" src="https://github.com/moonjieun/clip/assets/102341066/76100b04-ce12-463f-b88f-b943fc16a277"/>

- 최근검색어가 있을시 표시(최근검색 UI클릭시 라우팅, 전체, 선택삭제 기능)
  <br/> 
  <img width="68%" src="https://github.com/moonjieun/clip/assets/102341066/707e59c3-473f-4e6e-9512-afccee4de21d"/>

### **검색 상품리스트** [(소스코드)](https://velog.io/@moonjieun/%EA%B2%80%EC%83%89%EC%B0%BD%EC%97%90-debounce-%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0)   
필터별로 다른 통신을 하여 데이터를 받아오는 로직은 코드 가독성을 높이고 유지보수를 쉽게하기 위해 apis로 모듈화 하여 개발하였고, 상품리스트 쪽 무한스크롤 기능 또한 `useInfiniteQuery`을 사용한 `CategoryList.tsx`컴포넌트로 만들었습니다.
- **`handleFilterButtonClick`** 함수는 필터 버튼이 클릭될 때 호출하며 이 함수는 전달된 필터에 따라 **`selectedOption`** 상태를 설정합니다.
- **`FilterModal`** 에서 옵션이 선택될 때 호출되는 **`handleOptionSelect`** 함수는 선택된 옵션을 기반으로 어떤 카테고리(필터 타입)를 업데이트해야 하는지를 결정하기 위해 **`selectedOption`** 상태를 사용하였습니다.
- 필터옵션', '나이', '성별'에 대한 버튼들은 각각의 상태 (**`filter`**, **`ageCategory`**, **`genderCategory`**)를 사용하여 선택된 옵션을 표시하고 모달에서 옵션이 선택되면 **`selectedOption`** 을 기반으로 해당 상태가 업데이트되게 하였습니다.
- **`handleOptionSelect`** 함수의 switch문은 **`selectedOption`** (선택된 옵션)을 기반으로 어떤 카테고리 상태(**`filter`**, **`ageCategory`**, **`genderCategory`**)를 업데이트할지 결정합니다.
- 타입 안정성을 위하여 **`FilterOption`** 유니언 타입으로 가질 수 있는 가능한 값들을 제한하여 실수를 방지하고 선택된 옵션이 미리 정의된 필터 옵션 중 하나이게 하였습니다.

 <img width="90%" src="https://github.com/moonjieun/clip/assets/102341066/c413aa26-77d8-4726-8afb-c15816cb37ab"/>

- 카테고리 공통컴포넌트를 이용한 카테고리 메뉴 생성, 클릭시 해당 카테고리 페이지로 라우팅 + 상품 필터링
- 필터링 모달 기능 구현
    - 필터 선택예시:) 저가 순 선택 시 요청 데이터 받아오는 중일 때 로딩상태 처리를 보이게 하기위해 빠른 3G로 설정한 상태입니다.
- `useInfiniteQuery` 훅에서 제공되는 기능인  `isFetching`과 `status`로 데이터 로딩과 에러처리간단하게 처리해주었습니다.
<br/>
     <img width="90%" src="https://github.com/moonjieun/clip/assets/102341066/c1876a21-5951-4824-9c19-8f3c346951ed"/>
<br/>

- 해당 카테고리 페이지 상품리스트 `useInfiniteQuery` 적용
  
<br/>
