import { notes } from "@/data/notesData";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen() {
  const router = useRouter()
  const {id} =useLocalSearchParams()

  const note = notes.find((note) => note.id === Number (id) )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color={"#FF5B13"} />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Note Details</Text>
      </View>
      <ScrollView>
        <View style={styles.image}>
          <Image
            source={note?.image}
            style={{ width: 250, height: 250 }}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}> {note?.title} </Text>
          <Text style={styles.date}> {note?.date} </Text>
          <Text style={styles.description}> {note?.description} </Text>
        </View>
      </ScrollView>

      <View style={styles.bngksbtn}>
        <TouchableOpacity style={styles.button1} onPress={() => router.push(`/update/${note?.id}`)}>
          <Text style={styles.text1}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.text2}>Delete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  appBar: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingHorizontal: 7,
  },

  appBarTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  content: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 6,
  },

  title: {
    fontSize: 16,
    fontWeight: 500,
  },

  date: {
    fontSize: 12,
    color: "gray",
  },

  description: {
    paddingVertical: 10,
    fontSize: 14,
    textAlign: "justify",
    color: "#000000",
    lineHeight: 22,
    fontWeight: 400,
  },

  image: {
    justifyContent: "center",
    alignItems: "center",
  },

  button1: {
    backgroundColor: "#FF5B13",
    color: "white",
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 10,
  },

  button2: {
    backgroundColor: "#FF3530",
    color: "white",
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 10,
  },

  bngksbtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },

  text1: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

  text2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
