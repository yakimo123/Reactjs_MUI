import Button from '@mui/material/Button'
import './App.css';
import { useColorScheme } from '@mui/material/styles';


function App() {

  function ModeSwitcher() {
    const { mode, setMode } = useColorScheme();
  
    if (!mode) {
      return null;
    }
  
    return (
      <select
        value={mode}
        onChange={(event) => {
          setMode(event.target.value);
          // For TypeScript, cast `event.target.value as 'light' | 'dark' | 'system'`:
        }}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    );
  }

  return (
    <>
      <ModeSwitcher />
      <Button variant='contained'>Hello word</Button>
    </>
  )
}
export default App
