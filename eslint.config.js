import js from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';

const reactRecommended = react.configs.recommended ?? {};
const reactJsxRuntime = react.configs['jsx-runtime'] ?? {};
const reactHooksRecommended = reactHooks.configs.recommended ?? {};
const jsxA11yRecommended = jsxA11y.configs.recommended ?? {};
const importRecommended = importPlugin.configs.recommended ?? {};

const nextCoreWebVitals = nextPlugin.configs['core-web-vitals'] ?? {};

const ignores = [
  '**/node_modules/**',
  'node_modules_old/**',
  'node_modules_prev/**',
  '.next/**',
  'dist/**',
  '.crush/**',
  '.vite/**',
  'coverage/**',
  'build/**'
];

export default [
  {
    ignores
  },
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx}', 'pages/**/*.{js,jsx}', 'components/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
       parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        process: 'readonly',
        __APP_CONFIG__: 'readonly'
      }
    },
    plugins: {
      import: importPlugin,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...(reactRecommended.rules ?? {}),
      ...(reactJsxRuntime.rules ?? {}),
      ...(reactHooksRecommended.rules ?? {}),
      ...(jsxA11yRecommended.rules ?? {}),
      ...(importRecommended.rules ?? {}),
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'import/order': [
        'warn',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: [
            ['builtin', 'external', 'internal'],
            ['parent', 'sibling', 'index']
          ],
          'newlines-between': 'always'
        }
      ]
    }
  },
  {
    files: [
      'config/**/*.{js,mjs}',
      '*.{config.js,config.mjs}',
      'next.config.mjs',
      'vite.config.js'
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.node
    }
  },
  {
    files: ['pages/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        process: 'readonly'
      }
    },
    plugins: {
      '@next/next': nextPlugin
    },
    rules: nextCoreWebVitals.rules ?? {},
    settings: nextCoreWebVitals.settings ?? {}
  }
];
