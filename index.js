import React, { Component } from "react";
import MatchesTable from "./matchesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getMatches } from "../services/matches";
import { getLeagues } from "../services/leagues";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import { teams } from "./../services/teams";

class Matches extends Component {
  state = {
    matches: [],
    leagues: [],
    currentPage: 1,
    pageSize: 5,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
//     const leagues = [
      { _id: "", name: "All Leagues", teams: [] },
      ...getLeagues(),
    ];

    this.setState({ matches: getMatches(), leagues });
  }

  handleDelete = (match) => {
    const matches = this.state.matches.filter((m) => m._id !== match._id);
    this.setState({ matches });
  };

  handleLike = (match) => {
    const matches = [...this.state.matches];
    const index = matches.indexOf(match);
    matches[index] = { ...matches[index] };
    matches[index].liked = !matches[index].liked;
    this.setState({ matches });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleLeagueSelect = (league) => {
    this.setState({ selectedLeague: league, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedLeague,
      matches: allmatches,
    } = this.state;

    const filtered =
      selectedLeague && selectedLeague._id
        ? allmatches.filter((m) => m.league._id === selectedLeague._id)
        : allmatches;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const matches = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: matches };
  };

  render() {
    const { length: count } = this.state.matches;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <p>There are no matches in the database.</p>;

    const { totalCount, data: matches } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.leagues}
            selectedItem={this.state.selectedLeague}
            onItemSelect={this.handleLeagueSelect}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} matches in the database.</p>
          <MatchesTable
            matches={matches}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Matches;
