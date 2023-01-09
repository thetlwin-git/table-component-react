import { render, screen } from '@testing-library/react';
import DefaultLayout from "./";
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from "react-redux";
import store from '../../store';

const MockProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

function UpgradeBlockWithStore({ layout, ...props } = {}) {
    return shallow(
        <MockProvider>
            <DefaultLayout {...props} />
        </MockProvider>
    );
}

describe('checking component exists', () => {
    test('should have', () => {
        const history = createMemoryHistory();
        const wrapper = UpgradeBlockWithStore({ history });
        const headerContainer = wrapper.find("#header");
        const footerContainer = wrapper.find("#footer");
        expect(headerContainer.exists()).toBe(false);
        expect(footerContainer.exists()).toBe(false);
    });
});