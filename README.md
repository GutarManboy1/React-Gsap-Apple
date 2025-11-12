<img width="1907" height="979" alt="Image" src="https://github.com/user-attachments/assets/00cc231d-921c-46d4-97e3-2f815905c5d4" />

<img width="1896" height="989" alt="Image" src="https://github.com/user-attachments/assets/add58765-68a6-49e8-8329-8b68b3fefad4" />

<img width="1903" height="989" alt="Image" src="https://github.com/user-attachments/assets/4aff7d84-2673-49dc-85a9-109c6cb290e3" />

<img width="1907" height="990" alt="Image" src="https://github.com/user-attachments/assets/6ccf2419-a99b-48e9-823b-c67d91f65ba7" />

<img width="1912" height="992" alt="Image" src="https://github.com/user-attachments/assets/65894624-f420-463c-b507-df6d8342a6ce" />

<img width="1904" height="991" alt="Image" src="https://github.com/user-attachments/assets/b98e8393-35ac-4256-b06a-ef8af5ba2cdd" />

<img width="1902" height="989" alt="Image" src="https://github.com/user-attachments/assets/e0f56e10-a98d-4450-9835-f6df877f9146" />
Footer was cut off 
<img width="1903" height="990" alt="Image" src="https://github.com/user-attachments/assets/082e1b84-1cb1-49d6-baf6-4dc88bd982cc" />
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
