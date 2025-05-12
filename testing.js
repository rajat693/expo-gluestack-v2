import React, { useState } from "react";
import { ScrollView } from "@/components/ui/scroll-view";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Link, LinkText } from "@/components/ui/link";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from "@/components/ui/form-control";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <ScrollView className="flex-1 bg-background-50">
      <VStack space="xl" className="min-h-full px-6 py-12">
        <Center className="mb-8">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=1887&auto=format&fit=crop",
            }}
            alt="Company Logo"
            size="xl"
            className="h-20 w-auto rounded-lg"
          />
        </Center>

        <VStack space="md">
          <Heading size="2xl" className="text-center mb-2">
            Welcome Back
          </Heading>
          <Text className="text-typography-500 text-center mb-6">
            Sign in to your account
          </Text>

          <FormControl className="mb-4">
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Input variant="outline" size="lg">
              <InputField
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </Input>
            <FormControlHelper>
              <FormControlHelperText>
                We'll never share your email
              </FormControlHelperText>
            </FormControlHelper>
          </FormControl>

          <FormControl className="mb-4">
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input variant="outline" size="lg">
              <InputField
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
              />
              <InputSlot className="pr-3" onPress={handleShowPassword}>
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>
          </FormControl>

          <HStack className="justify-end mb-6">
            <Link href="#" size="sm">
              <LinkText size="sm">Forgot Password?</LinkText>
            </Link>
          </HStack>

          <Button size="lg" className="w-full mb-4">
            <ButtonText>Sign In</ButtonText>
          </Button>

          <HStack className="justify-center">
            <Text className="text-typography-500">Don't have an account?</Text>
            <Link href="#" className="ml-1">
              <LinkText>Sign Up</LinkText>
            </Link>
          </HStack>
        </VStack>

        <Box className="mt-auto pt-10">
          <Text size="xs" className="text-center text-typography-500">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </Text>
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default LoginScreen;
