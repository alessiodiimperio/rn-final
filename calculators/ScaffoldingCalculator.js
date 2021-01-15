class ScaffCalc {
    //Titles for 'magic numbers'
    static sectionHeight = 2;
    static sectionWidth = 3.07;
    static guardRailHeight = 1;
    static oneMeterStandards = 1;
    static twoMeterStandards = 2;
    static threeMeterStandards = 3;
    static topLevel = 1;
    static bottomLevel = 1;
    static topAndBottomLevel = 2;
    static firstSection = 1;
    static firstAndLastSection = 2;
    static maxBeamDistance = 2;
    static maxAnchorDistance = 2;
    static firstAnchorDistance = 4;
    static maxDiagonalDistance = 5;
    static platformsPerSection = 2;
    static innerAndOuterBeam = 2;
    static outerStandards = 2;
    static outerSection = 1;
    static totalLevelsWithPlatforms = 1;
    static innerAndOuterStandards = 2;
    static topAndBottomLevel = 2;
    static extraStandardsForStairs = 2;

    static calcScaffolding({ height, width, stairs, ladders, farfromwall }) {
        function getNumberOfSections() {
            return parseInt(width / ScaffCalc.sectionWidth);
        }
        function getNumberOfLevels() {
            return parseInt(
                (height + ScaffCalc.sectionHeight) / ScaffCalc.sectionHeight
            );
        }
        function getNumberOfStandardPairs() {
            return getNumberOfSections() + ScaffCalc.outerSection;
        }
        function get3mStandardsForHeight() {
            return parseInt(
                (height + ScaffCalc.guardRailHeight) /
                    ScaffCalc.threeMeterStandards
            );
        }
        function get2mStandardsForHeight() {
            const accountedHeight =
                get3mStandardsForHeight() * ScaffCalc.threeMeterStandards;
            return parseInt(
                (height + ScaffCalc.guardRailHeight - accountedHeight) /
                    ScaffCalc.twoMeterStandards
            );
        }
        function get1mStandardsForHeight() {
            const accountedHeight =
                get3mStandardsForHeight() * ScaffCalc.threeMeterStandards +
                get2mStandardsForHeight() * ScaffCalc.twoMeterStandards;
            return parseInt(
                height + ScaffCalc.guardRailHeight - accountedHeight
            );
        }
        function getStandards3mWithoutGuardrail() {
            return parseInt(height / ScaffCalc.threeMeterStandards);
        }
        function getStandards2mWithoutGuardrail() {
            const accountedHeight =
                getStandards3mWithoutGuardrail() *
                ScaffCalc.threeMeterStandards;
            return parseInt(
                (height - accountedHeight) / ScaffCalc.twoMeterStandards
            );
        }
        function getStandards1mWithoutGuardrail() {
            const accountedHeight =
                getStandards3mWithoutGuardrail() *
                    ScaffCalc.threeMeterStandards +
                getStandards2mWithoutGuardrail() * ScaffCalc.twoMeterStandards;
            return parseInt(height - accountedHeight);
        }
        function getOuterAnkers() {
            return parseInt((height / ScaffCalc.maxAnchorDistance) * 2);
        }
        function getAnkers2m() {
            return (
                parseInt(
                    (getNumberOfStandardPairs() - ScaffCalc.outerStandards) /
                        ScaffCalc.maxAnchorDistance
                ) * parseInt(height / ScaffCalc.maxAnchorDistance)
            );
        }
        function getAnkers4m() {
            return (
                parseInt(
                    (getNumberOfStandardPairs() - ScaffCalc.outerStandards) /
                        ScaffCalc.maxAnchorDistance
                ) * parseInt(height / ScaffCalc.firstAnchorDistance)
            );
        }
        function getShortbeamPerSection() {
            return parseInt(
                height / ScaffCalc.maxBeamDistance + ScaffCalc.outerSection
            );
        }
        function getTotalShortbeam() {
            return parseInt(
                getNumberOfStandardPairs() * getShortbeamPerSection()
            );
        }
        function getLongbeamPerSection() {
            return parseInt(
                height / ScaffCalc.maxBeamDistance + ScaffCalc.outerSection
            );
        }
        function getLongbeams() {
            return parseInt(
                getNumberOfSections() *
                    getLongbeamPerSection() *
                    ScaffCalc.innerAndOuterBeam
            );
        }
        function getPlatforms() {
            return (
                getNumberOfSections() *
                ScaffCalc.totalLevelsWithPlatforms *
                ScaffCalc.platformsPerSection
            );
        }
        function getLevelsWithPlatforms() {
            return ScaffCalc.totalLevelsWithPlatforms;
        }
        /***************** Calculations  ************************/
        function calcTotalStandards100cm() {
            ScaffCalc.extraStandardsForStairs = 2;
            const shortGuardRailStandard = 1;
            const forOuterStandards1m =
                (getNumberOfStandardPairs() +
                    ScaffCalc.innerAndOuterStandards) *
                get1mStandardsForHeight();
            const forInnerStandards1m =
                (getNumberOfStandardPairs() -
                    ScaffCalc.innerAndOuterStandards) *
                getStandards1mWithoutGuardrail();
            const forStairsStandards1m =
                ScaffCalc.extraStandardsForStairs * get1mStandardsForHeight();

            switch (true) {
                case stairs:
                    return (
                        forOuterStandards1m +
                        forInnerStandards1m +
                        forStairsStandards1m +
                        shortGuardRailStandard
                    );
                default:
                    return forOuterStandards1m + forInnerStandards1m;
            }
        }
        function calcTotalStandards200cm() {
            ScaffCalc.extraStandardsForStairs = 2;
            const forOuterStandards2m =
                (getNumberOfStandardPairs() +
                    ScaffCalc.innerAndOuterStandards) *
                get2mStandardsForHeight();
            const forInnerStandards2m =
                (getNumberOfStandardPairs() -
                    ScaffCalc.innerAndOuterStandards) *
                getStandards2mWithoutGuardrail();
            const forStairsStandards2m =
                ScaffCalc.extraStandardsForStairs * get2mStandardsForHeight();

            switch (true) {
                case stairs:
                    return (
                        forOuterStandards2m +
                        forInnerStandards2m +
                        forStairsStandards2m
                    );
                default:
                    return forOuterStandards2m + forInnerStandards2m;
            }
        }
        function calcTotalStandards300cm() {
            ScaffCalc.extraStandardsForStairs = 2;
            const forOuterStandards3m =
                (getNumberOfStandardPairs() +
                    ScaffCalc.innerAndOuterStandards) *
                get3mStandardsForHeight();
            const forInnerStandards3m =
                (getNumberOfStandardPairs() -
                    ScaffCalc.innerAndOuterStandards) *
                getStandards3mWithoutGuardrail();
            const forStairsStandards3m =
                ScaffCalc.extraStandardsForStairs * get3mStandardsForHeight();

            switch (true) {
                case stairs:
                    return (
                        forOuterStandards3m +
                        forInnerStandards3m +
                        forStairsStandards3m
                    );
                default:
                    return forOuterStandards3m + forInnerStandards3m;
            }
        }
        function calcTotalStartCollars() {
            ScaffCalc.extraStandardsForStairs = 2;
            switch (stairs) {
                case true:
                    return (
                        getNumberOfStandardPairs() *
                            ScaffCalc.innerAndOuterStandards +
                        ScaffCalc.extraStandardsForStairs
                    );
                default:
                    return (
                        getNumberOfStandardPairs() *
                        ScaffCalc.innerAndOuterStandards
                    );
            }
        }
        function calcTotalBasePlates() {
            switch (true) {
                case stairs:
                    return (
                        getNumberOfStandardPairs() *
                            ScaffCalc.innerAndOuterBeam +
                        ScaffCalc.extraStandardsForStairs
                    );
                default:
                    return (
                        getNumberOfStandardPairs() * ScaffCalc.innerAndOuterBeam
                    );
            }
        }
        function calcTotalLedgers73cm() {
            const shortbeamForScaffold = getTotalShortbeam();
            const shortbeamForStairCase =
                getShortbeamPerSection() * ScaffCalc.maxBeamDistance;
            const shortbeamForPlatformLvls =
                ScaffCalc.totalLevelsWithPlatforms * 4;
            const shortbeamForLadderLvls =
                getNumberOfLevels() * 4 - shortbeamForPlatformLvls - 4;
            const shortbeamForStairLvls =
                getNumberOfLevels() * 8 - shortbeamForPlatformLvls - 10;

            switch (true) {
                case ladders && stairs:
                    return (
                        shortbeamForScaffold +
                        shortbeamForStairCase +
                        shortbeamForStairLvls +
                        shortbeamForLadderLvls +
                        shortbeamForPlatformLvls -
                        calcTotalUSupports()
                    );
                case stairs:
                    return (
                        shortbeamForScaffold +
                        shortbeamForStairCase +
                        shortbeamForStairLvls +
                        shortbeamForPlatformLvls -
                        calcTotalUSupports()
                    );
                case ladders:
                    return (
                        shortbeamForScaffold +
                        shortbeamForPlatformLvls +
                        shortbeamForLadderLvls -
                        calcTotalUSupports()
                    );
                default:
                    return (
                        shortbeamForScaffold +
                        shortbeamForPlatformLvls -
                        calcTotalUSupports()
                    );
            }
        }
        function calcTotalUSupports() {
            const uBeamForPlatforms =
                getNumberOfStandardPairs() * getLevelsWithPlatforms();
            const uBeamForStairs =
                (getNumberOfLevels() - ScaffCalc.topAndBottomLevel) * 4 + 2;
            const uBeamForLadders = getNumberOfLevels() * 2;

            switch (true) {
                case ladders && stairs:
                    if (getNumberOfSections() > 1) {
                        return (
                            uBeamForPlatforms + uBeamForStairs + uBeamForLadders
                        );
                    } else {
                        return uBeamForPlatforms + uBeamForStairs;
                    }
                case stairs:
                    return uBeamForPlatforms + uBeamForStairs;
                case ladders:
                    return uBeamForPlatforms + uBeamForLadders;
                default:
                    return uBeamForPlatforms;
            }
        }
        function calcTotalLedgers307cm() {
            const longbeamForScaffold = getLongbeams();
            const longbeamForStairCase = getLongbeamPerSection();
            const longbeamForPlatformGuardRail =
                ScaffCalc.totalLevelsWithPlatforms * getNumberOfSections() * 2;
            let longbeamForLadderLvlGuardRail = 0;
            let longbeamForStairLvlGuardRail = 0;

            if (farfromwall) {
                longbeamForLadderLvlGuardRail =
                    (getNumberOfLevels() - ScaffCalc.bottomLevel) * 4 -
                    ScaffCalc.totalLevelsWithPlatforms * 4;
                longbeamForStairLvlGuardRail =
                    (getNumberOfLevels() - ScaffCalc.bottomLevel) * 2 -
                    ScaffCalc.totalLevelsWithPlatforms * 2;
            } else {
                longbeamForLadderLvlGuardRail =
                    (getNumberOfLevels() - ScaffCalc.bottomLevel) * 2 -
                    ScaffCalc.totalLevelsWithPlatforms * 2;
            }

            switch (true) {
                case ladders && stairs:
                    return (
                        longbeamForScaffold +
                        longbeamForStairCase +
                        (longbeamForPlatformGuardRail - 2) +
                        longbeamForLadderLvlGuardRail +
                        longbeamForStairLvlGuardRail
                    ); // -2 as top level guard rail is a smaller size to const for opening
                case stairs:
                    return (
                        longbeamForScaffold +
                        (longbeamForPlatformGuardRail - 2) +
                        longbeamForStairCase +
                        longbeamForStairLvlGuardRail
                    );
                case ladders:
                    return (
                        longbeamForScaffold +
                        longbeamForPlatformGuardRail +
                        longbeamForLadderLvlGuardRail
                    );
                default:
                    return longbeamForScaffold + longbeamForPlatformGuardRail;
            }
        }
        function calcTotalStaircases() {
            if (stairs) {
                return getNumberOfLevels() - ScaffCalc.topLevel;
            } else {
                return 0;
            }
        }
        function calcTotalStaircaseGuardrails() {
            if (stairs) {
                return (getNumberOfLevels() - ScaffCalc.topLevel) * 2;
            }
            return 0;
        }
        function calcTotalVerticalBraces() {
            const sectionsWithDiagonals =
                Math.floor(getNumberOfSections() - 2) / 5 + 2;
            const levelsWithDiagonals = Math.floor(height / 2);
            const totalDiagonals = sectionsWithDiagonals * levelsWithDiagonals;
            return parseInt(totalDiagonals);
        }
        function calcTotalAnchors() {
            return parseInt(getAnkers2m() + getAnkers4m() + getOuterAnkers());
        }
        function calcTotalSteelDecks() {
            const platformsForStairLvl =
                (getNumberOfLevels() - ScaffCalc.topAndBottomLevel) * 2;
            const replacedPlatformsWithLadder =
                ScaffCalc.totalLevelsWithPlatforms * 2;
            const platformsForStaircase =
                (getNumberOfLevels() - ScaffCalc.topAndBottomLevel) * 2;

            switch (true) {
                case stairs && ladders:
                    return (
                        getPlatforms() -
                        replacedPlatformsWithLadder +
                        platformsForStairLvl
                    );
                case stairs:
                    return getPlatforms() + platformsForStaircase;
                case ladders:
                    return getPlatforms() - replacedPlatformsWithLadder;
                default:
                    return getPlatforms();
            }
        }
        function calcTotalToeboards307cm() {
            const toeboardsOnPlatformLvls =
                getNumberOfSections() * ScaffCalc.totalLevelsWithPlatforms;
            let toeboardsOnLadderLvls =
                getNumberOfLevels() - ScaffCalc.topAndBottomLevel;
            let toeboardsOnStairsLvls =
                getNumberOfLevels() - ScaffCalc.topAndBottomLevel;

            if (farfromwall) {
                toeboardsOnLadderLvls =
                    (getNumberOfLevels() - ScaffCalc.topAndBottomLevel) * 2;
                toeboardsOnStairsLvls =
                    (getNumberOfLevels() - ScaffCalc.topAndBottomLevel) * 2;
            } else {
                toeboardsOnLadderLvls =
                    getNumberOfLevels() - ScaffCalc.topAndBottomLevel;
                toeboardsOnStairsLvls =
                    getNumberOfLevels() - ScaffCalc.topAndBottomLevel;
            }

            switch (true) {
                case stairs && ladders:
                    return (
                        toeboardsOnPlatformLvls +
                        toeboardsOnLadderLvls +
                        toeboardsOnStairsLvls
                    );
                case stairs:
                    return toeboardsOnPlatformLvls + toeboardsOnStairsLvls;
                case ladders:
                    return toeboardsOnPlatformLvls + toeboardsOnLadderLvls;
                default:
                    return toeboardsOnPlatformLvls;
            }
        }
        function calcTotalToeboards73cm() {
            const endToeboardsOnPlatformLvls = getLevelsWithPlatforms() * 2;
            const endToeboardsOnStairsLvls =
                (getNumberOfLevels() - ScaffCalc.topAndBottomLevel) * 4 +
                ScaffCalc.topLevel;
            let endToeBoardsOnLadderLvls = 0;

            //Avoid doubling if ladders and stairs are in same section
            if (getNumberOfSections() > 2) {
                endToeBoardsOnLadderLvls =
                    (getNumberOfLevels() - ScaffCalc.topAndBottomLevel) * 2;
            }
            switch (true) {
                case stairs && ladders:
                    return (
                        endToeboardsOnPlatformLvls +
                        endToeBoardsOnLadderLvls +
                        endToeboardsOnStairsLvls
                    );
                case stairs:
                    return (
                        endToeboardsOnPlatformLvls + endToeboardsOnStairsLvls
                    );
                case ladders:
                    return (
                        endToeboardsOnPlatformLvls + endToeBoardsOnLadderLvls
                    );
                default:
                    return endToeboardsOnPlatformLvls;
            }
        }
        function calcTotalLedgers207cm() {
            if (stairs) {
                return 2;
            } else {
                return 0;
            }
        }
        function calcTotalSpigotCoupler() {
            if (stairs) {
                return 1;
            } else {
                return 0;
            }
        }
        function calcTotalAccessDecks() {
            if (ladders) {
                return getNumberOfLevels();
            } else {
                return 0;
            }
        }
        function calcTotalToeboardBrackets() {
            const toeboardKonsolPlatformLvls =
                (getNumberOfStandardPairs() + ScaffCalc.outerSection) *
                ScaffCalc.totalLevelsWithPlatforms;
            let toeboardKonsolStairLvls = 0;
            let toeboardKonsolLadderLvls = 0;

            if (farfromwall) {
                toeboardKonsolStairLvls =
                    (getNumberOfLevels() -
                        ScaffCalc.totalLevelsWithPlatforms -
                        ScaffCalc.bottomLevel) *
                    6;
                toeboardKonsolLadderLvls =
                    (getNumberOfLevels() -
                        ScaffCalc.totalLevelsWithPlatforms -
                        ScaffCalc.bottomLevel) *
                    6;
            } else {
                toeboardKonsolLadderLvls =
                    (getNumberOfLevels() -
                        ScaffCalc.totalLevelsWithPlatforms -
                        ScaffCalc.bottomLevel) *
                    4;
                toeboardKonsolStairLvls =
                    (getNumberOfLevels() -
                        ScaffCalc.totalLevelsWithPlatforms -
                        ScaffCalc.bottomLevel) *
                    4;
            }

            switch (true) {
                case stairs && ladders:
                    return (
                        toeboardKonsolPlatformLvls +
                        toeboardKonsolLadderLvls +
                        toeboardKonsolStairLvls
                    );
                case stairs:
                    return toeboardKonsolPlatformLvls + toeboardKonsolStairLvls;
                case ladders:
                    return (
                        toeboardKonsolPlatformLvls + toeboardKonsolLadderLvls
                    );
                default:
                    return toeboardKonsolPlatformLvls;
            }
        }
        function calcScaffoldingPallets() {
            const totalStandards =
                calcTotalStandards100cm() +
                calcTotalStandards200cm() +
                calcTotalStandards300cm();
            const totalLedgers =
                calcTotalLedgers207cm() + calcTotalLedgers307cm();
            const verticalBraces = calcTotalVerticalBraces();
            const guardrails = calcTotalStaircaseGuardrails();
            const toeboards = calcTotalToeboards307cm();
            
            return Math.ceil((totalStandards + totalLedgers + verticalBraces + guardrails + toeboards)/60);
            
        }

        return {
            starting_collars: calcTotalStartCollars(),
            base_plates: calcTotalBasePlates(),
            standards100cm: calcTotalStandards100cm(),
            standards200cm: calcTotalStandards200cm(),
            standards300cm: calcTotalStandards300cm(),
            ledgers207cm: calcTotalLedgers207cm(),
            ledgers307cm: calcTotalLedgers307cm(),
            ledgers73cm: calcTotalLedgers73cm(),
            u_supports73cm: calcTotalUSupports(),
            vertical_braces: calcTotalVerticalBraces(),
            steeldecks: calcTotalSteelDecks(),
            accessdecks: calcTotalAccessDecks(),
            toeboards307cm: calcTotalToeboards307cm(),
            toeboards73cm: calcTotalToeboards73cm(),
            toeboard_brackets: calcTotalToeboardBrackets(),
            anchors: calcTotalAnchors(),
            couplers_swivel: 0,
            couplers_fixed: calcTotalAnchors(),
            staircases: calcTotalStaircases(),
            staircase_guardrails: calcTotalStaircaseGuardrails(),
            spigot_coupler: calcTotalSpigotCoupler(),
            scaffolding_pallets: calcScaffoldingPallets(),
        };
    }
}
export default ScaffCalc;
