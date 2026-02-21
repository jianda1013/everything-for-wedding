import styled, { keyframes, css } from "styled-components";

/* ---------- animations ---------- */
export const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

export const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.35); }
  50%       { box-shadow: 0 0 0 8px rgba(255, 255, 255, 0); }
`;

/* ---------- styled components ---------- */
export const MusicBtn = styled.button<{ $playing: boolean }>`
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  background: rgba(30, 30, 30, 0.72);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    background 0.25s,
    transform 0.2s;

  ${({ $playing }) =>
    $playing &&
    css`
      animation: ${pulse} 2.4s ease-in-out infinite;
    `}

  &:hover {
    background: rgba(60, 60, 60, 0.85);
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Disc = styled.span<{ $spinning: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ $spinning }) =>
    $spinning &&
    css`
      animation: ${spin} 3s linear infinite;
    `}
`;
