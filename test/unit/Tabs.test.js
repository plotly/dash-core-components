import Tabs from '../../src/components/Tabs.react.js';
import Tab from '../../src/components/Tab.react.js';
import React from 'react';
import {mount, shallow, render} from 'enzyme';

test('Tabs are defined', () => {
    const tabs = <Tabs />;

    expect(tabs).toBeDefined();
});

test('Tabs render', () => {
    const tabs = render(
        <Tabs>
            <Tab label="test-tab" />
        </Tabs>
    );

    expect(tabs.html()).toBeDefined();
});

test('Tabs parses inline styles if they are set', () => {
    const testColor = 'hotpink';
    const testStyle = {
        backgroundColor: testColor,
    };
    const tabs = render(
        <Tabs id="tabs" style={testStyle} parent_style={testStyle}>
            <Tab label="test-tab" />
        </Tabs>
    );

    expect(tabs.find('#tabs').prop('style')['background-color']).toEqual(
        testColor
    );
    expect(tabs.find('#tabs').prop('style')['background-color']).toEqual(
        testColor
    );
    expect(tabs.find('#tabs-parent').prop('style')['background-color']).toEqual(
        testColor
    );
});
test('Tabs correctly appends classes', () => {
    const testClass = 'tabs-test';
    const tabs = render(
        <Tabs id="tabs" className={testClass}>
            <Tab label="test-tab" />
        </Tabs>
    );

    expect(tabs.find('#tabs').prop('class')).toEqual("jsx-3394342712 tab-container " + testClass);
});
