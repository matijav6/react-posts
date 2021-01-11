import renderer from 'react-test-renderer';
import {Post} from './Post'

test('Post renders correctly', () => {
    const tree = renderer
        .create(<Post/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
