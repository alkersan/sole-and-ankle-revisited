import React from 'react';
import styled from 'styled-components/macro';

import {QUERIES} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          {/*<NavLink href="/sale">Sale</NavLink>*/}
          {/*<NavLink href="/new">New&nbsp;Releases</NavLink>*/}
          {/*<NavLink href="/men">Men</NavLink>*/}
          {/*<NavLink href="/women">Women</NavLink>*/}
          {/*<NavLink href="/kids">Kids</NavLink>*/}
          {/*<NavLink href="/collections">Collections</NavLink>*/}
          <NavLink href="/sale">A&nbsp;vendre</NavLink>
          <NavLink href="/new">Nouvelles&nbsp;Versions</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/women">Femmes</NavLink>
          <NavLink href="/kids">Les&nbsp;Enfants</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileHeader>
            <Icon id="shopping-bag" strokeWidth={2} size={24} />
            <Icon id="search" strokeWidth={2} size={24} />
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                <Icon id="menu" strokeWidth={2} size={24} />
            </UnstyledButton>
        </MobileHeader>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;
  overflow-y: hidden;

  @media ${QUERIES.tablet} {
    border-top: 4px solid var(--color-gray-900);
  }
  
  @media ${QUERIES.phone} {
    padding-inline: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1.5rem, 12vw - 7rem, 3rem);
  margin: 0px 48px;
  
  @media ${QUERIES.tablet} {
    display: none;
  }
`;

const MobileHeader = styled.div`
  display: none;
  
  @media ${QUERIES.tablet} {
    display: flex;
    gap: 34px;
  }

  @media ${QUERIES.phone} {
    gap: 16px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
