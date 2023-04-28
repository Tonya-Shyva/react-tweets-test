import { FollowBtn } from 'components/FollowBtn/FollowBtn';
import {
  AvaFrame,
  AvaImg,
  BgImg,
  CardWrapper,
  LogoImg,
  MiddleLine,
  Text,
} from './UserCard.styled';

import bgImg from '../../images/bg.png';
import defaultAva from '../../images/defaultAva.png';
import logo from '../../images/logoGo.png';

export const UserCard = ({ id, avatar, tweets, followers }) => {
  return (
    <CardWrapper>
      <LogoImg src={logo} alt="logo goit" />
      <BgImg src={bgImg} alt="icons" />
      <MiddleLine>
        <AvaFrame>
          <AvaImg src={avatar ? avatar : defaultAva} alt="user avatar" />
        </AvaFrame>
      </MiddleLine>
      <Text>{tweets} tweets</Text>
      <FollowBtn followers={followers} id={id} />
    </CardWrapper>
  );
};
