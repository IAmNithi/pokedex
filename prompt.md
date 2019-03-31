# Pokédex Builder

### Overview
The poké world is a vast world and there are many species yet to be discovered. Build a pokédex that gives users access to a collection information for already discovered pokémon and also gives them the ability to add fields of their own for newly discovered pokémon.

## Phase 1
1. Using the `pokédex.json` file to render the list of pokémon's names.
2. Give a user the ability to click on each pokémon's name to show more details for pokémon. There are a lot of attributes listed in the `pokédex.json` file. The only attributes we care to see are:
  - name
  - type(s)
  - attack level (listed under base)
  - defense level (listed under base)

## Phase 2
1. Give users the ability to update current pokémon in the system.
2. Create a user interface that gives users the ability to add new pokémon and new attributes.

```
# For example, let's say a user wants to add a description along with the new pokémon's information. Give the user the ability to do this. Do not worry about persisting the data on a refresh.

Example Data:

Current pokémon = {
  name: "Jigglypuff",
  type: "normal",
  attack_level: "20",
  defense_level: "80"
}

New pokémon = {
  name: "Pugglypuff",
  type: "normal, fighting",
  attack_level: "120",
  defense_level: "90"
  description: "Pugglypuff is the evolved form of Wigglypuff. Pugglypuff has pug-like characteristics. Pugglypuff likes to use 'lick' to paralyze their opponents.",
}
```

## Phase 3
1. Create a search bar that allows a user to find a pokémon by name.
2. Autofill suggestions for the search bar.

# Bonus Phases
If you have time, please feel free to improve on your application with any of the phases below or have fun with it and implement features that you would like to add.

1. Allow the search bar to look for pokémon by a specific type(s). For example, if a user inputs "Poison Dragon", have the search bar looks for pokémon with both types included in their data.
2. Give the option to delete pokémon with an id greater than 151, because we only care about the first 151 pokémon.
3. Make the UI more user friendly or fun looking.
