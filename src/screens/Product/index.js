import { Box, Image, ScrollView, Text, View } from "native-base";
import React, { useState } from "react";
import { fontType, colors } from '../../theme';
import Rating from "../../components/Rating";
import NumericInput from "react-native-numeric-input";

function Product() {
    const [value, setvalue] = useState(0);
    return (
        < Box safeArea flex={1} bg={olors.white} >
            <ScrollView px={5} showsVerticalScrollIndicator={false}>
                <Image
                    source={require("../assets/images/janakmerah.png")}
                    alt='Image'
                    w="full"
                    h={300}
                    resizeMode="contain"
                />
                <Heading bold fontSize={15} mb={2} LineHeight={22}>
                    Jersey Anak Merah
                </Heading>
                <Rating value={4} />
                <HStack space={2} alignItems="center" my={5}>
                    <NumericInput
                        value={value}
                        totalWidth={140}
                        totalHeight={30}
                        iconSize={25}
                        step={1}
                        maxValue={15}
                        minValue={0}
                        borderColor={Colors.deepGray}
                        rounded
                        textColor={Colors.black}
                        iconStyle={{ color: Colors.white }}
                        rightButtonBackground={Colors.main}
                        leftButtonBackground={Colors.main}
                    />
                    <Spacer />
                    <Heading bold color={Colors.black} fontSize={19}> Rp.299.000
                        </Heading> 
            </HStack>
            <Text LineHeight={24} fontSize={12}> 
            NJDSFHDFHOHRGHEDGREODTUDGOCDmnsdfhhdghehgr
            </Text>
            {/* <Buttone bg={Colors.main} color={Colors.white} mt={10}>
                Masukkan Keranjang
            </Buttone> */}
            {/*REVIEW*/}
            <Review/>
        </ScrollView>
        </Box >
    );
}

export default Product

