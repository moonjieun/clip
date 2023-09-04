import { useState } from 'react';

import Button from '@/components/common/Button/Button';
import Icon from '@/components/common/Icon';
import { Input } from '@/components/common/Input/Input';
import useInputs from '@/hooks/useInputs';
import * as S from '@/pages/SignInPage/SignInPage.styles';
import { theme } from '@/styles/theme';

const SignInPage = () => {
  const { form: loginInput, handleChange: inputChangeHandler } = useInputs({
    email: '',
    password: '',
  });
  // const [loginInput, setLoginInput] = useState({
  //   email: '',
  //   password: '',
  // });

  // const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLoginInput({
  //     ...loginInput,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const kakaoLogin = () => {
    console.log('카카오 로그인 링크');
  };

  console.log(loginInput);
  return (
    <S.SignInContainer>
      <S.SignInLogo>로고</S.SignInLogo>
      <S.SignInForm
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
        }}
      >
        <div>
          <label htmlFor="email">ID</label>
          <Input
            onChange={inputChangeHandler}
            value={loginInput.email}
            name="email"
            id="email"
            type="email"
            variant="underline"
            isFullWidth
            placeholder="아이디를 입력해주세요."
          />
        </div>
        <div>
          <label htmlFor="password">PW</label>
          <Input
            onChange={inputChangeHandler}
            value={loginInput.password}
            name="password"
            id="password"
            type="password"
            variant="underline"
            isFullWidth
            placeholder="패스워드를 입력해주세요."
          />
        </div>
        <Button
          variant="contained"
          isFullWidth
          size="large"
          height={'64px'}
          backgroundColor={theme.color.brand}
        >
          <S.FontBox>로그인</S.FontBox>
        </Button>
      </S.SignInForm>
      <S.OrBox>
        <S.LineDiv />
        <span>OR</span>
        <S.LineDiv />
      </S.OrBox>
      <Button
        variant="contained"
        size="large"
        height={'64px'}
        backgroundColor="#FEE608"
        isFullWidth
        onClick={kakaoLogin}
      >
        <S.KakaoFontBox>
          <Icon name="IconKakao" size={19} />
          <span>카카오 로그인</span>
        </S.KakaoFontBox>
      </Button>
    </S.SignInContainer>
  );
};

export default SignInPage;
