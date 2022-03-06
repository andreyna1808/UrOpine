import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { ImgCardsComent, ModalImg } from './styledPost';
import Compatilhar from '../../constants/imgs/compartilhar.png';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4
};

export default function Share() {
	const [ open, setOpen ] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<ImgCardsComent onClick={handleOpen} src={Compatilhar} alt="compartilhar" />
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<Typography id="transition-modal-title" variant="h6" component="h2">
							Compatilhar para...
						</Typography>
						<Typography id="transition-modal-description" sx={{ mt: 2 }}>
							<a
								href="https://api.whatsapp.com/send?phone=5548991052198&text=Ol%C3%A1%20te%20conheci%20pelo%20UrOPine"
								target="_blank"
							>
								<ModalImg
									src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
									target="_blank"
								/>
							</a>
							<a href="https://www.linkedin.com/in/andreyna-carvalho-997273231/" target="_blank">
								<ModalImg
									src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
									target="_blank"
								/>
							</a>
							<a href="https://www.instagram.com/andreyna_mc/" target="_blank">
								<ModalImg
									src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"
									target="_blank"
								/>
							</a>
							<a href="mailto: andreyna.official@gmail.com">
								<ModalImg
									src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white"
									target="_blank"
								/>
							</a>
						</Typography>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
