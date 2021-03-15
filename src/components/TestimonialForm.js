import { useFormik } from 'formik';
import * as yup from 'yup';
import {
	TextField,
	FormControl,
	FormLabel,
	Radio,
	FormControlLabel,
	RadioGroup,
	Grid,
	FormHelperText,
	Button,
	Typography,
} from '@material-ui/core';

const TestimonialForm = (props) => {
	const validationSchema = yup.object({
		firstName: yup.string().required('Please enter your first Name'),
		lastName: yup.string().required('Please enter your last Name'),
		story: yup.string().required('Please enter your story'),
		role: yup.string().required('Please pick an option'),
	});

	const handleFormSubmit = async (values, { resetForm }) => {
		resetForm();
		props.history.push('/submitTestimonial')
	};

	const formik = useFormik({
		initialValues: {
			image: "",
			firstName: '',
			lastName: '',
			story: '',
			role: '',
			instituition: '',
		},
		validationSchema,
		onSubmit: handleFormSubmit,
	});

	return (
		<div className='container'>
				<div className='testimonial'>
			<Typography className="header" variant='h5' gutterBottom style={{ textAlign: 'center', marginBottom: "32px"}}>
				Share your amazing Story!
			</Typography>
			<form onSubmit={formik.handleSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense">
							<input
								className="custom-file-input MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
								id='image'
								name='image'
								type='file'
                                accept="image/*"
							/>
                            <fieldset aria-hidden="true" className="PrivateNotchedOutline-root-1 MuiOutlinedInput-notchedOutline"><legend className="PrivateNotchedOutline-legendLabelled-3"><span></span></legend></fieldset>
						</div>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							id='firstName'
							name='firstName'
							label='First Name'
							variant='outlined'
							size='small'
							fullWidth
							error={formik.touched.firstName && !!formik.errors.firstName}
							helperText={formik.touched.firstName && formik.errors.firstName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.firstName}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							id='lastName'
							name='lastName'
							label='Last Name'
							variant='outlined'
							size='small'
							fullWidth
							error={formik.touched.lastName && !!formik.errors.lastName}
							helperText={formik.touched.lastName && formik.errors.lastName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.lastName}
						/>
					</Grid>
					<Grid item xs={12} md={12}>
						<TextField
							id='story'
							name='story'
							label='Share your story'
							variant='outlined'
							size='small'
							fullWidth
							multiline
							rows={3}
							error={formik.touched.story && !!formik.errors.story}
							helperText={formik.touched.story && formik.errors.story}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.story}
						/>
					</Grid>
					<Grid container item xs={12} md={12}>
						<FormControl component='fieldset'>
							<FormLabel style={{ display: 'inline' }}>
								What did you interact with Vasiti as?
							</FormLabel>

							<RadioGroup
								style={{ display: 'inline' }}
								aria-label='role'
								name='role'
								value={formik.values.role}
								onChange={formik.handleChange}>
								<FormControlLabel
									value='customer'
									control={<Radio />}
									label='Customer'
								/>
								<FormControlLabel
									value='vendor'
									control={<Radio />}
									label='Vendor'
								/>
							</RadioGroup>
							{formik.errors.role && Boolean(formik.touched.role) ? (
								<FormHelperText error style={{ padding: '0 5px' }}>
									{formik.errors.role}
								</FormHelperText>
							) : null}
						</FormControl>
					</Grid>
					<Grid item xs={12} md={12}>
						<TextField
							id='instituition'
							name='instituition'
							label='City or Higher Institution (for Students)'
							variant='outlined'
							size='small'
							fullWidth
							error={
								formik.touched.instituition && !!formik.errors.instituition
							}
							helperText={
								formik.touched.instituition && formik.errors.instituition
							}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.instituition}
						/>
					</Grid>
				</Grid>

				<div style={{ textAlign: 'right' }}>
					<Button
						onClick={formik.handleSubmit}
						className='button'
						style={{ marginTop: '1rem' }}
						variant='contained'>
						Share your Story
					</Button>
				</div>
			</form>
		</div>
		</div>
	);
};

export default TestimonialForm;
