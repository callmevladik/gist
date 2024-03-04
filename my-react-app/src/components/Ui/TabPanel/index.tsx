import { TabPanelProps } from './types';

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  activeId,
  id,
}) => {
  console.log('TabPanel', 'id', id, 'activeId', activeId);

  return (
    <div
      role="tabpanel"
      hidden={id !== activeId}
      id={`my-tabpanel-${activeId}`}
      aria-labelledby={`my-tab-${activeId}`}
    >
      {children}
    </div>
  );
};
