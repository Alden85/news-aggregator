import { SyntheticEvent, useState } from "react";

interface Props {
  onSearchChange: (term: string) => void;
}

const Search = ({ onSearchChange }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const query = target.value;
    setSearchTerm(query);
    onSearchChange(query); // Call the handler passed via props
  };

  return (
    <div className="input-group mb-3">
      <span className="input-group-text mt-1" id="basic-addon1">
        Sarch
      </span>
      <input
        type="text"
        placeholder="search articles..."
        value={searchTerm}
        onChange={handleInputChange}
        className="form-control mt-1"
      />
    </div>
  );
};

export default Search;
