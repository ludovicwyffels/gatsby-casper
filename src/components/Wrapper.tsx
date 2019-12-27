import * as React from 'react';
import './Wrapper.scss'

interface WrapperProps {
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => (
  <div className={`StyledWrapper ${className}`}>{children}</div>
);

export default Wrapper;
