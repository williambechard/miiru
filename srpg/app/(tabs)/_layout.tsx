import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import {TabIcon} from "@/components/TabIcon/TabIcon";
import {Appearance, StyleProp, TextStyle} from "react-native";

const tabIconBGColor={
    map: '#d0f0c0',
    backpack: '#ffe4c4',
    journal: '#add8e6',
    player: '#fcffa4',
};

const tabBarRect ={width: 60, height: 60};

export default function TabLayout() {
    const colorScheme = Appearance.getColorScheme();

  const labelStyle = () : StyleProp<TextStyle> =>   {
      return {
          fontSize: 12,
          fontWeight: 'bold',
          padding: 2,
          color: Colors[colorScheme ?? 'light'].label,
      }
  }

  return (
    <Tabs
        initialRouteName={'map'}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarStyle: {
              backgroundColor: Colors[colorScheme ?? 'light'].tabBackground,
              borderTopWidth: 0,
          },
        headerShown: false,
      }}>
        <Tabs.Screen
            name="map"
            options={{
                title: 'map',
                tabBarIcon:()=> <TabIcon name={'map'}/>,
                tabBarActiveBackgroundColor: tabIconBGColor.map,
                tabBarLabelStyle: labelStyle(),
                tabBarIconStyle: {width: tabBarRect.width, height: tabBarRect.height},
            }}
        />
        <Tabs.Screen
            name="player"
            options={{
                title: 'player',
                tabBarIcon:()=> <TabIcon name={'player'} />,
                tabBarActiveBackgroundColor: tabIconBGColor.player,
                tabBarLabelStyle: labelStyle(),
                tabBarIconStyle: {width: tabBarRect.width, height: tabBarRect.height},
            }}
        />
        <Tabs.Screen
            name="backpack"
            options={{
                title: 'backpack',
                tabBarIcon:()=> <TabIcon name={'backpack'} />,
                tabBarActiveBackgroundColor: tabIconBGColor.backpack,
                tabBarLabelStyle: labelStyle(),
                tabBarIconStyle: {width: tabBarRect.width, height: tabBarRect.height},
            }}
        />
        <Tabs.Screen
            name="journal"
            options={{
                title: 'journal',
                tabBarIcon:()=> <TabIcon name={'journal'} />,
                tabBarActiveBackgroundColor: tabIconBGColor.journal,
                tabBarLabelStyle: labelStyle(),
                tabBarIconStyle: {width: tabBarRect.width, height: tabBarRect.height},
            }}
        />
    </Tabs>
  );
}
