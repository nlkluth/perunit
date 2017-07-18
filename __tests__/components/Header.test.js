import React from 'react';
import Header from '../../components/Header';
import { Text } from 'react-native';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Header><Text>Test</Text></Header>).toJSON();
  expect(rendered).toBeTruthy();
});
