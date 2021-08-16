import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className="header">
      头部
      <div>头像</div>
    </header>
  );
};

export default Header;
