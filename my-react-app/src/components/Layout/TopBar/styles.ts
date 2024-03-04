import { styled } from '@mui/material';

export const StyledTopBar = styled('div')`
  min-height: ${({ theme }) => theme.typography.pxToRem(64)};
  padding: ${({ theme }) =>
    `${theme.typography.pxToRem(12)} ${theme.typography.pxToRem(24)}`};
  background-color: #f5f5f5;
`;

export const StyledLogo = styled('div')`
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  color: #121212;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  padding: ${({ theme }) =>
    `${theme.typography.pxToRem(3)} ${theme.typography.pxToRem(9)}`};
  border-radius: ${({ theme }) => theme.typography.pxToRem(8)};
  border: ${({ theme }) => `${theme.typography.pxToRem(1)} solid #121212`};
`;
