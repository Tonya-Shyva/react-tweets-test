import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Btn, Text } from 'components/UserCard/UserCard.styled';

const FOLLOWING_KEY = 'following';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;

const StyledFollowingBtn = styled(Btn)`
  background-color: ${props => (props.isFollowing ? '#5cd3a8' : '#ebd8ff')};
`;

export const FollowBtn = ({ id, followers }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(followers);
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    const following = JSON.parse(localStorage.getItem(FOLLOWING_KEY)) || [];
    const filteredFollowing = following.filter(user => user.id === id);

    setFollowingList(filteredFollowing);
    const isUserFollowing = following.some(user => user.id === id);
    setIsFollowing(isUserFollowing);
  }, [id]);

  const handleFollowClick = () => {
    const following = JSON.parse(localStorage.getItem(FOLLOWING_KEY)) || [];

    if (isFollowing) {
      setIsFollowing(false);
      localStorage.setItem(
        FOLLOWING_KEY,
        JSON.stringify(following.filter(user => id !== user.id))
      );
      setFollowersCount(prevCount => prevCount - 1);
    } else {
      setIsFollowing(true);
      localStorage.setItem(
        FOLLOWING_KEY,
        JSON.stringify([
          ...following,
          { id, storagedCount: followersCount + 1 },
        ])
      );
      setFollowersCount(prevCount => prevCount + 1);
    }
  };

  const buttonText = isFollowing ? 'Following' : 'Follow';

  return (
    <Wrapper>
      <Text>
        {followingList.length > 0
          ? followingList[0].storagedCount.toLocaleString('en-US', {
              useGrouping: true,
            })
          : followersCount.toLocaleString('en-US', { useGrouping: true })}{' '}
        followers
      </Text>
      <StyledFollowingBtn
        type="button"
        onClick={handleFollowClick}
        isFollowing={isFollowing}
      >
        {buttonText}
      </StyledFollowingBtn>
    </Wrapper>
  );
};
