import { Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View
    style={{
      padding: 10,
      paddingTop: 20,
    }}>
      {/* belajar text */}
      <Text
        style={{
          height: 30,
          padding: 5,
        }}
      >
        Aplikasi Boidata Diri
      </Text>

      <Text
        style={{
          padding: 5,
        }}
      >
        Name
      </Text>

      {/* belajar input */}
      <TextInput
        placeholder="Enter you'r name"
        style={{
          height: 40,
          padding: 10,
          marginHorizontal: 6,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 5,
        }}
      />
      <Text
        style={{
          padding: 5,
        }}
      >
        Kelas
      </Text>

      {/* belajar input */}
      <TextInput
        placeholder="Masukkan kelas mu"
        style={{
          height: 40,
          padding: 10,
          marginHorizontal: 6,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 5,
        }}
      />
      <Text
        style={{
          padding: 5,
        }}
      >
        Hobi
      </Text>

      {/* belajar input */}
      <TextInput
        placeholder="Masukkan hobi mu"
        style={{
          height: 40,
          padding: 10,
          marginHorizontal: 6,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 5,
        }}
      />
    </View>
  );
}