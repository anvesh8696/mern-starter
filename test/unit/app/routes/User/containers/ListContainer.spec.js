import React from 'react'
import configStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import expect from 'expect'

import ListContainer from 'App/routes/User/containers/ListContainer'
import ListItem from 'App/routes/User/components/ListItem'

import { USER_TYPE_ADMIN, USER_TYPE_USER } from 'Server/models/User'

describe('<ListContainer />', () => {
  const mockStore = configStore()

  it('should render messages', () => {
    const users = [
      {
        _id: 'user-id-1',
        username: 'username-1',
        type: USER_TYPE_ADMIN,
        createdAt: '2017-02-14T15:55:45.336Z',
      },
      {
        _id: 'user-id-2',
        username: 'username-2',
        type: USER_TYPE_USER,
        createdAt: '2017-02-12T15:55:45.336Z',
      },
    ]

    const store = mockStore({
      users,
    })

    const wrapper = shallow(<ListContainer store={store} />).shallow()
    expect(wrapper.find(ListItem).length).toBe(users.length)
  })
})
