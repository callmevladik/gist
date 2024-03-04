import { styled } from '@mui/material';

export const StyledLeftSide = styled('div')`
  padding: ${({ theme }) =>
    `${theme.typography.pxToRem(10)} ${theme.typography.pxToRem(16)}`};
`;
