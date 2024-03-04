import React from 'react';

const Data = React.lazy(() =>
  import('../components/Data').then((module) => ({
    default: module.Data,
  })),
);

const NewsFeed = React.lazy(() =>
  import('../components/NewsFeed').then((module) => ({
    default: module.NewsFeed,
  })),
);

export const useTabs = () => {
  return React.useMemo(
    () => [
      {
        id: 'data',
        label: 'Data',
        component: <Data />,
      },
      {
        id: 'newsfeed',
        label: 'NewsFeed',
        component: <NewsFeed />,
      },
    ],
    [],
  );
};
