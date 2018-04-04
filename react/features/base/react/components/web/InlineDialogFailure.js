/* @flow */

import Button from '@atlaskit/button';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { translate, translateToHTML } from '../../../i18n';

declare var interfaceConfig: Object;

/**
 * Inline dialog that represents a failure and allows a retry.
 */
class InlineDialogFailure extends Component<*> {
    /**
     * {@code InlineDialogFailure}'s property types.
     *
     * @static
     */
    static propTypes = {
        /**
         * Allows to retry the call that previously didn't succeed.
         */
        onRetry: PropTypes.func,

        /**
         * Invoked to obtain translated strings.
         */
        t: PropTypes.func
    };

    /**
     * Renders the content of this component.
     *
     * @returns {ReactElement}
     */
    render() {
        const { t } = this.props;
        const supportLink = interfaceConfig.SUPPORT_URL;
        const supportString = translateToHTML(t,
                'inlineDialogFailure.supportMsg', { url: supportLink });

        return (
            <div className = 'inline-dialog-error'>
                <div className = 'inline-dialog-error-text'>
                    { t('inlineDialogFailure.msg') }
                </div>
                <div className = 'inline-dialog-error-text'>
                    { supportString }
                </div>

                <Button
                    className = 'inline-dialog-error-button'
                    onClick = { this.props.onRetry } >
                    { t('inlineDialogFailure.retry') }
                </Button>
            </div>
        );
    }
}

export default translate(InlineDialogFailure);
