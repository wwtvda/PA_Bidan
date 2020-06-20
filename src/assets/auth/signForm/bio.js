import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function AddressForm() {
  const classes = useStyles();
  //radio button
  const [setValue] = React.useState('Perempuan');
  const handleChange = (event) => {
    setValue(event.target.value);
    setRole(event.target.value);
  };
  //select button
  const [role, setRole] = React.useState('');
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Silahkan mengisi data diri berikut!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3} sm={3}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nama"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            id="date"
            label="Tanggal Lahir"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <InputLabel id="role">Role</InputLabel>
            <Select
              labelId="role"
              id="role"
              value={role}
              onChange={handleChange}
            >
              <MenuItem value={1}>Ibu/anak</MenuItem>
              <MenuItem value={2}>Bidan</MenuItem>
            </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="alamat"
            name="alamat"
            label="Alamat Rumah"
            fullWidth
            autoComplete="Alamat Rumah"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}