import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import CreditAssets from "./CreditAssets";
import { useTranslation } from "react-i18next";
import { backgroundImage } from "@/constants/backgroundImage";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Box
      backgroundImage={backgroundImage[0].image}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      id="Home"
    >
      <VStack
        bg={"linear-gradient(182.26deg, rgba(0, 0, 0, 0) 1.9%, #380145 98.18%)"}
        h={"100vh"}
        justifyContent={"center"}
      >
        <Heading
          background={
            "linear-gradient(100.36deg, #FD92FD 2.4%, #9321DD 98.97%)"
          }
          fontFamily={"Rubik One"}
          fontSize={"5xl"}
          bgClip="text"
          textAlign={"center"}
        >
          {t("header.title")}
        </Heading>
        <Text
          fontFamily={"Poppins"}
          fontSize={"22px"}
          mb={6}
          textAlign={"center"}
        >
          {t("header.subtitle")}
        </Text>
        <CreditAssets />
      </VStack>
    </Box>
  );
};

export default Header;
