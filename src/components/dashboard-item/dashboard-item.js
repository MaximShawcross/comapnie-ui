import "./dashboard-item.scss";

export const DashboardItem = ({ name, number, image }) => {
	return (
		<div class="dashboard__item">
			<img src={image} alt="Company icons" class="dashboard__item__img"></img>
			<div class="dashboard__item__title">{name}</div>
			<div class="dashboard__item__counter">{number}</div>
		</div>
	)
}
