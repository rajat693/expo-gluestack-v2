import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleLogin = () => {
    if (email === "" || password === "") {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
      // handle login logic here
    }
  };

  return (
    <Box className="p-5">
      <VStack space="md">
        <Heading size="2xl">Login</Heading>
        <FormControl isInvalid={isInvalid}>
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Input>
          <FormControlHelper>
            <FormControlHelperText>
              Enter a valid email address
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>
        <FormControl isInvalid={isInvalid}>
          <FormControlLabel>
            <FormControlLabelText>Password</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Input>
          {isInvalid && (
            <FormControlError>
              <FormControlErrorText>
                Email and password are required
              </FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>
        <Button
          size="md"
          variant="solid"
          action="primary"
          onClick={handleLogin}
        >
          <ButtonText>Login</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
};

export default LoginScreen;
