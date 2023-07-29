import { Pagination } from "@mui/material";
import {UserPaginationProps} from '../../utils/interfaces'

const UserPagination: React.FC<UserPaginationProps> = ({ count, page, onChange }) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      color="primary"
      style={{ marginTop: "16px" }}
    />
  );
};
export default UserPagination;