export const recipes = [
    {
      name: "Forradalmi vérbúza",
      brewed: 1,
      link: "forradalmi_verbuza",
      ingredients: {
        malts: ["4kg búza maláta", "2kg Maris Otter"],
        hops: ["30g Hallertau Mittelfruh"],
        spieces: ["10g Kuraso narancshéj", "25g koriander"],
        yeast: "-"
      },
      thermal_steps: [
        "30°C mash in",
        "35°C 20 perc",
        "50°C 25 perc",
        "63°C 40 perc",
        "70°C 20 perc",
        "75°C máslás"
      ],
      boiling: [
        "60-90 perc: 30g Hallertau",
        "Forralás utolsó 10 perceben: 10g kuraso narancshéj, 25g koriander"
    ]
    },
    {
      name: "Búza",
      brewed: 1,
      link: "buza",
      ingredients: {
        malts: ["3kg pilsner", "3kg búza maláta"],
        hops: ["40g Hallertau Mittelfruh"],
        spieces: ["11g Kuraso narancshéj", "30g koriander"],
        yeast: "-"
      },
      thermal_steps: [
        "30°C mash in",
        "35°C 20 perc",
        "50°C 25 perc",
        "63°C 40 perc",
        "70°C 20 perc",
        "75°C máslás"
      ],
      boiling: [
        "60-90 perc: 40g Hallertau",
        "Forralás utolsó 10 perceben: 10g kuraso narancshéj, 25g koriander"
    ]
    },
    {
      name: "Russian Imperial Stout",
      brewed: 2,
      link: "russian_imperial_stout",
      ingredients: {
        malts: ["6kg Vienna", "0,6kg pörkölt malátázatlan árpa", "0,2kg Caramunich type II", "20-30dkg zabpehely"],
        hops: ["35g Colombus/Warrior"],
        spieces: ["10g Ír moszat"],
        yeast: "Mangrove Jack Pale Ale"
      },
      thermal_steps: [
        "50°C mash in 20 liter",
        "50°C 15 perc",
        "62°C 60 perc",
        "69°C 20 perc",
        "75°C máslás 15 liter"
      ],
      boiling: [
        "70 perc: 30g Colombus/Warrior",
        "Forralás utolsó 10 perceben: 10g Ír moszat"
    ]
    },
    {
        name: "Szimpla IPA",
        brewed: 1,
        link: "szimpla_ipa",
        ingredients: {
          malts: ["4,3kg Münich I."],
          hops: ["60g Citra"],
          spieces: ["-"],
          yeast: "Fermentis US-05"
        },
        thermal_steps: [
          "48°C mash in 12,9 liter",
          "67°C 60 perc",
          "78°C 10 perc",
          "78°C máslás 10 liter"
        ],
        boiling: [
          "60 perc: 9g Citra",
          "30 perc: 9g Citra",
          "10 perc: 9g Citra",
          "5 perc: 9g Citra",
          "Forralás végén: 9g Citra",
          "Hidegkomlózás 10 napig az elsődleges erjedés után: 15g Citra"
      ]
      },
  ]