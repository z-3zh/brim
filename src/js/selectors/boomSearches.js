/* @flow */

import {createSelector} from "reselect"

import type {State} from "../reducers/types"
import {getBoomSearches} from "../reducers/boomSearches"
import {getResultsTab} from "../reducers/view"

export const getPrimarySearch = createSelector<State, void, *, *, *>(
  getBoomSearches,
  getResultsTab,
  (searches, tab) => {
    if (tab === "logs") return searches["LogSearch"]
    if (tab === "analytics") return searches["AnalyticSearch"]
  }
)

export const getHistogramStatus = createSelector<State, void, *, *>(
  getBoomSearches,
  searches => {
    const search = searches["HistogramSearch"]
    return search && search.status
  }
)
