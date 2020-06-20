import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//icon
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import ReceiptTwoToneIcon from '@material-ui/icons/ReceiptTwoTone';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import AssignmentTurnedInTwoToneIcon from '@material-ui/icons/AssignmentTurnedInTwoTone';

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
        <AssignmentTurnedInTwoToneIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Check Up" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleAltTwoToneIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Kelola Data Pasien" />
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