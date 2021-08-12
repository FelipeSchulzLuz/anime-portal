import { PropTypes } from "prop-types";
import {
  TableRow,
  TableCell,
  TableHead,
  TableSortLabel,
} from "@material-ui/core";

export function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const headCells = [
    { id: "mal_id", label: "Id", minWidth: 170 },
    { id: "title", label: "Title", minWidth: 170 },
    { id: "season_year", label: "Season Year", minWidth: 50, numeric: true },
    { id: "start_date", label: "Start Date", minWidth: 50 },
  ];
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
