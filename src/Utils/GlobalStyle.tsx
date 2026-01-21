import { css, Global } from "@emotion/react";

const styles = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 700;
    }

    html,
    body,
    #root {
        height: 100%;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }

    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        color: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }

    #root {
        isolation: isolate;
    }

    ul,
    ol {
        list-style: none;
        padding: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        cursor: pointer;
        background: none;
        border: none;
    }
`

export function GlobalStyle() {
    return <Global styles={styles} />
}