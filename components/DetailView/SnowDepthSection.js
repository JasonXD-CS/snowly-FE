import React from 'react'
import styled from 'styled-components/native'
import { View, StyleSheet } from 'react-native'

const StyledBox = styled.View`
    width: 48%;
    height: 100px;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin: 1px;
`;

const SnowDepthText = styled.Text`
    color: #4d95eb;
    font-size: 25px;
`;

const SnowDepthLegend = styled.Text`
    color: grey;
    font-size: 15px;
`;

const Separator = styled.View`
    background-color: grey;
    width: 100%;
    height: 2px;
`

const SnowDepthBox = (props) => {
    let snowDepth = props.depth ? `${props.depth}cm`: 'N/A';

    return (<StyledBox>
        <SnowDepthText>{snowDepth}</SnowDepthText>
        <SnowDepthLegend>{props.description}</SnowDepthLegend>
    </StyledBox>);
};

const SnowDepthSection = (props) => {
    const { snow } = props

    return (
        <View style={styles.snowsection}>
            <SnowDepthBox depth={snow.hours24} description="24 Hours"/>
            <SnowDepthBox depth={snow.days7}description="7 Days" />
            <SnowDepthBox depth={snow.season} description="Season"/>
            <SnowDepthBox depth={snow.base} description="Base"/>
        </View>
    )
}

export default SnowDepthSection;

const styles = StyleSheet.create({
    snowsection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5
    }
})