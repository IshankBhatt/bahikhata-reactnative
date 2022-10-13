import React,{useEffect,useState} from 'react'
import { View, Text,FlatList,StyleSheet,TouchableOpacity } from 'react-native'
import {Button,Card,Title,Paragraph, Avatar} from 'react-native-paper'
import firestore from '@react-native-firebase/firestore'

const allJobs = ({navigation}) => {
    const [items,setItems] = useState([])
    const [loading,setLoading] = useState(false)

    const getDetails = async ()=>{
        const querySnap = await firestore().collection('jobs').get()
        const result = querySnap.docs.map(docSnap=>docSnap.data())
        console.log(result)
        setItems(result)
    }

    useEffect(()=>{
        getDetails()
        return ()=>{
            console.log("cleanup")
        }
    },[])

    const renderItem = (item)=>{
        return (
            <Card style={styles.card}>
                <Card.Title title={item.title} />
                <Card.Content>
                    <Paragraph>Payment :{item.payment}</Paragraph>
                    <Paragraph>Payment :{item.onPageStartingDate}</Paragraph>
                    <Paragraph>Due: {item.totaldue}</Paragraph>
                </Card.Content>
                <Button onPress={()=>navigation.navigate("Edit",{job:item})}>
                    Edit
                </Button>
            </Card>
        )
    }

    return (
        <View>
            <FlatList
            data={items}
            keyExtractor={(item)=>item.title}
            renderItem={({item})=>renderItem(item)}
            onRefresh={()=>{
                setLoading(true)
                getDetails()
                setLoading(false)
            }}
            refreshing={loading}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card : {
        margin:10,
        elevation:2,
    }
})

export default allJobs
