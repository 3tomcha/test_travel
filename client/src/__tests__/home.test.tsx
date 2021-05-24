import * as React from 'react';
import '../setupEnzyme';
import Home from '../components/Home';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('aaa', () => {
    const home = shallow(<Home/>);
    console.log(home.debug());
    // const tree = renderer.create(<Home/>).toJSON();
    
    // expect(tree).toMatchSnapshot();
});
