import styled from '@emotion/styled';
import { FC } from 'react';

export const Card = styled.div`
  border: 1px solid gray;
  width: 400px;
  height: 400px;
`;

interface IProps {
  title: string;
}

const WorkCard: FC<IProps> = ({ title }) => {
  return <Card>{title}</Card>;
};

export default WorkCard;
