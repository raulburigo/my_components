// import { StoryFn } from '@storybook/react'
// import { ThemeProvider } from '../src/lib/ThemeProvider'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// export const decorators = [
//   (Story: StoryFn, context: any) => (
//     <ThemeProvider colors={context.globals.theme}>
//       <Story />
//     </ThemeProvider>
//   ),
// ]

// export const globalTypes = {
//   theme: {
//     name: 'Theme',
//     description: 'Global theme for components',
//     defaultValue: undefined,
//     toolbar: {
//       icon: 'circlehollow',
//       items: [
//         { value: undefined, icon: 'circlehollow', title: 'default merca' },
//         // aqui é possível adicionar temas de clientes para testar visualização
//         {
//           value: {
//             // primary: '#08244a',
//             primary: '#002040',
//             primaryText: '#ffffff',
//             secondary: '#fe1a25',
//             secondaryText: '#ffffff',
//           },
//           icon: 'circlehollow',
//           title: 'cliente1',
//         },
//       ],
//       showName: true,
//     },
//   },
// }
