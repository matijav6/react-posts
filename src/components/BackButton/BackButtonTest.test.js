import renderer from 'react-test-renderer';
import {BackButton} from './BackButton'

test('Back button renders correctly', () => {
    const tree = renderer
        .create(<BackButton/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
