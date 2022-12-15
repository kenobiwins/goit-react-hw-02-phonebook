import styled from 'styled-components';

export const ContactList = styled.ul`
  display: grid;
  gap: ${p => p.theme.space[3]}px;
  max-height: 200px;
  overflow: auto;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  button {
    margin-left: auto;
  }
`;
