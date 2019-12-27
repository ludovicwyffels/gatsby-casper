import { Link } from 'gatsby';
import Img from 'gatsby-image';
import * as _ from 'lodash';
import * as React from 'react';
import { PageContext } from '../templates/post';

import './PostCard.scss'

export interface PostCardProps {
  post: PageContext;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className={`PostCardStyles post-card ${post.frontmatter.image ? '' : 'no-image'}`}>
      {post.frontmatter.image && (
        <Link className="post-card-image-link PostCardImageLink" to={post.fields.slug}>
          <div className="post-card-image PostCardImage">
            {post.frontmatter.image &&
              post.frontmatter.image.childImageSharp &&
              post.frontmatter.image.childImageSharp.fluid && (
                <Img
                  alt={`${post.frontmatter.title} cover image`}
                  style={{ height: '100%' }}
                  fluid={post.frontmatter.image.childImageSharp.fluid}
                />
              )}
          </div>
        </Link>
      )}
      <div className="post-card-content PostCardContent">
        <Link className="post-card-content-link PostCardContentLink" to={post.fields.slug}>
          <header className="post-card-header">
            {post.frontmatter.tags && (
              <span className="PostCardTags">{post.frontmatter.tags[0]}</span>
            )}
            <h2 className="PostCardTitle">{post.frontmatter.title}</h2>
          </header>
          <section className="PostCardExcerpt">
            <p>{post.excerpt}</p>
          </section>
        </Link>
        <footer className="post-card-meta PostCardMeta">
          <ul className="AuthorList">
            <li className="AuthorListItem">
              <div className="author-name-tooltip AuthorNameTooltip">
                {post.frontmatter.author.id}
              </div>
              <Link
                className="StaticAvatar"
                to={`/author/${_.kebabCase(post.frontmatter.author.id)}/`}
              >
                <img
                  className="AuthorProfileImage"
                  src={post.frontmatter.author.avatar.children[0].fixed.src}
                  alt={post.frontmatter.author.id}
                />
              </Link>
            </li>
          </ul>
          <span className="ReadingTime">{post.timeToRead} min read</span>
        </footer>
      </div>
    </article>
  );
};

export default PostCard;
