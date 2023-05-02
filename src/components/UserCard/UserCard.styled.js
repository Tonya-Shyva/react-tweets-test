import styled from 'styled-components';

export const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 90%;
  height: 460px;
  padding: 28px 36px 36px 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  cursor: pointer;

  @media screen and (min-width: 400px) {
    max-width: 380px;
  }

  @media screen and (min-width: 768px) {
    width: 355px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 380px;
  }
`;

export const LogoImg = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const BgImg = styled.img`
  width: 80%;
  height: 168px;
  margin-bottom: 88px;

  @media screen and (min-width: 400px) {
    max-width: 308px;
  }
`;

export const MiddleLine = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  left: 0px;
  top: 214px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;

  @media screen and (min-width: 768px) {
    width: 355px;
  }

  @media screen and (min-width: 1440px) {
    width: 380px;
  }
`;

export const AvaFrame = styled.div`
  position: absolute;
  top: -40px;
  left: 40%;
  width: 80px;
  height: 80px;
  border: 8px solid #ebd8ff;
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset-block 0px -2.19582px 4.39163px #ae7be3,
    inset-block 0px 4.39163px 3.29372px #fbf8ff;
  background-color: #5736a3;
  z-index: 2;
`;

export const AvaImg = styled.img`
  position: absolute;

  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 196px;
  min-height: 50px;
  margin-top: 26px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background-color: #ebd8ff;
  border-color: transparent;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: box-shadow 300ms linear, background-color 300ms linear;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #fff;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06);
  }
`;
