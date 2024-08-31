import * as React from "react";
import Authentication from "./index";
import Input from "../../components/Input";
import { validateEmail } from "../../utils";
import useForm from "../../hooks/useForm";
import { Keyboard, Text } from "react-native";
import { loginAPI } from "../../api";
import tailwind from "../../tailwind";
import * as SecureStore from "expo-secure-store";
import { userModel } from "../../models";
import { useNavigation } from "@react-navigation/native";

const init = [
  {
    name: "email",
    type: "email",
    content: "Email is required.",
    label: "Email",
    validate: validateEmail,
    value: "packer.tra@gmail.com",
  },
  {
    name: "password",
    type: "password",
    content: "Password is required.",
    label: "Password",
    value: "dev@",
  },
];

const Login = () => {
  const { updateData, inputs, onSubmit, onInputChange, register } =
    useForm(init);
  const [error, setError] = React.useState(false);
  const navigation = useNavigation();
  const handleSubmit = async (obj) => {
    const result = await loginAPI(obj);
    if (!result) {
      setError(true);
    } else {
      await SecureStore.setItemAsync("token", result?.id);
      updateData("user", userModel(result));
      navigation.navigate("MessageList");
      Keyboard.dismiss();
    }
  };
  return (
    <Authentication
      buttonText="Login"
      handleSubmit={() => onSubmit(handleSubmit)}
      type="Login"
    >
      {inputs.map((item) => (
        <Input
          {...register(item)}
          key={item.name}
          onChangeText={(val) => {
            onInputChange(val, item);
          }}
        />
      ))}
      {error && (
        <Text style={tailwind(`text-red-500 pl-2 mt-2 mb-2`)}>
          Email or password incorrect.
        </Text>
      )}
    </Authentication>
  );
};

export default Login;
