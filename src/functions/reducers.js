  

  
// CHANGE DATE
function dateReducer (state, action) {
  switch (action.type) {
    case 'increment':
      let iDate = state.date;
      iDate.setDate(iDate.getDate() + 1);
      console.log('added: ', iDate);
      return {date: iDate};
    case 'decrement':
      let dDate = state.date;
      dDate.setDate(dDate.getDate() -1);
      return {date: dDate};
    case 'reload':
      return {date: state.date};
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


export {dateReducer, dataReducer};