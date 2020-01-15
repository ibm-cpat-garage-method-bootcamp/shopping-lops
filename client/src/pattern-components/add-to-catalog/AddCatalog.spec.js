import React from 'react';
import { shallow, mount } from 'enzyme';
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
  let wrapper;
  beforeEach(() => wrapper = mount(<AddToCatalog />));

  describe('addToCatalog', () => {
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

    it('should render a <div />', () => {
      expect(wrapper.find('.awesomeDiv').length).toEqual(1);
    });

    it('input should be found', () => {
      expect(wrapper.find('input').length).toEqual(3);
    });

    describe('validhandleSubmitClick', () => {
      beforeEach(() => wrapper.find('input').at(0).simulate('change', { target: { name: 'itemName', value: 'bacon' } }));
      beforeEach(() => wrapper.find('button').simulate('click'));
      it('adding item to catalog should make local state catalog greater than 0', () => {
        expect(wrapper.state().catalog.length).toBeGreaterThan(0);
      });

      it('name field needs to be a string before item can be added', () => {
        expect(typeof(wrapper.state().catalog[0].itemName) === 'string').toEqual(true);
      });

      it('name field needs to be filled before item can be added', () => {
        expect(wrapper.state().catalog[0].itemName.trim().length).toBeGreaterThan(0);
      });

      it('thank you paragraph is no longer hidden', () => {
        expect(wrapper.state().message.length).toBeGreaterThan(1);
      })
    });

    describe('nonvalidhandleSubmitClick', () => {
      it('if field name is empty then the form will throw an alert', () => {
        wrapper.find('input').at(0).simulate('change', { target: { name: 'itemName', value: '' } });
        wrapper.find('button').simulate('click');
        expect(wrapper.state().alert).toEqual(true);
      });
    });
  });

});
