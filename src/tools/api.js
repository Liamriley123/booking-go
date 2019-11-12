import axios from "axios";

const getLocations = async (size, searchTerm) => {
  if (!searchTerm) {
    return Promise.resolve([]);
  } else {
    const { data } = await axios.get(
      `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${size}&solrTerm=${searchTerm}`
    );
    return data.results.docs;
  }
};

export default getLocations;
