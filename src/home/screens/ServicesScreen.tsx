import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';
import type { MainStackParamList } from '../../app/navigation/MainNavigator';

const ServicesScreen = () => {
    const navigation = useNavigation<NavigationProp<MainStackParamList>>();

    const handleNavigateToContaServices = () => {
        // Navegar para o nível superior (MainNavigator) e depois para ContaServices
        const parentNavigation = navigation.getParent();
        if (parentNavigation) {
            parentNavigation.navigate('ContaServices' as never);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Serviços</Text>
            <Text style={styles.subtitle}>Explore nossos serviços disponíveis</Text>
            
            <TouchableOpacity 
                style={styles.card} 
                onPress={handleNavigateToContaServices}
                activeOpacity={0.7}
            >
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>Serviços de Conta</Text>
                    <Text style={styles.cardDescription}>
                        Gerencie seu saldo, extrato e demais funcionalidades da sua conta
                    </Text>
                    <Text style={styles.cardAction}>Acessar →</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 40,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardContent: {
        alignItems: 'flex-start',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#2563eb',
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
        marginBottom: 12,
    },
    cardAction: {
        fontSize: 16,
        fontWeight: '500',
        color: '#2563eb',
    },
});




export default ServicesScreen;
