export const brewings = [
    {
        info: {
            id: 1,
            beer_name: "Test name",
            brew_date: "2025.05.16",
        },
        brewing: {
            preboil_gr: 1035,
            preboil_v: 28,
            postboil_v: 23,
            original_gr: 1055,
            water_ph: 5.4,
            water_chemistry: ["4g gypsum"],
            aeration_type: "shake",
            aeration_duration: 1,
            pitching_method: "rehydrated",
            yeast_type: "Lallemand New England",
        },
        fermentation: {
            gravity_4_days: 1030,
            gravity_6_days: 1020,
            final_gravity: 1007,
            temp: ["20°C first 4 days", "22°C last 3 days"],
            worth_ph: 5.2,
            abv: 5.6,
            cold_hop_date: "2025.05.26",
            cold_hop_length: 3,
        },
        bottling: {
            bottling_date: "2025.05.29",
            bottles_filled: 57,
            sugar_per_bottle: 2.5,
        }
    },
    {
        info: {
            id: 2,
            beer_name: "Test name2",
            brew_date: "2025.05.16",
        },
        brewing: {
            preboil_gr: 1035,
            preboil_v: 28,
            postboil_v: 23,
            original_gr: 1055,
            water_ph: 5.4,
            water_chemistry: ["4g gypsum"],
            aeration_type: "shake",
            aeration_duration: 1,
            pitching_method: "rehydrated",
            yeast_type: "Lallemand New England",
        },
        fermentation: {
            gravity_4_days: 1030,
            gravity_6_days: 1020,
            final_gravity: 1007,
            temp: ["20°C first 4 days", "22°C last 3 days"],
            worth_ph: 5.2,
            abv: 5.6,
            cold_hop_date: "2025.05.26",
            cold_hop_length: 3,
        },
        bottling: {
            bottling_date: "2025.05.29",
            bottles_filled: 57,
            sugar_per_bottle: 2.5,
        }
    },
    {
        info: {
            id: 3,
            beer_name: "Hop Samurai",
            brew_date: "2025.08.24",
        },
        brewing: {
            preboil_gr: 1043,
            preboil_v: 27.5,
            postboil_v: 24.5,
            original_gr: 1050,
            water_ph: 5.4,
            water_chemistry: ["2,8g gypsum"],
            aeration_type: "pumped",
            aeration_duration: 0,
            pitching_method: "dry pitch",
            yeast_type: "Mangrove Jack's M66 Hophead",
        },
        fermentation: {
            gravity_4_days: 1026,
            gravity_6_days: null,
            final_gravity: 1011,
            temp: [""],
            worth_ph: null,
            abv: null,
            cold_hop_date: "2025.09.01",
            cold_hop_length: null,
        },
        bottling: {
            bottling_date: "",
            bottles_filled: null,
            sugar_per_bottle: null,
        }
    }
]