import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet, Alert,SafeAreaView,ScrollView } from 'react-native'
import {TextInput,Button} from 'react-native-paper'
import firestore from '@react-native-firebase/firestore'



const editJob = ({route,navigation}) => {
    const jb = route.params.job
    // const [title,setTitle] = useState(jb.title);
    // const [payment,setPayment] = useState(jb.payment);
    // const [onPageEmployee,setOnPageEmployee] = useState(jb.onPageEmployee);

    const [title,setTitle] = useState(jb.title);
    const [payment,setPayment] = useState(jb.payment);
    const [onPageEmployee,setOnPageEmployee] = useState(jb.onPageEmployee);
    const [onPageStartingDate,setOnPageStartingDate] = useState(jb.onPageStartingDate);
    const [onPagePrice,setOnPagePrice] = useState(jb.onPagePrice);
    const [onPagePayment,setOnPagePayment] = useState(jb.onPagePayment);
    const [offPageEmployee,setOffPageEmployee] = useState(jb.offPageEmployee);
    const [offPageStartingDate,setOffPageStartingDate] = useState(jb.offPageStartingDate);
    const [offPagePrice,setOffPagePrice] = useState(jb.offPagePrice);
    const [offPagePayment,setOffPagePayment] = useState(jb.offPagePayment);
    const [totalDue,setTotalDue] = useState(jb.totaldue)
    

    // const setForm = (jb)=>{
    // setTitle(jb.title)
    // setPayment(jb.payment)
    // setOnPageEmployee(jb.onPageEmployee)
    // setPaymentStatus(jb.paymentStatus)
    // }
    // setForm(jb)

    const updateData = async()=>{
        try{
            await firestore().collection('jobs')
            .doc(jb.id)
            .update({
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
            })
            .then(()=>Alert.alert("Data Updated"))
        }catch(err){
            Alert.alert("Sorry! Something went wrong.")
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
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
                value={onPagePrice}
                onChangeText={text=>{setOnPagePrice(text)}}
                />
                <TextInput
                label="On Page Payment"
                mode="outlined"
                value={onPagePayment}
                onChangeText={text=>{setOnPagePayment(text)}}
                />
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
                value={offPagePrice}
                onChangeText={text=>{setOffPagePrice(text)}}
                />
                <TextInput
                label="Off Page Payment"
                mode="outlined"
                value={offPagePayment}
                onChangeText={text=>{setOffPagePayment(text)}}
                />
                <TextInput
                label="Total Due"
                mode="outlined"
                value={totalDue}
                onChangeText={text=>{setTotalDue(text)}}
                />
                <Button mode="contained" onPress={()=>updateData()}>
                    Update
                </Button>
            </ScrollView>
        </SafeAreaView>

        // <View behavior="position" style={styles.container}>
        //     <Text style={styles.text}>Create New Job</Text>
        //     <TextInput
        //     label="Title"
        //     mode="outlined"
        //     value={title}
        //     onChangeText={text=>{setTitle(text)}}
        //     />
        //     <TextInput
        //     label="Payment"
        //     mode="outlined"
        //     value={payment}
        //     onChangeText={text=>{setPayment(text)}}
        //     />
        //     <TextInput
        //     label="On Page Employee"
        //     mode="outlined"
        //     value={onPageEmployee}
        //     onChangeText={text=>{setOnPageEmployee(text)}}
        //     />
        //     <TextInput
        //     label="Payment Status"
        //     mode="outlined"
        //     value={paymentStatus}
        //     onChangeText={text=>{setPaymentStatus(text)}}
        //     />
        //     <Button mode="contained" onPress={()=>updateData()}>
        //         Update
        //     </Button>

        //</View>

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

export default editJob
