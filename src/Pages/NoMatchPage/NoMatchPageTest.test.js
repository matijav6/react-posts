import renderer from 'react-test-renderer';
import {NoMatchPage} from './';

test('No match page renders correctly', () => {
    const tree = renderer
        .create(<NoMatchPage/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
