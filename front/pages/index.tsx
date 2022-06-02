import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled';
import WorkCard from '@components/WorkCard';

const Base = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Home: NextPage = () => {
  return (
    <Base>
      <WorkCard title={'인스타그램'} />
      <WorkCard title={'당근 마켓'} />
      <WorkCard title={'카카오톡'} />
      <WorkCard title={'유튜브'} />
      <WorkCard title={'넷플릭스'} />
      <WorkCard title={'왓챠'} />
      <WorkCard title={'화해'} />
      <WorkCard title={'29cm'} />
      <WorkCard title={'상담어플'} />
    </Base>
  );
};

export default Home;
