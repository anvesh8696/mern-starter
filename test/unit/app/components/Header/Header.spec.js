import React from 'react'
import configStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import expect from 'expect'

import Header from 'App/components/Header'

describe('<Header />', () => {
  const mockStore = configStore()

  it('should render login link for guests', () => {
    const store = mockStore()
    const wrapper = shallow(<Header store={store} />).shallow()
    expect(wrapper.find({ to: '/login' }).length).toBe(1)
  })

  it('should render logout link for logged in users', () => {
    const store = mockStore({
      user: {
        username: 'username',
      },
    })
    const wrapper = shallow(<Header store={store} />).shallow()
    expect(wrapper.find({ to: '/logout' }).length).toBe(1)
  })
})
