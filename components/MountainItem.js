import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StyledBox = styled.View`
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
`;

const SnowDepthText = styled.Text`
    color: #4d95eb;
    font-size: 25px;
`;

const SnowDepthLegend = styled.Text`
    color: grey;
    font-size: 15px;
`;

const MountainName = styled.Text`
    font-size: 10px;
    text-align: center;
`;

const LogoSection = styled.View`
    margin-right: 10px;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
`;

const MountainLogo = styled.Image`
    width: 25%;
    height: 30px;
`;

const Separator = styled.View`
    width: 100%;
    height: 4px;
    background-color: #f6f6f6;
`
const SnowDepthBox = (props) => {
    let snowDepth = props.depth ? `${props.depth}cm`: 'N/A';

    return (<StyledBox>
        <SnowDepthText>{snowDepth}</SnowDepthText>
        <SnowDepthLegend>{props.description}</SnowDepthLegend>
    </StyledBox>);
};

const MountainItem = ({ item }) => {
    const navigation = useNavigation();

    const getDetail = () => {
        console.log(item.mtInfo.name)
        navigation.navigate('Details', {
            resortName: item.mtInfo.name
        })
    }

    return (
    <View style={styles.wrapper}>
        <Separator></Separator>
        <TouchableOpacity style={styles.mountain} onPress={getDetail}>
        <LogoSection>
            <Image style={styles.logo} source={{uri: item.mtInfo.cover}}/>
            <MountainName>{item.mtInfo.displayName}</MountainName>
        </LogoSection>
        <View style={styles.snowdepth}>
            <SnowDepthBox depth={item.basic.hours24} description="24 Hours"/>
            <SnowDepthBox depth={item.basic.days7} description="7 Days" />
            <SnowDepthBox depth={item.basic.season} description="Season"/>
        </View>
        </TouchableOpacity>
    </View>
  )};

export default MountainItem;

const styles = StyleSheet.create({
    mountain: {
      flexDirection: 'row',
      marginBottom: 1,
    },
    snowdepth: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    logo: {
        alignSelf: 'center',
        width: 60,
        height: 60,
    },
    wrapper: {
        backgroundColor: 'white'
    }
  });
