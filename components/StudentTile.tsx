import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'
import {Student} from '../types/data'
import {studentImages} from '../data/students.image.loader'


export function StudentTile({student}:{student:Student}) {
    return (
        <View style={styles.studentTile} key={student.reg}>
          <View style={{ margin: 0, padding: 0 }}>
            <Image style={styles.studentImg} source={studentImages[`roll_${student.roll}`]} />
          </View>
          <View style={styles.studentDescription}>
            <Text style={{ ...styles.studentDescriptionContent, ...styles.boldText }}> {student.name}</Text>
            <Text style={styles.studentDescriptionContent}> <Text style={styles.boldText}>Reg:</Text> {student.reg}</Text>
            <Text style={styles.studentDescriptionContent}> <Text style={styles.boldText}>Roll:</Text> {student.roll}</Text>
            <Text style={styles.studentDescriptionContent}> <Text style={styles.boldText}>Batch:</Text> {student.batch}</Text>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  studentTile: {
    backgroundColor: '#adff2f',
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomColor: '#060',
    borderBottomWidth: 5,
    borderRightColor: '#060',
    borderRightWidth: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  studentImg: {
    width: 80,
    height: 80,
    margin: 5
  },
  studentDescription: {
    margin: 8,
    flexGrow: 1
  },
  studentDescriptionContent: {
    fontFamily: 'ubuntu'
  },
  boldText: {
    textShadowRadius: 2
  }
})