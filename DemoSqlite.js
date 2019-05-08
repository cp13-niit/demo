import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { SQLite } from 'expo';

const db = SQLite.openDatabase("mydb.db");

export default class DemoSqlite extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        // db.transaction((tx) => {
        //     tx.executeSql('create table if not exists user(id int primary key, name text, address text)', [], (_, result) => {
        //         alert("Create table successfully");
        //     }, err => {
        //         alert("Create table did not successfully");
        //     });
        // }, (error) => {
        //     console.log(error);
        // }, () => {
        //     console.log("success");
        // })
    }

    componentDidMount() {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM user", [], (_, res) => {
                alert("Test");
                //alert(JSON.stringify(res));
                alert(JSON.stringify(res.rows._array));
            }, (error) => {
                alert("Select error");
            })
        }, () => { }, (error) => { alert("error") })
    }


    _insert() {
        db.transaction((tx) => {
            tx.executeSql("INSERT INTO user(id,name,address) VALUES(?,?,?)", [2, "Luan2", "Quang Ninh"], () => {
                alert("Insert successfully");
            }, (error) => {
                alert("Insert error" + JSON.stringify(error));
            });
        })
    }


    render() {
        return (
            <View>
                <SafeAreaView>
                    <Text> test sqlite</Text>
                    <Button title="Insert Data" onPress={() => {
                        this._insert();
                    }}></Button>
                </SafeAreaView>

            </View>
        );
    }
}
