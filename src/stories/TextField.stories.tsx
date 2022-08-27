import {
  Box,
  Button,
  Container as MuiContainer,
  Grid,
  InputAdornment,
  Paper as MuiPaper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ThemeSelect from "../decorators/withThemeDecorator";

export default {
  title: "TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const variants: any[] = [
  { label: "default" },
  { label: "With value", value: "something" },
  { label: "Error", error: true, helperText: "You fool" },
  {
    label: "Adornment",
    InputProps: {
      startAdornment: <InputAdornment position="start">$</InputAdornment>,
    },
  },
];

const Template: ComponentStory<typeof TextField> = function (args) {
  return (
    <Grid container spacing={1} gap={1}>
      {variants.map((props: any, i) => (
        <Grid item>
          <TextField key={props.label} {...props} />
        </Grid>
      ))}
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
