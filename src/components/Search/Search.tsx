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
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
