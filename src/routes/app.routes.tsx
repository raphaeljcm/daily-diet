import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/home';
import { Meal } from '@screens/meal';
import { ChangeMeal } from '@screens/change-meal';
import { Statistics } from '@screens/statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="meal" component={Meal} />
      <Screen name="change-meal" component={ChangeMeal} />
    </Navigator>
  );
}
