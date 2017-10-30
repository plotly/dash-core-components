import React from 'react';
import {shallow} from 'enzyme';
import CheckListComponent from '../Checklist.react';

describe('Checklist component', () => {

    it('renders', () => {
        const component = shallow(<CheckListComponent id="my-checklist"/>);
        expect(component).to.be.ok;
    });

    describe('options', () => {
        it('renders passed-in options');
    });
});
