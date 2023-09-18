import { ChangeEvent, FormEvent } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <form>
      <input
        id="search-bar"
        role="search"
        type="search"
        placeholder="Search.."
        onChange={onChange}
      />
    </form>
  );
};

export default SearchBar;
