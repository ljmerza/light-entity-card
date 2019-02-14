<h1 align="center">Light Entity Card</h1>
<h4 align="center">Control any light/switch entity through lovelace</h4>

<p align="center">
  <img src='https://i.imgur.com/5An8qQD.png' />
</p>

<h2>Features</h2>

* Works on any light and switch based entity
* Toggle on/off
* HS Color wheel
* Color temperature and white value support
* Support for configured language
* Compact card support for grouped entities
* use `persist_features: true` to always show entity features
* use `effects_list` to add custom effects list or use `input_select` entity

<h2>Track Updates</h2>

This custom card can be tracked with the help of [custom-updater](https://github.com/custom-components/custom_updater).

In your configuration.yaml

```yaml
custom_updater:
  card_urls:
    - https://raw.githubusercontent.com/ljmerza/light-entity-card/master/custom_updater.json
```

<h1>Usage</h1>

```yaml
- type: custom:light-entity-card
  entity: light.downstairs
```

<h2>Options</h2>

| Name | Type | Requirement | `Default value` Description
| ---- | ---- | ------- | -----------
| type | string | **Required** | `custom:light-entity-card`
| entity | string | **Required** | The entity name of the light entity to control
| group | boolean | **Optional** | `false` Compacts card
| persist_features | boolean | **Optional** | `false` always show entity features
| effects_list | list or string | **Optional** | custom list of effects or an input_select entity

<h2>Configuration</h2>
Go to your config directory and create a www folder. Inside the www run

```bash
git clone https://github.com/ljmerza/light-entity-card.git
```

In your ui-lovelace.yaml

```yaml
resources:
  - url: /local/light-entity-card/light-entity-card.js?v=1.3.1
    type: js
```

Example lovelace configurations:

```yaml
views:
  - type: custom:light-entity-card
    entity: light.downstairs
```

```yaml
views:
  - type: custom:light-entity-card
    entity: light.downstairs
    effects_list:
      - effect1
      - effect2
```

```yaml
views:
  - type: custom:light-entity-card
    entity: light.downstairs
    effects_list: input_select.custom_effect_list
```

```yaml
views:
  - type: custom:light-entity-card
    entity: light.downstairs
    group: true
    persist_features: true
```
