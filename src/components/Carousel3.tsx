import React from "react";
import {
  Image,
  Box,
  ChakraProvider,
  AspectRatio,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  images?: string[] | undefined;
}

const Caro: React.FC<Props> = ({ images }) => {
  const slides = images?.map((image) => ({ image }));

  return (
    <ChakraProvider>
      <Box p={4} color="white">
        <Carousel infiniteLoop>
          {slides?.map((slide, index) => (
            <AspectRatio key={index} maxH={"600px"}>
              <Image src={slide.image} />
            </AspectRatio>
          ))}
        </Carousel>
      </Box>
    </ChakraProvider>
  );
};

export default Caro;
