import { Animated, Dimensions, Easing } from "react-native";
// header for screens
import { Header, Icon } from "../components";
import { argonTheme, tabs } from "../constants";

import Articles from "../screens/Articles";
import { Block } from "galio-framework";
// drawer
import CustomDrawerContent from "./Menu";
import Elements from "../screens/Elements";
// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Login from "../screens/login";
import Register from "../screens/Register";
import Profile from "../screens/Profile";
import Kalkulator from "../screens/kalkulator"
import BMI from "../screens/bmi"
import Laporan from "../screens/laporan";
import Temperature from "../screens/temperature"
import Speed from "../screens/speed"
import Speed2 from "../screens/speed2"
import React from "react";
// import Register from "../screens/Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
      
    </Stack.Navigator>
  );
}

function KalkulatorStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Kalkulator"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Kalkulator"
        component={Kalkulator}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Kalkulator"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
      
    </Stack.Navigator>
  );
}

function BMIStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="BMI"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="BMI"
        component={BMI}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              // transparent
              // white
              title="BMI"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
          // headerTransparent: true,
        }}
      />
      
    </Stack.Navigator>
  );
}
function LaporanStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Laporan"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Laporan"
        component={Laporan}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              // transparent
              // white
              title="Laporan"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
          // headerTransparent: true,
        }}
      />
      <Stack.Screen name="Tambah Laporan" component={SpeedStack} />
      <Stack.Screen name="Edit Laporan" component={Speed2Stack} />
      
    </Stack.Navigator>
  );
}

function TemperatureStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Temperature"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Temperature"
        component={Temperature}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              // transparent
              // white
              title="Temperature"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
          // headerTransparent: true,
        }}
      />
      
    </Stack.Navigator>
  );
}

function SpeedStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Laporan"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Tambah Laporan"
        component={Speed}
        
      />
      
    </Stack.Navigator>
  );
}
function Speed2Stack(props) {
  return (
    <Stack.Navigator
      initialRouteName="LaporanEdit"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Edit Laporan"
        component={Speed2}
        
      />
      
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              // search
              // options
              navigation={navigation}
              scene={scene}
            />
          ),
          // cardStyle: { backgroundColor: "#F8F9FE" },
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="Login" component={LoginStack} />
    </Stack.Navigator>
  );
}

function LoginStack(props) {
  return (
    <Stack.Navigator
    screenOptions={{
      mode: "card",
      headerShown: false,
    }}
  >
    <Stack.Screen
      name="Login"
      component={Login}
      option={{
        headerTransparent: true,
      }}
    />
    <Stack.Screen name="Register" component={RegisterStack} />
    <Stack.Screen name="App" component={AppStack} />
  </Stack.Navigator>
  )
}

function RegisterStack(props) {
  return (
    <Stack.Navigator
    screenOptions={{
      mode: "card",
      headerShown: false,
    }}
  >
    <Stack.Screen
      name="Register"
      component={Register}
      option={{
        headerTransparent: true,
      }}
    />
    <Stack.Screen name="Login" component={LoginStack} />
  </Stack.Navigator>
  )
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Laporan"
        component={LaporanStack}
        options={{
          headerShown: false,
        }}
      />
      {/* <Drawer.Screen
        name="BMI"
        component={BMIStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Temperature"
        component={TemperatureStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Speed"
        component={SpeedStack}
        options={{
          headerShown: false,
        }}
      /> */}
    </Drawer.Navigator>
  );
}
