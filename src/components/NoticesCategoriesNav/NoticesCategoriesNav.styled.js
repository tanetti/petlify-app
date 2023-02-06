import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
export const NavList = styled('ul')`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  gap: 12px;

  padding: 0;
  margin: 0;
  margin-bottom:20px;

  list-style: none;
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 57px;
  }

    ${({ theme }) => theme.breakpoints.up('tablet')} {
    margin-bottom: 60px;
  }

  
`;

export const NoticesNavLink = styled(NavLink)`
  position: relative;

  font-size: 32px;
  line-height: 1.38;

  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.palette.text.secondary};

  transition: ${({ theme }) =>
    theme.transitions.create(['color'], {
      duration: theme.transitions.duration.standard,
    })};

  ${({ theme }) => theme.breakpoints.up('tablet')} {
    font-size: 48px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    padding: 10px 0;

    font-size: 20px;
    line-height: 1.35;
  }

  &:hover,
  &:focus,
  &.active {
    color: ${({ theme }) => theme.palette.accent.main};
  }

  &::after {
    content: '';

    position: absolute;
    bottom: 7px;

    display: block;

    width: 100%;
    height: 1px;

    background-color: ${({ theme }) => theme.palette.accent.main};

    transform: scaleX(0);
    transform-origin: center;

    transition: ${({ theme }) =>
      theme.transitions.create(['transform'], {
        duration: theme.transitions.duration.standard,
      })};

    ${({ theme }) => theme.breakpoints.up('desktop')} {
      bottom: 13px;
    }
  }

  &.active::after {
    transform: scaleX(1);
  }
`;