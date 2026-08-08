# Light Entity Card

<p align="center">
<img src="https://img.shields.io/github/stars/ljmerza/light-entity-card?style=for-the-badge&label=Stars&color=orange" alt="Stars">
<a href="https://github.com/ljmerza/light-entity-card/releases"><img src="https://img.shields.io/github/downloads/ljmerza/light-entity-card/total?style=for-the-badge&label=Downloads&color=blue" alt="Downloads"></a>
<a href="https://github.com/ljmerza/light-entity-card/releases/latest"><img src="https://img.shields.io/github/v/release/ljmerza/light-entity-card?style=for-the-badge&color=purple" alt="Version"></a>
<a href="https://github.com/ljmerza/light-entity-card/actions/workflows/deploy.yaml"><img src="https://img.shields.io/github/actions/workflow/status/ljmerza/light-entity-card/deploy.yaml?style=for-the-badge&label=Build" alt="Build"></a>
<a href="https://github.com/ljmerza/light-entity-card/blob/master/LICENSE"><img src="https://img.shields.io/github/license/ljmerza/light-entity-card?style=for-the-badge&label=License&color=green" alt="License"></a>
<a href="https://github.com/hacs/integration"><img src="https://img.shields.io/badge/HACS-Default-41BDF5?style=for-the-badge" alt="HACS Default"></a>
</p>

<p align="center">
<a href="https://www.buymeacoffee.com/JMISm06AD"><img src="https://img.shields.io/badge/Buy%20Me%20A%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me A Coffee"></a>
</p>

Control any light/switch entity through lovelace

## Support

For help, visit the light entity support thread [here](https://community.home-assistant.io/t/light-entity-card/96146)

<img src='https://raw.githubusercontent.com/ljmerza/light-entity-card/master/card.png' />

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

Issues with the installation should be asked in the [Home Assistant forums](https://community.home-assistant.io/t/light-entity-card/96146)

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
| show_header_icon     | boolean             | **Optional** | `false` shows the entity icon of the card including toggle                  |
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
