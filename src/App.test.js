import App from './App';
import Dashboard from './pages/Dashboard';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
import store from './store';

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )
  });
  it("renders Dashboard component without crashing", () => {
    shallow(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    )
  });
});

describe("snapshots", () => {
  it("App snapshot", () => {
    const tree = shallow(<Provider store={store}><App /></Provider>);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it("Dashboard snapshots", () => {
    const dashboardTree = shallow(<Provider store={store}><Dashboard /></Provider>);
    expect(toJson(dashboardTree)).toMatchSnapshot();
  });
});