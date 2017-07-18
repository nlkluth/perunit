import React from 'react';
import ListItem from '../../components/ListItem';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer
    .create(<ListItem item={{ name: 'foo' }} />)
    .toJSON();
  expect(rendered).toBeTruthy();
});
