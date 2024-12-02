import React from 'react';
import {Tooltip} from '@gravity-ui/uikit';
import {Control} from 'react-redux-form';

class ClassCpmWithDeclaredRef extends React.Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();
    }

    render() {
        return (
            <input ref={this.ref} type='text' />
            // <div ref={this.ref}>test</div>
        );
    }
}

class ClassCpmWithWithoutDeclaredRef extends React.Component {
    render() {
        return (
            <input type='text' />
        );
    }
}

export default function App() {
    return (
        <div>
            {/* The following Tooltip will crash the page */}
            <Tooltip content="Content">
                <Control.text model="user.firstName" /> {/* Original source of problem -> we can't just use Control from rrf like this */}
            </Tooltip>

            <Tooltip content="Content">
                <div>
                    <Control model="user.firstName" /> {/* This is a workaround, but sometimes we don't want to create additional div if we have control for children for example */}
                </div>
            </Tooltip>

            {/* The following Tooltip will  crash the page, but we can to handle it in gravity */}
            <Tooltip content="Content">
                <ClassCpmWithDeclaredRef /> {/* 1. We should be able to handle such components correctly without crashing */}
            </Tooltip>

            {/* The following Tooltip will crash the page, but we can print warning in gravity */}
            <Tooltip content="Content">
                <ClassCpmWithWithoutDeclaredRef /> {/* 2. We should be able to handle such legacy components without crashing and print warning in console to help user understand how to solve this problem */}
            </Tooltip>
        </div>
    );
}