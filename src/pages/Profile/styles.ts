import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;

  padding: 0 30px ${Platform.OS === 'ios' ? 40 : 130}px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  color: #f4ede8;
  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;
export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;

  border-radius: 98px;

  align-self: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;
