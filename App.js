const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import PDPerfilPessoalReview from "./screens/PDPerfilPessoalReview";
import PDConfirmaoDeDados from "./screens/PDConfirmaoDeDados";
import PDPerfilPessoalDados from "./screens/PDPerfilPessoalDados";
import PDCadastro from "./screens/PDCadastro";
import PDAntecedentesCriminais from "./screens/PDAntecedentesCriminais";
import PDConfirmaoDeDados1 from "./screens/PDConfirmaoDeDados1";
import PDContratanteEncontrado from "./screens/PDContratanteEncontrado";
import PDModoMatch from "./screens/PDModoMatch";
import PDContratanteEncontrado1 from "./screens/PDContratanteEncontrado1";
import PDEscolhaMetodoRecebimento from "./screens/PDEscolhaMetodoRecebimento";
import PDPerfilCriado from "./screens/PDPerfilCriado";
import PDEscolhaMetodoRecebimento1 from "./screens/PDEscolhaMetodoRecebimento1";
import PDLocalizandoContratante from "./screens/PDLocalizandoContratante";
import PDFaxinaDefinida from "./screens/PDFaxinaDefinida";
import PCCriandoFaxina from "./screens/PCCriandoFaxina";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "Manrope-Light": require("./assets/fonts/Manrope-Light.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
    "Manrope-SemiBold": require("./assets/fonts/Manrope-SemiBold.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Manrope-ExtraBold": require("./assets/fonts/Manrope-ExtraBold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="PDPerfilPessoalReview"
              component={PDPerfilPessoalReview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PDConfirmaoDeDados"
              component={PDConfirmaoDeDados}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PDPerfilPessoalDados"
              component={PDPerfilPessoalDados}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PDCadastro"
              component={PDCadastro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PDAntecedentesCriminais"
              component={PDAntecedentesCriminais}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PDConfirmaoDeDados1"
              component={PDConfirmaoDeDados1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PDContratanteEncontrado"
              component={PDContratanteEncontrado}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PDModoMatch"
              component={PDModoMatch}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PDContratanteEncontrado1"
              component={PDContratanteEncontrado1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PDEscolhaMetodoRecebimento"
              component={PDEscolhaMetodoRecebimento}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PDPerfilCriado"
              component={PDPerfilCriado}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PDEscolhaMetodoRecebimento1"
              component={PDEscolhaMetodoRecebimento1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PDLocalizandoContratante"
              component={PDLocalizandoContratante}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PDFaxinaDefinida"
              component={PDFaxinaDefinida}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PCCriandoFaxina"
              component={PCCriandoFaxina}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
