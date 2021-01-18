export const widthHeightExample = require("./assets/OptionsImages/scaffexample.jpg");
export const stairTowerExample = require("./assets/OptionsImages/has-stairs.jpg");
export const accessDeckExample = require("./assets/OptionsImages/has-ladder.jpg");

export function getSectionImage(sourceString) {
    switch (sourceString) {
        case "scaff_base_hasDiagonals_hasPlatform.png":
            return require("./assets/ScaffSectionImages/scaff_base_hasDiagonals_hasPlatform.png");
            break;
        case "scaff_base_hasDiagonals.png":
            return require("./assets/ScaffSectionImages/scaff_base_hasDiagonals.png");
            break;
        case "scaff_base_hasDivide.png":
            return require("./assets/ScaffSectionImages/scaff_base_hasDivide.png");
            break;
        case "scaff_base_hasLadders_hasDiagonals_hasPlatform.png":
            return require("./assets/ScaffSectionImages/scaff_base_hasLadders_hasDiagonals_hasPlatform.png");
            break;
        case "scaff_base_hasPlatform_hasDivide.png":
            return require("./assets/ScaffSectionImages/scaff_base_hasPlatform_hasDivide.png");
            break;
        case "scaff_base_hasPlatform.png":
            return require("./assets/ScaffSectionImages/scaff_base_hasPlatform.png");
            break;
        case "scaff_base_hasStairs_hasDiagonals_hasPlatform.png":
            return require("./assets/ScaffSectionImages/scaff_base_hasStairs_hasDiagonals_hasPlatform.png");
            break;
        case "scaff_base_hasStairs_hasLadders_hasDiagonals_hasPlatform.png":
            return require("./assets/ScaffSectionImages/scaff_base_hasStairs_hasLadders_hasDiagonals_hasPlatform.png");
            break;
        case "scaff_base.png":
            return require("./assets/ScaffSectionImages/scaff_base.png");
            break;
        case "scaff_middle_hasDiagonals_hasPlatform_hasRail.png":
            return require("./assets/ScaffSectionImages/scaff_middle_hasDiagonals_hasPlatform_hasRail.png");
            break;
        case "scaff_middle_hasDiagonals_hasPlatform.png":
            return require("./assets/ScaffSectionImages/scaff_middle_hasDiagonals_hasPlatform.png");
            break;
        case "scaff_middle_hasDiagonals.png":
            return require("./assets/ScaffSectionImages/scaff_middle_hasDiagonals.png");
            break;
        case "scaff_middle_hasDivide.png":
            return require("./assets/ScaffSectionImages/scaff_middle_hasDivide.png");
            break;
        case "scaff_middle_hasLadders_hasDiagonals_hasPlatform.png":
            return require("./assets/ScaffSectionImages/scaff_middle_hasLadders_hasDiagonals_hasPlatform.png");
            break;
        case "scaff_middle_hasPlatform_hasDivide_hasRail.png":
            return require("./assets/ScaffSectionImages/scaff_middle_hasPlatform_hasDivide_hasRail.png");
            break;
        case "scaff_middle_hasPlatform_hasDivide.png":
            return require("./assets/ScaffSectionImages/scaff_middle_hasPlatform_hasDivide.png");
            break;
        case "scaff_middle_hasPlatform_hasRail.png":
            return require("./assets/ScaffSectionImages/scaff_middle_hasPlatform_hasRail.png");
            break;
        case "scaff_middle_hasPlatform.png":
            return require("./assets/ScaffSectionImages/scaff_middle_hasPlatform.png");
            break;
        case "scaff_middle_hasStairs_hasDiagonals_hasPlatform.png":
            return require("./assets/ScaffSectionImages/scaff_middle_hasStairs_hasDiagonals_hasPlatform.png");
            break;
        case "scaff_middle_hasStairs_hasLadders_hasDiagonals_hasPlatform.png":
            return require("./assets/ScaffSectionImages/scaff_middle_hasStairs_hasLadders_hasDiagonals_hasPlatform.png");
            break;
        case "scaff_middle.png":
            return require("./assets/ScaffSectionImages/scaff_middle.png");
            break;
        case "scaff_top_hasDivide.png":
            return require("./assets/ScaffSectionImages/scaff_top_hasDivide.png");
            break;
        case "scaff_top_hasLadders.png":
            return require("./assets/ScaffSectionImages/scaff_top_hasLadders.png");
            break;
        case "scaff_top_hasStairs_hasLadders.png":
            return require("./assets/ScaffSectionImages/scaff_top_hasStairs_hasLadders.png");
            break;
        case "scaff_top_hasStairs.png":
            return require("./assets/ScaffSectionImages/scaff_top_hasStairs.png");
            break;
        case "scaff_top.png":
            return require("./assets/ScaffSectionImages/scaff_top.png");
            break;
        default:
            break;
    }
}
