import { useState } from 'react';

import {
  AvaFrame,
  AvaImg,
  BgImg,
  CardWrapper,
  Btn,
  MiddleLine,
  Text,
  TextList,
} from './UserCard.styled';

import bgImg from '../../images/bg.png';
import defaultAva from '../../images/defaultAva.png';

export const UserCard = ({ avatar, tweets, followers }) => {
  const [first, setFirst] = useState(false);
  const [isFollow, setIsFollow] = useState(false);

  return (
    <CardWrapper>
      <BgImg src={bgImg} alt="icons" />
      <MiddleLine>
        <AvaFrame>
          <AvaImg src={avatar ? avatar : defaultAva} alt="user avatar" />
        </AvaFrame>
      </MiddleLine>
      <TextList>
        <li>
          <Text>{tweets} tweets</Text>
        </li>
        <li>
          <Text>{followers} followers</Text>
        </li>
      </TextList>

      <Btn type="button" onClick={() => {}}>
        <span>follow</span>
      </Btn>
    </CardWrapper>
  );
};
