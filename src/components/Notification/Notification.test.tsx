import 'jest-styled-components';
import * as stories from './Notification.stories';
import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';

const {
    Regular,
    Standard,
    CustomIcon,
    Inactive,
    PositionRelative,
    PositionRelativeCustomBreakPoints,
} = composeStories(stories);

describe('Notification - Standard - Active - Regular Text - Regular Icon', () => {
    let container: HTMLDivElement;
    const message = Standard.args?.message;
    const messageId = 'test-notification-message';
    const testId = 'test-notification-id';
    const closeId = 'test-notification-x';
    const title = 'New Message';
    const titleId = 'test-notification-title';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Standard />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${testId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders title correctly', () => {
        const element = container.querySelector(`[data-testid="${titleId}"]`);
        expect(element?.textContent).toBe(title);
    });

    it('renders message correctly', () => {
        const element = container.querySelector(`[data-testid="${messageId}"]`);
        expect(element?.textContent).toBe(message);
    });

    it('should render left icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${testId}"] > svg`,
        );
        expect(iconSVG).not.toBeNull();
    });

    it('should render close icon', () => {
        const closeSVGtitle = container.querySelector(
            `[data-testid="${closeId}"] > svg > title`,
        );
        expect(closeSVGtitle?.innerHTML).toBe('x icon');
    });

    it('should render correct', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${closeId}"] > svg`,
        );
        expect(iconSVG).not.toBeNull();
    });
});

describe('Notification - Regular - Active - Custom Text - Regular Icon', () => {
    let container: HTMLDivElement;
    const testId = 'test-notification-id';
    const messageId = 'test-notification-message';
    const titleId = 'test-notification-title';
    const closeId = 'test-notification-x';
    const title = Regular?.args?.title;
    const message = Regular?.args?.message;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Regular />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${testId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders title correctly', () => {
        const element = container.querySelector(`[data-testid="${titleId}"]`);
        expect(element?.textContent).toBe(title);
    });

    it('renders message correctly', () => {
        const element = container.querySelector(`[data-testid="${messageId}"]`);
        expect(element?.textContent).toBe(message);
    });

    it('should render left icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${testId}"] > svg`,
        );
        expect(iconSVG).not.toBeNull();
    });

    it('should render close icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${closeId}"] > svg`,
        );
        expect(iconSVG).not.toBeNull();
    });
});

describe('Notification - Active - Custom Text - Custom Icon', () => {
    let container: HTMLDivElement;
    const testId = 'test-notification-id';
    const messageId = 'test-notification-message';
    const titleId = 'test-notification-title';
    const closeId = 'test-notification-x';
    const title = CustomIcon?.args?.title;
    const message = CustomIcon?.args?.message;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<CustomIcon />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${testId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders title correctly', () => {
        const element = container.querySelector(`[data-testid="${titleId}"]`);
        expect(element?.textContent).toBe(title);
    });

    it('renders message correctly', () => {
        const element = container.querySelector(`[data-testid="${messageId}"]`);
        expect(element?.textContent).toBe(message);
    });

    it('should render left icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${testId}"] > svg`,
        );
        expect(iconSVG).not.toBeNull();
    });

    it('should render close icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${closeId}"] > svg`,
        );
        expect(iconSVG).not.toBeNull();
    });
});

describe('Notification - Inactive', () => {
    let container: HTMLDivElement;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Inactive />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('should not render the component', () => {
        const element = container.querySelector(
            `[data-testid="test-notification-id"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.opacity).toEqual('0');
    });
});

describe('Notification - Standard - Active - Regular Text - Regular Icon - Relative', () => {
    let container: HTMLDivElement;
    const message = PositionRelative.args?.message;
    const messageId = 'test-notification-message';
    const testId = 'test-notification-id';
    const closeId = 'test-notification-x';
    const title = 'New Notification';
    const titleId = 'test-notification-title';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<PositionRelative />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${testId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders title correctly', () => {
        const element = container.querySelector(`[data-testid="${titleId}"]`);
        expect(element?.textContent).toBe(title);
    });

    it('renders message correctly', () => {
        const element = container.querySelector(`[data-testid="${messageId}"]`);
        expect(element?.textContent).toBe(message);
    });

    it('should render left icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${testId}"] > svg`,
        );
        expect(iconSVG).not.toBeNull();
    });

    it('should render close icon', () => {
        const closeSVGtitle = container.querySelector(
            `[data-testid="${closeId}"] > svg > title`,
        );
        expect(closeSVGtitle?.innerHTML).toBe('x icon');
    });

    it('should render correct', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${closeId}"] > svg`,
        );
        expect(iconSVG).not.toBeNull();
    });
});

describe('Notification - Standard - Active - Regular Text - Regular Icon - Relative - Config', () => {
    let container: HTMLDivElement;
    const styling =
        PositionRelativeCustomBreakPoints.args?.positionRelativeConfig;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<PositionRelativeCustomBreakPoints />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('should not render custom styles', () => {
        const element = container.querySelector(
            `[data-testid="test-notification-id"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.top).toEqual(styling?.top);
        expect(styles?.left).toEqual(styling?.left);
        expect(styles?.width).toEqual(styling?.width);
    });
});
