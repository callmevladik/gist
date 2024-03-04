import { styled } from '@mui/material';

export const StyledWrapper = styled('div')`
  padding: ${({ theme }) => `0 ${theme.typography.pxToRem(8)}`};
`;
