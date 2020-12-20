import React from 'react';
import rerender from 'react-test-renderer';
import ErrorBoundary from './ErrorBoundary';

describe('when Wrapper rendered', () => {
  test('then child component should be rendered', () => {
    const TestChildComponent = (
      <div className="error">Something went wrong. Please try again later.</div>
    );
    const component = rerender.create(
      <ErrorBoundary state={true}>{TestChildComponent}</ErrorBoundary>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
