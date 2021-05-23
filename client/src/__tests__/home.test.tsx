import * as React from 'react';
import '../setupEnzyme';
import Home from '../components/Home';
import { shallow } from 'enzyme';

test('aaa', () => {
    expect('abc').toBe('def');
    const Homes = shallow(<Home/>);
});
