import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export interface SearchBoxProps {
    placeHolder: string,
    changeHandler(text: string): void
}
export function SearchBox(props: SearchBoxProps) {
    const [isFocused, setIsFocused] = useState(false);

    const handleBlur = async () => {
        setIsFocused(false)
    }

    const handleFocus = async () => {
        setIsFocused(true)
    }

    return (
        <TextInput
            style={{
                ...styles.searchBox,
                 borderBottomColor: isFocused?'#adff2f':'#fff'}}
            onChangeText={props.changeHandler}
            placeholder="name or reg"
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    );
}
const styles = StyleSheet.create({
    searchBox: {
        height: 50,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(50, 50, 50, 0.9)',
        borderBottomWidth: 1,
        borderBottomColor: '#adff2f',
        marginBottom: 5,
        color: '#adff2f'
    }
});