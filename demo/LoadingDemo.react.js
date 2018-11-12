import React from 'react';

import {Loading, Tabs, Tab} from '../src';

const LoadingDemo = () => {
    const status = {
        isLoading: true,
        propName: 'layout',
        componentName: 'Demo',
    };
    return (
        <Tabs>
            <Tab value='tab-1' label='All Spinners (no fullscreen, debug)'>
                <div>
                    <Loading status={status} debug={true} type="default" />
                    <Loading status={status} debug={true} type="circle" />
                    <Loading status={status} debug={true} type="dot" />
                    <Loading status={status} debug={true} type="cube" />
                    <Loading status={status} debug={true} type="graph" />
                </div>
            </Tab>
            <Tab value='tab-2' label='All Spinners (no fullscreen)'>
                <div>
                    <Loading status={status} type="default" />
                    <Loading status={status} type="circle" />
                    <Loading status={status} type="dot" />
                    <Loading status={status} type="cube" />
                    <Loading status={status} type="graph" />
                </div>
            </Tab>
            <Tab value='tab-3' label='Fullscreen Default spinner'>
                <Loading status={status} type="default" fullscreen={true} />
            </Tab>
            <Tab value='tab-4' label='Fullscreen Circle spinner'>
                <Loading status={status} type="circle" fullscreen={true} />
            </Tab>
            <Tab value='tab-5' label='Fullscreen Dot spinner'>
                <Loading status={status} type="dot" fullscreen={true} />
            </Tab>
            <Tab value='tab-6' label='Fullscreen Graph spinner'>
                <Loading status={status} type="graph" fullscreen={true} />
            </Tab>
            <Tab value='tab-6' label='Fullscreen Cube spinner'>
                <Loading status={status} type="cube" fullscreen={true} />
            </Tab>
        </Tabs>
    );
};

export default LoadingDemo;
