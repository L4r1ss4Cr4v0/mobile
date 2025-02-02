import { Text, View } from "react-native";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";
import { Step } from "@/components/step";

import { style } from "./styles";

//para fazer quabra no texto é {"\n"}

export function Steps() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Veja como funciona!</Text>
      <Step
        title="Encontre bares de BH"
        description="Busque aqueles que estão mais próximo de você"
        icon={IconMapPin}
      />
      <Step
        title="Ative cupons de desconto lendo QR Codes"
        description="Escaneie os códigos para ganhar descontos nos seus PUBs favoritos"
        icon={IconQrcode}
      />
      <Step
        title="Tenha descontos"
        description="Economize nos melhores bares de BH"
        icon={IconTicket}
      />
    </View>
  );
}
