import SearchFilters from "../components/search/SearchFilters";
import ResultList from "../components/search/ResultList";

const SearchPage = () => {
    return (
        <div className="content">
            <SearchFilters /> 
            <ResultList /> 
        </div>
    )
}

export default SearchPage;