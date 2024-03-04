import { Grid } from '@mui/material';
import { TopBar } from '../../components/Layout/TopBar';
import { StyledWrapper } from './styles';
import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/RightSide';

export const Publisher: React.FC = () => {
  return (
    <>
      <TopBar />
      <StyledWrapper>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <LeftSide />
          </Grid>
          <Grid item xs={6}>
            <RightSide />
          </Grid>
        </Grid>
      </StyledWrapper>
    </>
  );
};
