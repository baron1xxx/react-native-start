import {StyleSheet, View} from 'react-native';
import {Navbar} from "./src/Navbar.tsx";

export default function App() {
    return (
        <View style={styles.container}>
            <Navbar title='Todo App'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    text: {
        color: '#fff',
        fontSize: 24
    }
});
