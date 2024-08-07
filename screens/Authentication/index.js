import { View, Text, TouchableOpacity } from 'react-native';
import tailwind from '../../tailwind';
import Button from '../../components/Button';
import { FontAwesome5 } from '@expo/vector-icons';

const Authentication = ({
  children,
  handleSubmit,
  buttonText,
  type,
  navigation,
}) => {
  return (
    <View
      style={tailwind(
        `flex-1 bg-white px-5 flex-col items-center flex justify-center`
      )}>
      <View style={tailwind(`w-full`)}>
        <FontAwesome5
          name="facebook"
          size={72}
          style={tailwind(`text-primary mx-auto pb-16`)}
        />
        {children}
        <TouchableOpacity
          onPress={() =>
            navigation &&
            navigation.navigate(type === 'Login' ? 'Register' : 'Login')
          }>
          <Text style={tailwind(`text-right mt-2 text-gray-500 text-sm`)}>
            {type === 'Login' ? `Register` : 'Login'}
          </Text>
        </TouchableOpacity>
        <Button
          text={buttonText}
          onClick={() => handleSubmit && handleSubmit()}
        />
      </View>
    </View>
  );
};

export default Authentication;
