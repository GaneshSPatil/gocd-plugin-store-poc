# gocd-plugin-store-poc
a POC for GoCD plugin store


### Prerequisite:

1. Clone GoCD Plugin store:

    `git clone https://github.com/GaneshSPatil/gocd-plugin-store-poc gocd-plugin-store`

2. Checkout GoCD Server plugin-store-poc branch

    `git clone https://github.com/GaneshSPatil/gocd/tree/plugin-store-poc`

3. Start GoCD plugin store

    `gocd-plugin-store$ npm start`

4. Start GoCD server on `plugin-store-poc` branch


### list all plugins:

```
curl 'http://localhost:8153/go/api/admin/plugins/list' \
      -u 'admin:badger' -X GET \
      -H 'Accept: application/vnd.go.cd.v1+json' | jq
```

### Install a plugin by specifying plugin id
```
curl 'http://localhost:8153/go/api/admin/plugins/add' \
      -u 'admin:badger' -X POST \
      -H 'Accept: application/vnd.go.cd.v1+json' \
      -H 'Content-Type: application/json' \
      -d '{ "id": "plugin_id_1"}'
```


### Uninstall a plugin by specifying plugin id
```
curl 'http://localhost:8153/go/api/admin/plugins/remove' \
      -u 'admin:badger' -X POST \
      -H 'Accept: application/vnd.go.cd.v1+json' \
      -H 'Content-Type: application/json' \
      -d '{ "id": "plugin_id_1"}'
```

