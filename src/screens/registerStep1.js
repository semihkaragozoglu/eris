import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Left, Right, Body, Title, ListItem, Text, Radio } from 'native-base';


export class RegisterStep1 extends Component {

    constructor() {
        super();
        this.state = {
            itemSelected: 'erkek',
        }

    }
    render() {
        return (
            <ImageBackground source={require('../../assets/images/bg2.jpg')} style={{ width: '100%', height: '100%', position: 'absolute' }}>
                <Container style={styles.container}>
                    <Content>
                        <Header style={{ backgroundColor: 'transparent', borderWidth: 0, }} androidStatusBarColor='#6c5b7b'>
                            <Left />
                            <Body>
                                <Title>Eris,  1 / 3</Title>
                            </Body>
                            <Right />
                        </Header>
                        <Form style={{ alignItems: 'center' }}>
                            <Label style={styles.label}>Bizimle ismini paylaşırsan sana nasıl hitap edeceğimizi de biliriz</Label>
                            <Input placeholder="Adınız Soyadınız" placeholderTextColor="#e2e2e2" style={styles.input} />

                            <Label style={styles.label}>E bir de cinsiyet bilginiz</Label>

                            <Content style={styles.gender}>
                                <ListItem>
                                    <Text style={{color:'#fff', fontFamily: 'telescopeFont', fontSize:25}}>Beyefendi</Text>
                                    <Right>
                                        <Radio color="white" selectedColor="green" onPress={() => this.setState({ itemSelected: 'erkek' })}
                                            selected={this.state.itemSelected == 'erkek'}
                                        />
                                    </Right>
                                </ListItem>
                                <ListItem>
                                <Text style={{color:'#fff', fontFamily: 'telescopeFont', fontSize:25}}>Hanımefendi</Text>
                                    <Right>
                                        <Radio color="white" selectedColor="green" onPress={() => this.setState({ itemSelected: 'kadin' })}
                                            selected={this.state.itemSelected == 'kadin'}
                                        />
                                    </Right>
                                </ListItem>
                            </Content>

                        </Form>
                    </Content>
                </Container>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.7)'
    },
    label: {
        fontFamily: 'telescopeFont',
        fontSize: 26,
        color: 'white',
        textAlign: 'center',
        marginTop: '8%',
    },
    input: {
        borderWidth: 2,
        borderColor: 'lightgrey',
        paddingLeft: 10,
        marginTop: 20,
        borderRadius: 10,
        color: 'white',
        width: '80%',
        textAlign: 'center'
    },
    gender: {
        width: '80%'
    }
});