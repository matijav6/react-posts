import renderer from 'react-test-renderer';
import {PostPage} from './';

test('Post page renders correctly', () => {
    let location = {state: {post: {comments: [], user: {}, body: '', title: '', id: 0, userId: 0}}};
    let wrapper = renderer.create(<PostPage hello={''} location={location} sendRequest={() => {}}/>);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
});
