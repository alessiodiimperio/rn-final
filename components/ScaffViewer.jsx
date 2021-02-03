/* eslint-disable no-shadow */
/* eslint-disable comma-dangle */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ScaffImage from './ScaffImage';

function ScaffViewer({ scaffolding }) {
  const sectionWidth = 3.07;
  const sectionHeight = 2;
  const totalSections = isNaN(scaffolding?.width / sectionWidth)
    ? 3
    : scaffolding?.width / sectionWidth;
  const totalLevels = isNaN(
    // eslint-disable-next-line radix
    parseInt((scaffolding?.height + sectionHeight) / sectionHeight)
  )
    ? 3
    : // eslint-disable-next-line radix
      parseInt((scaffolding?.height + sectionHeight) / sectionHeight);
  const sectionsToDraw = totalSections > 6 ? 6 : totalSections;
  const sections = [...Array(sectionsToDraw)];
  const levels = [...Array(totalLevels)];

  const getImgSize = () => {
    if (sectionsToDraw <= 3 && totalLevels <= 3) {
      return {
        height: 85,
        width: 103,
      };
    } else {
      return {
        height: 50,
        width: 60,
      };
    }
  };

  const imgSize = getImgSize();

  return (
    <View style={styles.container}>
      {sections.map((_, section) => {
        return (
          <View style={styles.section} key={section}>
            {levels.map((_, level) => {
              return (
                <ScaffImage
                  key={section + level}
                  section={section + 1} //remove index zero for easier readability
                  totalSections={totalSections}
                  sectionsToDraw={sectionsToDraw}
                  level={level + 1} //remove index zero for easier readability
                  totalLevels={totalLevels}
                  levelsWithPlatforms={1}
                  hasStairs={scaffolding?.stairs ?? false}
                  hasLadders={scaffolding?.ladders ?? false}
                  size={imgSize}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 0.25,
  },
  column: {
    flexDirection: 'column',
  },
  section: {
    flexDirection: 'column-reverse',
  },
});

export default ScaffViewer;
