import YAML from "json-to-pretty-yaml";

export default function (data) {
  return YAML.stringify(data);
}
