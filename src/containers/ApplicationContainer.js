import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import Application from 'components/Application/Application';

const ApplicationContainer = () => {
    return (
        <PageTemplate>
            <Application />
        </PageTemplate>
    );
}

export default ApplicationContainer;