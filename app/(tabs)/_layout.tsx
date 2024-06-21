import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const TabLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <View style={styles.container}>
            {/* maincontent */}
            <View style={styles.content}>
               {children}
            </View>
            {/* bottom Navigation */}
            <View style = {styles.bottomNavigation}>
                <Text>Tab Bottom Navigation</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
    },
    bottomNavigation: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
});

export default TabLayout;
