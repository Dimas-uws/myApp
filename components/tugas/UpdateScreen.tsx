import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const images = [
  require("@/assets/images/content2.png"),
  require("@/assets/images/content4.png"),
  require("@/assets/images/content1.png"),
  require("@/assets/images/content3.png"),
];

export default function UpdateScreen() {
  const [selectedImage, steSelectedImage] = useState<number>(0)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Ionicons name="arrow-back" size={26} color={"#FF5B13"} />
        <Text style={styles.appBarTitle}>Update Note</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.inputTitle}
          placeholder="Note Title"
          selectionColor={"#FF5B13"}
        />
        <TextInput
          style={styles.inputContent}
          placeholder="Note Content"
          selectionColor={"#FF5B13"}
          textAlignVertical="top"
          multiline={true}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {images.map((img, index) => (
            <TouchableOpacity key={index} style={[styles.boxImage, selectedImage === index && styles.imageSelected]} onPress={() => steSelectedImage(index)}>
              <Image 
                source={img}
                style={{ width: "100%", height: "100%" }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Update</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  appBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },

  appBarTitle: {
    fontSize: 22,
    fontWeight: 600,
  },

  inputTitle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#b3b3b3ff",
    padding: 10,
  },

  inputContent: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#b3b3b3ff",
    padding: 10,
    height: 100,
  },

  form: {
    flex: 1,
    gap: 13,
  },

  boxImage: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "#b3b3b3ff",
    borderRadius: 5,
    marginRight: 10,
  },

  button: {
    backgroundColor: "#FF5B13",
    padding: 13,
    alignItems: "center",
    borderRadius: 8,
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

  imageSelected: {
    borderColor: "#FF5B13"
  },
});
