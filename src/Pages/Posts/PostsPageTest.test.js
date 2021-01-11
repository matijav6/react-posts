import renderer from 'react-test-renderer';
import {PostsPage} from './';

test('Posts page renders correctly', () => {
    let wrapper = renderer.create(<PostsPage hello={""} sendRequest={()=>{}}/>);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
});
