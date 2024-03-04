import { Publisher } from './features/Publisher';
import { UiThemeProvider } from './providers/Theme';

function App() {
  return (
    <>
      <UiThemeProvider>
        <Publisher />
      </UiThemeProvider>
    </>
  );
}

export default App;
