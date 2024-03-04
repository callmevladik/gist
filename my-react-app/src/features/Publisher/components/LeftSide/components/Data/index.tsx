import { Stack, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
export const Data: React.FC = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button startIcon={<AddIcon />}>Data Source</Button>
      <Button startIcon={<AddIcon />}>Data Collection</Button>
    </Stack>
  );
};
