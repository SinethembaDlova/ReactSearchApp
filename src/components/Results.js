import React from 'react';
import {Grid, ListGroup, ListGroupItem} from 'react-bootstrap';

const Results = () => (
<Grid>
    <h2>Results List</h2>
    <ListGroup>
  <ListGroupItem href="//www.google.com" active>Google</ListGroupItem>
  <ListGroupItem href="//www.facebook.com">Facebook</ListGroupItem>
  <ListGroupItem href="//www.twitter.com">Twitter</ListGroupItem>
</ListGroup>
</Grid>
);

export default Results;