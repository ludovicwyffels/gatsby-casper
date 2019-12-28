import * as React from 'react';
import './PostFullFooter.scss'

const PostFullFooter: React.FC = props => (
  <footer className="post-full-foot">{props.children}</footer>
);

export default PostFullFooter;
