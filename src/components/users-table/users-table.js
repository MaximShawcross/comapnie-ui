import { TableHeader } from '../table-header/table-header';
import { UsersTableHeader } from '../users-table-header/users-table-header';
import { UsersTableList } from '../users-table-list/users-table-list';
import "./users-table.scss";


export const UsersTable = () => {
	return (
		<section className="users">
			<TableHeader />
			<div className="devider"></div>
			<table className="table-content">
				<UsersTableHeader />

				<tbody>
					<UsersTableList />
				</tbody>

			</table>

		</section>
	)
}
