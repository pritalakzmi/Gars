import React from "react";

function Rating() {
    const size = 8
    const color = Colors.red;
    return (
        <HStack space={0.4} mt={1} alignItems="center">
            <FontAwesome
                name={value >= 1 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"}
                color={color}
                size={size}
            />
            {text && (
                <Text fontsSize={12} ml={2}>
                    {text}
                </Text>
            )}
        </HStack>
    );
}

export default Rating