import Dashboard from './';
import { shallow, mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import { Provider } from "react-redux";
import store from '../../store';

const MockProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

function UpgradeBlockWithStore({ dashboard, ...props } = {}) {
  return shallow(
    <MockProvider>
      <Dashboard {...props} />
    </MockProvider>
  );
}

describe('checking component exists', () => {
  test('should have', () => {
    const history = createMemoryHistory();
    const wrapper = UpgradeBlockWithStore({ history });
    const simpleTableContainer = wrapper.find("#simple-table");
    const sortTableContainer = wrapper.find("#sort-table");
    const selectCheckboxTableContainer = wrapper.find("#select-checkbox-table");
    const selectOptionTableContainer = wrapper.find("#select-option-table");
    // console.log('simpleTableContainer',simpleTableContainer)
    expect(simpleTableContainer.exists()).toBe(false);
    expect(sortTableContainer.exists()).toBe(false);
    expect(selectCheckboxTableContainer.exists()).toBe(false);
    expect(selectOptionTableContainer.exists()).toBe(false);
  });
});