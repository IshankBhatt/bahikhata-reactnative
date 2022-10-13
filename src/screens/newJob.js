import React,{ useState } from 'react'
import { View, Text,StyleSheet,Alert, Platform, SafeAreaView, ScrollView } from 'react-native'
import {TextInput,Button} from 'react-native-paper'
import firestore from '@react-native-firebase/firestore'
import {Picker} from '@react-native-picker/picker'

const newJob = () => {
    const [title,setTitle] = useState('');
    const [payment,setPayment] = useState('2000');
    const [onPageEmployee,setOnPageEmployee] = useState('');
    const [onPageStartingDate,setOnPageStartingDate] = useState('');
    const [onPagePrice,setOnPagePrice] = useState('');
    const [onPagePayment,setOnPagePayment] = useState('');
    const [offPageEmployee,setOffPageEmployee] = useState('');
    const [offPageStartingDate,setOffPageStartingDate] = useState('');
    const [offPagePrice,setOffPagePrice] = useState('');
    const [offPagePayment,setOffPagePayment] = useState('');
    const [totalDue,setTotalDue] = useState('')

    const data = {
        "title":title,
        "payment":payment,
        "onPageEmployee":onPageEmployee,
        "onPageStartingDate":onPageStartingDate,
        "onPagePrice":onPagePrice,
        "onPagePayment":onPagePayment,
        "offPageEmployee":offPageEmployee,
        "offPageStartingDate":offPageStartingDate,
        "offPagePrice":offPagePrice,
        "offPagePayment":offPagePayment,
        "totaldue":totalDue,
    }

    
    const postData = async ()=>{
        try{
            await firestore().collection('jobs')
            .add(data)
            .then((snapshot)=>{
                data.id = snapshot.id
                snapshot.set(data)
            })
            Alert.alert("Posted Succesfully")
            setTitle('')
            setOnPageEmployee('')
            setPaymentStatus('')
            console.log(title)
            console.log(paymentStatus)
            console.log(onPageEmployee)
        }catch(err){
            Alert.alert("Something went wrong. Try Again!")
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <Text style={styles.text}>Create New Job</Text>
                <TextInput
                label="Title"
                mode="outlined"
                value={title}
                onChangeText={text=>{setTitle(text)}}
                />
                <TextInput
                label="Payment"
                mode="outlined"
                keyboardType="numeric"
                value={payment}
                onChangeText={text=>{setPayment(text)}}
                />
                <TextInput
                label="On Page Employee"
                mode="outlined"
                value={onPageEmployee}
                onChangeText={text=>{setOnPageEmployee(text)}}
                />
                <TextInput
                label="Starting Date"
                mode="outlined"
                value={onPageStartingDate}
                onChangeText={text=>{setOnPageStartingDate(text)}}
                />
                <TextInput
                label="On Page Price"
                mode="outlined"
                keyboardType="numeric"
                value={onPagePrice}
                onChangeText={text=>{setOnPagePrice(text)}}
                />
                <Picker
                mode="outlined"
                value={onPagePayment}
                onValueChange={text=>{setOnPagePayment(text)}}
                >
                    <Picker.Item label="due" value="due"/>
                    <Picker.Item label="due from client" value="due from client"/>
                    <Picker.Item label="paid" value="paid"/>
                </Picker>
                <TextInput
                label="Off Page Employee"
                mode="outlined"
                value={offPageEmployee}
                onChangeText={text=>{setOffPageEmployee(text)}}
                />
                <TextInput
                label="Off Page Starting Date"
                mode="outlined"
                value={offPageStartingDate}
                onChangeText={text=>{setOffPageStartingDate(text)}}
                />
                <TextInput
                label="Off Page Price"
                mode="outlined"
                keyboardType="numeric"
                value={offPagePrice}
                onChangeText={text=>{setOffPagePrice(text)}}
                />
                <TextInput
                label="Off Page Payment Status"
                mode="outlined"
                value={offPagePayment}
                onChangeText={text=>{setOffPagePayment(text)}}
                />
                <TextInput
                label="Total Due"
                mode="outlined"
                keyboardType="numeric"
                value={totalDue}
                onChangeText={text=>{setTotalDue(text)}}
                />
                <Button mode="contained" onPress={()=>console.log(onPagePayment)}>
                    Post
                </Button>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:"black",
        borderWidth:1,
    },
    container:{
        flex:1,
        marginHorizontal:30,
        justifyContent:"space-evenly",
    },
    text:{
        fontSize:22,
        textAlign:"center"
    }

})

export default newJob
