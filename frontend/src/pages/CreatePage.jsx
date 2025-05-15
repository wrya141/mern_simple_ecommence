import {
  Container,
  Heading,
  useColorModeValue,
  VStack,
  Box,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const toast = useToast();

  const [newProduct, setnewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const createProduct = useProductStore((state) => state.createProducts);

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setnewProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"}>
          Create New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack>
            <Input
              placeholder="Product name"
              name="name"
              value={newProduct.name}
              onChange={(e) => {
                setnewProduct({ ...newProduct, name: e.target.value });
              }}
            ></Input>
            <Input
              placeholder="Product price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) => {
                setnewProduct({ ...newProduct, price: e.target.value });
              }}
            ></Input>
            <Input
              placeholder="Product image"
              name="image"
              value={newProduct.image}
              onChange={(e) => {
                setnewProduct({ ...newProduct, image: e.target.value });
              }}
            ></Input>
            <Button colorScheme="blue" onClick={handleAddProduct} w="full">
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
