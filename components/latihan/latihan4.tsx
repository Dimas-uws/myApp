import { Button, Text, TouchableOpacity, View } from "react-native";

export default function Latihan3() {
    return (
        <View>
            <Text>Latihan 4</Text>

            <Button title="press here" onPress={() => alert("Hello")} />

            <TouchableOpacity
            style={{
                backgroundColor: "grey",
                margin: 20, 
                padding: 10,
                alignItems: "center",
                borderRadius: 10
            }}
            >
                <Text style={{ fontSize: 18, color: "white" }}>Press Here!</Text>
            </TouchableOpacity>
        </View>
    )
}