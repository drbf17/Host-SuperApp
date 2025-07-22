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

    const handleNavigateToHostContainer = (componentName: string, title: string) => {
        // Navegar para HostContainer com componente dinâmico
        const parentNavigation = navigation.getParent();
        if (parentNavigation) {
            (parentNavigation as any).navigate('HostContainer', {
                componentName,
                title: `Carregando ${title}...`
            });
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

            <TouchableOpacity 
                style={[styles.card, { backgroundColor: '#e8f5e8' }]} 
                onPress={() => handleNavigateToHostContainer('Services', 'Serviços Dinâmicos')}
                activeOpacity={0.7}
            >
                <View style={styles.cardContent}>
                    <Text style={[styles.cardTitle, { color: '#059669' }]}>Container Dinâmico</Text>
                    <Text style={styles.cardDescription}>
                        Exemplo de carregamento dinâmico de componente micro frontend
                    </Text>
                    <Text style={[styles.cardAction, { color: '#059669' }]}>Testar →</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.card, { backgroundColor: '#fef3cd' }]} 
                onPress={() => handleNavigateToHostContainer('ExtratoScreen', 'Tela de Extrato')}
                activeOpacity={0.7}
            >
                <View style={styles.cardContent}>
                    <Text style={[styles.cardTitle, { color: '#d97706' }]}>Extrato Dinâmico</Text>
                    <Text style={styles.cardDescription}>
                        Carregamento dinâmico da tela de extrato
                    </Text>
                    <Text style={[styles.cardAction, { color: '#d97706' }]}>Carregar →</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.card, { backgroundColor: '#e0e7ff' }]} 
                onPress={() => handleNavigateToHostContainer('CartaoTipoScreen', 'Configuração de Cartão')}
                activeOpacity={0.7}
            >
                <View style={styles.cardContent}>
                    <Text style={[styles.cardTitle, { color: '#4f46e5' }]}>Cartão Dinâmico</Text>
                    <Text style={styles.cardDescription}>
                        Tela de configuração de cartão carregada dinamicamente
                    </Text>
                    <Text style={[styles.cardAction, { color: '#4f46e5' }]}>Configurar →</Text>
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
