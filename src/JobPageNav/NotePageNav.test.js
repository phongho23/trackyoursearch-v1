import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import JobPageNav from './JobPageNav'

describe(`JobPageNav component`, () => {
  const props = {
    week: {
      "name": "Important"
    }
  }

  it('renders a .JobPageNav by default', () => {
    const wrapper = shallow(<JobPageNav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a h3 with week name when in props', () => {
    const h3 = shallow(<JobPageNav {...props} />)
      .find('.JobPageNav__week-name')
    expect(toJson(h3)).toMatchSnapshot()
  })
})
