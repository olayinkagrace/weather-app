import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: { backgroundColor: "lightblue" },
        headerStyle: { backgroundColor: "lightblue" },
        headerTitleStyle: { fontWeight: "bold", fontSize: 25, color: "tomato" },
      }}
    >
      <Tab.Screen
        name='Current'
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name='droplet'
              color={focused ? "tomato" : "black"}
              size={25}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name='Upcoming'
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name='clock'
              color={focused ? "tomato" : "black"}
              size={25}
            />
          ),
        }}>
          {() => <UpcomingWeather weatherData={weather.list} />}
        </Tab.Screen>
      <Tab.Screen
        name='City'
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name='home'
              color={focused ? "tomato" : "black"}
              size={25}
            />
          ),
        }}
      >
         {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;