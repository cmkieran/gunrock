import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, Typography, withStyles
} from '@material-ui/core';

import Layout from '../components/site/Layout';

const styles = (theme) => ({
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 16,
  },
  cardContent: {
    paddingTop: 0,
    paddingBottom: 0
  }
});

const NotFoundPage = React.memo(({ classes }) => (
  <Layout title="Page not found">
    <div className={classes.cardContainer}>
      <Card>
        <CardContent>
          <Typography variant="h1" align="center" gutterBottom>
            {":'‑("}
          </Typography>
          <Typography variant="h3" align="center">
            Page Not Found
          </Typography>
        </CardContent>
      </Card>
    </div>
  </Layout>
));

NotFoundPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(NotFoundPage);
