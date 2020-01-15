import React from 'react';
import { shallow } from 'enzyme';
import AddToCatalog from './AddCatalog';
import "../../setupTests"

let catalog = [];
let item = {
  name: 'bacon',
  size: 20,
  comment: 'more! 20 pounds Janice!',
}
let addToCatalog = () => {
  catalog.push(item)
  return catalog
}


describe('AddToCatalog', () => {
  it('canary test shows the infrastructure works', () => {
    expect(true).toEqual(true);
  });

  it('catalog length should be greater than 0', () => {
    expect(addToCatalog().length).toBeGreaterThan(0);
  })



  let wrapper;
  beforeEach(() => wrapper = shallow(<AddToCatalog />));
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  })
})
