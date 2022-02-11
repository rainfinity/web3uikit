import styled from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
import { StepNumberProps } from './types';

type TStyleProps = Pick<
    StepNumberProps,
    'activeStep' | 'thisStep' | 'stepTotal'
>;

export const SectionStyled = styled.section`
    display: block;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const OrderedListStyled = styled.ol`
    ${resetCSS};
    align-items: center;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 40px;
    position: relative;
    text-align: center;
    width: 100%;
`;

export const ListItemStyled = styled.li<TStyleProps>`
    ${resetCSS};
    ${fonts.text};
    align-items: center;
    border: 2px solid ${color.green};
    border-radius: 50%;
    color: ${color.white};
    display: flex;
    font-size: 24px;
    height: 32px;
    justify-content: center;
    line-height: 0;
    position: relative;
    width: 32px;

    background-color: ${(p) =>
        p.activeStep <= p.thisStep ? color.green : color.white};
    opacity: ${(p) => (p.activeStep < p.thisStep ? '50%' : '100%')};
`;

export const SpanStyled = styled.span<TStyleProps>`
    background-color: rgba(46, 125, 175, 0.3);
    border: none;
    display: block;
    height: 2px;

    &:last-of-type {
        display: none;
    }

    width: calc(
        (100% / ${(p) => p.stepTotal - 1}) -
            (${(p) => (p.stepTotal === 2 ? '90px' : '64px')})
    );
`;

export const DivStyled = styled.div`
    text-align: center;

    div[role='spinner'] {
        margin: 30px auto;
    }
`;

export const DivStyledContent = styled.div`
    ${resetCSS};
    ${fonts.text};
    display: block;
    margin: 20px 20px 32px;

    p,
    i {
        ${resetCSS};
        ${fonts.text};
    }

    :hover {
        display: block;
        height: auto;
    }
`;

export const NavStyled = styled.nav`
    display: flex;
    justify-content: center;
    margin-top: 12px;

    button {
        margin: 0 12px;
    }
`;

export const FooterStyled = styled.footer``;

export const DivStyledHelper = styled.div`
    margin-top: 26px;
    text-align: center;

    p,
    i,
    span {
        ${fonts.text};
        font-size: 12px;
    }

    img,
    button {
        margin: 0 auto;
    }
`;
