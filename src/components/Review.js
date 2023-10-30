import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Review() {
    return (
        <Box my={9}>
            <Heading bold fontSize={15} mb={2}>
                REVIEW
            </Heading>
            {/*IF THERE IS NO REVIEW*/}

            {/*REVIEW*/}
            <Box p={3} bg={Colors.deepstGray} mt={5} rounded={5}>
                <Heading fontSize={15} color={Colors.black}>
                    Pritalakzmi
                </Heading>
                <Rating value={4} />
                <Text mb={3}>
                    14 September 2023
                </Text>
                {/* <FormControl>
                    <FormControl.label
                        _text={{
                            fontSize: "12px",
                            fontWeight: "bold",
                        }}
                    >
                        Komentar
                    </FormControl.label>
                    <TextArea
                        h={24}
                        w="full"
                        placeholder="Kualitas Sangat Baik "
                        bg={Colors.Red}
                        py={4}
                    />
                </FormControl>
                <Buttone bg={Colors.main} colo={Colors.white}>
                    Send
                </Buttone> */}
            </Box>
        </Box>
    )
}