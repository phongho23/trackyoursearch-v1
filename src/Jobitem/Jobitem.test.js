import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Jobitem from './Jobitem'

describe(`Jobitem component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
    modified: new Date(2018, 12, 15),
  }

  it('renders a .Jobitem by default', () => {
    const wrapper = shallow(<Jobitem />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Jobitem given props', () => {
    const wrapper = shallow(<Jobitem {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
