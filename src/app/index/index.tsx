import { Image, TouchableOpacity, View, FlatList, Modal, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import { styles } from "./styles";

import { Link } from "@/components/link";
import { Categories } from "@/components/categories";
import { Option } from "@/components/options";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />

      <FlatList
        data={["1", "2", "3"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="IvozeraLabs"
            url="https://github.com/Ivozeraa"
            onDetails={() => console.log("Clicou")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
              <TouchableOpacity>
                <MaterialIcons name='close' size={20} color={colors.gray[400]} />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>
              React Native
            </Text>

            <Text style={styles.modalUrl}>
            https://github.com/Ivozeraa
            </Text>
            <View style={styles.modalFooter}>
              <Option name='Excluir' icon='delete' variant="secondary" />
              <Option name='Abrir' icon='open-in-new' />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}