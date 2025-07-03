import React from 'react';
import C4RNLoadingSpinner from './C4RNLoadingSpinner';
import { View } from 'react-native';

const meta = {
  title: 'Components/LoadingSpinner',
  component: C4RNLoadingSpinner,
  decorators: [
    // @ts-ignore - Story component type is provided by Storybook
    (Story) => (
      <View style={{ padding: 16, height: 200 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const Default = {
  args: {},
};

export const Small = {
  args: {
    size: 'sm',
  },
};

export const Medium = {
  args: {
    size: 'md',
  },
};

export const Large = {
  args: {
    size: 'lg',
  },
};

export const CustomColor = {
  args: {
    color: '#007AFF',
  },
};

export const CustomBackground = {
  args: {
    backgroundColor: '#F0F0F0',
  },
};

export const CustomColorAndBackground = {
  args: {
    color: '#FF3B30',
    backgroundColor: '#000000',
  },
}; 