import { countriesPerPageData, totalPages } from "./countriesData";

export const initialState = {
  darkMode: false,
  showFilters: false,
  countriesData: [],
  countriesPerPage: [],
  search: "",
  filter: "",
  totalPages: 0,
  currentPage: 1,
  regions: ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"],
};

export const actions = {
  theme: "set_theme",
  search: "set_search",
  countries: "set_countries",
  filter: "set_filter",
  showFilters: "set_showFilters",
  hideFilters: "set_hideFilters",
  nextPage: "next_page",
  prevPage: "prev_page",
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    // set theme
    case actions.theme: {
      if (state.darkMode) {
        document.documentElement.classList.remove("dark-mode");
        return {
          ...state,
          darkMode: !state.darkMode,
        };
      }
      document.documentElement.classList.add("dark-mode");
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }

    // set countries
    case actions.countries:
      return {
        ...state,
        countriesData: payload,
        countriesPerPage: countriesPerPageData(payload, state.currentPage),
        totalPages: totalPages(payload),
      };

    // search countries
    case actions.search: {
      if (!payload) {
        // state.countriesPerPage = state.countriesData;
        return {
          ...state,
          search: payload,
          countriesPerPage: countriesPerPageData(state.countriesData, 1),
          totalPages: totalPages(state.countriesData),
          currentPage: 1,
        };
      }

      const searchQuery = state.countriesData.filter((country) =>
        country.name.common.toLowerCase().startsWith(payload.toLowerCase())
      );

      return {
        ...state,
        search: payload,
        countriesPerPage: searchQuery,
        totalPages: totalPages(searchQuery),
        currentPage: 1,
      };
    }

    // showFilters
    case actions.showFilters:
      return {
        ...state,
        showFilters: !state.showFilters,
      };

    // hideFilters
    case actions.hideFilters:
      return {
        ...state,
        showFilters: false,
      };

    // filter countries
    case actions.filter: {
      if (payload === "All") {
        return {
          ...state,
          filter: payload,
          // countriesPerPage: state.countriesData,
          totalPages: totalPages(state.countriesData),
          currentPage: 1,
          showFilters: false,
        };
      }

      const filter = state.countriesData.filter(
        (country) => country.region === payload
      );

      return {
        ...state,
        filter: payload,
        countriesPerPage: countriesPerPageData(filter, 1),
        totalPages: totalPages(filter),
        currentPage: 1,
        showFilters: false,
      };
    }

    // next page
    case actions.nextPage:
      if (state.currentPage === state.totalPages) return state;
      return {
        ...state,
        countriesPerPage: countriesPerPageData(
          state.countriesData,
          state.currentPage + 1
        ),
        currentPage: state.currentPage + 1,
      };

    // prev page
    case actions.prevPage:
      if (state.currentPage === 1) return state;
      return {
        ...state,
        countriesPerPage: countriesPerPageData(
          state.countriesData,
          state.currentPage - 1
        ),
        currentPage: state.currentPage - 1,
      };

    default:
      return state;
  }
};
