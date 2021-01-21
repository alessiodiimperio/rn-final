import ScaffCalc from "./ScaffoldingCalculator";
var uuid = require("react-native-uuid");
const strings = {
    //Parts
    parts_starting_collars_title: "Starting collar",
    parts_standards100cm_title: "Standards 1m",
    parts_standards200cm_title: "Standards 2m",
    parts_standards300cm_title: "Standards 3m",
    parts_ledgers307cm_title: "Ledger 3m",
    parts_ledgers207cm_title: "Ledger 2m",
    parts_ledgers73cm_title: "Short Ledger",
    parts_u_supports_title: "U-Support",
    parts_vertical_braces_title: "Vertical brace",
    parts_steeldecks_title: "Steel deck",
    parts_accessdecks_title: "Access deck",
    parts_toeboards307cm_title: "Toeboard",
    parts_toeboards73cm_title: "Short toeboard",
    parts_toeboard_connectors: "Toeboard connector",
    parts_toeboard_brackets_title: "Toebard brackets",
    parts_base_plates_title: "Baseplate",
    parts_deck_retainers_title: "Deck retainer",
    parts_couplers_fixed_title: "Fixed coupler",
    parts_couplers_swivel_title: "Swivel coupler",
    parts_anchors_title: "Anchors - Scaffoldtie & Eyebolt",
    parts_scaffolding_pallets_title: "Stacking pallets",
    parts_lattice_girders300cm_title: "Lattice girder 3m",
    parts_lattice_girders400cm_title: "Lattice girder 4m",
    parts_staircases_title: "Staircase",
    parts_staircase_guardrails_title: "Guardrail for staircase",
    parts_spigot_coupler_title: "Support spigot for ledger with coupler",
    parts_girder_spigot_title: "Connecting spigot for lattice girder",
    parts_girder_spigot_bolt_title: "Lock for connecting spigot",
};

