import styled, { css } from 'styled-components/native';
import FeatherIcons from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 12px;
  padding: 0 14px;

  border-width: 2px;
  border-color: #212329;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #ff0000;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}


  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcons)`
  margin-right: 16px;
`;
