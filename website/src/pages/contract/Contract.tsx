import SelectActionCard from "../../components/cards/Card";
import { Navbar } from "../../components/navbar/Navbar";
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { StyledContractMainContent } from "../../pageStyles/Contract.styles";
import { Grid } from "@mui/material";


export const Contract = () => {
	return (
		<>
			<Navbar />
			<Grid>
				<StyledContractMainContent>
					<SelectActionCard title={"New Checklist"} icon={<AddIcon/>}/>
					<SelectActionCard title={"Re-open Last Checklist"} icon={<AutorenewIcon/>}/>
					<SelectActionCard title={"View All Checklists"} icon={<ChecklistIcon/>}/>
				</StyledContractMainContent>
			</Grid>
			
		</>
	);
};
