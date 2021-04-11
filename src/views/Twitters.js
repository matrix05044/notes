import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecues/Card/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate>
    {twitters.map((item) => (
      <Card id={item.id} key={item.id} {...item} />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);
