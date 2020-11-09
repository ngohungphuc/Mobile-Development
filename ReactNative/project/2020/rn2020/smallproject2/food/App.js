import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaulNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
