import { createTheme, MantineProvider, MantineColorsTuple } from '@mantine/core';
import '@mantine/core/styles.css';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const pnc: MantineColorsTuple = [
  '#ebf7ff',
  '#d6ecfa',
  '#a7d8f8',
  '#76c3f6',
  '#54b1f5',
  '#43a6f5',
  '#39a0f6',
  '#2d8bdb',
  '#217cc4',
  '#006bad'
];

const theme = createTheme({
  colors: {
    pnc,
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
)
