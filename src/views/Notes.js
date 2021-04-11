import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecues/Card/Card';

const Notes = ({ notes }) => (
  <GridTemplate>
    {notes.map((item) => (
      <Card id={item.id} key={item.id} {...item} />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
