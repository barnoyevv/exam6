import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';

const routes = [
	{
		path: "/main",
		content: "Products",
		icon: <Inventory2RoundedIcon/>
	},
	{
		path: "/main/albums",
		content: "Albums",
		icon: <StyleRoundedIcon/>
	}
];

export default routes;