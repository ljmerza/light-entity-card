<h1 align="center">Light Entity Card</h1>
<h4 align="center">Control any light entity through lovelace</h4>

<p align="center">
  <img src='https://i.imgur.com/5An8qQD.png' />
</p>

<h2>Features</h2>

* Works on any light based entity
* Toggle on/off
* HS Color wheel
* Color temperature and white value support
* Support for configured language

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
  entity: light.led_strip
```

<h2>Options</h2>

| Name | Type | Requirement | `Default value` Description
| ---- | ---- | ------- | -----------
| type | string | **Required** | `custom:light-entity-card`
| entity | string | **Required** | The entity name of the light entity to control

<h2>Configuration</h2>
Go to your config directory and create a www folder. Inside the www run

```bash
git clone https://github.com/ljmerza/light-entity-card.git
```

In your ui-lovelace.yaml

```yaml
resources:
  - url: /local/light-entity-card/light-entity-card.js?v=1.0.0
    type: js
```

Add the custom card to views:

```yaml
views:
  - type: custom:light-entity-card
    entity: light.led_strip
```