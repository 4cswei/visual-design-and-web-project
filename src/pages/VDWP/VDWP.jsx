import React from "react";
import imagedata from "../../assets/data/imagedata";
import ImageItem from "../../components/ImageItem/ImageItem";
import "./VDWP.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PText from "../../components/PText/PText";
import ColourTheme from "../../assets/images/AdobeColor-VD Mockups Color Theme.jpeg";
import MockupItem from "../../components/MockupItem/MockupItem";
import mockups from "../../assets/data/mockups";

function VDWP() {
  return (
    <div>
      <div className="container-VDWP">
        <div className="imagedata-items">
          <SectionTitle heading="Visual Design and Web Project" />
          <h2 className="imagedata-title">
            Part 1: Portfolio of six digital images and an animated GIF
          </h2>
          <PText>
            The fisrt six images were optimised, manipulated, and saved for Web
            use in Adobe Photoshop. When saving images for the Web, 'JPEG' file
            type, quality level 'High', and 'Progressive' were selected. The
            images were resized to reduce the file size.
          </PText>
          {imagedata.map((image) => (
            <ImageItem
              key={image.id}
              title={image.name}
              format={image.format}
              formatOri01={image.formatOri01}
              formatOri02={image.formatOri02}
              objective={image.objective}
              step01={image.step01}
              step02={image.step02}
              step03={image.step03}
              step04={image.step04}
              step05={image.step05}
              step06={image.step06}
              step07={image.step07}
              img={image.img}
              imgOri={image.imgOri}
            />
          ))}
          <div className="image-credit">
            <PText>
              Image credits:
              <br />
              Image_01: https://unsplash.com/photos/iXCwkr6nlM4
              <br />
              Image_02: "woman": online; "stars": sololos/Getty
              <br />
              Image_03: Chen-Shuang Wei
              <br />
              Image_04: "Birkbeck Library": Chen-Shuang Wei, logo: Birkbeck
              <br />
              Image_05: Chen-Shuang Wei
              <br />
              Image_06: ReadingRenee (online)
            </PText>
          </div>
        </div>
        <div className="mockups">
          <h2 className="mockups-title">
            Part 2: 4 user interface mockups as prototypes of my Web Project for
            this module.
          </h2>
          <div className="mockups-desc">
            <PText>
              The mockups were designed in Adobe XD. Each mockup was saved by
              exporting the artboard for 'Design' with 'PNG' format. The font
              'Rubik' was used. The background colour #F5ECDB and other two
              colours (#B69E97 and #CAB2AB) were chosen from
              https://www.namecheap.com/logo-maker/ to have the colour theme
              somber, earthy, solid and natural . With the help of Adobe Color
              Accessibility Tools contrast suggestions and Contrast Ratio set to
              be 7 and 14 (comparing to the background colour and following WCAG
              2.1 Level AAA), other two colours, #594C49 and #241E1D, were
              selected.
            </PText>
            <h2 className="colour-theme">
              Colour theme for the mockups and for this website
            </h2>
            <img src={ColourTheme} alt="colour theme" className="colours" />
          </div>
          <div className="mockup-items">
            {mockups.map((mockup) => (
              <MockupItem
                key={mockup.id}
                title={mockup.name}
                desc={mockup.desc}
                img={mockup.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VDWP;
