import Authentication from "./index";
import Input from "../../components/Input";
import { ramdomUser, validateEmail } from "../../utils";
import useForm from "../../hooks/useForm";
import * as React from "react";
import { Keyboard, Text } from "react-native";
import { registerAPI } from "../../api";
import { user } from "../../models";
import { useNavigation } from "@react-navigation/native";

const random = ramdomUser();

const init = [
  {
    name: "name",
    type: "text",
    content: "Name is required.",
    label: "Name",
    value: random.name,
  },
  {
    name: "email",
    type: "email",
    content: "Email is required.",
    label: "Email",
    validate: validateEmail,
    value: random.email,
  },
  {
    name: "password",
    type: "password",
    content: "Password is required.",
    label: "Password",
    value: "@dev@",
  },
];

const Register = () => {
  const { inputs, onSubmit, onInputChange, register } = useForm(init);
  const navigation = useNavigation();
  const [error, setError] = React.useState(false);
  const handleSubmit = async (obj) => {
    const result = await registerAPI({ ...user, ...obj });
    if (result.status === 1) {
      setError(true);
    } else {
      navigation.navigate("MessageList");
    }
    Keyboard.dismiss();
  };
  return (
    <Authentication
      buttonText="Register"
      type="Register"
      handleSubmit={() => onSubmit(handleSubmit)}
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
          Email exist in system.
        </Text>
      )}
    </Authentication>
  );
};

export default Register;
