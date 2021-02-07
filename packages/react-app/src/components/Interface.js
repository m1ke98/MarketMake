import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import OneInchLP from "./portals/OneInchLP.js";
import AaveLP from "./portals/AaveLP.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

export default function Interface(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Paper>
            {props.user}
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <OneInchLP />
          </Grid>
          <Grid item>
            <AaveLP />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}