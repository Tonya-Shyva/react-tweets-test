import {
  AvaFrame,
  AvaImg,
  BgImg,
  CardWrapper,
  MiddleLine,
  Text,
} from './UserCard.styled';

import bgImg from '../../images/bg.png';
import defaultAva from '../../images/defaultAva.png';
import { FollowBtn } from 'components/FollowBtn/FollowBtn';

export const UserCard = ({ id, avatar, tweets, followers }) => {
  return (
    <CardWrapper>
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
