import { ActivityIndicator, View } from "react-native";

type LoadingSpinnerProps = {
  color?: string;
  backgroundColor?: string;
  size?: "sm" | "md" | "lg";
};

const C4RNLoadingSpinner = ({
  color = "black",
  backgroundColor = "white",
  size = "md",
}: LoadingSpinnerProps) => {
  let spinnerSize: "small" | "large" | number;
  switch (size) {
    case "sm":
      spinnerSize = "small";
      break;
    case "md":
      spinnerSize = "large";
      break;
    case "lg":
      spinnerSize = 50; // Custom size for large
      break;
    default:
      spinnerSize = "large";
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: backgroundColor,
      }}
    >
      <ActivityIndicator size={spinnerSize} color={color} />
    </View>
  );
};

export default C4RNLoadingSpinner;
