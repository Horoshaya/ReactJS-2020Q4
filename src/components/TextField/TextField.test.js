import React from 'react';
import rerender from 'react-test-renderer';
import TextField from './TextField';
import { Formik } from 'formik';

describe('when TextField', () => {
  test('then snapshot created', () => {
    const component = rerender.create(
      <Formik>
        <TextField />
      </Formik>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
