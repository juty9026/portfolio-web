import styled from '@emotion/styled';

const Spacer = styled.div<{ height: number | string }>`
  height: ${({ height }) => height};
`;

export default Spacer;
