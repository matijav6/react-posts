import renderer from 'react-test-renderer';
import App from './App'

test('Post renders correctly', () => {
    const tree = renderer
        .create(<App/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
