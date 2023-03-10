import React from "react";
import { createRoot } from 'react-dom/client';
import { ButtonLogin } from './components'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<div>Hello world <ButtonLogin /></div>);