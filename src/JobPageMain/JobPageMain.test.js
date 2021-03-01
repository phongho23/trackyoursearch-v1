import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import JobPageMain from './JobPageMain'

describe(`JobPageMain component`, () => {
  const props = {
    job: {
      "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
      "name": "Dogs",
      "modified": "2019-01-03T00:00:00.000Z",
      // "weekId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      "content": "Corporis accusamus placeat.\n \rUnde."
    }
  }

  it('renders a .JobPageMain by default', () => {
    const wrapper = shallow(<JobPageMain />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a Jobitem with job prop', () => {
    const job = shallow(<JobPageMain {...props} />)
      .find('Jobitem')
    expect(toJson(job)).toMatchSnapshot()
  })

  it(`splits the content by \\n or \\n\\r, with a p foreach`, () => {
    [{
      job: { "content": "Content with n r.\n \rafter n r." }
    }, {
      job: { "content": "Content with n.\nafter." }
    }].forEach(props => {
      const content = shallow(<JobPageMain {...props} />)
        .find('JobPageMain__content')
      expect(toJson(content)).toMatchSnapshot()
    })
  })
})
