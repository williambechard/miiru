import React, {ReactNode} from 'react';
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {StyleSheet} from "react-native";

interface PageProps {
    headerText: string;
    children?: ReactNode; // Define children prop
}

export const Page: React.FC<PageProps> = ({headerText, children }) => {
    return (
        <ThemedView style={styles.outer}>
            <ThemedText type="title">{headerText}</ThemedText>
            {children}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    outer:{
        flex:1,
        padding:10,
    },
});