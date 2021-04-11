import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecues/Card/Card';

const Articles = ({ articles }) => (
  <GridTemplate>
    {articles.map((item) => (
      <Card id={item.id} key={item.id} {...item} />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
