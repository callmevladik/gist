import { Grid, Stack, Typography, useTheme } from '@mui/material';
import { StyledTopBar, StyledLogo } from './styles';

export const TopBar: React.FC = () => {
  const theme = useTheme();
  return (
    <StyledTopBar>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Stack spacing={2} direction="row" alignItems="center">
            <Typography fontSize={theme.typography.pxToRem(18)}>
              MetaMorph Minds
            </Typography>
            <StyledLogo>AI Publisher</StyledLogo>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          Right Side
        </Grid>
      </Grid>
    </StyledTopBar>
  );
};
