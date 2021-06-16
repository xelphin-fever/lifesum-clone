  

  
// CHANGE DATE
function dateReducer (state, action) {
  switch (action.type) {
    case 'increment':
      let iDate = state.date;
      iDate.setDate(iDate.getDate() + 1);
      return {date: iDate};
    case 'decrement':
      let dDate = state.date;
      dDate.setDate(dDate.getDate() -1);
      return {date: dDate};
    case 'reload':
      return {date: state.date};
    case 'update':
      return {date: action.payload}
    default:
      throw new Error();
  }
}

// CHANGE DATA
function dataReducer (state, action) {
  switch (action.type) {
    case 'update':
      return {data: action.payload};
    default:
      throw new Error();
  }
}

// CHANGE DATA
function resultsReducer (state, action) {
  switch (action.type) {
    case 'update':
      return {results: action.payload};
    default:
      throw new Error();
  }
}

// CHANGE CONFIGURATION

function configReducer (state, action) {
  switch (action.type) {
    case 'update':
      return {config: action.payload}
    default:
      throw new Error();
  }
}


export {dateReducer, dataReducer, resultsReducer, configReducer};