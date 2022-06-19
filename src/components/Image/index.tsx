import * as React from "react";

import {
  getImage,
  GatsbyImage,
  GatsbyImageProps,
  IGatsbyImageData,
} from "gatsby-plugin-image";

import { useTheme } from "../../hooks/useTheme";

interface Props extends GatsbyImageProps {
  image: IGatsbyImageData;
  imageDark?: IGatsbyImageData;
}

export function Image({ image, imageDark, ...props }: Props) {
  const [theme] = useTheme();

  const imageToUse = React.useMemo(() => {
    const darkImage = imageDark ?? image;
    const lightImage = image;

    return theme === "dark" ? darkImage : lightImage;
  }, [theme, image, imageDark]);

  return <GatsbyImage {...props} image={getImage(imageToUse)} />;
}
