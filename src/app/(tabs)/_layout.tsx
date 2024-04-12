import { Tabs } from "expo-router";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { theme } from "../../theme";
import Avatar from "../../components/Avatar";
import { View } from "react-native";
import Menu from "../../components/Menu";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRef } from "react";


export default function TabLayout() {

  const BottomSheetRef = useRef<BottomSheet>(null);

  const handleBottomSheetOpen = () => BottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => BottomSheetRef.current?.snapToIndex(0)
  
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.gray[600],
          tabBarStyle: {
            backgroundColor: theme.colors.black,
            borderTopColor: theme.colors.black,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="plus" color={color} size={size} />
            ),
          }}
          listeners={() => ({
            tabPress: (event) => {
              event.preventDefault();
              handleBottomSheetOpen()
            },
          })}
        />
        <Tabs.Screen
          name="messages"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubble-ellipses" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => (
              <Avatar
                selected={color === theme.colors.white}
                source={{ uri: "https://github.com/luixgabriel.png" }}
              />
            ),
          }}
        />
      </Tabs>
      <Menu ref={BottomSheetRef} onClose={handleBottomSheetClose}/>
    </View>
  );
}
