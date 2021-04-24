import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Alert, Modal, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import experts from '../Experts';

const HomeScreen = ({ navigation }) => {
    const [selected, setSelected] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const onPressCheck = () => {
        return navigation.navigate('Web', {name: 'Web'});
    }

    const onPressPost = (post) => {
        setSelected(post);
        setModalVisible(true);
    }

    const allPost = experts.map(post => (
        <View style={styles.card} key={post.id}>
        <TouchableOpacity onPress={() => {onPressPost(post)}}>
            <Image
                source={post.image}
                style={styles.cardImage}
            />
        </TouchableOpacity>
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>
                    {post.title}
                </Text>
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.cardDescription}>
                    {post.description}
                </Text>
            </View>
        </View>
    ))

    return (
        <View styles={styles.section}>
            <StatusBar style='light' />
            <View style={styles.alwaysHeader} />
            
            <ScrollView style={styles.container}>
                <View style={styles.section}>

                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            Feed
                        </Text>
                    </View>

                <TouchableOpacity style={styles.mainHead} onPress={onPressCheck}>
                    <Text style={styles.mainHeadText}>
                        ผลสลากงวดล่าสุด
                    </Text>
                </TouchableOpacity>

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert('Image has been closed.');
                        }}>
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{selected.title}</Text>
                            <Image
                                source={selected.image}
                                style={styles.cardImage}
                            />

                            <TouchableHighlight
                            style={{ ...styles.closeButton, backgroundColor: '#2196F3' }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <Text style={styles.textStyle}>Close</Text>
                            </TouchableHighlight>
                        </View>
                        </View>
                    </Modal>
                </View>

                <View style={styles.box}>
                    {allPost}
                </View>
                
                <View style={styles.footer} />

                </View>

            </ScrollView>
            
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        backgroundColor: 'grey',
    },
    container: {
	  	backgroundColor: '#333',
    },
    alwaysHeader: {
        backgroundColor: '#333',
        height: 20,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 10,
    },
    mainHead: {
        backgroundColor: 'green',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainHeadText: {
        color: '#eee',
        fontWeight: 'bold',
        fontSize: 20,
    },
    header: {
        backgroundColor: '#333',
        height: 70,
        alignItems: 'center',
        paddingBottom: 10,
        justifyContent: 'flex-end'
    },
    headerText: {
        color: '#eee',
        fontWeight: 'bold',
        fontSize: 35,
    },
    footer: {
        backgroundColor: '#333333',
        height: 20,
    },
    container0: {
        flex: 1
    },
    card: {
        backgroundColor: '#222',
        marginBottom: 50,
        minHeight: 120,
        maxHeight: 'auto',
        width: '98%',
    },
    cardImage: {
        maxWidth: '100%',
        height: 360,
    },
    cardHeader: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardTitle: {
        color: '#ddd',
        fontSize: 20,
    },
    cardContent: {
        padding: 10,
    },
    box: {
        paddingTop: 10,
        alignItems: 'center'
    },
    cardDescription: {
        fontSize: 15,
        color: '#eee'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 2,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    closeButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 20,
        marginBottom: 20,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 20,
        marginTop: 20,
        fontSize: 30,
        textAlign: 'center',
    },
});

export default HomeScreen;