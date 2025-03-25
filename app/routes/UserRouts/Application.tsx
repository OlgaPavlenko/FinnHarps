import { Box, Tab, Tabs, TextField } from "@mui/material";

import React from "react";
import styles from "./Application.module.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Application = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.application}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Player info" {...a11yProps(0)} />
            <Tab label="Parent info" {...a11yProps(1)} />
            <Tab label="Gear" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              id="standard-basic"
              label="Child name"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Child last name"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Child DOB"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Child initials, including fada, coma etc"
              variant="standard"
            />
            <TextField id="standard-basic" label="Squad" variant="standard" />
            <TextField
              id="standard-basic"
              label="Child's previous club"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Prefered playing positon n1"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Prefered playing positon n2"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Child's school"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Any info we should know"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Child's doctor name"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Child's doctor phone number"
              variant="standard"
            />
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default Application;
