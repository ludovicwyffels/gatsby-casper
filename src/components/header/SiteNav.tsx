// tslint:disable:no-http-string
import { Link } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/core';

import { SocialLink } from '../../styles/shared';
import config from '../../website-config';
import Facebook from '../icons/facebook';
import Twitter from '../icons/twitter';
import SubscribeModal from '../subscribe/SubscribeOverlay';
import SiteNavLogo from './SiteNavLogo';

import './sitenav.scss';

const HomeNavRaise = css`
  @media (min-width: 900px) {
    position: relative;
    top: -70px;
  }
`;

const SiteNavStyles = css`
  position: relative;
  z-index: 300;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: hidden;
  height: 40px;
  font-size: 1.2rem;
`;

interface SiteNavProps {
  isHome?: boolean;
}

class SiteNav extends React.Component<SiteNavProps> {
  subscribe = React.createRef<SubscribeModal>();

  openModal = () => {
    if (this.subscribe.current) {
      this.subscribe.current.open();
    }
  };

  render() {
    const { isHome = false } = this.props;
    return (
      <nav css={[isHome && HomeNavRaise, SiteNavStyles]}>
        <div className="SiteNavLeft">
          {!isHome && <SiteNavLogo />}
          <ul className="NavStyles" role="menu">
            {/* TODO: mark current nav item - add class nav-current */}
            <li role="menuitem">
              <Link to="/">Home</Link>
            </li>
            <li role="menuitem">
              <Link to="/about">About</Link>
            </li>
            <li role="menuitem">
              <Link to="/tags/getting-started/">Getting Started</Link>
            </li>
          </ul>
        </div>
        <div className="SiteNavRight">
          <div className="SocialLinks">
            {config.facebook && (
              <a
                css={SocialLink}
                href={config.facebook}
                target="_blank"
                title="Facebook"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            )}
            {config.twitter && (
              <a
                css={SocialLink}
                href={config.twitter}
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
            )}
          </div>
          {config.showSubscribe && (
            <a className="SubscribeButton" onClick={this.openModal}>
              Subscribe
            </a>
          )}
          {config.showSubscribe && <SubscribeModal ref={this.subscribe} />}
        </div>
      </nav>
    );
  }
}

export default SiteNav;
