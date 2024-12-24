
import { useColorScheme } from '@mui/material/styles';

function ModeSelect() {
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

export default ModeSelect