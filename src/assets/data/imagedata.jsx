import { v4 as uuidv4 } from "uuid";

import Image01 from "../../assets/images/image_01.jpg";
import Image02 from "../../assets/images/image_02.jpg";
import Image03 from "../../assets/images/image_03.jpg";
import Image04 from "../../assets/images/image_04.jpg";
import Image05 from "../../assets/images/image_05.jpg";
import Image06 from "../../assets/images/image_06.jpg";
import Gif from "../../assets/images/logo_150.gif";

// original images
import Image01_ori from "../../assets/images/image_01_ori.jpg";
import Image02_ori_01 from "../../assets/images/image_02_ori_01.jpg";
import Image03_ori from "../../assets/images/image_03_ori.jpg";
import Image04_ori_01 from "../../assets/images/image_04_ori_01.jpg";
import Image05_ori from "../../assets/images/image_05_ori.jpg";
import Image06_ori from "../../assets/images/image_06_ori.jpg";
import Logo from "../../assets/images/logo.png";

const imagedata = [
  {
    // image 01
    id: uuidv4(),
    name: "Image_01: Colourise the stop sign in a black and white photo",
    format: "701 x 1051, JPG file and size 119 KB",
    formatOri01: "Original: 2805 x 4207, JPG file and size 0.98 MB",
    formatOri02: "",
    objective:
      "The original image is black and white and I would like to make the stop sign pop-up.",
    step01:
      "Step 1: Use the ‘Quick Selection’ tool to separate the background from the stop sign.",
    step02:
      "Step 2: Create a new solid colour layer from the selection (stop sign) to make it red.",
    step03:
      "Step 3: Change the blend mode from ‘normal’ to ‘overlay’ by selecting the fill layer from the layers tab and choosing ‘overlay’ from the highlighted dropdown menu.",
    step04: "",
    step05: "",
    step06: "",
    step07: "",
    img: Image01,
    imgOri: Image01_ori,
  },
  {
    // image 02
    id: uuidv4(),
    name: "Image_02: Blend two images - Layer Blend Modes",
    format: "767 x 511, JPG file and size 79.8 KB",
    formatOri01: "Original (woman): 767 x 511, JPG file and size 22 KB",
    formatOri02: "Original (stars): 1200 x 800, JPG file and size 131 KB",
    objective:
      "I want to add 'star' texture to illustrate that a woman gets immersed in the sky full of stars.",
    step01:
      "Step 1: Use layer blend modes to blend a texture (stars) with a woman image. The Blend Mode option can be found in the upper left of the Layers panel.",
    step02:
      "Step 2: Change the layer's blend mode from 'Normal' to 'Hard Light'.",
    step03:
      "Step 3: Fine-tune the result by adjusting the layer's opacity from 100% down to 40%.",
    step04: "",
    Step05: "",
    step06: "",
    step07: "",
    img: Image02,
    imgOri: Image02_ori_01,
  },
  {
    // image 03
    id: uuidv4(),
    name: "Image_03: Retouch skin",
    format: "654 x 872, JPG file and size 82.9 KB",
    formatOri01: "Original: 2179 x 2905, JPG file and size 945 KB",
    formatOri02: "",
    objective:
      "The picture was taken with a mobile phone under natural light. I want to retouch skin by removing skin blemishes.",
    step01:
      "Step 1: Duplicate the background (portrait image) to the new layer.",
    step02:
      "Step 2: Select the Spot Healing Brush tool to remove some marks and other blemishes.",
    step03: "Step 3: Duplicate the layer with healing tool to the new layer.",
    step04:
      "Step 4: Use Dodge tool (range: midtones, exposure: 1-3%) to highlight some areas and use Burn tool (midtones at 1%) to even the skin tone out.",
    step05: "Step 5: Adjust the contrast.",
    step06: "",
    step07: "",
    img: Image03,
    imgOri: Image03_ori,
  },
  {
    // image 04
    id: uuidv4(),
    name: "Image_04: Enhance the image and add a logo",
    format: "806 x 605, JPG file and size 162 KB",
    formatOri01: "Original (Library): 4032 x 3024, JPG file and size 4.76 MB",
    formatOri02:
      "Original (Birkbeck logo): 2212 x 688, JPG file and size 263 KB",
    objective:
      "I want to make a cover image for this Visual Design assignment but the image (Birkbeck Library) is not highly saturated.",
    step01:
      "Step 1: Create a new Vibrance Adjustment layer and increase vibrance (+30) which adds saturation but protects already saturated pixels. The effect is not as strong as saturation and it is more pleasing to the eye.",
    step02:
      "Step 2: Create a Hue/Saturation Adjustment layer and target the sky to make blues more saturated (+30).",
    step03: "Step 3: Insert the Birkbeck logo into the background image.",
    step04: "",
    step05: "",
    step06: "",
    step07: "",
    img: Image04,
    imgOri: Image04_ori_01,
  },
  {
    // image 05
    id: uuidv4(),
    name: "Image_05: Remove some people from the image",
    format: "605 x 807, JPG file and size 134 KB",
    formatOri01: "Original: 3024 x 4032, JPG file and size 4.01 MB",
    formatOri02: "",
    objective:
      "The objective is to remove some unwanted objects from the image, i.e., people in this case.",
    step01: "Step 1: Duplicate the layer.",
    step02:
      "Step 2: Select the Lasso tool and select the object we want to remove.",
    step03:
      "Step 3: Go to Edit -> Fill and select Contnet-Aware with Colour Adaptation checked.",
    step04:
      "Step 4: Use Patch tool to fix some minor areas which do not match the background.",
    step05: "",
    step06: "",
    step07: "",
    img: Image05,
    imgOri: Image05_ori,
  },
  {
    // image 06
    id: uuidv4(),
    name: "Image_06: Neutralise colour and make the image black and white except for the UK flag",
    format: "500 x 334, JPG file and size 29.3 KB",
    formatOri01: "Original: 500 x 334, JPG file and size 23.9 KB",
    formatOri02: "",
    objective:
      "The purpose is to remove a colour cast using the Camera Raw Filter and to make the flag stand out.",
    step01:
      "Step 1: Duplicate the layer, and right-click and select 'Convert to Smart Object'.",
    step02:
      "Step 2: Go to Filter -> Camera Raw Filter and select the White Balance Tool.",
    step03:
      "Step 3: Find an area which should be a neutral gray and click on it (somewhere in the white part of the flag in this image).",
    step04:
      "Step 4: Fine-tune colours with other parameters, such as Hightlights.",
    step05:
      "Step 5: To make the image black and white except for the flag, duplicate the layer and use the Quick Selection tool to select the flag.",
    step06:
      "Step 6: Right-click on the selection and choose the 'Select Inverse' option.",
    step07:
      "Step 7: Create a Hue/Saturation layer and slide the 'Saturation' slider to the left to remove colours.",
    img: Image06,
    imgOri: Image06_ori,
  },
  {
    // GIF
    id: uuidv4(),
    name: "GIF: Create a logo with animation",
    format: "900 x 439, GIF file and size 109 KB",
    objective:
      "The idea of the logo comes from my surname (Wei) and the initials of my first name (CS).",
    step01:
      "Step 1: Use Adobe Photoshop Ellipse tool to add 3 circles and use Line tool to add a horizontal line.",
    step02:
      "Step 2: Use Rectangular Marquee tool to select the areas that should be removed (Select Inverse and apply a mask).",
    step03:
      "Step 3: Use Ellipse tool to add a ball and save as GIF image with the ball at different positions.",
    step04: "Step 4: Use GIMP to open gif images to make a GIF animation.",
    step05:
      "Step 5: Add a new layer in the first image, and copy and paste the second frame to the first frame. Anchor the floating layer.",
    step06: "Step 6: Repeat step 5 until all frames are in one file.",
    step07:
      "Step 7: Export as GIF Image and check 'As animation' with 150 ms delay between frames in the popup dialog 'Export Image as GIF'.",
    img: Gif,
    imgOri: Logo,
  },
];

export default imagedata;
