// Packages
import React from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
// Pages
import DetailView from "../../pages/Detail";
import SearchView from "../../pages/Search";

export function NavigationContent() {
  const query = new URLSearchParams(useLocation().search);

  return (
    <main role="main">
      <Router>
        <Route
          exact
          path="/items"
          render={() => <SearchView search={query.get("search")} />}
        />
        <Route path="/items/:id" component={DetailView} />
      </Router>
    </main>
  );
}
