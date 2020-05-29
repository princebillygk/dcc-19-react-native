import React, { useState, useEffect } from 'react';
//core-components
import { StyleSheet, ScrollView, View } from 'react-native';
import { AppLoading } from 'expo';
//fonts
import {
  useFonts,
  ZCOOLKuaiLe_400Regular,
  UbuntuMono_400Regular,
} from '@expo-google-fonts/dev'
//types
//data
import students from './data/students.data'
//my-components
import { Header } from './components/Header';
import { StudentTile } from './components/StudentTile'
import { SearchBox } from './components/SearchBox';
//images

export default function App() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = async (text: string) => {
    await setSearchText(text.toLowerCase());
  }

  const [fontLoaded] = useFonts({
    ubuntu: UbuntuMono_400Regular,
    zcool: ZCOOLKuaiLe_400Regular
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  console.log(searchText);
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchText) ||
    student.reg.toString().includes(searchText)
  )

  return (
      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <Header />
        <SearchBox
          placeHolder="search by name or reg"
          changeHandler={handleSearch} />
        {filteredStudents.map(student => <StudentTile key={student.name} student={student} />)}
      </ScrollView >
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex:1,
    backgroundColor: '#000',
    paddingTop: 30
  },

});
