// libraries:
import { useState } from "react";

// importing icons:
import { Search as SearchIcon } from "lucide-react";

// main:
const Search = () => {
  // states:
  const [isSearchBarActive, setIsSearchBarActive] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  // functions:
  // const handleSearch = (): void => {};

  return (
    <div className="relative _search">
      <input
        onFocus={() => setIsSearchBarActive(true)}
        onBlur={() => !searchText && setIsSearchBarActive(false)}
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        type="text"
        className={`w-full px-2 py-5 duration-100 rounded-md outline-[--primary-violet-op33] h-9 focus:bg-[--primary-violet-op33] text-[--primary-text-slate] ${
          isSearchBarActive ? "bg-[--primary-violet-op33]" : "bg-transparent"
        }`}
      />
      <span
        className={`absolute top-0 left-0 flex items-center w-full gap-1 px-2 py-5 bg-[--primary-violet-op33] text-[--primary-violet-op77] border-[--primary-violet-op33] border-2 duration-200 rounded-md h-9 -z-10 text-lg ${
          isSearchBarActive ? "-translate-y-3 opacity-0" : ""
        }`}
      >
        Search
      </span>

      <div className="absolute top-0 right-0 h-full px-2 text-[--primary-violet-light] flex items-center">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
