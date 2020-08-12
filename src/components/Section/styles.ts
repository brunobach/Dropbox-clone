import styled from 'styled-components';
import {FaDropbox} from 'react-icons/fa'

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  --content-width: 100%;

  &.blue {
      --bg-color: var(--color-primary);
      --text-color: var(--color-tertiary);
      --logo-color: var(--color-secondary);
  }
  &.beige {
      --bg-color: var(--color-secondary);
      --text-color: var(--color-quaternary);
      --logo-color: var(--color-primary);
  }
  &.white {
      --bg-color: var(--color-tertiary);
      --text-color: var(--color-quaternary);
      --logo-color: var(--color-blue);
  }
  &.black {
      --bg-color: var(--color-quaternary);
      --text-color: var(--color-tertiary);
      --logo-color: var(--color-blue);
  }

  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 51px;

    @media (min-width: 1024px) {
        --content-width: 50%;
        --heading-font-size: 71px;
    }
  }
  background var(--bg-color);
  position: relative;
`;

export const HeaderWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;


    clip: rect(auto, auto, auto, auto);

`

export const HeaderLink = styled.div`

  display: flex;
  flex-grow: 1;
  pointer-events: all;
  
  > a {
    color: var(--color-tertiary);
    outline: none;
    text-decoration: none;
    margin-top: 5px;
    padding: 20px 15px;
    font-size: 16px;
    appearance: none;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;

    &:hover {
        text-decoration: underline;
    }
  }
`

export const Header = styled.header`
    z-index: 3;
    background: var(--bg-color);

    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1440px;
    margin: 0 auto;
    padding: 16px 32px;

    > h1 {
        display: flex;
        align-items: center;

        > span {
            color: var(--text-color);
            margin: 10px 16px;
            font-size: 30px;
        }
    }
    > button {
        color: var(--text-color);
        background: none;
        border: none;
        outline: none;
        font-size: 16px;
        cursor: pointer;

        &:hover, &:focus {
            text-decoration: underline;
        }
    }

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`

export const DropBoxLogo = styled(FaDropbox)`
    width: 36;
    height: 32px;
    fill: var(--logo-color);
`
export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;

  > h2 {
      font-size: var(--heading-font-size);
      color: var(--logo-color);
      max-width: var(--content-width);
  }
  > p {
      margin-top: 20px;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      color: var(--text-color);
      max-width: var(--content-width);
  }

  padding: var(--padding-top) 32px var(--padding-bottom)
`;