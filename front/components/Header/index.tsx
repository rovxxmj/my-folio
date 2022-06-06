import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Base = styled.header<{ borderColor: string }>`
  width: 100%;
  height: 90px;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

export const MyName = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;

export const ActionItemWrapper = styled.div<{ color: string; hoverColor: string }>`
  display: flex;
  align-items: center;
  color: ${({ color }) => color};
  > div {
    &:hover {
      color: ${({ hoverColor }) => hoverColor};
      text-decoration: underline;
    }
  }
`;
export const ActionItem = styled.div<{ active: boolean }>`
  padding: 10px;
  margin-right: 10px;
  font-size: 14px;
  transition: 0.3s ease;
  color: ${({ active }) => (active ? '#000' : '#878787')};
`;

const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Base borderColor={theme.colors.gray[100]}>
      <Container>
        <ActionItemWrapper hoverColor={theme.colors.purple} color={theme.colors.gray[600]}>
          <ActionItem active={!['/contact', '/about'].includes(router.route)}>
            <Link href={'/'}>
              <a>HOME</a>
            </Link>
          </ActionItem>
          <ActionItem active={router.route === '/about'}>
            <Link href={'/about'}>
              <a>ABOUT ME</a>
            </Link>
          </ActionItem>
          <ActionItem active={router.route === '/contact'}>
            <Link href={'/contact'}>
              <a>CONTACT</a>
            </Link>
          </ActionItem>
        </ActionItemWrapper>
        <MyName>
          <Link href={'/'}>
            <a>@rovxxmj</a>
          </Link>
        </MyName>
      </Container>
    </Base>
  );
};

export default Header;
