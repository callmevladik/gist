import React from 'react';
import { StyledLeftSide } from './styles';
import { useTabs } from './hooks/useTabs';
import { TabPanel } from '../../../../components/Ui/TabPanel';
import { Box, Tabs, Tab } from '@mui/material';
import { a11yProps } from '../../../../components/Ui/TabPanel/utils';

export const LeftSide: React.FC = () => {
  const tabs = useTabs();
  const [activeTabId, setActiveTabId] = React.useState<string>('data');

  const handleChangeActiveTabId = React.useCallback(
    (_event: React.SyntheticEvent, newValue: string) => {
      setActiveTabId(newValue);
    },
    [],
  );

  return (
    <StyledLeftSide>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={activeTabId} onChange={handleChangeActiveTabId}>
            {tabs.map(({ id, label }) => (
              <Tab label={label} {...a11yProps(id)} value={id} key={id} />
            ))}
          </Tabs>
        </Box>
      </Box>
      {tabs.map(({ id, component }) => {
        return (
          <TabPanel activeId={activeTabId} id={id} key={id}>
            {component as unknown as React.ReactNode}
          </TabPanel>
        );
      })}
    </StyledLeftSide>
  );
};
