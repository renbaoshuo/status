import React from 'react';
import Link from './link';

const Header = () => {
  const { SiteName, SiteUrl, Navi } = window.Config;
  return (
    <header class="page-header" role="banner">
      <h1 class="project-name">{SiteName}</h1>
      <h2 class="project-tagline"></h2>
      {Navi.map((item, index) => (
        <Link key={index} text={item.text} to={item.url} target="_self" class="btn" />
      ))}
    </header>
  );
}

export default Header;