class ScaffBuilder {
    static heightOptions = [
        { key: "2", text: "2m", value: 2 },
        { key: "3", text: "3m", value: 3 },
        { key: "4", text: "4m", value: 4 },
        { key: "5", text: "5m", value: 5 },
        { key: "6", text: "6m", value: 6 },
        { key: "7", text: "7m", value: 7 },
        { key: "8", text: "8m", value: 8 },
        { key: "9", text: "9m", value: 9 },
        { key: "10", text: "10m", value: 10 },
    ];
    static widthOptions = [
        { key: "1", text: "3.07m", value: 3.07 },
        { key: "2", text: "6.14m", value: 6.14 },
        { key: "3", text: "9.21m", value: 9.21 },
        { key: "4", text: "12.28m", value: 12.28 },
        { key: "5", text: "15.35m", value: 15.35 },
        { key: "6", text: "18.42m", value: 18.42 },
        { key: "7", text: "21.49m", value: 21.49 },
        { key: "8", text: "24.56m", value: 24.56 },
        { key: "9", text: "27.63m", value: 27.63 },
        { key: "10", text: "30.70m", value: 30.7 },
    ];
    static getScaffoldingObject(scaffOptions) {
        const {
            title,
            height,
            width,
            stairs,
            ladders,
            farfromwall,
        } = scaffOptions;
        return {
            id: uuid.v4(),
            type: "scaffolding",
            title: title,
            height: height,
            width: width,
            stairs: stairs ?? false,
            ladders: ladders ?? false,
            farfromwall: farfromwall ?? false,
            parts: ScaffBuilder.getScaffoldingParts(scaffOptions),
        };
    }
    static getScaffoldingParts(scaffOptions) {
        const scaffolding = ScaffCalc.calcScaffolding(scaffOptions);
        let parts = [];
        const startingCollars = {
            tag: "starting_collars",
            title: strings.parts_starting_collars_title,
            image: "./assets/DetailThumbnails/startkrans.png",
            qty: scaffolding.starting_collars,
            unit_kg_weight: 1.5,
        };
        if (scaffolding.starting_collars > 0) {
            parts.push(startingCollars);
        }
        const basePlates = {
            tag: "base_plates",
            title: strings.parts_base_plates_title,
            image: "./assets/DetailThumbnails/bottenskruv.png",
            qty: scaffolding.base_plates,
            unit_kg_weight: 4.3,
        };
        if (scaffolding.base_plates > 0) {
            parts.push(basePlates);
        }
        const standards100Cm = {
            tag: "standards100cm",
            title: strings.parts_standards100cm_title,
            image: "./assets/DetailThumbnails/spira.png",
            qty: scaffolding.standards100cm,
            unit_kg_weight: 5.4,
        };
        if (scaffolding.standards100cm > 0) {
            parts.push(standards100Cm);
        }
        const standards200Cm = {
            tag: "standards200cm",
            title: strings.parts_standards200cm_title,
            image: "./assets/DetailThumbnails/spira.png",
            qty: scaffolding.standards200cm,
            unit_kg_weight: 9.9,
        };
        if (scaffolding.standards200cm > 0) {
            parts.push(standards200Cm);
        }
        const standards300Cm = {
            tag: "standards300cm",
            title: strings.parts_standards300cm_title,
            image: "./assets/DetailThumbnails/spira.png",
            qty: scaffolding.standards300cm,
            unit_kg_weight: 14.4,
        };
        if (scaffolding.standards300cm > 0) {
            parts.push(standards300Cm);
        }
        const ledgers207Cm = {
            tag: "ledgers207cm",
            title: strings.parts_ledgers207cm_title,
            image: "./assets/DetailThumbnails/langbalk.png",
            qty: scaffolding.ledgers207cm,
            unit_kg_weight: 7.2,
        };
        if (scaffolding.ledgers207cm > 0) {
            parts.push(ledgers207Cm);
        }
        const ledgers307Cm = {
            tag: "ledgers307cm",
            title: strings.parts_ledgers307cm_title,
            image: "./assets/DetailThumbnails/langbalk.png",
            qty: scaffolding.ledgers307cm,
            unit_kg_weight: 10.3,
        };
        if (scaffolding.ledgers307cm > 0) {
            parts.push(ledgers307Cm);
        }

        const ledgers73Cm = {
            tag: "ledgers73cm",
            title: strings.parts_ledgers73cm_title,
            image: "./assets/DetailThumbnails/kortbalk.png",
            qty: scaffolding.ledgers73cm,
            unit_kg_weight: 3,
        };
        if (scaffolding.ledgers73cm > 0) {
            parts.push(ledgers73Cm);
        }
        const uSupports = {
            tag: "usupports",
            title: strings.parts_u_supports_title,
            image: "./assets/DetailThumbnails/ukortbalk.png",
            qty: scaffolding.u_supports73cm,
            unit_kg_weight: 3.1,
        };
        if (scaffolding.u_supports73cm > 0) {
            parts.push(uSupports);
        }
        const verticalBraces = {
            tag: "verticalbraces",
            title: strings.parts_vertical_braces_title,
            image: "./assets/DetailThumbnails/diagonal.png",
            qty: scaffolding.vertical_braces,
            unit_kg_weight: 20.1,
        };
        if (scaffolding.vertical_braces > 0) {
            parts.push(verticalBraces);
        }
        const steelDecks = {
            tag: "steeldecks",
            title: strings.parts_steeldecks_title,
            image: "./assets/DetailThumbnails/stalplank.png",
            qty: scaffolding.steeldecks,
            unit_kg_weight: 20.1,
        };
        if (scaffolding.steeldecks > 0) {
            parts.push(steelDecks);
        }
        const accessDecks = {
            tag: "accessdecks",
            title: strings.parts_accessdecks_title,
            image: "./assets/DetailThumbnails/ladders.png",
            qty: scaffolding.accessdecks,
            unit_kg_weight: 28.5,
        };
        if (scaffolding.accessdecks > 0) {
            parts.push(accessDecks);
        }
        const toeBoards307Cm = {
            tag: "toeboards307cm",
            title: strings.parts_toeboards307cm_title,
            image: "./assets/DetailThumbnails/sparklist.png",
            qty: scaffolding.toeboards307cm,
            unit_kg_weight: 5.9,
        };
        if (scaffolding.toeboards307cm > 0) {
            parts.push(toeBoards307Cm);
        }
        const toeBoards73Cm = {
            tag: "toeboards73cm",
            title: strings.parts_toeboards73cm_title,
            image: "./assets/DetailThumbnails/andsparklist.png",
            qty: scaffolding.toeboards73cm,
            unit_kg_weight: 1.6,
        };
        if (scaffolding.toeboards73cm > 0) {
            parts.push(toeBoards73Cm);
        }
        const toeBoardBrackets = {
            tag: "toeboard_brackets",
            title: strings.parts_toeboard_brackets_title,
            image: "./assets/DetailThumbnails/sparklistkonsol.png",
            qty: scaffolding.toeboard_brackets,
            unit_kg_weight: 1.1,
        };
        if (scaffolding.toeboard_brackets > 0) {
            parts.push(toeBoardBrackets);
        }
        const anchors = {
            tag: "anchors",
            title: strings.parts_anchors_title,
            image: "./assets/DetailThumbnails/ankare.png",
            qty: scaffolding.anchors,
            unit_kg_weight: 4.0,
        };
        if (scaffolding.anchors > 0) {
            parts.push(anchors);
        }
        const couplersSwivel = {
            tag: "coupler_swivel",
            title: strings.parts_couplers_swivel_title,
            image: "./assets/DetailThumbnails/vridkoppling.png",
            qty: scaffolding.couplers_swivel,
            unit_kg_weight: 1.2,
        };
        if (scaffolding.couplers_swivel > 0) {
            parts.push(couplersSwivel);
        }
        const couplersFixed = {
            tag: "coupler_fixed",
            title: strings.parts_couplers_fixed_title,
            image: "./assets/DetailThumbnails/fastkoppling.png",
            qty: scaffolding.couplers_fixed,
            unit_kg_weight: 1,
        };
        if (scaffolding.couplers_fixed > 0) {
            parts.push(couplersFixed);
        }
        const staircase = {
            tag: "staircase",
            title: strings.parts_staircases_title,
            image: "./assets/DetailThumbnails/stairs.png",
            qty: scaffolding.staircases,
            unit_kg_weight: 32.5,
        };
        if (scaffolding.staircases > 0) {
            parts.push(staircase);
        }
        const stairCaseGuardRails = {
            tag: "staircase_guardrails",
            title: strings.parts_staircase_guardrails_title,
            image: "./assets/DetailThumbnails/handledare.png",
            qty: scaffolding.staircase_guardrails,
            unit_kg_weight: 12.2,
        };
        if (scaffolding.staircase_guardrails > 0) {
            parts.push(stairCaseGuardRails);
        }
        const spigotCoupler = {
            tag: "spigot_coupler",
            title: strings.parts_spigot_coupler_title,
            image: "./assets/DetailThumbnails/spirstart.png",
            qty: scaffolding.spigot_coupler,
            unit_kg_weight: 1.6,
        };
        if (scaffolding.spigot_coupler > 0) {
            parts.push(spigotCoupler);
        }
        const scaffoldPallets = {
            tag: "scaff_pallets",
            title: strings.parts_scaffolding_pallets_title,
            image: "./assets/DetailThumbnails/stallningshack.png",
            qty: scaffolding.scaffolding_pallets,
            unit_kg_weight: 33.6,
        };
        if (scaffolding.scaffolding_pallets > 0) {
            parts.push(scaffoldPallets);
        }
        return parts;
    }
}
export default ScaffBuilder;
