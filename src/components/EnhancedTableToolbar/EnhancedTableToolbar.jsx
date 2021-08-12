import { makeStyles, lighten } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { PropTypes } from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";

export const EnhancedTableToolbar = (props) => {
  const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: "1 1 100%",
    },
  }));

  const classes = useToolbarStyles();

  return (
    <Toolbar className={clsx(classes.root)}>
      <Typography
        className={classes.title}
        variant="h5"
        id="tableTitle"
        component="span"
      >
        Sort the animes clicking on the column header
      </Typography>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
