export const widthHeightExample = require('./assets/OptionsImages/scaffexample.jpg');
export const stairTowerExample = require('./assets/OptionsImages/has-stairs.jpg');
export const accessDeckExample = require('./assets/OptionsImages/has-ladder.jpg');

export function getSectionImage(sourceString) {
  switch (sourceString) {
    case 'scaff_base_hasDiagonals_hasPlatform.png':
      return require('./assets/ScaffSectionImages/scaff_base_hasDiagonals_hasPlatform.png');

    case 'scaff_base_hasDiagonals.png':
      return require('./assets/ScaffSectionImages/scaff_base_hasDiagonals.png');

    case 'scaff_base_hasDivide.png':
      return require('./assets/ScaffSectionImages/scaff_base_hasDivide.png');

    case 'scaff_base_hasLadders_hasDiagonals_hasPlatform.png':
      return require('./assets/ScaffSectionImages/scaff_base_hasLadders_hasDiagonals_hasPlatform.png');

    case 'scaff_base_hasPlatform_hasDivide.png':
      return require('./assets/ScaffSectionImages/scaff_base_hasPlatform_hasDivide.png');

    case 'scaff_base_hasPlatform.png':
      return require('./assets/ScaffSectionImages/scaff_base_hasPlatform.png');

    case 'scaff_base_hasStairs_hasDiagonals_hasPlatform.png':
      return require('./assets/ScaffSectionImages/scaff_base_hasStairs_hasDiagonals_hasPlatform.png');

    case 'scaff_base_hasStairs_hasLadders_hasDiagonals_hasPlatform.png':
      return require('./assets/ScaffSectionImages/scaff_base_hasStairs_hasLadders_hasDiagonals_hasPlatform.png');

    case 'scaff_base.png':
      return require('./assets/ScaffSectionImages/scaff_base.png');

    case 'scaff_middle_hasDiagonals_hasPlatform_hasRail.png':
      return require('./assets/ScaffSectionImages/scaff_middle_hasDiagonals_hasPlatform_hasRail.png');

    case 'scaff_middle_hasDiagonals_hasPlatform.png':
      return require('./assets/ScaffSectionImages/scaff_middle_hasDiagonals_hasPlatform.png');

    case 'scaff_middle_hasDiagonals.png':
      return require('./assets/ScaffSectionImages/scaff_middle_hasDiagonals.png');

    case 'scaff_middle_hasDivide.png':
      return require('./assets/ScaffSectionImages/scaff_middle_hasDivide.png');

    case 'scaff_middle_hasLadders_hasDiagonals_hasPlatform.png':
      return require('./assets/ScaffSectionImages/scaff_middle_hasLadders_hasDiagonals_hasPlatform.png');

    case 'scaff_middle_hasPlatform_hasDivide_hasRail.png':
      return require('./assets/ScaffSectionImages/scaff_middle_hasPlatform_hasDivide_hasRail.png');

    case 'scaff_middle_hasPlatform_hasDivide.png':
      return require('./assets/ScaffSectionImages/scaff_middle_hasPlatform_hasDivide.png');

    case 'scaff_middle_hasPlatform_hasRail.png':
      return require('./assets/ScaffSectionImages/scaff_middle_hasPlatform_hasRail.png');

    case 'scaff_middle_hasPlatform.png':
      return require('./assets/ScaffSectionImages/scaff_middle_hasPlatform.png');

    case 'scaff_middle_hasStairs_hasDiagonals_hasPlatform.png':
      return require('./assets/ScaffSectionImages/scaff_middle_hasStairs_hasDiagonals_hasPlatform.png');

    case 'scaff_middle_hasStairs_hasLadders_hasDiagonals_hasPlatform.png':
      return require('./assets/ScaffSectionImages/scaff_middle_hasStairs_hasLadders_hasDiagonals_hasPlatform.png');

    case 'scaff_middle.png':
      return require('./assets/ScaffSectionImages/scaff_middle.png');

    case 'scaff_top_hasDivide.png':
      return require('./assets/ScaffSectionImages/scaff_top_hasDivide.png');

    case 'scaff_top_hasLadders.png':
      return require('./assets/ScaffSectionImages/scaff_top_hasLadders.png');

    case 'scaff_top_hasStairs_hasLadders.png':
      return require('./assets/ScaffSectionImages/scaff_top_hasStairs_hasLadders.png');

    case 'scaff_top_hasStairs.png':
      return require('./assets/ScaffSectionImages/scaff_top_hasStairs.png');

    case 'scaff_top.png':
      return require('./assets/ScaffSectionImages/scaff_top.png');

    default:
      break;
  }
}
export function getPartsImage(source) {
  switch (source) {
    case './assets/DetailThumbnails/startkrans.png':
      return require('./assets/DetailThumbnails/startkrans.png');
    case './assets/DetailThumbnails/bottenskruv.png':
      return require('./assets/DetailThumbnails/bottenskruv.png');
    case './assets/DetailThumbnails/spira.png':
      return require('./assets/DetailThumbnails/spira.png');
    case './assets/DetailThumbnails/spira.png':
      return require('./assets/DetailThumbnails/spira.png');
    case './assets/DetailThumbnails/spira.png':
      return require('./assets/DetailThumbnails/spira.png');
    case './assets/DetailThumbnails/langbalk.png':
      return require('./assets/DetailThumbnails/langbalk.png');
    case './assets/DetailThumbnails/langbalk.png':
      return require('./assets/DetailThumbnails/langbalk.png');
    case './assets/DetailThumbnails/kortbalk.png':
      return require('./assets/DetailThumbnails/kortbalk.png');
    case './assets/DetailThumbnails/ukortbalk.png':
      return require('./assets/DetailThumbnails/ukortbalk.png');
    case './assets/DetailThumbnails/diagonal.png':
      return require('./assets/DetailThumbnails/diagonal.png');
    case './assets/DetailThumbnails/stalplank.png':
      return require('./assets/DetailThumbnails/stalplank.png');
    case './assets/DetailThumbnails/ladders.png':
      return require('./assets/DetailThumbnails/ladders.png');
    case './assets/DetailThumbnails/sparklist.png':
      return require('./assets/DetailThumbnails/sparklist.png');
    case './assets/DetailThumbnails/andsparklist.png':
      return require('./assets/DetailThumbnails/andsparklist.png');
    case './assets/DetailThumbnails/sparklistkonsol.png':
      return require('./assets/DetailThumbnails/sparklistkonsol.png');
    case './assets/DetailThumbnails/ankare.png':
      return require('./assets/DetailThumbnails/ankare.png');
    case './assets/DetailThumbnails/vridkoppling.png':
      return require('./assets/DetailThumbnails/vridkoppling.png');
    case './assets/DetailThumbnails/fastkoppling.png':
      return require('./assets/DetailThumbnails/fastkoppling.png');
    case './assets/DetailThumbnails/stairs.png':
      return require('./assets/DetailThumbnails/stairs.png');
    case './assets/DetailThumbnails/handledare.png':
      return require('./assets/DetailThumbnails/handledare.png');
    case './assets/DetailThumbnails/spirstart.png':
      return require('./assets/DetailThumbnails/spirstart.png');
    case './assets/DetailThumbnails/stallningshack.png':
      return require('./assets/DetailThumbnails/stallningshack.png');
    default:
      break;
  }
}
