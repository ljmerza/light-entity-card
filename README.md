# Light Entity Card

Control any light/switch entity through lovelace

## Notice
v5 is only compatible from version 2022.3 onwards

## Support

For help, visit the light entity support thread [here](https://community.home-assistant.io/t/light-entity-card/96146)

<img src='https://raw.githubusercontent.com/ljmerza/light-entity-card/master/card.png' />

[![GitHub Release][releases-shield]][releases]
[![License][license-shield]](LICENSE.md)
![Project Maintenance][maintenance-shield]
[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg?style=for-the-badge)](https://github.com/hacs/integration)

## Features

* Works on any light and switch based entity
* Toggle on/off
* HS Color wheel
* Color temperature and white value support
* Support for configured language
* Compact card support for grouped entities
* use `persist_features: true` to always show entity features
* use `effects_list` to add custom effects list or use `input_select` entity
* always show or hide header and each input 

## Installation

Add through  [HACS](https://github.com/custom-components/hacs)

Issues with the installation should be asked in the [Home Asssitant forums](https://community.home-assistant.io/t/light-entity-card/96146)

## Configurations

```yaml
type: custom:light-entity-card
entity: light.downstairs
```

```yaml
type: custom:light-entity-card
entity: light.downstairs
effects_list:
  - effect1
  - effect2
```

```yaml
type: custom:light-entity-card
entity: light.downstairs
effects_list: input_select.custom_effect_list
```

```yaml
type: custom:light-entity-card
entity: light.downstairs
group: true
```

## Options

| Name                 | Type                | Requirement  | `Default value` Description                                                 |
| -------------------- | ------------------- | ------------ | --------------------------------------------------------------------------- |
| type                 | string              | **Required** | `custom:light-entity-card`                                                  |
| entity               | string              | **Required** | The entity name of the light entity to control                              |
| shorten_cards        | boolean             | **Optional** | `false` show a compact version of the card                                  |
| consolidate_entities | boolean             | **Optional** | `false` if entity is a group you can consolidate all entities into one      |
| persist_features     | boolean             | **Optional** | `false` always show entity features                                         |
| effects_list         | list/string/boolean | **Optional** | custom list of effects, an input_select entity, or set false to always hide |
| header               | string              | **Optional** | custom header name                                                          |
| hide_header          | boolean             | **Optional** | `false` hides the entity header of the card including toggle                |
| brightness           | boolean             | **Optional** | `true` show brightness slider if available                                  |
| color_temp           | boolean             | **Optional** | `true` show color temp slider if available                                  |
| white_value          | boolean             | **Optional** | `true` show white value slider if available                                 |
| color_picker         | boolean             | **Optional** | `true` show color picker wheel if available                                 |
| speed                | boolean             | **Optional** | `false` show speed slider if available                                      |
| intensity            | boolean             | **Optional** | `false` show intensity slider if available                                  |
| force_features       | boolean             | **Optional** | `false` force showing all features in card                                  |
| full_width_sliders   | boolean             | **Optional** | `false` makes slider the full width of card                                 |
| brightness_icon      | string              | **Optional** | `weather-sunny` change the brightness slider icon                           |
| white_icon           | string              | **Optional** | `file-word-box` change the white slider icon                                |
| temperature_icon     | string              | **Optional** | `thermometer` change the temperature slider icon                            |
| speed_icon           | string              | **Optional** | `speedometer` change the speed slider icon                                  |
| intensity_icon       | string              | **Optional** | `transit-connection-horizontal` change the intensity slider icon            |
| show_slider_percent  | boolean             | **Optional** | `false` show percent next to sliders                                        |
| child_card           | boolean             | **Optional** | `false` remove padding/margin to make this card within another card         |

---

Enjoy my card? Help me out for a couple of :beers: or a :coffee:!

[![coffee](https://www.buymeacoffee.com/assets/img/custom_images/black_img.png)](https://www.buymeacoffee.com/JMISm06AD)

[commits-shield]: https://img.shields.io/github/commit-activity/y/ljmerza/light-entity-card.svg?style=for-the-badge
[commits]: https://github.com/ljmerza/light-entity-card/commits/master
[license-shield]: https://img.shields.io/github/license/ljmerza/light-entity-card.svg?style=for-the-badge
[maintenance-shield]: https://img.shields.io/badge/maintainer-Leonardo%20Merza%20%40ljmerza-blue.svg?style=for-the-badge
[releases-shield]: https://img.shields.io/github/release/ljmerza/light-entity-card.svg?style=for-the-badge
[releases]: https://github.com/ljmerza/light-entity-card/releases
