export const a11yProps = (id: string) => {
  return {
    id: `my-tab-${id}`,
    'aria-controls': `my-tabpanel-${id}`,
  };
};
