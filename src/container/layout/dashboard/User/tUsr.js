import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//icon
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import LocalHospitalTwoToneIcon from '@material-ui/icons/LocalHospitalTwoTone';
import ReceiptTwoToneIcon from '@material-ui/icons/ReceiptTwoTone';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardTwoToneIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReceiptTwoToneIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Konsultasi" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalHospitalTwoToneIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Check Up" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <SettingsTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="Pengaturan Akun" />
    </ListItem>
  </div>
);