import React from 'react'
import { mount } from 'enzyme'
import ExplodingText from '../ExplodingText'

test('render the letters wrapped in spans', () => {
  const wrapper = mount(<ExplodingText>test</ExplodingText>)
  expect(wrapper.find('span').length).toEqual(4)
  expect(wrapper.find('span').map(s => s.text())).toEqual(['t', 'e', 's', 't'])
})

test('render the letters in a row by default', () => {
  const wrapper = mount(<ExplodingText>test</ExplodingText>)
  expect(
    wrapper
      .find('span')
      .first()
      .prop('style')
  ).toEqual(
    expect.objectContaining({
      left: '0ch',
    })
  )
})

test('render the letters in random locations when exploded', () => {
  const wrapper = mount(<ExplodingText initExploded={true}>t</ExplodingText>)
  const style = wrapper.find('span').prop('style')

  expect(style.left).toEqual(expect.stringContaining('.5ch'))
  expect(style.top).toEqual(expect.stringContaining('.5em'))
})
