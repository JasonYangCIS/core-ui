import { createRoot } from 'react-dom/client'
import { Button } from 'core-ui'

const root = document.getElementById('root')!
createRoot(root).render(<Button>Hello from core-ui</Button>)
