import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TaskScreen from '@/app/task/[category]';
import { useRouter } from 'expo-router';

const CategoryItem = ({ name, pending, time }) => {
  const router = useRouter();
  const handlePress = () =>{
    router.push({
      pathname: "/task/[category]",
      params: {category : `${name}`}
    })
  }
  const timeText = `${time}`
  const pendingText = ` Pendientes`
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.container}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.column}>
            <View style={styles.details}>
              <Text style={styles.boldText}>{pending}</Text>
              <Text style={styles.text}>{pendingText}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Image
                source={require('../assets/images/clock.png')}
                style={styles.clockIcon}
              />
              <Text style={styles.text}>{timeText}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: '2.5%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 10,
    height: 70,
    width: '95%',
    marginBottom:10,
  },
  column: {
    
  },
  title: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  clockIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
});

export default CategoryItem;
