import styled from 'styled-components';

export const MainControl = styled.main`
    width: 220px;
    height: 220px;
    border-radius: 100%;
    border: 1px solid #000;
    position: relative;
    display: flex;

    button {
        position: absolute;

        &.up {
            left: 50%;
            transform: translate(-50%);
        }

        &.down {
            bottom: 0%;
            left: 50%;
            transform: translate(-50%);
        }

        &.left {
            top: 50%;
            left: 0%;
            transform: translateY(-50%);
        }

        &.right {
            top: 50%;
            right: 0%;
            transform: translateY(-50%);
        }

        &.select-option {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            border-radius: 100%
        }
    }
`;