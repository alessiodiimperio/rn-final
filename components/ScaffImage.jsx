import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { getSectionImage } from "../RequiredImages";

function ScaffImage({
    section,
    totalSections,
    sectionsToDraw,
    level,
    totalLevels,
    levelsWithPlatforms,
    hasStairs,
    hasLadders,
    size,
}) {
    //Magic Numbers to words with meaning
    const bottomLevel = 1;
    const topLevel = totalLevels;
    const firstSection = 1;
    const lastSection = sectionsToDraw;
    let sectionToDrawDivideOn = 4;
    const hasDivide = totalSections > 6 ? true : false;

    let imageSRC = "scaff";

    if (level === bottomLevel) {
        imageSRC += "_base";
    } else if (level === topLevel) {
        imageSRC += "_top";
    } else {
        imageSRC += "_middle";
    }

    if (hasStairs && section === firstSection) {
        imageSRC += "_hasStairs";
    }
    if (hasLadders && section === lastSection) {
        imageSRC += "_hasLadders";
    }
    if (
        (section === firstSection || section === lastSection) &&
        level !== topLevel
    ) {
        imageSRC += "_hasDiagonals";
    }

    if (level !== topLevel) {
        if (
            (hasStairs && section === firstSection) ||
            (hasLadders && section === lastSection) ||
            level >= topLevel - levelsWithPlatforms
        ) {
            imageSRC += "_hasPlatform";
        }
    }
    if (section === sectionToDrawDivideOn && hasDivide) {
        imageSRC += "_hasDivide";
    }
    if (level !== topLevel && level !== bottomLevel) {
        if (
            (!hasStairs &&
                section === firstSection &&
                !hasLadders &&
                section === lastSection &&
                level > topLevel - levelsWithPlatforms) ||
            (section !== firstSection &&
                section !== lastSection &&
                level > topLevel - levelsWithPlatforms)
        ) {
            imageSRC += "_hasRail";
        }
    }

    const imageName = imageSRC + ".png";
    const image = getSectionImage(imageName);
    console.log(imageName);

    return (
        <Image
            style={{ height: size.height, width: size.width }}
            source={image}
            resizeMode="contain"
        />
    );
}

export default ScaffImage;
