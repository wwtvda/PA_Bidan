import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';

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
        <PeopleAltTwoToneIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Manajemen User" />
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