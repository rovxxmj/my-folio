import React from 'react';
import { FC } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

interface IInput {
  label: string;
  children: React.ReactNode;
}

const Base = styled.div<{ focus: string }>`
  margin-bottom: 20px;

  > label {
    display: flex;
    flex-direction: column;
    > span {
      font-size: 16px;
      margin-bottom: 8px;
    }

    > input,
    textarea {
      padding: 12px;
      font-size: 15px;
      resize: none;
      font-family: 'Jost', 'Hahmlet', sans-serif;
      border: 1px solid #ccc;
      background-color: #fafafa;

      &:focus {
        outline: none;
        border: 1px solid ${({ focus }) => focus};
      }
    }

    > textarea {
      min-height: 200px;
    }
  }
`;

const CustomInput: FC<IInput> = ({ label, children }) => {
  const theme = useTheme();
  return (
    <Base focus={theme.colors.purple}>
      <label>
        <span>{label}</span>
        {children}
      </label>
    </Base>
  );
};

export default CustomInput;
