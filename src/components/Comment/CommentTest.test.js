import renderer from 'react-test-renderer';
import {Comment} from './Comment'

test('Comment renders correctly', () => {
    const tree = renderer
        .create(<Comment/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
