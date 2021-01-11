import renderer from 'react-test-renderer';
import {CustomSpinner} from './Spinner'

test('CustomSpinner renders correctly', () => {
    const tree = renderer
        .create(<CustomSpinner/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
