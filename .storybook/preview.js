export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// Add Google Fonts - more comprehensive import
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

// Also add fallback CSS
const style = document.createElement('style');
style.textContent = `
  body, #root {
    font-family: 'Karla', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  }
`;
document.head.appendChild(style);