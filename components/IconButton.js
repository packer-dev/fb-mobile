import * as React from "react";
import { TouchableOpacity, Text, ActivityIndicator, View } from "react-native";
import tailwind from "../tailwind";
import { any, bool, func, number, string } from "prop-types";

const IconButton = ({
  IconContainer,
  text,
  iconName,
  changeColor,
  iconSize = 20,
  styles = "",
  onPress,
  rollback,
  loading,
  haveBackground,
  active,
  hiddenIcon,
}) => {
  const [status, setStatus] = React.useState(!!active);
  const [_loading, setLoading] = React.useState(false);
  const handleClick = async () => {
    if (loading || _loading) return;
    setLoading(true);
    setStatus(!status);
    onPress && (await onPress());
    setLoading(false);
    if (rollback) {
      setStatus(false);
    }
  };
  const Touch = _loading || loading ? View : TouchableOpacity;
  React.useEffect(() => {
    setStatus(active);
  }, [active]);
  return (
    <Touch
      onPress={handleClick}
      style={[
        tailwind(
          `mx-auto flex-row ${
            loading ? "opacity-50" : ""
          } gap-2 items-center rounded-lg ${hiddenIcon ? "justify-center" : ""}`
        ),
        tailwind(styles),
      ]}
    >
      {!hiddenIcon &&
        (_loading || loading ? (
          <ActivityIndicator
            style={{
              fontSize: iconSize,
            }}
            color={haveBackground ? "white" : ""}
          />
        ) : (
          <IconContainer
            name={
              typeof iconName === "string"
                ? iconName
                : status
                ? iconName?.after
                : iconName?.before
            }
            size={iconSize}
            style={tailwind(
              `text-${
                haveBackground
                  ? "white"
                  : status && changeColor
                  ? "primary"
                  : "gray-700"
              }`
            )}
          />
        ))}

      {hiddenIcon && (_loading || loading) ? (
        <ActivityIndicator
          style={{
            fontSize: iconSize,
          }}
          color={haveBackground ? "white" : ""}
        />
      ) : (
        <Text
          style={tailwind(
            `font-bold text-${
              haveBackground
                ? "white"
                : status && changeColor && !_loading
                ? "primary"
                : "gray-700"
            }`
          )}
        >
          {typeof text === "string"
            ? text
            : status
            ? text?.after
            : text?.before}
        </Text>
      )}
    </Touch>
  );
};

IconButton.propTypes = {
  IconContainer: any,
  text: string,
  iconName: any,
  changeColor: any,
  iconSize: number,
  styles: any,
  onPress: func,
  rollback: any,
  loading: bool,
  haveBackground: any,
  active: any,
  hiddenIcon: bool,
};

export default IconButton;
