import styled, { keyframes } from 'styled-components';

const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const spin = keyframes`
0%{transform: rotate(0deg)};
100%{
    transform: rotate(360deg);
}`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #5736a3;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  animation: ${spin} 1000ms ease-in-out infinite;
`;

export const Loader = () => {
  return (
    <LoaderWrap>
      <Spinner />
    </LoaderWrap>
  );
};
