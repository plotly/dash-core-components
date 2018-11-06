import Loading from '../../src/components/Loading.react.js';
import React from 'react';
import {render} from 'enzyme';

test('Loading renders', () => {
    const statusMock = {
        isLoading: true,
        propName: 'children',
        componentName: 'div'
    }
    const loading = render(
        <Loading status={statusMock}>
            <div>Loading is done!</div>
        </Loading>
    );

    expect(loading.html()).toBeDefined();
});
test('Loading renders without status', () => {
    const loading = render(
        <Loading>
            <div>Loading is done!</div>
        </Loading>
    );

    expect(loading.html()).toBeDefined();
});
test('Loading renders without status.isLoading', () => {
    const statusMock = {
        propName: 'children',
        componentName: 'div'
    }
    const loading = render(
        <Loading status={statusMock}>
            <div>Loading is done!</div>
        </Loading>
    );

    expect(loading.html()).toBeDefined();
});
test('Loading renders without status.propName', () => {
    const statusMock = {
        isLoading: true,
        componentName: 'div'
    }
    const loading = render(
        <Loading status={statusMock}>
            <div>Loading is done!</div>
        </Loading>
    );

    expect(loading.html()).toBeDefined();
});
test('Loading renders without status.componentName', () => {
    const statusMock = {
        isLoading: true,
        propName: 'children'
    }
    const loading = render(
        <Loading status={statusMock}>
            <div>Loading is done!</div>
        </Loading>
    );

    expect(loading.html()).toBeDefined();
});
test('Loading renders without children', () => {
    const statusMock = {
        isLoading: false,
        propName: 'children',
        componentName: 'div'
    }
    const loading = render(
        <Loading status={statusMock} />
    );

    expect(loading.html()).toBeDefined();
});