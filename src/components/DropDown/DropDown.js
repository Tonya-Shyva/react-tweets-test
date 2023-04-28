import { Option, Select } from './DropDown.styled';

export const Dropdown = ({ filter, setFilter }) => {
  return (
    <Select
      value={filter}
      onChange={e => {
        setFilter(e.target.value);
      }}
    >
      <Option value="all">Show all</Option>
      <Option value="follow">Follow</Option>
      <Option value="following">Following</Option>
    </Select>
  );
};
