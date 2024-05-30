import {
    Image,
    Box,
    ChakraProvider,
    AspectRatio,
  } from "@chakra-ui/react";
  import { Carousel } from "react-responsive-carousel";
  import "react-responsive-carousel/lib/styles/carousel.min.css";
  
  const Caro = () => {
      const slides = [
        {
          image:
            "https://picsum.photos/200",
        },
        {
          image:
            "https://picsum.photos/300",
        },
        {
          image:
            "https://picsum.photos/100",
        },
        {
          image:
            "https://picsum.photos/500",
        },
        {
          image:
            "https://picsum.photos/600",
        },
      ];
    return (
      <ChakraProvider>
        <Box p={4} color="white">
          <Carousel infiniteLoop>
            {slides.map((slide) => {
              return (
                <AspectRatio maxH="500px" ratio={1 / 2}>
                  <Image src={slide.image} height="auto" />
                </AspectRatio>
              );
            })}
          </Carousel>
        </Box>
      </ChakraProvider>
    );
  }
  
  export default Caro