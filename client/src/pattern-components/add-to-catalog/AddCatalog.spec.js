import React from 'react';
import { shallow } from 'enzyme';
import AddToCatalog from './AddCatalog';
import "../../setupTests"
let item = {
  name: 'bacon',
  size: 20,
  comment: 'more! 20 pounds Janice!',
}
let addToCatalog = () => {
  state.catalog.push(item);
  return state;
}
let state = {
  catalog: [],
};

describe('AddToCatalog', () => {
  it('canary test shows the infrastructure works', () => {
    expect(true).toEqual(true);
  });

  it('adding item should be added into state', () => {
    expect((state.catalog.length)).toEqual(0);
  });

  it('catalog length should be greater than 0', () => {
    expect(addToCatalog().catalog.length).toBeGreaterThan(0);
  })

  it('adding an item into state should make the catalog length grow', () => {
    let a = state.catalog.length;
    addToCatalog();
    expect((state.catalog.length)).toBeGreaterThan(a);
  });

  let wrapper;
  beforeEach(() => wrapper = shallow(<AddToCatalog />));
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  })
})
