import KleeProvider from '../src/KleeProvider';

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

export const decorators = [
  Story => (
    <KleeProvider>
      <Story />
    </KleeProvider>
  ),
];
