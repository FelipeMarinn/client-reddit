import { shallow } from "enzyme"
import React from "react"
import App from "../../app/App"

describe('App', () => {
    test('render components correctly', () => {
        const wrapper = shallow(<App />)
        expect(wrapper).toMatchSnapshot()
    })
})