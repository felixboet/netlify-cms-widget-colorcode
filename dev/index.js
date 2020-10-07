import "./bootstrap.js";
import CMS, { init } from "netlify-cms";
import "netlify-cms/dist/cms.css";
import { ColorControl, ColorPreview } from "../src";

const config = {
  backend: {
    name: "test-repo",
    login: false,
  },
  media_folder: "assets",
  collections: [
    {
      name: "colors",
      label: "Colors",
      description:
        "Demo CMS for netlify-cms-widget-colorpicker - https://github.com/felixboet/netlify-cms-widget-colorpicker",
      preview: "false",
      files: [
        {
          file: "colors.yml",
          name: "colors",
          label: "Colors",
          fields: [
            {
              name: "chrome",
              label: "Color with Chrome Picker",
              widget: "color",
              hint: "that's the default color picker",
            },
            {
              name: "chromeWithoutAlpha",
              label: "Color with Chrome Picker",
              widget: "color",
              hint: "disableAlpha: true",
              disableAlpha: true,
            },
            {
              name: "block",
              label: "Color with Block Picker",
              widget: "color",
              picker: "block",
              colors: [
                "#F44336",
                "#9C27B0",
                "#3F51B5",
                "#2196F3",
                "#03A9F4",
                "#00BCD4",
                "#009688",
                "#4CAF50",
                "#8BC34A",
                "#CDDC39",
                "#FFEB3B",
                "#FFC107",
                "#FF9800",
                "#9E9E9E",
                "#607D8B",
              ],
            },
            {
              name: "compact",
              label: "Color with Compact Picker",
              widget: "color",
              picker: "compact",
              colors: [
                "#F44336",
                "#E91E63",
                "#9C27B0",
                "#673AB7",
                "#3F51B5",
                "#2196F3",
                "#03A9F4",
                "#00BCD4",
                "#009688",
                "#4CAF50",
                "#8BC34A",
                "#CDDC39",
                "#FFEB3B",
                "#FFC107",
                "#FF9800",
                "#FF5722",
                "#795548",
                "#607D8B",
                "#bdbdbd",
                "#9e9e9e",
                "#757575",
                "#616161",
                "#424242",
                "#000000",
              ],
            },
            {
              name: "github",
              label: "Color with Github Picker",
              widget: "color",
              picker: "github",
              colors: [
                "#F44336",
                "#E91E63",
                "#9C27B0",
                "#673AB7",
                "#3F51B5",
                "#2196F3",
                "#03A9F4",
                "#00BCD4",
                "#009688",
                "#4CAF50",
                "#8BC34A",
                "#CDDC39",
                "#FFEB3B",
                "#FFC107",
                "#FF9800",
                "#FF5722",
                "#795548",
                "#607d8b",
                "#455a64",
                "#9E9E9E",
                "#616161",
              ],
            },
            {
              name: "sketch",
              label: "Color with Sketch Picker",
              widget: "color",
              picker: "sketch",
              colors: [
                "#F44336",
                "#E91E63",
                "#9C27B0",
                "#673AB7",
                "#3F51B5",
                "#2196F3",
                "#03A9F4",
                "#00BCD4",
                "#009688",
                "#4CAF50",
                "#8BC34A",
                "#CDDC39",
                "#FFEB3B",
                "#FFC107",
                "#FF9800",
                "#FF5722",
                "#795548",
                "#9E9E9E",
                "#607D8B",
              ],
            },
            {
              name: "swatches",
              label: "Color with Swatches Picker",
              widget: "color",
              picker: "swatches",
              colors: [
                ["#FF8A80", "#FF5252", "#FF1744", "#D50000"],
                ["#FF80AB", "#FF4081", "#F50057", "#C51162"],
                ["#EA80FC", "#E040FB", "#D500F9", "#AA00FF"],
                ["#B388FF", "#7C4DFF", "#651FFF", "#6200EA"],
                ["#8C9EFF", "#536DFE", "#3D5AFE", "#304FFE"],
                ["#80D8FF", "#40C4FF", "#00B0FF", "#0091EA"],
                ["#84FFFF", "#18FFFF", "#00E5FF", "#00B8D4"],
                ["#A7FFEB", "#64FFDA", "#1DE9B6", "#00BFA5"],
                ["#B9F6CA", "#69F0AE", "#00E676", "#00C853"],
                ["#CCFF90", "#B2FF59", "#76FF03", "#64DD17"],
                ["#FFFF8D", "#FFFF00", "#FFEA00", "#FFD600"],
                ["#FFD180", "#FFAB40", "#FF9100", "#FF6D00"],
              ],
            },
            {
              name: "twitter",
              label: "Color with Twitter Picker",
              widget: "color",
              picker: "twitter",
              colors: [
                "#F44336",
                "#E91E63",
                "#9C27B0",
                "#673AB7",
                "#3F51B5",
                "#2196F3",
                "#03A9F4",
                "#00BCD4",
                "#009688",
                "#4CAF50",
                "#8BC34A",
                "#CDDC39",
                "#FFEB3B",
                "#FFC107",
                "#FF9800",
                "#9E9E9E",
                "#607D8B",
              ],
            },
            { label: "Text", name: "text", widget: "text" },
          ],
        },
      ],
    },
  ],
};

CMS.registerWidget("color", ColorControl, ColorPreview);

init({ config });
