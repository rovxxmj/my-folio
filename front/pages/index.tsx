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
    <>
      <Head>
        <title>@rovxxmj</title>
      </Head>
      <Base>
        <WorkCard title={'인스타그램/줌'} />
        <WorkCard title={'페이스북/트위터'} />
        <WorkCard title={'당근 마켓'} />
        <WorkCard title={'카카오톡/슬랙'} />
        <WorkCard title={'유튜브'} />
        <WorkCard title={'넷플릭스/왓챠'} />
        <WorkCard title={'화해'} />
        <WorkCard title={'twenty-nine-cm + kakaobrain'} />
        <WorkCard title={'상담어플'} />
      </Base>
    </>
  );
};

export default Home;
